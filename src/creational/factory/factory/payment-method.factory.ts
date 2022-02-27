import PaymentType from "./enums/payment-type.enum";
import PaymentMethod from "./payment-method.interface";
import MasterCard from "./types/MasterCard";
import PayPal from "./types/PayPal";
import Visa from "./types/Visa";

export default class PaymentMethodFactory {
    static createPaymentType(type: PaymentType): PaymentMethod {
        if(type === PaymentType.Visa) {
            return new Visa();
        }
        if(type === PaymentType.PayPal) {
            return new PayPal();
        }
        if(type === PaymentType.MasterCard) {
            return new MasterCard();
        }
        throw new Error("Invalid payment method type.")
    }
}