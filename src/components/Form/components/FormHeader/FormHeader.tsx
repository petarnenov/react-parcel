import React from 'react'

type FormHeaderProps = {
  children: React.ReactNode
}

const FormHeader = ({ children }: FormHeaderProps) => (
  <header>{children}</header>
)

export default FormHeader
