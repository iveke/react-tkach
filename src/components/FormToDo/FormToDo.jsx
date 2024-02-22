import { Btn, Form, Input } from "./FormToDo.style";

export const FormToDo = () => {
    return (
    <Form >
        <Input name="title" type="text" placeholder="enter title task" />
        <textarea name="description"cols="30" rows="4" placeholder="enter descriptiton"></textarea>
        <select name="level"> 
        <option value="1"> level 1</option>
        <option value="2"> level 2</option>
        <option value="3"> level 3 </option>
        </select>
        <Btn type="submit">Create</Btn>
    </Form>
    );
}

