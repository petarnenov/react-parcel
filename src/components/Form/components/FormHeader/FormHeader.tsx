import React from 'react'

type FormHeaderProps = {
  children: React.ReactNode
}

const FormHeader = ({ children }: FormHeaderProps) => {
  return <header>{children}</header>
}

export default FormHeader
