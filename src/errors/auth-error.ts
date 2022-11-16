import { CustomError } from "./custom-error";
//checking
export class AuthError extends CustomError {
  statusCode = 401;
  constructor() {
    super("not Authorized");
    Object.setPrototypeOf(this, AuthError.prototype);
  }
  serializeErrors = () => {
    return [{ message: "not Authorized" }];
  };
}
