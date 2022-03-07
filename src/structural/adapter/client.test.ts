import FacebookNotification from "./providers/facebook-notification";
import SlackAdapterNotification from "./providers/slack-adapter-notification";
import SlackNotification from "./providers/slack-notification";

const providers: any[] = [
    new FacebookNotification(),
    new SlackAdapterNotification(
        new SlackNotification()
    )
];


describe("INotification", () => {
    it("Are providers compatible?",()=> {
        providers.forEach(p => {p
            expect(typeof(p.post)).toEqual("function")
        })
    })
})