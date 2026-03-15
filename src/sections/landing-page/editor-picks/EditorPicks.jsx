import "./EditorPicks.css";

export default function EditorPicks() {
  return (
    <main className="editor">
      <header className="editor__header">
        <div className="editor__header__container">
          <h2 className="editor__header__title">Editor Picks</h2>
        </div>
      </header>

      <section className="editor__content">
        <div className="editor__content__box">
          <div className="editor__content__box__image" />
          <div className="editor__content__box__text">
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

        <div className="editor__content__grid__article">
          {[...Array(3)].map((_, index) => (
            <article className="editor__content__article" key={index}>
              <div className="editor__content__article__image" />
              <div className="editor__content__article__content">
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

        <div className="editor__content__grid__article">
          {[...Array(3)].map((_, index) => (
            <article className="editor__content__article" key={index}>
              <div className="editor__content__article__image" />
              <div className="editor__content__article__content">
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

        <div className="editor__content__box">
          <div className="editor__content__box__image" />
          <div className="editor__content__box__text">
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
      </section>
    </main>
  );
}
