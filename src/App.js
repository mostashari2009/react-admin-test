import * as React from "react";
import myDataProvider from "./dataProvider";
import { Admin, Resource, Layout } from "react-admin";
import Dashboard from "./Dashboard";
import { DelayList, DelayCreate, DelayEdit, DelayShow } from "./delay";
import { UserList } from "./users";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import farsiMessages from "ra-language-farsi";
import polyglotI18nProvider from "ra-i18n-polyglot";
import Theme from "./theme";
import drfProvider, {
  tokenAuthProvider,
  fetchJsonWithAuthToken,
  jwtTokenAuthProvider,
  fetchJsonWithAuthJWTToken,
} from "ra-data-django-rest-framework";
import AddBoxOutlinedIcon from "@material-ui/icons/AddBoxOutlined";
import TreeMenu from "@bb-tech/ra-treemenu";
import MyLoginPage from "./MyLoginPage";
import MyLayout from "./MyLayout";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";

//import WorkRequestList from "./WorkRequest/wrl";
import WorkRequestList from "./WorkRequest/WorkRequestList";
import { WorkRequestCreate } from "./WorkRequest/WorkRequestCreate";
import WorkRequestEdit from "./WorkRequest/WorkRequestEdit";
import WorkRequestShow from "./WorkRequest/WorkRequestShow";
 
let authProvider = jwtTokenAuthProvider({
  obtainAuthTokenUrl: "http://185.231.115.209:8080/PMWorks/token/",
});

const messages = {
  fa: farsiMessages,
};
const i18nProvider = polyglotI18nProvider((locale) => messages[locale], "fa");

const App = () => (
  <Admin
    disableTelemetry
    theme={Theme}
    layout={MyLayout}
    loginPage={MyLoginPage}
    dataProvider={myDataProvider}
    i18nProvider={i18nProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
    menu={TreeMenu}
  >
    <Resource
      name="modiriat"
      icon={AddBoxOutlinedIcon}
      options={{ label: "پنل کاربری", isMenuParent: true }}
    />
    <Resource
      name="PMWorks/Delay"
      options={{ label: "تاخیرات" }}
      list={DelayList}
      edit={DelayEdit}
      create={DelayCreate}
      icon={PostIcon}
      show={DelayShow}
    />
    <Resource
      name="PMWorks/WorkRequest"
      icon={ArrowLeftOutlinedIcon}
      options={{ label: "درخواست کار" }}
      list={WorkRequestList}
      edit={WorkRequestEdit}
      create={WorkRequestCreate}
      show={WorkRequestShow}
    />
    <Resource name="PMWorks/AssetSubdivision" />
    <Resource name="PMWorks/FailureMode" />
    <Resource name="PMWorks/Asset" />
    <Resource name="PMWorks/WorkPriority" />
    <Resource name="PMWorks/TypeWr" />
    <Resource name="PMWorks/Status" />
    <Resource name="PMWorks/AssetClass" />
    <Resource name="PMWorks/FailureAsset" />
    <Resource
      name="users"
      options={{ label: "تجهیزات" }}
      list={UserList}
      icon={UserIcon}
    />
  </Admin>
);
export default App;
