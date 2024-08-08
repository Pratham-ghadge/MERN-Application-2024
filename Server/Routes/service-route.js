import express from 'express'
import { services } from '../Controllers/service-controllers.js';

  const  Router = express.Router();


  Router.get("/service",services)

  

  export default Router;

