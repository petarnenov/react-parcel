import React from 'react'
import { Button, Form, Label } from './components'

import classes from './App.module.scss'

function App() {
  return (
    <div className={classes.app}>
      <h1>Component playground</h1>
      <Label>Button Label</Label>
      <Button cssClass={classes.button}>Hi</Button>
      <Form.Builder
        onSubmit={() => console.log('kur')}
        header={<Form.Header>Form Header</Form.Header>}
        footer={<Form.Footer>Form Footer</Form.Footer>}
      >
        <Form.Body
          fields={{
            name: {
              id: 'name',
              type: 'text',
              validation: (formFields) => {
                console.log(formFields)
                return true
              },
            },
            age: {
              id: 'age',
              type: 'number',
            },
            langs: {
              id: 'langs',
              type: 'select',
              options: [
                { name: 'en', value: 'English' },
                { name: 'de', value: 'Deutsch' },
                { name: 'fr', value: 'Français' },
              ],
            },
          }}
        />
      </Form.Builder>
    </div>
  )
}

export default App
