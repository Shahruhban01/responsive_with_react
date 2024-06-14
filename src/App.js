// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { questions } from './Data/faqQuestion';
import Faqs from './components/Faqs';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function App() {
  // const [showAns, setshowAns] = useState(questions[0].id);
  const [menuShow, setMenuShow] = useState(false);
  const [ShowModal, setShowModal] = useState(false);
  let n = ["array", "of", "four", "Items"];
  
  let submitSuccess = () => {
    NotificationManager.info('Info message');
    NotificationManager.success("Success!", 'Testing');
    NotificationManager.error('Error message', 'Click me!', 5000, () => {
      alert('callback');
      });
    NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  }
  return (
    <div className='App'>
      <NotificationContainer />


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
      <button onClick={submitSuccess}>Show Notifications Messages</button>

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


      {/* Faqs Start */}
      <Faqs />
      {/* Faqs End */}

      <ul>
        {n.map((items, i) => {
          return (
            <li key={i}>{items}</li>
          )
        })}
      </ul>

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
              <button type="submit" onClick={submitSuccess}>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
      {/* Enquire Now Modal Ends */}



    </div>
  );
}

export default App;