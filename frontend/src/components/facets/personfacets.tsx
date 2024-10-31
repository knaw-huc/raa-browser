import React from "react";
import {FreeTextFacet, ListFacet, SliderFacet, FacetsParams} from '@knaw-huc/browser-base-react';
import {FACET_URL} from "../../misc/config";

export default function PersonFacets({registerFacet, unregisterFacet, setFacet, searchValues}: FacetsParams) {
    return <>
        <h2>Personen</h2>
        <FreeTextFacet registerFacet={registerFacet} unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Familienaam"
                   field="geslachtsnaam"
                   url={FACET_URL + "person_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Geboorteplaats"
                   field="geboorteplaats"
                   url={FACET_URL + "person_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <SliderFacet min={1240} max={1840} name="Geboortejaar" field="geboortejaar" registerFacet={registerFacet}
                     unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Plaats overlijden"
                   field="overlijdensplaats"
                   url={FACET_URL + "person_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <SliderFacet min={1280} max={1920} name="Jaar overlijden" field="overlijdensjaar" registerFacet={registerFacet}
                     unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Periode"
                   field="periode"
                   url={FACET_URL + "person_facet"}
                   flex={false}
                   addFilter={false}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Adelijke titel"
                   field="adelijke_titel"
                   url={FACET_URL + "person_facet"}
                   flex={false}
                   addFilter={false}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Academische titel"
                   field="academische_titel"
                   url={FACET_URL + "person_facet"}
                   flex={false}
                   addFilter={false}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Adel"
                   field="adel"
                   url={FACET_URL + "person_facet"}
                   flex={false}
                   addFilter={false}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Functie"
                   field="aanstellingen.functienaam"
                   url={FACET_URL + "person_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Instelling"
                   field="aanstellingen.instellingnaam"
                   url={FACET_URL + "person_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <SliderFacet min={1428} max={1861} name="Aanstelling van" field="aanstellingen.beginjaar" registerFacet={registerFacet}
                     unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <SliderFacet min={1428} max={1861} name="Aanstelling tot" field="aanstellingen.eindjaar" registerFacet={registerFacet}
                     unregisterFacet={unregisterFacet} setFacet={setFacet}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Vertegenwoordiging"
                   field="aanstellingen.locaties.naam"
                   url={FACET_URL + "person_facet"}
                   flex={true}
                   addFilter={true}
                   usePost={true}
                   searchValues={searchValues}/>
        <ListFacet registerFacet={registerFacet}
                   unregisterFacet={unregisterFacet}
                   setFacet={setFacet}
                   name="Soort vertegenwoordiging"
                   field="aanstellingen.locaties.soort"
                   url={FACET_URL + "person_facet"}
                   flex={false}
                   addFilter={false}
                   usePost={true}
                   searchValues={searchValues}/>
    </>;
}
