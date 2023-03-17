import React from 'react'
import BootstrapButton, { ButtonProps } from 'react-bootstrap/Button'

function Button(props: ButtonProp) {
  const { children, ...restProps } = props
  return (
    <>
      <BootstrapButton variant="outline-secondary" {...restProps}>
        {children}
      </BootstrapButton>
    </>
  )
}

export default Button

interface ButtonProp extends ButtonProps {}