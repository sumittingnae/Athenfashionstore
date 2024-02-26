import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./menu.scss";
import { Link } from "react-router-dom";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="canva">
        Menu
      </Button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="onHide"
        className="canvas w-75"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-dark">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="body ">
          <Link className="menu-link" to="/">
            Home
          </Link>
          <Link className="menu-link" to="/product">
            Product
          </Link>
          <Link className="menu-link" to="/blog">
            Blog
          </Link>
          <Link className="menu-link" to="/contact">
            Conatct
          </Link>
          <Link className="menu-link" to="/faq">
            FAQ
          </Link>

          {/* <div class="dropdown">
            <Link
              type="link"
              id="navbarDarkDropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              className="menu-link"
            >
              Service
              <i className="fa-solid fa-angle-down"></i>
            </Link>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link class="dropdown-item" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/shop">
                  Home
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/slide">
                  Something else here
                </Link>
              </li>
            </ul>
          </div> */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
