import { ErrorMessage, Form, Field } from "formik";
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

export const Input = styled(Field)`
  margin-bottom: 10px;
  width: inherit;
`;

export const Textrea = styled(Field)`
  width: inherit;
`;

export const Section = styled.select`
  display: block;
  margin-top: 10px;
  width: 70px;
  height: 30px;
`;

export const Btn = styled.button`
  position: absolute;
  bottom: 10px;
  right: 120px;
  width: 100px;
  height: 30px;
  border: solid 2px black;
  border-radius: 8px;
  font-weight: bold;
`;
