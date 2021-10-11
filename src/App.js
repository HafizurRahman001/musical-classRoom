import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import ContactUs from './components/Contact us/ContactUs';
import Footer from './components/Footer/Footer';
import NotFound from './components/Not Found/NotFound';

function App() {

  return (
    <div className="">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/about'>
            <About></About>
          </Route>
          <Route exact path='/services'>
            <Services></Services>
          </Route>
          <Route exact path="/contact-us">
            <ContactUs></ContactUs>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
