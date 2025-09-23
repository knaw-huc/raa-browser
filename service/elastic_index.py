import json
import string

from elasticsearch import Elasticsearch
import math


class Index:
    def __init__(self, config):
        self.config = config
        #self.client = Elasticsearch([{"host": self.config["url"], "port": self.config["port"]}])
        self.client = Elasticsearch()

    def no_case(self, str_in):
        str = str_in.strip()
        ret_str = ""
        if (str != ""):
            for char in str:
                ret_str = ret_str + "[" + char.upper() + char.lower() + "]"
        return ret_str + ".*"

    @staticmethod
    def make_matches(searchvalues):
        must_collection = []
        for item in searchvalues:
            if item["field"] == "FREE_TEXT":
                for value in item["values"]:
                    if (value.find("*") + value.find("?") == -2):
                        must_collection.append({"multi_match": {"query": value, "fields": ["*"]}})
                    else:
                        must_collection.append({"wildcard": {"fulltext": {"value": value, "case_insensitive": "true"}
                        }})
            elif item["field"] == "year" or item["field"] == "geboortejaar" or item["field"] == "overlijdensjaar" or item["field"] == "aanstellingen.beginjaar" or item["field"] == "aanstellingen.eindjaar" or item["field"] == "beginjaar" or item["field"] == "eindjaar":
                range_values = item["values"][0]
                r_array = range_values.split('-')
                must_collection.append({"range": {item["field"]: {"gte": r_array[0], "lte": r_array[1]}}})
            else:
                for value in item["values"]:
                    must_collection.append({"match": {item["field"] + ".keyword": value}})
            print(must_collection)
        return must_collection

    def get_facet(self, field, amount, facet_filter, search_values, index):
        terms = {
            "field": field + ".keyword",
            "size": amount,
            "order": {
                "_key": "asc"
            }
        }


        if facet_filter:
            filtered_filter = facet_filter.translate(str.maketrans('', '', string.punctuation))
            filtered_filter = ''.join([f"[{char.upper()}{char.lower()}]" for char in filtered_filter])
            terms["include"] = f'.*{filtered_filter}.*'
        else:
            terms["exclude"] = ""

        body = {
            "size": 0,
            "aggs": {
                "names": {
                    "terms": terms
                }
            }
        }

        if search_values:
            body["query"] = {
                "bool": {
                    "must": self.make_matches(search_values)
                }
            }
        response = self.client.search(index=index, body=body)

        return [{"key": hits["key"], "doc_count": hits["doc_count"]}
                for hits in response["aggregations"]["names"]["buckets"]]

    def get_filter_facet(self, field, amount, facet_filter, index):
        ret_array = []
        response = self.client.search(
            index=index,
            body=
            {
                "query": {
                    "regexp": {
                        field: self.no_case(facet_filter)
                    }
                },
                "size": 0,
                "aggs": {
                    "names": {
                        "terms": {
                            "field": field,
                            "size": 20,
                            "order": {
                                "_count": "desc"
                            }
                        }
                    }
                }
            }
        )
        for hits in response["aggregations"]["names"]["buckets"]:
            buffer = {"key": hits["key"], "doc_count": hits["doc_count"]}
            if facet_filter.lower() in buffer["key"].lower():
                ret_array.append(buffer)
        return ret_array

    def get_nested_facet(self, field, amount, facet_filter):
        ret_array = []
        path = field.split('.')[0]
        response = self.client.search(
            index="sport",
            body=
            {"size": 0, "aggs": {"nested_terms": {"nested": {"path": path}, "aggs": {
                "filter": {"filter": {"regexp": {"$field.raw": "$filter.*"}},
                           "aggs": {"names": {"terms": {"field": "$field.raw", "size": amount}}}}}}}}
        )
        for hits in response["aggregations"]["nested_terms"]["filter"]["names"]["buckets"]:
            buffer = {"key": hits["key"], "doc_count": hits["doc_count"]}
            ret_array.append(buffer)
        return ret_array

    def browse_instelling(self, page, length, search_values):
        int_page = int(page)
        start = (int_page - 1) * length

        if search_values:
            query = {
                "bool": {
                    "must": self.make_matches(search_values)
                }
            }
        else:
            query = {
                "match_all": {}
            }

        response = self.client.search(index="instelling", body={
            "query": query,
            "size": length,
            "from": start,
            "_source": ["id", "naam", "period"],
            "sort": [
                {"naam.keyword": {"order": "asc"}}
            ]
        })

        return {"amount": response["hits"]["total"]["value"],
                "pages": math.ceil(response["hits"]["total"]["value"] / length),
                "items": [item["_source"] for item in response["hits"]["hits"]]}

    def browse_persons(self, page, length, search_values):
        int_page = int(page)
        start = (int_page - 1) * length

        if search_values:
            query = {
                "bool": {
                    "must": self.make_matches(search_values)
                }
            }
        else:
            query = {
                "match_all": {}
            }

        response = self.client.search(index="persoon", body={
            "query": query,
            "size": length,
            "from": start,
            "_source": ["id", "geslachtsnaam", "voornaam", "tussenvoegsel", "geboortejaar", "overlijdensjaar"],
            "sort": [
                {"geslachtsnaam.keyword": {"order": "asc"}},
                {"voornaam.keyword": {"order": "asc"}}
            ]
        })

        return {"amount": response["hits"]["total"]["value"],
                "pages": math.ceil(response["hits"]["total"]["value"] / length),
                "items": [item["_source"] for item in response["hits"]["hits"]]}

    def get_person_details(self, id):
        query = {
            "match": {"id.keyword": id}
        }

        response = self.client.search(index="persoon", body={
            "query": query})

        return {"amount": response["hits"]["total"]["value"],
                "items": [item["_source"] for item in response["hits"]["hits"]]}

    def get_instelling_details(self, id):
        query = {
            "match": {"id.keyword": id}
        }

        response = self.client.search(index="instelling", body={
            "query": query})

        return {"amount": response["hits"]["total"]["value"],
                "items": [item["_source"] for item in response["hits"]["hits"]]}



    def browse_aanstelling(self, page, length, search_values):
        int_page = int(page)

        start = (int_page - 1) * length

        if search_values:
            query = {
                "bool": {
                    "must": self.make_matches(search_values)
                }
            }
        else:
            query = {
                "match_all": {}
            }

        response = self.client.search(index="aanstelling", body={
            "query": query,
            "size": length,
            "from": start,
            "_source": ["id", "function", "beginjaar", "eindjaar", "institution", "instelling_id", "person_name", "persoon_id", "opmerkingen", "locaties"],
            "sort": [
                {"function.keyword": {"order": "asc"}}
            ]
        })

        return {"amount": response["hits"]["total"]["value"],
                "pages": math.ceil(response["hits"]["total"]["value"] / length),
                "items": [item["_source"] for item in response["hits"]["hits"]]}
