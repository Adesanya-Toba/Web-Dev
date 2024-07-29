import React, { useState, useEffect } from 'react'
// useState allows us to keep state within react, so we know when state changes
// useEffect is run whenever this component (app.js) loads 
import api from './api'

const App = () => {
  const [transactions, setTransactions] = useState([])
  const [formData, setFormData] = useState({
    amount: "",
    category: "",
    description: "",
    is_income: false,
    date: ""
  })

  const fetchTransactions = async () => {
    const response = await api.get('/transactions/') // Making api request to our fastapi endpoint
    setTransactions(response.data)
  };

  useEffect(() => {
    fetchTransactions();
  }, [])

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({
      ...formData,
      [event.target.name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault(); // Overriding the default submit behavior, i.e., you'd still see the data
    await api.post("/transactions", formData);
    fetchTransactions(); // Refresh front-end with latest data after submitting
    // The line below resets the form fields with the default data.
    setFormData({
      amount: "",
      category: "",
      description: "",
      is_income: false,
      date: ""
    });
  };

  // React can only return one element
  return (
    <div>
      {/* Using bootstrap CSS */}
      <nav className='navbar navbar-dark bg-primary'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Finance App
          </a>
        </div>
      </nav>
      <div className='container'>
        <form onSubmit={handleFormSubmit}>

          <div className='mb-3 mt-3'> {/*mt: margin-top, mb: margin-bottom */}
            <label htmlFor='amount' className='form-label'>
              Amount
            </label>
            <input type='text' className='form-control' id='amount' name='amount' onChange={handleInputChange} value={formData.amount} />
          </div>

          <div className='mb-3'> {/*mt: margin-top, mb: margin-bottom */}
            <label htmlFor='category' className='form-label'>
              Category
            </label>
            <input type='text' className='form-control' id='category' name='category' onChange={handleInputChange} value={formData.category} />
          </div>

          <div className='mb-3'> {/*mt: margin-top, mb: margin-bottom */}
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <input type='text' className='form-control' id='description' name='description' onChange={handleInputChange} value={formData.description} />
          </div>

          <div className='mb-3'> {/*mt: margin-top, mb: margin-bottom */}
            <label htmlFor='is_income' className='form-label'>
              Income?
            </label>
            <input type='checkbox' id='is_income' name='is_income' onChange={handleInputChange} value={formData.is_income} />
          </div>

          <div className='mb-3'> {/*mt: margin-top, mb: margin-bottom */}
            <label htmlFor='date' className='form-label'>
              Date
            </label>
            <input type='text' className='form-control' id='date' name='date' onChange={handleInputChange} value={formData.date} />
          </div>

          {/*Create button*/}
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>

      </div>
    </div>
  )
}
export default App;
