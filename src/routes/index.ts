import { Router } from "express";
import meRouter from "./meRouter";
import dashboardsRouter from "./dashboardsRouter";
import authRouter from "./authRouter";
import itemsRouter from "./itemsRouter";
import pathsRouter from "./pathsRouter";
import foldersFromPathsRouter from "./foldersFromPathsRouter";
import moveRouter from "./moveRouter";
import repositionRouter from "./repositionRouter";
import urlTitlesRouter from "./urlTitlesRouter";

const router = Router();

router.use("/me", meRouter);
router.use("/auth", authRouter);
router.use("/dashboards", dashboardsRouter);
router.use("/items", itemsRouter);
router.use("/paths", pathsRouter);
router.use("/foldersFromPaths", foldersFromPathsRouter);
router.use("/move",  moveRouter);
router.use("/reposition", repositionRouter);
router.use("/urlTitles", urlTitlesRouter);

export default router;
