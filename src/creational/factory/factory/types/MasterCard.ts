import PaymentMethod from "../payment-method.interface";

export default class MaterCard implements PaymentMethod{
    get comission() {
        return 0.04;
    }
}