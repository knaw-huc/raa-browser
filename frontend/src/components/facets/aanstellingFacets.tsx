import React from "react";
import {FreeTextFacet, ListFacet, SliderFacet, FacetsParams} from '@knaw-huc/browser-base-react';
import {FACET_URL} from "../../misc/config";

export default function AanstellingFacets({registerFacet, unregisterFacet, setFacet, searchValues}: FacetsParams) {
    return <>
        <h2>Aanstellingen</h2>
        <FreeTextFacet registerFacet={registerFacet} unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Periode"
                   field="period"
                   url={FACET_URL + "aanstelling_facet"}
                   flex={false}
                   addFilter={false}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Functie"
                   field="function"
                   url={FACET_URL + "aanstelling_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Instelling"
                   field="institution"
                   url={FACET_URL + "aanstelling_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <SliderFacet min={1428} max={1861} name="Aanstelling van" field="beginjaar" registerFacet={registerFacet}
                     unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <SliderFacet min={1428} max={1861} name="Aanstelling tot" field="eindjaar" registerFacet={registerFacet}
                     unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Vertegenwoordiging"
                   field="locaties.naam"
                   url={FACET_URL + "aanstelling_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Soort vertegenwoordiging"
                   field="locaties.soort"
                   url={FACET_URL + "aanstelling_facet"}
                   flex={false}
                   addFilter={false}
                   usePost={true}
                   searchValues={searchValues}/>
    </>;
}
