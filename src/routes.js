import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Applications from "./Components/applications";
import Dashboard from "./Components/dashboard";
import DataList from "./Components/dataList";
import Discover from "./Components/discover";
import Documents from "./Components/documents";
import FileManager from "./Components/fileManager";
import Inbox from "./Components/inbox";
import LogOut from "./Components/logOut";
import Pages from "./Components/pages";
import Settings from "./Components/settings";
import Support from "./Components/support";
import Users from "./Components/users";

const Routes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/discover" exact component={Discover} />
        <Route path="/users" exact component={Users} />
        <Route path="/documents" exact component={Documents} />
        <Route path="/applications" exact component={Applications} />
        <Route path="/pages" exact component={Pages} />
        <Route path="/support" exact component={Support} />
        <Route path="/inbox" exact component={Inbox} />
        <Route path="/fileManager" exact component={FileManager} />
        <Route path="/dataList" exact component={DataList} />
        <Route path="/settings" exact component={Settings} />
        <Route path="/logOut" exact component={LogOut} />
        <Redirect from="/" to="/dashboard" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
