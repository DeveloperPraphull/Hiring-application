import React from "react";

export default function ContactPage() {
  const contacts = [
    {
      title: "Consumer Support",
      desc: "Questions about payments or account issues",
      icon: "💬",
    },
    {
      title: "Business Partners",
      desc: "Work with Jeton as a partner",
      icon: "🤝",
    },
    {
      title: "Media",
      desc: "Press and journalist inquiries",
      icon: "📰",
    },
    {
      title: "Careers",
      desc: "Join our global team",
      icon: "🚀",
    },
  ];

  const faqs = [
    {
      q: "How do I contact Jeton support?",
      a: "You can reach our support team through live chat or the contact form below."
    },
    {
      q: "How long does support take to respond?",
      a: "Most queries are answered within 24 hours."
    },
    {
      q: "Where can I track my payments?",
      a: "You can track payments in your Jeton dashboard."
    }
  ];

  return (
    <div className="font-sans min-w-screen bg-gray-50">




      {/* HERO */}
      <div className="bg-gradient-to-r from-[#ff3c1f] to-[#ff6a3d] text-white py-28 text-center">

        <h1 className="text-5xl font-bold mb-6">
          Contact Jeton
        </h1>

        <p className="opacity-90 text-lg">
          Our team is ready to help you anytime
        </p>

      </div>


      {/* CONTACT CARDS */}
      <div className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {contacts.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
          >

            <div className="text-4xl mb-4">{item.icon}</div>

            <h3 className="text-xl text-gray-800 font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500">
              {item.desc}
            </p>

          </div>
        ))}

      </div>


      {/* SUPPORT CHANNELS */}
      <div className="bg-white py-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <h3 className="text-xl text-gray-800 font-semibold mb-3">Live Chat</h3>
            <p className="text-gray-500 mb-4">Talk instantly with support.</p>
            <button className="bg-[#ff3c1f] text-white px-6 py-2 rounded-lg">
              Start Chat
            </button>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <h3 className="text-xl text-gray-800 font-semibold mb-3">Email Support</h3>
            <p className="text-gray-500 mb-4">Send us your questions.</p>
            <button className="bg-[#ff3c1f] text-white px-6 py-2 rounded-lg">
              Send Email
            </button>
          </div>

          <div className="p-6 bg-gray-50 rounded-xl text-center">
            <h3 className="text-xl text-gray-800 font-semibold mb-3">Help Center</h3>
            <p className="text-gray-500 mb-4">Browse FAQs and guides.</p>
            <button className="bg-[#ff3c1f] text-white px-6 py-2 rounded-lg">
              View Help
            </button>
          </div>

        </div>

      </div>


      {/* CONTACT FORM */}
      <div className="bg-gray-100 ext-gray-800 py-20">

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-xl shadow-lg">

          <h2 className="text-3xl text-gray-800 font-bold mb-6 text-center">
            Send us a message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg text-gray-800"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 text-gray-800 rounded-lg"
            />

            <textarea
              placeholder="Your Message"
              className="w-full border p-3 text-gray-800 rounded-lg"
            ></textarea>

            <button className="bg-[#ff3c1f] text-white px-8 py-3 rounded-lg w-full">
              Submit
            </button>

          </form>

        </div>

      </div>


      {/* FAQ */}
      <div className="py-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="max-w-4xl mx-auto space-y-6 px-6">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow text-gray-800"
            >

              <h3 className="font-semibold text-lg mb-2">
                {faq.q}
              </h3>

              <p className="text-gray-500">
                {faq.a}
              </p>

            </div>
          ))}

        </div>

      </div>


      {/* CTA */}
      <div className="bg-gradient-to-r from-[#ff3c1f] to-[#ff6a3d] text-white py-20 text-center">

        <h2 className="text-4xl font-bold mb-4">
          Still Need Help?
        </h2>

        <button className="bg-white text-[#ff3c1f] px-8 py-3 rounded-xl font-semibold hover:scale-105 transition">
          Contact Support
        </button>

      </div>




    </div>
  );
}