import React from "react";

export default function TextFieldColumn({label, text}: {label: string, text: string}) {
    const OK: boolean = text !== undefined && text !== null && text !== "";

    return (
        <div>
            {OK ? (<div className="detailRow">
                <div className="detailColumnLabel">{label}:</div>
                <div className="hcParagraph">{text}</div>
            </div>) : (
                <div/>
            )}
        </div>
    )
}