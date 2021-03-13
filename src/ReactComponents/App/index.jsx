/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {Router, Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import UserLogin from '../Login/UserLogin'
import DisplayMedicalRecords from '../Medical_Records/DisplayMedicalRecords'
import history from '../history'

const App = () => {
  return (
    <>
      <header>
        <img src="./images/dhg_whole.png"  alt='image'/>
      </header>
      <Router history= {history}>
            <Route path='/' component={UserLogin} exact/>
            <Route path='/medicalRecords' component={DisplayMedicalRecords} exact/>
      </Router>
      <footer>
      </footer>
    </>
  );
}

export default App;
