
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Navigation from './components/Shared/Navigation/Navigation';
import Footer from './components/Shared/Footer/Footer';
import Blog from './components/Home/Blog/Blog';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation/>
      <Switch>
       <Route exact path='/'>
       <Home/>
       </Route>
       <Route path='/home'>
       <Home/>
       </Route>
       <Route path='/blog'>
       <Blog/>
       </Route>
      </Switch>
      <Footer/>
      </Router>
   
    </div>
  );
}

export default App;
