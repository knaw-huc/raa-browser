import React from "react";
import {useNavigate} from "react-router-dom";
import bakkes from '../assets/img/raa.png'


export function Home() {
    const nav = useNavigate();
    return (
        <div className="hcContentContainer hcMarginTop5 hcMarginBottom5">
            <div className="hcBasicSideMargin">
                <h1>Repertorium van ambtsdragers en ambtenaren 1428-1861</h1>
                <img className="hcParagraph" src={bakkes}/>
                <div className="hcParagraph">Hier vindt u informatie over diplomatieke en consulaire vertegenwoordigers van de Republiek der Verenigde Nederlanden, de Bataafse Republiek en het Koninkrijk Holland in het buitenland, en over diplomatieke en consulaire vertegenwoordigers van andere landen in Nederland tijdens de jaren 1584-1810. Per vertegenwoordiger zijn gegevens opgenomen over hun carrière, familie, missie en de staf die zij daarbij tot hun beschikking hadden.

                </div>
            </div>
        </div>
    )
}