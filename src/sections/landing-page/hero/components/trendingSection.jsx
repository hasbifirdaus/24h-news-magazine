function TrendingSection() {
  return (
    <div className="hero__trending">
      <h1 className="hero__trending-title">TRENDING NOW</h1>
      <hr className="hero__trending-divider" />
      <p className="hero__trending-list">
        {topics.map((topic, index) => (
          <>
            <span key={index}>{topic.title}</span>
            <br />
          </>
        ))}
      </p>
    </div>
  );
}

export default TrendingSection;
