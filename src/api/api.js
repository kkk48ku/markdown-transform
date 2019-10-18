import { reject } from 'q';

const request = require('request');
const baseUrl = 'http://localhost:5501';

export function getUserInfo(phone, callback) {
	// return request.post(`${baseUrl}/userinfo`, { form: { phone: phone } }, (err, res) => {
	// 	if (err) return callback(err);
	// 	return callback(JSON.parse(res.body));
	// });
	return new Promise((resolve, reject) => {
		return request.post(`${baseUrl}/userinfo`, { form: { phone: phone } }, (err, res) => {
			if (err) reject(err);
			resolve(JSON.parse(res.body));
		});
	});
}
