import React from "react";
import {IInstellingDetailResult, IResource} from "../../misc/interfaces";
import {useNavigate, createSearchParams} from 'react-router-dom';
import DetailRow from "./detailRow";
import DetailResources from "./detailResources";
import LocationMap from "./locationMap";

export function InstellingDetail({data}: { data: IInstellingDetailResult }) {
    const nav = useNavigate();
    const FOUND: boolean = data.amount === 1;
    const OK: boolean = FOUND && data.items[0].toelichting.trim() !== "";
    const hasFuncties: boolean = FOUND && data.items[0].functies.length > 0;



    return (
        <>
            <div className="hcContentContainer">
                <div className="hcBasicSideMargin">
                    <div className="justify hcMarginBottom1">
                        {FOUND ? (<div className="detailView">
                            <h2>{data.items[0].naam}</h2>
                            <h3>Periode</h3>
                            <div>{data.items[0].period}</div>
                            {hasFuncties && (
                                <div><h3>Functies</h3>
                                    {data.items[0].functies.map(
                                        (item, index) => {
                                            return (
                                                <div key={index} className="hcClickableList" onClick={() => {
                                                    const params = {
                                                        'aanstellingen.functienaam': item.naam,
                                                        'page': '1'
                                                    };
                                                    nav({
                                                        pathname: '/personen',
                                                        search: `?${createSearchParams(params)}`,
                                                    });
                                                }}>{item.naam}</div>
                                            )
                                        }
                                    )}</div>)}
                            {OK && (
                                <div className="hcParagraph" dangerouslySetInnerHTML={{__html: data.items[0].toelichting.replace('n-', '-')}}/>
                            )}
                        </div>) : (
                            <div className="detailView">
                            <h4>Instelling niet gevonden!</h4>
                            </div>
                            )}

                        <div className="hcClickable" onClick={() => {
                            nav(-1)
                        }}><div style={{margin: "20px 0"}}>Terug</div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}