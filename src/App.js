import './App.css';

import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="img-box">
        <div className="img">

        </div>

        <div className='img-text-figcaption-box'>
          <figcaption>Easily create or join a local nanny share with Hapu</figcaption>
        </div>
        <div className='img-text-description-box'>
          <h6>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</h6>
        </div>
        <div className='playIcon-box'>
          <div className='playIcon'>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.4101 9.05L1.58525 0.3C1.32719 0.15 1.21659 0 0.921659 0C0.516129 0 0 0.35 0 1V19C0 19.65 0.516129 20 0.921659 20C1.21659 20 1.32719 19.85 1.58525 19.7L15.4101 10.95C15.7051 10.75 16 10.55 16 10C16 9.45 15.7051 9.25 15.4101 9.05Z" fill="white"/>
            </svg>
          </div>
          <a href="#">See hapu in action (27 seconds)</a>
        </div>
      </div>{/* img-box */}
    </div>
  );
}

export default App;
