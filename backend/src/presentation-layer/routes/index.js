const phonesRoutesInit = require("./phones.routes.js");

const routeInit = (app, express) => {
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    phonesRoutesInit(app);
}

module.exports = {
    routeInit
}