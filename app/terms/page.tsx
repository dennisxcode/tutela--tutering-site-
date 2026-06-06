import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Tutela",
  description: "Terms governing use of the Tutela tutoring service.",
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-content px-5 py-14 sm:py-20">
      <Link href="/" className="text-sm font-medium text-accent hover:underline">
        ← Home
      </Link>

      <h1 className="mt-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
        Terms of Service
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
            1. Service Provider
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              These Terms of Service govern your use of the Tutela website
              (tutelamtl.ca) and tutoring services, operated by Dennis (Montreal,
              Quebec, Canada). By contacting us or enrolling in classes, you agree to these terms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            2. Services Offered
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              Tutela provides small-group tutoring for Quebec secondary school admission exams
              in the subjects of Math, French, and English, aimed at primary grades 3–5. We
              also offer general academic tutoring and 1-on-1 sessions by private arrangement.
            </p>
            <p>
              Classes run on Saturdays, 9:00 AM – 12:00 PM, in a combined in-person and online
              format. Specific session details (location, platform) are communicated at enrollment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            3. No Guarantee of Outcomes
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              <strong>
                Tutela makes no guarantee, express or implied, that participating in our
                tutoring program will result in admission to any secondary school, or any
                particular score on any exam.
              </strong>
            </p>
            <p>
              Exam outcomes depend on many factors beyond the scope of tutoring, including
              the student&apos;s preparation, effort, individual circumstances, and the policies
              of the schools to which they apply. Our role is to support and prepare, not
              to guarantee any specific result.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            4. Enrolment and Fees
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>Current group tutoring rates:</p>
            <ul className="ml-5 list-disc space-y-2">
              <li>1 subject: $15 / hour</li>
              <li>2 subjects: $30 / hour</li>
              <li>3 subjects: $40 / hour (bundle discount)</li>
            </ul>
            <p>
              1-on-1 sessions are available by private arrangement; rates are set by the
              individual tutor and communicated directly.
            </p>
            <p>
              Fees and payment schedules are confirmed at enrollment via WeChat. Rates are
              subject to change with reasonable notice before the start of a new session period.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            5. Cancellations and Missed Classes
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              If you need to miss a class, please notify us via WeChat as early as possible.
              We will do our best to accommodate make-up arrangements where feasible, but
              make-up classes are not guaranteed.
            </p>
            <p>
              Classes cancelled by Tutela (e.g., due to unforeseen circumstances) will be
              rescheduled or credited.
            </p>
            <p>
              If you wish to unenroll, please notify us via WeChat. Fees already paid for
              sessions not yet attended will be refunded on a pro-rated basis.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            6. Conduct
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              We expect all students and parents to treat tutors and other participants with
              respect. Tutela reserves the right to terminate enrollment for conduct that
              is disruptive, disrespectful, or harmful, with a refund of unused prepaid sessions.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            7. Intellectual Property
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              All materials provided by Tutela, including handouts, practice problems, and
              session recordings (if any), are for the enrolled student&apos;s personal use only.
              Redistribution, resale, or republication without written permission is prohibited.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            8. Limitation of Liability
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              To the maximum extent permitted by applicable law, Tutela and its tutors shall
              not be liable for any indirect, incidental, or consequential damages arising
              from participation in the program or reliance on information provided through
              this website.
            </p>
            <p>
              Our total liability for any claim arising from the tutoring services is limited
              to the amount you paid for the specific sessions to which the claim relates.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            9. Website Use
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              This website is provided for informational purposes. Content is kept as accurate
              as possible but may not reflect real-time availability or pricing. We reserve the
              right to update content at any time.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            10. Governing Law
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              These terms are governed by the laws of Quebec and Canada. Any disputes shall
              be resolved under the jurisdiction of the courts of the Province of Quebec.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            11. Changes to These Terms
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              We may update these terms from time to time. The &quot;Last updated&quot; date at the
              top reflects the most recent revision. Continued use of our service after
              changes means you accept the revised terms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-xl font-semibold text-ink sm:text-2xl">
            12. Contact
          </h2>
          <div className="mt-3 space-y-4 text-base leading-relaxed">
            <p>
              For questions about these terms, contact Dennis via WeChat:
            </p>
            <p>
              WeChat ID: <code className="rounded bg-cream px-1">wxid_qs6tqmt94en122</code>
            </p>
          </div>
        </section>

      </div>

      <div className="mt-16 border-t border-body/10 pt-8 flex gap-6 text-sm">
        <Link href="/" className="text-accent hover:underline">Home</Link>
        <Link href="/privacy" className="text-accent hover:underline">Privacy Policy</Link>
      </div>
    </div>
  );
}
