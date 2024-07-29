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
}
export default App;
