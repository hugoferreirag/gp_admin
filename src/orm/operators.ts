import app from '../app'

class Query {

    public table: string

    constructor(table) {

        this.table = table
    }

    select(args: string,callback) {

        app.conect.query(`SELECT ${args} FROM ${this.table} `)

    }

    insert(args: any) {
        return new Promise(async (resolve, reject) => {
         
            const fields = Object.keys(args)

            let query = `INSERT INTO ${this.table} (${fields.join(',')}) values ('${fields.join("','")}')`
        
             app.conect.query(query, (err, result) => {
         
               if(err){
         
                 return reject(err);
               }
         
               return resolve(result);
             })
             })
    }

    where(args:any, callback){

    }
}

export default Query