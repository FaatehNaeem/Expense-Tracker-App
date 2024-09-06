import Header from '../components/header'
import Footer from '../components/footer'
import Testimonials from '../components/testimonials'
import { Title, SubTitle, Spacer } from '../components/text'
import Features from '../components/features'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
  
export default function Home() {
  const location = useLocation();
  // console.log(location)
  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior:'smooth' });
      }
    }
  }, [location]);
    return (
      <>
 <Header />
      <Spacer/>
      <Title />
      <SubTitle />

      <br />
      <br />
      <br />
      <Features/>
      <br />
      <br />
      <br />
      <br />
      <br />
        <section id="hash">
          <Testimonials />
        </section>
        <br />
      <br />
      <br />
      <br />
            <Footer />
        </>
  )
}


