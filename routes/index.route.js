const express = require('express');
const router = express.Router();
const companies = require('./companies.route');
const employees = require('./employees.route');

router.use('/companies', companies)
router.use('/employees', employees)

module.exports = router;