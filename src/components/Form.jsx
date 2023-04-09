import React, { useState } from "react";

const Form = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit happend");

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
          Név
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
          Email
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
          Telefonszám
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
          Cég neve (opcionális)
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
            Egyedi
          </option>
          <option className=" bg-[#141514]/95 " value="wedding">
            Esküvői
          </option>
          <option className=" bg-[#141514]/95 " value="restaurant">
            Gasztro
          </option>
          <option className=" bg-[#141514]/95 " value="business">
            Üzleti
          </option>
        </select>
        <label
          className="block text-[10px] text-transparent thin bg-clip-text bg-gradient-to-br from-[#B8A080] to-[#DEA96B]  mb-2"
          htmlFor="services"
        >
          Válaszzon az ajánlatok közül
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
          Weboldal célja
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
          Elképzelések és igények
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
          Egyedi igények (opcionális)
        </label>
      </div>
      {/* eddig */}
      <div className="w-full flex justify-center">
        <button type="submit">
          <div className="flex justify-center items-center w-full mt-5">
            <div className="fit p-[1px] bg-slate-50 w-fit  rounded-full bg-gradient-to-br from-[#CFBEA4]  to-[#b28647] hover:cursor-pointer transition-all  hover:from-orange-300 hover:shadow-xl">
              <div className="px-3 py-1 rounded-full bg-[#151414] w-fit ">
                <div className="text-[10px] font-medium text-transparent bg-clip-text bg-gradient-to-b from-[#DBCFB8] to-[#837C67]">
                  Ajánlat kérése
                </div>
              </div>
            </div>
          </div>
          {messageSent && (
            <div className=" mt-4 text-xs text-lime-300">Üzenet elküldve </div>
          )}
        </button>
      </div>
    </form>
  );
};

export default Form;
