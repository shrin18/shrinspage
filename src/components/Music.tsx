const Music = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Music Profile</h1>
        <div className="aspect-video w-full max-w-3xl mx-auto">
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/shrinish-donde&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Music;
