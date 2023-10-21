const knex = require("../../config/knex.config.js");
const PHONES_TABLE = "phones";

module.exports = class PhonesRepository {
    async getPhones() {
        try {
            const phones = await knex(PHONES_TABLE)
                .select("*");

            if (!phones.length) throw "Data exist"
            return phones;
        } catch (error) {
            throw error;
        }
    }

    async getOnePhones(id) {
        try {
            const phone = knex(PHONES_TABLE)
                .select("*")
                .where({ "phones.id": id });

            if (!phone[0]) throw "Id is not exist"

            return phone[0];
        } catch (error) {
            throw error;
        }
    }
}