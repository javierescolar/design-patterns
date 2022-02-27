import Connector from "../connector.interface";

export default class LinkedinConnector implements Connector{
    open(): void {
        console.log("connection with Linkedin has been opened")
    }
    close(): void {
        console.log("connection with Linkedin has been opened")
    }

}