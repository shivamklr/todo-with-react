import React, { useState } from "react";
import { Card, Button, Alert, Intent } from "@blueprintjs/core";
import Form from "./Form";
function Main() {
    const [todoInput, settodoInput] = useState("");
    const [todos, settodos] = useState([]);
    const [isOpen, setisOpen] = useState(false);
    const [serial, setserial] = useState(-1);
    const inputHandler = (e) => {
        settodoInput(e.target.value);
    };
    const submitHandler = () => {
        settodos([...todos, todoInput]);
        settodoInput("");
    };
    const deleteHandler = (index) => {
        settodos(todos.filter((todo, idx) => idx !== index));
        setisOpen(false);
    };
    const openHandler = (bool, index) => {
        setisOpen(bool);
        setserial(index);
    };
    return (
        <div className="Main">
            <Form
                inputText={todoInput}
                input={inputHandler}
                submit={submitHandler}
            />
            {todos.map((todo, index) => (
                <Card key={index} className="main-card" interactive={true}>
                    <p>{todo}</p>{" "}
                    <Button
                        icon="trash"
                        key={index}
                        onClick={() => openHandler(true, index)}
                    ></Button>
                </Card>
            ))}
            <Alert
                cancelButtonText="Cancel"
                confirmButtonText="Delete Permanently"
                icon="trash"
                intent = {Intent.DANGER}
                onConfirm={() => deleteHandler(serial)}
                onCancel={() => openHandler(false, -1)}
                isOpen={isOpen}
            >
                <p>
                    Are you sure you want to delete this todo? You will NOT be
                    able to restore it.🤨
                </p>
            </Alert>
        </div>
    );
}

export default Main;
