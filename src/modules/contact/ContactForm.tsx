import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// ═══════ EmailJS Config ═══════
// 1. Go to https://www.emailjs.com → Sign up free
// 2. Add "Gmail" email service → copy the Service ID
// 3. Create an email template with variables: {{name}}, {{email}}, {{subject}}, {{message}}
//    → copy the Template ID
// 4. Go to Account → copy your Public Key
// 5. Paste all three below:
const EMAILJS_SERVICE_ID = "service_dogc548";
const EMAILJS_TEMPLATE_ID = "template_ebrvvxr";
const EMAILJS_PUBLIC_KEY = "xBH1YYsF234IMBq2e";

/* ═══════════ Component ═══════════ */
const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : typeof err === "object" && err !== null && "text" in err ? String((err as { text: string }).text) : "Unknown error";
      console.error("EmailJS Error:", err);
      setError(`Failed to send: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 sm:p-9">
      {/* Header */}
      <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
        Send us a Message
      </h2>
      <p className="text-sm text-gray-400 mb-7">
        Fill out the form and we'll get back to you shortly.
      </p>

      {/* Success banner */}
      {formSubmitted && (
        <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 text-sm font-medium animate-[fadeIn_0.3s]">
          <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
          Message sent successfully to developer.praphull@gmail.com!
        </div>
      )}

      {/* Error banner */}
      {error && (
        <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm font-medium animate-[fadeIn_0.3s]">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          {error}
        </div>
      )}


      {/* ═══════ Form ═══════ */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
              Your Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="John Doe"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
            />
          </div>
          <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="john@example.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
            Phone Number
          </label>
          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            placeholder="+91 98765 43210"
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
            Subject
          </label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
            placeholder="How can we help?"
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
            Message
          </label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Tell us more about your inquiry..."
            className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-4 bg-[#1e3a6e] hover:bg-[#163058] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm tracking-wide"
        >
          {loading ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
          ) : (
            <><Send className="w-4 h-4" /> Send Message</>
          )}
        </button>
      </form>


    </div>
  );
};

export default ContactForm;
