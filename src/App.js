import * as React from "react";
import { Admin, Resource  } from 'react-admin';
import Dashboard from "./Dashboard";
import { theme } from "./theme";
import myDataProvider from './dataProvider';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken, jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';

let authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "http://185.231.115.209:8080/PMWorks/token/"});

const App = () => (
    <Admin dashboard={Dashboard} theme={theme} disableTelemetry authProvider={authProvider} dataProvider={myDataProvider}>
         <Resource />
    </Admin>
);

export default App;

////////////////////////////////////////

import * as React from "react";
import myDataProvider from './dataProvider';
import {Admin, Resource} from 'react-admin';
import Dashboard from './Dashboard';
import { PostList, PostCreate, PostEdit, PostShow } from './posts';
import { UserList } from './users';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import farsiMessages from 'ra-language-farsi';
import polyglotI18nProvider from 'ra-i18n-polyglot';
import drfProvider, { tokenAuthProvider, fetchJsonWithAuthToken, jwtTokenAuthProvider, fetchJsonWithAuthJWTToken } from 'ra-data-django-rest-framework';

let authProvider = jwtTokenAuthProvider({obtainAuthTokenUrl: "http://185.231.115.209:8080/PMWorks/token/"});

const messages = {
    'fa': farsiMessages,
}
const i18nProvider = polyglotI18nProvider(locale => messages[locale], 'fa');
 

const App = () => (
    <Admin
            dataProvider={myDataProvider}
            i18nProvider={i18nProvider}
            dashboard={Dashboard} 
            authProvider={authProvider} >    
            <Resource name="PMWorks/Delay" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}  show={PostShow} />
            <Resource name="users" list={UserList} icon={UserIcon} />
      
    </Admin>
);
export default App;


