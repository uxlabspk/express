import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Agile from "./pages/Agile";
import Issues from "./pages/Issues";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Teams from "./pages/Teams";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";


function App() {
  return (
    <div className="px-12 mx-auto text-white bg-primary">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/agile" element={<Agile />} />
          <Route path="/issues" element={<Issues />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
