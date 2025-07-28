import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { findByIdUserService, updateUserService } from "../services/user.service";
import { HTTPSTATUS } from "../config/http.config";
import { UserDocument } from "../models/user.model";
import { Types } from "mongoose";
import { updateUserSchema } from "../validators/user.validator";


export const getCurrentUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = (req.user as UserDocument & { _id: Types.ObjectId })._id.toString();

    const user = await findByIdUserService(userId);
    return res.status(HTTPSTATUS.OK).json({
      message: "User fetched successfully",
      user,
    });
  }
);

export const updateUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = updateUserSchema.parse(req.body);
    const userId = (req.user as UserDocument & { _id: Types.ObjectId })._id.toString();
    const profilePic = req.file;

    const user = await updateUserService(userId, body, profilePic);

    return res.status(HTTPSTATUS.OK).json({
      message: "User profile updated successfully",
      data: user,
    });
  }
);