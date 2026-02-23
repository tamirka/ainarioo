import { Shield, Lock, Eye } from "lucide-react";

export default function Privacy() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="h-16 w-16 text-indigo-400 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Privacy <span className="text-indigo-400">Policy</span>
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            At Atlas Academy, we are committed to protecting your privacy and
            ensuring the security of your personal information.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate prose-lg">
          <p className="lead text-xl text-slate-600 mb-10">
            This Privacy Policy explains how Atlas Academy ("we," "us," or
            "our") collects, uses, discloses, and safeguards your information
            when you visit our website or use our services, including the Darija
            Language Lab. Please read this privacy policy carefully.
          </p>

          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Eye className="h-6 w-6 text-indigo-600" />
                Information We Collect
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The
                information we may collect on the Site includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>
                  <strong>Personal Data:</strong> Personally identifiable
                  information, such as your name, shipping address, email
                  address, and telephone number, and demographic information,
                  such as your age, gender, hometown, and interests, that you
                  voluntarily give to us when you register with the Site or when
                  you choose to participate in various activities related to the
                  Site.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers
                  automatically collect when you access the Site, such as your
                  IP address, your browser type, your operating system, your
                  access times, and the pages you have viewed directly before
                  and after accessing the Site.
                </li>
                <li>
                  <strong>Audio Data:</strong> If you use our Darija Language
                  Lab tools, we may collect audio recordings you upload or
                  record, solely for the purpose of providing transcription and
                  translation services.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                <Lock className="h-6 w-6 text-indigo-600" />
                Use of Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Having accurate information about you permits us to provide you
                with a smooth, efficient, and customized experience.
                Specifically, we may use information collected about you via the
                Site to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>Create and manage your account.</li>
                <li>Process your admissions application.</li>
                <li>Improve our educational services and Darija AI models.</li>
                <li>Respond to customer service requests and support needs.</li>
                <li>
                  Send you a newsletter or other communications regarding our
                  school.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Disclosure of Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                We may share information we have collected about you in certain
                situations. Your information may be disclosed as follows:
              </p>
              <p className="text-slate-600 leading-relaxed">
                <strong>By Law or to Protect Rights:</strong> If we believe the
                release of information about you is necessary to respond to
                legal process, to investigate or remedy potential violations of
                our policies, or to protect the rights, property, and safety of
                others, we may share your information as permitted or required
                by any applicable law, rule, or regulation.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                Security of Your Information
              </h2>
              <p className="text-slate-600 leading-relaxed">
                We use administrative, technical, and physical security measures
                to help protect your personal information. While we have taken
                reasonable steps to secure the personal information you provide
                to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data
                transmission can be guaranteed against any interception or other
                type of misuse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Questions About Our Privacy Policy?
          </h2>
          <p className="text-slate-600 mb-8">
            If you have questions or comments about this Privacy Policy, please
            contact us.
          </p>
          <a
            href="mailto:privacy@atlasacademy.edu.ma"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow"
          >
            Contact Privacy Officer
          </a>
        </div>
      </section>
    </div>
  );
}
