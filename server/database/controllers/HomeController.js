const logins = require('../database.json')

module.exports = {
    index(req, res) {
        try{
            return res.status(200).json(logins)
        } catch (e) {
            return res.status(404).json({ error: e.msg});
        }
    }
}