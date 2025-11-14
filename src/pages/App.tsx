import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Logo } from '../Logo'
import { Button } from '../components/buttons';
import BackgroundStars from '../components/BackgroundStars';
// import { Squares } from '../components/squares';
import atlasHouseImage from '../assets/houselogo.png';
import { FiShare } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";

import './App.scss';
import '../styles/_squares.scss';



type Btn = {
  name: string;
  class: 'facebook-btn' | 'whatsapp-btn' | 'telegram-btn' | 'linkedin-btn';
  link: string;
  size: number;
  
};

const Btn = [
  { name: 'Facebook', class: 'facebook-btn', link: 'https://facebook.com/yourpage', size: 22 },
  { name: 'WhatsApp', class: 'whatsapp-btn', link: 'https://wa.me/201001234567', size: 20 },
  { name: 'Sales Team', class: 'whatsapp-btn', link: 'https://wa.me/201009876543', size: 20 }, // different label
  { name: 'Telegram', class: 'telegram-btn', link: 'https://t.me/yourusername', size: 20 },
  { name: 'LinkedIn', class: 'linkedin-btn', link: 'https://www.linkedin.com/company/your-company/', size: 22 },
] as const;


function App() {
  // Build floating squares once on mount (React-friendly)
  useEffect(() => {
    const ulSquares = document.querySelector<HTMLUListElement>('ul.squares');
    if (!ulSquares) return;

    for (let i = 0; i < 11; i++) {
      const li = document.createElement('li');

      const size = Math.floor(Math.random() * (120 - 10) + 10);
      li.style.width = `${size}px`;
      li.style.height = `${size}px`;
      li.style.bottom = `-${size}px`;

      const position = Math.random() * (99 - 1) + 1;
      li.style.left = `${position}%`;

      const duration = Math.random() * (24 - 12) + 12;
      li.style.animationDuration = `${duration}s`;

      li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;

      ulSquares.appendChild(li);
    }
  }, []);

 const handleCopy = () => {
  const linktreeUrl = "https://atlashouse0.github.io/atlash0use/";
  navigator.clipboard.writeText(linktreeUrl);
  const btn = document.querySelector(".copy-btn");
  if (btn) {
    btn.classList.add("copied");
    setTimeout(() => btn.classList.remove("copied"), 2000);
  }
};

  const Btns: Btn[] = [
  {
    name: 'Facebook',
    class: 'facebook-btn',
    link: 'https://www.facebook.com/people/Atlas-House/61566570806131/',
    size: 22,
    
  },
  {
    name: 'WhatsApp',
    class: 'whatsapp-btn',
    link: 'https://wa.me/201123907033', // first WhatsApp link
    size: 20,
  },
  {
    name: 'Sales Team',
    class: 'whatsapp-btn',
    link: 'https://wa.me/201092157548', // second WhatsApp link (duplicate)
    size: 20,
  },
  {
    name: 'Telegram',
    class: 'telegram-btn',
    link: 'https://t.me/atlashouse0',
    size: 20,
  },
  {
    name: 'LinkedIn',
    class: 'linkedin-btn',
    link: 'https://www.linkedin.com/company/atlas-house0/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3BfI1NpN7oQtmMOeSlzoxpOw%3D%3D',
    size: 22,
  },
];

  return (
      
  <div className="page-wrapper">
      <BackgroundStars />
       {/* <div className="top-header"></div> */}
     <button className="copy-btn" onClick={handleCopy} aria-label="Copy Linktree">
  <FiShare className="copy-icon" />
</button>
<div className="box">
      <div className="grid-avatar">
        <a
          href="https://www.facebook.com/people/Atlas-House/61566570806131/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <span className="logo-ring">
            <img className="avatar" src={atlasHouseImage} alt="Atlas House logo" />
          </span>
        </a>
        <strong className="brand-title">Atlas House - Social Contact</strong>
        <small className="brand-subtitle">Property Agency</small>
      </div>

      <div className="grid-buttons">
        {Btns.map((btn, i) => (
          <Button
            key={`${btn.class}-${i}`}
            class={btn.class}
            size={btn.size}
            link={btn.link}
            label={btn.name}
          />
        ))}
      </div>
    </div>



  <footer className="site-footer" aria-label="Site footer">
  <p className="tagline">We’re happy to meet you!</p>

  {/* ✅ Social Icons Row */}
  <div className="social-icons">
  <a
    href="https://www.facebook.com/people/Atlas-House/61566570806131/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://wa.me/201123907033"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <FaWhatsapp />
  </a>

  <a
    href="https://t.me/atlashouse0"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Telegram"
  >
    <FaTelegramPlane />
  </a>

  <a
    href="https://www.linkedin.com/company/atlas-house0/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedinIn />
  </a>
</div>


  <p className="rights">
    © {new Date().getFullYear()} Atlas <span className="brand">House</span> — All rights reserved.
  </p>
</footer>


    {/* <Squares /> */}
  </div>
);

}

export default App;
