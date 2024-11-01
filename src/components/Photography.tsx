const photos = [
  {
    url: "https://raw.githubusercontent.com/shrin18/Cpractise/3f79cb3f6dea7d557946202de26b558d578a53a6/france1.jpg",
    title: "Technology in Motion",
  },
  {
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    title: "Creative Workspace",
  },
  {
    url: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b",
    title: "Innovation Light",
  },
  {
    url: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c",
    title: "Digital Tools",
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
      </div>
    </section>
  );
};

export default Photography;
