import React from 'react'

import classes from './Input.module.scss'

type InputProps = {
  cssClass?: string
  type: string
  id: string
  placeholder?: string
  value?: string
  // eslint-disable-next-line no-unused-vars
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
  type,
  id,
  placeholder,
  onChange,
  cssClass,
}: InputProps) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className={`${classes.formInput} ${cssClass}`}
    onChange={onChange}
  />
)

export default Input
