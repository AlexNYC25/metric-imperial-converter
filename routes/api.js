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

		if(initNum === null && initUnit === null) {
			return res.status(400).json('invalid number and unit');
		} else if(initNum === null) {
			return res.status(400).json('invalid number');
		} else if(initUnit === null) {
			return res.status(400).json('invalid unit');
		} else if(returnNum === null) {
			return res.status(400).json('invalid number');
		} else if(returnUnit === null) {
			return res.status(400).json('invalid unit');
		} else {
			return res.status(200).json({
				initNum: initNum,
				initUnit: initUnit,
				returnNum: returnNum,
				returnUnit: returnUnit
			});
		}

	});
};
