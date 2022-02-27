import PaymentType from "./factory/enums/payment-type.enum";
import PaymentMethodFactory from "./factory/payment-method.factory";
import PaymentMethod from "./factory/payment-method.interface";


export default class Order {

    public paymentType?: PaymentMethod;
    public commision: number = 0;

    constructor(
        private type: PaymentType,
        public amount: number
    ){}

    public create(): void {
        this.paymentType = PaymentMethodFactory.createPaymentType(this.type);
        this.commision = this.paymentType.comission * this.amount;
    }
}