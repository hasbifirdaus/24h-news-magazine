import "./HealthNews.css";

export default function HealthNews() {
  return (
    <main className="health-news">
      <header className="health-news__header">
        <div className="health-news__header-container">
          <h2 className="health-news__header-title">Health News</h2>
        </div>
      </header>

      <div className="health-news__grid">
        {[...Array(4)].map((_, index) => (
          <section className="health-news__content" key={index}>
            <div className="health-news__content-image" />
            <div className="health-news__content-text">
              <h1 className="health-news__content-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Blanditiis officia quis velit, sed dolor voluptates
                aliquam labore voluptas sint veritatis vel quod error a qui eos!
                Illo nihil consequatur tempora.
              </h1>
              <p className="health-news__content-author">by John Doe</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
