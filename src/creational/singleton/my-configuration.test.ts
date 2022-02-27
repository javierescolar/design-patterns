import MyConfiguration from "./my-configuration";

let config = MyConfiguration.getInstance();

describe("My Configuration Class", () => {
    it("object shoud be not null", ()=> {
        expect(config !== null).toEqual(true);
    });
    it("objects shoud be equals", ()=> {
        const config2 = MyConfiguration.getInstance();
        expect(config === config2).toEqual(true);
    });
    it("enviroment property should be development", ()=> {
        expect(config.environment === "development").toEqual(true);
    });
});