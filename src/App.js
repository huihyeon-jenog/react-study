import MainPage from "./pages/MainPage";
import Preferences from "./pages/Preferences";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={MainPage} />
      <Route path="/fulltimepreference" component={Preferences} />
      <Route path="/dailyjobpreference" component={Preferences} />
      <Route path="/executivespreference" component={Preferences} />
      <Route path="/freelancerpreference" component={Preferences} />
    </Router>
  );
}

export default App;
