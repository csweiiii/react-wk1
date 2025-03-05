import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <h1>Vegetables</h1>
        <div className="header-right">
          <img src="images/btn_facebook.png" alt="facebook button" className="btn-facebook" />
          <img src="images/btn_instagram.png" alt="instagram button" className="btn-instagram" />
          <button className="btn-login">LOGIN</button>
          <button className="btn-join">JOIN</button>
        </div>
      </header>
      
      <nav className="nav">
        {['Home', 'About Us', 'Vegetables', 'Online', 'Contact'].map((item) => (
          <h2 key={item} className="nav-btn">{item}</h2>
        ))}
      </nav>
      
      <main className="main">
        <img src="images/img_main_pumpkin.png" alt="pumpkin" className="main-img" />
      </main>
      
      <section className="section">
        <div className="vegetables-section">
          <h2>Vegetables</h2>
          <div className="img-vegetable">
            {['carrot', 'corn', 'pepper'].map((veg) => (
              <img key={veg} src={`images/img_vegetables_${veg}.png`} alt={veg} className="vegetables-images" />
            ))}
          </div>
        </div>
        <div className="contact-section">
          <h2>Contact</h2>
          <div className="contact-text">
            <p className="text1">For any questions or suggestions about Vegetables, Vegetables Club, or your online order, you can contact Vegetables Customer Service by phone, email, or post, and we’ll be happy to help.</p>
            <hr />
            <p className="text2">E-mail: Vegetables@aaabbccc.com <br /> PHONE: +886-123-456-789</p>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <p>Copyrights 2017 Vegetables cise / Design by Vegetables</p>
      </footer>
    </div>
  )
}

export default App