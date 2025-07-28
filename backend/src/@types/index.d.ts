import { UserDocument } from "../models/user.model";

declare global {
  namespace Express {
    interface Request {
      user?: UserDocument & { _id: string }; // Make _id required and typed
    }
  }
}
