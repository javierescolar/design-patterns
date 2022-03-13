
import { Product } from "./src/product";
import { BasePrice } from "./src/base-price";
import { SpecialPriceDecorator } from "./src/decorators/special-price.decorator";
import { VipCustomerDecorator } from "./src/decorators/vip-customer.decorator";

describe("Product price", () => {
    it("base price", () => {
        const product = new Product("Guitara Suhr Classic", 2500);

        let specialPrice = new BasePrice();

        product.setSpecialPrice(
            specialPrice.calculate(product.price));

        expect(product.specialPrice).toBe(0)
    });

    it("special price discount", () => {
        const product = new Product("Guitara Suhr Classic", 2500);

        let specialPrice = new BasePrice();

        specialPrice = new SpecialPriceDecorator(specialPrice);

        product.setSpecialPrice(
            specialPrice.calculate(product.price));

        expect(product.price > product.specialPrice).toBeTruthy();
    });

    it("vip customer discount", () => {
        const product = new Product("Guitara Suhr Classic", 2500);

        let specialPrice = new BasePrice();

        specialPrice = new VipCustomerDecorator(specialPrice);

        product.setSpecialPrice(
            specialPrice.calculate(product.price));

        expect(product.price > product.specialPrice).toBeTruthy();
    });

    it("special price and vip customer discount", () => {
        const product = new Product("Guitara Suhr Classic", 2500);

        let specialPrice = new BasePrice();

        specialPrice = new SpecialPriceDecorator(specialPrice);
        specialPrice = new VipCustomerDecorator(specialPrice);

        product.setSpecialPrice(
            specialPrice.calculate(product.price));

        expect(product.price > product.specialPrice).toBeTruthy();
        
    });
});