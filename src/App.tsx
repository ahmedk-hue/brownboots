/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { Gallery } from "./components/sections/Gallery";
import { Locations } from "./components/sections/Locations";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Locations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
