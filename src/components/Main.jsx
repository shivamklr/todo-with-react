import React, { useState } from "react";
import { Card, Button } from "@blueprintjs/core";
import Form from "./Form";
function Main() {
    const [todoInput, settodoInput] = useState("");
    const [todos, settodos] = useState([]);
    const inputHandler = (e) => {
        settodoInput(e.target.value);
    };
    const submitHandler = () => {
        settodos([...todos, todoInput]);
        settodoInput("");
    };
    const deleteHandler = (index) => {
        settodos(todos.filter((todo, idx) => idx !== index));
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
                        onClick={() => deleteHandler(index)}
                    ></Button>
                </Card>
            ))}
        </div>
    );
}

export default Main;
