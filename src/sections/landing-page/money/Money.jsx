import "./Money.css";

export default function Money() {
  return (
    <main className="money">
      <header className="money__header">
        <div className="money__header__container">
          <h2 className="money__header__title">Money</h2>
        </div>
      </header>

      <div className="money__content__grid">
        {[...Array(12)].map((_, index) => (
          <section className="money__content" key={index}>
            <div className="money__content__image" />
            <div className="money__content_text">
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
