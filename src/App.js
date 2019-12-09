import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

const tab = [{
  cl:'hom',
  title: 'home',
  link: 'home',
  active: true
},
{cl:'serv',
  title: 'services',
  link: 'service',
  active: false,
  subMenu: ['for Entrepreneurs', 'for students', 'for hobbyists']
},
{ cl:'contact',
  title: 'contact',
  link: 'contact',
  active: false
}]
function App() {
  return (
    <ul className="navbar">{tab.map(el=> <Navbar item={el}/>)}
    
    </ul>
    
  );
}

export default App;
