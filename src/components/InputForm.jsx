import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import uniqid from "uniqid";
import { connect } from "react-redux";
import { addTodo } from "../store/actions";
import { useDispatch, useSelector } from "react-redux";

/* const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
});
 */
const InputForm = () => {
    const [description, setDescription] = useState("");

    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    /*     handleChange = (event) => {
        this.setState({ description: event.target.value });
    }; */

    const handleSubmit = (event) => {
        event.preventDefault();

        const todo = {
            description: description,
            id: uniqid(),
            completed: false
        };

        console.log(todo);
        dispatch(addTodo(todo));
        setDescription("");
    };

    return (
        <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Control type="text" placeholder="New task..." value={description} onChange={(e) => setDescription(e.target.value)} />
            <Form.Control type="submit" />
        </Form>
    );
};

export default InputForm;
