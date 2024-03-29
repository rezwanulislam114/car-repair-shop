import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './pages/AuthProvider/AuthProvider';
import BookNow from './pages/BookNow/BookNow';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import ServiceInfo from './pages/ServiceInfo/ServiceInfo';
import Services from './pages/Services/Services/Services';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route path="/services/:id">
            <ServiceInfo></ServiceInfo>
          </Route>
          <PrivateRoute path="/booking">
            <BookNow></BookNow>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
