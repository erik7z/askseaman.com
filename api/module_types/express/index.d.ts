declare module Express {
  export interface Request {
    error: string | string[] | undefined;
  }
}