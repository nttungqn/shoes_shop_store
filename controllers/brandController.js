const Brand = require('../models/brandModel');
const { HTTPStatusCode, MESSAGE } = require('../utils/base');
const catchAsync = require('../utils/catchAsync');

module.exports.getAll = catchAsync(async (req, res) => {
	const records = await Brand.find();

	if (records) return res.status(HTTPStatusCode.OK).json({ result: records });

	return res.status(HTTPStatusCode.NOT_FOUND).json({
		message: MESSAGE.RECORD_DOES_NOT_EXIST,
	});
});
