import express from "express";
import {
  createNote,
  getNotes,
  getNoteById,
  EditNoteById,
  DeleteNoteById,
} from "./controller.js";

const router = express.Router();

router.post("/notes", createNote);
router.get("/notes", getNotes);
router.get("/notes/:id", getNoteById);
router.put("/notes/:id", EditNoteById);
router.delete("/notes/:id", DeleteNoteById);

export default router;
