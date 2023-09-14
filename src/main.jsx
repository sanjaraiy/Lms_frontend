//Component imports
import App from './App.jsx'

//CSS imports
import './index.css';

//Library imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
   <Provider store={store}>
     <BrowserRouter>
         <App />
         <Toaster></Toaster>
    </BrowserRouter> 
   </Provider>
  
    
 
)
