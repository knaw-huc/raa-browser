import React from "react";
import {IPersonAanstelling, IPersonDetails, IPersonDetailStruc} from "../../misc/interfaces";
import {useNavigate} from 'react-router-dom';
import {fullPerson, fd} from "../../misc/functions";
import TextFieldRow from "../pageElements/textFieldRow";
import TextFieldColumn from "../pageElements/textFieldColumn";
import PersoonAanstelling from "../pageElements/persoonAanstelling";

export default function PersonDetail({data}: {data: IPersonDetailStruc}) {
    const nav = useNavigate();
    const OK: boolean = data.amount === 1;
    let person: IPersonDetails = {
        adel: "",
        academische_titel: "",
        adelijke_titel: "",
        adelijketitel_id: "",
        adelspredicaat: "",
        geboortejaar: "",
        geboortedatum: "",
        geboorteplaats: "",
        geslachtsnaam: "",
        heerlijkheid: "",
        id: "",
        opmerkingen: "",
        overlijdensjaar: "",
        overlijdensdatum: "",
        overlijdensplaats: "",
        periode: "",
        tussenvoegsel: "",
        voornaam: "",
        aanstellingen: []
    }
    if (OK) {person = data.items[0] as IPersonDetails;}

    return (

            <div className="hcContentContainer">
                <div className="hcBasicSideMargin">
                    <div className="justify hcMarginBottom1">
                        {OK ? (<div className="detailView">
                                <h2>{fullPerson(person as IPersonDetails)}</h2>
                                <TextFieldRow label="Geslachtsnaam" text={person.geslachtsnaam}/>
                                <TextFieldRow label="Voornamen" text={person.voornaam}/>
                                <TextFieldRow label="Tussenvoegsel" text={person.tussenvoegsel}/>
                                <TextFieldRow label="Adelijke titel" text={person.adelijke_titel}/>
                                <TextFieldRow label="Academische titel" text={person.academische_titel}/>
                                <TextFieldRow label="Geboortedatum" text={fd(person.geboortedatum) as string }/>
                                <TextFieldRow label="Geboorteplaats" text={person.geboorteplaats}/>
                                <TextFieldRow label="Datum overlijden" text={fd(person.overlijdensdatum) as string}/>
                                <TextFieldRow label="Plaats van overlijden" text={person.overlijdensplaats}/>
                                <TextFieldColumn label="Opmerkingen" text={person.opmerkingen}/>
                                <div className="detailColumnLabel hcMarginTop1">Aanstellingen</div>
                            {person.aanstellingen.length > 0 ? (
                                <div>
                                    {person.aanstellingen.map((item, index) => {
                                        return (<div>
                                            <PersoonAanstelling key={index} aanstelling={item}/>
                                        </div>)
                                    })}
                                </div>
                                    ) : (
                                <div>Geen</div>
                                    )}



                        </div>
                        ) : (
                            <h1>Person not found!</h1>
                        )}
                        <div className="hcClickable" onClick={() => {nav(-1)}}><div  style={{margin: "20px 0"}}>Terug</div></div>
                    </div>
                </div>
            </div>
    )
}