import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
     name: '',
     email: '',
     password:''
   })

   const handleChange = (e)=> {
     setData({
       ...data,
       [e.target.name]: e.target.value
     })
   }

   const handleSubmit=(e)=>{
      e.preventDefault()
      sessionStorage.setItem('user', JSON.stringify(data))
      navigate("/dashboard")
   }

    return (
      <div className="signin">
        <h1> Sign in (Public)</h1>
        <form onSubmit={handleSubmit} >
          <input type="text" name='name' placeholder="Enter name" onChange={handleChange}/>
          <input type="text" name='email' placeholder="Enter email" onChange={handleChange} />
          <input type="text" name='password' placeholder="Enter password" onChange={handleChange} />
          <button >Sign in</button>
        </form>
      </div>
    );
  };

export default SignIn
