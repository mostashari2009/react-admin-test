import * as React from "react";
import { Admin, Resource  } from 'react-admin';
import Dashboard from "./Dashboard";
import { theme } from "./theme";
import myDataProvider from './dataProvider';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken, jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';

let authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "http://185.231.115.209:8080//PMWorks/token/"});

const App = () => (
    <Admin dashboard={Dashboard} theme={theme} disableTelemetry authProvider={authProvider} dataProvider={myDataProvider}>
         <Resource />
    </Admin>
);

export default App;
