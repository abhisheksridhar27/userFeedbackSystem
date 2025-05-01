const pool = require('../config/db');

const createFeedback = async (name, email, category, text) => {
  const result = await pool.query(
    'INSERT INTO feedback (name, email, category, text, created_at) VALUES ($1, $2, $3, $4, NOW()) RETURNING *',
    [name, email, category, text]
  );
  return result.rows[0];
};

const getFeedback = async (sortBy = 'created_at', order = 'desc', category = null) => {
  let query = 'SELECT * FROM feedback';
  const values = [];

  if (category) {
    query += ' WHERE category = $1';
    values.push(category);
  }

  query += ` ORDER BY ${sortBy} ${order.toUpperCase()}`;
  const result = await pool.query(query, values);
  return result.rows;
};

module.exports = {
  createFeedback,
  getFeedback
};
