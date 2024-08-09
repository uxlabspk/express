import {NavBar} from "./components/NavBar.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Issues from "./pages/Issues.jsx";
import NotFound from "./pages/NotFound.jsx";
import Signin from "./pages/Signin.jsx";
import Signup from "./pages/Signup.jsx";
import IssueDetails from "./pages/IssueDetails.jsx";
import AddProjects from "./pages/AddProjects.jsx";
import AddIssues from "./pages/AddIssues.jsx";
import Signout from "./pages/signout.jsx";

function App() {

  return (
     <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/project/:id'} element={<Issues />} />
            <Route path={'/project/:id/issues/:issueId'} element={<IssueDetails />} />
            <Route path={'/project/new'} element={<AddProjects />} />
            <Route path={'/project/:id/new'} element={<AddIssues />} />
            <Route path={'/signin'} element={<Signin />} />
            <Route path={'/signup'} element={<Signup />} />
            <Route path={'/signout'} element={<Signout />} />
            <Route path={'*'} element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
