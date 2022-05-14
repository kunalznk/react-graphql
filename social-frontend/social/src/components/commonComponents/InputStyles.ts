import styled from "styled-components";

export const InputText = styled.input`
  padding: 8px;
  border: 1px solid #cfd0d4;
  color: #182b4e;
  border-radius: 4px;
  flex: 1;
  background-color: transparent;
  outline: 0;
  ::placeholder {
    color: #999999;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const LoginTextInput = styled.input`
  outline: 0;
  border: 0;
  background: transparent;
  border-bottom: 1px solid white;
  color: white;
  width: 100%;
  text-align: center;
  font-weight: 600;
  padding: 4px;
  ::placeholder {
    color: #ffffff;
  }
`;

export const InputTextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #cfd0d4;
  color: #182b4e;
  border-radius: 4px;
  flex: 1;
  background-color: transparent;
  outline: 0;
  ::placeholder {
    color: #b0bec9;
  }
`;

export const InputDate = styled.input`
  border: none;
  background: transparent;
`;

export const InputDropFile = styled.input`
  border-radius: 4px;
  width: 450px;
  border: dashed 1px #4286f4;
  background-color: rgba(66, 134, 244, 0.1);
  height: 48px;
`;
