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
            src="https://soundcloud.com/shrinish-donde"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Music;
