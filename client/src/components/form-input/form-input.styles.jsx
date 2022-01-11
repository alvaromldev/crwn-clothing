import styled, { css } from 'styled-components';

const theme = {
  subColor: `grey`,
  mainColor: `black`,
};

const PasswordInputStyles = css`
  letter-spacing: 0.3em;
`;

const LabelStyles = css`
  top: 10px;
  font-size: 16px;
  color: ${theme.subColor};
`;

const LabelShrinkStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${theme.mainColor};
`;

const getInputStyles = ({ type }) => {
  if (type === 'password') {
    return PasswordInputStyles;
  }
};

const getLabelStyles = ({ value }) =>
  !!value?.length ? LabelShrinkStyles : LabelStyles;

export const FormInputContainer = styled.div`
  position: relative;
  margin: 45px 0;
`;

export const Label = styled.label`
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  transition: 300ms ease all;

  ${getLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${theme.subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${theme.subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${Label} {
    ${LabelShrinkStyles}
  }

  ${getInputStyles}
`;
