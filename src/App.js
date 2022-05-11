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
import { Admin, Resource,ListButton } from 'react-admin';
import { theme } from "./theme";
import myDataProvider from './dataProvider';
import Dashboard from './Dashboard';
import { PostList, PostCreate, PostEdit, PostShow } from './posts';
import PostIcon from '@material-ui/icons/Book';

const CommentListButton = () => (
    <ListButton basePath="/comments" label="Comments" />
);  

const App = () => (
    <Admin  dataProvider={myDataProvider}
            theme={theme}
            dashboard={Dashboard} >
      <Resource name="posts" list={PostList} create={PostCreate} edit={PostEdit} show={PostShow} icon={PostIcon} />
    </Admin>
);

export default App;
