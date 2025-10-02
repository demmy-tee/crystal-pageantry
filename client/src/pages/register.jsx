import React from "react";
import api from "../api/axios";
import { useState } from 'react';
const  Register = () => {
  const [formData, setFormData] = useState({});
  const [photoFile, setPhotoFile] = useState(null);
  const [idFile, setIdFile] = useState(null);
  const [otherDocs, setOtherDocs] = useState(null);
  const [loading, setLoading] = useState(false);
  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" }
  ];
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData();
    // Append all text data, mapping fullName to name
    Object.entries(formData).forEach(([key, value]) => {
       data.append(key === 'fullName' ? 'name' : key, value);
    });
 // Append files if they 
     if (photoFile) data.append("photo", photoFile);
    if (idFile) data.append("id", idFile);
    if (otherDocs) data.append("otherDocuments", otherDocs);
    try {
      const response = await api.post("/register", data);
      console.log("Registration successful:", response.data);
      alert("Registration successful! you will receive a confirmation email shortly.");
      setLoading(false);
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed: " + (error.response?.data?.message || error.message));
      setLoading(false);
    }

  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log(formData);
  };
     const handleFileChange = (e, setFile) => {
    setFile(e.target.files[0]);
   };
  return (
    <div className="relative 
    flex
    size-full
    min-h-screen
    flex-col
    justify-between bg-black text-white">
      {/* Header */}
      <header className="flex items-center  p-4">
        <h1 className="text-xl font-bold text-center flex-1 text-gray-300 pr-12">
          Register
        </h1>
      </header>

      {/* Page Title */}
      <div className="px-4 pb-8 pt-4 text-center">
        <h2 className="text-4xl font-bold text-[var(--c-gold)]">
          Mr &amp; Mrs Fresher
        </h2>
        <p className="text-lg text-zinc-300 mt-2">Beauty Pageant</p>
        <p className="text-zinc-400 text-sm mt-6 max-w-md mx-auto">
          Join the prestigious Mr &amp; Mrs Fresher Beauty Pageant. Showcase your
          talent, grace, and charisma. Register now to embark on this
          unforgettable journey.
        </p>
      </div>

      {/* Registration Form */}
      <form className="px-4 space-y-6" onSubmit={handleSubmit}>
        <input
          className="form-input flex w-full resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border-none h-14 p-4 text-base font-normal"
          placeholder="Full Name"
          type="text"
          name="fullName"
          onChange={handleChange}
        />
        <input
          className="form-input flex w-full resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border-none h-14 p-4 text-base font-normal"
          placeholder="age (at least 18 years)"
          type="text"
          name="age"
          onChange={handleChange}
        />
        <input
          className="form-input flex w-full resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border-none h-14 p-4 text-base font-normal"
          placeholder="State of Origin"
          type="text"
          name="state"
          onChange={handleChange}
        />
        <input
          className="form-input flex w-full resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border-none h-14 p-4 text-base font-normal"
          placeholder="Email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <div >
          <select
            className="form-input flex w-full resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border-none h-14 p-4 text-base font-normal text-gray-400"
            name="gender"
            onChange={handleChange}
          >
            <option value="" defaultValue="gender" className="text-gray-400">
              Gender
            </option>
          {genderOptions.map((option) => (
            <option key={option.value} value={option.value} className="text-gray-400">
              {option.label}
            </option>
          ))}
          </select>
        </div>
        <input
          className="form-input flex w-full resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border-none h-14 p-4 text-base font-normal"
          placeholder="Phone Number"
          type="tel"
          name="phone"
          onChange={handleChange}
        />
        <textarea
          className="form-input flex w-full resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-0 border-none min-h-36 p-4 text-base font-normal"
          placeholder="Bio (Tell us about yourself)"
          name="bio"
          onChange={handleChange}
        ></textarea>

        {/* Uploads */}
        <div className="space-y-4">
          {/* Photo Upload */}
          <label
            className="file-upload-label flex flex-col items-center justify-center w-full h-24 rounded-lg cursor-pointer"
            htmlFor="photo-upload"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mb-2 text-gray-500"
                fill="none"
                viewBox="0 0 20 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 
                  5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 
                  5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 
                  8m2-2 2 2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
               <p className="text-sm">{photoFile ? photoFile.name : "Upload a professionally taken Photo"}</p>
            </div>
            <input className="hidden" id="photo-upload" type="file" onChange={(e) => handleFileChange(e, setPhotoFile)} />
          </label>

          {/* ID Upload */}
          <label
            className="file-upload-label flex flex-col items-center justify-center w-full h-24 rounded-lg cursor-pointer"
            htmlFor="id-upload"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mb-2 text-gray-500"
                fill="none"
                viewBox="0 0 20 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 
                  0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 
                  5.021C5.137 5.017 5.071 5 5 
                  5a4 4 0 0 0 0 8h2.167M10 
                  15V6m0 0L8 8m2-2 2 2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <p className="text-sm">{idFile ? idFile.name : "Upload any School ID"}
                {idFile && <span className="text-xs text-gray-400"> (Max. 2MB)</span>}
              </p>
            </div>
            <input className="hidden" id="id-upload" type="file" onChange={(e) => handleFileChange(e, setIdFile)} />
          </label>

          {/* Other Documents */}
          <label
            className="file-upload-label flex flex-col items-center justify-center w-full h-24 rounded-lg cursor-pointer"
            htmlFor="docs-upload"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mb-2 text-gray-500"
                fill="none"
                viewBox="0 0 20 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 
                  5.56 0 0 0 16 6.5 5.5 5.5 0 0 
                  0 5.207 5.021C5.137 5.017 5.071 
                  5 5 5a4 4 0 0 0 0 8h2.167M10 
                  15V6m0 0L8 8m2-2 2 2"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <p className="text-sm">{otherDocs ? otherDocs.name : "Upload Other Documents (Optional)"}</p>
              {otherDocs && <span className="text-xs text-gray-400"> (Max. 2MB)</span>}
            </div>

            <input className="hidden" id="docs-upload" type="file" onChange={(e) => handleFileChange(e, setOtherDocs)} />
          </label>
        </div>

        {/* Eligibility */}
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333]">
          <h3 className="text-lg font-bold text-white mb-2">
            Eligibility Criteria
          </h3>
          <ul className="text-zinc-400 text-sm list-disc list-inside space-y-1">
            <li>Must be a registered student of KWASU.</li>
            <li>Must meet the height and age requirements.</li>
            <li>Must not have any prior criminal record.</li>
            <li>Must be available for all pageant activities.</li>
          </ul>
        </div>

        {/* Registration Fee */}
        <div className="bg-[#1a1a1a] p-4 rounded-lg border border-[#333]">
          <h3 className="text-lg font-bold text-white mb-2">Registration Fee</h3>
          <p className="text-zinc-400 text-sm">
            A non-refundable registration fee of{" "}
            <span className="font-bold text-[var(--c-gold)]">NGN 5,000</span>{" "}
            applies. Payment details will be provided upon submission of this
            form.
          </p>
        </div>

        <div className="flex justify-center items-center p-4">
             {/* Submit Button */}
       <button  className='bg-primary text-background rounded-lg p-2 text-center hover:bg-background hover:text-gray-300 transition-colors hover:border-2 hover:border-primary'>
              {loading ? <span>Loading...</span> : <span>Register</span>}
            </button>
     </div>
      </form>

      <div className="h-24"></div>
    </div>
  );
};

export default Register
