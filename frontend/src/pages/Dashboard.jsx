import Header from '../components/Header'
import Footer from '../components/Footer'
import InputForm from '../components/InputForm';
import DisplayCard from '../components/DisplayCard';

// In the dashboard for clean purpose all components are defined separately
function Dashboard() {
  return (
      <>
        <Header />
        <section className='flex flex-col justify-center items-center bg-linear-45 from-purple-50 to-sky-50 min-h-[90vh] md:flex-row md:items-start pt-[15vh]'>
        <InputForm />
        <DisplayCard/>
        </section>
        <Footer/>
    </>
  )
}

export default Dashboard