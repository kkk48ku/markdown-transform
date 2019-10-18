const userInfo = require('./userinfo');

const getUser = function(phone) {
	let user = {};
	userInfo.forEach(item => {
		if (item.phone === phone) user = item;
	});
	if (user.phone) return user;
	return false;
};

const handleRes = function(result, res) {
	if (!result) {
		res.json({
			success: false,
			message: '没有查询到用户信息！',
			data: {}
		});
	} else {
		res.json({
			success: true,
			message: '',
			data: result
		});
	}
};

exports.getUser = getUser;
exports.handleRes = handleRes;
