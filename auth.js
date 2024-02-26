const jwt = require('jsonwebtoken');

async function auth(req, res, next) {
	const cookie = req.headers.cookie;
	if (!cookie) return res.status(401).send('not allowed');
	const token = cookie.split('=')[1];
	if (!token) return res.status(401).send('not allowed');

	try {
		const user = await jwt.verify(token, '666');
        req.user = user;
        next();
	}
	catch (err) {
		res.status(401).send('not allowed');
	}
}

module.exports = auth;