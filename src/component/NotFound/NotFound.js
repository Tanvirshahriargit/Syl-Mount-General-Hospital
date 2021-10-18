import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Notfound from "../../not-found.png"

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid d-flex mx-auto justify-content-center align-items-center mt-3" src={Notfound} alt="" />
            <Link to="/home"><div className="d-grid gap-2">
                <Button variant="btn btn-primary d-flex mx-auto justify-content-center align-items-center m-3 ">
                    Go Back Home
                </Button>
            </div></Link>

        </div>
    );
};

export default NotFound;