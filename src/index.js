import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import App from './App';

window.addEventListener('focus',function(){
  this.document.title='FureverHome';
})
window.addEventListener('blur',function(){
  this.document.title='Come back!!  We are Waiting!!';
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
