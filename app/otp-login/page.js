"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const Page = () => {
  let router = useRouter();
  let otpRef = useRef();

  const Submit = async (e) => {
    e.preventDefault();
    let otp = otpRef.value;
 
    let res = await axios.post("api/otpLogin", { otp });

    if (res.data.status === true) {
      router.replace("/dashboard");
      alert("Login Success from otp Login page");
    } else {
      alert("Login Failed from otp Login page");
    }
  };

  return (
    <div className="container">
      <div className="row d-flex vh-100 align-content-center justify-content-center login-form-margin">
        <div className="col-5 ">
          <form onSubmit={Submit} className="card p-5">
            <label className="form-label">User otp</label>
            <input
              className="form-control"
              ref={(input) => (otpRef = input)}
              type="text"
              placeholder="123456"
            />
            <input
              className="btn btn-primary mt-3"
              type="submit"
              value="Verify"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
