/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import UserLogin from '../Login/UserLogin'
import DisplayMedicalRecords from '../Medical_Records/DisplayMedicalRecords'

const App = () => {
  return (
    <>
      <header>
        <img src="./images/dhg_whole.png"  alt='image'/>
      </header>
      <BrowserRouter>
        <Switch>
            <Route path='/' component={UserLogin} exact/>
            <Route path='/medicalRecords' component={DisplayMedicalRecords} exact/>
        </Switch>
      </BrowserRouter>
      <footer>
      </footer>
    </>
  );
}

export default App;
