import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ModeInformation = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(
        () => {
            fetch('/servicesdata.json')
                .then(res => res.json())
                .then(data => setServices(data));
        }, [])
    
   //filter single data 
    const singleInformation = services.filter(information => information.id == serviceId);

    return (
        <div>
            {/* <h1>More Information{serviceId}</h1> */}
            <h2 className="text-center text-primary mt-3">{singleInformation[0]?.name}</h2>
            <hr className="mx-auto w-50 border border-1 border-primary" />
            <div className="col-lg-4 col-md-4 col-12 text-center mb-5 mx-auto">
                <div className="p-4 m-2 h-100 ">
                    <img className="mb-2" src={singleInformation[0]?.img} alt="" />
                    <h3 className="mb-3">{singleInformation[0]?.name}</h3>
                    <p className="text-strat" >{singleInformation[0]?.des}</p>
                </div>
            </div>

        </div>
    );
};

export default ModeInformation;