import routeUser from './Users'


class Register{
    constructor(){
       
    }

    write(apl:any){
        console.log('as')
        apl.use('/users', routeUser.create) 
    }
}
export default Register