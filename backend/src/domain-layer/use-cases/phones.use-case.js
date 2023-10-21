const PhoneRepository = require("../../data-layer/phones.repository.js");
const Phone = require("../entities/phones.entity.js");

module.exports = class PhoneUseCase {
    async getPhones() {
        const phoneRepository = new PhoneRepository();

        try {
            const phonesDb = await phoneRepository.getPhones();
            const phones = phonesDb.map(phoneDb => new Phone(phoneDb));

            return phones;
        } catch (error) {
            throw error;
        }
    }

    async getOnePhone(id) {
        const phoneRepository = new PhoneRepository();

        try {
            const phoneDb = await phoneRepository.getOnePhone(id);
            return new Phone(phoneDb);
        } catch (error) {
            throw error;
        }
    }
}