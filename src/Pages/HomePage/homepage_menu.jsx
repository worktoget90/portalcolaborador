import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


import LogoMarca from '../Components/logomarca';
import Footer from '../Components/footer';


function Menu() {

    const funcionario = JSON.parse(localStorage.getItem("user"));

    // console.log("funcionario:", funcionario[0].gestao);

    if (funcionario[0].gestao !== true) {
        return (
            <div className="menu">

                <Navbar bg="light" expand="lg">
                    <LogoMarca />
                    <Container className='Portal1'>
                        <h2>Portal do Colaborador</h2>
                    </Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/qualidade" > <i className="fa-regular fa-star"></i> Portal da qualidade</Nav.Link>
                            <Nav.Link href="/login"> <i className="fa-solid fa-list"></i> Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
    else {
        return (
            <div className="menu">

                <Navbar bg="light" expand="lg">

                    <Container className='Portal1'>
                        <LogoMarca />
                        <h2 className='h2texto'>Portal do Colaborador</h2>
                    </Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/qualidade" > <i className="fa-regular fa-star"></i> Portal da qualidade</Nav.Link>
                            <Nav.Link href="/uploadCC" > <i className="fa-solid fa-user-plus"></i> Atualizar Funcionários</Nav.Link>
                            <Nav.Link href="/uploadGPT" > <i className="fa-solid fa-user-plus"></i> Importar Comprovantes</Nav.Link>
                            <Nav.Link href="/contaDocs" > <i className="fa-solid fa-list"></i> Verificar importações</Nav.Link>
                            <Nav.Link href="/login"> <i className="fa-solid fa-list"></i> Sair</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );

    }

}

export default Menu;