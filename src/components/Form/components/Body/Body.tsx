import React from 'react'
import Label from './Label/Label'
import types, { FieldTypes } from './components'

import classes from './Body.module.scss'

type BodyProps = {
  children?: React.ReactNode
  fields: {
    [key: string]: {
      id: string
      type: FieldTypes
      placeholder?: string
      // eslint-disable-next-line no-unused-vars
      validation?: (formFields: any) => boolean
      options?: { name: string; value: string }[]
    }
  }
}

const Body = ({ fields }: BodyProps) => (
  <>
    {Object.keys(fields).map((key) => {
      const field = fields[key]
      const Component = types[field.type] || null
      if (!Component) return null
      return (
        <div
          key={field.id}
          className={`${classes.formField} ${
            field.validation?.({}) ?? true ? '' : classes.error
          }`}
        >
          <Label htmlFor={field.id}>{field.id}</Label>
          <Component id={field.id} placeholder={field.placeholder} options={field.options}/>
        </div>
      )
    })}
  </>
)

export default Body
