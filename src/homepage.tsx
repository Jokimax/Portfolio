import './css/homepage.css'

import GithubLogo from '../public/github-mark.svg'
import LinkedInLogo from '../public/LinkedIn_icon.svg'
import ItchLogo from '../public/itchio-textless-white.svg'

function Home() {
  return (
    <>
      <div className='profContainer'>
        <img className='profilePic'></img>
        <div className='profile'>
          <h2>Jonas Žilys</h2>
          <hr></hr>
          <div className='skill'>Javascript</div><div className='skill'>Java</div><div className='skill'>Etc...</div>
          <hr></hr>
          <p className='bio'>TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn </p>
        </div>
      </div>
      <br></br>
      <div className='project'>
        <div className='projectName'>Test</div>
        <p className='projectDescription'>TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn TODO: Add bio fsaguifsahofsaafi safjksafjks afjksfjfsaji knkafsafuhsafj ihnsafnksafkns fnklsfknfjksafnsak fjksafnksafsafsaf sauiiusafsfajn
            osflkjlsfajnsafjn </p>
        <div className='projectLinks'><img src={GithubLogo}></img><img src={GithubLogo}></img></div>
      </div>
      <div className='project'>
        <div className='projectName'>Test</div>
        <p className='projectDescription'></p>
        <div className='projectLinks'><img src={LinkedInLogo}></img><img src={LinkedInLogo}></img></div>
      </div>
      <div className='project'>
        <div className='projectName'>Test</div>
        <p className='projectDescription'></p>
        <div className='projectLinks'></div>
      </div>
      <div className='project'>
        <div className='projectName'>Test</div>
        <p className='projectDescription'></p>
        <div className='projectLinks'></div>
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
    </>
  )
}

export default Home
