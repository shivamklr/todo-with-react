import React from "react";
import { InputGroup, Button } from "@blueprintjs/core";
function Form({ input, submit, inputText }) {
    const enterHandler = (e) => {
        if(e.key === "Enter"){
            submit();
        }
    };
    return (
        <div className="Form">
            <InputGroup
                value={inputText}
                className="form-input"
                onChange={input}
                onKeyPress={enterHandler}
            />
            <Button onClick={submit}>Submit</Button>
        </div>
    );
}

export default Form;
