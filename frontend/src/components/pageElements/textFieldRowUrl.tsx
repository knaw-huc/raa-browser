import React from "react";
import {useNavigate} from "react-router-dom";

export default function TextFieldRowUrl({label, text, url}: {label: string, text: string, url: string}) {
    const OK: boolean = text !== undefined && text !== null && text !== "";
    const nav = useNavigate();

    return (
        <div>
            {OK ? (<div className="detailRow">
                <div className="detailRowLabel">{label}:</div>
                <div className="detailRowText hcClickable" onClick={() => {nav(url)}}>{text}</div>
            </div>) : (
                <div/>
            )}
        </div>
    )
}