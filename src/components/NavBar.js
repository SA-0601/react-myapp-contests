import { Link } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
function NavBar() {
  return (
    <>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Link to="/">Home</Link>
          <Link to="/allcontests">AllContests</Link>
          <Link to="/hackerearth">HackerEarth</Link>
          <Link to="/hackerrank">HackerRank</Link>
          <Link to="/codeforces">CodeForces</Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
