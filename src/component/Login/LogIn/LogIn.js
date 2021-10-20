import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import loginImg from '../../../Banner/login.png';

const LogIn = () => {
    const { checkerror, handleEmailChange, handlePasswordChange, handleSignin, handleGoogleSignIn } = UseAuth();

    // use location path 
    const locaton = useLocation();
    console.log("from ", locaton.state?.from);
    return (
        <div>
            <h2 className="text-center text-primary mt-3">Please Login Here</h2>
            <hr className="mx-auto w-50 border border-1 border-primary" />
            <br />
            <div className="row">
                {/* Left side img */}
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={loginImg} alt="" />
                </div>

                {/* Right Side Form */}
                <div className="d-flex mx-auto justify-content-center align-items-center col-md-6 col-12">
                    <div>
                        <h2 className="text-primary mb-3">Login Your Account </h2>
                        <form onSubmit={handleSignin}>
                            <div className="row mb-3">
                                <label htmlFor="inputEmail3" className="col-sm-2 col-form-label mt-3">Email</label>
                                <div className="col-sm-10">
                                    <input placeholder=" Provide Email" onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label htmlFor="inputPassword3" className="col-sm-2 col-form-label mt-3 ">Password</label>
                                <div className="col-sm-10">
                                    <input placeholder="Provide Password" onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
                                </div>
                            </div>
                            <div className="row mb-3">
                            </div>
                            <p className="text-danger">{checkerror}</p>
                            <button type="submit" className="mb-3 btn btn-primary d-flex justify-content-center align-items-center">Log In</button>
                            <h1 className="fs-2 rounded-circle d-flex mx-auto justify-content-center align-items-center">--------------or---------------</h1>

                            {/* Google Sign In Buttons */}
                            <button onClick={handleGoogleSignIn} className="btn btn-primary"><i className="fab fa-google"></i> Signin With Google</button>
                            <br />
                            {/* Link Register */}
                            <p className="mt-3">Don't have an account? <Link to="register">Register</Link></p>
                        </form>
                    </div></div>
            </div>

        </div>
    );
};

export default LogIn;