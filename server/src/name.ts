import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  try {
    res.json({ success: true, results: ["test", "test01", "test02"] });
  } catch (e) {
    res.status(400).json({ success: false });
  }
});

router.post("/save", (req: Request, res: Response) => {
  try {
  } catch (e) {
    res.status(400).json({ success: false });
  }
});

export default router;
