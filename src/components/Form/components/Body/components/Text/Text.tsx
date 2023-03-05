import React from 'react'
import Input from '../../Input/Input'

type TextProps = {
  id: string
  placeholder?: string
}

const Text = ({ id, placeholder }: TextProps) => (
  <Input id={id} type="text" placeholder={placeholder} />
)

export default Text
