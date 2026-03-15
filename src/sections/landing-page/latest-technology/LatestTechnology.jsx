import "./LatestTechnology.css";

export default function LatestTechnology() {
  return (
    <main className="technology">
      <header className="technology__header">
        <div className="technology__header__container">
          <h2 className="technology__header__title">Latest Technology</h2>
        </div>
      </header>

      <section className="technology__content">
        <div className="technology__content__hero-box">
          <div className="technology__content__hero-box__image" />
          <div className="technology__content__hero-box__content">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis officia quis velit, sed dolor voluptates aliquam labore
              voluptas sint veritatis vel quod error a qui eos! Illo nihil
              consequatur tempora.
            </h1>
            <p>by John Doe</p>
          </div>
        </div>

        <div className="technology__content__grid__article">
          {[...Array(3)].map((_, index) => (
            <article className="technology__content__article" key={index}>
              <div className="technology__content__article__image" />
              <div className="technology__content__article__content">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Blanditiis officia quis velit, sed dolor voluptates
                  aliquam labore voluptas sint veritatis vel quod error a qui
                  eos! Illo nihil consequatur tempora.
                </h1>
                <p>by John Doe</p>
              </div>
            </article>
          ))}
        </div>

        <div className="technology__content__grid__article">
          {[...Array(3)].map((_, index) => (
            <article className="technology__content__article" key={index}>
              <div className="technology__content__article__image" />
              <div className="technology__content__article__content">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Blanditiis officia quis velit, sed dolor voluptates
                  aliquam labore voluptas sint veritatis vel quod error a qui
                  eos! Illo nihil consequatur tempora.
                </h1>
                <p>by John Doe</p>
              </div>
            </article>
          ))}
        </div>

        <div className="technology__content__grid__article">
          {[...Array(3)].map((_, index) => (
            <article className="technology__content__article" key={index}>
              <div className="technology__content__article__image" />
              <div className="technology__content__article__content">
                <h1>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Blanditiis officia quis velit, sed dolor voluptates
                  aliquam labore voluptas sint veritatis vel quod error a qui
                  eos! Illo nihil consequatur tempora.
                </h1>
                <p>by John Doe</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
