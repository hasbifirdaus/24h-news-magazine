import "./EditorPicks.css";

export default function EditorPicks() {
  return (
    <main className="editor-picks">
      <header className="editor-picks__header">
        <div className="editor-picks__header-container">
          <h2 className="editor-picks__header-title">Editor Picks</h2>
        </div>
      </header>

      <section className="editor-picks__content">
        <div className="editor-picks__box">
          <div className="editor-picks__box-image" />
          <div className="editor-picks__box-text">
            <h1 className="editor-picks__box-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis officia quis velit, sed dolor voluptates aliquam labore
              voluptas sint veritatis vel quod error a qui eos! Illo nihil
              consequatur tempora.
            </h1>
            <p className="editor-picks__box-author">by John Doe</p>
          </div>
        </div>

        <div className="editor-picks__article-grid">
          {[...Array(3)].map((_, index) => (
            <article className="editor-picks__article" key={index}>
              <div className="editor-picks__article-image" />
              <div className="editor-picks__article-content">
                <h1 className="editor-picks__article-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Blanditiis officia quis velit, sed dolor voluptates
                  aliquam labore voluptas sint veritatis vel quod error a qui
                  eos! Illo nihil consequatur tempora.
                </h1>
                <p className="editor-picks__article-author">by John Doe</p>
              </div>
            </article>
          ))}
        </div>

        <div className="editor-picks__article-grid">
          {[...Array(3)].map((_, index) => (
            <article className="editor-picks__article" key={index}>
              <div className="editor-picks__article-image" />
              <div className="editor-picks__article-content">
                <h1 className="editor-picks__article-title">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                  quidem. Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Blanditiis officia quis velit, sed dolor voluptates
                  aliquam labore voluptas sint veritatis vel quod error a qui
                  eos! Illo nihil consequatur tempora.
                </h1>
                <p className="editor-picks__article-author">by John Doe</p>
              </div>
            </article>
          ))}
        </div>

        <div className="editor-picks__box">
          <div className="editor-picks__box-image" />
          <div className="editor-picks__box-text">
            <h1 className="editor-picks__box-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
              quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis officia quis velit, sed dolor voluptates aliquam labore
              voluptas sint veritatis vel quod error a qui eos! Illo nihil
              consequatur tempora.
            </h1>
            <p className="editor-picks__box-author">by John Doe</p>
          </div>
        </div>
      </section>
    </main>
  );
}
