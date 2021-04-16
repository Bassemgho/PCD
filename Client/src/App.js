import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Left from './pages/Left';
import Right from './pages/Right';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header/>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/left' component={Left} />
            <Route path='/right' component={Right} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />

          </Switch>        

        <Footer/>

      </Router>
    </div>

  );
}

export default App;
