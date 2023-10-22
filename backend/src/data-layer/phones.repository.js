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

    async addPhone(fields) {
        const trx = await knex.transaction({ isolation: 'repeatable read' });

        try {
            const result = await knex(PHONES_TABLE)
                .transacting(trx)
                .insert(fields)
                .returning("id");

            await trx.commit();

            return result;
        } catch (error) {
            await trx.rollback();
            throw "Atomicity error " + error;
        }
    }

    async removePhone(id) {

        try {
            if (id.length === 13 || id === 0) {
                let phone;
                if (id.length == 13) {
                    phone = "+" + id.trim();
                } else if (id === 0) {
                    phone = "";
                }
                const result = await knex(PHONES_TABLE)
                    .del()
                    .where({ phone })
                    .returning("phone");
                console.log(phone)
                if (!result) throw `Not have data for deleting with phone: ${phone}`;
                return {
                    phone: result[0]
                };
            } else {
                const result = await knex(PHONES_TABLE)
                    .del()
                    .where({ id })
                    .returning("id");

                if (!result) throw `Not have data for deleting with id: ${id}`;
                return {
                    id: result[0]
                };
            }


        } catch (error) {
            throw error;
        }
    }

}