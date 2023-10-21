module.exports = class Phone {
    phone;
    constructor(phone) {
        this.phone = {
            id: phone.id,
            phoneNumber: phone.phone,
            createdAt: phone.createdAt,
            user_id: phone.user_id
        }

        return this.phone;
    }

    get phone() {
        return this.phone;
    }
};