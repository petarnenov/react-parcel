import React from 'react'

import classes from './Label.module.scss'

type LabelProps = {
  children: React.ReactNode
  htmlFor: string
}

const Label = ({ children, htmlFor }: LabelProps) => (
  <label htmlFor={htmlFor} className={classes.formLabel}>
    {children}
  </label>
)

export default Label
