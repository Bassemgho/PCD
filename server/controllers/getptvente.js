import ptvente from '../models/ptvente.js';
import errorResponse from '../utils/ErrorResponse.js';
/*
export const getptvente = async (req,res,next) => {
    //const {id} = req.params;
    const user = req.user;
    const {id} = user.id_entreprise;
    //const options = {nom , address , lat, lang, heuredebut,mindebut,heurefin,minfin,jourdebut,jourfin}
    try {
        const vente = await ptvente.findOne(id);

        if (!vente) {
            return next(new errorResponse("pas de poins de vente",404));
        }
         return res.status(201).json(vente)

    } catch (error) {
        next(e);
    }

}
*/

export const getptvente = async (req,res,next) => {
    // const {id_entreprise } = req.params;
    const user = req.user;
    const id_entreprise = user.id_entreprise;
    try {
        const vente = await ptvente.find({id_entreprise });

        if (!vente) {
            return next(new errorResponse("pas de poins de vente",404));
        }
         return res.status(201).json(vente)

    } catch (error) {
        next(e);
    }

}

/*
export const getptvente = async (req,res,next) => {
    //const {id} = req.params;
    const user = req.user;
    try {
        const vente = await ptvente.findOne(user.id_entreprise);

        if (!vente) {
            return next(new errorResponse("pas de poins de vente",404));
        }
         return res.status(201).json(vente)

    } catch (error) {
        next(e);
    }

}
*/
