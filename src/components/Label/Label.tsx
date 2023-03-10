import React from 'react'

import classes from './Label.module.scss'

type LabelProps = {
  children: React.ReactNode
}

const Label = ({ children }: LabelProps) => (
  <label className={classes.label}>{children}</label>
)

export default Label
