import React from 'react'
import { Button, Form, Label } from './components'
import { FormBody, FormFooter, FormHeader } from './components/Form'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes.app}>
      <h1>Component playground</h1>
      <Label>Button Label</Label>
      <Button cssClass={classes.button}>Hi</Button>
      <Form
        onSubmit={() => console.log('kur')}
        header={<FormHeader>Form Header</FormHeader>}
        footer={<FormFooter>Form Footer</FormFooter>}
      >
        <FormBody
          fields={{
            name: {
              id: 'name',
              type: 'text',
            },
          }}
        />
      </Form>
    </div>
  )
}

export default App
