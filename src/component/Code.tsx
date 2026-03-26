// import { useState, useEffect, useCallback } from "react";
// import * as XLSX from "xlsx";
// import {
//   Send,
//   CheckCircle2,
//   Download,
//   Trash2,
//   FileSpreadsheet,
//   Eye,
//   X,
// } from "lucide-react";

// /* ═══════════ Types ═══════════ */
// export interface Submission {
//   id: number;
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
//   date: string;
// }

// const STORAGE_KEY = "contact_submissions";
// const FILE_NAME = "contact_submissions";

// /* ═══════════ Excel helpers ═══════════ */
// function buildWorkbook(data: Submission[]) {
//   const rows = data.map((s, i) => ({
//     "#": i + 1,
//     Name: s.name,
//     Email: s.email,
//     Subject: s.subject,
//     Message: s.message,
//     Date: s.date,
//   }));
//   const ws = XLSX.utils.json_to_sheet(rows);
//   ws["!cols"] = [
//     { wch: 5 },
//     { wch: 22 },
//     { wch: 28 },
//     { wch: 28 },
//     { wch: 45 },
//     { wch: 22 },
//   ];
//   const wb = XLSX.utils.book_new();
//   XLSX.utils.book_append_sheet(wb, ws, "Contact Submissions");
//   return wb;
// }

// function downloadExcel(data: Submission[]) {
//   if (data.length === 0) return;
//   const wb = buildWorkbook(data);
//   XLSX.writeFile(
//     wb,
//     `${FILE_NAME}_${new Date().toISOString().slice(0, 10)}.xlsx`
//   );
// }

// /* ═══════════ Component ═══════════ */
// const ContactForm = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });
//   const [submissions, setSubmissions] = useState<Submission[]>([]);
//   const [viewEntry, setViewEntry] = useState<Submission | null>(null);
//   const [autoExport, setAutoExport] = useState(true);

//   // Load from localStorage
//   useEffect(() => {
//     const saved = localStorage.getItem(STORAGE_KEY);
//     if (saved) setSubmissions(JSON.parse(saved));
//   }, []);

//   // Persist to localStorage
//   const persist = useCallback((data: Submission[]) => {
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
//   }, []);

//   // Auto-export to Excel after every submission
//   const autoDownload = useCallback(
//     (data: Submission[]) => {
//       if (autoExport && data.length > 0) {
//         downloadExcel(data);
//       }
//     },
//     [autoExport]
//   );

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newEntry: Submission = {
//       id: Date.now(),
//       name: formData.name,
//       email: formData.email,
//       subject: formData.subject,
//       message: formData.message,
//       date: new Date().toLocaleString(),
//     };
//     const updated = [newEntry, ...submissions];
//     setSubmissions(updated);
//     persist(updated);
//     autoDownload(updated);
//     setFormSubmitted(true);
//     setTimeout(() => setFormSubmitted(false), 4000);
//     setFormData({ name: "", email: "", subject: "", message: "" });
//   };

//   const deleteEntry = (id: number) => {
//     const updated = submissions.filter((s) => s.id !== id);
//     setSubmissions(updated);
//     persist(updated);
//   };

//   const clearAll = () => {
//     setSubmissions([]);
//     localStorage.removeItem(STORAGE_KEY);
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 sm:p-9">
//       {/* Header */}
//       <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
//         Send us a Message
//       </h2>
//       <p className="text-sm text-gray-400 mb-7">
//         Fill out the form and we'll get back to you shortly.
//       </p>

//       {/* Success banner */}
//       {formSubmitted && (
//         <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 text-sm font-medium animate-[fadeIn_0.3s]">
//           <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
//           <span>
//             Message sent successfully!
//             {autoExport && " Excel file downloaded automatically."}
//           </span>
//         </div>
//       )}

//       {/* ═══════ Form ═══════ */}
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//           <div>
//             <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
//               Your Name
//             </label>
//             <input
//               type="text"
//               required
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               placeholder="John Doe"
//               className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
//             />
//           </div>
//           <div>
//             <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
//               Email Address
//             </label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               placeholder="john@example.com"
//               className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
//             Subject
//           </label>
//           <input
//             type="text"
//             required
//             value={formData.subject}
//             onChange={(e) =>
//               setFormData({ ...formData, subject: e.target.value })
//             }
//             placeholder="How can we help?"
//             className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
//           />
//         </div>

//         <div>
//           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
//             Message
//           </label>
//           <textarea
//             required
//             rows={5}
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//             placeholder="Tell us more about your inquiry..."
//             className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition resize-none"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full flex items-center justify-center gap-2 py-4 bg-[#1e3a6e] hover:bg-[#163058] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm tracking-wide"
//         >
//           <Send className="w-4 h-4" />
//           Send Message
//         </button>
//       </form>

//       {/* ═══════ Submissions Panel ═══════ */}
//       {submissions.length > 0 && (
//         <div className="mt-8 pt-6 border-t border-gray-100">
//           {/* Toolbar */}
//           <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
//             <div className="flex items-center gap-2">
//               <FileSpreadsheet className="w-5 h-5 text-green-600" />
//               <h3 className="text-base font-bold text-gray-800">
//                 Submissions ({submissions.length})
//               </h3>
//             </div>

//             <div className="flex flex-wrap items-center gap-2">
//               {/* Auto-export toggle */}
//               <label className="flex items-center gap-1.5 text-xs text-gray-500 cursor-pointer select-none bg-gray-50 rounded-lg px-3 py-2">
//                 <input
//                   type="checkbox"
//                   checked={autoExport}
//                   onChange={(e) => setAutoExport(e.target.checked)}
//                   className="accent-green-600 w-3.5 h-3.5"
//                 />
//                 Auto Export
//               </label>

//               <button
//                 onClick={() => downloadExcel(submissions)}
//                 className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow-md transition-all"
//               >
//                 <Download className="w-3.5 h-3.5" />
//                 Export Excel
//               </button>
//               <button
//                 onClick={clearAll}
//                 className="flex items-center gap-1.5 px-3 py-2 bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold rounded-lg transition-all"
//               >
//                 <Trash2 className="w-3.5 h-3.5" />
//                 Clear
//               </button>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-x-auto rounded-xl border border-gray-200">
//             <table className="w-full text-left text-sm">
//               <thead>
//                 <tr className="bg-gray-50">
//                   <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
//                     #
//                   </th>
//                   <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
//                     Name
//                   </th>
//                   <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
//                     Email
//                   </th>
//                   <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
//                     Subject
//                   </th>
//                   <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
//                     Message
//                   </th>
//                   <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
//                     Date
//                   </th>
//                   <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {submissions.map((s, i) => (
//                   <tr
//                     key={s.id}
//                     className="border-t border-gray-100 hover:bg-blue-50/30 transition"
//                   >
//                     <td className="px-4 py-3 text-gray-400 font-medium">
//                       {i + 1}
//                     </td>
//                     <td className="px-4 py-3 text-gray-700 font-medium whitespace-nowrap">
//                       {s.name}
//                     </td>
//                     <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
//                       {s.email}
//                     </td>
//                     <td className="px-4 py-3 text-gray-500 max-w-[140px] truncate">
//                       {s.subject}
//                     </td>
//                     <td className="px-4 py-3 text-gray-500 max-w-[180px] truncate">
//                       {s.message}
//                     </td>
//                     <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
//                       {s.date}
//                     </td>
//                     <td className="px-4 py-3">
//                       <div className="flex gap-1">
//                         <button
//                           onClick={() => setViewEntry(s)}
//                           className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition"
//                           title="View"
//                         >
//                           <Eye className="w-3.5 h-3.5" />
//                         </button>
//                         <button
//                           onClick={() => deleteEntry(s.id)}
//                           className="p-1.5 rounded-lg hover:bg-red-50 text-red-400 transition"
//                           title="Delete"
//                         >
//                           <Trash2 className="w-3.5 h-3.5" />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}

//       {/* ═══════ View modal ═══════ */}
//       {viewEntry && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
//           <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative">
//             <button
//               onClick={() => setViewEntry(null)}
//               className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition"
//             >
//               <X className="w-5 h-5" />
//             </button>

//             <h3 className="text-lg font-extrabold text-gray-800 mb-5">
//               Submission Details
//             </h3>

//             <div className="space-y-4">
//               {[
//                 { label: "Name", value: viewEntry.name },
//                 { label: "Email", value: viewEntry.email },
//                 { label: "Subject", value: viewEntry.subject },
//                 { label: "Date", value: viewEntry.date },
//               ].map((f) => (
//                 <div key={f.label}>
//                   <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
//                     {f.label}
//                   </span>
//                   <span className="text-sm text-gray-700 font-medium">
//                     {f.value}
//                   </span>
//                 </div>
//               ))}
//               <div>
//                 <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
//                   Message
//                 </span>
//                 <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">
//                   {viewEntry.message}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;

// // use mail to send data 

// import { useState } from "react";
// import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

// // Web3Forms access key — get yours free at https://web3forms.com
// const WEB3FORMS_KEY = "c3e7cc52-4e4f-41d9-8b7f-a6555307183d";

// /* ═══════════ Component ═══════════ */
// const ContactForm = () => {
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const res = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           access_key: WEB3FORMS_KEY,
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//           from_name: "Contact Form",
//           to: "developer.praphull@gmail.com",
//         }),
//       });

//       const data = await res.json();
//       if (data.success) {
//         setFormSubmitted(true);
//         setTimeout(() => setFormSubmitted(false), 5000);
//         setFormData({ name: "", email: "", subject: "", message: "" });
//       } else {
//         setError(data.message || "Failed to send message. Please try again.");
//       }
//     } catch {
//       setError("Network error. Please check your connection and try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-7 sm:p-9">
//       {/* Header */}
//       <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
//         Send us a Message
//       </h2>
//       <p className="text-sm text-gray-400 mb-7">
//         Fill out the form and we'll get back to you shortly.
//       </p>

//       {/* Success banner */}
//       {formSubmitted && (
//         <div className="flex items-center gap-3 bg-green-50 border border-green-200 text-green-700 rounded-xl p-4 mb-6 text-sm font-medium animate-[fadeIn_0.3s]">
//           <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
//           Message sent successfully! We'll get back to you shortly.
//         </div>
//       )}

//       {/* Error banner */}
//       {error && (
//         <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 mb-6 text-sm font-medium animate-[fadeIn_0.3s]">
//           <AlertCircle className="w-5 h-5 flex-shrink-0" />
//           {error}
//         </div>
//       )}


//       {/* ═══════ Form ═══════ */}
//       <form onSubmit={handleSubmit} className="space-y-5">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//           <div>
//             <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
//               Your Name
//             </label>
//             <input
//               type="text"
//               required
//               value={formData.name}
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               placeholder="John Doe"
//               className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
//             />
//           </div>
//           <div>
//             <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
//               Email Address
//             </label>
//             <input
//               type="email"
//               required
//               value={formData.email}
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               placeholder="john@example.com"
//               className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
//             />
//           </div>
//         </div>

//         <div>
//           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
//             Subject
//           </label>
//           <input
//             type="text"
//             required
//             value={formData.subject}
//             onChange={(e) =>
//               setFormData({ ...formData, subject: e.target.value })
//             }
//             placeholder="How can we help?"
//             className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition"
//           />
//         </div>

//         <div>
//           <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block">
//             Message
//           </label>
//           <textarea
//             required
//             rows={5}
//             value={formData.message}
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//             placeholder="Tell us more about your inquiry..."
//             className="w-full border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-gray-700 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent bg-gray-50/50 transition resize-none"
//           />
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full flex items-center justify-center gap-2 py-4 bg-[#1e3a6e] hover:bg-[#163058] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all text-sm tracking-wide"
//         >
//           {loading ? (
//             <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</>
//           ) : (
//             <><Send className="w-4 h-4" /> Send Message</>
//           )}
//         </button>
//       </form>


//     </div>
//   );
// };

// export default ContactForm;







































// working import code with emailjs


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
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: "", email: "", subject: "", message: "" });
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
