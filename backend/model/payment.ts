class Payment{
    id:number=0;
    payment:string="";
    auth_code:string="";

    constructor(id:number, payment:string, auth_code:string) {
        this.id = id;
        this.payment = payment;
        this.auth_code = auth_code;
    }
}

export default Payment;