import { Request, Response, response } from "express";
import { number } from "joi";

/** conts atau let itu digunakan 
 * untuk mendeskripsikan sebuah variable 
 * object/ array / function
 */
const luasLingkaran = (request: Request, respone: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const luas = phi * r * r 
        return respone.status(200).json({
            status: true,
             r,
             luas
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}


const kelilingLingkaran = (request: Request, respone: Response) => {
    try {
        const phi = Math.PI
        const r: number = Number(request.body.r)
        const keliling = 2 * phi  * r 
        return respone.status(200).json({
            status: true,
             r,
            keliling
        })
    } catch (error) {
        return respone.status(500).json({
            status: false,
            message: error
        })
    }
}


const  volumeTabung = (request: Request, respone: Response) =>{
    try {
        const phi = Math.PI
        const t: number = Number(request.body.t)
        const r: number = Number(request.body.r)
        const volumer = phi * r^2 * t
        return respone.status(200).json({
            status: true,
            r,
            
        })

    } catch (error) {
        
    }
}


export {luasLingkaran, kelilingLingkaran}