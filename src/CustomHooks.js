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
    const inputs = document.querySelectorAll('.form-container input')
    const labels = document.querySelectorAll('.form-container label')
    document.querySelector('textarea').style.display = 'none'
    inputs.forEach(input => input.style.display = 'none')
    labels.forEach(label => label.style.display = 'none')
    document.querySelector('form h2').style.display = 'none'
    document.querySelector('form h3').style.display = 'block'

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