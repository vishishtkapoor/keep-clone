import { useState } from "react";

export function CreateTodo(props) {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black"
        }} type="text" placeholder="Title" onChange={function(e) {
            const value = e.target.value;
            setTitle(value);
        }} /> <br />

        <input id="desc" style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black"
        }} type="text" placeholder="Description" onChange={function (e) {
            const value = e.target.value;
            setDescription(value);
         }} /> <br />

         

        <button style={{
            padding: 10,
            margin: 10,
            borderRadius: 10,
            border: "1px solid black"
        }} onClick={() => {
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description: description
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}> Add Todo </button>
    </div>
}