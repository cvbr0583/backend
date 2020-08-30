const express = require('express');
const router = express.Router();
const companies = require('./companies.route');
const employees = require('./employees.route');

/* Companies API middleware */
router.use('/companies', companies)

/* Employee API middleware */
router.use('/employees', employees)

module.exports = router;