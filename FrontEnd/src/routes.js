//Todas as rotas do sistema
import React from "react";
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signup";
import System from "./pages/system";
import Profile from "./pages/profile";
import EditPassword from "./pages/editPasswordUser";
import Userlist from "./pages/userlist";
import { isAuthenticated } from "./services/auth";

//Rota privada para verificar se usuário está autenticado ou não.
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to="/" />
        )
    }
  />
);


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <PrivateRoute path={`/Profile/:id`}>
        <Profile />
      </PrivateRoute>
      <PrivateRoute path={`/EditPassword/:id`}>
        <EditPassword />
      </PrivateRoute>
      <Route exact path="/signup" component={SignUp} />
      <PrivateRoute path="/system" component={System} />
      <PrivateRoute path="/userlist" component={Userlist} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;