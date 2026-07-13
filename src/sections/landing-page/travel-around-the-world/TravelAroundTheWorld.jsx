import "./TravelAroundTheWorld.css";

function TravelAroundTheWorld() {
  return (
    <section className="travel-around-the-world">
      <div className="tatw__header">
        <h2 className="tatw__title">TRAVEL AROUND THE WORLD</h2>
        <div className="tatw__pagination">
          <button className="tatw__pagination-btn">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="tatw__pagination-btn">
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div className="tatw__article-container">
        <article className="tatw__article">
          <div className="tatw__article-thumb-wrapper">
            <a href="#link-article">
              <img
                src="/travel-around-the-world/travel-around-the-world-1.jpg"
                alt="A person standing alone on top of a massive rock formation during sunrise"
              />
            </a>
          </div>
          <div className="tatw__article-content">
            <h3 className="tatw__article-title">
              <a href="#link-article">
                The Solitary Journey: Finding Peace Standing Atop Giant Rocks
              </a>
            </h3>
            <span className="tatw__article-author">
              by <a href="#link-author">Adrian Wijaya</a>
            </span>
          </div>
        </article>
        <article className="tatw__article">
          <div className="tatw__article-thumb-wrapper">
            <a href="#link-article">
              <img
                src="/travel-around-the-world/travel-around-the-world-2.jpg"
                alt="A person walking across the desert dunes under a warm sunset sky"
              />
            </a>
          </div>
          <div className="tatw__article-content">
            <h3 className="tatw__article-title">
              <a href="#link-article">
                Golden Horizons: Why Walking Through the Desert at Sunset is the
                Ultimate Footprint-Free Travel
              </a>
            </h3>
            <span className="tatw__article-author">
              by <a href="#link-author">Bella Saputra</a>
            </span>
          </div>
        </article>
        <article className="tatw__article">
          <div className="tatw__article-thumb-wrapper">
            <a href="#link-article">
              <img
                src="/travel-around-the-world/travel-around-the-world-3.jpg"
                alt="Three brown wooden boats floating on calm, turquoise water"
              />
            </a>
          </div>
          <div className="tatw__article-content">
            <h3 className="tatw__article-title">
              <a href="#link-article">
                Navigating the Calm: How Budget Travelers Can Rent Traditional
                Wooden Boats
              </a>
            </h3>
            <span className="tatw__article-author">
              by <a href="#link-author">Chandra Kirana</a>
            </span>
          </div>
        </article>
        <article className="tatw__article">
          <div className="tatw__article-thumb-wrapper">
            <a href="#link-article">
              <img
                src="/travel-around-the-world/travel-around-the-world-4.jpg"
                alt="A vintage yellow Volkswagen van driving on an open road through the mountains"
              />
            </a>
          </div>
          <div className="tatw__article-content">
            <h3 className="tatw__article-title">
              <a href="#link-article">
                Classic Road Trips: How the Iconic Yellow Volkswagen Van is
                Making a Comeback
              </a>
            </h3>
            <span className="tatw__article-author">
              by <a href="#link-author">Dafa Ramadhan</a>
            </span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default TravelAroundTheWorld;
