export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      POKEAPI_URL: string;
    }
  }
}
