import React from "react";
import {IPersonAanstelling} from "../../misc/interfaces";
import TextFieldRow from "./textFieldRow";
import AanstellingLocaties from "./aanstellingLocaties";
import TextFieldRowUrl from "./textFieldRowUrl";

export default function PersoonAanstelling({aanstelling}: {aanstelling: IPersonAanstelling}) {
    const instelling_url: string = "/instelling_detail/" + aanstelling.instelling_id;

    return (<div className="hcAanstelling">
        <TextFieldRow label="Functie" text={aanstelling.functienaam}/>
        <TextFieldRowUrl label="Instelling" text={aanstelling.instellingnaam} url={instelling_url}/>
        <TextFieldRow label="Van" text={aanstelling.van_als_bekend}/>
        <TextFieldRow label="Tot" text={aanstelling.tot_als_bekend}/>
        <AanstellingLocaties locaties={aanstelling.locaties}/>
    </div>)
}