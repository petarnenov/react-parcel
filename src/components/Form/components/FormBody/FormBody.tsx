import React from "react";

export enum FieldType {
  Text = "text",
  Email = "email",
  Number = "number",
}

type FormBodyProps = {
  children?: React.ReactNode;
  fields: {
    [key: string]: {
      id: string;
      type: FieldType;
    };
  };
};

const FormBody = ({ fields, children }: FormBodyProps) => {
  return (
    <>
      {Object.keys(fields).map((key) => {
        const field = fields[key];
        return (
          <div key={field.id} className="formFields">
            <label htmlFor={field.id}>{field.id}</label>
            <input type={field.type} id={field.id} />
          </div>
        );
      })}
    </>
  );
};

export default FormBody;
