import React from 'react'
import Input from '../../Input/Input'

import classes from './Number.module.scss'

type NumberProps = {
  id: string
  placeholder?: string
}

const Number = ({ id, placeholder }: NumberProps) => (
  <Input
    id={id}
    type="text"
    placeholder={placeholder}
    cssClass={classes.formNumber}
  />
)

export default Number
