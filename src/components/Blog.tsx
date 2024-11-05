import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Define the highlighted countries' ISO codes
const highlightedCountries = [
  "SWE", "DNK", "DEU", "AUT", "CZE", "HUN", "POL", "CHE", "NLD", "FRA", "ESP", "HRV"
];

// Local GeoJSON path for Europe map
const europeMapUrl = "europe.geojson";

const blogPosts = [
  {
    title: "Discovering France's Hidden River Gems - Nice",
    date: "August 8, 2024",
    excerpt: "Uncover the beauty of France's river scenes in Nice, a journey through breathtaking waterways...",
    imageUrl: "https://raw.githubusercontent.com/shrin18/Cpractise/3f79cb3f6dea7d557946202de26b558d578a53a6/france1.jpg",
    link: "https://reachingnewplaces.wordpress.com/2024/08/08/discovering-frances-hidden-river-gems-nice/",
  },
  {
    title: "Croatia: A Gem on the Mediterranean Sea 🌊✨",
    date: "July 18, 2024",
    excerpt: "Exploring Croatia's stunning coastal towns, vibrant culture, and azure waters...",
    imageUrl: "https://raw.githubusercontent.com/shrin18/Cpractise/master/croatia2.png",
    link: "https://reachingnewplaces.wordpress.com/2024/07/18/%f0%9f%87%ad%f0%9f%87%b7-croatia-a-gem-on-the-mediterranean-sea-%f0%9f%8c%8a%e2%9c%a8/",
  },
  {
    title: "Norway: The Land of Fjords 🇳🇴",
    date: "July 17, 2023",
    excerpt: "Venturing through Norway on a budget, with majestic fjords and awe-inspiring landscapes...",
    imageUrl: "https://raw.githubusercontent.com/shrin18/Cpractise/master/norway3.png",
    link: "https://reachingnewplaces.wordpress.com/2023/07/17/norway-%f0%9f%87%b3%f0%9f%87%b4-the-land-of-fjords/",
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-gradient-to-tr from-orange-500/20 via-blue-600/20 to-orange-500/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Latest Travel Posts
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </a>
              <CardHeader>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <p className="text-sm text-slate-500">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="https://reachingnewplaces.wordpress.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            For more travel posts, click here
          </a>
        </div>

        {/* Interactive Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-4">Countries I’ve Visited in Europe</h3>
          <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{ center: [10, 50], scale: 600 }}>
            <Geographies geography={europeMapUrl}>
              {({ geographies }) =>
                geographies.map((geo) => {
                  // Check if country is in the highlighted list
                  const isHighlighted = highlightedCountries.includes(geo.properties.ISO_A3);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill={isHighlighted ? "#FF5722" : "#ECEFF1"}
                      stroke="#607D8B"
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#FFC107", outline: "none" },
                        pressed: { outline: "none" }
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </section>
  );
};

export default Blog;
