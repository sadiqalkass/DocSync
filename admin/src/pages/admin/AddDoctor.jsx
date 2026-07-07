import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    experience: "1 Year",
    fees: "",
    about: "",
    speciality: "General physician",
    degree: "",
    line1: "",
    line2: "",
  });
  const [docImg, setDocImg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "fees") {
      setFormData({ ...formData, [name]: Number(value) });
    }
    setFormData({ ...formData, [name]: value });
  };
  const { backendUrl, aToken } = useContext(AdminContext);
  
  const onSubmitHandle = async (e) => {
    e.preventDefault();

    try {
      if (!docImg) {
        return toast.error("Image Not Selected");
      }
      ///Do research....
      const formDt = new FormData()

      formDt.append('image', docImg)
      formDt.append('address', JSON.stringify({line1: formData.line1, line2: formData.line2}))
      formDt.append('name', formData.name)
      formDt.append('email', formData.email)
      formDt.append('password', formData.password)
      formDt.append('degree', formData.degree)
      formDt.append('about', formData.about)
      formDt.append('speciality', formData.speciality)
      formDt.append('experience', formData.experience)
      formDt.append('fees', formData.fees)

      formDt.forEach((value,key) =>{
        return console.log(`${key}: ${value}`)
      })
      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formDt,
        { headers: { aToken } }
      );
      if (data.success) {
        toast.success(data.message)
        setFormData({name: "", email: "", degree: "", fees: "", password: "", line1: "", line2: "", about: ''})
        setDocImg(false)
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
      console.log(error)
    }
  };
  return (
    <form onSubmit={onSubmitHandle} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium">Add Doctor</p>

      <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          {/* this work because of the similer id */}
          <label htmlFor="doc-img">
            <img
              className="w-16 bg-gray-100 rounded-full cursor-pointer"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="upload icon"
            />
          </label>
          <input
            type="file"
            id="doc-img"
            onChange={(e) => setDocImg(e.target.files[0])}
            hidden
          />
          <p>
            Upload doctor <br /> picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          {/* 1st half */}
          <div className="flex w-full lg:flex-1 flex-col gap-4">
            <div className="flex flex-1 gap-1 flex-col">
              <p>Doctor Name</p>
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-1 gap-1 flex-col">
              <p>Doctor Email</p>
              <input
                className="border rounded px-3 py-2"
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-1 gap-1 flex-col">
              <p>Doctor Password</p>
              <input
                className="border rounded px-3 py-2"
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-1 gap-1 flex-col">
              <p>Expireance</p>
              <select
                className="border rounded px-3 py-2"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              >
                <option value="1 Year">1 Year</option>
                <option value="2 Years">2 Years</option>
                <option value="3 Years">3 Years</option>
                <option value="4 Years">4 Years</option>
                <option value="5 Years">5 Years</option>
                <option value="6 Years">6 Years</option>
                <option value="7 Years">7 Years</option>
                <option value="8 Years">8 Years</option>
                <option value="9 Years">9 Years</option>
                <option value="10 Years">10 Years</option>
              </select>
            </div>

            <div className="flex flex-1 gap-1 flex-col">
              <p>Fees</p>
              <input
                className="border rounded px-3 py-2"
                type="number"
                placeholder="Fees"
                name="fees"
                value={formData.fees}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* 2nd half */}
          <div className="flex lg:flex-1 flex-col gap-4 w-full">
            <div className="flex flex-1 gap-1 flex-col">
              <p>Speciality</p>
              <select
                className="border rounded px-3 py-2"
                name="speciality"
                value={formData.speciality}
                onChange={handleChange}
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex flex-1 gap-1 flex-col">
              <p>Education</p>
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="education"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-1 gap-1 flex-col">
              <p>Address</p>
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="address 1"
                name="line1"
                value={formData.line1}
                onChange={handleChange}
                required
              />
              <input
                className="border rounded px-3 py-2"
                type="text"
                placeholder="address 2"
                name="line2"
                value={formData.line2}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* bottom half */}
        <div>
          <div>
            <p className="mt-4 mb-2">About Doctor</p>
            <textarea
              className="w-full border rounded px-4 pt-2"
              placeholder="Write about doctor"
              rows={5}
              name="about"
              value={formData.about}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-primary px-10 py-3 mt-4 text-white rounded-full cursor-pointer"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddDoctor;
