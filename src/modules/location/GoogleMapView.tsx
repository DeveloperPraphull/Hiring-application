import { useEffect, useRef, useState } from "react";
import { MapPin, Loader2 } from "lucide-react";

interface GoogleMapViewProps {
  latitude: number;
  longitude: number;
  locationName: string;
  zoom?: number;
  height?: string;
  apiKey?: string;
}

/**
 * Interactive Google Map component.
 * If an API key is provided, renders an interactive JS map with a marker.
 * Otherwise, falls back to a Google Maps embed iframe.
 */
const GoogleMapView = ({
  latitude,
  longitude,
  locationName,
  zoom = 15,
  height = "400px",
  apiKey,
}: GoogleMapViewProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    // Check if API is already loaded
    if (window.google?.maps) {
      initMap();
      return;
    }

    // Load Google Maps API script
    const existingScript = document.querySelector(
      'script[src*="maps.googleapis.com"]'
    );
    if (existingScript) {
      existingScript.addEventListener("load", initMap);
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(apiKey)}`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    script.onerror = () => setError(true);
    document.head.appendChild(script);

    function initMap() {
      if (!mapRef.current || !window.google?.maps) return;
      const position = { lat: latitude, lng: longitude };
      const map = new window.google.maps.Map(mapRef.current, {
        center: position,
        zoom,
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
      });
      new window.google.maps.Marker({
        position,
        map,
        title: locationName,
      });
      setIsLoaded(true);
    }
  }, [apiKey, latitude, longitude, zoom, locationName]);

  // Fallback: iframe embed (no API key needed)
  if (!apiKey || error) {
    return (
      <div
        className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100"
        style={{ height }}
      >
        <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-100">
          <MapPin className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-gray-700">
            {locationName}
          </span>
        </div>
        <iframe
          title={`Map of ${locationName}`}
          src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=${zoom}&output=embed`}
          className="w-full border-0"
          style={{ height: `calc(${height} - 44px)` }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    );
  }

  return (
    <div
      className="w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100"
      style={{ height }}
    >
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-gray-100">
        <MapPin className="w-4 h-4 text-blue-600" />
        <span className="text-sm font-semibold text-gray-700">
          {locationName}
        </span>
      </div>
      <div ref={mapRef} className="w-full" style={{ height: `calc(${height} - 44px)` }}>
        {!isLoaded && (
          <div className="w-full h-full flex items-center justify-center bg-gray-50">
            <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
          </div>
        )}
      </div>
    </div>
  );
};

export default GoogleMapView;

// Extend Window for google maps types
declare global {
  interface Window {
    google?: {
      maps: {
        Map: new (el: HTMLElement, opts: object) => object;
        Marker: new (opts: object) => object;
      };
    };
  }
}
