import models from '../models';
const db = models.sequelize.models;

const List = async (req, res) => {
    try {
        const employees = await db.employees.findAll({})
        if (!employees) {
            return res.json({ success: false, message: 'No employees' })
        } else {
            return res.json({ success: true, data: employees })
        }
    } catch (error) {
        return res.json({ success: false, error: error })
    }
}

const CompanyWiseEmployees = async (req, res) => {
    try {
        const { companyId } = req.params
        const employees = await db.employees.findAll({
            where: {
                companyId: companyId
            }
        })
        if (!employees) {
            return res.json({ success: false, message: 'No employees' })
        } else {
            return res.json({ success: true, data: employees })
        }
    } catch (error) {
        return res.json({ success: false, error: error })
    }
}

const Create = async (req, res) => {
    try {
        const { name, fatherName, motherName, sex, spouseName, pincode,
            area, city, state, country, companyId } = req.body;

        let employee = {
            name, fatherName, motherName, sex, spouseName, pincode,
            area, city, state, country, companyId
        }

        let createEmployee = await db.employees.create(employee)
        if (createEmployee) {
            return res.status(200).json({
                status: true,
                message: 'Employee Added.'
            })
        } else {
            return res.status(400).json({
                status: false,
                message: `Employee Not Added.`,
            })
        }
    } catch (error) {
        console.log(error)
        return res.json({ success: false, messages: error.parent.sqlMessage })
    }
}

const Read = async (req, res) => {
    try {
        const { id } = req.params
        const employee = await db.employees.findOne({
            where: {
                id: id
            }
        })
        if (!employee) {
            return res.json({ success: false, message: 'No employee information' })
        } else {
            return res.json({ success: true, data: employee })
        }
    } catch (error) {
        return res.json({ success: false, error: error })
    }
}

const Update = async (req, res) => {
    try {
        const { id } = req.params

        let updateEmployee = await db.employees.update(req.body, {
            where: {
                id: id
            }
        })
        if (updateEmployee[0]) {
            return res.status(200).json({
                status: true,
                message: 'Employee Updated'
            })
        } else {
            return res.status(400).json({
                status: false,
                message: `Employee Not Updated`
            })
        }
    } catch (error) {
        return res.json({ success: false, error: error })
    }
}

export default { List, CompanyWiseEmployees, Create, Read, Update }