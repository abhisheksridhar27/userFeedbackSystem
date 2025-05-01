import React from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackDashboard from './components/FeedbackDashboard';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Feedback System</h1>
      <FeedbackForm />
      <hr />
      <FeedbackDashboard />
    </div>
  );
}

export default App;
