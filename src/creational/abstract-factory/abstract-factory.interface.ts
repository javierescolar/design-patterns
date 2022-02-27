import Connector from "./factories/connector.interface";
import Publisher from "./factories/publisher.interface";

export default interface AbstractFactory {
    getConnector(): Connector;
    getPublisher(connector: Connector): Publisher;
}