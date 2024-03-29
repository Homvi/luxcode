import React, { useState } from "react";
import check from "../assets/check-no-circle.svg";
import { Link } from "react-router-dom";

const Form = ({ data, language }) => {
  const [messageSent, setMessageSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState("");
  const [sending, setSending] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [termsAndConditionsError, setTermsAndConditionsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isCheckboxChecked) {
      setTermsAndConditionsError(true);
      return;
    }
    if (isCheckboxChecked) {
      setTermsAndConditionsError(false);
    }
    setSending(true);
    // Get form data
    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      tel: event.target.tel.value,
      company: event.target.company.value,
      services: event.target.services.value,
      purpose: event.target.purpose.value,
      ideas: event.target.ideas.value,
      custom: event.target.custom.value,
    };

    try {
      const response = await fetch(
        "https://portfolio-2-0-backend-email.onrender.com/luxcode-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setMessageSent(true);
      setName("");
      setSending(false);

      // Redirect to your custom success page
      // window.location.replace('/success');
    } catch (error) {
      console.error("Error submitting form:", error);
      // Display an error message or handle the error as appropriate
      setSending(false);
      setIsError(true);
    }
  };

  return (
    <form className="w-full" name="quote" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="quote" />
      {/* név */}
      <div className="mb-4">
        <input
          className="w-full text-[14px] text-white px-0 py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
          type="text"
          id="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
          name="name"
          placeholder="John Doe"
        />
        <label
          className="block text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="name"
        >
          {data[language].requestQuote.formLabels.name}
        </label>
      </div>
      {/* email */}
      <div className="mb-4">
        <input
          className="w-full text-[14px] text-white px-0 py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
        />
        <label
          className="block text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="email"
        >
          {data[language].requestQuote.formLabels.email}
        </label>
      </div>
      {/* eddig */}

      {/* Telefonszám */}
      <div className="mb-4">
        <input
          className="w-full text-[14px] text-white px-0 py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
          type="tel"
          id="tel"
          name="tel"
          placeholder="+36 12 3456789"
        />
        <label
          className="block text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="tel"
        >
          {data[language].requestQuote.formLabels.phone}
        </label>
      </div>
      {/* eddig */}
      {/* Cég neve */}
      <div className="mb-4">
        <input
          className="w-full text-[14px] text-white px-0 py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
          type="text"
          id="company"
          name="company"
          placeholder="LuxCode"
        />
        <label
          className="block text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="company"
        >
          {data[language].requestQuote.formLabels.companyName}
        </label>
      </div>
      {/* eddig */}
      {/* Ajánlatok közül select */}
      <div className="mb-4">
        <select
          name="services"
          id="services"
          className="w-full  px-0 text-[14px] bold text-[#B8A080]  py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
        >
          <option className=" bg-[#141514]/95 " value="custom">
            {data[language].requestQuote.formLabels.options.custom}
          </option>
          <option className=" bg-[#141514]/95 " value="wedding">
            {data[language].requestQuote.formLabels.options.wedding}
          </option>
          <option className=" bg-[#141514]/95 " value="restaurant">
            {data[language].requestQuote.formLabels.options.gastro}
          </option>
          <option className=" bg-[#141514]/95 " value="business">
            {data[language].requestQuote.formLabels.options.business}
          </option>
          <option className=" bg-[#141514]/95 " value="mandatory">
            {data[language].requestQuote.formLabels.options.mandatory}
          </option>
        </select>
        <label
          className="block text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="services"
        >
          {data[language].requestQuote.formLabels.selectFromTheOptions}
        </label>
      </div>
      {/* eddig */}
      {/* Cél area */}
      <div className="mb-4">
        <textarea
          id="purpose"
          name="purpose"
          rows="4"
          className="w-full text-[14px] px-1 py-1 text-white text-sm border rounded-md border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
        ></textarea>
        <label
          className="block text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="purpose"
        >
          {data[language].requestQuote.formLabels.purpose}
        </label>
      </div>
      {/* eddig */}
      {/* Elképzelések area */}
      <div className="mb-4">
        <textarea
          id="ideas"
          name="ideas"
          rows="4"
          className="w-full text-[14px] px-1 py-1 text-white text-sm border rounded-md border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
        ></textarea>
        <label
          className="block text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="ideas"
        >
          {data[language].requestQuote.formLabels.needs}
        </label>
      </div>
      {/* eddig */}
      {/* Custom ideas area */}
      <div className="mb-4">
        <textarea
          id="custom"
          name="custom"
          rows="4"
          className="w-full text-[14px] px-1 py-1 text-white text-sm border rounded-md border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
        ></textarea>
        <label
          className="block text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="custom"
        >
          {data[language].requestQuote.formLabels.specificNeeds}
        </label>
      </div>
      {/* eddig */}
      {/* Terms and conditions area */}
      <div className="mb-4  flex items-center">
        <label
          className="block  mr-2 text-[12px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  "
          htmlFor="terms"
        >
          {data[language].requestQuote.acceptPrivacyContent.partOne}{" "}
          <span className="font-semibold">
            {" "}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to="/privacy-policy"
            >
              {" "}
              {data[language].requestQuote.acceptPrivacyContent.partTwo}
            </Link>
          </span>{" "}
        </label>

        {/* checkbox */}
        <div
          className="relative flex justify-center items-center"
          onClick={(e) => setIsCheckboxChecked(!isCheckboxChecked)}
        >
          <div className="">
            <div className="h-3 w-3 border-[1px] rounded-sm cursor-pointer border-[#474138]"></div>
          </div>
          <img
            src={check}
            alt="check"
            className={
              isCheckboxChecked
                ? "mr-1 h-[5px] left-[3px] cursor-pointer absolute"
                : "hidden"
            }
          />
        </div>
      </div>

      {/* eddig */}
      <div className="w-full flex justify-center">
        <button type="submit" disabled={sending}>
          <div className="flex justify-center items-center w-full mt-5">
            <div className="fit p-[1px] scale-[1.1] bg-slate-50 w-fit  rounded-full bg-gradient-to-br from-[#CFBEA4]  to-[#b28647] hover:cursor-pointer transition-all  hover:from-orange-300 hover:shadow-xl">
              <div className="px-3 py-1 rounded-full bg-[#151414] w-fit ">
                <div className="text-[10px] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#DBCFB8] to-[#837C67]">
                  {data[language].requestQuote.submitFormBtnContent}
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        {termsAndConditionsError && (
          <div className="text-red-500 thin mt-4 text-xs">
            {data[language].requestQuote.acceptPrivacyAlert}
          </div>
        )}
        {messageSent && (
          <div className=" mt-4 text-xs text-lime-300 thin">
            {" "}
            {data[language].requestQuote.successMessage}
          </div>
        )}
        {isError && (
          <div className=" mt-4 text-xs text-red-500 thin">
            {data[language].requestQuote.errorMessage}
          </div>
        )}
        {sending && (
          <div className=" mt-4 text-xs text-lime-300 thin">
            {data[language].requestQuote.sendingMessage}
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
