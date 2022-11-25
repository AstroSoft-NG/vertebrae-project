import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const FinalRecoveryPage: React.FC = () => {
  return (
    <>
      <Menu pageTitle='' />
      <section className='signup-page-form'>
        <article className='recovery-page-header'>
          <h2>Account Recovery</h2>
          <p>Set your new Password</p>
        </article>
        <form className='signup-form'>
          <div className='field'>
            <label>Password</label>
            <br />
            <input type='password' name='password' placeholder='****'></input>
            <div className='errors'>
              <p></p>
            </div>
          </div>
          <button type='submit' className='signup-submit'>
            Set Password
          </button>
        </form>
      </section>

      <Footer />
    </>
  );
};

export default FinalRecoveryPage;
