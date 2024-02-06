import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import images from '../Images/img1.jpg'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
function BrandExample() {
  return (
    <>
          <Navbar className="">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={images}
              width="80"
              height="60"
              className="d-inline-block align-top"    />{' '}
         
          </Navbar.Brand>
        
    
          
           <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">HOME</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">LOCATION</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">ABOUT</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">CONTACT</a>
  </li>
</ul>
       
         
            <Button variant="danger">Login</Button>
         
       
  
        </Container>

      </Navbar>
      
    </>
  );
}

export default BrandExample;