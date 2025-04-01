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
                <div className="hcParagraph">
                    <p>Het Repertorium van ambtsdragers en ambtenaren 1428-1861 is een online raadpleegbaar databestand met gegevens over de leden en hoogste ambtenaren van de belangrijkste instellingen van <em>vertegenwoordigende, bestuurlijke en rechtsprekende aard</em> op het huidige Nederlandse grondgebied.</p>

                    <p>Dit systematische overzicht is bedoeld als algemeen naslagwerk en tevens als uitgangspunt voor analytisch onderzoek.</p>
                    <p><strong>Dit is een bètaversie van het nieuwe Repertorium van ambtsdragers en ambtenaren. Hierin zijn nog niet alle functionaliteiten gerealiseerd.  </strong></p>
                </div>
            </div>
        </div>
    )
}