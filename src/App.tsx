import { HashRouter, Routes, Route } from "react-router-dom";
import PageBase from "./pageBase";
import Home from './homepage';
import PrivacyPolicy from "./privacyPolicy";
import Error404 from "./404";

function App() {
  return (
    <HashRouter>
      <PageBase />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/simplydodge/privacypolicy" Component={PrivacyPolicy} />
        <Route path="*" Component={Error404} />
      </Routes>
    </HashRouter>
  );
}

export default App;