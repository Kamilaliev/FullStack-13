import Joi from "joi";

export let plantsValidationSchema = Joi.object({
    image: Joi.string().uri(),
    title: Joi.string().min(5).max(60),
    price:Joi.number().min(1).max(1000)
})