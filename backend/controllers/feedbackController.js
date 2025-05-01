const Feedback = require('../models/feedbackModel');
const { successResponse, errorResponse } = require('../utils/responseHandler');

exports.submitFeedback = async (req, res) => {
  const { name, email, category, text } = req.body;
  try {
    const feedback = await Feedback.createFeedback(name, email, category, text);
    return successResponse(res, 'Feedback submitted successfully', {
      id: feedback.id,
      name: feedback.name,
      email: feedback.email,
      category: feedback.category,
      feedback: feedback.text,
      createdAt: feedback.created_at
    }, 201);
    
  } catch (error) {
    return errorResponse(res, 'Failed to submit feedback', error.message);
  }
};

exports.getFeedback = async (req, res) => {
  const { sortBy, order, category } = req.query;
  try {
    const feedbackList = await Feedback.getFeedback(sortBy, order, category);

    return successResponse(res, 'Feedback fetched successfully', {
      count: feedbackList.length,
      feedback: feedbackList.map(item => ({
        id: item.id,
        name: item.name,
        email: item.email,
        category: item.category,
        feedback: item.text,
        createdAt: item.created_at
      }))
    });

  } catch (error) {
    return errorResponse(res, 'Failed to fetch feedback', error.message);
  }
};
