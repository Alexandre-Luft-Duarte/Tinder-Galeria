import { Router } from 'express';
import { getAllUsersController, updateUserController, deleteUserController } from "../controllers/user-controller.js";
import { verifyToken } from "../middleware/verify-token.js";
import router from "./auth-routes.js";

router.get('/', verifyToken, getAllUsersController);
router.put('/:id', verifyToken, updateUserController);
router.delete('/:id', verifyToken, deleteUserController);

export default router;