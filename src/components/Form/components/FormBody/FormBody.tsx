import React from 'react'

type FormFieldType = 'text' | 'number'

type FormBodyProps = {
  children?: React.ReactNode
  fields: {
    [key: string]: {
      id: string
      type: FormFieldType
    }
  }
}

const FormBody = ({ fields }: FormBodyProps) => (
  <>
    {Object.keys(fields).map((key) => {
      const field = fields[key]
      return (
        <div key={field.id} className="formFields">
          <label htmlFor={field.id}>{field.id}</label>
          <input type={field.type} id={field.id} />
        </div>
      )
    })}
  </>
)

export default FormBody
