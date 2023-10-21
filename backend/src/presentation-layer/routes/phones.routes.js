const phonesController = require("../controllers/phones.controller.js");

module.exports = function (app) {
    app.get("/api/phones", phonesController.getPhones);
    // app.patch("/api/phone/", phonesController.updatePone);
    // app.delete("/api/phone/", phonesController.removePhone);
    app.post("/api/phones/", phonesController.addPhone);
}