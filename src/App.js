import './App.css';
import Dashboard from './dashboard/dashboard';
import SideBar from './sidebar';
import Topbar from './topbar';
import UserList from './userlist';
import UserCreate from './usercreate';
import UserEdit from './useredit';
import ProfileCreate from './profilecreate';
import ProfileEdit from './profileedit';


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
    <div id="wrapper">
    <SideBar></SideBar>
    <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <Topbar></Topbar>
      <div class="container-fluid">
          <Switch>
            <Route path="/dashboard" component={Dashboard} exact={true}/>
            <Route path="/userlist" component={UserList} exact={true}/>
            <Route path="/usercreate" component={UserCreate} exact={true}/>
            <Route path="/useredit/:id" component={UserEdit} exact={true}/>
          </Switch>
      </div>
      <div class="container-fluid">
        <Switch>
          <Route path="/profilecreate" component={ProfileCreate} exact={true}/>
          <Route path="/profileedit/:id" component={ProfileEdit} exact={true}/>
        </Switch>
      </div>
    </div>
    </div>
    </div>
    </Router>
    </>
  );
}

export default App;
