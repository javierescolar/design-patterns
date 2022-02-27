import PaymentMethod from "../payment-method.interface";

export default class Visa implements PaymentMethod{
    get comission() {
        return 0.05;
    }
}