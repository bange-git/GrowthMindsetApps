import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { FaAngleRight } from "react-icons/fa"; // Import the info icon

function Terms() {
  return (
    <>
      <Navbar />
      <div className="container border-t-2">
        <h1 className="text-4xl font-bold text-center pb-2 pt-10">
          Application Terms and Conditions
        </h1>
        <h4 className="text-lg font-poppins text-center pb-10">
          Last updated January 5th, 2025
        </h4>
        <p className="text-dark2 text-center font-light pb-10">
          These terms and conditions applies to the Mobile applications (hereby
          referred to as "APPS") for mobile devices that were created by Bange
          Sabastine Hwonyi (hereby referred to as "Service Provider") as a Free
          service.
        </p>

        <section className="pb-4">
          <p className="font-light mb-6 ">
            Upon downloading or utilizing the Application, you are automatically
            agreeing to the following terms. It is strongly advised that you
            thoroughly read and understand these terms prior to using the
            Application. Unauthorized copying, modification of the Application,
            any part of the Application, or our trademarks is strictly
            prohibited. Any attempts to extract the source code of the
            Application, translate the Application into other languages, or
            create derivative versions are not permitted. All trademarks,
            copyrights, database rights, and other intellectual property rights
            related to the Application remain the property of the Service
            Provider.{" "}
          </p>

          <p className="font-light mb-6 ">
            The Service Provider is dedicated to ensuring that the Application
            is as beneficial and efficient as possible. As such, they reserve
            the right to modify the Application or charge for their services at
            any time and for any reason. The Service Provider assures you that
            any charges for the Application or its services will be clearly
            communicated to you.
          </p>
          <p className="font-light mb-6 ">
            The Application stores and processes personal data that you have
            provided to the Service Provider in order to provide the Service. It
            is your responsibility to maintain the security of your phone and
            access to the Application. The Service Provider strongly advise
            against jailbreaking or rooting your phone, which involves removing
            software restrictions and limitations imposed by the official
            operating system of your device. Such actions could expose your
            phone to malware, viruses, malicious programs, compromise your
            phone's security features, and may result in the Application not
            functioning correctly or at all. Please note that the Application
            utilizes third-party services that have their own Terms and
            Conditions. Below are the links to the Terms and Conditions of the
            third-party service providers used by the Application:
          </p>
        </section>

        <section className="pb-4">
          <p className="font-light ">
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
          </p>
        </section>
        <section>
          <p className="font-light mb-6 ">
            Please be aware that the Service Provider does not assume
            responsibility for certain aspects. Some functions of the
            Application require an active internet connection, which can be
            Wi-Fi or provided by your mobile network provider. The Service
            Provider cannot be held responsible if the Application does not
            function at full capacity due to lack of access to Wi-Fi or if you
            have exhausted your data allowance.
          </p>
          <p className="font-light mb-6 ">
            If you are using the application outside of a Wi-Fi area, please be
            aware that your mobile network provider's agreement terms still
            apply. Consequently, you may incur charges from your mobile provider
            for data usage during the connection to the application, or other
            third-party charges. By using the application, you accept
            responsibility for any such charges, including roaming data charges
            if you use the application outside of your home territory (i.e.,
            region or country) without disabling data roaming. If you are not
            the bill payer for the device on which you are using the
            application, they assume that you have obtained permission from the
            bill payer.
          </p>
          <p className="font-light mb-6 ">
            Similarly, the Service Provider cannot always assume responsibility
            for your usage of the application. For instance, it is your
            responsibility to ensure that your device remains charged. If your
            device runs out of battery and you are unable to access the Service,
            the Service Provider cannot be held responsible.
          </p>
          <p className="font-light mb-6 ">
            In terms of the Service Provider's responsibility for your use of
            the application, it is important to note that while they strive to
            ensure that it is updated and accurate at all times, they do rely on
            third parties to provide information to them so that they can make
            it available to you. The Service Provider accepts no liability for
            any loss, direct or indirect, that you experience as a result of
            relying entirely on this functionality of the application.
          </p>
          <p className="font-light mb-6 ">
            The Service Provider may wish to update the application at some
            point. The application is currently available as per the
            requirements for the operating system (and for any additional
            systems they decide to extend the availability of the application
            to) may change, and you will need to download the updates if you
            want to continue using the application. The Service Provider does
            not guarantee that it will always update the application so that it
            is relevant to you and/or compatible with the particular operating
            system version installed on your device. However, you agree to
            always accept updates to the application when offered to you. The
            Service Provider may also wish to cease providing the application
            and may terminate its use at any time without providing termination
            notice to you. Unless they inform you otherwise, upon any
            termination, (a) the rights and licenses granted to you in these
            terms will end; (b) you must cease using the application, and (if
            necessary) delete it from your device.
          </p>
        </section>
        <section className="pb-4">
          <h3 className="text-xl font-bold pb-2">
            Changes to These Terms and Conditions
          </h3>
          <p className="font-light ">
            The Service Provider may periodically update their Terms and
            Conditions. Therefore, you are advised to review this page regularly
            for any changes. The Service Provider will notify you of any changes
            by posting the new Terms and Conditions on this page.
          </p>
        </section>
        <section className="pb-12">
          <h3 className="text-xl font-bold pb-2">Contact Us</h3>
          <p className="font-light ">
            If you have any questions regarding privacy while using the APPS, or
            have questions about the practices, please contact the Service
            Provider{" "}
            <a className="" href="/feedback">
              <button className="primary-btn">here</button>
            </a>{" "}
            or send email via sebastienbange@gmail.com.
          </p>
        </section>
      </div>
    </>
  );
}

export default Terms;
