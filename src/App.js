// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { questions } from './Data/faqQuestion';
import Faqs from './components/Faqs';

function App() {
  // const [showAns, setshowAns] = useState(questions[0].id);
  const [menuShow, setMenuShow] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  return (
    <>
      <button className='hamburger' onClick={() => setMenuShow(!menuShow)}>{(menuShow) ? <span>&times;</span> : <span>&#9776;</span>}</button>
      <div className={`main ${(menuShow) ? 'showMenu' : ''}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Career</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* <div>
        <h1 align="center">Frequently Asked Questions (FAQs)</h1>

        <div className='faqOuter'>

          {questions.map((v, i)=>{
            return(
              <div className='faqItems'>
              <h2 onClick={()=>setshowAns(v.id)}>{v.question}</h2>
              <p className={showAns==v.id ? 'activeItem' : ''}>
              {v.answer}
              </p>
            </div>
            );
          })}

        </div>
      </div> */}
      {/* Enquire Now Modal Starts */}
      <button className='enquire_btn' onClick={() => setShowModal(true)}>Enquire Now</button>
      <div className={`modalOverlay ${(ShowModal) ? 'showModalOverlay' : ''}`} onClick={() => setShowModal(false)}></div>
      <div className={`ModalDiv ${(ShowModal) ? 'showModalDiv' : ''}`} >
        <div className="signup-form">
          <h2>Enquire Now <button className='enquire_cross' onClick={() => setShowModal(false)}>&times;</button></h2>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
      {/* Enquire Now Modal Ends */}

      {/* Faqs Start */}
      <Faqs />
      {/* Faqs End */}





    </>
  );
}

export default App;