import React, {createElement} from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/style.css';
import {
    App,
    PageHeader,
    Search,
    Detail as BrowserDetail,
    createSearchLoader,
    createDetailLoader,
    searchUtils,
    SearchParams
} from '@knaw-huc/browser-base-react';
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom';
import InstellingFacets from "./components/facets/instellingFacets";
import PersonFacets from "./components/facets/personfacets";
import AanstellingFacets from "./components/facets/aanstellingFacets";
import InstellingListItem from "./components/search/instellingListItem";
import PersonListItem from "./components/search/personListItem";
import AanstellingListItem from "./components/search/aanstellingListItem";
import {InstellingDetail} from "./components/details/instellingDetail";
import PersonDetail from "./components/details/personDetail";
import {Header} from "./components/pageHeader";
import {Home} from "./components/home";
import About from "./components/about";
import Inleiding from "./components/inleiding";
import {TestHeader} from "./components/search/testHeader";
import {BASE_URL} from "./misc/config";

const header = <Header/>
const robHeader = <TestHeader/>
const instellingSearchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, BASE_URL + '/browse_instelling', 20);
const personSearchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, BASE_URL + '/browse_person', 20);
const aanstellingSearchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, BASE_URL + '/browse_aanstelling', 20);
const title = 'RAA Browser';
const instellingDetailLoader = createDetailLoader(id => BASE_URL + `/get_instelling_detail/${id}`);
const personDetailLoader = createDetailLoader(id => BASE_URL + `/get_person_detail/${id}`);
const routeObject: RouteObject = {
    path: '/',
    element: <App header={header}/>,
    children: [
        {index: true, element: <Home/>},
        {
            path: "/instellingen",
            loader: async ({request}) => instellingSearchLoader(new URL(request.url).searchParams),
            element: <Search title={title} pageLength={30} withPaging={true}
                             hasIndexPage={false} showSearchHeader={false} updateDocumentTitle={false}
                             searchParams={SearchParams.PARAMS} FacetsComponent={InstellingFacets}
                             ResultItemComponent={InstellingListItem}/>
        }, {
            path: '/instelling_detail/:id',
            loader: async ({params}) => instellingDetailLoader(params.id as string),
            element: <BrowserDetail title={title} updateDocumentTitle={false} DetailComponent={InstellingDetail}/>
        }, {
            path: "/personen",
            loader: async ({request}) => personSearchLoader(new URL(request.url).searchParams),
            element: <Search title={title} pageLength={30} withPaging={true}
                             hasIndexPage={false} showSearchHeader={false} updateDocumentTitle={false}
                             searchParams={SearchParams.PARAMS} FacetsComponent={PersonFacets}
                             ResultItemComponent={PersonListItem} headersElement={robHeader}/>
        }, {
            path: '/person_detail/:id',
            loader: async ({params}) => personDetailLoader(params.id as string),
            element: <BrowserDetail title={title} updateDocumentTitle={false} DetailComponent={PersonDetail}/>
        }, {
            path: "/aanstellingen",
            loader: async ({request}) => aanstellingSearchLoader(new URL(request.url).searchParams),
            element: <Search title={title} pageLength={30} withPaging={true}
                             hasIndexPage={false} showSearchHeader={false} updateDocumentTitle={false}
                             searchParams={SearchParams.PARAMS} FacetsComponent={AanstellingFacets}
                             ResultItemComponent={AanstellingListItem}/>
        }, {
            path: '/colofon',
            element: <About/>
        },{
            path: '/inleiding',
            element: <Inleiding/>
        }]
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

        <RouterProvider router={createBrowserRouter([routeObject])}/>
);
