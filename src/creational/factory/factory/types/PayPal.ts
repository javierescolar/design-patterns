import PaymentMethod from "../payment-method.interface";

export default class PayPal implements PaymentMethod{
    get comission() {
        return 0.06;
    }
}