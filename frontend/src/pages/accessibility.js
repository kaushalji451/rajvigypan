import React from "react";

export default function Accessibility() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-slate-800 mt-21">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Accessibility Statement</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: 6 September 2025</p>
      </header>

      <section className="prose prose-slate max-w-none">
        <p>
          At <strong>Rajavigypan</strong>, we are committed to ensuring that our
          website <strong>https://rajavigyapan.com/</strong> is accessible to people with
          disabilities. We believe that everyone should be able to browse our
          site with ease, regardless of ability, and enjoy equal access to our
          services.
        </p>
      </section>

      <section className="prose prose-slate max-w-none mt-8">
        <h2>What web accessibility is</h2>
        <p>
          An accessible website allows visitors with disabilities to navigate,
          interact, and use the site with the same or similar level of ease and
          enjoyment as other visitors. Accessibility can be achieved through the
          capabilities of the device or system on which the site is operating
          and through assistive technologies such as screen readers and
          keyboard navigation.
        </p>
      </section>

      <section className="prose prose-slate max-w-none mt-8">
        <h2>Accessibility adjustments on this site</h2>
        <p>
          Our site has been designed and adapted in accordance with the WCAG 2.1
          guidelines, aiming to achieve Level AA compliance. Efforts include:
        </p>
        <ul>
          <li>Setting the site language and logical content order on pages.</li>
          <li>Defining clear heading structures for all pages.</li>
          <li>Adding alternative text to meaningful images.</li>
          <li>Ensuring color combinations meet required contrast standards.</li>
          <li>Reducing excessive use of motion or flashing elements.</li>
          <li>Ensuring videos, audio, and files are accessible where possible.</li>
          <li>
            Supporting assistive technologies such as screen readers and
            keyboard navigation.
          </li>
        </ul>
      </section>

      <section className="prose prose-slate max-w-none mt-8">
        <h2>Declaration of partial compliance</h2>
        <p>
          Certain pages of our website may contain third-party content or embeds
          (such as social media posts, maps, or advertising tools) that we do
          not fully control. As a result, those areas may not fully comply with
          accessibility standards. We are working to provide accessible
          alternatives whenever possible.
        </p>
      </section>

      <section className="prose prose-slate max-w-none mt-8">
        <h2>Requests, issues, and suggestions</h2>
        <p>
          We continuously strive to improve the accessibility of our site. If
          you encounter an accessibility issue, or if you require further
          assistance, please contact our Accessibility Coordinator:
        </p>
        <ul>
          <li><strong>Name:</strong> Raja Vigyapan Agency Pvt Ltd</li>
          <li><strong>Phone:</strong>  +91-8960011163</li>
          <li><strong>Email:</strong> info@rajavigyapan.com</li>
          <li>
            <strong>Address:</strong> 1 st Floor, 1-B, Ishwarpuri, Sector-12, Near Ishwar Dham Mandir,
            Indiranagar, Lucknow -226016 Uttar Pradesh
          </li>
        </ul>
        <p>
          We welcome your feedback and will make every effort to address issues
          promptly.
        </p>
      </section>

      <footer className="mt-12 rounded-2xl bg-slate-50 p-6 text-sm text-slate-600">
        <p>
          Note: This statement is provided to demonstrate our commitment to
          accessibility. For legal compliance, please review local regulations
          (such as India&apos;s Rights of Persons with Disabilities Act, 2016, or
          international WCAG requirements).
        </p>
      </footer>
    </main>
  );
}
