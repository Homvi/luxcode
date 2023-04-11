import React, { useState } from "react";

const Form = ({ data, language }) => {
  const [messageSent, setMessageSent] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

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

    console.log(formData);

    try {
      const response = await fetch(
        "https://email-app-adakin.herokuapp.com/submit-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);

      setMessageSent(true);

      // Redirect to your custom success page
      // window.location.replace('/success');
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
      // Display an error message or handle the error as appropriate
    }
  };

  return (
    <form className="w-full" name="quote" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="quote" />
      {/* név */}
      <div className="mb-4">
        <input
          className="w-full text-[13px] text-white px-0 py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
          type="text"
          id="name"
          name="name"
          placeholder="John Doe"
        />
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="name"
        >
          {data[language].requestQuote.formLabels.name}
        </label>
      </div>
      {/* email */}
      <div className="mb-4">
        <input
          className="w-full text-[13px] text-white px-0 py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
          type="email"
          id="email"
          name="email"
          placeholder="john@example.com"
        />
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="email"
        >
          {data[language].requestQuote.formLabels.email}
        </label>
      </div>
      {/* eddig */}

      {/* Telefonszám */}
      <div className="mb-4">
        <input
          className="w-full text-[13px] text-white px-0 py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
          type="tel"
          id="tel"
          name="tel"
          placeholder="+36 12 3456789"
        />
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="tel"
        >
          {data[language].requestQuote.formLabels.phone}
        </label>
      </div>
      {/* eddig */}
      {/* Cég neve */}
      <div className="mb-4">
        <input
          className="w-full text-[13px] text-white px-0 py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
          type="text"
          id="company"
          name="company"
          placeholder="LuxCode"
        />
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
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
          className="w-full  px-0 text-[13px] bold text-[#B8A080]  py-0 border-b border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
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
        </select>
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
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
          className="w-full text-[13px] px-1 py-1 text-white text-sm border rounded-md border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
        ></textarea>
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
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
          className="w-full text-[13px] px-1 py-1 text-white text-sm border rounded-md border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
        ></textarea>
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
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
          className="w-full text-[13px] px-1 py-1 text-white text-sm border rounded-md border-gray-200/40 bg-transparent thin focus:outline-none focus:border-[#DEA96B]"
        ></textarea>
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="custom"
        >
          {data[language].requestQuote.formLabels.specificNeeds}
        </label>
      </div>
      {/* eddig */}
      <div className="w-full flex justify-center">
        <button type="submit">
          <div className="flex justify-center items-center w-full mt-5">
            <div className="fit p-[1px] bg-slate-50 w-fit  rounded-full bg-gradient-to-br from-[#CFBEA4]  to-[#b28647] hover:cursor-pointer transition-all  hover:from-orange-300 hover:shadow-xl">
              <div className="px-3 py-1 rounded-full bg-[#151414] w-fit ">
                <div className="text-[10px] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#DBCFB8] to-[#837C67]">
                  {data[language].requestQuote.submitFormBtnContent}
                </div>
              </div>
            </div>
          </div>
          {messageSent && (
            <div className=" mt-4 text-xs text-lime-300">
              {" "}
              {data[language].requestQuote.successMessage}
            </div>
          )}
          {isError && (
            <div className=" mt-4 text-xs text-red-300">
              {data[language].requestQuote.errorMessage}
            </div>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
