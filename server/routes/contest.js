const express = require('express');
const router = express.Router();

const { getCodeforcesContests } = require('../controllers/contestController');

// router.get('/codeforces', verifyToken, getCodeforcesContests);

router.get('/codeforces', getCodeforcesContests);

module.exports = router;