import React from 'react'
import './About.css'
import skills from '../../assets/skills_data.js'
import picture from '../../assets/NISA-cup.jpg'

const About = () => {
  return (
    <div className='about' id='about'>
      <h1>About Me</h1>
      <div className="about-me-section">
      <img className='picture' src={picture} alt="" />
      <p><span className='hello'>Namaste</span><span className='namaste'>🙏</span> I'm Anjal Thapa and I enjoy coding and creating websites using React.js which gives me the freedom to express my creativity. I am currently a student who aspires to become a software engineer in the future while exploring other options like full-stack development to expand my skillsets and career opportunities. I am a self-driven individual who enjoys challenges and am able to adapt to my surroundings and workspace with a positive mindset while working collaboratively with like-minded colleages towards a shared vision.</p>
      </div>
      <div className="h2"><h2>My Skill Sets</h2></div>
      <div className="skill-sets-container">
        <ul className='skill-sets'>
          {skills.map((skill,index) => {
            
            return(
              <li className='skill' key={index}>
                <img className='skill-image' src={skill.image} alt="" />
                <p className='skill-text'>{skill.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default About