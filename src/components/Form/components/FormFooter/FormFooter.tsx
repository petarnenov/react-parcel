import React from "react";

type FormFooterProps = {
  children: React.ReactNode;
};

const FormFooter = ({ children }: FormFooterProps) => {
  return <footer>{children}</footer>;
};

export default FormFooter;
