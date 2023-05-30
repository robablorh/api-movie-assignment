import React from 'react';
import { Link } from 'react-router-dom';

const Side1 = () => {
  return (
    <div className='scont1'>
        <h4 className='h4cont1'>ROBFLIX</h4>

      <p className='pcont1'> MENU</p>
      <ul className='ulcont1'>
        <li><a href='/'>Home</a></li>
        <li><a href='/communities'>Communities</a></li>
        <li><a href='/discoveries'>Discoveries</a></li>
        <li><a href='/comingsoon'>Coming soon</a></li>
      </ul>

      <br />
      
      

      <p className='pcont1'> SOCIAL</p><br />
      <ul className='ulcont1'>
        <li><a href='/friends'>Friends</a></li>
        <li><a href='/parties'>Parties</a></li>
        <li><a href='/media'>Media</a></li>
      </ul>

      <br />
      
      

      <p className='pcont1'> GENERAL</p><br />
      <ul className='ulcont1'>
        <li><a href='/settings'>Settings</a></li>
        <li><a href='/logout'>Log Out</a></li>
      </ul>
    </div>
  );
};

export default Side1;