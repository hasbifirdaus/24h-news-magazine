import "./LatestTechnology.css";

export default function LatestTechnology() {
  return (
    <main className="latest-technology">
      <header className="latest-technology__header">
        <div className="latest-technology__header-container">
          <h2 className="latest-technology__header-title">Latest Technology</h2>
        </div>
      </header>

      <section className="latest-technology__content">
        <div className="latest-technology__hero-box">
          <div className="latest-technology__hero-box-image" />
          <div className="latest-technology__hero-box-content">
            <h1 className="latest-technology__hero-box-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis officia quis velit, sed dolor voluptates aliquam labore
              voluptas sint veritatis vel quod error a qui eos! Illo nihil
              consequatur tempora.
            </h1>
            <p className="latest-technology__hero-box-author">by John Doe</p>
          </div>
        </div>

        <div className="latest-technology__article-grid">
          {[...Array(3)].map((_, index) => (
            <article className="latest-technology__article" key={index}>
              <div className="latest-technology__article-image" />
              <div className="latest-technology__article-content">
                <h1 className="latest-technology__article-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Blanditiis officia quis velit, sed dolor voluptates
                  aliquam labore voluptas sint veritatis vel quod error a qui
                  eos! Illo nihil consequatur tempora.
                </h1>
                <p className="latest-technology__article-author">by John Doe</p>
              </div>
            </article>
          ))}
        </div>

        <div className="latest-technology__article-grid">
          {[...Array(3)].map((_, index) => (
            <article className="latest-technology__article" key={index}>
              <div className="latest-technology__article-image" />
              <div className="latest-technology__article-content">
                <h1 className="latest-technology__article-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Blanditiis officia quis velit, sed dolor voluptates
                  aliquam labore voluptas sint veritatis vel quod error a qui
                  eos! Illo nihil consequatur tempora.
                </h1>
                <p className="latest-technology__article-author">by John Doe</p>
              </div>
            </article>
          ))}
        </div>

        <div className="latest-technology__article-grid">
          {[...Array(3)].map((_, index) => (
            <article className="latest-technology__article" key={index}>
              <div className="latest-technology__article-image" />
              <div className="latest-technology__article-content">
                <h1 className="latest-technology__article-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Blanditiis officia quis velit, sed dolor voluptates
                  aliquam labore voluptas sint veritatis vel quod error a qui
                  eos! Illo nihil consequatur tempora.
                </h1>
                <p className="latest-technology__article-author">by John Doe</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
