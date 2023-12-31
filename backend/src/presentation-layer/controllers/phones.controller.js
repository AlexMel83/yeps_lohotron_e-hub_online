const PhonesUseCase = require("../../domain-layer/use-cases/phones.use-case.js");

exports.getPhones = async (req, res) => {
    const phonesUseCase = new PhonesUseCase();
    try {
        if (req?.query?.id) {
            const id = req.query.id;
            const phone = await phonesUseCase.getOnePhone(id);

            return res.status(200).send(phone)
        }
    } catch (error) {
        return res.status(400).send(error);
    }

    try {
        const phones = await phonesUseCase.getPhones()
        return res.status(200).send(phones);
    } catch (error) {
        return res.status(400).send(error);
    }
};

exports.addPhone = async (req, res) => {
    try {
        const phonesUseCase = new PhonesUseCase();
        const data = req.body;

        if (data) {
            const phone = await phonesUseCase.addPhone(data);
            return res.status(200).send(phone);
        }
    } catch (error) {
        return res.status(400).send(error);
    }
}

exports.removePhone = async (req, res) => {
    if (req?.query?.id) {
        const id = req.query.id;
        try {
            const phonesUseCase = new PhonesUseCase();
            const phone = await phonesUseCase.removePhone(id);

            return res.status(200).send(phone);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
    if (req?.query?.phone) {
        const number = req.query.phone;
        try {
            const phonesUseCase = new PhonesUseCase();
            const phone = await phonesUseCase.removePhone(number);
            return res.status(200).send(phone);
        } catch (error) {
            return res.status(400).send(error);
        }
    }
}