const express = require('express');
const router = express.Router();

/**
 * @description Login / Landing page
 * @route Get /
 */
router.get('/', (req, res) => {
  res.render('login');
});

/**
 * @description Dashboard page
 * @route Get /dashboard
 */
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

module.exports = router;
