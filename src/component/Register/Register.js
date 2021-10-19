import { Link } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';
import RegisterImg from "../../Banner/register.png"

const Register = () => {
    const { handleRegister, handleEmailChange, handlePasswordChange, handleGoogleSignIn } = UseAuth();
    return (
        <div>
            <h2 className="text-center text-primary mt-3">Please Register </h2>
            <hr className="mx-auto w-50 border border-1 border-primary" />
            <br />
            <div className="row">
                
                {/* left side Form*/}
                <div className="d-flex justify-content-center align-items-center col-md-6 col-12">
                    <form onSubmit={handleRegister}>
                        <h2 className="text-primary mb-3">Registration Your Account</h2>
                        <div className="row mb-3">
                            <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email </label>
                            <div className="col-sm-10">
                                <input placeholder="Your Email" onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="inputPassword3" className="col-sm-2 col-form-label ">Password </label>
                            <div className="col-sm-10">
                                <input onBlur={handlePasswordChange} placeholder="Your Password" type="password" className="form-control" id="inputPassword3" required />
                            </div>
                        </div>
                        <div className="row mb-3">
                        </div>
                        <button type="submit" className="mb-3 btn btn-primary d-flex justify-content-center align-items-center">Register</button>
                        <h1 className="fs-2 rounded-circle d-flex mx-auto justify-content-center align-items-center">--------------or---------------</h1>
                        <button onClick={handleGoogleSignIn} className="btn btn-primary">Register With Google</button>
                        <br />
                        <p className="mt-3">Already account? <Link to="login">Log In</Link></p>
                    </form>
                </div>

                {/* Right Side img*/}
                <div className="col-md-6 col-12">
                    <img className="img-fluid" src={RegisterImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Register;