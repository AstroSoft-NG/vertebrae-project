import { useContext } from 'react';

import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import Cart from '../../components/Cart';
import { AppContext } from '../../appContext/AppContext';

const PrivacyPolicy:React.FC = () => {
  const { isCartOpen } = useContext(AppContext);
  return (
    <div>
      <Menu pageTitle='' />
      {isCartOpen && <Cart />}
      <section className='info-section'>
        <h2 className='privacy-header'>Privacy Policy</h2>
        <h4 className='privacy-date'>Effective date:June 23 2019</h4>
        <p>
          Vertabrae LLC ("us", "we", or "our") operates the https://nothingwithoutit.com/ website
          (hereinafter referred to as the "Service"). This page informs you of our policies
          regarding the collection, use and disclosure of personal data when you use our Service and
          the choices you have associated with that data. We use your data to provide and improve
          the Service. By using the Service, you agree to the collection and use of information in
          accordance with this policy. Unless otherwise defined in this Privacy Policy, the terms
          used in this Privacy Policy have the same meanings as in our Terms and Conditions,
          accessible from https://nothingwithoutit.com/ Definitions
        </p>
        <ul className='policy-list'>
          <li>Service</li>
          <li>Service is the https://nothingwithoutit.com/ website operated by Vertabrae LLC</li>
          <li>Personal Data</li>
          <li>
            Personal Data means data about a living individual who can be identified from those data
            (or from those and other information either in our possession or likely to come into our
            possession).
          </li>
          <li>
            Usage Data is data collected automatically either generated by the use of the Service or
            from the Service infrastructure itself (for example, the duration of a page visit).
          </li>
          <li>Usage Data</li>
          <li>Cookies</li>
          <li>Cookies are small files stored on your device (computer or mobile device)</li>
        </ul>
        <p>
          Information Collection and Use We collect several different types of information for
          various purposes to provide and improve our Service to you. Types of Data Collected
          Personal Data While using our Service, we may ask you to provide us with certain
          personally identifiable information that can be used to contact or identify you ("Personal
          Data"). Personally identifiable information may include, but is not limited to:
        </p>
        <ul className='policy-list'>
          <li>Service</li>
          <li>Service is the https://nothingwithoutit.com/ website operated by Vertabrae LLC</li>
          <li>Personal Data</li>
          <li>
            Personal Data means data about a living individual who can be identified from those data
            (or from those and other information either in our possession or likely to come into our
            possession).
          </li>
          <li>
            Usage Data is data collected automatically either generated by the use of the Service or
            from the Service infrastructure itself (for example, the duration of a page visit).
          </li>
          <li>Usage Data</li>
          <li>Cookies</li>
          <li>Cookies are small files stored on your device (computer or mobile device)</li>
        </ul>
        <ul className='policy-list'>
          <li>Service</li>
          <li>Service is the https://nothingwithoutit.com/ website operated by Vertabrae LLC</li>
          <li>Personal Data</li>
          <li>
            Personal Data means data about a living individual who can be identified from those data
            (or from those and other information either in our possession or likely to come into our
            possession).
          </li>
          <li>
            Usage Data is data collected automatically either generated by the use of the Service or
            from the Service infrastructure itself (for example, the duration of a page visit).
          </li>
          <li>Usage Data</li>
          <li>Cookies</li>
          <li>Cookies are small files stored on your device (computer or mobile device)</li>
        </ul>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
