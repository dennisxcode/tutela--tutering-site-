import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Tutela",
  description: "How Tutela collects, uses, and protects your personal information.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-14 sm:py-20">
      <Link href="/" className="text-sm font-medium text-accent hover:underline">
        ← Home
      </Link>

      <h1 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-body/50">Last updated: June 2, 2026</p>
      <p className="mt-4 rounded-lg bg-cream px-4 py-3 text-sm text-body/70">
        本文件仅以英文提供。如有疑问，请通过微信与我们联系。
        <br />
        This document is provided in English only. For questions, contact us via WeChat.
      </p>

      <div className="prose mt-12 max-w-none space-y-10 text-body/85">

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            1. Who We Are
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              Tutela is a small-group tutoring service for Quebec secondary admission exams,
              operated by Dennis (Montreal, Quebec, Canada). We offer tutoring in Math, French,
              and English for primary grades 3–5.
            </p>
            <p>
              <strong>Privacy Officer:</strong> Dennis<br />
              <strong>Contact:</strong> WeChat ID <code className="rounded bg-cream px-1">wxid_qs6tqmt94en122</code>
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            2. What Personal Information We Collect
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>We collect only what you voluntarily give us:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>
                <strong>Contact information</strong> — your name and WeChat ID when you message
                us to inquire about classes or enroll.
              </li>
              <li>
                <strong>Your child&apos;s grade level</strong> — so we can place them in the
                correct group.
              </li>
              <li>
                <strong>Website usage data</strong> — Tutela uses Vercel Analytics, a
                privacy-focused analytics tool that collects anonymized, aggregated data
                (page views, referrers, country). No cookies are set; no personal identifiers
                are tracked.
              </li>
            </ul>
            <p>
              We do <strong>not</strong> collect payment information through this website.
              Payments are arranged directly and privately.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            3. Why We Collect It
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>Your personal information is used solely to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>Respond to your inquiries about the tutoring program.</li>
              <li>Confirm enrollment and communicate class schedules.</li>
              <li>Send important updates about the program (schedule changes, session reminders).</li>
            </ul>
            <p>
              We do <strong>not</strong> use your information for marketing to third parties,
              sell your data, or share it with anyone outside of Tutela&apos;s operations.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            4. Legal Basis for Processing
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              We process your personal information on the basis of your consent — you provide
              it freely when you initiate contact with us via WeChat. You may withdraw consent
              at any time by asking us to stop contacting you.
            </p>
            <p>
              This policy is prepared in accordance with Quebec&apos;s <em>Act respecting the
              protection of personal information in the private sector</em> (Law 25 / Bill 64,
              as updated 2022–2023) and Canada&apos;s <em>Personal Information Protection and
              Electronic Documents Act</em> (PIPEDA).
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            5. How Long We Keep Your Information
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              We retain your contact information for as long as you or your child are enrolled
              in our program, or until you ask us to delete it. We do not retain information
              beyond what is necessary for ongoing communication.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            6. Third-Party Services
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>Vercel Analytics</strong> — our hosting platform (Vercel Inc.) provides
              anonymized analytics on website usage. No personal data is passed to Vercel
              Analytics. Vercel&apos;s privacy policy is available at vercel.com/legal/privacy-policy.
            </p>
            <p>
              <strong>WeChat</strong> — communication occurs over WeChat (Tencent). WeChat&apos;s
              privacy practices are governed by Tencent&apos;s privacy policy. We have no control
              over data processed by WeChat.
            </p>
            <p>
              We do not use advertising networks, tracking pixels, or sell access to any data.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            7. Your Rights
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>Under Quebec Law 25 and PIPEDA, you have the right to:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li><strong>Access</strong> the personal information we hold about you.</li>
              <li><strong>Correct</strong> inaccurate information.</li>
              <li><strong>Request deletion</strong> of your information (subject to legal retention requirements).</li>
              <li><strong>Withdraw consent</strong> and ask us to stop processing your data.</li>
              <li><strong>Portability</strong> — receive your data in a structured format.</li>
            </ul>
            <p>
              To exercise any of these rights, contact us via WeChat:{" "}
              <code className="rounded bg-cream px-1">wxid_qs6tqmt94en122</code>. We will
              respond within 30 days.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            8. Data Security
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              This website is hosted on Vercel, which provides industry-standard security
              (TLS/HTTPS, secure infrastructure). Contact information shared via WeChat is
              subject to Tencent&apos;s security measures.
            </p>
            <p>
              We do not store personal information in databases beyond what WeChat retains
              as part of normal messaging.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            9. Changes to This Policy
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              We may update this policy as our practices evolve. The &quot;Last updated&quot; date at
              the top reflects the most recent revision. Continued use of this website after
              changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            10. Contact
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              For any privacy questions or to exercise your rights, contact Dennis via WeChat:
            </p>
            <p>
              WeChat ID: <code className="rounded bg-cream px-1">wxid_qs6tqmt94en122</code>
            </p>
            <p>
              You may also file a complaint with the Commission d&apos;accès à l&apos;information du Québec
              (CAI) at <em>cai.gouv.qc.ca</em> if you believe your privacy rights have been violated.
            </p>
          </div>
        </section>

      </div>

      <div className="mt-16 border-t border-body/10 pt-8 flex gap-6 text-sm">
        <Link href="/" className="text-accent hover:underline">Home</Link>
        <Link href="/terms" className="text-accent hover:underline">Terms of Service</Link>
      </div>
    </div>
  );
}
