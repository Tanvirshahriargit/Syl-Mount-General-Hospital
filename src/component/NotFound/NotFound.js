import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Notfound from "../../not-found.png"

const NotFound = () => {
    return (
        <div>
            <img className="img-fluid w-100" src={Notfound} alt="" />
            <Link to="/home"><div className="d-grid gap-2">
                <Button variant="primary my-4" size="lg">
                    Go Back Home
                </Button>
            </div></Link>

        </div>
    );
};

export default NotFound;