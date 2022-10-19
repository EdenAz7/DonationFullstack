import express from "express";
import cors from "cors";
import config from "./utils/config";
import catchAll from "./middleware/catch-all";
import routeNotFound from "./middleware/route-not-found";
import controller from "./routes/controller";

//create the server
const server = express();
//for elior - handle cors
server.use(cors());
//use json as data type to send to the client
server.use(express.json());
//routes with the controller
server.use("/", controller);
//if the is no route like the user asked because we are dealing with dumb user.
server.use("*", routeNotFound);
//if we have an error that we didn't handle, last safty net
server.use(catchAll);

//run the server by the config that we created
server.listen(config.port, () =>
  console.log("Listening on http://localhost:" + config.port)
);
