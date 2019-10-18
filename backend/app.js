const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.argv[4] || 5501;

const { getUser } = require('./util');
const { handleRes } = require('./util');

app.use(cors({}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/userinfo', function(req, res, next) {
	const phone = req.body.phone;
	const result = getUser(phone);
	handleRes(result, res);
});

app.listen(port, () => {
	console.log('express started!');
});
