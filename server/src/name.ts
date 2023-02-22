import { Request, Response, Router } from "express";
import multer from "multer";

const router = Router();
const upload = multer();

router.get("/", (req: Request, res: Response) => {
  try {
    res.json({ success: true, results: ["test", "test01", "test02"] });
  } catch (e) {
    res.status(400).json({ success: false });
  }
});

router.post("/save", upload.single("name"), (req: Request, res: Response) => {
  try {
    console.log(req.body);
    res.json({ success: true });
  } catch (e) {
    res.status(400).json({ success: false });
  }
});

export default router;
