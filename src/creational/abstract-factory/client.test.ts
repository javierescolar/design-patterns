import FacebookConnector from "./factories/facebook/facebook.connector";
import FacebookFactory from "./factories/facebook/facebook.factory";
import FacebookPublisher from "./factories/facebook/facebook.publisher";
import LinkedinConnector from "./factories/linkedin/linkedin.connector";
import LinkedinFactory from "./factories/linkedin/linkedin.factory";
import LinkedinPublisher from "./factories/linkedin/linkedin.publisher";


const facebook = new FacebookFactory(),
      linkedin = new LinkedinFactory();

describe("Facebook Publisher", ()=>{
    it("It must be a Facebook connector", ()=>{
        expect(true).toEqual(facebook.getConnector() instanceof FacebookConnector);
    })
    it("It must be a Facebook publisher", ()=>{
        expect(true).toEqual(facebook.getPublisher(facebook.getConnector()) instanceof FacebookPublisher);
    })
});

describe("Linkedin Publisher", ()=>{
    it("It must be a Linkedin connector", ()=>{
        expect(true).toEqual(linkedin.getConnector() instanceof LinkedinConnector);
    })
    it("It must be a Linkedin publisher", ()=>{
        expect(true).toEqual(linkedin.getPublisher(linkedin.getConnector()) instanceof LinkedinPublisher);
    })
});