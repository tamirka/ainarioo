import { FileText, CheckCircle2, AlertTriangle } from "lucide-react";

export default function Terms() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Terms & <span className="text-indigo-400">Conditions</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            Please read these terms and conditions carefully before using our
            website or services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <p className="lead text-xl text-slate-600 mb-10">
            These Terms and Conditions ("Terms", "Terms and Conditions") govern
            your relationship with the Atlas Academy website (the "Service")
            operated by Atlas Academy ("us", "we", or "our"). Your access to and
            use of the Service is conditioned on your acceptance of and
            compliance with these Terms.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                Agreement to Terms
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                By accessing or using the Service you agree to be bound by these
                Terms. If you disagree with any part of the terms then you may
                not access the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-indigo-600" />
                Accounts and Registration
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                When you create an account with us, you must provide us
                information that is accurate, complete, and current at all
                times. Failure to do so constitutes a breach of the Terms, which
                may result in immediate termination of your account on our
                Service.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  You are responsible for safeguarding the password that you use
                  to access the Service and for any activities or actions under
                  your password.
                </li>
                <li>
                  You agree not to disclose your password to any third party.
                </li>
                <li>
                  You must notify us immediately upon becoming aware of any
                  breach of security or unauthorized use of your account.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Intellectual Property
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                The Service and its original content, features, and
                functionality are and will remain the exclusive property of
                Atlas Academy and its licensors. The Service is protected by
                copyright, trademark, and other laws of both Morocco and foreign
                countries. Our trademarks and trade dress may not be used in
                connection with any product or service without the prior written
                consent of Atlas Academy.
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>Darija Language Lab:</strong> Any models,
                transcriptions, or audio generated using the Darija Language Lab
                are subject to specific licensing agreements. Users may not use
                the generated content for commercial purposes without explicit
                written permission.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Limitations of Liability
              </h2>
              <p className="text-slate-600 leading-relaxed">
                In no event shall Atlas Academy, nor its directors, employees,
                partners, agents, suppliers, or affiliates, be liable for any
                indirect, incidental, special, consequential or punitive
                damages, including without limitation, loss of profits, data,
                use, goodwill, or other intangible losses, resulting from (i)
                your access to or use of or inability to access or use the
                Service; (ii) any conduct or content of any third party on the
                Service; (iii) any content obtained from the Service; and (iv)
                unauthorized access, use or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence) or any other legal theory, whether or not we have
                been informed of the possibility of such damage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Need Clarification?
          </h2>
          <p className="text-slate-600 mb-8">
            If you have any questions about these Terms, please contact our
            legal department.
          </p>
          <a
            href="mailto:legal@atlasacademy.edu.ma"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow"
          >
            Contact Legal Team
          </a>
        </div>
      </section>
    </div>
  );
}
