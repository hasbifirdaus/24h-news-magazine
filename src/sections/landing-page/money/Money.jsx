import "./Money.css";

export default function Money() {
  return (
    <main className="money">
      <header className="money__header">
        <div className="money__header-container">
          <h2 className="money__header-title">Money</h2>
        </div>
      </header>

      <div className="money__grid">
        {[...Array(12)].map((_, index) => (
          <section className="money__content" key={index}>
            <div className="money__content-image" />
            <div className="money__content-text">
              <h1 className="money__content-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Blanditiis officia quis velit, sed dolor voluptates
                aliquam labore voluptas sint veritatis vel quod error a qui eos!
                Illo nihil consequatur tempora.
              </h1>
              <p className="money__content-author">by John Doe</p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
