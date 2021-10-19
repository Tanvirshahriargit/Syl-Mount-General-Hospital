import React from 'react';
import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const Register = () => {
    const { handleGoogleSignIn } = UseAuth();
    return (
        <div>
            <h2 className="text-center text-primary mt-3">Please Register </h2>
            <hr className="mx-auto w-50 border border-1 border-primary" />
            <br />
            <div className="d-flex mx-auto justify-content-center align-items-center">
                <form>
                    <input type="email" name="" id="" placeholder="Your Email " />
                    <br />
                    <input type="password" name="password" id="" placeholder="Your password" />
                    <br />
                    <input type="password" name="password" id="" placeholder=" ReEnter Your password" />
                    <br />
                    <input className ="btn btn-primary" type="submit" value="Register" />
                </form>
            </div>
            <h1 className="fs-1 rounded-circle d-flex mx-auto justify-content-center align-items-center">or</h1>
            <button onClick={handleGoogleSignIn} className="btn btn-primary d-flex mx-auto justify-content-center align-items-center">Sign In With Google</button>
            <br />
            <p className="d-flex mx-auto justify-content-center align-items-center">Already account? <Link to="login">Log In</Link></p>
        </div>
    );
};

export default Register;