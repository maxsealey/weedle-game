import React from 'react'
import './index.scss'
import Header from './components/layout/Header/Header'
import Dashboard from './components/layout/Dashboard/Dashboard'

const App = () => {
    return (
      <div className="App">
        <Header/>
        <Dashboard />
      </div>
    )
}

export default App;
