import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import icon from "../../assets/icon.png";

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://sneaker-hub.vercel.app/signup/api/users";
            const { data: res } = await axios.post(url, data);
            navigate("/login");
            console.log(res); // Log the entire response
        } catch (error) {
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while processing your request.");
            }
        }
    };

    return (
        <>
            <style>
                {`
                .signup_container {
                    width: 100%;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 105px;
                    background-color:black;

                }
                .icon_image {
                    position: absolute; 
                    top: 10px; 
                    left: 20px; 
                    width: 150px;
                    height: 115px
                }
                

                .signup_form_container {
                    box-shadow: 1px 2px 15px 0.2px rgba(210, 201, 201, 0.525);
                    width: 1300px;
                    height: 500px;
                    display: flex;
                    border-radius: 10px;
                    box-shadow: 4px 2px 15px 1px rgba(246, 239, 239, 0.358);
                    background-color:black;
                    margin-right: 35px; 
                    
                   
                }

                .left {
                    flex: 1.3;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-position: center;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                    background-color:black;
                    margin-right: 20px; 
                }

                .left h1 {
                    color: white;
                    font-size: 5rem;
                    font-weight: bold;
                    margin-bottom: 2rem;
                    letter-spacing: 0.2rem;
                    text-align: center;
                    text-transform: uppercase;
                    line-height: 1.2;
                    margin-left: -25%;
                }
                
                .step-into {
                    display: block;
                    font-size: 4.80rem;

                }
                
                .style {
                    font-size: 4.86rem; 
                    text-align: center;
                }
                p {
                    font-size: 1.2rem;
                    
                    color: white; 
                    text-align: center;
                    margin-top: 10px; 
                    margin-left: -25%;
                  }
                  
                  .right {
                    flex: 0.6.5; 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color:#282828;
                     margin: 2rem 6rem 4rem 0; 
                    height: 435px; 
                    border-radius: 10px;
                    margin-right: 125px; 

                }
                
                

                .form_container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 7px;
                   

                }

                .form_container h1 {
                    font-size: 42px;
                    margin-top: 0;
                    color:white;
                }

                .input {
                    outline: none;
                    border: none;
                    width: 300px;
                    padding: 7px;
                    border-radius: 8px;
                    background-color: #edf5f3;
                    font-size: 15px;
                    height: 31px; /* Decrease the height */
                    margin-bottom: 10px;
                    border:rounded solid;
                }

                .error_msg {
                    width: 370px;
                    padding: 15px;
                    font-size: 14px;
                    background-color: #f34646;
                    color: white;
                    border-radius: 5px;
                    text-align: center;
                }

                .black_btn {
                    border: none;
                    outline: none;
                    padding: 12px 0;
                    background-color: black;
                    border-radius: 20px;
                    width: 180px;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
                    color: white;
                    margin: 10px;
                }

                .sign_in_button {
                    margin-top: 5px;
                    color: #3bb19b;
                    cursor: pointer;
                    color:white;
                    
                }
                .already-have-account {
                    font-size: 15px; 
                    margin-top:1px;
                    margin-left:5px;
                    margin-right:2px;
                    
                }
                
                @media (max-width: 768px) {
                    .signup_form_container {
                        flex-direction: column; 
                        height: 630px; 
                        margin-top: -103px;
                        width:329px;
                        margin-left:29px;
                    
                    }
                
                    .left
                    {
                        margin-top: 74px;
                        
                    },
                   
                
                    .right {
                        flex: 1; 
                        margin: 0; 
                        border-radius: 0; 
                        padding: 20px
                    }
                
                    .right {
                        margin-top: 20px; 
                        margin-right: 0; 
                    }
                
                    .left h1 span{
                        margin-left: 85px;
                        font-size: 2.3rem; 
                        color:white;
                        margin-top:-48px;

                    }
                   
                    .left p
                   {
                        display: none;
                        
                    }
                
                    .already-have-account {
                        margin-left: 0; /* Center text */
                    }
                    .form_container{
                        flex: 1; 
                        margin: 1px; 
                        border-radius: 10px; 
                        padding: 16px; 
                        margin-left: 0; 
                        margin-top:-3px;
                    }
                }
                
                /* For screens smaller than 480px (phones) */
                @media (max-width: 480px) {
                    .form_container h1 {
                        font-size: 30px; /* Reduce font size */
                    }
                }
                 
                

                
                
                
                `}
            </style>
            <div className="signup_container" >
            <img src={icon} alt="icon" className="icon_image" />
                
            

                
                <div className="signup_form_container">
               
                    <div className="left">
                          <h1>
                      <span class="step-into">👟STEP INTO</span>
                      <span class="style">Style!</span>
                           </h1>
                     <p>Comfort, Style, Better: Our shoes deliver it all.. </p>
                    </div>
                    <div className="right">
                        <form className="form_container" onSubmit={handleSubmit}>
                            <h1>Create Account</h1>
                            <input
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                onChange={handleChange}
                                value={data.firstName}
                                required
                                className="input"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                onChange={handleChange}
                                value={data.lastName}
                                required
                                className="input"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                onChange={handleChange}
                                value={data.email}
                                required
                                className="input"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                                value={data.password}
                                required
                                className="input"
                            />
                            {error && <div className="error_msg">{error}</div>}
                            <button type="submit" className="black_btn">
                                Sign Up
                            </button>
                            <p className="already-have-account">
    Already have an account? <Link to="/login" className="sign_in_button">Sign in.</Link>
</p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;
