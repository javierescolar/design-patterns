import AbstractFactory from "./abstract-factory.interface";

export default class Publisher {
    constructor(private content: string){}
    send(factory: AbstractFactory){
        const connector = factory.getConnector();
        const publisher = factory.getPublisher(connector);
        publisher.publish(this.content);
    }
}