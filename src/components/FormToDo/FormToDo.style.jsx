import { ErrorMessage, Form } from "formik";
import styled from "styled-components";

export const Forms = styled(Form)`
  position: relative;
  margin: 20px auto;
  padding: 10px;
  width: 80%;
`;

export const ErrorMess = styled(ErrorMessage)`
  color: red;
`

export const Input = styled.input`
  margin-bottom: 10px;
  width: inherit;
`;

export const Textrea = styled.textarea`
  width: inherit;
`;

export const Section = styled.select`
  display: block;
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 0;
  right: 120px;
  width: 100px;
  height: 30px;
  border: solid 2px black;
  border-radius: 8px;
  font-weight: bold;
`;
