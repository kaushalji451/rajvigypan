import React from "react";

export default function Policy() {
    return (
        <main className="mx-auto max-w-4xl px-6 py-12 text-slate-800 mt-21">
            <header className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
                <p className="mt-2 text-sm text-slate-500">
                    Last updated: 6 September 2025
                </p>
                <p className="mt-4 rounded-2xl bg-amber-50 p-4 text-amber-900 shadow-sm">
                    <span className="font-semibold">Legal disclaimer:</span> The explanations
                    and information below are provided for general guidance only and do not
                    constitute legal advice. Your use of this page does not create a
                    lawyer–client relationship. Consider seeking independent legal advice
                    to tailor this policy to your specific needs.
                </p>
            </header>

            <nav className="mb-10">
                <div className="grid gap-2 sm:grid-cols-2">
                    {[
                        ["1. Who we are", "who-we-are"],
                        ["2. Scope", "scope"],
                        ["3. Data we collect", "data-we-collect"],
                        ["4. How we use data", "how-we-use"],
                        ["5. Legal bases (GDPR)", "legal-bases"],
                        ["6. Sharing & disclosures", "sharing"],
                        ["7. Cookies & tracking", "cookies"],
                        ["8. Advertising & analytics", "ads-analytics"],
                        ["9. Data retention", "retention"],
                        ["10. Security", "security"],
                        ["11. International transfers", "transfers"],
                        ["12. Your rights", "your-rights"],
                        ["13. Children’s privacy", "children"],
                        ["14. India DPDP", "dpdp"],
                        ["15. California (CCPA/CPRA)", "ccpa"],
                        ["16. How to contact us", "contact"],
                        ["17. Changes to this policy", "changes"],
                    ].map(([label, id]) => (
                        <a
                            key={id}
                            href={`#${id}`}
                            className="rounded-xl border border-slate-200 p-3 text-sm hover:bg-slate-50"
                        >
                            {label}
                        </a>
                    ))}
                </div>
            </nav>

            <section id="who-we-are" className="prose prose-slate max-w-none">
                <h2>1. Who we are</h2>
                <p>
                    <strong>Raja Vigyapan Agency Pvt Ltd</strong> operates the website <strong>https://rajavigyapan.com/</strong> and
                    provides advertising, marketing, and related digital services (the
                    &quot;Services&quot;). Our registered address is <strong>1 st Floor, 1-B, Ishwarpuri, Sector-12,Near Ishwar Dham Mandir,Indiranagar, Lucknow -226016 Uttar Pradesh</strong>. You
                    can contact us at <strong>info@rajavigyapan.com</strong> or <strong>+91-8960011163</strong>.
                </p>
            </section>

            <section id="scope" className="prose prose-slate max-w-none">
                <h2>2. Scope</h2>
                <p>
                    This Privacy Policy explains how we collect, use, disclose, process,
                    and protect personal data when you visit our website, create an
                    account, engage our Services, or otherwise interact with us. If our
                    Services link to a different privacy notice, that notice governs the
                    specific Service.
                </p>
            </section>

            <section id="data-we-collect" className="prose prose-slate max-w-none">
                <h2>3. Data we collect</h2>
                <ul>
                    <li>
                        <strong>Identity &amp; contact data</strong> — name, business name,
                        postal address, email address, phone number, job title.
                    </li>
                    <li>
                        <strong>Account data</strong> — login credentials, profile details,
                        preferences, communications.
                    </li>
                    <li>
                        <strong>Transactional data</strong> — proposals, invoices, payment
                        status (we do not store full card details; payments are processed by
                        our payment partners).
                    </li>
                    <li>
                        <strong>Usage &amp; device data</strong> — IP address, device &amp; browser
                        type, operating system, pages viewed, referring URLs, time stamps,
                        and other diagnostic data.
                    </li>
                    <li>
                        <strong>Cookies &amp; similar tech</strong> — small files placed on your
                        device; see <a href="#cookies">Cookies &amp; tracking</a>.
                    </li>
                    <li>
                        <strong>User content</strong> — creatives, briefs, assets, and other
                        materials you provide for campaigns.
                    </li>
                    <li>
                        <strong>Third-party sources</strong> — public databases, social
                        platforms you connect, ad networks, analytics providers, and
                        partners who help us deliver the Services.
                    </li>
                </ul>
            </section>

            <section id="how-we-use" className="prose prose-slate max-w-none">
                <h2>4. How we use data</h2>
                <ul>
                    <li>Provide, operate, and improve the website and our Services.</li>
                    <li>Create and manage your account; provide customer support.</li>
                    <li>Plan, deliver, optimize, and measure advertising campaigns.</li>
                    <li>
                        Send service communications (e.g., confirmations, updates) and, with
                        your consent where required, marketing messages you can opt out of
                        anytime.
                    </li>
                    <li>Personalize content and experiences based on your preferences.</li>
                    <li>Monitor usage, perform analytics, and prevent fraud or misuse.</li>
                    <li>Comply with legal obligations and enforce agreements.</li>
                </ul>
            </section>

            <section id="legal-bases" className="prose prose-slate max-w-none">
                <h2>5. Legal bases (GDPR/UK GDPR)</h2>
                <p>
                    Where the EU/EEA or UK data protection laws apply, we process personal
                    data under these legal bases: (a) <em>performance of a contract</em>,
                    (b) <em>legitimate interests</em> (e.g., to secure and improve our
                    Services, prevent fraud, and market to business contacts), (c)
                    <em>consent</em> (e.g., for certain cookies or marketing), and (d)
                    <em>legal obligations</em>.
                </p>
            </section>

            <section id="sharing" className="prose prose-slate max-w-none">
                <h2>6. Sharing &amp; disclosures</h2>
                <p>
                    We share personal data with service providers and partners who perform
                    services for us (e.g., hosting, analytics, payments, customer support,
                    ad delivery, fraud prevention). These recipients are bound by
                    contractual obligations to protect your data and process it only on
                    our instructions. We may also share data (i) as required by law or to
                    protect rights and safety, (ii) in connection with corporate
                    transactions (e.g., merger or acquisition), and (iii) with your
                    consent.
                </p>
            </section>

            <section id="cookies" className="prose prose-slate max-w-none">
                <h2>7. Cookies &amp; tracking</h2>
                <p>
                    We use cookies, pixels, and similar technologies to remember settings,
                    authenticate sessions, analyze traffic, and personalize content and ads.
                    You can control cookies through your browser settings and consent
                    manager (where available). Disabling certain cookies may impact site
                    functionality. Do Not Track signals are not responded to at this time.
                </p>
            </section>

            <section id="ads-analytics" className="prose prose-slate max-w-none">
                <h2>8. Advertising &amp; analytics</h2>
                <p>
                    We may work with analytics providers and ad partners to measure
                    engagement and show ads that may be more relevant to you. These
                    partners may set their own cookies or use unique identifiers to build
                    audience insights and measure performance in compliance with
                    applicable laws. Where required, we will seek your consent before using
                    non-essential cookies.
                </p>
            </section>

            <section id="retention" className="prose prose-slate max-w-none">
                <h2>9. Data retention</h2>
                <p>
                    We retain personal data only as long as necessary for the purposes set
                    out in this Policy, including to comply with legal, accounting, or
                    reporting obligations, resolve disputes, and enforce agreements. When
                    no longer needed, we will delete or anonymize the data.
                </p>
            </section>

            <section id="security" className="prose prose-slate max-w-none">
                <h2>10. Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to
                    protect personal data, including encryption in transit, access
                    controls, and staff training. However, no method of transmission or
                    storage is 100% secure; we cannot guarantee absolute security.
                </p>
            </section>

            <section id="transfers" className="prose prose-slate max-w-none">
                <h2>11. International data transfers</h2>
                <p>
                    Your data may be processed in countries other than your own. Where we
                    transfer personal data outside your jurisdiction, we will do so under
                    appropriate safeguards (e.g., Standard Contractual Clauses or other
                    lawful transfer mechanisms) as required by applicable law.
                </p>
            </section>

            <section id="your-rights" className="prose prose-slate max-w-none">
                <h2>12. Your rights</h2>
                <p>
                    Depending on your location, you may have rights to access, correct,
                    update, delete, or port your personal data, and to object to or
                    restrict certain processing. Where processing is based on consent, you
                    may withdraw consent at any time without affecting prior processing.
                    To exercise your rights, contact us using the details below.
                </p>
            </section>

            <section id="children" className="prose prose-slate max-w-none">
                <h2>13. Children’s privacy</h2>
                <p>
                    Our Services are not directed to children under the age of 13 (or the
                    equivalent age of consent in your jurisdiction), and we do not
                    knowingly collect personal data from such children. If you believe a
                    child has provided us personal data, please contact us and we will
                    take appropriate steps to delete it.
                </p>
            </section>

            <section id="dpdp" className="prose prose-slate max-w-none">
                <h2>14. India — Digital Personal Data Protection Act, 2023 (DPDP)</h2>
                <p>
                    For users in India, we act as a Data Fiduciary for personal data we
                    process. We collect and process personal data for lawful purposes with
                    your consent or another valid ground, implement reasonable security
                    safeguards, and notify the Data Protection Board and affected
                    individuals of any personal data breach as required. You may request
                    access, correction, erasure, grievance redressal, and the ability to
                    nominate a person to exercise your rights in the event of incapacity
                    or death. To raise a grievance, contact our Grievance Officer at
                    <strong> info@rajavigyapan.com</strong>.
                </p>
            </section>

            <section id="ccpa" className="prose prose-slate max-w-none">
                <h2>15. California — CCPA/CPRA notices</h2>
                <ul>
                    <li>
                        We may &quot;collect&quot; and &quot;share&quot; (as defined by California law)
                        identifiers, commercial information, internet activity, and
                        inferences for business purposes and cross-context behavioral
                        advertising. We do not sell personal information for money.
                    </li>
                    <li>
                        California residents have the right to know, access, correct, delete,
                        and opt out of the sharing of personal information, and to limit the
                        use of sensitive personal information. To exercise these rights,
                        contact us or use available controls on our website.
                    </li>
                    <li>
                        We will not discriminate against you for exercising your rights.
                    </li>
                </ul>
            </section>

            <section id="contact" className="prose prose-slate max-w-none">
                <h2>16. How to contact us</h2>
                <p>
                    If you have questions or requests regarding this Policy or our data
                    practices, contact: <strong> Raja Vigyapan Agency Pvt Ltd</strong>, <strong>1 st Floor, 1-B, Ishwarpuri, Sector-12, Near Ishwar Dham Mandir, Indiranagar, Lucknow -226016 Uttar Pradesh</strong>.
                    Email: <strong>info@rajavigyapan.com</strong>. Phone: <strong> +91-8960011163</strong>.
                </p>
            </section>

            <section id="changes" className="prose prose-slate max-w-none">
                <h2>17. Changes to this policy</h2>
                <p>
                    We may update this Policy from time to time. The updated version will
                    be indicated by a revised &quot;Last updated&quot; date and will be effective as
                    soon as it is posted on our website. Material changes may be notified
                    to you by prominent notice on the website or via email.
                </p>
            </section>
        </main>
    );
}
