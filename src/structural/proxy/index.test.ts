import { VideoProxy } from "./src/video.proxy";
import { YouTubeApi } from "./src/youtube.api";

const proxy = new VideoProxy(new YouTubeApi());

describe("Video proxy", function () {
    

    it("was cached?", async () => {
        const key = 'courses';

        let result = await proxy.getPlayList(key);
        result = await proxy.getPlayList(key);

        expect(proxy['cache'][key]).toBeDefined();
    });
});