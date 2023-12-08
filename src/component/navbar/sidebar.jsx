import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <button style={{backgroundColor:"#eec15b",padding:"5px 40px",border:"none",color:"white"}} onClick={handleShow} className="me-2">
        القائمة
      </button>
      <button style={{backgroundColor:"#eec15b",padding:"5px 40px",border:"none",color:"white"}} onClick={handleShow} className="me-2">
        المصادر 
      </button>
   
      <Offcanvas  show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Sidebar;
