 import Footer from "../components/generalComponents/footer"
import Header from "../components/generalComponents/header"
import HomepageHero from '../components/homepageComponents/heroComponent'
import HomepageAbout from '../components/homepageComponents/aboutComponent';
import HomepageServices from "../components/homepageComponents/servicesComponent";
import HomepageTestimonials from "../components/homepageComponents/testimonialComponent";
import HomepageBlog from '../components/homepageComponents/blogComponent';
export default function Homepage(){
    return (
      <>
        <div className='w-full relative bg-black-colors-white h-[7139px] lg:h-[4429px] overflow-hidden text-left text-16xl text-brand-colors-primary font-m-semibold'>
          <Header />
          <HomepageHero />
          <HomepageAbout />
          <HomepageServices />
          <HomepageTestimonials />
          <HomepageBlog />
          <Footer />
        </div>
      </>
    );
}