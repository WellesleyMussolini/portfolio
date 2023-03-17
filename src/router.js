import express from "express";
import { pet } from "./controllers/pet.controller.js";

const router = express.Router();

router.get("/", pet.get);

router.get("/:id", (request, response) => pet.get_by_id(request, response));

router.post("/", (request, response) => pet.post(request, response));

router.put("/:id", (request, response) => pet.put(request, response));

router.delete("/:id", (request, response) => pet.delete(request, response));

export default router;