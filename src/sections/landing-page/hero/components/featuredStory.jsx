function FeaturedStory({ image, title, author }) {
  return (
    <div className="hero__featured">
      <img src={image} alt="hero-image" className="hero__featured-image" />

      <div className="hero__featured-overlay">
        <h1 className="hero__featured-title">{title}</h1>
        <h2 className="hero__featured-meta">{author}</h2>
      </div>

      <div className="hero__featured-gradient" />
    </div>
  );
}

export default FeaturedStory;
