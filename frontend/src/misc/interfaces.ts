export interface IInstellingResult {
    id: string,
    naam: string,
    periode: string
}

export interface IInstellingDetails {
    id: string,
    naam: string,
    period: string,
    toelichting: string
    functies: IFunctie[]
}

export interface IInstellingDetailResult {
    amount: number,
    items: IInstellingDetails[]
}

export interface IFunctie {
    functie_id: string,
    naam: string
}

export interface IPersonDetails {
    adel: string,
    alias: string,
    academische_titel: string,
    adelijke_titel: string,
    adelijketitel_id: string,
    adelspredicaat: string,
    geboortejaar: string,
    geboortedatum: string,
    geboorteplaats: string,
    geslachtsnaam: string,
    heerlijkheid: string,
    id: string,
    opmerkingen: string,
    overlijdensjaar: string,
    overlijdensdatum: string,
    overlijdensplaats: string,
    periode: string,
    tussenvoegsel: string,
    voornaam: string,
    aanstellingen: IPersonAanstelling[]
}

export interface IPersonDetailStruc {
    amount: number,
    items: IPersonDetails[]
}

export interface IPersonAanstelling {
    id: string,
    beginjaar: string,
    eindjaar: string,
    van_als_bekend: string,
    tot_als_bekend: string,
    instelling_id: string,
    instellingnaam: string,
    functie_id: string,
    functienaam: string,
    locaties: ILocatie[]
}

export interface ILocatie {
    soort: string,
    naam: string
}


export interface IResource {
    name: string,
    details: string,
    url: string
}

export interface IPersonResult {
    id: string,
    geslachtsnaam: string
    voornaam: string,
    tussenvoegsel: string,
    geboortejaar?: string,
    overlijdensjaar?: string
}

export interface IAanstellingResult {
    id: string,
    function: string,
    institution: string,
    instelling_id: string,
    person_name: string,
    persoon_id: string,
    opmerkingen: string,
    beginjaar: string,
    eindjaar: string,
    locaties: ILocatie[]
}

export interface ILetterDetailResult {
    status: string,
    detail?: ILetterDetails
}

export interface ILetterDetails {
    year: string,
    month: string,
    day: string,
    standard_gregorian_date: string,
    calendar_of_date_provided: string,
    date_as_marked_on_letter: string,
    date_uncertain: string,
    notes_on_date: string,
    author: string,
    author_emlo_id: string,
    author_as_marked_in_text: string,
    author_uncertain: string,
    notes_on_author_in_relation_to_letter: string,
    recipient: string,
    recipient_emlo_id: string,
    recipient_as_marked_in_text: string,
    recipient_uncertain: string,
    notes_on_recipient_in_relation_to_letter: string,
    origin_name: string,
    origin_emlo_id: string,
    origin_as_marked_in_text: string,
    origin_uncertain: string,
    notes_on_origin_in_relation_to_letter: string,
    destination_name: string,
    destination_emlo_id: string,
    destination_as_marked_in_text: string,
    destination_uncertain: string,
    notes_on_destination_in_relation_to_letter: string,
    abstract: string,
    keywords: string,
    languages: string,
    incipit: string,
    explicit: string,
    people_mentioned: string,
    emlo_ids_of_people_mentioned: string,
    notes_on_people_mentioned: string,
    original_catalogue_name: string,
    source: string,
    matching_letters: string,
    match_id: string,
    related_resource_ids: string,
    general_notes_for_public_display: string,
    emlo_url: string
}
