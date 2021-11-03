import './App.css';
import React from 'react';
import Header from './Components/Header';
import Lista from './Components/Lista';
import Libros from './Components/Libros';
import 'bootstrap/dist/css/bootstrap.min.css';
import LibreriaProvider from './Context/LibreriaContext';

function App(){
    return (
      <div className="App">
        <Header/>
        <LibreriaProvider>
          <div className="Diseño">
              <Libros/>
              <Lista/>            
          </div> 
        </LibreriaProvider>
      </div>
    )
}
export default App;
