import FacebookFactory from "./factories/facebook/facebook.factory";
import LinkedinFactory from "./factories/linkedin/linkedin.factory";
import Publisher from "./publisher";

const content = `Solo por hoy se regala un patrón abstracto gratis 0$!!`;
const publisher = new Publisher(content);
publisher.send(new FacebookFactory())
publisher.send(new LinkedinFactory());
