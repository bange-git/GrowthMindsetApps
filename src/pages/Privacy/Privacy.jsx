import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaAngleRight } from "react-icons/fa"; // Import the info icon

function Privacy() {
  return (
    <>
      <Navbar />
      <div className="container border-t-2">
        <h1 className="text-4xl font-bold text-center pb-2 pt-10">
          Application Privacy Policy
        </h1>
        <h4 className="text-lg font-poppins text-center pb-10">
          Last updated December 29, 2024
        </h4>
        <p className="text-dark2 text-center font-light">
          These Terms and Conditions regulate the download, access, and use of
          the different mobile applications (hereinafter, the "APPS"), which
          Bange Sabastine owns and which are available to users free of charge
          on Google Play (Android) and Apple Store (iOS) and which can be
          accessed through the different links available on the website
          (https://monkeytaps.app/).
        </p>
        <p className="text-dark2 text-center pt-4 font-light pb-10 ">
          The user acquires this condition by downloading and using the
          application of their choice. By accessing the application(s), the user
          acknowledges having accepted and consented unreservedly to these terms
          of use and privacy policy.
        </p>

        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">
            Information Collection and Use
          </h3>
          <p className="font-light ">
            The Application collects information when you download and use it.
            This information may include information such as <br /> <br />
            <ul className="text-sm text-gray-600 ml-10 mb-8">
              <li className="flex items-center mb-2">
                <FaAngleRight className="text-blue-500 mr-2" />
                Your device's Internet Protocol address (e.g., IP address). IP
                address collection is for general usage tracking and not for
                precise location.
              </li>
              <li className="flex items-center mb-2">
                <FaAngleRight className="text-blue-500 mr-2" />
                The pages of the Application that you visit, the time and date
                of your visit, the time spent on those pages.
              </li>
              <li className="flex items-center mb-2 ">
                <FaAngleRight className="text-blue-500 mr-2" />
                The time spent on the Application.
              </li>
              <li className="flex items-center mb-2">
                <FaAngleRight className="text-blue-500 mr-2" />
                The operating system you use on your mobile device.
              </li>
            </ul>
            The Application does not gather precise information about the
            location of your mobile device.
            <br />
            The Service Provider may use the information you provided to contact
            you from time to time to provide you with important information,
            required notices and marketing promotions.
            <br />
            For a better experience, while using the Application, the Service
            Provider may require you to provide us with certain personally
            identifiable information. The information that the Service Provider
            request will be retained by them and used as described in this
            privacy policy.
          </p>
        </section>

        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">Third Party Access</h3>
          <p className="font-light ">
            Only aggregated, anonymized data is periodically transmitted to
            external services to aid the Service Provider in improving the
            Application and their service. The Service Provider may share your
            information with third parties in the ways that are described in
            this privacy statement. Please note that the Application utilizes
            third-party services that have their own Privacy Policy about
            handling data. Below are the links to the Privacy Policy of the
            third-party service providers used by the Application: <br /> <br />
            <ul className="text-sm text-gray-600 ml-10 mb-8">
              <li className="flex items-center mb-2">
                <FaAngleRight className="text-blue-500 mr-2" />
                <a
                  href="https://www.google.com/policies/privacy/"
                  className="text-blue-600"
                >
                  Google Play Services
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaAngleRight className="text-blue-500 mr-2" />
                <a
                  href="https://support.google.com/admob/answer/6128543?hl=en"
                  className="text-blue-600"
                >
                  AdMob
                </a>
              </li>
              <li className="flex items-center mb-2">
                <FaAngleRight className="text-blue-500 mr-2" />
                <a
                  href="https://www.revenuecat.com/privacy"
                  className="text-blue-600"
                >
                  RevenueCat
                </a>
              </li>
            </ul>
            The Service Provider may disclose User Provided and Automatically
            Collected Information:
            <ul className="text-sm text-gray-600 ml-10 mb-8 mt-4">
              <li className="flex items-center mb-2">
                <FaAngleRight className="text-blue-500 mr-2" />
                as required by law, such as to comply with a subpoena, or
                similar legal process;
              </li>
              <li className="flex items-center mb-2">
                <FaAngleRight className="text-blue-500 mr-2" />
                when they believe in good faith that disclosure is necessary to
                protect their rights, protect your safety or the safety of
                others, investigate fraud, or respond to a government request;{" "}
              </li>
              <li className="flex items-center mb-2 ">
                <FaAngleRight className="text-blue-500 mr-2" />
                with their trusted services providers who work on their behalf,
                do not have an independent use of the information we disclose to
                them, and have agreed to adhere to the rules set forth in this
                privacy statement.
              </li>
            </ul>
          </p>
        </section>

        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">Opt-Out Rights</h3>
          <p className="font-light ">
            You can stop all collection of information by the Application easily
            by uninstalling it. You may use the standard uninstall processes as
            may be available as part of your mobile device or via the mobile
            application marketplace or network.
          </p>
        </section>
        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">Data Retention Policy</h3>
          <p className="font-light ">
            The Service Provider will retain User Provided data for as long as
            you use the Application and for a reasonable time thereafter. If
            you'd like them to delete User Provided Data that you have provided
            via the Application, please contact them at sebastienbange@gmail.com
            and they will respond in a reasonable time.
          </p>
        </section>
        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">Children</h3>
          <p className="font-light ">
            The Service Provider does not use the Application to knowingly
            solicit data from or market to children under the age of 13.
            <br /> <br /> The Application does not address anyone under the age
            of 13. The Service Provider does not knowingly collect personally
            identifiable information from children under 13 years of age. In the
            case the Service Provider discover that a child under 13 has
            provided personal information, the Service Provider will immediately
            delete this from their servers. If you are a parent or guardian and
            you are aware that your child has provided us with personal
            information, please contact the Service Provider
            (sebastienbange@gmail.com) so that they will be able to take the
            necessary actions.
          </p>
        </section>
        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">Security</h3>
          <p className="font-light ">
            The Service Provider is concerned about safeguarding the
            confidentiality of your information. The Service Provider provides
            physical, electronic, and procedural safeguards to protect
            information the Service Provider processes and maintains.
          </p>
        </section>
        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">Changes</h3>
          <p className="font-light ">
            This Privacy Policy may be updated from time to time for any reason.
            The Service Provider will notify you of any changes to the Privacy
            Policy by updating this page with the new Privacy Policy. You are
            advised to consult this Privacy Policy regularly for any changes, as
            continued use is deemed approval of all changes. This privacy policy
            is effective as of 2024-05-20
          </p>
        </section>
        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">Your Consent</h3>
          <p className="font-light ">
            By using the Application, you are consenting to the processing of
            your information as set forth in this Privacy Policy now and as
            amended by us.
          </p>
        </section>
        <section className="pb-12">
          <h3 className="text-xl font-bold pb-2">Contact Us</h3>
          <p className="font-light ">
            If you have any questions regarding privacy while using the
            Application, or have questions about the practices, please contact
            the Service Provider via email at sebastienbange@gmail.com.
          </p>
        </section>
      </div>
    </>
  );
}

export default Privacy;
