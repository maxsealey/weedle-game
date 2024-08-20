import React from 'react'
import './index.scss'
import Header from './components/layout/Header/Header'
import Dashboard from './components/layout/Dashboard/Dashboard'
import Footer from './components/layout/Footer/Footer'

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
