import React from 'react'
import headshot from '../assets/headshot.jpeg'
// TODO Add Picture and about me text

const About = () => {
  return (
    <div>
      <img src={headshot} alt="Simon Damberg" className="rounded-full h-64 w-64" />
      <h1>
        I'm Simon Damberg, a 22 year old software engineer from Västerås, Sweden. I am studying M.Sc. Computer and Information Engineering Student at Uppsala University and I also work as the Lead Software Engineer at Qognica Finance, delivering realtime forecasts of stock prices to your pocket with QapSel.
        I code everything from backend APIs and databases to websites and cross platform mobile apps.
      </h1>
      <h1>
        Feel free to <a href="mailto:simon@damberg.dev">email me</a> if you are looking for a developer or just needs to talk &#60;3
      </h1>
    </div>
  )
}

export default About;