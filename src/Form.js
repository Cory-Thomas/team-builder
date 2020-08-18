import React from "react";

export default function Form({values, update, submit}){
    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
      }

      const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }  

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input 
                    value={values.name}
                    onChange={onChange}
                    name="name"
                    id="name"
                    placeholder="type name"
                    maxLength='20'
                    type="text"
                />
            </div>
            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    value={values.email}
                    onChange={onChange}
                    name="email"
                    id="email"
                    placeholder="type email"
                    maxLength='30'
                    type="email"
                />
            </div>
            <div>
                <label htmlFor="role">Role: </label>
                <select onChange={onChange} value={values.role} name="role" id="role">
                    <option value="">--  Select a Role  --</option>
                    <option value="Frontend Developer">Frontend Developer</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Designer">Designer</option>
                </select>
            </div>
            <button disabled={!values.name || !values.email || !values.role ? true : false}>Submit</button>
        </form>
    )
}