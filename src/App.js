import React, { useState } from 'react';
import Form from './Form';
import style from "styled-components";
import './App.css'

const StyledDiv = style.div`
  width: 80%;
  margin: 0 auto;
  text-align: center;
  background-color: rgba(255,255,255,.4);
  padding: 2%;
  padding-top: .5%;
  border-radius: 40px;
`

const StyledSection = style.section`
  background-color: rgba(11,60,119, .6);
  color: white;
  margin: 4% auto;
  padding: 3%;
  width: 30%;
  border-radius: 40px;
`

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
    <StyledDiv>
      <h1>Team Members</h1>

      <Form 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      
        {
          members.map(member => {
          return (
            <StyledSection>
            <div>
              <p>Name: {member.name}</p>
              <p>Email: {member.email}</p>
              <p>Role: {member.role}</p>
            </div>
            </StyledSection>
          )
          })
        }
      
    </StyledDiv>
  );
}

export default App;
