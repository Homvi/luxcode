import React from "react";
import Navbar from "../components/Navbar";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";

const PrivacyPolicy = () => {
  return (
    <div className="inter p-8 text-xs ">
      <Navbar />
      <div className="mb-5">
        <Heading content="Privacy Policy" />
      </div>
      <div className="text-white">
        <div className="mt-12">
          <Subheading content="Last updated: 2023.04.19" />
        </div>
        <div className="my-1 font-thin">
        Honvédő Ádám ('me', 'I', or 'my') operates the LuxCode website (the 'Service'). This page informs you of my policies regarding the collection, use, and disclosure of Personal Information when you use the Service.
        </div>
        <div className="my-1 font-thin">
        By using the Service, you agree to the collection and use of information in accordance with this policy.
        </div>
        <div className="mt-12">
          <Subheading content="Information Collection and Use" />
        </div>
        <div className="my-1 font-thin">
          While using the Service, I may ask you to provide me with certain
          personally identifiable information that can be used to contact or
          identify you. Personally identifiable information ("Personal
          Information") may include, but is not limited to:
          <ul className="pl-2 my-1 font-thin">
            <li> Name</li>
            <li> Email address</li>
            <li> Telephone number</li>
            <li> Company name</li>
            <li> Log Data</li>
          </ul>
          I may also collect information that your browser sends whenever you
          visit the Service ("Log Data"). This Log Data may include information
          such as your computer's Internet Protocol ("IP") address, browser
          type, browser version, the pages of the Service that you visit, the
          time and date of your visit, the time spent on those pages, and other
          statistics.
        </div>

        <div className="mt-12">
          <Subheading content=" Cookies" />
        </div>
        <div className="my-1 font-thin">
          Cookies are files with a small amount of data, which may include an
          anonymous unique identifier. Cookies are sent to your browser from a
          website and stored on your computer's hard drive.
        </div>
        <div className="my-1 font-thin">
          I use "cookies" to collect information. You can instruct your browser
          to refuse all cookies or to indicate when a cookie is being sent.
          However, if you do not accept cookies, you may not be able to use some
          portions of the Service.
        </div>
        <div className="mt-12">
          <Subheading content="Use of Information" />
        </div>

        <div className="my-1 font-thin">
          The information I collect is used for various purposes, including:
        </div>
        <div className="font-thin px-1">

        <p>To provide and maintain the Service</p>
        <p>To notify you about changes to the Service</p>
        <p>
          {" "}
          To allow you to participate in interactive features of the Service
          when you choose to do so
        </p>
        <p> To provide customer support</p>
        <p>
          To gather analysis or valuable information so that I can improve the
          Service
        </p>
        <p>To monitor the usage of the Service</p>
        <p> To detect, prevent, and address technical issues</p>
        </div>

        <div className="mt-12">
          <Subheading content="Security" />
        </div>

        <div className="my-1 font-thin">
          The security of your Personal Information is important to me, but
          remember that no method of transmission over the Internet, or method
          of electronic storage, is 100% secure. While I strive to use
          commercially acceptable means to protect your Personal Information, I
          cannot guarantee its absolute security.
        </div>
        <div className="mt-12">
          <Subheading content="Your Rights" />
        </div>

        <div className="my-1 font-thin">
          Under the EU General Data Protection Regulation (GDPR), you have the
          right to access, rectify, or request the deletion of any personal data
          collected about you through the Service. To exercise these rights,
          please contact me at adam.honvedo@gmail.com. Please note that I may
          ask you to verify your identity before responding to such requests.
        </div>
        <div className="mt-12">
          <Subheading content="Changes to This Privacy Policy" />
        </div>
        <div className="my-1 font-thin">
          I may update this Privacy Policy from time to time. I will notify you
          of any changes by posting the new Privacy Policy on this page.
        </div>
        <div className="my-1 font-thin">
          {" "}
          You are advised to review this Privacy Policy periodically for any
          changes. Changes to this Privacy Policy are effective when they are
          posted on this page.
        </div>

        <div className="mt-12">
          <Subheading content="Contact" />
        </div>
        <div className="my-1 font-thin">
          {" "}
          If you have any questions about this Privacy Policy, please contact me
          at adam.honvedo@gmail.com.
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
