import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/FeedbackDashboard.css';

function FeedbackDashboard() {
  const [feedback, setFeedback] = useState([]);
  const [sortBy, setSortBy] = useState('created_at');
  const [order, setOrder] = useState('desc');
  const [category, setCategory] = useState('');

  const fetchFeedback = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/feedback', {
        params: { sortBy, order, category }
      });
      setFeedback(res.data.data.feedback);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, [sortBy, order, category]);

  return (
    <div className="feedback-dashboard">
      <h2 className="dashboard-title">Feedback Dashboard</h2>
      <div className="filters">
        <label>Sort By:</label>
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="created_at">Date</option>
          <option value="name">Name</option>
        </select>

        <label>Order:</label>
        <select value={order} onChange={e => setOrder(e.target.value)}>
          <option value="desc">Desc</option>
          <option value="asc">Asc</option>
        </select>

        <label>Category:</label>
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
        </select>
      </div>

      <ul className="feedback-list">
        {Array.isArray(feedback) && feedback.length > 0 ? (
          feedback.map(f => (
            <li key={f.id} className="feedback-item">
              <div className="feedback-header">
                <strong>{f.name}</strong> <span className="category">{f.category}</span>
              </div>
              <p className="feedback-text">{f.feedback}</p>
              <em className="feedback-date">{new Date(f.createdAt).toLocaleString()}</em>
            </li>
          ))
        ) : (
          <li className="no-feedback">No feedback available.</li>
        )}
      </ul>
    </div>
  );
}

export default FeedbackDashboard;
