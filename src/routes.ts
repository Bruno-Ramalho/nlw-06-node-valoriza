import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { ListUserSendedComplementsController } from "./controllers/ListUserSendedComplementsController";
import { ListUserReceivedComplementsController } from "./controllers/ListUserReceivedComplementsController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUsersController } from "./controllers/ListUsersController";


const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listUserSendedComplementsController = new ListUserSendedComplementsController();
const listUserReceivedComplementsController = new ListUserReceivedComplementsController();

const listTagController = new ListTagController();
const listUsersController = new ListUsersController();

router.post("/users", createUserController.handle);
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post("/login", authenticateUserController.handle);
router.post("/compliments", ensureAuthenticated, createComplimentController.handle);

router.get("/users/compliments/sended", ensureAuthenticated, listUserSendedComplementsController.handle);
router.get("/users/compliments/received", ensureAuthenticated, listUserReceivedComplementsController.handle);
router.get("/tags", ensureAuthenticated, listTagController.handle);
router.get("/users", ensureAuthenticated, listUsersController.handle);

export { router };