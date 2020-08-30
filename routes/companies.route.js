import express from 'express';
const router = express.Router();
import companyCtrl from '../controllers/companies.controller';

router.route('/').get(companyCtrl.List);

router.route('/').post(companyCtrl.Create)

router.route('/:id').get(companyCtrl.Read);

router.route('/:id').put(companyCtrl.Update);

module.exports = router;