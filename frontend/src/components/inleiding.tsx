import React from "react";
import {useNavigate} from "react-router-dom";

export default function Inleiding() {
    const nav = useNavigate();

    return (
        <div className="hcContentContainer hcMarginTop5 hcMarginBottom5">
            <div className="hcBasicSideMargin textBlob">
                <h1>Inleiding</h1>
                <div>
                    <p>
                        De oorsprong van het <em>Repertorium </em>
                        ligt in 1995, toen dr. A.J.C.M. Gabriëls wees op het ontbreken van
                        een naslagwerk van de leden van de bestuurs- en rechtscolleges van de
                        Generaliteit en de gewesten in de periode van de Republiek der
                        Verenigde Nederlanden, en een voorstel deed die leemte op te vullen.<sup>1</sup>
                        In jaren 1999-2000 werd een <em>pilotstudy </em>
                        verricht. In een daarvoor ontworpen Access-database werden vervolgens
                        de leden van een aantal instellingen in het gewest Holland ingevoerd.

                    </p>
                    <p>
                        In 2000 besloot het bestuur van het Instituut
                        voor Nederlandse Geschiedenis (een van de voorlopers van het Huygens
                        Instituut) tot uitbreiding van het project met de tijdvakken
                        1428-1588, 1795-1813 en 1813-1861. De Nederlandse Organisatie voor
                        Wetenschappelijk Onderzoek verstrekte een subsidie voor de uitvoering
                        van het deelproject 1588-1795. In deze vorm namen in 2002 <div className="hcClickable"
                                                                                       onClick={() => {
                                                                                           nav('/colofon');
                                                                                       }}> vier
                        onderzoekers</div> het
                        werk ter hand.
                    </p>
                    <p><br/>
                    </p>

                    <p>
                        <em>Periodisering en inhoudelijke afbakening</em></p>
                    <p>
                        Als beginpunt van het <em> Repertorium
                    </em> is 1428 gekozen, het jaar waarin de
                        grafelijke raad van Holland (later Hof van Holland en Zeeland ) werd
                        opgericht. Gegevens over de leden van het Hof waren onderdeel van een
                        publicatie uit 1929, waarmee een goed startpunt beschikbaar was voor
                        de eerste deelperiode.</p>
                    <p>
                        Het eindpunt lag aanvankelijk bij de
                        grondwetsherziening van 1848, die op landelijk en provinciaal niveau
                        een fundamentele wijziging van de staatsstructuur teweegbracht. De
                        projectleiding besloot echter ook de korte periode 1849-1861 bij het
                        project te betrekken. Daarmee konden het project aansluiten bij de hervatting van de
                        verschijning van de Almanak van het Koninkrijk Holland (1806-1809) en
                        van de Almanak van het Koninkrijk der Nederlanden (1815-1830) als
                        Staatsalmanak, waarin zich de namen van de leden en hoge ambtenaren
                        van de belangrijkste landelijke en provinciale vertegenwoordigende,
                        bestuurs- en rechtsinstellingen in Nederland bevinden.</p>
                    <p>
                        De afbakening van de deelperioden vloeit voort uit
                        de bekende cesuren in de vaderlandse geschiedenis: 1588 als
                        (mogelijk) geboortejaar van de Republiek der Verenigde Nederlanden,
                        1795 als begin van de Bataafs-Franse periode, 1813 als de aanvang van
                        het (tot 1830 Verenigd) Koninkrijk der Nederlanden.</p>
                    <p>
                        Inhoudelijk is een beperking aangebracht tot
                        instellingen op landelijk en provinciaal niveau. De gebruiker zal dus
                        vergeefs zoeken naar leden van plaatselijke besturen en plaatselijke
                        rechtbanken. Daaruit volgt ook dat het bestand geen volledige
                        loopbanen van individuen bevat; de carrière is alleen te volgen voor
                        zover die zich afspeelde in bovenlokale instellingen. </p>
                    <p>
                        Naast de leden zijn ook de belangrijkste
                        ambtenaren van de instellingen in het bestand opgenomen. Wie
                        daaronder precies worden verstaan, verschilt per periode. In het
                        tijdvak 1588-1795 betreft het de zogenaamde ‘ministers’, zoals
                        raadpensionarissen, secretarissen, griffiers, fiscaals,
                        procureurs-generaal, alsmede een aantal andere functies van
                        soortgelijk niveau. De bekleders van deze functies waren afkomstig
                        uit dezelfde bestuurlijk-sociale laag als de leden van de
                        instellingen. In de periode 1795-1813 wordt verder afgedaald in de,
                        dan sterk tot ontwikkeling komende, ambtelijke hiërarchie. De
                        periode 1813-1861 beperkt zich weer tot de hoogste ambtenaren. De
                        vraag welke ambtenaren per instelling in het bestand zijn opgenomen,
                        is beantwoord in de institutionele
                        toelichtingen voor de perioden
                        1588-1795 en 1813-1861, en voor de periode 1795-1813 in de
                        <em> Onderzoeksgids bestuur en administratie
                            van de landelijke overheid 1795-1795</em>.</p>
                    <p>
                        De eerste versie van het Repertorium is online
                        gepubliceerd in 2006. Voor de periode 1588-1795 bevatte het bestand
                        gegevens over vier van de zeven gewesten, te weten Holland, Zeeland,
                        Friesland en Overijssel. Als gevolg van interne ontwikkelingen was
                        het niet mogelijk een officieel vervolgproject op te starten om het
                        bestand te completeren met de leden van provinciale colleges in
                        Gelderland, Utrecht en Stad en Lande van Groningen, en evenmin over
                        personen die door deze gewesten werden afgevaardigd in de
                        Generaliteitscolleges. Niettemin ging het werk aan het bestand in de
                        loop van de volgende jaren langzaam door. Ronald Sluijter vulde met
                        behulp van vele stagiair(e)s de gegevens aan, en in 2024 was het
                        eindelijk mogelijk een nieuwe versie van het Repertorium te
                        publiceren. Deze bevat eveneens het bovengenoemde bestand met
                        ambtenaren en ambtsdragers in de periode [xxx aanvullen].</p>
                    <p><br/>
                    </p>
                    <p>
                        <em>De gegevens</em></p>

                    <p>
                        Bovenlokale carrièregegevens</p>

                    <p>
                        De kern van de gegevens in het <em>Repertorium </em>
                        zijn de namen en zittingsdata van de leden en ambtenaren in de
                        opgenomen provinciale en landelijke instellingen (verder te noemen:
                        bovenlokale carrièregegevens). Op dit vlak is naar volledigheid
                        gestreefd, door alle beschikbare primaire en secundaire bronnen aan
                        te wenden (zie hieronder: bronnen en
                        bronvermelding).</p>
                    <p>
                        Bij de functiegegevens is in veel gevallen
                        informatie opgenomen over de lagere bestuurseenheid namens welke een
                        ambtsdrager werd afgevaardigd naar het bovenlokale college. Een
                        toelichting per periode is noodzakelijk.</p>
                    <p><br/>

                    </p>
                    <p>
                        1588-1795</p>
                    <p>
                        Typerend voor de Republiek was de
                        gedecentraliseerde bestuursstructuur, waarin de soevereiniteit in
                        wezen berustte bij de ‘basiscolleges’, te weten de stedelijke
                        raden en vroedschappen en de provinciaal of kwartiersgewijze
                        georganiseerde ridderschappen. De leden van de provinciale en
                        ‘landelijke’ bestuurscolleges werden door en uit deze
                        basiscolleges verkozen. Het lidmaatschap van een basiscollege was de
                        ‘radicale qualiteit’ die een voorwaarde was voor zitting in een
                        bovenlokaal bestuurscollege.<sup>2</sup>
                        Op provinciaal niveau kwamen de basiscolleges in veel gevallen
                        zogenaamde toerbeurtstelsels overeen, waarin zij de distributie van
                        de zetels in de bovenlokale instellingen voor de toekomst onderling
                        regelden. Hoewel de ambtsdrager, zodra hij (het ging uitsluitend om
                        mannen) zitting in een bovenlokaal college verkreeg, in principe
                        geacht werd de belangen van stad en provincie terzijde te leggen en
                        het algemeen belang te dienen, bleven zijn lokale bindingen in
                        praktijk van groot belang, zeker door het in de meeste gevallen
                        tijdelijk karakter van de beklede functies. Vanwege het grote belang
                        van de ‘radicale qualiteit’ zijn gegevens daarover dan ook
                        opgenomen in het bestand.
                    </p>
                    <p><br/>

                    </p>
                    <p>
                        1795-1813</p>
                    <p>
                        In de periode van 1795 tot 1813 is de afwisseling
                        in regeringsvormen groot geweest. Op nationaal niveau bleven de
                        Staten-Generaal aanvankelijk in een gewijzigde samenstelling en
                        context functioneren naast zelfstandige gewesten. Daarna volgden de
                        Eerste en de Tweede Nationale Vergadering, met naast het algemene
                        bestuur de belangrijke taak een nieuwe constitutie op te stellen. Dit
                        lukte niet snel, onder andere omdat de balans tussen centralisatie en
                        decentralisatie niet gemakkelijk te vinden was.</p>
                    <p>
                        Daarna hebben met evenveel nieuwe constituties en
                        staatsregelingen vanaf 1798 het Uitvoerend Bewind, vanaf 1801 het
                        Staatsbewind, vanaf 1805 een Raadpensionaris en vanaf 1806 een Koning
                        het heft in handen gehad. Bij iedere nieuwe wisseling werd het
                        bestuurlijke en administratieve apparaat weer op een andere wijze
                        opgezet, wat telkens leidde tot nieuwe instellingen met andere namen
                        en andere taakstellingen. Deze veelheid weerspiegelt zich in het
                        repertorium. Ook de instellingen op gewestelijk niveau ondergingen
                        telkens soortgelijke gedaanteverwisselingen.</p>
                    <p>
                        In juli 1810 lijfde Napoleon de Hollandse
                        departementen in bij het Franse keizerrijk. Vanaf 1 januari 1811
                        hielden alle Hollandse nationale en provinciale instellingen geheel
                        op te bestaan, behalve de gerechtshoven die pas op 1 maart 1811
                        volgens Frans model werden vervangen. Het staatsapparaat in Parijs
                        nam op deze datum het inhoudelijke bestuur over. Zoals ook elders was
                        gebeurd, kreeg Hollande per 1 januari 1811 een eigen
                        Gouverneur-Generaal die zich vooral met de ordehandhaving bezighield.
                        De Intendanten die hem flankeerden waren verantwoording schuldig aan
                        hun Parijse ministeries. Zij dienden slechts de overgang van het
                        Nederlandse naar het Franse bestel te vergemakkelijken door te
                        adviseren inzake bestuurlijke indelingen en de aanstelling van
                        personeel en door technische invoering van de Franse financiële
                        administratie, met name op het terrein van de schulden en de
                        belastingen.</p>
                    <p>
                        De vele wisselingen betekenen ook dat de
                        wetgevende instellingen en de gewestelijke besturen telkens op een
                        andere wijze werden verkozen of benoemd en dat de agentschappen,
                        departementen of ministeries regelmatig werden gereorganiseerd.
                        Dergelijke gegevens zijn opgenomen in de <em>Onderzoeksgids
                        bestuur en administratie van de landelijke overheid 1795-1795</em>,
                        een eerder begonnen project van het Instituut voor Nederlandse
                        Geschiedenis, waarin ook de provinciale besturen en gerechtshoven
                        worden beschreven. In plaats van de afzonderlijke institutionele
                        beschrijvingen zijn daarom voor deze periode koppelingen tot stand
                        gebracht van de instellingen in het Repertorium naar de
                        beschrijvingen in de Gids. Voor zover van belang zijn in het
                        repertorium gegevens opgenomen over verkiezingsdistricten of lagere
                        overheden, namens welke een persoon in een bepaalde instelling
                        zitting had.</p>
                    <p>
                        Parijse bestuurders en ambtenaren zijn alleen
                        opgenomen als zij aan het hoofd van een instelling stonden of uit
                        hoofde van hun functie rechtstreeks inhoudelijk gezag uitoefenden in
                        de oude Hollandse departementen.</p>
                    <p><br/>

                    </p>
                    <p>
                        1813-1861</p>
                    <p>
                        Het Koninkrijk bleef een gedecentraliseerde staat.
                        De ‘radicale qualiteit’ of soevereine statenvergaderingen kwamen
                        niet terug in de grondwet van 1814. Wel kreeg Nederland te maken met
                        getrapte verkiezingen. Belangrijke nationale bestuursinstellingen
                        werden samengesteld als een geheel der delen: de Notabelenvergadering
                        van 1814 uit vertegenwoordigers van de departementen, net als de
                        Staten-Generaal (1814-1815). De leden van de Tweede Kamer werden
                        sedert 1815 gekozen door de Provinciale Staten in vastgestelde
                        aantallen per provincie. Na de grondwetswijziging van 1848 was dit
                        met de Eerste Kamer het geval. Dit vertegenwoordigend aspect is
                        opgenomen in de database. Ook zijn de kiesdistricten opgenomen
                        waarvoor leden van de Tweede Kamer na 1848 zitting hadden. Ook voor
                        de Provinciale Staten werd in de grondwet van 1815 een getrapte
                        verkiezing vastgesteld. De Staten waren verdeeld in drie standen met
                        een vastgesteld aantal vertegenwoordigers: de Ridderschap, de
                        stedelijke stand en de landelijke stand. De laatste twee waren weer
                        in steden en districten verdeeld. In de grondwet van 1848 werden de
                        standen afgeschaft. De kiesdistricten die daarna de leden van
                        Provinciale Staten kozen zijn opgenomen in het bestand.</p>

                    <p>
                        Er zijn vier verschillende niveaus waarop de
                        afvaardigings-gerelateerde informatie is opgenomen. Het eerste is dat
                        van de provincie of het departement (in de jaren 1588-1861), het
                        tweede de regio (in 1588-1795 het kwartier, in 1813-1861 het
                        kiesdistrict), het derde het lokale niveau (in de periode 1588-1795
                        naast de steden ook de ridderschappen, die in bestuurlijk opzicht op
                        hetzelfde niveau stonden, en formeel het platteland
                        vertegenwoordigden). In de periode 1813-1861 is, waar van toepassing,
                        een vierde niveau opgenomen, dat van de stand (ridderschap,
                        stedelijke stand, landelijke stand).</p>
                    <p><br/>

                    </p>

                    <p>
                        Persoonsgegevens</p>
                    <p>
                        Naast de bovenlokale carrièregegevens zijn per
                        individu minimale aanvullende gegevens opgenomen (verder te noemen:
                        persoonsgegevens). Voor alle perioden zijn dit het jaar van geboorte
                        en overlijden, alsmede het bezit van academische titels<sup>3</sup>
                        en adellijke titels en predicaten. In twee perioden treft men
                        daarboven nog extra informatie aan:</p>
                    <p><br/>

                    </p>
                    <p>
                        1588-1795:
                    </p>

                    <p>
                        a) Het bezit van heerlijkheden, indien bekend. In
                        de bronnen uit deze periode verschijnen personen zo nu en dan niet
                        onder hun geslachtsnaam, maar onder de naam van de heerlijkheid die
                        zij in bezit hadden. Vermelding van de heerlijkheden kan dus een
                        essentieel hulpmiddel zijn bij de identificatie.</p>
                    <p>
                        b) Het lidmaatschap van een van de ridderschappen
                        of stedelijke raden of vroedschappen, inclusief (voorzover bekend) de
                        zittingstermijn (verder te noemen: lokale carrièregegevens). Het
                        belang hiervan is hierboven besproken. Hoewel het vermelden van deze
                        informatie gedeeltelijk in tegenspraak is met de eerder genoemde
                        beperking tot bovenlokale carrièregegevens, moet er met nadruk op
                        worden gewezen dat de lokale carrièregegevens geenszins compleet
                        zijn. De gebruiker zal geen volledig overzicht kunnen oproepen van
                        alle leden van een bepaalde vroedschap, maar alleen van diegenen die
                        zitting hebben gehad in een provinciale of landelijke instelling.</p>
                    <p>
                        c) Specifieke overlijdensdatum, indien bekend.
                    </p>
                    <p><br/>

                    </p>
                    <p>
                        1795-1813</p>
                    <p>
                        a) Het bezit van heerlijkheden, indien bekend.</p>
                    <p><br/>

                    </p>
                    <p>
                        1813-1861:</p>

                    <p>
                        a) Specifieke datum van geboorte en overlijden.</p>
                    <p>
                        b) Plaats van geboorte en overlijden.
                    </p>
                    <p><br/>

                    </p>
                    <p>
                        Bij de persoonsgegevens is niet naar volledigheid
                        gestreefd. Over het algemeen is alleen gebruik gemaakt van secundaire
                        bronnen (zie hieronder: bronnen en
                        bronvermelding). Wel bevatten ook de
                        primaire bronnen die zijn gebruikt voor de gegevens over de
                        bovenlokale carrièregegevens in sommige gevallen persoonsgegevens,
                        zoals geboorte en overlijden (regelmatig de oorzaak van het
                        beëindigen van de ambtstermijn). Uiteraard is deze informatie dan
                        ook opgenomen in het bestand. Andersom bevatten de secundaire bronnen
                        die gebruikt zijn voor de persoonsgegevens vaak gegevens over de
                        zitting in bovenlokale instellingen. Deze gegevens zijn gebruikt als
                        aanvulling op de primaire bronnen.</p>
                    <p><br/>

                    </p>

                    <p>
                        <em>Bronnen en bronvermelding</em></p>
                    <p>
                        Het <em>Repertorium </em>is
                        voortgekomen uit de wens om alle beschikbare informatie over de
                        personele samenstelling van provinciale en landelijke instellingen
                        bijeen te brengen in één bestand. De aangewende bronnen zijn dan
                        ook zeer uiteenlopend van aard. Er is gebruik gemaakt van primaire
                        bronnen als commissieboeken, resolutieboeken, indices, maar ook van
                        secundaire bronnen als eigentijdse overzichten van leden van diverse
                        colleges, stadsgeschiedenissen, biografische naslagwerken,
                        archiefinventarissen, monografieën over instellingen, genealogische
                        periodieken, ongepubliceerde onderzoeksbestanden et cetera.
                    </p>
                    <p>
                        Het nuttigst voor de samenstellers van het
                        <em> Repertorium </em>waren
                        betrouwbare moderne publicaties die de leden van één of meer van de
                        behandelde instellingen tot onderwerp hebben en die, naast de voor
                        het <em>Repertorium </em>
                        essentiële gegevens over de zittingstermijn, ook de benodigde
                        persoonsgegevens bevatten. Voorbeelden van zulke naslagwerken zijn O.
                        Vries, e.a., <em>De heeren van den raede.
                        Biografieën en groepsportret van de raadsheren van het hof van
                        Friesland, 1499-1811</em> (Hilversum 1999),
                        A.M. Elias en P.C.M. Schölvinck, <em>Volksrepresentanten
                        en wetgevers. De politieke elite in de Bataafs-Franse tijd, 1796-1810 </em>
                        (Amsterdam 1991) en H. van Felius en H.J. Metselaars, <em>Noordhollandse
                        Statenleden 1840-1919</em> ('s-Gravenhage
                        z.j.).</p>
                    <p>
                        Dergelijke werken zijn echter schaars. Doorgaans
                        kwamen de gegevens over de personele samenstelling van de
                        instellingen en de persoonsinformatie uit twee grotendeels gescheiden
                        circuits: de eerste uit de primaire bronnen of uit her en der
                        aanwezige gepubliceerde of ongepubliceerde ‘kale’ naamlijsten van
                        leden van specifieke instellingen, de tweede uit naslagwerken als
                        biografische woordenboeken, genealogische periodieken en publicaties
                        over lokale besturen (bijvoorbeeld J.E. Elias, <em>De
                        vroedschap van Amsterdam, 1578-1795</em> (2
                        dln., Haarlem 1903-1905)). Deze tweedeling is terug te vinden in de
                        wijze van bronvermelding in het <em>Repertorium</em>.
                        De verantwoording van de bovenlokale carrièregegevens vindt plaats
                        in de institutionele toelichtingen.
                        De verantwoording van de persoonsgegevens vindt men terug in de
                        database zelf, bij de persoon in kwestie. Zoals gezegd zijn ook
                        bronnen aangewend die beide typen gegevens bevatten. Deze worden dan
                        zowel in de institutionele toelichtingen als in de database zelf
                        vermeld.</p>
                    <p>
                        Per deelperiode zijn verschillende naslagwerken
                        en tijdschriften systematisch doorgenomen op persoonsgegevens
                        (afgezien van de hierboven genoemde specifieke werken over lokale en
                        bovenlokale colleges).</p>
                    <p><br/>

                    </p>
                    <p> 1588-1795</p>
                    <p><br/></p>
                    <p><em>Algemeen Nederlandsch Familieblad</em> (’s-Gravenhage 1883-1905)</p>
                    <p><em>Genealogische en Heraldische Bladen</em> (’s-Gravenhage 1906-1915)</p>
                    <p><em>Heraldieke bibliotheek</em> (’s-Gravenhage 1872-1883)</p>
                    <p><em>Jaarboek van het Centraal Bureau voor Genealogie en het Iconographisch
                        Bureau</em> ('s-Gravenhage 1947- )</p>
                    <p><em>Nederland’s Adelsboek</em> (’s -Gravenhage 1903-)</p>
                    <p><em>Nederland’s Patriciaat. Genealogieën van vooraanstaande geslachten</em> (’s-Gravenhage </p>
                    <p> 1910-)</p>
                    <p><em>Nederlandsche Leeuw, de</em> (’s-Gravenhage 1883-) (inclusief Bijblad van de Nederlandsche
                        Leeuw, later Nederlandse genealogieën)</p>
                    <p><em>Nieuw Nederlandsch Biografisch Woordenboek</em>. P.C. Molhuysen en P.J. Blok ed. (10 dln.;
                        Leiden 1911-1937)</p>
                    <p><em>Wapenheraut, de</em> (’s-Gravenhage 1897-1920)</p>
                    <p><br/></p>
                    <p> 1795-1813</p>
                    <p><br/></p>
                    <p> Aa, A.J. van der,<em> Biographisch woordenboek der Nederlanden </em>(12 dln., Haarlem 1852-1878)
                    </p>
                    <p><em>Nederland’s Adelsboek</em> (’s -Gravenhage 1903-)</p>
                    <p><em>Nederland’s Patriciaat. Genealogieën van vooraanstaande geslachten</em> (’s-Gravenhage </p>
                    <p> 1910-)</p>
                    <p><em>Nieuw Nederlandsch Biografisch Woordenboek</em>. P.C. Molhuysen en P.J. Blok ed. (10 dln.;
                        Leiden 1911-1937)</p>
                    <p><br/></p>
                    <p> 1813-1861</p>
                    <p><em>Nederland’s Adelsboek</em> (’s -Gravenhage 1903-)</p>
                    <p><em>Nederland’s Patriciaat. Genealogieën van vooraanstaande geslachten</em> (’s-Gravenhage </p>
                    <p> 1910-)</p>
                    <p><em>Nieuw Nederlandsch Biografisch Woordenboek</em>. P.C. Molhuysen en P.J. Blok ed. (10 dln.;
                        Leiden 1911-1937)</p>
                    <p><br/></p>
                    <p> Hiernaast zijn, vooral voor de periode 1588-1795, nog tal van andere publicaties gebruikt indien
                        het vermoeden bestond dat zich daarin relevante persoonsgegevens bevonden.</p>
                    <p><br/></p>
                    <p><em>Identificatie</em></p>
                    <p> Tijdens het onderzoek voor het <em>Repertorium</em> deed zich vaak de vraag voor of de persoon
                        die een bepaalde functie bekleedde, identiek was met een gelijknamige persoon die eerder of
                        later een andere functie uitoefende (uiteraard binnen een zekere tijdspanne). In die gevallen
                        moet de samensteller van een database een keuze maken: maak ik twee persoonsrecords aan of één?
                        In tegenstelling tot wat men misschien zou vermoeden, doet dit probleem zich niet alleen voor
                        bij personen met veel voorkomende geslachtsnamen. Gezien de tot in het recente verleden in ere
                        gehouden traditie van vernoeming van kinderen naar familieleden, komen we meer dan eens ook bij
                        minder frequent voorkomende geslachtsnamen voor dezelfde keuze te staan. In de periode vóór
                        invoering van de burgerlijke stand (1811) hebben we ook nog te maken met spellingvarianten (zie
                        ook hieronder: <u>namen</u>). </p>
                    <p> De samenstellers beschikten desondanks over enkele instrumenten om in veel van deze gevallen een
                        onderbouwd besluit te kunnen nemen. Allereerst was het werk soms al verricht door de
                        geraadpleegde naslagwerken en genealogische periodieken. Zulke werken verstrekken doorgaans
                        informatie over de gevolgde loopbaan, zij het meestal onvolledig. Dit veronderstelt wel een
                        groot vertrouwen in de betrouwbaarheid van de betreffende publicatie. Bij publicaties die in dat
                        opzicht minder goed bekend staan, is dan ook extra alertheid betracht. Zo nu en dan konden we
                        aan de hand van andere gegevens de onjuistheid van de informatie in naslagwerken aantonen.
                        Desondanks was het natuurlijk onmogelijk om alle gegevens in de betreffende publicaties te
                        verifiëren, niet alleen vanwege het tijdsbeslag, maar ook vanwege het soms simpelweg ontbreken
                        van aanvullende bronnen.</p>
                    <p> In de periode 1588-1795 was daarnaast de eerder genoemde voorwaarde van zitting in een
                        basiscollege voor het bekleden van bestuurlijke functies op bovenlokaal niveau een belangrijke
                        hulp bij de identificatie. Aangezien de basiscolleges relatief klein van omvang waren—het aantal
                        leden van raden en vroedschappen ging de veertig nergens te boven—en er in veel gevallen goede
                        naslagwerken over bestaan (bekende voorbeelden zijn het hierboven genoemde werk van J.E. Elias
                        en E.A. Engelbrecht, <em>De vroedschap van Rotterdam, 1572-1795</em> (Rotterdam 1973)), konden
                        we in de meeste gevallen de juiste persoon snel vinden. Gelijktijdige zitting in de
                        basiscolleges van personen met identieke voor- en geslachtsnaam kwam weinig voor. In gevallen
                        waarin het wel gebeurde, bood het patroniem soms uitkomst.</p>
                    <p> Niettemin blijven gevallen over waarbij de identificatie onzeker is. In de database zullen
                        functies soms ten onrechte aan één individu zijn toegekend, en andersom zullen soms twee
                        personen in het bestand voorkomen die in werkelijkheid identiek zijn. Waar sprake was van
                        twijfel over de gekozen oplossing wordt de gebruiker daarvan op de hoogte gebracht.</p>
                    <p><br/></p>
                    <p><em>Namen</em></p>
                    <p><br/></p>
                    <p> Spelling</p>
                    <p><br/></p>
                    <p> De spelling van voor- en geslachtsnamen werd in Nederland bij de invoering van de burgerlijke
                        stand in 1811 gefixeerd. In bronnen van vóór die tijd treffen we vele spellingvarianten aan.
                        Zelfs is het mogelijk dat de naam van een individu in één en hetzelfde document op verschillende
                        wijzen is gespeld. Varianten die veelvuldig voorkomen zijn ae-aa, i-ie, e-ee, c-k, s-sch, ch-g,
                        etc. Ook komen voornamen in verschillende varianten voor: Gerrit-Gerard, Johannes-Jan,
                        Adrianus-Adriaan, Charles-Karel of, minder doorzichtig, Dominicus als de gelatiniseerde vorm van
                        het Friese Douwe.</p>
                    <p> Niet alleen konden spellingvarianten zorgen voor onzekerheid omtrent de identificatie van
                        personen (zie hierboven), maar moesten we ook een keuze maken welke variant we in de database
                        zouden weergeven. In het <em>Repertorium </em>is ervoor gekozen de spelling in de naslagwerken
                        als maatgevend te nemen. Daarbij is over het algemeen de voorkeur gegeven aan de gezaghebbende
                        genealogische publicaties <em>Nederland’s adelsboek </em>en<em> Nederland’s patriciaat</em>.
                        Vanzelfsprekend komt lang niet elke persoon in de database in deze publicaties voor. Maatgevend
                        in tweede instantie waren, voor de periode 1588-1795, de naslagwerken over de diverse raden en
                        vroedschappen (zie hierboven). Om de gebruiker te dienen is bij verschillende individuen de
                        spelling van de geslachtsnaam gelijkgetrokken met die van verwanten elders in het bestand. Dit
                        is alleen gedaan in die gevallen waarin de verwantschap bleek uit de gebruikte literatuur.
                        Systematisch onderzoek naar de verwantschap tussen de in het bestand aanwezige personen is niet
                        verricht.</p>
                    <p> Spelling van de uitgang van patroniemen is, indien deze niet onder ‘geslachtsnaam’ zijn
                        opgenomen (zie hieronder: <u>geslachtsnaam-patroniem</u>), gestandaardiseerd tot –sz.</p>
                    <p> Ondanks deze beredeneerde handelwijze is de weergegeven spelling in veel gevallen een vrij
                        willekeurige keuze van de bewerkers. De moeilijkheden die de gebruiker van
                        het <em>Repertorium </em>kan ondervinden bij het zoeken naar namen, zijn evenwel op drie
                        manieren ondervangen (zie ook de <u>handleiding</u>). In zoekvelden kan men gebruik maken van
                        zogenaamde <em>wildcards</em>. Daarnaast kan de gebruiker bladeren door een alfabetische lijst
                        van geslachtsnamen. Hierbij moet men uiteraard alert zijn op varianten in de eerste letters van
                        de naam, zoals de c-k variant (Koninck-Coninck). Voor sterk afwijkende vormen, die de ‘normale’
                        varianten overstijgen, is een veld ‘alias’ gecreëerd, dat afzonderlijk doorzoekbaar is. Het gaat
                        hier om echte aliassen, zoals Dirck Heyndricksz. Verwer die ook als Dirck Heyndricksz.
                        Dyckgraeff voorkomt (zie ook hieronder: <u>geslachtsnaam-patroniem</u>), maar ook om sterk
                        afwijkende vormen als bijvoorbeeld Hoeufft – Theuft, dat wil zeggen varianten die ook met
                        wildcards en alfabetische lijsten moeilijk op te sporen zijn. </p>
                    <p><br/></p>
                    <p> Dubbele namen</p>
                    <p><br/></p>
                    <p> Dubbele geslachtsnamen zijn behandeld volgens de lijst van F. de Josselin de Jong, <em>Jaarboek
                        van het Centraal Bureau voor Genealogie</em> 3 (1949) 11-72, 4 (1950) 205 en 12 (1958) 59-80. In
                        concreto betekent dit, dat bij opname van de geslachtsnaam de zogenaamde stamnaam bepalend is.
                        Bij een samengestelde naam als ‘Teding van Berkhout’, is ‘Berkhout’ de stamnaam, en aldus
                        opgenomen onder ‘geslachtsnaam’. Het gedeelte ‘Teding van’ is geheel onder ‘tussenvoegsel’
                        opgenomen. Bij ‘de Jongh van Persijn’ daarentegen is ‘de Jongh’ de stamnaam. Hier is ‘Jongh van
                        Persijn’ geheel onder ‘geslachtsnaam’ opgenomen, en alleen ‘de’ onder ‘tussenvoegsel’. Voor de
                        gebruiker is het dus raadzaam bij het zoeken naar een persoon met een dubbele geslachtsnaam
                        ofwel eerst de lijst van De Josselin de Jong te raadplegen, ofwel te zoeken in zowel het veld
                        ‘tussenvoegsel’ als ‘geslachtsnaam’ (zie ook de <u>handleiding</u>).</p>
                    <p><br/></p>
                    <p> Geslachtsnaam-patroniem</p>
                    <p><br/></p>
                    <p> Het gegeven dat het <em>Repertorium </em>zich ook uitstrekt over de periode waarin in Nederland
                        de geslachtsnaam zich begint te ontwikkelen, heeft eveneens consequenties. Bij aanvang van de
                        periode 1588 was het voeren van een geslachtsnaam slechts bij een klein percentage van de
                        bevolking gebruikelijk. Voordelig voor het <em>Repertorium </em>is dat dat percentage nu juist
                        de hogere klassen van de samenleving betrof, van wie de in het bestand opgenomen personen bij
                        uitstek vertegenwoordigers waren. Niettemin bestonden ook binnen deze groep regionale
                        verschillen. Het zuiden en westen van de Republiek liepen wat het voeren van een geslachtsnaam
                        betreft voor op het noorden en oosten.<sup>4</sup></p>
                    <p> In het bestand bevindt zich dan ook een aanzienlijk aantal personen dat naast een voornaam
                        alleen beschikt over een patroniem. Het patroniem is in die gevallen op de plaats van de
                        geslachtsnaam opgenomen (en zal in sommige gevallen ook tot geslachtsnaam zijn verworden).
                        Daarnaast treffen we personen aan die in de bronnen aangeduid worden met voornaam, patroniem en
                        toenaam, zoals een aanduiding van het uitgeoefende beroep (bijv. Quirijn Taekesz. Ossekooper,
                        Cornelis Cornelisz. Botercoper). In die gevallen wordt zo’n toenaam (ook wanneer hij in de
                        naslagwerken niet voorkomt) opgevat als geslachtsnaam, en het patroniem achter de voornaam
                        gevoegd. Hoewel deze toenamen zich lang niet in alle gevallen tot geslachtsnaam hebben
                        ontwikkeld (dit nagaan lag buiten de reikwijdte van het project), hebben de samenstellers
                        gemeend dat met opname de kans op identificatie van een persoon door de gebruiker vergroot
                        wordt. Het is vanzelfsprekend raadzaam om bij het zoeken op patroniem ook het voornaamveld te
                        doorzoeken om niemand over het hoofd te zien.</p>
                    <p><br/></p>
                    <p><em>Aanvangs- en einddata van functies</em></p>
                    <p> De zittingstermijnen in de provinciale en landelijke colleges zijn, waar mogelijk, voorzien van
                        specifieke aanvangs- en einddata.</p>
                    <p><br/></p>
                    <p> 1588-1795</p>
                    <p> Benoemingen van leden van bestuurscolleges op provinciaal en generaliteitsniveau verliepen in de
                        periode 1588-1795 langs verschillende bestuurlijke lagen, als uitvloeisel van de bovengeschetste
                        bestuursstructuur (zie <u>bovenlokale carrièregegevens</u>). In zijn meest uitgebreide vorm zag
                        een benoeming in een bestuurscollege op generaliteitsniveau er in chronologische volgorde als
                        volgt uit:</p>
                    <p><br/></p>
                    <ol type="a">
                        <li>benoeming door (en uit) het basiscollege</li>
                        <li> benoeming/bekrachtiging door het kwartier (indien van toepassing)</li>
                        <li> benoeming/bekrachtiging door de Statenvergadering van het gewest</li>
                        <li> commissie door Staten-Generaal</li>
                        <li> ingangsdatum</li>
                        <li> eedsaflegging</li>
                        <li> sessiename (veelal direct volgend op de eedsaflegging)</li>
                    </ol>
                    <p><br/></p>
                    <p> Bij benoemingen in de provinciale bestuurscolleges ontbrak schakel d. Voor benoemingen in
                        gerechtshoven was geen lidmaatschap van een basiscollege vereist en zag het traject er dus wat
                        korter uit: commissie door de provincie<sup>5</sup>-eedsaflegging-sessiename. In sommige
                        gevallen deed de statenvergadering een nominatie van meerdere personen waaruit de stadhouder een
                        keuze maakte.</p>
                    <p> Het tijdelijke karakter van de meeste bestuursfuncties deed de gewoonte ontstaan van een
                        wisseling op een vast tijdstip in het jaar, in het overzicht hierboven weergegeven als
                        ‘ingangsdatum’. 1 mei was daarbij favoriet, maar ook andere data kwamen wel voor, afhankelijk
                        van tijd en plaats. De benoemde liet zich op die datum met de commissiebrief bij het college
                        laten aandienen, waarna de brief door de leden werd gelezen. Vervolgens werd de eed afgelegd en
                        zitting genomen. Vanaf dat moment was het nieuwe lid gerechtigd aan de beraadslagingen deel te
                        nemen.<sup>6</sup></p>
                    <p> Kenmerkend voor de Republiek waren de vele uitzonderingen op deze ideaalschets. Wat de
                        generaliteitscolleges betreft moeten we constateren dat de Hollanders er het beste aan
                        voldeden—ongetwijfeld omdat de meerderheid van deze instellingen nu eenmaal in dat gewest te
                        vinden was—, hoewel ook zij doorgaans pas in de loop van mei sessie namen. De
                        gecommitteerden/gedeputeerden uit Friesland en Overijssel kwamen vaak pas later in het jaar
                        richting Holland, ook hun commissiebrieven zijn in veel gevallen na 1 mei gedateerd. We mogen
                        aannemen dat in zulke gevallen de trits ‘commissie-eedsaflegging-sessiename’ zich op één en
                        dezelfde dag, of binnen tijdsbestek van enkele dagen, afspeelde. In de achttiende eeuw werd de
                        situatie beter, in die zin dat ook de Friezen en Overijsselaars zich meer aan de vaste
                        ingangsdatum gingen houden. In de colleges op provinciaal niveau lag ook in Friesland en
                        Overijssel de datum waarop sessie werd genomen al vanaf de aanvang dicht bij de geldende
                        ingangsdatum. Voor de Zeeuwen lag de zaak weer anders, omdat zij voor het leven werden benoemd.
                        Een vaste ingangsdatum was derhalve voor hen noch in provinciale, noch in generaliteitscolleges
                        aan de orde.</p>
                    <p> Gezien het bovenstaande zou de voorkeur vallen op het weergeven van de datum van
                        sessiename/eedsaflegging. Deze informatie is evenwel in veel gevallen niet te achterhalen,
                        vanwege het ontbreken van resolutieboeken, of omdat de sessiename eenvoudigweg niet vermeld werd
                        (ook presentielijsten zijn er lang niet altijd). Daarnaast is het werk in resolutieboeken vaak
                        arbeidsintensief, omdat indices geen vanzelfsprekendheid zijn. In praktijk zal de gebruiker in
                        veel gevallen dan ook de commissiedatum aantreffen, omdat die datum in de meeste gevallen wordt
                        weergegeven in de gebruikte seriële bronnen (commissieboeken, moderne naslagwerken etc.). De <u>institutionele
                            toelichtingen</u> vermelden voor elke instelling de gebruikte standaard-aanvangsdatum, en
                        verstrekken ook nadere inlichtingen, zoals over de in de tijd zelf gehanteerde ingangsdata.
                        Daarnaast is in de meeste gevallen in de database zelf, bij ‘bijzonderheden’, vermeld welk type
                        aanvangsdatum het betreft (zie <u>handleiding</u>).</p>
                    <p> Voor verschillende Hollandse colleges, alsmede voor de gedeputeerden ter Staten-Generaal
                        (exclusief de Zeeuwen), is overigens wel de ingangsdatum als standaard aangehouden. Wat de
                        Hollandse colleges betreft zijn hiervoor twee redenen. De eerste is de grotere eenheid in het
                        navolgen van de ingangsdatum, zowel in de tijd gezien, als tussen de basiscolleges. De tweede
                        reden is dat de serieel beschikbare data van benoeming door de Staten van Holland (uit de index
                        op de resoluties) in veel gevallen zo ver bleken af te wijken van de datum waarop men geacht
                        werd sessie te nemen—bijvoorbeeld benoemingen in december of januari, bij een ingangsdatum 1
                        mei—, dat door het weergeven van deze datum een te sterk vertekend beeld zou ontstaan. De
                        Staten-Generaal wijkt af van de overige instellingen omdat het een vergadering was, in plaats
                        van een college.<sup>7</sup> De gedeputeerden kregen toegang tot de vergadering op grond van hun
                        provinciale commissie. De data van de provinciale commissies bleken echter voor Friesland en
                        Overijssel niet serieel beschikbaar, en voor Holland gold hetzelfde argument als hierboven is
                        aangevoerd voor de benoemingsdata in provinciale colleges.</p>
                    <p> De einddatum van de functies sluiten in beginsel aan bij de aanvangsdatum van de opvolger in het
                        college, tenzij anders vermeld (bijvoorbeeld beëindiging wegens overlijden). In werkelijkheid
                        zal men soms bij benoeming in een andere functie eerder van het college afscheid hebben genomen
                        dan de opvolger was aangetreden, of juist later aan de nieuwe functie zijn begonnen dan de
                        vermelde aanvangsdatum doet vermoeden. De overlap die bij gebruik van het bestand soms bestaan
                        lijkt te hebben tussen twee functies in een individuele bovenlokale loopbaan was er in
                        werkelijkheid dus niet, omdat bovenlokale functies in principe onverenigbaar
                        waren.<sup>8</sup> Ook de weergave van verschillende typen aanvangsdata bij de diverse
                        instellingen kan voor zulke schijnbare overlappingen zorgen.<sup>9</sup> Het alternatief—de
                        einddatum van functies laten aansluiten bij de aanvangsdata van opvolgende functies binnen een
                        individuele carrière—zou overigens vergelijkbare problemen hebben opgeleverd. In sommige
                        gevallen zouden dan personen al uit een college ‘verdwenen’ zijn, terwijl ze er in werkelijkheid
                        nog deel van uitmaakten.</p>
                    <p><br/></p>
                    <p> 1795-1813</p>
                    <p> In deze periode benoemde iedere nieuwe regering nieuwe personen. Voor de benoemde en verkozen
                        bestuurders levert dit gewoonlijk een duidelijke begindatum van hun functies op. Omdat vaak met
                        de opheffing van een college ook alle daaraan verbonden personen als ontslagen werden beschouwd,
                        is als einddatum van een functie vaak de datum van feitelijke opheffing van een instelling of
                        college gekozen. Op lager administratief niveau diende de nieuwe bestuurder meestal eerst een
                        eigen organisatie op te zetten en door het bevoegd gezag te laten goedkeuren, waarna de
                        benoemingen volgden. In de tussentijd werden de zittende ambtenaren al dan niet stilzwijgend
                        gecontinueerd. </p>
                    <p> In de hoofdgegevens van het repertorium zijn de data van de formele benoemingen en ontslagen
                        aangehouden, niet de eventuele approbaties door hogere personen en instanties. Het was echter om
                        des tijds wille niet altijd mogelijk dit alles tot in detail na te zoeken. Bij de opmerkingen
                        zijn continueringen vermeld, evenals gegevens over de aard of aanleiding van het ontslag of de
                        datum van overlijden. Als er geen exacte begin- of einddatum bekend was, is alleen aangegeven
                        wat wel als vaststaand mag worden aangenomen, meestal het jaar, soms ook de maand.</p>
                    <p><br/></p>
                    <p> 1813-1861</p>
                    <p> Voor dit tijdvak worden de data verantwoord in de institutionele toelichtingen bij de
                        instellingen. Vooral de begindatum van een functie—benoeming, verkiezing, aanneming, beëdiging,
                        ingang, toelating, zittingname—bood een ruime keus. Het had de voorkeur om voor alle leden van
                        instellingen dezelfde soort datum aan te houden. Er is naar gestreefd om de werkelijke situatie
                        te benaderen. Data van toelating of zittingname, of een in het benoemingsbesluit opgenomen
                        ingangsdatum van functioneren, hadden de voorkeur. Dit was echter niet steeds te achterhalen
                        binnen de grenzen van het onderzoek.</p>
                    <p><br/></p>
                    <p><em>Adel</em></p>
                    <p> Als onderdeel van de persoonsgegevens is in het bestand informatie over het al dan niet behoren
                        tot de adel opgenomen. In de laatste deelperiode leverde dit geen problemen op, gezien de in de
                        in het Koninkrijk ingestelde regels omtrent de adeldom: alleen die families of personen die
                        benoemd, erkend, ingelijfd of verheven werden in de Nederlandse adel behoren daartoe.</p>
                    <p> De situatie in de voorgaande periode is gecompliceerder, aangezien er geen centrale instantie
                        bestond die over het al dan niet van adel zijn beschikte. ‘De adel was in staatsrechtelijk
                        opzicht een stand, die zich van de rest van de bevolking onderscheidde doordat hij toegang had
                        tot bepaalde staatsrechtelijke en maatschappelijke privileges, […].’ Degenen die deze privileges
                        genoten waren zij ‘[…] die zichzelf als adellijk beschouwden en die ook door de rest van de
                        samenleving als zodanig werden geaccepteerd.’<sup>10</sup> Bepalend voor het laatste was dat men
                        van adellijke geboorte moest zijn en een adellijke levenswijze moest hebben. Door verarming of
                        versmelting met een stedelijk patriciaat voldeden sommige families niet meer aan het laatste
                        criterium (bijvoorbeeld de families Van Foreest en Van Teylingen). Aan de andere kant waren er
                        personen die niet tot de oude feodale adel behoorden, maar in dienst van de landsheer opklommen,
                        zich in levensstijl niet meer onderscheidden van de oude adel, en ook de bijbehorende privileges
                        gingen genieten. De benedengrens van de adel was daardoor in praktijk moeilijk te trekken.
                        Bovendien kon de scheidslijn ook door families heen lopen. De gebruiker van
                        het <em>Repertorium</em> dient zich derhalve te realiseren dat de adeldom van diverse families
                        door tijdgenoten soms in twijfel werd getrokken, en dat de gekozen oplossing in
                        het <em>Repertorium </em>in die gevallen evenzeer aanvechtbaar kan zijn.<sup>11</sup> Voor de
                        periode 1795-1815 is geheel afgezien van de adellijke kwalificatie, omdat de oude adel niet meer
                        werd erkend. Wel zijn de door koning Lodewijk Napoleon en keizer Napoleon verleende titels
                        vermeld.</p>
                    <p><br/></p>
                    <p><em>Institutionele toelichtingen</em></p>
                    <p> Er is al enkele malen verwezen naar de voor elk college aanwezige <u>institutionele
                        toelichting</u>. Naast verantwoording van de bronnen voor de leden en hun zittingsdata, bevatten
                        ze essentiële gegevens als het jaar van oprichting en opheffing, de plaats van vestiging, het
                        aantal leden, de benoemende instantie, de toerbeurtstelsels (periode 1588-1795) etc. De
                        opgenomen literatuurverwijzingen zijn geenszins uitputtend. </p>
                    <p> In principe is een vast format aangehouden. Niet alle categorieën zijn evenwel relevant voor
                        elke instelling. In die gevallen zijn ze weggelaten.</p>
                    <p> Voor de periode 1795-1813 zijn geen institutionele toelichtingen beschikbaar, maar is een
                        verbinding gemaakt met de <em><u>Onderzoeksgids bestuur en administratie van de landelijke
                            overheid 1795-1795</u></em>, waarin de relevante gegevens zijn opgenomen.</p>
                    <p><br/></p>
                    <p><em>Dankwoord</em></p>
                    <p> Verschillende personen en instanties hebben aan de totstandkoming van het bestand een bijdrage
                        geleverd door niet-gepubliceerde gegevens beschikbaar te stellen. De samenstellers van
                        het <em>Repertorium </em>danken hen daarvoor hartelijk. De namen zijn:</p>
                    <p><br/></p>
                    <p> Algemene Rekenkamer, gegevens over gecommitteerden in de Generaliteits-Rekenkamer 17<sup>e</sup>-18<sup>e</sup> eeuw.
                    </p>
                    <p> L. Appel, gegevens over leden van de vroedschap van Monnickendam,
                        16<sup>e</sup>-18<sup>e</sup> eeuw.</p>
                    <p> Prof. dr. S. Groenveld, gegevens over gedeputeerden ter Staten-Generaal,
                        16<sup>e</sup>-18<sup>e</sup> eeuw.</p>
                    <p> dr. J.A.F. de Jongste, gegevens over leden van de vroedschap van Haarlem 1733-1795.</p>
                    <p> drs. F. Ch. Meijer, <em>De vroedschap van Schiedam. Een maatschappelijke en politieke
                        plaatsbepaling van de Schiedamse vroedschap gedurende de patriottentijd en de
                        restauratie</em> (doctoraalscriptie Leiden 1986).</p>
                    <p> dr. D.J. Noordam, gegevens over leden van de vroedschap van Leiden,
                        16<sup>e</sup>-18<sup>e</sup> eeuw.</p>
                    <p> drs. M.E. van Rijn, <em>Wroeten in de vroedschap. Delftse regentenfamilies in de eerste helft
                        van de 18e eeuw </em>(ongepubliceerde doctoraalscriptie Leiden 1985).</p>
                    <p> mr. O. Schutte, gegevens over de leden van de Admiraliteitscolleges
                        16<sup>e</sup>-18<sup>e</sup> eeuw.</p>
                    <p> dr. J.G. Smit, overzicht van de leden van Gecommitteerde Raden in Holland in het Zuiderkwartier
                        16<sup>e</sup>-18<sup>e</sup> eeuw, gegevens over vele regenten, verzameld in kaartsysteem.</p>
                    <p> drs. S.W.R. Strzelczyk, <em>Schiedamse regenten 1710-1740</em> (ongepubliceerde
                        doctoraalscriptie Leiden 1983).</p>
                    <p> P. Swart, gegevens over leden van de Admiraliteit in het Noorderkwartier namens Medemblik
                        16<sup>e</sup>-18<sup>e</sup> eeuw.</p>
                    <p> drs. Hanno de Vries, gegevens over leden van de vroedschap van Rotterdam, Delft en Schiedam
                        16<sup>e</sup>-18<sup>e</sup> eeuw.</p>
                    <p><br/></p>
                    <p> P. Hofland (gemeentearchief Delft), leverde een databestand van de leden van de kamer Delft van
                        de VOC 17<sup>e</sup>-18<sup>e</sup> eeuw.</p>
                    <p><br/></p>
                    <p><br/></p>
                    <div id="sdfootnote1"><p className="sdfootnote">1. Projectvoorstel A.J.C.M. Gabriëls, <em>Het
                        samenstellen van een repertorium van de leden en voornaamste ambtenaren van de regerings-,
                        bestuurs- en rechtsprekende colleges van de Generaliteit en de gewesten tijdens de Republiek der
                        Verenigde Nederlanden</em> (13 oktober 1995).</p>
                    </div>
                    <div id="sdfootnote2"><p className="sdfootnote">2. A.J.C.M. Gabriëls, <em>De heren als dienaren en
                        de dienaar als heer. Het stadhouderlijk stelsel in de tweede helft van de achttiende
                        eeuw</em> (‘s-Gravenhage 1990) 35. Er waren overigens wel enkele uitzonderingen op deze regel.
                    </p>
                    </div>
                    <div id="sdfootnote3"><p className="sdfootnote">3. Gepromoveerden in het recht worden aangeduid met
                        ‘mr.’.</p>
                    </div>
                    <div id="sdfootnote4"><p className="sdfootnote">4. R.A. Ebeling, <em>Voor- en familienamen in
                        Nederland. Geschiedenis, verspreiding, vorm en gebruik</em> (’s-Gravenhage 1993). A.M. van der
                        Woude, ‘Het gebruik van de familienaam in Holland in de zeventiende eeuw’, <em>Holland</em> 5
                        (1973), A.Th. van Deursen, <em>Een dorp in de polder. Graft in de zeventiende
                            eeuw</em> (Amsterdam 1994) 33-46.</p>
                    </div>
                    <div id="sdfootnote5"><p className="sdfootnote">5. In het geval van het Hof en de Hoge Raad van
                        Holland en Zeeland twee commissies, namelijk één Holland en één van Zeeland</p>
                    </div>
                    <div id="sdfootnote6"><p className="sdfootnote">6. Zie hiervoor Hugo de Schepper, ‘Vorstelijke
                        ambtenarij en bureaukratisering in de regering en gewesten van ’s Konings Nederlanden,
                        16<sup>de</sup>-17<sup>de</sup> eeuw’, <em>Tijdschrift voor Geschiedenis </em>90 (1977) 358-377,
                        aldaar 366-367. Weliswaar heeft de beschrijving betrekking op de Zuidelijke Nederlanden, maar de
                        resoluties van diverse colleges laten zien dat de praktijk in de Republiek dezelfde was.</p>
                    </div>
                    <div id="sdfootnote7"><p className="sdfootnote">7. Zie voor het onderscheid A.J.C.M.
                        Gabriëls,<em> De heren als dienaren en de dienaar als heer. Het stadhouderlijk stelsel in de
                            tweede helft van de achttiende eeuw</em> (’s-Gravenhage 1990) 301-302.</p>
                    </div>
                    <div id="sdfootnote8"><p className="sdfootnote">8. Gabriëls, <em>Heren</em>, 35 en noot 133. Ook op
                        deze regel is wel een enkele uitzondering geconstateerd, buiten die van het door Gabriëls
                        genoemde gecombineerde lidmaatschap van Gecommitteerde Raden van Zeeland en de Admiraliteit
                        aldaar.</p>
                    </div>
                    <div id="sdfootnote9"><p className="sdfootnote">9. Een voorbeeld: Arent van Haersma (1645-1709) had
                        van 1689-1692 voor Friesland zitting in de Generaliteits-Rekenkamer, en van 1692-1694 in de Raad
                        van State. In de database is als einddatum in de eerste functie 26 november 1692 weergegeven,
                        omdat opvolger Edzard Sirtema van Grovestins sessie nam op 27 november 1692. De weergegeven
                        aanvangsdatum van Van Haersma in de Raad van State is die van de commissie, 1 augustus 1692.
                        Hieruit kan geconcludeerd worden dat Van Haersma tussen 1 augustus en 27 november 1692 uit de
                        Generaliteits-Rekenkamer is gegaan en sessie heeft genomen in de Raad van State.</p>
                    </div>
                    <div id="sdfootnote10"><p className="sdfootnote">10. H.F.K. van Nierop, <em>Van ridders tot
                        regenten. De Hollandse adel in de zestiende en de eerste helft van de zeventiende
                        eeuw</em> (’s-Gravenhage 1984) 31-53. Ook verdere opmerkingen over de adel zijn op dit werk
                        gebaseerd. Hoewel het de adel in Holland betreft, mogen de vermelde criteria voor het behoren
                        tot de adel ook op andere gewesten van toepassing worden geacht.</p>
                    </div>
                    <div id="sdfootnote11"><p className="sdfootnote">11. Voor de vraag wie tot de Friese adel behoorde
                        is afgegaan op J. Visser, ‘Adel en “Adel” in de Staten van Friesland in de 17<sup>de</sup> en 18<sup>de</sup> eeuw’, <em>De
                            Nederlandsche leeuw</em> 78 (1961) 430-457.</p>
                    </div>
                </div>
            </div>
        </div>
    )

}