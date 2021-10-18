import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';

const LogIn = () => {
    const {handleGoogleSignIn } = UseAuth();
    return (
        <div>
            <h2 className="text-center text-primary mt-3">Please Log In Here</h2>
            <hr className="mx-auto w-50 border border-1 border-primary" />
            <br />
            <button onClick={handleGoogleSignIn} className="btn btn-primary d-flex mx-auto justify-content-center align-items-center">Sign In With Google</button>
        </div>
    );
};

export default LogIn;