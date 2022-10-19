class DonationModel{
    public id:number =0;
    public name:string | undefined;
    public family:string | undefined;
    public tel:string | undefined;
    public sum:number | undefined;
    public auth_code?:string;
    public cancel_code?:string;
    public payment_code:number | undefined;
    public memo?:string;
    public payment:string | undefined;

    //method I - undefined
    //method II - constructor
    //method III - tell the system to ignore strict nulls in tsconfig.json
}

export default DonationModel;