import userModel from '../models/Users'

class UserController {

    constructor() {

    }

    async create(req:any) {
        try{
            
            const { name, secondName, businessName, email, password, domain, cnpj, adress, cell, fantasyName } = req.body
            


            await userModel.create(name, secondName, businessName, email, password, domain, cnpj, adress, cell, fantasyName )
       
        }catch(error){
            console.log(error)
        }

        
    }
}

const userController = new UserController()

export default userController