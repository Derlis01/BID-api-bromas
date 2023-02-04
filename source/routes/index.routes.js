import { Router } from 'express';
const router = Router();
import { addJoke, showJokes, updateJoke, showJokesById, deleteJoke } from '../controllers/joke.controller.js'

router.post("/post", addJoke);

router.get("/get", showJokes);

router.get("/get/:id", showJokesById);

router.put('/put/:id', updateJoke)

router.delete('/delete/:id', deleteJoke)

export default router;