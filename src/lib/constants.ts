export class Constants {
  static NODE_BACKEND_URL: string =
    import.meta.env.NODE_BACKEND_URL ||
    "http://localhost:7002/api/v1/";

  static DEFAULT_ERROR_MESSAGE: string =
    "Something went wrong, please try again later.";
}
