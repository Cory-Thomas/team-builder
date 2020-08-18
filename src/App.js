import React, { useState } from 'react';
import Form from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues) 

  const updateForm = (inputName, inputValue) => { 
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const addMember = {...formValues};
    const teamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!teamMember.name || !teamMember.email) return

    setMembers([addMember, ...members]);
    setFormValues(initialFormValues)
  }

  return (
    <div className="App">
      <h1>Team Members</h1>

      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />

      {
        members.map(member => {
        return (
          <div>
            <p>Name: {member.name}</p>
            <p>Email: {member.email}</p>
            <p>Role: {member.role}</p>
          </div>
        )
        })
      }
    </div>
  );
}

export default App;
