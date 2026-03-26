import { MapPin, Building2, Globe, Phone, Clock, Mail } from "lucide-react";
import LocationCard from "./LocationCard";
import GoogleMapView from "./GoogleMapView";

const LOCATION = {
  name: "Shalimar Swayam Flats",
  lat: 22.7721543,
  lng: 75.8762416,
  address: "Shalimar Swayam Flats, Kumedi, Indore, Madhya Pradesh, India",
  phone: "+91 731 XXX XXXX",
  email: "contact@company.com",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM",
};

const LocationPage = () => {
  return (
    <div
      className="min-h-screen w-full bg-gradient-to-b from-[#dce8f8] via-[#e8f0fb] to-[#f0f6fd] px-4 py-10"
      style={{ fontFamily: "Inter, sans-serif" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Page header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur rounded-full px-5 py-2 mb-4 shadow-sm border border-white/50">
            <MapPin className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-gray-600">
              Our Location
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
            Office Location
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Visit us at our office. Click the button to open directions in
            Google Maps — works on desktop &amp; mobile.
          </p>
        </div>

        {/* Main content — card + contact details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start mb-10">
          <LocationCard
            latitude={LOCATION.lat}
            longitude={LOCATION.lng}
            locationName={LOCATION.name}
            showPreview
          />

          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-7 h-full flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1e3a6e] rounded-xl flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-800">
                  Contact Details
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Globe className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
                      Address
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      {LOCATION.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
                      Phone
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      {LOCATION.phone}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
                      Email
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      {LOCATION.email}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-purple-600" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
                      Working Hours
                    </span>
                    <span className="text-sm text-gray-700 font-medium">
                      {LOCATION.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width map */}
        <GoogleMapView
          latitude={LOCATION.lat}
          longitude={LOCATION.lng}
          locationName={LOCATION.name}
          height="400px"
          zoom={17}
        />
      </div>
    </div>
  );
};

export default LocationPage;
