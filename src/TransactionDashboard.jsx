import React, { useState, useEffect } from 'react';
import './TransactionDashboard.css';
import BarChart from './components/BarChart';
import Statistics from './components/Statistics';

function TransactionDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [searchText, setSearchText] = useState('');
  const [pageNo, setPageNo] = useState(1);
  const [transactions, setTransactions] = useState([]);
  const [barChart, setBarChart] = useState([]);
  const [statistics, setStatistics] = useState([]);

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSearchText('');
    setIsModalOpen(false);
  };
  const handleSubmitModal = () => {
    setSearchText(document.getElementById("search-input").value);
    setIsModalOpen(false);
  };

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/data?month=${selectedMonth}&searchText=${searchText}&page=${pageNo}`)
      let data = await response.json()
      setTransactions(data.transactions)
      setBarChart(data.barChart)
      setStatistics(data.statistics)
    }
    fetchData()
  }, [selectedMonth, searchText, pageNo]);
  useEffect(() => {
    setPageNo(1)
  }, [selectedMonth])

  return (
    <div className="dashboard" style={{
      height: '100vh',
    }}>
      <h1>Transaction Dashboard</h1>
      <div className="controls">
        <button onClick={handleSearchClick}>Search transaction</button>
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: 'center' }}>Loading...</td>
            </tr>
          ) : (
            transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>{transaction.id}</td>
                <td>{transaction.title}</td>
                <td>{transaction.description}</td>
                <td>{transaction.price}</td>
                <td>{transaction.category}</td>
                <td>{transaction.sold ? 'Yes' : 'No'}</td>
                <td><img src={transaction.image} alt={transaction.title} style={{ width: '100%', height: '100%' }} /></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="pagination">
        <span>Page No: {pageNo}</span>

        <button onClick={() => {
            if (pageNo > 1) {
                setPageNo(pageNo - 1)
            }
        }}>Previous</button>
        <button onClick={() => {
            if(transactions.length === 10) {
                setPageNo(pageNo + 1)
            }
        }}>Next</button>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Search Transaction</h2>
            <input id="search-input" type="text" placeholder="Enter text to search" />
            <button onClick={handleSubmitModal}>Submit</button>
          </div>
        </div>
      )}
      <Statistics selectedMonth={selectedMonth} data={statistics} />
      <BarChart data={barChart} selectedMonth={selectedMonth} />
    </div>
  );
}

export default TransactionDashboard;
