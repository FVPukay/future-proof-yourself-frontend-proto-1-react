import Container from 'react-bootstrap/Container';
import NavBar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import PerfectDay from '../PerfectDay/PerfectDay';

const NavigationBar = () => {
    return (
        <NavBar>
            <Container>
                <div>
                    <NavBar.Brand href='#home'>
                        <Logo/>
                    </NavBar.Brand>
                </div>
                <NavBar.Toggle/>
                <div>
                    <PerfectDay/>
                </div>
                <div>
                    <NavBar.Collapse>
                        <Navigation/>
                    </NavBar.Collapse>
                </div>
            </Container>
        </NavBar>
    );
}

export default NavigationBar;
