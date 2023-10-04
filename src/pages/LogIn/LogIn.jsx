import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const LogIn = () => {

    const {LogIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    console.log( 'location in the dsfs',location)
    const handleSubmit = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);


        LogIn(email,password)
        .then(res=>{
            console.log(res)
            e.target.reset()
            navigate(location?.state ? location?.state : "/")
        })
        .catch(error=>{
            console.error(error)
        })
    }

    const handleGoogle = () =>{

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
                    <a
                      href="#"
                      className="label-text-alt link link-hover underline"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                {/* {error && <p className="text-red-800">{error}</p>}
                {success && <p className="text-green-700">{success}</p>} */}
              </form>
              <div className="w-full">
                <p>
                  New to This site ?{" "}
                  <Link className="text-blue-800 underline" to="/register">
                    Please register
                  </Link>
                </p>
                <p>
                  LogIn with
                  <button onClick={handleGoogle}>
                    <span className="text-blue-800 mr-4 underline">Google</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
