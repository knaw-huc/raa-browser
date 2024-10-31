import React, {useMemo} from 'react';
import {useNavigate, createSearchParams} from 'react-router-dom';
import {IAanstellingResult} from '../../misc/interfaces';
import {fd} from '../../misc/functions';


export default function AanstellingListItem({item}: { item: IAanstellingResult }) {
    const nav = useNavigate();

    function toInstitution(id: string) {
        nav('/instelling_detail/' + id);
    }

    function toPerson(id: string) {
        nav('/person_detail/' + id);
    }

    function toList(item: IAanstellingResult) {
        let params = {};
        if (item.function.length > 0) {
            params = {
                'aanstellingen.instellingnaam': item.institution,
                'aanstellingen.functienaam': item.function,
                'page': '1'
            }} else {
                params = {
                    'aanstellingen.instellingnaam': item.institution,
                    'page': '1'
                }
            }
        nav({
            pathname: '/personen',
            search: `?${createSearchParams(params)}`,
        });
    }

    return (
        <div className="hcResultListDetail">
            <div className="linkedHeader" onClick={() => toList(item)}>
                {item.function} ( {item.beginjaar} - {item.eindjaar} )
            </div>
            <div>
                {item.instelling_id !== null ? (<div className="hcClickableList" onClick={() => toInstitution(item.instelling_id)}>{item.institution}</div>) : (<div>{item.institution}</div>)}
                <div className="hcClickableList" onClick={() => toPerson(item.persoon_id)}>{item.person_name}</div>
                <div>{item.opmerking}</div>
                <div>{item.locaties.map((loc, index) => {
                    return (<div>{loc.naam} ({loc.soort})</div>)
                })}</div>
            </div>
        </div>
    );
}