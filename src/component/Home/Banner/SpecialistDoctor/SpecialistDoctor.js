import React from 'react';

const SpecialistDoctor = ({ specialist }) => {
    const { name, phone,specalist, design, img } = specialist;
    return (
        <div>
            <div className="col-md-6 card mb-3 mx-auto">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p>{ design}</p>
                            <p className="card-text">
                            <i className="fas fa-hospital-user"></i>  {specalist}</p>
                            <p className="card-text"><small className="text-muted text-center"> <i className="fas fa-phone-square-alt text-dark"></i>  { phone}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialistDoctor;