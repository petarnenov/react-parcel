import React from 'react'

type FormFooterProps = {
  children: React.ReactNode
}

const FormFooter = ({ children }: FormFooterProps) => (
  <footer>{children}</footer>
)

export default FormFooter
