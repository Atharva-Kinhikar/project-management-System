import React, { useState, useEffect } from 'react';
import './dash1.css';
import axios from 'axios';
import DashboardHeader from './DashboardHeader';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import React from 'react';
import ReactDOM from 'react-dom';
import Dashboard from './Dashboard';

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById('root')
);


const Dashboard1 = () => {
  // Static dummy data for the dashboard
  const [dashboardData, setDashboardData] = useState({
    totalproject: 0,
    closeproject: 0,
    runningProjects: 0,
    overdueRunningProjects: 0,
    cancelledProjects: 0,
  });
  const [departmentStats, setDepartmentStats] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/count')
     .then(response => {
        setDashboardData(response.data);
      })
     .catch(error => {
        console.error('There was an error fetching the dashboard data!', error);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json'); // Replace with your actual API endpoint
        const data = await response.json();
        setDepartmentStats(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for chart
  const chartData = departmentStats.map((stat) => ({
    name: stat._id,
    Total: stat.totalProjects,
    Closed: stat.completedProjects,
    Percentage: stat.percentage // New: Include department-wise percentage
  }));

  return (
    <div className="App">
      <div className="dashboard-flex-container">
        <DashboardHeader />
        <div className="dashboard-container">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="cards-grid">
            <div className="card total-projects">
              <h2>Total Projects</h2>
              <p>{dashboardData.totalproject}</p>
            </div>
            <div className="card closed-projects">
              <h2>Closed</h2>
              <p>{dashboardData.closeproject}</p>
            </div>
            <div className="card running-projects">
              <h2>Running</h2>
              <p>{dashboardData.runningProjects}</p>
            </div>
            <div className="card overdue-projects">
              <h2>Closure Delay</h2>
              <p>{dashboardData.overdueRunningProjects}</p>
            </div>
            <div className="card cancelled-projects">
              <h2>Cancelled</h2>
              <p>{dashboardData.cancelledProjects}</p>
            </div>
          </div>

          <h1>Department wise-Total Vs Closed</h1>
          <div className="chart-container">
            <BarChart width={600} height={300} data={chartData}>
              <h3 className="chart-title"></h3>
              <CartesianGrid stroke="#f5f5f5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
                <Bar dataKey="Total" fill="#3888d8" />
                <Bar dataKey="Closed" fill="#82ca9d" />
                {/* New: Bar for percentage */}
                <Bar dataKey="Percentage" fill="#ff7300" />
              </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard1;
