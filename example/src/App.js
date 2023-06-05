import React from 'react'
import Modal from 'modal-dialog-react-component'
import { useState } from 'react'
import 'modal-dialog-react-component/dist/index.css'
// import 'modal-dialog-react-component/dist/modal.css'
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClick = () => {
    setIsModalOpen(true)
  }
  return (
    <>
      <p>App</p>
      <button onClick={handleClick}>Ouvrir la modal</button>
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        <p>Modal</p>
      </Modal>
    </>
  )
}

export default App
