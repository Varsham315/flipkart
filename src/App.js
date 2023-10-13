import './App.css'
import './css/bootstrap.css'
import React from 'react'
import Searchbar from './components/Searchbar'
import Dowbbar from './components/Dowbbar'
import Dis from './components/Dis'
import Three from './components/Three'
import Form from './components/Form'

function App() {
  return (

    <div className='container-fluid'>
      <div className='row'>
        <Searchbar/>
        <Dowbbar/>
        <Dis/>
        <Three/>
        <Form/>
     
      </div>
    </div>
    
  );
}

export default App;

