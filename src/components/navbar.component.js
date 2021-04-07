import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function navbar() {
  return (
    <div>
      <h1> Exercise Tracker</h1>

      <ul>
        <li className='nav-item'>
          <Link to='/list'>Exercises</Link>
        </li>
        <li className='nav-item'>
          <Link to='/create'>Create an exercise</Link>
        </li>
        {/* <li className='nav-item'>
          <Link to='/edit/:id'>Edit an exercise</Link>
        </li> */}
        <li className='nav-item'>
          <Link to='/user'>Create User</Link>
        </li>
      </ul>
    </div>
  );
}
