This package library was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

It is linked to the modal-dialog-react-component package in the parent directory for development purposes.

# modal-dialog-react-component

> A React component for a modal made with dialog html element

[![NPM](https://img.shields.io/npm/v/modal-dialog-react-component.svg)](https://www.npmjs.com/package/modal-dialog-react-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save modal-dialog-react-component
```

## Usage

Where you want to use the modal, import the component and use it like this:

```jsx
import { useEffect } from 'react'

import Modal from 'modal-dialog-react-component'
import 'modal-dialog-react-component/dist/index.css'

class Example extends Component {
  render() {
    const [isModalOpen, setIsModalOpen] = useState(false) // state to control the modal
    return (
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
        {' '}
        {Children}{' '}
      </Modal>
    )
  }
}
```

Then use `setIsModalOpen(true)` to open the modal. It can be used in a button onClick event for example, or when your form is submited.

## Example

```
import React from 'react'
import Modal from 'modal-dialog-react-component'
import { useState } from 'react'
import 'modal-dialog-react-component/dist/index.css'
import 'modal-dialog-react-component/dist/modal.css'
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
```

## License

MIT © [VB2095](https://github.com/VB2095)
