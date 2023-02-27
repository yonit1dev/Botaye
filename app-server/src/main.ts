import { NestFactory } from "@nestjs/core";
import { AppModule } from "./config/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = 3000;

  await app.listen(PORT).then(async () => {
    const url = await app.getUrl();
    console.log("Listening on: ", url);
  });
}

bootstrap();
