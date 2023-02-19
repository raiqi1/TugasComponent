import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

function Contact() {
  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [formerror, setFormerror] = useState({});
  const [issubmit, setSubmit] = useState(false);

  const handlevalidation = (e) => {
    const { name, value } = e.target;
    setFormvalue({ ...formvalue, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    setFormerror(validationform(formvalue));
    setSubmit(true);
  };

  const validationform = (value) => {
    const errors = {};
    const emailPattern =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!value.name) {
      errors.name = "Please Enter Name";
    }

    if (!value.email) {
      errors.email = "Please Enter Email";
    } else if (!emailPattern.test(value.email)) {
      errors.email = "Enter Valid Email";
    }
    if (!value.address) {
      errors.address = "Please Enter Address";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formerror).length === 0 && issubmit) {
      console.log(formvalue);
    }
  }, [formerror, formvalue, issubmit]);

  return (
    <React.Fragment>
      <Container>
        <div className="row mb-5">
          <div className="col-sm-6 text-success">
            <h3 className="p-3 fw-bold text-white">
              {" "}
              Contact form validation using React js
            </h3>
          </div>

          <form onSubmit={handlesubmit}>
            <div className="row mb-4">
              <label className="col-sm-2 col-form-label">
                Name<span className="astriccolor">*</span>
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formvalue.name}
                  onChange={handlevalidation}
                />
                <span className="text-danger">{formerror.name} </span>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-2 col-form-label">
                Email<span className="astriccolor">*</span>
              </label>
              <div className="col-sm-5">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={formvalue.email}
                  onChange={handlevalidation}
                />
                <span className="text-danger">{formerror.email} </span>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-2 col-form-label">
                Address<span className="astriccolor">*</span>
              </label>
              <div className="col-sm-5">
                <textarea
                  className="form-control"
                  name="address"
                  value={formvalue.address}
                  onChange={handlevalidation}
                />
                <span className="text-danger">{formerror.address} </span>
              </div>
            </div>

            <div className="row mb-4">
              <label className="col-sm-2 col-form-label"></label>
              <div className="col-sm-10">
                <button className="btn btn-success" name="button">
                  Submit
                </button>
              </div>
            </div>
          </form>

          <div className="mb-5"></div>
          <div className="mb-5"></div>
          <div className="mb-5"></div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Contact;
