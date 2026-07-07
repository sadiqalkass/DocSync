import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {

  const {backendUrl, token, setToken} = useContext(AppContext)

  const navigate = useNavigate()
  const [state, setstate] = useState("Sign Up");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const name = formData.name
      const email = formData.email
      const password = formData.password

      if (state === 'Sign Up') {
        const {data} = await axios.post(backendUrl + '/api/user/register', {name, email, password})
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)
        }
      } else{
        const {data} = await axios.post(backendUrl + '/api/user/login', {email, password})
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        }else{
          toast.error(data.message)
        }
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  };

  useEffect(()=>{
    if (token) {
      navigate('/')
    }
  },[token])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-sm ">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "log in"} to book
          appointment
        </p>
        {state === "Sign Up" ? (
          <div className="w-full">
            <p>Full Name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              required
            />
          </div>
        ) : null}

        <div className="w-full">
          <p>Email</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>

        <div className="w-full">
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            required
          />
        </div>
        <button type="submit" className="bg-primary w-full rounded-md text-base text-white py-2 cursor-pointer">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>
        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setstate("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>{" "}
          </p>
        ) : (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => setstate("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
