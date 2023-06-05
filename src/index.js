import React from 'react'
import PropTypes from 'prop-types'
import './modal.css'
import { useEffect } from 'react'

function Modal({ ...props }) {
  const { isOpen, setIsOpen } = props

  const handleClose = () => {
    setIsOpen(false)
  }

  //close using escape key
  const handleEscape = (e) => {
    if (e.key === 'Escape') {
      setIsOpen(false)
    }
  }

  //close using click outside
  const handleOutsideClick = (e) => {
    if (e.target.id === 'root') {
      setIsOpen(false)
    }
  }

  //add event listener on mount
  useEffect(() => {
    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleOutsideClick)
    //remove event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div>
      {isOpen && (
        <dialog open={isOpen} className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={handleClose}>
              <svg
                width='32'
                height='32'
                viewBox='0 0 710 710'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M354.667 0.666656C159.04 0.666656 -7.62939e-06 159.707 -7.62939e-06 355.333C-7.62939e-06 550.96 159.04 710 354.667 710C550.293 710 709.333 550.96 709.333 355.333C709.333 159.707 550.293 0.666656 354.667 0.666656ZM354.667 647.28C193.387 647.28 62.72 516.613 62.72 355.333C62.72 194.053 193.387 63.3867 354.667 63.3867C515.947 63.3867 646.613 194.053 646.613 355.333C646.613 516.613 515.947 647.28 354.667 647.28Z'
                  fill='black'
                />
                <path
                  d='M462.187 173.893L354.665 281.409L247.144 173.893L173.227 247.811L280.743 355.332L173.227 462.853L247.144 536.771L354.665 429.255L462.187 536.771L536.104 462.853L428.588 355.332L536.104 247.811L462.187 173.893Z'
                  fill='black'
                />
              </svg>
            </span>
            {props.children}
          </div>
        </dialog>
      )}
    </div>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired
}

export default Modal
