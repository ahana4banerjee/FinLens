import { Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { HTTPSTATUS } from "../config/http.config";
import { generateReportService, getAllReportsService, updateReportSettingService } from "../services/report.service";
import { updateReportSettingSchema } from "../validators/report.validator";
import { UserDocument } from "../models/user.model";


export const getAllReportsController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = (req.user as UserDocument & { _id: string })._id;
    const pagination = {
      pageSize: parseInt(req.query.pageSize as string) || 20,
      pageNumber: parseInt(req.query.pageNumber as string) || 1,
    };

    const result = await getAllReportsService(userId, pagination);

    return res.status(HTTPSTATUS.OK).json({
      message: "Reports history fetched successfully",
      ...result,
    });
  }
);

export const updateReportSettingController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = (req.user as UserDocument & { _id: string })._id;
    const body = updateReportSettingSchema.parse(req.body);

    await updateReportSettingService(userId, body);

    return res.status(HTTPSTATUS.OK).json({
      message: "Reports setting updated successfully",
    });
  }
);

export const generateReportController = asyncHandler(
  async (req: Request, res: Response) => {
    const userId = (req.user as UserDocument & { _id: string })._id;
    const { from, to } = req.query;
    const fromDate = new Date(from as string);
    const toDate = new Date(to as string);

    const result = await generateReportService(userId, fromDate, toDate);

    return res.status(HTTPSTATUS.OK).json({
      message: "Report generated successfully",
      ...result,
    });
  }
);