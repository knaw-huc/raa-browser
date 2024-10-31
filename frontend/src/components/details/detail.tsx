import React from "react";
import {IInstellingResult} from "../../misc/interfaces";
import {useNavigate} from 'react-router-dom';

export function Detail({data}: {data: IInstellingResult[]}) {
    const nav = useNavigate();



    return (
    <>
        <div className="hcContentContainer">
            <div className="hcBasicSideMargin">
                <div className="justify hcMarginBottom1">

                    <div className="hcClickable" onClick={() => {nav(-1)}}>Terug naar vorige pagina </div>
                </div>
            </div>
        </div>
    </>)
}