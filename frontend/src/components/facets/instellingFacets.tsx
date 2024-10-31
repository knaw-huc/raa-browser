import React from "react";
import {FreeTextFacet, ListFacet, SliderFacet, FacetsParams} from '@knaw-huc/browser-base-react';
import {FACET_URL} from "../../misc/config";

export default function InstellingFacets({registerFacet, unregisterFacet, setFacet, searchValues}: FacetsParams) {
    return <>
        <h2>Instellingen</h2>
        <FreeTextFacet registerFacet={registerFacet} unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Periode"
                   field="period"
                   url={FACET_URL + "instelling_facet"}
                   flex={false}
                   addFilter={false}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Functies"
                   field="functies.naam"
                   url={FACET_URL + "instelling_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
    </>;
}
