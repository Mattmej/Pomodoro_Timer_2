import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Testbox from './Components/Testbox';

// Needed for react-bootstrap to work.
import 'bootstrap/dist/css/bootstrap.min.css';

import Jumbotron from 'react-bootstrap/Jumbotron';


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {

  render() {
    return (
      <div>
        {/* <Testbox 
          testboxClass='testbox'
          testboxText='Hello World!'
        /> */}
        <Jumbotron>Hello World</Jumbotron>
      </div>
    )
  }

  
}

export default App;
