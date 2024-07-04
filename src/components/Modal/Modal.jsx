import { BtnClose, ModalBackground, ModalWindow } from "./Modal.style";
import { modal } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import { Field, Formik } from "formik";
import {
  Btn,
  ErrorMess,
  Input,
  Section,
  Textrea,
} from "../FormToDo/FormToDo.style";
import { Forms } from "../FormToDo/FormToDo.style";
import * as Yup from "yup";
import { selectorsChangeItem } from "../../redux/selectors";
import { createToDo, putToDo } from "service/api";

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener("keydown", this.handleEsc);
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.handleEsc);
//   }

//   handleEsc = (e) => {
//     if (e.code === "Escape") {
//       this.props.onClose();
//     }
//   };
//   handleClickBg = (e) => {
//     if (e.target == e.currentTarget) {
//       this.props.onClose();
//     }
//   };
//   render() {
//     const { children, onClose } = this.props;
//     return (
//       <ModalBackground onClick={this.handleClickBg}>
//         <ModalWindow>
//           {children}
//           <BtnClose onClick={onClose}></BtnClose>
//         </ModalWindow>
//       </ModalBackground>
//     );
//   }
// }

// export default Modal;

export const ModalWindows = () => {
  const dispatch = useDispatch();
  const chekedClose = (e) => {
    if (e.target == e.currentTarget) {
      dispatch(modal());
    }
  };
  return (
    <>
      <ModalBackground onClick={(e) => chekedClose(e)}>
        <ModalWindow>
          <ChangeFormModal />
          <BtnClose onClick={() => dispatch(modal())}></BtnClose>
        </ModalWindow>
      </ModalBackground>
    </>
  );
};

const SignUpSchema = Yup.object().shape({
  title: Yup.string().min(2, "Shortly!").max(20, "Longly").required("Required"),
  description: Yup.string().min(2, "Shortly!").max(50, "Longly"),
  level: Yup.string().oneOf(["easy", "middle", "hard"]).required("Required"),
});

const ChangeFormModal = () => {
  const dispatch = useDispatch();
  const { title, description, level, id } = useSelector(selectorsChangeItem);


  const intialValue = {
    description: description,
    title: title,
    level: level,
  };

  return (
    <>
      <Formik
        initialValues={intialValue}
        onSubmit={(values, { resetForm }) => {

          dispatch(putToDo({ ...values, id }));
          dispatch(modal());
          //   this.props.onAdd(values);
        }}
        validationSchema={SignUpSchema}
      >
        <Forms>
          <Input name="title" type="text" />
          <ErrorMess name="title" component="p" />
          <Textrea name="description" type="text" />
          <ErrorMess name="description" component="p" />
          <Field name="level" as={Section}>
            <option value="easy">easy</option>
            <option value="middle">middle</option>
            <option value="hard">hard</option>
          </Field>
          <Btn type="submit">Submit</Btn>
        </Forms>
      </Formik>
    </>
  );
};
