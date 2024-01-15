/**ini adalah file utama
 * dimana ada proses menjalankan server backend
 */

/** memanggil library express */
import express, { Request, Response, response } from "express";
import { request } from "http";
import { validateCube } from "./middleware/validateCube";
import routeBangunDatar from "./route/bangunDatar"

/** buat wadah utk inisiasi express */
const app = express()

/** mendefinisikan PORT berjalanyya server */
const PORT = 8000

/** alloww  to read JSON as a request*/
app.use(express.json())

/**proses pertama untuk handle request */
app.get('/serena', (request: Request, response: Response) => {
    return response.status(200).json({
        message: 'Hello Serena saya Tio Wibiksono'
    })

})
/** ini adalah proses handle request dengan 
 * url/address: https://localhost:8000/serena
 * METODE: GET
 */
/** memberi response */

/** read a query request */
app.get(`/moklet`, (request: Request, response: Response) => {
    /**m asumsikan data yang dikirim adalah nama dan umur */
    let nama: any = request.query.nama?.toString()
    let umur: any = request.query.umur?.toString()

    let message: string = `My name is ${nama} and im${umur} years old`
    return response.status(200).json(message)

})

/** read data request from parameter */
app.get(`/telkom/:nama/:gender`, (request: Request, response: Response) => {
    let nama: string = request.params.nama
    let gender: string = request.params.gender
    let message: string = `My name is ${nama} and im ${gender}`
    return response.status(200).json(message)
})

/** read a request from body */
app.post(`/moklet`, (request: Request, response: Response) => {
    /**asumsikan data yang dikirim adalah 
     * panjang dan lebar
     */
    let panjang: number = request.body.panjang
    let lebar: number = request.body.lebar


    let luasPersegiPanjang: number = panjang * lebar
    let Message = `Luas persegi panjang adalah ${luasPersegiPanjang}`
    return response.status(200).json(Message)
})
/** buatlah sebuah request untuk mengonversi
 * suhu celcius ke fahrenheit, kelvin, dan reamur
 * menggunakan request parameter
 * exp: http://localhost:8000/celcius/80
 * (80 adalah nilai celciusnya)
 * respone data ->
 * {
 * reamur: ?, fahrenheit: ?, kelvin: ?}
 */
/** Request pak jak */


/** create request for count volume of long cube */
app.post(`/balok`,validateCube,(request: Request, respone: Response) =>{
    /** read panjang, lebar, tinggi */
    let panjang: number = Number(request.body.panjang)
    let lebar  : number = Number(request.body.lebar)
    let tinggi : number = Number(request.body.tinggi)

    let volume: number = panjang * lebar * tinggi
    return respone.status(200).json({
        panjang, lebar, tinggi, volume
    })
})

/** meregister bangun datar */
app.use(routeBangunDatar)


/** run server */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);

})

