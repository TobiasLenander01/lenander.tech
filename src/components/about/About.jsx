import React from 'react'
import './about.css'
import ME from '../../assets/me-about.png'
import {AiOutlineCode} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <AiOutlineCode className='about__icon'/>
              <h5>C#</h5>
              <small>6 months experience</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>TEMP</h5>
              <small>TEMP</small>
            </article>
          </div>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi error provident, officiis doloribus, 
            impedit pariatur consectetur ducimus nihil non aspernatur animi soluta sit ullam. Veniam error nobis distinctio ipsa voluptatum.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about