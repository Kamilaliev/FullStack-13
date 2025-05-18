import { plantsModel } from "../Modules/modul.js";
import { plantsValidationSchema } from "../Validation/validation.js";

export let plantController = {
    getAll:async(req,res)=>{
        let plants = await plantsModel.find()
        res.send(plants)
    },
    getById:async(req,res)=>{
        let {id}= req.params
        let plants = await plantsModel.findById({_id:id})
        res.send(plants)
    },
     delete:async(req,res)=>{
        let {id}= req.params
        await plantsModel.findByIdAndDelete({_id:id})
        res.send({
            message:"deleted"
        })
    },
    post:async(req,res)=>{
        let {error}= plantsValidationSchema.validate(req.body)
        if(error){
            return res.send(error.details[0].message)
        }
        let newPlant =plantsModel(req.body)
        await newPlant.save()
        res.send(newPlant)
    }
}