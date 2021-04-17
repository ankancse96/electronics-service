import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import { createContext,useState } from 'react';
import AddService from "./components/AddService/AddService";
import CheckOut from "./components/Home/CheckOut/CheckOut";

import Home from "./components/Home/Home/Home";
import NavBar from "./components/Home/Navbar/NavBar";
import Login from './components/Login/Login'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Order from "./components/Order/Order";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import AddRating from "./components/AddRating/AddRating";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Engineers from "./components/Dashboard/Dashboard/Engineers/Engineers";
import TotalOrder from "./components/TotalOrder/TotalOrder";

export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (

    
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
          <NavBar></NavBar>
          <Switch> 

              <Route path="/home">
                 <Home />
              </Route>

              <PrivateRoute path="/dashboard">
                 <Dashboard />
              </PrivateRoute>

              <Route path="/sidebar">
                 <Sidebar />
              </Route>

              <Route path="/login">
                 <Login />
              </Route>

              <Route path="/engineer">
                 <Engineers />
              </Route>

              <Route path="/manageProduct">
                 <ManageProduct />
              </Route>

              <Route path="/rating">
                 <AddRating />
              </Route>

              <Route path="/totalOrder">
                 <TotalOrder />
              </Route>
              
            <PrivateRoute path="/orders">
              <Order />
             </PrivateRoute>

             

            <Route exact path="/">
              <Home />
            </Route>

            <PrivateRoute path="/checkOut/:name">
              <CheckOut />
            </PrivateRoute>

            <Route path="/admin">
              <AddService />
             </Route>

            
            

            

            

          </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
