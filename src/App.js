
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Blog from './components/Home/Blog/Blog';
import SignUp from './components/Home/Register/SignUp';
import Login from './components/Home/Register/Login';
import Details from './components/Home/Details/Details';
import Dashboard from './components/Home/Dashboard/Dashboard';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route path='/home'>
       <Home/>
       </Route>
       <Route path='/details/:id'>
       <Details/>
       </Route>
       <Route path='/blog'>
       <Blog/>
       </Route>
       <Route path='/login'>
         <Login/>
       </Route>
       <Route path='/signup'>
         <SignUp/>
       </Route>
       <Route  path='/dashboard'>
         <Dashboard/>
       </Route>
       {/* <Route path='/dashboard'>
         <MainDash/>
       </Route> */}

       <Route path='*'>
         <NotFound/>
       </Route>
      </Switch>
    </Router>
   
    </div>
  );
}

export default App;
