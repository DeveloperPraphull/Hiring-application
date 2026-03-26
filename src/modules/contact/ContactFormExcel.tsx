import { useState, useEffect, useCallback, useMemo } from "react";
import emailjs from "@emailjs/browser";
import * as XLSX from "xlsx";
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Download,
  Trash2,
  FileSpreadsheet,
  Eye,
  X,
  Search,
  User,
  Mail,
  Phone,
  MessageSquare,
  Tag,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Calendar,
  Clock,
} from "lucide-react";

// EmailJS credentials
const EMAILJS_SERVICE_ID = "service_dogc548";
const EMAILJS_TEMPLATE_ID = "template_ebrvvxr";
const EMAILJS_PUBLIC_KEY = "xBH1YYsF234IMBq2e";

const STORAGE_KEY = "contact_submissions";
const ROWS_PER_PAGE = 5;

interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  date: string;
}

/* ═══════════ Excel helpers ═══════════ */
function buildExcelFile(data: Submission[]): File {
  const rows = data.map((s, i) => ({
    "#": i + 1,
    Name: s.name,
    Email: s.email,
    Phone: s.phone,
    Subject: s.subject,
    Message: s.message,
    Date: s.date,
  }));
  const ws = XLSX.utils.json_to_sheet(rows);
  ws["!cols"] = [
    { wch: 5 },
    { wch: 22 },
    { wch: 28 },
    { wch: 16 },
    { wch: 28 },
    { wch: 45 },
    { wch: 22 },
  ];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Contact Submissions");
  const buf = XLSX.write(wb, { bookType: "xlsx", type: "array" });
  return new File(
    [buf],
    `contact_submissions_${new Date().toISOString().slice(0, 10)}.xlsx`,
    { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }
  );
}

function downloadExcelFile(data: Submission[]) {
  if (data.length === 0) return;
  const file = buildExcelFile(data);
  const url = URL.createObjectURL(file);
  const a = document.createElement("a");
  a.href = url;
  a.download = file.name;
  a.click();
  URL.revokeObjectURL(url);
}

/* ═══════════ Component ═══════════ */
const ContactFormExcel = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [viewEntry, setViewEntry] = useState<Submission | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortNewest, setSortNewest] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [confirmClear, setConfirmClear] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setSubmissions(JSON.parse(saved));
  }, []);

  const persist = useCallback((data: Submission[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }, []);

  // Filtered + sorted submissions
  const filteredSubs = useMemo(() => {
    let result = [...submissions];
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.email.toLowerCase().includes(q) ||
          s.phone.toLowerCase().includes(q) ||
          s.subject.toLowerCase().includes(q)
      );
    }
    if (!sortNewest) result.reverse();
    return result;
  }, [submissions, searchQuery, sortNewest]);

  const totalPages = Math.max(1, Math.ceil(filteredSubs.length / ROWS_PER_PAGE));
  const paginatedSubs = filteredSubs.slice(
    (currentPage - 1) * ROWS_PER_PAGE,
    currentPage * ROWS_PER_PAGE
  );

  // Stats
  const todayCount = useMemo(() => {
    const today = new Date().toLocaleDateString();
    return submissions.filter((s) => {
      try { return new Date(s.date).toLocaleDateString() === today; } catch { return false; }
    }).length;
  }, [submissions]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const newEntry: Submission = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      date: new Date().toLocaleString(),
    };
    const updated = [newEntry, ...submissions];
    setSubmissions(updated);
    persist(updated);

    // Send email via EmailJS (no attachment — avoids 50KB limit)
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

      // Auto-download updated Excel file
      downloadExcelFile(updated);

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err !== null && "text" in err
            ? String((err as { text: string }).text)
            : "Unknown error";
      console.error("EmailJS Error:", err);
      setError(`Failed to send: ${msg}`);
    } finally {
      setLoading(false);
    }
  };

  const deleteEntry = (id: number) => {
    const updated = submissions.filter((s) => s.id !== id);
    setSubmissions(updated);
    persist(updated);
    if (paginatedSubs.length === 1 && currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const clearAll = () => {
    if (!confirmClear) {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 3000);
      return;
    }
    setSubmissions([]);
    localStorage.removeItem(STORAGE_KEY);
    setConfirmClear(false);
    setCurrentPage(1);
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
          Email sent + Excel file downloaded! Check your inbox & downloads.
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
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> Sending...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" /> Send Message
            </>
          )}
        </button>
      </form>

      {/* ═══════ Submissions Panel ═══════ */}
      {submissions.length > 0 && (
        <div className="mt-8 pt-6 border-t border-gray-100">
          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <BarChart3 className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-[10px] uppercase tracking-wider text-blue-500 font-bold">Total</span>
              </div>
              <span className="text-xl font-extrabold text-blue-700">{submissions.length}</span>
            </div>
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-green-500" />
                <span className="text-[10px] uppercase tracking-wider text-green-500 font-bold">Today</span>
              </div>
              <span className="text-xl font-extrabold text-green-700">{todayCount}</span>
            </div>
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <div className="flex items-center justify-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-purple-500" />
                <span className="text-[10px] uppercase tracking-wider text-purple-500 font-bold">Latest</span>
              </div>
              <span className="text-xs font-bold text-purple-700 leading-tight">{submissions[0]?.date.split(",")[0]}</span>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-green-600" />
              <h3 className="text-base font-bold text-gray-800">
                Submissions
                {searchQuery && <span className="text-gray-400 font-normal text-sm"> ({filteredSubs.length} found)</span>}
              </h3>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => downloadExcelFile(submissions)}
                className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <Download className="w-3.5 h-3.5" />
                Excel
              </button>
              <button
                onClick={clearAll}
                className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all ${
                  confirmClear
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-red-50 hover:bg-red-100 text-red-600"
                }`}
              >
                <Trash2 className="w-3.5 h-3.5" />
                {confirmClear ? "Confirm?" : "Clear"}
              </button>
            </div>
          </div>

          {/* Search + Sort */}
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                placeholder="Search by name, email, phone, subject..."
                className="w-full pl-9 pr-4 py-2.5 text-xs border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent bg-gray-50/50 transition"
              />
            </div>
            <button
              onClick={() => setSortNewest(!sortNewest)}
              className="flex items-center gap-1 px-3 py-2.5 text-xs font-semibold border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600 transition"
              title={sortNewest ? "Newest first" : "Oldest first"}
            >
              <ArrowUpDown className="w-3.5 h-3.5" />
              {sortNewest ? "Newest" : "Oldest"}
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">#</th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> Name</span>
                  </th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> Email</span>
                  </th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> Phone</span>
                  </th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    <span className="flex items-center gap-1"><Tag className="w-3 h-3" /> Subject</span>
                  </th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">
                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> Message</span>
                  </th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">Date</th>
                  <th className="px-4 py-3 text-[10px] uppercase tracking-wider text-gray-500 font-bold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginatedSubs.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="px-4 py-8 text-center text-gray-400 text-sm">
                      No submissions match your search.
                    </td>
                  </tr>
                ) : (
                  paginatedSubs.map((s, i) => (
                    <tr
                      key={s.id}
                      className="border-t border-gray-100 hover:bg-blue-50/30 transition"
                    >
                      <td className="px-4 py-3 text-gray-400 font-medium">
                        {(currentPage - 1) * ROWS_PER_PAGE + i + 1}
                      </td>
                      <td className="px-4 py-3 text-gray-700 font-medium whitespace-nowrap">{s.name}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{s.email}</td>
                      <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{s.phone}</td>
                      <td className="px-4 py-3 text-gray-500 max-w-[140px] truncate">{s.subject}</td>
                      <td className="px-4 py-3 text-gray-500 max-w-[160px] truncate">{s.message}</td>
                      <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{s.date}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1">
                          <button
                            onClick={() => setViewEntry(s)}
                            className="p-1.5 rounded-lg hover:bg-blue-50 text-blue-500 transition"
                            title="View"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => deleteEntry(s.id)}
                            className="p-1.5 rounded-lg hover:bg-red-50 text-red-400 transition"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-gray-400">
                Page {currentPage} of {totalPages} ({filteredSubs.length} entries)
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  <ChevronLeft className="w-4 h-4 text-gray-600" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition ${
                      p === currentPage
                        ? "bg-[#1e3a6e] text-white shadow-sm"
                        : "text-gray-500 hover:bg-gray-100"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className="p-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed transition"
                >
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ═══════ View Modal ═══════ */}
      {viewEntry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-6 sm:p-8 relative">
            <button
              onClick={() => setViewEntry(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-gray-100 text-gray-400 transition"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-extrabold text-gray-800 mb-5">
              Submission Details
            </h3>
            <div className="space-y-4">
              {[
                { label: "Name", value: viewEntry.name },
                { label: "Email", value: viewEntry.email },
                { label: "Phone", value: viewEntry.phone },
                { label: "Subject", value: viewEntry.subject },
                { label: "Date", value: viewEntry.date },
              ].map((f) => (
                <div key={f.label}>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
                    {f.label}
                  </span>
                  <span className="text-sm text-gray-700 font-medium">{f.value}</span>
                </div>
              ))}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
                  Message
                </span>
                <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4">
                  {viewEntry.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactFormExcel;
