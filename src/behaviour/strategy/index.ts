import { Checkout } from "./src/checkout";
import { MastercardStrategy } from "./src/mastercard.strategy";
import { PayPalStrategy } from "./src/paypal.strategy";
import { VisaStrategy } from "./src/visa.strategy";

const checkout = new Checkout();

let userId = "user-001",
    useEmail = "javi@test.es",
    cardNumber = "000-000-000-000",
    cvv = "123",
    amount = 1000,
    paymentMethod = "paypal";


if (paymentMethod === "paypal") {
    checkout.setStrategy(
        new PayPalStrategy(useEmail)
    );
}

if (paymentMethod === "visa") {
    checkout.setStrategy(
        new VisaStrategy(cardNumber, cvv)
    );
}

if (paymentMethod === "mastercard") {
    checkout.setStrategy(
        new MastercardStrategy(cardNumber, cvv)
    );
}

checkout.execute(userId, amount);