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
    </div>
  )
}
export default App;
