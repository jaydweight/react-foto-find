import React, { Component } from 'react';
import SearchField from './SearchField';
import PhotoResults from './PhotoResults';
import './App.css';

class App extends Component {
  
  state = {
    user: [
        {
          name: 'Kira',
          image: "https://photos.google.com/search/kira/photo/AF1QipMhLi_qw7Xcr3Kz7skyRspM1GIqIDb2uzOKTSMK"
        },
        {
          name: 'Kennedy',
          image: "https://photos.google.com/search/_cAF1QipO8-RKVh~uP12lO52cg3t2FUwhaIdbx-rjs_Kennedy/photo/AF1QipNEBtHKphJuUcR2z9HjRE3wAlX3r0zrDC4A3QNI"
        },
        {
          name: 'Hunter',
          image: "https://photos.google.com/search/_cAF1QipPMXS81RF55nMUkENOU2g-PWBL6ZRFAkIw_Hunter/photo/AF1QipP-t83y13fkCVrb9lvAFEGW2HyQSRwPXc-dHA4p"
        },
        {
          name: 'Lucy',
          image: "https://photos.google.com/search/_cAF1QipPcNdb5QgOAHsFWJpVlNrXfw47gbv0ha-U_Lucy/photo/AF1QipMrxDuknurySfg0AKxwRIoQRWWZENzW5-GOGTeB"
        },
        {
          name: 'Crew',
          image: "https://photos.google.com/search/_cAF1QipNVn~u8KH060CFDnxjls2I7NRjfCw3S98pM_Crew/photo/AF1QipOFM3bWLsyChZOEWBH6H1JLimwlTtA_JyvN3pTH"
        }
      ]   
    }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Foto Find</h1>
          <p>An App to help you find your fotos</p>
          <SearchField />
        </header>
        <div className="main">
          <PhotoResults 
            photos={this.state.user.name} />
        </div>
      </div>
    );
  }
}

export default App;
