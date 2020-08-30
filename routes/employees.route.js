import express from 'express';
const router = express.Router();
import employeeCtrl from '../controllers/employees.controller';

router.route('/').get(employeeCtrl.List);

router.route('/list/:companyId').get(employeeCtrl.CompanyWiseEmployees)

router.route('/').post(employeeCtrl.Create)

router.route('/:id').get(employeeCtrl.Read);

router.route('/:id').put(employeeCtrl.Update);

module.exports = router;