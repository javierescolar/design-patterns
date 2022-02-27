import Connector from "../connector.interface";
import Publisher from "../publisher.interface";

export default class LinkedinPublisher implements Publisher{
    constructor(private connector: Connector){}
    publish(content: string): void {
        this.connector.open();
        console.log(`${content} has been published at Linkedin!`)
        this.connector.close();
    }
    
}