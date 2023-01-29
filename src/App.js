import logo from "./assets/images/logo.jpeg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Allmatches from "./components/Allmatches/Allmatches";

function App() {
  const [data, setdata] = useState([
    { Option: "Cric news" },
    { Option: "IPL" },
    { Option: "Ind vs NZ" },
    { Option: "BBL" },
    { Option: "Match prediction" },
  ]);
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Router>
        <nav>
          <div className="brand">
            <Link to="/">
              <img src={logo} className="logo_img"></img>
            </Link>
          </div>
        </nav>
        <div className="header_1">
          <ul className="sports_titles">
            <li>
              <Link className="S_link" to="/">
                All Matches
              </Link>
            </li>
            {data.map((e, i) => (
              <li key={i}>
                <Link className="S_link" to={"link" + i}>
                  {e.Option}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Allmatches />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
