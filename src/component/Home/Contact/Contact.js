import React from 'react';
import "./Contact.css"
const Contact = () => {
    return (
        <div>
            <h2 className="text-center text-primary mt-3">About Us</h2>
            <hr className="mx-auto w-25 border border-1 border-primary" />
            <br />
            <div className="row container">
                <div className="col-12 col-md-6">
                    {/* left section */}
                    <div className="m-2">
                        <h5 className="text-primary text-start">Contact Us</h5>
                        <h1>Stay with us</h1>
                        <div className="d-flex mt-4">
                            <div><p><i className="fa fa-location-arrow"></i></p></div>
                            <div className="ms-3">
                                <h6>
                                    House 224, Nayasorok
                                    <br />
                                    syl 3100,Bangladesh </h6>
                            </div>
                        </div>
                        <div className="d-flex mt-4">
                            <div><p><i className="fas fa-phone-alt"></i></p></div>
                            <div className="ms-3">
                                <h6> +1245789134 </h6>
                            </div>
                        </div>
                        <div className="d-flex mt-4">
                            <div><p><i className="fa fa-envelope" aria-hidden="true"></i></p></div>
                            <div className="ms-3">
                                <h6> contact@sylmountgeneral.com </h6>
                            </div>
                        </div>

                    </div>
                </div>
                {/* right section */}
                <div className="col-12 col-md-6">
                    <div className="fluid container"> <iframe width="500" height="400" src={"https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href={"https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"}> </a></div>
                </div>
            </div>
            <div className="row container">
                <div className="col-md-6 mb-3 mx-auto">
                    <div>
                        <form>
                            <div>
                                <input type="text" id="input-name" placeholder="Name" />
                                <input type="email" id="input-email" placeholder="Email address" />
                                <input type="text" id="input-subject" placeholder="Subject" />
                            </div>
                            <div className="half right cf">
                                <textarea name="message" type="text" id="input-message" placeholder="Message"></textarea>
                            </div>
                            <input className="bg-primary" type="submit" value="Submit" id="input-submit" />
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;