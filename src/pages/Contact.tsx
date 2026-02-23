import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-32">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="School administration building, bright natural lighting, professional emotional tone, modern campus environment, architectural photography style"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Get in <span className="text-indigo-400">Touch</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            We are here to answer your questions, schedule a campus tour, and
            welcome you to the Atlas Academy community.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">
                Reach Out
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                We'd Love to Hear From You
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-10">
                Whether you're a prospective parent, a community member, or an
                alumnus, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-indigo-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Campus Address
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      123 Education Boulevard
                      <br />
                      Quartier des Écoles
                      <br />
                      Casablanca, Morocco 20000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Phone Numbers
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Main Office: +212 522 123 456
                      <br />
                      Admissions: +212 522 123 457
                      <br />
                      Emergency: +212 661 987 654
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Email Addresses
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      General Inquiries: info@atlasacademy.edu.ma
                      <br />
                      Admissions: admissions@atlasacademy.edu.ma
                      <br />
                      Careers: hr@atlasacademy.edu.ma
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-rose-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-rose-600" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">
                      Office Hours
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      Monday - Friday: 8:00 AM - 5:00 PM
                      <br />
                      Saturday: 9:00 AM - 12:00 PM (Admissions only)
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-3xl p-10 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-slate-700 mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Admissions Information</option>
                    <option>Schedule a Tour</option>
                    <option>Employment Opportunities</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-slate-200 relative">
        {/* Placeholder for an actual map integration like Google Maps */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-indigo-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Visit Our Campus
            </h3>
            <p className="text-slate-300">
              Interactive Map Integration Goes Here
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
