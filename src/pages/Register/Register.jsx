import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleSubmit = e =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(res => {
            console.log(res)
        })
        .catch(error=>{
            console.error(error)
        })
    }

  return (
    <div>
        <Navbar></Navbar>
      <div className="hero min-h-[80vh] ">
        <div className="hero-content flex-col">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>

                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
             
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                  
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                {/* {error && <p className="text-red-800">{error}</p>}
                {success && <p className="text-green-700">{success}</p>} */}
              </form>
              <div className="w-full">
                <p>
                  Already have an account
                  <Link className="text-blue-800 underline" to="/login">
                    Please LogIn
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
