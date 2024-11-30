import { Router } from "express";
import { router as todoRouter } from "./todoRouter";

export const apiRouter = Router();

const ROUTER = [{ url: "/", router: todoRouter }];

ROUTER.forEach(({ url, router }) => {
  apiRouter.use(url, router);
});
