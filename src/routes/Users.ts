import express from 'express'
import userController from '../controllers/Users'

const router = express.Router()

class Users {

    public create = router.post('/create', async (req, res) => {
        console.log(req.body)
        await userController.create(req)

        res.json('cadastrado')

        
    })

}
const routeUser = new Users()
export default routeUser
//const { businessName, secondName, email, password, domain, cnpj, adress, cell, fantasyName} = req.query