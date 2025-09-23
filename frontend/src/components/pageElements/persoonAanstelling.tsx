import React from "react";
import {IPersonAanstelling} from "../../misc/interfaces";
import TextFieldRow from "./textFieldRow";
import AanstellingLocaties from "./aanstellingLocaties";
import TextFieldRowUrl from "./textFieldRowUrl";

export default function PersoonAanstelling({aanstelling}: {aanstelling: IPersonAanstelling}) {
    const instelling_url: string = "/instelling_detail/" + aanstelling.instelling_id;
    const function_url: string = "/personen?aanstellingen.functienaam=" + aanstelling.functienaam + "&page=1";


    return (<div className="hcAanstelling">
        <TextFieldRowUrl label="Functie" text={aanstelling.functienaam} url={function_url}/>
        <TextFieldRowUrl label="Instelling" text={aanstelling.instellingnaam} url={instelling_url}/>
        <TextFieldRow label="Van" text={aanstelling.van_als_bekend}/>
        <TextFieldRow label="Tot" text={aanstelling.tot_als_bekend}/>
        <TextFieldRow label="Opmerkingen" text={aanstelling.opmerkingen}/>
        <AanstellingLocaties locaties={aanstelling.locaties}/>
    </div>)
}