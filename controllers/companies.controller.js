import models from '../models';
const db = models.sequelize.models;

const List = async (req, res) => {
    try {
        const companies = await db.companies.findAll({})
        if (!companies) {
            return res.json({ success: false, message: 'No Companies' })
        } else {
            return res.json({ success: true, data: companies })
        }
    } catch (error) {
        return res.json({ success: false, error: error })
    }
}

const Create = async (req, res) => {
    try {
        const { name, address } = req.body
        let company = {
            name: name,
            address: address,
        }
        let createCompany = await db.companies.create(company)
        if (createCompany) {
            return res.status(200).json({
                status: true,
                message: 'Company Added.'
            })
        } else {
            return res.status(400).json({
                status: false,
                message: `Company Not Added.`,
            })
        }
    } catch (error) {
        return res.json({ success: false, messages: error.parent.sqlMessage })
    }
}

const Read = async (req, res) => {
    try {
        const { id } = req.params
        const company = await db.companies.findOne({
            where: {
                id: id
            }
        })
        if (!company) {
            return res.json({ success: false, message: 'No company information' })
        } else {
            return res.json({ success: true, data: company })
        }
    } catch (error) {
        return res.json({ success: false, error: error })
    }
}

const Update = async (req, res) => {
    try {
        const { id } = req.params
        const { name, address } = req.body
        let company = {
            name: name,
            address: address,
        }

        let updateCompany = await db.companies.update(company, {
            where: {
                id: id
            }
        })
        if (updateCompany[0]) {
            return res.status(200).json({
                status: true,
                message: 'Company Updated'
            })
        } else {
            return res.status(400).json({
                status: false,
                message: `Company Not Updated`
            })
        }
    } catch (error) {
        console.log(error)
        return res.json({ success: false, error: error })
    }
}

export default { Read, List, Create, Update }