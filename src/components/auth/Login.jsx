import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import icon from "../../assets/icon.png";


const Login = () => {
    const [data, setData] = useState({ email: "", password: "" });
    const [error, setError] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8080/api/auth";
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            window.location = "/";
        } catch (error) {
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
            }
        }
    };

    return (
        <>
            <style>
                {`
                .login_container {
                    width: 100%;
                    min-height: 100vh;
                    background-color: black;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding-top: 105px;
                }
                .icon_image {
                    position: absolute; 
                    top: 10px; 
                    left: 20px; 
                    width: 150px;
                    height: 115px
                }
                
                .login_form_container {
                    width: 1300px;
                    height: 500px;
                    display: flex;
                    
                    border-radius: 10px;
                    background-color: black;
                    box-shadow: 1px 2px 15px 0.2px rgba(210, 201, 201, 0.525);
                }
                
                .left {
                    flex: 1.4;
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
                    margin-left: -20%;
                }
                
                p {
                    font-size: 18px;
                    color: white; 
                    margin: 0;
                    padding: 0;
                    margin-top: 0;
                    margin-bottom: 0rem;
                    margin-left: -25px;
                 }  
                span {
                    margin-top: 0;
                    display: block; 
                    font-size: 15px;
                    color: white; 
                    margin-left: -25px;
                  }
                  
                
                .form_container {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                
                .form_container h1 {
                    font-size: 40px;
                    margin-top: 0;
                }
                
                
                .input {
                    outline: none;
                    border: none;
                    width: 300px;
                    padding: 6px;
                    border-radius: 9px;
                    background-color: #edf5f3;
                    font-size: 12px;
                    margin-bottom: 10px;
                    margin-top: 15px;
                    border:rounded solid;
                }
                
                .error_msg {
                    width: 370px;
                    padding: 15px;
                    margin: 5px 0;
                    font-size: 14px;
                    background-color: #f34646;
                    color: white;
                    border-radius: 5px;
                    text-align: center;
                }
                
                .right {
                    flex: 0.65; 
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    background-color:#282828;
                     margin: 2rem 6rem 4rem 0; 
                    height: 435px; 
                    border-radius: 10px;
                    margin-right: 100px; 
                
                }
                
                .right h1 {
                    margin-top: 0;
                    color: white;
                    font-size: 40px;
                    align-self: center;
                }
                
                .white_btn,
                .green_btn {
                    border: none;
                    outline: none;
                    padding: 12px 0;
                    background-color: white;
                    border-radius: 20px;
                    width: 180px;
                    font-weight: bold;
                    font-size: 14px;
                    cursor: pointer;
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
                .sign_up_button {
                    margin-top: 5px;
                    cursor: pointer;
                    color:white;
                    
                }
                
                
                .not-have-account {
                    font-size: 15px;
                    margin-top: 7px;
                    margin-left: 5px;
                    margin-right: 2px;
                    text-align: center;
                    color: white;
                
                }
                
                .not-have-account .sign_up_button {
                    color: white; 
                    cursor: pointer;
                    text-decoration: none; 
                }
                
                .not-have-account .sign_up_button:hover {
                    text-decoration: underline; 
                }
				
@media (max-width: 768px) {
    .login_form_container {
        flex-direction: column; 
        height: 630px; 
		margin-top: -103px;
		width:319px;
	
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

    .left h1 {
        margin-left: 0;
        font-size: 2.3rem; 

    }
	.left p,
    .left span {
        display: none;
    }

    .not-have-account {
        margin-left: 0; /* Center text */
    }
	.form_container{
		flex: 1; /* Take full width */
        margin: 20px; /* Add margin for spacing */
        border-radius: 10px; /* Add border-radius */
        padding: 20px; /* Add padding */
        margin-left: 20px; /*
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
            <div className="login_container">
            <img src={icon} alt="icon" className="icon_image" />
                <div className="login_form_container">
                    <div className="left">
                        <h1> 👟Welcome !</h1>
                        <p style={{ marginLeft: "-225px" }}>We missed you a lot ! Step into comfort and style!  </p>
                        <span style={{ marginLeft: "-200px" }}>Discover footwear that fits your active lifestyle perfectly.</span>
                        <span style={{ marginLeft: "-280px" }}>Start your journey with us today.</span>
                    </div>
                    <div className="right">
                        
                        <form  style = {{width: "max-content"}}className="form_container" onSubmit={handleSubmit}>
                            <h1>Sign in</h1>
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
                                Sign In
                            </button>
							<p className="not-have-account">
                                Do not have an account? <Link to="/signup" className="sign_up_button">Sign up.</Link>
                            </p>

                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

