import { useState } from 'react'
import axios from 'axios'
const useContactForm = () => {
  const [inputs, setInputs] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleInputChange = (event) => {
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://emma-form-server.herokuapp.com/contact', inputs)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export default useContactForm