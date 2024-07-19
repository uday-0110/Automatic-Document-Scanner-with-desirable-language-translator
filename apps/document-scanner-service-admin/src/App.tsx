import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AccountList } from "./account/AccountList";
import { AccountCreate } from "./account/AccountCreate";
import { AccountEdit } from "./account/AccountEdit";
import { AccountShow } from "./account/AccountShow";
import { ImageCaptureList } from "./imageCapture/ImageCaptureList";
import { ImageCaptureCreate } from "./imageCapture/ImageCaptureCreate";
import { ImageCaptureEdit } from "./imageCapture/ImageCaptureEdit";
import { ImageCaptureShow } from "./imageCapture/ImageCaptureShow";
import { SettingsList } from "./settings/SettingsList";
import { SettingsCreate } from "./settings/SettingsCreate";
import { SettingsEdit } from "./settings/SettingsEdit";
import { SettingsShow } from "./settings/SettingsShow";
import { ProcessingStatusList } from "./processingStatus/ProcessingStatusList";
import { ProcessingStatusCreate } from "./processingStatus/ProcessingStatusCreate";
import { ProcessingStatusEdit } from "./processingStatus/ProcessingStatusEdit";
import { ProcessingStatusShow } from "./processingStatus/ProcessingStatusShow";
import { TranslationList } from "./translation/TranslationList";
import { TranslationCreate } from "./translation/TranslationCreate";
import { TranslationEdit } from "./translation/TranslationEdit";
import { TranslationShow } from "./translation/TranslationShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DocumentScannerService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Account"
          list={AccountList}
          edit={AccountEdit}
          create={AccountCreate}
          show={AccountShow}
        />
        <Resource
          name="ImageCapture"
          list={ImageCaptureList}
          edit={ImageCaptureEdit}
          create={ImageCaptureCreate}
          show={ImageCaptureShow}
        />
        <Resource
          name="Settings"
          list={SettingsList}
          edit={SettingsEdit}
          create={SettingsCreate}
          show={SettingsShow}
        />
        <Resource
          name="ProcessingStatus"
          list={ProcessingStatusList}
          edit={ProcessingStatusEdit}
          create={ProcessingStatusCreate}
          show={ProcessingStatusShow}
        />
        <Resource
          name="Translation"
          list={TranslationList}
          edit={TranslationEdit}
          create={TranslationCreate}
          show={TranslationShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
