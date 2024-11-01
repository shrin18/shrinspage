const photos = [
  {
    url: "https://raw.githubusercontent.com/shrin18/Cpractise/master/pexels-shrinish-donde-1323867-17520185.jpg",
    title: "Fjords: Norway",
  },
  {
    url: "https://raw.githubusercontent.com/shrin18/Cpractise/master/pexels-shrinish-donde-1323867-18145283.jpg",
    title: "Nature's beauty",
  },
  {
    url: "https://raw.githubusercontent.com/shrin18/Cpractise/master/pexels-shrinish-donde-1323867-18888351.jpg",
    title: "Stockholm Central",
  },
  {
    url: "https://raw.githubusercontent.com/shrin18/Cpractise/master/pexels-shrinish-donde-1323867-19008605.jpg",
    title: "Time Lapse",
  },
];

const Photography = () => {
  return (
    <section id="photography" className="py-16 bg-gradient-to-tl from-blue-600/20 via-orange-500/20 to-blue-600/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Photography
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg aspect-video hover:shadow-xl transition-shadow"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">{photo.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-slate-700">
            For more such photos, follow me on Pexels:{" "}
            <a
              href="https://www.pexels.com/@shrinish-donde-1323867/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-semibold"
            >
              Shrinish Donde
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Photography;
