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
        const phones = await phonesUseCase.getPhones();

        return res.status(200).send(phones);
    } catch (error) {
        return res.status(400).send(error);
    }
}