import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import NavBar from '../src/components/Navbar.js'
import Home from '../src/components/Home.js'
import FestivalIndex from '../src/components/FestivalIndex.js'
import Register from '../src/components/Register.js'
import Login from '../src/components/Login.js'
import Footer from '../src/components/Footer.js'
import FestivalPage from '../src/components/FestivalPage.js'
import UserProfile from './components/UserProfile.js'
import FestivalMap from './components/FestivalMap.js'
import RegLogin from './components/RegLogin.js'
import ArtistIndex from './components/ArtistIndex.js'
import About from './components/About.js'
import ArtistCard from './components/ArtistCard.js'

const App = () =>{

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route exact path ="/home">
          <Home/>
        </Route>
        <Route exact path ="/festival-map"> {/*Uses the FestivalCard component to display all festivals*/}
          <FestivalMap/>
        </Route>
        <Route exact path ="/festivals"> {/*Uses the FestivalCard component to display all festivals*/}
          <FestivalIndex/>
        </Route>
        <Route exact path ="/festivals/:id"> {/*Uses FestivalPage component to display one specific festival by id*/}
          <FestivalPage/>
        </Route>
        <Route exact path ="/artists"> {/*Uses the FestivalCard component to display all festivals*/}
          <ArtistIndex/>
        </Route>
        <Route exact path ="/artists/:id"> {/*Uses FestivalPage component to display one specific festival by id*/}
          <ArtistCard/>
        </Route>
        <Route exact path ="/userprofile"> {/*Default route, gets users own profile by default?*/}
          <UserProfile/>
        </Route>
        <Route exact path ="/userprofile/:id"> {/*Search route for another users profile*/}
          <UserProfile/>
        </Route>
        <Route exact path ="/sign-in">
          <RegLogin/>
        </Route>
        <Route exact path ="/register">
          <Register/>
        </Route>
        <Route exact path ="/login">
          <Login/>
        </Route>
        <Route exact path ="/about">
          <About/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
