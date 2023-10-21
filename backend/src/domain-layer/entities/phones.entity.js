module.exports = class Phone {
    phone;
    constructor(phone) {
        this.phone = {
            id: phone.id,
            phone: phone.phone,
        }

        return this.phone;
    }

    get phone() {
        return this.phone;
    }
};