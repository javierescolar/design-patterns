import AbstractFactory from "../../abstract-factory.interface";
import Connector from "../connector.interface";
import Publisher from "../publisher.interface";
import LinkedinConnector from "./linkedin.connector";
import LinkedinPublisher from "./linkedin.publisher";

export default class LinkedinFactory implements AbstractFactory{
    getConnector(): Connector {
        return new LinkedinConnector();
    }
    getPublisher(connector: Connector): Publisher {
        throw new LinkedinPublisher(connector);
    }
}