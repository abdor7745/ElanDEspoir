/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Services } from './components/Services';
import { Team } from './components/Team';
import { Appointment } from './components/Appointment';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-white min-h-screen text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Team />
        <Appointment />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}