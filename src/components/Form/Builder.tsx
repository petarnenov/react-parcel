import React, { useCallback } from 'react'
import Button from '../Button'

import classes from './Builder.module.scss'

type BuilderProps = {
  onSubmit: () => void
  onReset?: () => void
  onCancel?: () => void
  children?: React.ReactNode
  footer?: React.ReactNode
  header?: React.ReactNode
}

const Builder = ({ children, onSubmit, footer, header }: BuilderProps) => {
  const submitHandler = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      onSubmit()
    },
    []
  )

  return (
    <form className={classes.formBuilder} onSubmit={submitHandler}>
      <section className={classes.formHeader}>{header}</section>
      <section className={classes.formFields}>{children}</section>
      <section className={classes.formFooter}>{footer}</section>
      <section className={classes.formButtons}>
        <div className={classes.formButtonsLeft}>
          <Button type="reset">Reset</Button>
          <Button type="button">Cancel</Button>
        </div>
        <div className={classes.formButtonsRight}>
          <Button type="submit">Submit</Button>
        </div>
      </section>
    </form>
  )
}

export default Builder
