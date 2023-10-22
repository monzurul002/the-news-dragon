import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { HiUserCircle } from "react-icons/hi";
const NavigationBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg='light' variant='light' className="bg-body-tertiary">
            <Container>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto ">
                        <Link className="mx-1" to="/category/0">Home</Link>

                        <Link to="/news">News</Link>

                        <Link className="mx-1" to="#career">Career </Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">
                            {user ? <img style={{ "borderRadius": "50%" }} width="30px" height="30px" src={user?.photoURL} alt="" /> : <HiUserCircle style={{ "fontSize": "2em" }} />}
                        </Nav.Link>


                        {
                            !user ? <Link to="/login"><Button variant="dark">Login</Button></Link> :
                                <Button onClick={handleLogOut} variant="dark">Logout</Button>
                        }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;