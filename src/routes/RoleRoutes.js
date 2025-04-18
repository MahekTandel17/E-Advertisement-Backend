const routes = require("express").Router()
const roleController= require("../controllers/RoleController")
routes.get("/getall",roleController.getAllRoles)
routes.post("/add",roleController.addRole)
routes.delete("/deletebyid/:id",roleController.deleteRole)
routes.get("/getbyid/:id",roleController.getRoleById);
routes.get("/getrolebyname/:name" , roleController.getRoleByName)


module.exports = routes