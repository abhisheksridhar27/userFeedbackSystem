import React, { useState } from 'react';
import axios from 'axios';
import './css/FeedbackForm.css';

function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', category: '', text: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/feedback', form);
      alert('Feedback submitted!');
      setForm({ name: '', email: '', category: '', text: '' });
    } catch (err) {
      alert('Failed to submit feedback.');
    }
  };

  return (
    <form className="feedback-form" onSubmit={handleSubmit}>
      <h2 className="form-title">Submit Feedback</h2>
      <div className="form-group">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <select name="category" value={form.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="Suggestion">Suggestion</option>
          <option value="Bug Report">Bug Report</option>
          <option value="Feature Request">Feature Request</option>
        </select>
      </div>

      <div className="form-group">
        <textarea
          name="text"
          placeholder="Your Feedback"
          value={form.text}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <button type="submit" className="submit-btn">Submit Feedback</button>
    </form>
  );
}

export default FeedbackForm;
