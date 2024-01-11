
import './App.css';
import EditProfile from './components/EditProfile';
import Footer from './components/Footer';
import FranchisesArea from './components/FranchisesArea';
import FranchisesHeader from './components/FranchisesHeader';
import Navbar from './components/NavBar';

import React, { Component } from 'react'
import Settings from './components/Settings';

export default class App extends Component {

  state = {
    editProfile: true,
    settings: true
  }

  showSettings= ()=> this.setState({settings: false, editProfile: true})
  showProfile= ()=> this.setState({editProfile: false , settings: true}) 
  showHome = () => this.setState({editProfile: true , settings: true})

  render() {
    return (
      <>
      <Navbar showSettings={this.showSettings} showProfile={this.showProfile} showHome={this.showHome} />
      {this.state.editProfile && this.state.settings  && <>
      <FranchisesHeader />
      <FranchisesArea movies={['harry potter', 'lord of the rings' , 'the avengers' , 'fast and furious' , 'mission impossible']} />
      <Footer />
      </>}
      {!this.state.editProfile && <EditProfile showHome={this.showHome} />}
      {!this.state.settings && <Settings />}
      </>
    )
  }
}

