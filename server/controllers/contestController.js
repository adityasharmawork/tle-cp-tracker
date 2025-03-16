const axios = require('axios');

exports.getCodeforcesContests = async (req, res) => {
    try {
        const response = await axios.get('https://codeforces.com/api/contest.list');
        const contests = response.data.result;
        res.json({
            contests,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Error fetching CodeForces Contests!",
        });
    }
}