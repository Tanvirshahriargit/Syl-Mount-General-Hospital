import React, { useEffect, useState } from 'react';
import SpecialistDoctor from '../Banner/SpecialistDoctor/SpecialistDoctor';

const Specialist = () => {
    const [specialists, setSpecialists] = useState([]);
    useEffect(() => {
        fetch("/SpecialistData.json")
            .then(res => res.json())
        .then(data => setSpecialists(data))
    },[])
    return (
        <div>
            <h1 className="text-center text-info">All Specalist Doctors </h1>
            <hr className="mx-auto w-50 border border-1 border-info" />
            <div className="row">
                {
                    specialists.map(specialist => <SpecialistDoctor
                        key={specialist.id}
                        specialist= {specialist}
                    >
                       
                   </SpecialistDoctor>) 
            }    
            </div>
            
        </div>
    );
};

export default Specialist;