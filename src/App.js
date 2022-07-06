import React, { Component } from 'react'
import './App.scss'
import Header from './components/layout/Header'
import Dashboard from './components/layout/Dashboard'
import Footer from './components/layout/Footer'

const App = () => {
    return (
      <div className="App">
        <Header/>
        <Dashboard/>
        <Footer/>
      </div>
    )
}

export default App;
