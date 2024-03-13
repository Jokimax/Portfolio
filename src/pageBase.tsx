import {Outlet} from "react-router-dom"
import GithubLogo from "../public/github-mark.svg"
import "./css/pageBase.css"

function PageBase() {
    return (
      <>
        <img className="repoLink" src={GithubLogo}></img>
        <Outlet />
      </>
    )
  }
    
  export default PageBase