import express from 'express';
const router = express.Router();
import companyCtrl from '../controllers/companies.controller';

/* Company List API */
router.route('/').get(companyCtrl.List);

/* Company creation */
router.route('/').post(companyCtrl.Create)

/* View Single company data */
router.route('/:id').get(companyCtrl.Read);

/* Updating the company information */
router.route('/:id').put(companyCtrl.Update);

module.exports = router;