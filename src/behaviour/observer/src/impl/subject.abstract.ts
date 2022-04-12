import { Observer } from "./observer.interface";

export abstract class  Subject {
    private observers: Observer[] = [];

    attach(observer: Observer): void {
        if(!this.observers.some(o => o === observer)) {
            this.observers.push(observer)
        } else {
            throw new Error("Observer has already been registered.")
        }
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter(o => o !== observer);
    }

    protected notify(message: any): void {
        this.observers.forEach(o => o.update(message));
    }
}