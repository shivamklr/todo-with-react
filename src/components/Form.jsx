import React from "react";
import { InputGroup, Button } from "@blueprintjs/core";
function Form({ input, submit, inputText }) {
    return (
        <div className="Form">
            <InputGroup
                value={inputText}
                className="form-input"
                onChange={input}
            />
            <Button onClick={submit}>Submit</Button>
        </div>
    );
}

export default Form;
