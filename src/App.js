import React, { useState } from 'react';
import Form from './Form';

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [member, setMember] = useState([]);

  const [formValues, setFormValues] = useState(initialFormValues) 

  const updateForm = (inputName, inputValue) => { 
    setFormValues({ ...formValues, [inputName]: inputValue })
  }

  return (
    <div className="App">
      <h1>Team Members</h1>

      <Form 
        values={formValues}
        update={updateForm}
      />
    </div>
  );
}

export default App;
