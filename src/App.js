import MainPage from "./pages/MainPage";
import FullTimePreferences from "./pages/FullTimePreferences";
import DailyjobPreference from "./pages/DailyjobPreference";
import ExecutivesPreference from "./pages/ExecutivesPreference";
import FreelancerPreference from "./pages/FreelancerPreference";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={MainPage} />
        <Route path="/fulltimepreference" component={FullTimePreferences} />
        <Route path="/dailyjobpreference" component={DailyjobPreference} />
        <Route path="/executivespreference" component={ExecutivesPreference} />
        <Route path="/freelancerpreference" component={FreelancerPreference} />
      </Router>
    </>
  );
}

export default App;
