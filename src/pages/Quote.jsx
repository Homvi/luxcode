import React from "react";
import Description from "../components/Description";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Subheading from "../components/Subheading";
import TestemonialCard from "../components/TestemonialCard";
import Form from "../components/Form";

const Quote = () => {
  const data = {
    description:
      "Kedves Ügyfelünk! Az ajánlatkéréshez kérjük, töltse ki az alábbi űrlapot. Rövid időn belül elkészítjük személyre szabott ajánlatunkat és kapcsolatba lépünk Önnel a részletek egyeztetése érdekében.",
    testemonials: [
      "A LuxCode által tervezett esküvői weboldalunk gyönyörű és könnyen használható volt.Köszönjük a fantasztikus munkát!",
      "A LuxCode remek munkát végzett az Akman Solutions weboldalán, amely most tökéletesen tükrözi vállalkozásunk szellemiségét és szolgáltatásait.",
    ],
  };

  return (
    <div className="inter p-8">
      <Navbar />

      <div className="mt-12">
        <Subheading content="Minőségi weboldalak, elegáns megjelenés - LuxCode" />
        <div className="mb-5">
          <Heading content="Ajánlatkérés" />
        </div>
      </div>
      <div className="mb-16">
        <Description content={data.description} />
      </div>
      {/* form comes here */}
      <div className="w-ful lg:w-[70%] xl:w-[50%] min-h-[500px] mb-24">
        <Form />
      </div>
      {/* form comes here */}
      <div className="flex flex-col xl:flex-row">
        <div className="flex">
          {data.testemonials.map((content, id) => (
            <TestemonialCard
              content={content}
              key={`testemonial-card-${id}`}
              active={id === 0 ? true : false}
            />
          ))}
        </div>
        <div className="max-w-[190px] font-normal flex text-[8px] my-3  justify-center items-center text-transparent bg-clip-text bg-gradient-to-br from-[#DBCFB8]  to-[#B28647]  xl:p-4">
          A LuxCode büszke arra, hogy a legjobb minőségű szolgáltatásokat
          nyújtja ügyfeleinek. Célunk, hogy segítsünk ügyfeleinknek erős és
          hatékony online jelenlétet kialakítani.
        </div>
      </div>
    </div>
  );
};

export default Quote;