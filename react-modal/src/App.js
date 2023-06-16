import React , { useState } from 'react'
import Modal from './Modal.js'

const BUTTON_WRAPPER_STYLES = {
  position: 'relative',
  zIndex: 1
}

const OTHER_CONTENT_STYLES = {
  position: 'relative',
  zIndex: 2,
  backgroundColor: 'red',
  padding:'2rem'
}


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div style={BUTTON_WRAPPER_STYLES} open ={isOpen}>
        <button onClick={()=> setIsOpen(true)}>Open modal</button>
        <Modal open ={isOpen} onClose={()=>setIsOpen(false)}>
          So so awsome modal. You see :)
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Some content</div>
    </>
  );
}

export default App;
