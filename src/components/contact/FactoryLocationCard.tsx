const googleMapsUrl = "https://maps.app.goo.gl/CxshxEnCyeR7phV86";

export function FactoryLocationCard() {
  return (
    <section className="factory-location-section" aria-labelledby="factory-location-title">
      <div className="factory-location-copy">
        <span className="section-kicker">FACTORY LOCATION</span>
        <h2 id="factory-location-title">Visit Our Factory in Ningbo</h2>
        <p>
          Sunrise is located in Beilun, Ningbo, close to one of China&apos;s major export ports.
        </p>
      </div>

      <a
        className="factory-map-card"
        href={googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Sunrise factory location in Google Maps"
      >
        <span className="factory-map-preview" aria-hidden="true">
          <span className="factory-map-road factory-map-road-a" />
          <span className="factory-map-road factory-map-road-b" />
          <span className="factory-map-road factory-map-road-c" />
          <span className="factory-map-pin">
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z" />
              <circle cx="12" cy="9" r="2.4" />
            </svg>
          </span>
        </span>

        <span className="factory-map-info">
          <span className="factory-map-title">
            Ningbo Sunrise Environmental Protection Solution Co., Ltd.
          </span>
          <span className="factory-map-address">
            222 Lehai Rd, Beilun District, Ningbo, Zhejiang, China 315800
          </span>
          <span className="factory-map-note">
            Beilun factory location with convenient access to export logistics and port shipping.
          </span>
          <span className="factory-map-cta">Open in Google Maps</span>
        </span>
      </a>
    </section>
  );
}
