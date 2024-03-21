import React, { useState } from "react";

const UseState1 = () => {
    const [inp, setInp] = useState("");

    const submit = () => {
        const val = document.getElementById("input").value;
        setInp(val);
    };

    return (
        <>
            <label>What is your name :- </label> <br />
            <input type="text" id="input" /> <br />
            <button type="submit" onClick={submit}>
                Submit
            </button>
            <p>your name is : {inp}</p>
        </>
    );
};

export default UseState1;
