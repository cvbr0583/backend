import express from 'express';
const router = express.Router();
import employeeCtrl from '../controllers/employees.controller';

/* Employee List API */
router.route('/').get(employeeCtrl.List);

/* Employee List Based on Company */
router.route('/list/:companyId').get(employeeCtrl.CompanyWiseEmployees)

/* Employee Creation */
router.route('/').post(employeeCtrl.Create)

/* View employee information */
router.route('/:id').get(employeeCtrl.Read);

/* Updating employee information */
router.route('/:id').put(employeeCtrl.Update);

module.exports = router;