import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Components
import Testbox from './Components/Testbox';
import PageHeader from './Components/PageHeader';

// Needed for react-bootstrap to work.
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div>
        {/* <Testbox 
          testboxClass='testbox'
          testboxText='Hello World!'
        /> */}
        <PageHeader 
          headerColor='bg-success'
          textColor='text-white'
          headerText='Pomodoro Timer'
          headerSubtext='Lorem'
        />
        
      </div>
    )
  }

  
}

export default App;
