import './css/homepage.css'

import Background from '../public/programming.jpg'
import GithubLogo from '../public/github-mark.svg'
import LinkedInLogo from '../public/LinkedIn_icon.svg'
import ItchLogo from '../public/itchio-textless-white.svg'
import WebLogo from '../public/web.svg'
import NPMLogo from '../public/npm.svg'
import FdroidLogo from '../public/fdroid.svg'
import PlayLogo from '../public/google.svg'
import DownloadLogo from '../public/download.svg'
import YoutubeLogo from '../public/youtube.svg'
import Face from '../public/face.jpg'
import Checkers from '../public/checkers.png'
import Roguetype from '../public/roguetype.png'
import Diffusion from '../public/openStableDiffusion.jpg'
import AiRPG from '../public/ai-rpg.png'

function Home() {
  return (
    <div className='background' style={{backgroundImage:`url(${Background})`}}>
      <div className='profContainer'>
        <img className='profilePic' src={Face}></img>
        <div className='profile'>
          <h2>Jonas Žilys</h2>
          <hr></hr>
          <div  >
          <div className='skill'>Javascript</div><div className='skill'>Typescript</div><div className='skill'>Java</div><div className='skill'>Kotlin</div>
          <div className='skill'>C</div><div className='skill'>C++</div><div className='skill'>C#</div><div className='skill'>Python</div>
          <div className='skill'>php</div><div className='skill'>sql</div><div className='skill'>git</div><div className='skill'>React</div>
          <div className='skill'>Vue.js</div> <div className='skill'>Node</div><div className='skill'>Laravel</div><div className='skill'>Unity</div>
          <div className='skill'>Godot</div>
          </div>
          <hr></hr>
          <p className='bio'>Hello my names is Jonas and I am an aspiring Software Engineer. 
          I have been programming since the age of 15. 
          Over the course of those years I have picked up numerous skills and developed various projects.
          I am actively seeking new opportunities where I can contribute and grow.
          If you're looking for a dedicated and passionate Software Engineer to join your team, 
          I would love to hear from you.
          </p>
        </div>
      </div>
      <br></br>
      <div className='project' style={{bottom: "-220px"}}>
        <div className='projectName' style={{backgroundColor: "#8B0000"}}>Checkers</div>
        <p className='projectDescription'><img className='projectImage' src={Checkers}></img> A web checkers game and npm package for checkers. 
        Built using React and Node.
        Do npm i checkers-lib to install the package.</p>
        <div className='projectLinks'>
          <img src={GithubLogo} onClick={() => window.location.href = "https://github.com/Jokimax/Checkers"}></img>
          <img src={NPMLogo}  onClick={() => window.location.href = "https://www.npmjs.com/package/checkers-lib"}></img>
          <img src={WebLogo} onClick={() => window.location.href = "https://jokimax.github.io/Checkers/"}></img>
        </div>
      </div>
      <div className='project' style={{bottom: "-275px"}}>
        <div className='projectName' style={{backgroundColor: "aquamarine"}}>Open Stable Diffusion</div>
        <p className='projectDescription'><img className='projectImage' src={Diffusion}></img> An open source android app for generating images using Stable Diffusion.
        Published on Google and F-Droid. Built using Kotlin.</p>
        <div className='projectLinks'>
          <img src={GithubLogo} onClick={() => window.location.href = "https://github.com/Jokimax/OpenStableDiffusion"}></img>
          <img src={FdroidLogo} onClick={() => window.location.href = "https://f-droid.org/en/packages/com.openstablediffusion/"}></img>
          <img src={PlayLogo} onClick={() => window.location.href = "https://play.google.com/store/apps/details?id=com.openstablediffusion"}></img>
          <img src={DownloadLogo} onClick={() => window.location.href = "../public/openstablediffusion.apk"}></img>
        </div>
      </div>
      <div className='project' style={{bottom: "-330px"}}>
        <div className='projectName' style={{backgroundColor: "green"}}>Ai RPG</div>
        <p className='projectDescription'><img className='projectImage' src={AiRPG}></img> An Ai generated rpg campaign livestreamed on Twitch and Youtube. </p>
        <div className='projectLinks'>
          <img src={YoutubeLogo} onClick={() => window.location.href = "https://www.youtube.com/@AI-rpg"}></img>
        </div>
      </div>
      <div className='project' style={{bottom: "-385px"}}>
        <div className='projectName' style={{backgroundColor: "#4e355e"}}>Roguetype</div>
        <p className='projectDescription'><img className='projectImage' src={Roguetype}></img> A roguelike typing game built using Godot.</p>
        <div className='projectLinks'>
          <img src={ItchLogo} onClick={() => window.location.href = "https://jokimax.itch.io/roguetype"}></img>
        </div>
      </div>
      <br></br>
      <div className='links'>
        <h3>Links</h3>
        <div>
          <img className='websiteIcon' src={GithubLogo}></img>&nbsp;
          <a href='https://github.com/Jokimax'>https://github.com/Jokimax</a>
        </div>
        <div>
          <img className='websiteIcon' src={LinkedInLogo}></img>&nbsp;
          <a href='https://www.linkedin.com/in/jonas-zilys-337477253/'>https://www.linkedin.com/in/jonas-zilys-337477253/</a>
        </div>
        <div>
          <img className='websiteIcon' src={ItchLogo}></img>&nbsp;
          <a href='https://jokimax.itch.io/'>https://jokimax.itch.io/</a>
        </div>
      </div>
    </div>
  )
}

export default Home
