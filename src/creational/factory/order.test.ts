import PaymentType from "./factory/enums/payment-type.enum";
import PayPal from "./factory/types/PayPal";
import Visa from "./factory/types/Visa";
import MasterCard from "./factory/types/MasterCard";
import Order from "./order";


let orderVisa       = new Order(PaymentType.Visa,100),
    orderPayPal     = new Order(PaymentType.PayPal,100),
    orderMasterCard = new Order(PaymentType.MasterCard,100);

orderVisa.create();
orderPayPal.create();
orderMasterCard.create();


describe("Order - Visa", () => {
    it("Order must be paid by visa", () => {
        expect(orderVisa.paymentType instanceof Visa).toEqual(true);
    });
    it("Order comission must be 5", () => {
        expect(orderVisa.commision).toEqual(5);
    });
})

describe("Order - PayPal", () => {
    it("Order must be paid by paypal", () => {
        expect(orderPayPal.paymentType instanceof PayPal).toEqual(true);
    });
    it("Order comission must be 6", () => {
        expect(orderPayPal.commision).toEqual(6);
    });
})

describe("Order - MasterCard", () => {
    it("Order must be paid by master card", () => {
        expect(orderMasterCard.paymentType instanceof MasterCard).toEqual(true);
    });
    it("Order comission must be 4", () => {
        expect(orderMasterCard.commision).toEqual(4);
    });
})