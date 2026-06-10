/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import FeaturedTreatments from './components/FeaturedTreatments';
import AppointmentSteps from './components/AppointmentSteps';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import BookingSystem from './components/BookingSystem';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <main className="w-full relative">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <FeaturedTreatments />
      <AppointmentSteps />
      <Testimonials />
      <Gallery />
      <FAQ />
      <BookingSystem />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
