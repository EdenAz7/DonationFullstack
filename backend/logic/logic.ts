import Donation from "../model/donation";
import Payment from "../model/payment";
import dal from "../utils/dal_mysql";
import { OkPacket } from "mysql";
import dal_mysql from "../utils/dal_mysql";

//get all payment  
async function getAllPayments():Promise<Payment[]>{
  const sql = "SELECT * FROM payment";
  const payments = await dal.execute(sql);
  return payments;
}

//get all donation
async function getAllDonations():Promise<Donation[]>{
  //const sql = "SELECT * FROM donation";
  const sql = `SELECT donation.*, payment
               FROM donation JOIN payment
               ON donation.payment_code = payment.id
  `;
  const donation = await dal.execute(sql);
  return donation;
}

//add new donation
async function addDonation(donation:Donation):Promise<Donation>{
  const sql = `INSERT INTO donation Values(
      DEFAULT,
      '${donation.name}',
      '${donation.family}',
      '${donation.tel}',
      ${donation.sum},
      '${donation.auth_code}',
      '',
      ${donation.payment_code},
      '${donation.memo}'
    )`;
    const result:OkPacket = await dal.execute(sql);
    donation.id = result.insertId;
    return donation;
}

//delete donation
async function deleteDonation(donationId:number):Promise<void>{
  const sql = `DELETE FROM donation WHERE id = ${donationId}`;
  const result:OkPacket = await dal.execute(sql);
}

//update donation
async function updateDonation(donation:Donation):Promise<void>{
  const donationId = donation.id;
  const sql = `UPDATE donation 
  SET 
   name = '${donation.name}',
   family = '${donation.family}', 
   tel = '${donation.tel}', 
   sum = ${donation.sum}, 
   auth_code = '${donation.auth_code}', 
   cancel_code = '${donation.cancel_code}', 
   payment_code = ${donation.payment_code}, 
   memo = '${donation.memo}' 
  WHERE (id = ${donationId});
  `;
  const result:OkPacket = await dal.execute(sql);
}
//cancel donation - update
async function cancelDonation(cancelCode:string,donationId:number):Promise<void>{
  const sql = `UPDATE donation SET cancel_code = '${cancelCode}' WHERE (id = ${donationId})`;
  const result:OkPacket = await dal.execute(sql);
}
export default {
  getAllPayments,
  getAllDonations,
  addDonation,
  deleteDonation,
  updateDonation,
  cancelDonation,
};


//crud -> Create Read Update Delete
//Create - create a new donation
//Read -> get donation information
//Update -> update donation information