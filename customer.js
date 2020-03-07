class Customer {
    constructor(name, phone, email, id, table) {
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.id = id;
        this.table = table;
    }

    getInfo () {
        const info = [this.name, this.phone, this.email, this.id, this.table];
        console.log(info);
        return info;
    }

    toggleReservation(bool) {
        this.table = bool;
    }

}

module.exports = Customer;