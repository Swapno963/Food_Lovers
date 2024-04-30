export default function LocalBusinessScript({ food }) {
  const foodName = encodeURIComponent(food?.name);

  const formattedData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    image: food?.thubnail,
    name: foodName,
    address: {
      "@type": "PostalAddress",
      streetAddress: "148 W 51st St",
      addressLocality: "New York",
      addressRegion: "NY",
      postalCode: "10019",
      addressCountry: "US",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: food?.rating,
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: food?.author,
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.761293,
      longitude: -73.982294,
    },
    url: "https://www.example.com/restaurant-locations/manhattan",
    telephone: "+12122459600",
    servesCuisine: "American",
    priceRange: "$$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday"],
        opens: "11:30",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Wednesday", "Thursday", "Friday"],
        opens: "11:30",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "16:00",
        closes: "23:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "16:00",
        closes: "22:00",
      },
    ],
    menu: "https://www.example.com/menu",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(formattedData),
        }}
      ></script>
    </>
  );
}
