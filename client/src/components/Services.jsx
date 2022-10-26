import React from "react";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Services = () => (
  <div className="flex w-full justify-center items-center gradient-bg-services">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">
        <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient ">
          For Divorce
          <br />
          Provided From is included
        </h1>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-base">
          The Best way to Register the Divorce on Blockchain
        </p>
      </div>

      <div className="p-5 ml-20 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <Input placeholder="Marriage Registration Unique ID" name="addressTo" type="text" />
        <Input placeholder="Address To" name="addressTo" type="text" />
        <Input placeholder="Registration Fee" name="registration_fee" type="number" />
        <Input placeholder="Bride name" name="Bride name" type="text" />
        <Input placeholder="Bride NID" name="bride" type="text" />
        <Input placeholder="Bride Father's Name" name="registrationFatherName" type="text" />
        <Input placeholder="Groom Name" name="groomname" type="text" />
        <Input placeholder="Groom NID" name="groomNID" type="text" />
        <Input placeholder="Groom's Father's Name" name="groomFathername" type="text" />
        <div className="h-[1px] w-full bg-gray-400 my-2" />
        <button
          type="button"
          className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
        >
          Confirm Divorce
        </button>

      </div>
    </div>
  </div>
);

export default Services;
