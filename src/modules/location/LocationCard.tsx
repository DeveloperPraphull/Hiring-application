import { MapPin, ExternalLink, Navigation } from "lucide-react";

interface LocationCardProps {
  latitude: number;
  longitude: number;
  locationName: string;
  showPreview?: boolean;
}

const LocationCard = ({
  latitude,
  longitude,
  locationName,
  showPreview = false,
}: LocationCardProps) => {
  const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;

  const handleViewOnMap = () => {
    window.open(mapsUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full max-w-md">
      {/* Static map preview */}
      {showPreview && (
        <div className="w-full h-48 bg-gray-100 relative overflow-hidden">
          <iframe
            title={`Map of ${locationName}`}
            src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          />
        </div>
      )}

      {/* Card body */}
      <div className="p-5 sm:p-6">
        {/* Location name with icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-bold text-gray-800 leading-tight">
            {locationName}
          </h3>
        </div>

        {/* Coordinates */}
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
              Latitude
            </span>
            <span className="text-sm font-mono font-bold text-gray-700">
              {latitude.toFixed(6)}
            </span>
          </div>
          <div className="flex-1 bg-gray-50 rounded-xl px-4 py-3">
            <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block mb-0.5">
              Longitude
            </span>
            <span className="text-sm font-mono font-bold text-gray-700">
              {longitude.toFixed(6)}
            </span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleViewOnMap}
            className="flex-1 flex items-center justify-center gap-2 bg-[#1e3a6e] hover:bg-[#163058] text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98]"
          >
            <Navigation className="w-4 h-4" />
            View on Map
          </button>
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-600 font-semibold py-3 px-4 rounded-xl transition-all active:scale-[0.98]"
            title="Open in new tab"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
