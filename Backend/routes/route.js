import { plantController } from "../Connection/connection.js";
import express from "express"

let route = express.Router()

route.get("/",plantController.getAll)
route.get("/:id",plantController.getById)
route.delete("/:id",plantController.delete)
route.post("/",plantController.post)

export default route
