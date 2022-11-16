import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
const Info = () => {
  return (
    <div>
      <Menu pageTitle='' />
      <section className='info-section'>
        <h2>Info Page</h2>
        <article className='single-info-item'>
          <h4>ALL SALES FINAL</h4>
          <p>
            If you need a refund or exchange, or believe there was an error, please contact customer
            service to request an exception within (30) days. All requests after 30 days will be
            ignored.
          </p>
        </article>
        <article className='single-info-item'>
          <h4>SHIPPING POLICY</h4>
          <p>
            All orders ship in 3-6 weeks unless stated otherwise in the product description. Please
            purchase on-hand items separately for immediate processing.
          </p>
        </article>
        <article className='single-info-item'>
          <h4>CUSTOMER SERVICE</h4>
          <p>
            Please email info@nothingwithoutit.com with your order number. Average response time is
            1 to 3 business days.
          </p>
        </article>
        <h3>All inquiries elsewhere will be ignored.</h3>
      </section>
      <Footer />
    </div>
  );
};

export default Info;
