export class OrderModel{
    constructor(orderId,cusId,proId,qty,price) {
        this._orderId = orderId;
        this._cusId = cusId;
        this._proId = proId;
        this._qty = qty;
        this._price = price;
    }
    get orderId() {
        return this._orderId;
    }

    set orderId(value) {
        this._orderId = value;
    }

    get cusId() {
        return this._cusId;
    }

    set cusId(value) {
        this._cusId = value;
    }

    get proId() {
        return this._proId;
    }

    set proId(value) {
        this._proId = value;
    }

    get qty() {
        return this._qty;
    }

    set qty(value) {
        this._qty = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }
}