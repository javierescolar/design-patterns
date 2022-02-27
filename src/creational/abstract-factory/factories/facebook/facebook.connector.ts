import Connector from "../connector.interface";

export default class FacebookConnector implements Connector{
    open(): void {
        console.log("connection with Facebook has been opened")
    }
    close(): void {
        console.log("connection with Facebook has been closed")
    }
    
}