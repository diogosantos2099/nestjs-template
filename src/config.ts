import * as dotenv from 'dotenv';

interface Config {
  port: number;
}

dotenv.config();

export const config: Config = {
  port: parseInt(process.env.HOST_PORT, 10),
};
