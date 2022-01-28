
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Blog from './components/Home/Blog/Blog';
import SignUp from './components/Home/Register/SignUp';
import Login from './components/Home/Register/Login';
import Details from './components/Home/Details/Details';
import Dashboard from './components/Home/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';
import OffersDetails from './components/Home/Details/OffersDetails';
import AddExperince from './components/Home/AddExperince/AddExperince';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AllOrders from './components/Home/Dashboard/AllOrders/AllOrders';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route path='/home'>
       <Home/>
       </Route>
       <PrivateRoute path='/details/:id'>
       <Details/>
       </PrivateRoute>
       <PrivateRoute path='/offer-details/:id'>
         <OffersDetails/>
       </PrivateRoute>
       <PrivateRoute path='/blog'>
       <Blog/>
       </PrivateRoute>
       <Route path='/addExperince'>
         <AddExperince/>
       </Route>
       <Route path='/login'>
         <Login/>
       </Route>
       <Route path='/signin'>
         <SignUp/>
       </Route>
       <Route  path='/dashboard'>
         <Dashboard/>
       </Route>
       <Route path='/all-orders'>
         <AllOrders/>
       </Route>

       <Route path='*'>
         <NotFound/>
       </Route>
      </Switch>
    </Router>
    </AuthProvider>
   
    </div>
  );
}

export default App;
