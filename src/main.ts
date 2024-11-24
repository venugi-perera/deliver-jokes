import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS globally
  app.enableCors({
    origin: 'http://localhost:3000', // Allow requests from your React frontend
    methods: 'GET,POST,PUT,DELETE', // Specify allowed HTTP methods
    allowedHeaders: 'Content-Type, Authorization', // Specify allowed headers
  });

  // Start the app on the specified port, or 3000 by default
  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
