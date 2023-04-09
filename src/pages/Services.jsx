import React from "react";
import Button from "../components/Button";
import Description from "../components/Description";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import Subheading from "../components/Subheading";
import PriceCard from "../components/PriceCard";
import TestemonialCard from "../components/TestemonialCard";
import { Link } from "react-router-dom";

const Services = () => {
  const data = {
    description:
      "Fedezze fel a LuxCode kreatív és hatékony webfejlesztési szolgáltatásait, amelyek segítenek vállalkozásának növekedésében és sikerességében az online világban.",
    moreInfo:
      "Amennyiben a fentiekben felsorolt szolgáltatásoktól eltérő igényük merülne fel, kérjük, ne habozzanak jelezni felénk. Kattintsanak az alábbi gombra, és használják a webes kalkulátorunkat az igényeik pontosabb meghatározásához. ",
    priceCardData: {
      cardOne: {
        title: "Esküvői",
        price: "139 990",
        description:
          "Az Esküvői csomagot házasságra készülő pároknak ajánljuk, hogy egyszerűbben szervezhessék a nagy napjukat.",
        services: [
          "Egyedi és stílusos weboldaldesign (1-6 oldal)",
          "Reszponzív és mobilbarát weboldal",
          "Domain regisztráció és webtárhely-szolgáltatások",
          "Ajándéklisták",
          "Online RSVP (Répondez s'il vous plaît)",
          "Szállásfoglalási lehetőségek",
          "Esküvői program, idővonal és a helyszín bemutatása",
          "Fotó- és videógalériák",
          "Vendégkönyv és kapcsolattartási lehetőség",
          "A weboldal karbantartása és támogatása az esküvő előtt és után",
          "SSL tanúsítványok és weboldal-biztonság",
        ],
      },
      cardTwo: {
        title: "Gasztro",
        price: "119 990",
        description:
          "Éttermeknek, kávézóknak és egyéb vendéglátóipari vállalkozásoknak ",
        services: [
          "Egyedi és stílusos weboldaldesign (1-6 oldal)",
          "Reszponzív és mobilbarát weboldal",
          "Domain regisztráció és webtárhely-szolgáltatások",
          "Menük megjelenítése",
          "Galéria",
          "Vásárlói visszajelzések kezelése",
          "Keresőoptimalizálás (SEO)",
          "SSL tanúsítványok és weboldal-biztonság",
        ],
      },
      cardThree: {
        title: "Üzleti",
        price: "369 990",
        description:
          "Az Üzleti csomagot vállalkozásoknak  kínáljuk a digitális jelenlétük  fejlesztése céljából.",
        services: [
          "Egyedi és stílusos weboldaldesign (1-6 oldal)",
          "Felhasználói élmény (UX) és felhasználói felület (UI) tervezés",
          "Domain regisztráció és webtárhely-szolgáltatások",
          "Reszponzív és mobilbarát weboldal",
          "Webes analitika",
          "Keresőoptimalizálás (SEO)",
          "kapcsolatfelvételi űrlapok",
          "A weboldal karbantartása és támogatása ",
          "SSL tanúsítványok és weboldal-biztonság",
        ],
      },
    },
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
      </div>
      <div className="mb-5">
        <Heading content="Szolgáltatásaink" />
      </div>
      <div className="mb-16">
        <Description content={data.description} />
      </div>
      <div className="mt-12">
        <Subheading content="Kiemelt szolgáltatásaink" />
      </div>
      <div className="flex flex-col items-stretch mb-10 md:flex-row">
        <PriceCard data={data.priceCardData.cardOne} />
        <PriceCard data={data.priceCardData.cardTwo} />
        <PriceCard data={data.priceCardData.cardThree} />
      </div>
      <div className="mb-5">
        <Description content={data.moreInfo} />
      </div>
      <div className="mb-28">
        <Link to="/quote">
          <Button content="Kérjen ajánlatot most" />
        </Link>
      </div>
      <div className="mb-3">
        <Subheading content="Elégedett ügyfelek mondták rólunk" />
      </div>
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

export default Services;
