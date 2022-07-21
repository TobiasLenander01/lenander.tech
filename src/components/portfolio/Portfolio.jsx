import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="Reverse Recordings Game" />
          </div>
          <h3>Reverse Recordings Game</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TobiasLenander01/Reverse-Recordings-Game" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="Console Temperature Converter" />
          </div>
          <h3>Console Temperature Converter</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/TobiasLenander01/Temperature-Converter" className='btn btn-primary' target='_blank'>Github</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio