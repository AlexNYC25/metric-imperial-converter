'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
	
	let convertHandler = new ConvertHandler();

	app.get('/api/convert', (req, res) => {
		let conversionInput = req.query.input;

		let initNum = convertHandler.getNum(conversionInput);
		let initUnit = convertHandler.getUnit(conversionInput);
		let returnNum = convertHandler.convert(initNum, initUnit);
		let returnUnit = convertHandler.getReturnUnit(initUnit);
		let returnString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

		if(initNum === null && initUnit === null) {
			return res.send('invalid number and unit');
		} else if(initNum === null) {
			return res.send('invalid number');
		} else if(initUnit === null) {
			return res.send('invalid unit');
		}

		return res.status(200).json({
			initNum: initNum,
			initUnit: initUnit,
			returnNum: returnNum,
			returnUnit: returnUnit,
			string: returnString
		});
		

	});
};
