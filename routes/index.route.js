const express = require('express');
const router = express.Router();
import companies from './companies.route';
import employees from './employees.route';

router.use('/companies', companies)
router.use('/employees', employees)

module.exports = router;