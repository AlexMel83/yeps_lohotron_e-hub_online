const PhoneRepository = require("../../data-layer/phones.repository.js");
const Phone = require("../entities/phones.entity.js");

module.exports = class PhoneUseCase {
    mapFields = {
        id: "id",
        phone: "phone"
    }

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

    async addPhone(data) {
        const phoneRepositary = new PhoneRepository();

        if (!data.fields && !Array.isArray(data.fields) && !data.fields.length) {
            throw "Data for update not exist";
        }
        const fields = data.fields;
        const isStringChecked = this.checkStringFieldsInsert(fields);

        if (!isStringChecked) {
            throw "Wrong data";
        }

        try {
            const phone = await phoneRepositary.addPhone(this.reduceFields(fields));
            return phone;
        } catch (error) {
            throw error;
        }
    }

    async removePhone(id) {
        try {
            const phoneRepositary = new PhoneRepository();
            const result = await phoneRepositary.removePhone(id);
            return result;
        } catch (error) {
            throw error;
        }
    }

    checkStringFieldsInsert(fields) {
        const keys = fields.map(val => {
            return Object.entries(val)[0][0];
        });
        const IS_VALID = true;

        for (let i = 0; i < keys.length; i++) {
            if (!(keys[i]) in this.mapFields) return !IS_VALID;
        }
        return IS_VALID;
    }

    reduceFields(fields) {
        return fields.reduce((acc, el) => {
            const entriesEl = Object.entries(el);
            acc[entriesEl[0][0]] = entriesEl[0][1];
            return acc;
        }, {});
    }
}