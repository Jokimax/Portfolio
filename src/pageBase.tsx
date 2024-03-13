import {Outlet} from "react-router-dom"
import GithubLogo from "../public/github-mark.svg"
import "./css/pageBase.css"

function PageBase() {
    return (
      <>
        <img onClick={() => location.href = "https://github.com/Jokimax/Portfolio"} className="repoLink" src={GithubLogo}></img>
        <Outlet />
      </>
    )
  }
    
  export default PageBase