import "./HealthNews.css";

export default function HealthNews() {
  return (
    <main className="health">
      <header className="health__header">
        <div className="health__header__container">
          <h2 className="health__header__title">Health News</h2>
        </div>
      </header>

      <div className="health__content__grid">
        {[...Array(4)].map((_, index) => (
          <section className="health__content" key={index}>
            <div className="health__content__image" />
            <div className="health__content_text">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Blanditiis officia quis velit, sed dolor voluptates
                aliquam labore voluptas sint veritatis vel quod error a qui eos!
                Illo nihil consequatur tempora.
              </h1>
              <p>by John Doe</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
