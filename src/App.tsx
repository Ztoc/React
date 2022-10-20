import React from 'react';
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './store';
import CheckOut from './components/CheckOut';

function App() {
  return (
  <Provider store={store}>
    
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main ></Main>} />
          <Route path='/checkout' element={<CheckOut ></CheckOut>} />
        </Routes>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
