import React from "react";
import {ILocatie} from "../../misc/interfaces";

export default function AanstellingLocaties({locaties}: {locaties: ILocatie[]}) {
    return (<div>
        {locaties.length > 0 ? (
            <div className="detailRow">
                <div className="detailRowLabel">Namens:</div>
                <div className="detailRowText">
                {locaties.map((item, index) => {
                    return (
                        <div key={index}>{item.naam} ({item.soort})</div>
                    )
                })}</div>
            </div>
        ) : (<div/>)}
    </div>)
}