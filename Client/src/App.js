import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Partenaire from './pages/Partenaire';
import Team from './pages/Team';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Profil from './pages/Profil';
import Clients from './pages/Clients';
import Paramcarte from './pages/Paramcarte';
import Pointsvente from './pages/Pointsvente';
import Event from './pages/Event';
import GestionCaissier from './pages/GestionCaissier';
import Admin from './pages/Admin';
import Bons from './pages/Bons';
import Reduction from './pages/Reduction';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
/*import Footer from './components/Footer';*/

/*import Header from './components/Header';*/

function App() {
  const [authorized,setAuthorized] = useState(false)
  const [token,setToken] = useState("");
  return (
    <div>
      <Router>
       
       
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/partenaire' component={Partenaire} />
            <Route path='/team' component={Team} />
            {/*<Route path='/signin' component={Signin} />*/}
            <Route path='/signin' render={(props) => (<Signin {...props} authorized={authorized} setAuthorized={setAuthorized} token={token} setToken={setToken}  />)          } />
            <Route path='/signup' component={Signup} />
            {/*<Route path='/dashboard' component={Dashboard} />*/}
            <Route path='/dashboard' render={(props) => (<Dashboard {...props} authorized={authorized} setAuthorized={setAuthorized} token={token} />) } />
            
            {/*<Route path='/profil' component={Profil} />*/}
            <Route path='/profil' render={(props) => (<Profil {...props} authorized={authorized} setAuthorized={setAuthorized} token={token} />) } />
            {/*<Route path='/clients' component={Clients} />*/}
            <Route path='/clients' render={(props) => (<Clients {...props} authorized={authorized} setAuthorized={setAuthorized} token={token} />) } />
            {/*<Route path='/paramcarte' component={Paramcarte} />*/}
            <Route path='/paramcarte' render={(props) => (<Paramcarte {...props} authorized={authorized} setAuthorized={setAuthorized} token={token}/>) } />
            {/*<Route path='/pointsvente' component={Pointsvente} />*/}
            <Route path='/pointsvente' render={(props) => (<Pointsvente {...props} authorized={authorized} setAuthorized={setAuthorized} token={token} />) } />
            
            {/*<Route path='/event' component={Event} />*/}
            <Route path='/event' render={(props) => (<Event {...props} authorized={authorized} setAuthorized={setAuthorized} token={token}/>) } />
            {/*<Route path='/gestioncaissier' component={GestionCaissier} />*/}
            <Route path='/gestioncaissier' render={(props) => (<GestionCaissier {...props} authorized={authorized} setAuthorized={setAuthorized} token={token} />) } />
            <Route path='/bons' render={(props) => (<Bons {...props} authorized={authorized} setAuthorized={setAuthorized} token={token} />) } />
            <Route path='/reduction' render={(props) => (<Reduction {...props} authorized={authorized} setAuthorized={setAuthorized} token={token} />) } />

            <Route path='/admin' component={Admin} />
          </Switch>        



      </Router>
    </div>

  );
}

export default App;
