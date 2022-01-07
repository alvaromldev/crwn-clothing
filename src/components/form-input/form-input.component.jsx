import React from 'react';
import { FormInputContainer, Input, Label } from './form-input.styles';

const FormInput = ({ label, ...otherProps }) => (
  <FormInputContainer>
    <Input {...otherProps} />
    {!!label ? <Label {...otherProps}>{label}</Label> : null}
  </FormInputContainer>
);

export default FormInput;
