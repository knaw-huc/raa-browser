import React from "react";

export default function TextFieldRow({label, text}: {label: string, text: string | undefined | null}) {
    const OK: boolean = text !== undefined && text !== null && text !== "";

    return (
        <div>
            {OK ? (<div className="detailRow">
                <div className="detailRowLabel">{label}:</div>
                <div className="detailRowText">{text}</div>
            </div>) : (
                <div/>
            )}
        </div>
    )
}