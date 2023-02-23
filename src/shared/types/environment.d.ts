declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_USERNAME: string;
      DBPASSWORD: string;
      PORT: string;
      SECRET: string;
    }
  }
}
