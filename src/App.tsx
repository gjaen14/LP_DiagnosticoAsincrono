/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from "./components/Layout";
import { Hero } from "./components/Hero";
import { Problem, Solution } from "./components/KeySections";
import { Authority, Checkout } from "./components/Closing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="bg-obsidian min-h-screen text-bone">
      <Navbar />
      <Hero />
      <main>
        <Problem />
        <Solution />
        <Authority />
        <Checkout />
      </main>
      <Footer />
    </div>
  );
}

