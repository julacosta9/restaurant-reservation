class Customer {
    constructor(name, phone, email, id) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
    }

    getInfo () {
        const info = [this.name, this.phone, this.email, this.id];
        console.log(info);
        return info;
    }
}

module.exports = Customer;