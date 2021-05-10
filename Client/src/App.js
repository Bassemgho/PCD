import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Partenaire from './pages/Partenaire';
import Team from './pages/Team';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Maps from './pages/Maps';
import Profil from './pages/Profil';
import Clients from './pages/Clients';
import Paramcarte from './pages/Paramcarte';
import Pointsvente from './pages/Pointsvente';
import Categories from './pages/Categories';
import Event from './pages/Event';
import GestionCaissier from './pages/GestionCaissier';
import Caissier from './pages/Caissier';
import Admin from './pages/Admin';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {useState} from 'react';
import {Redirect} from 'react-router-dom';
/*import Footer from './components/Footer';*/

/*import Header from './components/Header';*/

function App() {
  const [authorized,setAuthorized] = useState(false)
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
            <Route path='/signin' render={(props) => (<Signin {...props} authorized={authorized} setAuthorized={setAuthorized}  />)          } />
            <Route path='/signup' component={Signup} />
            {/*<Route path='/dashboard' component={Dashboard} />*/}
            <Route path='/dashboard' render={(props) => (<Dashboard {...props} authorized={authorized} setAuthorized={setAuthorized} />) } />
            <Route path='/maps' component={Maps} />
            <Route path='/profil' component={Profil} />
            <Route path='/clients' component={Clients} />
            <Route path='/paramcarte' component={Paramcarte} />
            <Route path='/pointsvente' component={Pointsvente} />
            <Route path='/categories' component={Categories} />
            <Route path='/event' component={Event} />
            <Route path='/gestioncaissier' component={GestionCaissier} />
            <Route path='/caissier' component={Caissier} />
            <Route path='/admin' component={Admin} />
          </Switch>        



      </Router>
    </div>

  );
}

export default App;
