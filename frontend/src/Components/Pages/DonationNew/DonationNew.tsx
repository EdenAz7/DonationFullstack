import { SyntheticEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import DonationModel from "../../../model/DonationModel";
import { DonationTypeModel } from "../../../model/DonationTypeModel";
import donationService from "../../../Util/DonationService";
import "./DonationNew.css";

function DonationNew(): JSX.Element {
    const [payment,setPayment] = useState<DonationTypeModel[]>([]);
    //to use useFrom write this line
    const {register,handleSubmit} = useForm<DonationModel>();
    const [userData, setData] = useState<DonationModel>();

    const navigate = useNavigate();
    const params = useParams();
    const id = +(params.id || '');

    // const [userName,setName] = useState("");

    // const changeName = (args:SyntheticEvent)=>{
    //     const uName = (args.target as HTMLInputElement).value;
    //     setName(uName);
    // };
    //hook form....
    async function send(donation:DonationModel){
        try{
            console.log(donation);
            await donationService.addDonation(donation);
            //manual routing....
            navigate("/donations/list");
        } catch (err:any){
            alert(err.message);
        }
    }
    //navigate .....

    const getSingleData = async (id:number)=>{
        let myData = await donationService.singleDonation(id);
        console.log(myData);
        setData(myData);
    };

    useEffect(()=>{
        console.log(id);
        if (id>0){
            //load data from data base :)
            getSingleData(id);
            
        }
        donationService.getAllPayments()
        .then (payments => setPayment(payments))
        .catch(err=>alert(err.message));
    },[]);
    return (
        <div className="DonationNew">
			<form onSubmit={handleSubmit(send)}>
                <h2>Add Donation</h2>
                <label>Name:</label>
                <input type="text" {...register("name")} value={userData?.name}/>

                <label>Family</label>
                <input type="text" {...register("family")} value={userData?.family}/>

                <label>Tel</label>
                <input type="text" {...register("tel")} value={userData?.tel}/>

                <label>Sum</label>
                <input type="number" {...register("sum")} value={userData?.sum}/>

                <label>Payment</label>
                <select defaultValue="" {...register("payment_code")}>
                    <option disabled value="">Select Payment method</option>
                    {payment.map(item=><option key={item.id} value={item.id}>{item.payment}</option>)}
                </select>

                <label>Memo</label>
                <textarea rows={5} {...register("memo")}/>

                <button style={{backgroundColor:"lightblue",color:"black"}}>Donate</button>
            </form>
        </div>
    );
}

export default DonationNew;
