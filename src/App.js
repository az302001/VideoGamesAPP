import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { LandingPage } from './components/LadingPage/LadinPage';
import Home from './components/Home/home';
import Detail from './components/ContryDetail/Details';
import AddActivity from './components/AddActivity/AddActivity';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>

          <Route exact path='/home'>
            <Home />
          </Route>

          <Route exact path="/Countrydetail/:id">
            <Detail/>
          </Route>
          
          <Route exact path="/addActivity">
          <AddActivity />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
