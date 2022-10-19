class Donation{
    public id:number=0;
    public name:string="";
    public family:string="";
    public tel:string="";
    public sum:number=0;
    public auth_code:string="";
    public cancel_code:string="";
    public payment_code:number=0;
    public memo:string="";

    /*
    constructor (name:string, family:string, tel:string, sum:number, payment_code:number,memo:string){
        this.name = name;
        this.family = family;
        this.tel = tel;
        this.sum = sum;
        this.auth_code = "";
        this.cancel_code = "";
        this.payment_code = payment_code;
        this.memo=memo;
    }
    */
   
   constructor(donation:Donation){
     this.name=donation.name;
     this.family=donation.family;
     this.tel=donation.tel;
     this.sum=donation.sum;
     this.auth_code=donation.auth_code;
     this.cancel_code=donation.cancel_code;
     this.payment_code=donation.payment_code;
     this.memo=donation.memo;
   }
}

export default Donation;