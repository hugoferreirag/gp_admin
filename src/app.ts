import express from 'express'
import cors from 'cors'
import * as mysql from 'mysql'
import Register from './routes/index'
import bodyParser from 'body-parser'

class App {
    public express: express.Application
    public conect: any
    public router: express.Router

    public constructor() {
        this.express = express()
        this.middlewares()

    }
    private middlewares(): void {
        this.express.use(express.json())
        this.express.use(cors())
    }
    public async database() {
        const db = mysql.createConnection({
            host: 'localhost',
            user: 'usuario',
            password: 'passwordTypes@123',
            database: 'plants'
        })
        this.conect = db
    }

}

const app = new App()

app.database()

const routes = new Register()
routes.write(app.express)


// Função para buscar o dia de acordo com os parametros fornecidos

// Função para buscar o dia de acordo com os parametros fornecidos
function solution(S = 'Sun 10:00-20:00\nFri 05:00-10:00\nFri 16:30-23:50\nSat 10:00-24:00\nSun 01:00-04:00\nSat 02:00-06:00\nTue 03:30-18:15\nTue 19:00-20:00\nWed 04:25-15:14\nWed 15:14-22:40\nThu 00:00-23:59\nMon 05:00-13:00\nMon 15:00-21:00') {


    const SepararDiaseEHoras = S.split('\n');
    const arrayDeDias = [];
    const horasPorDia = [];
    function buscarIndex(element){

        if(element.includes('Mon')){
            horasPorDia.push({dia:'Mon', partida:'00:00',fim:'24:00'})
            horasPorDia.push({dia:'Mon',horaInicio:element.split(' ')[1].split("-")[0], horaFim:element.split(' ')[1].split('-')[1]})
        }
    }
    SepararDiaseEHoras.findIndex(buscarIndex)

    const sortear = {}
    const calendario = ['Tue','Wed','Thu','Fri','Sat','Sun' ]
    for ( let value of calendario){
        let pay = [];
        SepararDiaseEHoras.findIndex((element)=>{
            if(element.includes(value)){
               
                pay.push({dia:value,horaInicio:element.split(' ')[1].split("-")[0], horaFim:element.split(' ')[1].split('-')[1]})
              
            }
            sortear[value] = pay.sort( (a, b)=> {
                if (a.horaInicio < b.horaInicio) return -1;
                if (a.horaInicio > b.horaInicio) return 1;
                return 0;
            })
        })
    }
    console.log('aaaaaa',sortear)

    // console.log(horasPorDia)
    
    let valorFinal = []
    for (let valueFirst of calendario) {

        // console.log(value)

        horasPorDia.findIndex((element) => {
            if (element.dia == Object.entries(valueFirst)[0][0]) {
                valueFirst[`${element.dia}`].push({ horasInicio: element.horasInicio, horasFim: element.horasFim })
            }
        })

        let dia = Object.entries(valueFirst)[0][0]

        for (let [index, value] of calendario.entries()) {

            if (Object.entries(value)[0][0] == dia) {
                let ordem = value[`${dia}`].sort(ordenarPorHora)
                for (let value of ordem) {
                    valorFinal.push({ dia, value })
                }

            }

        }


    }

    let periodoDescanco = []

    for (let value of calendario) {
        let dias = value[`${Object.entries(value)[0][0]}`]
        

        if (dias[0].partida) {
            // console.log(dias[1].horasInicio.split(":")[1])
            let periodo = {}

            periodo[`${Object.entries(value)[0][0]}`] = ((parseInt(dias[1].horasInicio.split(':')[0]) - parseInt(dias[0].partida.split(':')[0])) * 60) + parseInt(dias[1].horasInicio.split(":")[1])

            periodoDescanco.push(periodo)
        
            let iterator = 1
            for(let [index,valuePeriodo] of dias.entries()){
                if(dias[iterator]){
                    // console.log('ooi',)
                    let hour = (((parseInt(dias[2].horasInicio.split(":")[0])) * 60)+ parseInt(dias[2].horasInicio.split(":")[1])) -
                    (((parseInt(dias[iterator].horasFim.split(":")[0])) * 60)+ parseInt(dias[iterator].horasFim.split(":")[1]))
                    
                    console.log('a',hour)
                       
                    iterator++
                }
            }


        }else{
            // console.log(value[`${Object.entries(value)[0][0]}`][])
        }
    }

    console.log(periodoDescanco)


    function ordenarPorHora(a, b) {
        if (a.horasInicio < b.horasInicio) return -1;
        if (a.horasInicio > b.horasInicio) return 1;
        return 0;
    }
    // console.log( horasPorDia, calendario[6].Sun.sort(ordenarPorIdade))

}
solution()

function compararHora(hora1, hora2) {


    return hora1 > hora2 ? 'hora1: ' + hora1 : 'hora2: ' + hora2

};
function a() {
    return '08' > '09' ? '08' : '09'
}
console.log(compararHora())




export default app
