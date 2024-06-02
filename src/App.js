// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [menuShow, setMenuShow] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  return (
    <>
    <button className='enquire_btn' onClick={() => setShowModal(true)}>Enquire Now</button>
    <div className={`modalOverlay ${ (ShowModal) ? 'showModalOverlay' : '' }`} onClick={() => setShowModal(false)}></div>
      <div className={`ModalDiv ${ (ShowModal) ? 'showModalDiv' : '' }`} >
        {/* <h1></h1> */}
        <div class="signup-form">
        <h2>Enquire Now <button onClick={() => setShowModal(false)}>&times;</button></h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="form-group">
                <button type="submit">Sign Up</button>
            </div>
        </form>
    </div>
      </div>
    {/* </div> */}

    <button className='hamburger' onClick={() => setMenuShow(!menuShow)}>{ (menuShow) ? <span>&times;</span> : <span>&#9776;</span>}</button>
    <div className={`main ${(menuShow) ? 'showMenu' : ''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Career</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  );
}

export default App;
