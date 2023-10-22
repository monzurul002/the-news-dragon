import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {

    return (
        <Container>
            <div className="text-center mt-3">

                <img src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <h4 className='text-secondary'>{moment().format("dddd, MMMM DD, YYYY")}</h4>
            </div>
            <div className='d-flex bg-light  py-2 '>
                <Button variant="danger">Breaking</Button>
                <Marquee speed={100} pauseOnHover={true}>
                    <h5 className='mt-1 text-danger'> I can be a React component, multiple React components, or just some text. <a href="https://www.npmjs.com/package/react-fast-marquee">See more</a> </h5>
                </Marquee>
            </div>

            {/* <Navbar collapseOnSelect expand="lg" bg='light' variant='light' className="bg-body-tertiary">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="/"><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link href="/news"><Link to="/news">News</Link></Nav.Link>
                            <Nav.Link href="#career">Career</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                user && <Nav.Link href="#deets"><img width={40} src={loginUser} alt="" /></Nav.Link>
                            }
                            <Nav.Link eventKey={2} href="#memes">
                                {!user ? <Link to="/login"><Button variant="dark">Login</Button></Link> :
                                    <Button variant="dark">Logout</Button>}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}

        </Container>
    );
};

export default Header;