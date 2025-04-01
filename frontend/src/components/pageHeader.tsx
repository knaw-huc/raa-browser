import React from 'react';
import {useNavigate, Link} from "react-router-dom";
import logo from '../assets/img/logo-homepage-intro.svg';
import "../assets/css/style.css";

export function Header() {
    const nav = useNavigate();
    return (
        <div>
            <div className="hcContentContainer bgColorBrand1 hcMarginBottom1">
                <header className="hcPageHeaderSimple hcBasicSideMargin">
                    <div className="hcBrand">
                        <div className="hcBrandLogo">
                            <img src={logo} className="logo"/>
                        </div>
                    </div>
                    <div className="hcSiteTitle" onClick={() => {nav('/')}}>
                        Repertorium van ambtsdragers en ambtenaren 1428-1861
                        <div className="titleFiller"> (bètaversie)</div>
                    </div>

                </header>

            </div>
            <div className="hoofdmenu">
            <div className="navi">
            <div onClick={() => {nav('/')}}>Home</div>
            <div onClick={() => {nav('/inleiding')}}>Inleiding</div>
            <div onClick={() => {nav('/personen')}}>Personen</div>
            <div onClick={() => {nav('/aanstellingen')}}>Aanstellingen</div>
            <div onClick={() => {nav('/instellingen')}}>Instellingen</div>
            <div onClick={() => {nav('/colofon')}}>Colofon</div>
            <div><Link to='mailto:resources@huygens.knaw.nl'>Contact</Link></div>
        </div></div>
        </div>)
}
