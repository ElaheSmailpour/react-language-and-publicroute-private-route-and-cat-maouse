import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ChangeLanguage from "./pages/Language"
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Admin from '../src/pages/Admin';
import Cat from '../src/pages/Cat';
import Snake from './pages/Snake';
import "./i18n"
import Mouse from './pages/Mouse';
function App() {

  return <div>
    <Mouse render={(x, y) => {
      return <div>
        <Cat x={x+100} y={y} />
        <Snake x={x +50} y={y+100}/>
        </div>
    }} />
    <BrowserRouter>


      <Switch>
        <Route exact path="/" render={() => <Redirect to={"/home"}></Redirect >} />
        <Route path="/home" component={Home} />
        <Route path="/lan" component={ChangeLanguage} />
        <PublicRoute path="/login" component={Login} ></PublicRoute>
        <PrivateRoute path="/admin" Component={Admin} ></PrivateRoute>
      </Switch>


    </BrowserRouter>
  </div>

}
const isLogin = () => !!localStorage.getItem("Auth-Key")

const PublicRoute = ({ componet, ...props }) => {
  return <Route {...props} render={() => {
    if (isLogin())
      return <Redirect to={"/admin"} />
    else return React.createElement(props.component)

  }} />
}


const PrivateRoute = ({ Component, ...props }) => {
  return <Route {...props} render={() => {

    if (isLogin())
      return React.createElement(Component)
    else return <Redirect to={"/login"} />
  }} />
}


export default App;
