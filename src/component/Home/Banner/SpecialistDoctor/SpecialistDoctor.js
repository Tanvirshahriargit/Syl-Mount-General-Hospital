import React from 'react';

const SpecialistDoctor = ({ specialist }) => {
    const { name, phone,specalist, design, img } = specialist;
    return (
        <div>
            <div class="col-md-6 card mb-3 mx-auto">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{name}</h5>
                            <p>{ design}</p>
                            <p class="card-text">
                                {specalist}</p>
                            <p class="card-text"><small class="text-muted">{ phone}</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialistDoctor;