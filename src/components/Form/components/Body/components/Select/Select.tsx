import React from 'react'

import classes from './Select.module.scss'

type SelectOption = {
  name: string
  value: string
}

type SelectProps = {
  name: string
  id: string
  options: SelectOption[]
}

const Select = ({ name, id, options }: SelectProps) => (
  <select name={name} id={id} className={classes.formSelect}>
    {options?.map((option) => (
      <option key={option.name} value={option.value}>
        {option.name}
      </option>
    ))}
  </select>
)

export default Select
