import './App.css';
import React,{useState} from 'react';

function App() {
  const [amount, setamount] = useState('');

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(amount === ""){
    alert("please enter amount");
    }else{
      var options = {
        key: "rzp_test_WQEoLSkzcsuQwM",
        key_secret:"lSj1RB75sut8dqaKWOOuuAym",
        amount: amount *100,
        currency:"INR",
        name:"STARTUP_PROJECTS",
        description:"for testing purpose",
        handler: function(response){
          alert(response.razorpay_payment_id);
        },
        // prefill: {
        //   name:"Velmurugan",
        //   email:"mvel1620r@gmail.com",
        //   contact:"7904425033"
        // },
        notes:{
          address:"Razorpay Corporate office"
        },
        theme: {
          color:"#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  }
  return (
    <div className="App">
     <h2>Rs. 100/- for 3 months subscription</h2>
     <br/>
     <input type="text"placeholder='100'value={amount}onChange={(e)=>setamount(e.target.value)} />
     <br/><br/>
     <button onClick={handleSubmit}>submit</button>
     <button><a href='http://localhost:5000/login'>Login</a></button>
    </div>
  );
}

export default App;
