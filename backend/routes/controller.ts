import express, { NextFunction, Request, response, Response } from "express";
import logic from "../logic/logic";
import Donation from "../model/donation"
import Payment from "../model/payment"

const router = express.Router();

//port - 3001
//route -> /api/payment
//on my computer -> localhost
//url -> http://localhost:3001/api/payments (GET)
//get all payments - Verb(Get)
router.get("/api/payments", async (request:Request,response:Response, next:NextFunction) => {
  try{
      const payments = await logic.getAllPayments();
      console.log(payments);
      response.status(200).json(payments);
      
  } catch (err:any){
    next(err);
  }
});

//get all donations - get
router.get("/api/donations", async (request:Request,response:Response, next:NextFunction) => {
  try{
        const donations = await logic.getAllDonations();
        console.log(donations);
        response.json(donations);
     } catch(err:any){
    next(err);
  }
});

//make donation 18        -Post
//make donation 36
//make donation 180
//make donation 360
//make donation 1800
//make donation 3600
//make donation custom

router.post("/api/new_donation", async (request:Request, response:Response, next:NextFunction) => {
  try{
    let donation = new Donation(request.body);
    //donation.sum=18;
    const newDonation = await logic.addDonation(donation);
    response.status(201).json(newDonation);

  } catch (err:any){
    next(err);
  }
});

//cancel donation        -update
router.put("/api/cancel/:cancelCode/:donationId",  async (request:Request, response:Response, next:NextFunction) => {
    const cancelCode = request.params.cancelCode;
    const donationId = +request.params.donationId;
    await logic.cancelDonation(cancelCode,donationId);
    response.status(202).json("{msg:'donation canceled'}");
});
//update donation        -update
router.put("/api/update", async (request:Request, response:Response, next:NextFunction)=>{
  const donation = request.body;
  await logic.updateDonation(donation);
  response.status(202).json("{msg:'donation updated'}");
});
//delete donation        -delete
router.delete("/api/delete/:donationId", async(request:Request, response:Response, next:NextFunction) =>{
  try{
    const donationId = +request.params.donationId;
    await logic.deleteDonation(donationId);
    response.status(202).json("{msg:'done'}");
  }catch (err:any){
    next(err);
  }
});

export default router;
