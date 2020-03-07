
import app from '../app'
import Query from '../orm/operators'


class UsersModel{
    
    public query = new Query('users')

    constructor(){
       
    }
    async create(name:string, secondName:string, businessName:string, email:string, password:string, domain:string, cnpj:string, adress:string, cell:string, fantasyName:string){
        
        
          await this.query.insert({name:name, secondName:secondName, businessName:businessName, email:email, password:password, domain:domain, cnpj:cnpj, adress:adress, cell:cell, fantasyName:fantasyName})
          

    }
    update(){

    }
    delete(){

    }
    showById(){

    }
    list(){

    }
    
}

const userModel = new UsersModel()

export default  userModel