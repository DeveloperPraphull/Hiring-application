import { Mail, Linkedin } from "lucide-react";

export default function MarketingUpdate() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-50 flex flex-col items-center py-12 px-4">

      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-700 mb-10">
        Update for Email, Linkedin, and Linkedin markets
      </h1>

      {/* Cards Container */}
      <div className="flex gap-8 w-full max-w-6xl">

        {/* EMAIL CARD */}
        <div className="bg-white rounded-xl shadow-lg w-1/2 overflow-hidden">

          {/* Header */}
          <div className="bg-blue-500 text-white flex items-center gap-2 px-5 py-3">
            <Mail size={20} />
            <span className="font-semibold text-lg">Email</span>
          </div>

          {/* Body */}
          <div className="p-6">

            <h3 className="text-gray-500 mb-4">
              Audience Segmentation
            </h3>

            <div className="flex justify-between text-gray-700">

              <div>
                <p className="text-3xl font-bold">6,800</p>
                <p className="text-sm text-gray-400">Contacts</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">540</p>
                <p className="text-sm text-gray-400">Clicks</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">7.9%</p>
                <p className="text-sm text-gray-400">Open Rate</p>
              </div>

            </div>

            {/* Bottom Info */}
            <div className="mt-6 bg-gray-100 p-3 rounded-lg flex items-center gap-3">
              <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center">
                ▶
              </div>
              <p className="text-sm text-gray-600">
                Product launch newsletter sent to segmented subscribers
              </p>
            </div>

          </div>
        </div>


        {/* LINKEDIN CARD */}
        <div className="bg-white rounded-xl shadow-lg w-1/2 overflow-hidden">

          {/* Header */}
          <div className="bg-blue-600 text-white flex items-center gap-2 px-5 py-3">
            <Linkedin size={20} />
            <span className="font-semibold text-lg">Linkedin</span>
          </div>

          {/* Body */}
          <div className="p-6">

            <h3 className="text-gray-500 mb-4">
              Sponsored Update
            </h3>

            <div className="flex justify-between text-gray-700">

              <div>
                <p className="text-3xl font-bold">23,400</p>
                <p className="text-sm text-gray-400">Impressions</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">240</p>
                <p className="text-sm text-gray-400">Clicks</p>
              </div>

              <div>
                <p className="text-2xl font-semibold">90</p>
                <p className="text-sm text-gray-400">Leads</p>
              </div>

            </div>

            {/* Bottom Info */}
            <div className="mt-6 bg-gray-100 p-3 rounded-lg flex items-center gap-3">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                f
              </div>
              <p className="text-sm text-gray-600">
                New thought leadership article published on company page
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}