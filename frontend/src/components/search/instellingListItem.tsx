import React, {useMemo} from 'react';
import {Link} from 'react-router-dom';
import {IInstellingResult} from '../../misc/interfaces';


export default function InstellingListItem({item}: { item: IInstellingResult }) {

    return (
        <div className="hcResultListDetail">
            <h2><Link to={'/instelling_detail/' + item.id}>{item.naam}</Link></h2>
        </div>
    );
}