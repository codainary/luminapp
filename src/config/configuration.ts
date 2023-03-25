import { registerAs } from '@nestjs/config';

export default registerAs('configuration', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
    },
  };
});
