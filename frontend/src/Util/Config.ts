class Config{
    //backend routes
    public baseURL = "http://localhost:3001";
    public newDonation = this.baseURL+"/api/new_donation";
    public paymentList = this.baseURL+"/api/payments";
    public donationList = this.baseURL+"/api/donations";
    public cancelDonation = this.baseURL+"/api/cancel/:cancelCode/";
    public updateDonation = this.baseURL+"/api/update";
    public deleteDonation = this.baseURL+"/api/delete/";
    public singleDonation = this.baseURL+"/api/single/";
}

const appUrl = new Config();
export default appUrl;