const express = require('express');
const router = express.Router();

const { getCodeforcesContests } = require('../controllers/codeforcesController');
const { getUpcomingCodeforcesContests } = require('../controllers/upcomingCodeforcesController');
const { getUpcomingCodechefContests } = require('../controllers/upcomingCodechefController');
const { getPastCodechefContests } = require('../controllers/pastCodechefController');
const { getPastCodeforcesContests } = require('../controllers/pastCodeforcesController');
// const verifyToken = require('../middlewares/auth');

// router.get('/codeforces', verifyToken, getCodeforcesContests);

router.get('/codeforces', getCodeforcesContests);
router.get('/upcomingcodeforces', getUpcomingCodeforcesContests);
router.get('/pastcodeforces', getPastCodeforcesContests);
router.get('/upcomingcodechef', getUpcomingCodechefContests);
router.get('/pastcodechef', getPastCodechefContests);



module.exports = router;