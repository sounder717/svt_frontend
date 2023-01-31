import logo from "./assets/images/logo.jpeg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Allmatches from "./components/Allmatches/Allmatches";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  const [data, setdata] = useState([
    { Option: "MATCH1" },
    { Option: "MATCH2" },
    { Option: "MATCH3" },
  ]);
  return (
    <div className="App" style={{ overflow: "hidden" }}>
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <img src={logo} className="logo_img"></img>
              Sports Voice Tamil
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">
                  ALL MATCHES
                </Nav.Link>
                <Nav.Link as={Link} to="/">
                  IPL
                </Nav.Link>
                <NavDropdown
                  title="INTERNATIONAL MATCHES"
                  id="collasible-nav-dropdown"
                >
                  {data.map((e, i) => (
                    <NavDropdown.Item as={Link} to="/">
                      {e.Option}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link as={Link} to="/">
                  OTHER MATCHES
                </Nav.Link>
                <Nav.Link eventKey={2} as={Link} to="/">
                  MATCH PREDICTION
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        {/* <nav>
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
        </div> */}
        <Routes>
          <Route path="/" element={<Allmatches />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
