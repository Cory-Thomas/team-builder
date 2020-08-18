import React from "react";

export default function Form({values, update}){
    return(
        <form>
            <label>Name: </label>
            <input />
            <label>Email: </label>
            <input />
            <label>Role: </label>
            <select>
                <option>Pick from these choices:</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Designer</option>
            </select>
        </form>
    )
}