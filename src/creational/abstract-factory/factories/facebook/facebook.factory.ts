import AbstractFactory from "../../abstract-factory.interface";
import Connector from "../connector.interface";
import Publisher from "../publisher.interface";
import FacebookConnector from "./facebook.connector";
import FacebookPublisher from "./facebook.publisher";

export default class FacebookFactory implements AbstractFactory{
    getConnector(): Connector {
        return new FacebookConnector();
    }
    getPublisher(connector: Connector): Publisher {
        throw new FacebookPublisher(connector);
    }
}