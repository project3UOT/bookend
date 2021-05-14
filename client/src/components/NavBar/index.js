import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from '../SignupForm/index';
import LoginForm from '../LoginForm/index';

import Auth from '../../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className='navbar-brand'>
        <a className="navbar-item" href="/">
          Book End
        </a>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <a className="button is-primary" onClick={() => setShowModal(true)}>
              <strong>Login</strong>
            </a>
            <a className="button is-primary" onClick={() => setShowModal(true)}>
              <strong>Sign up</strong>
            </a>
          </div>
        </div>
      </div>

    </nav>

    {/* <div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
            <div class="tabs">
              <ul>
                <li class="is-active"><a>Login</a></li>
                <li><a>Sign Up</a></li>
              </ul>
            </div>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      Content
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Start Reading!</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div> */}
</>
  );
};

export default AppNavbar;
