import "./FoodCuisineAndMusicNews.css";

function FoodCousineAndMusicNews() {
  return (
    <div className="food-cuisine-and-music-news">
      <section className="food-and-cuisine">
        <div className="fac__header">
          <h2 className="fac__header-title">FOOD & CUISINE</h2>
          <div className="fac__header-nav-container">
            <nav className="fac__header-nav">
              <ul>
                <li>
                  <a href="#all">All</a>
                </li>
                <li>
                  <a href="#cuisine">Cuisine</a>
                </li>
                <li>
                  <a href="#trending">Trending</a>
                </li>
              </ul>
            </nav>
            <div className="fac__header-pagination">
              <button className="fac__header-pagination-btn">
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button className="fac__header-pagination-btn">
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="fac__article-container">
          {/* LEFT */}
          <article className="fac__article">
            <div className="fac__article-thumb">
              <a href="#link-article">
                <img src="" alt="fac-article-left" />
              </a>
            </div>

            <div className="fac__article-content">
              <h3 className="fac__article-title">
                <a href="#link-article">
                  'He was revolutionary': Louisville chefs, friends honor late
                  talented Brown Hotel chef
                </a>
              </h3>
              <div className="fac__article-metadata">
                <span className="fac__article-author">
                  by<a href="#link-author"> Penci Design </a>
                </span>
                &bull;
                <span className="fac__article-date"> April 12,2022</span>
              </div>
              <p className="fac__article-excerpt">
                Luxury travel is back. The pandemic-weary population is emerging
                from lockdowns with the goal of relaxing and reviving senses
                dulled by one zoom meeting after long stressful days
              </p>
            </div>
          </article>

          {/* RIGHT */}
          <div className="fac__article-container--right">
            <article className="fac__article--right">
              <div className="fac__article-thumb--right">
                <a href="#link-article">
                  <img src="" alt="article-image-right" />
                </a>
              </div>

              <div className="fac__article-content--right">
                <h3 className="fac__article-title--right">
                  <a href="#link-article">
                    Cheap and cheerful: Yotam Ottolenghi's recipes for quick and
                    easy meals
                  </a>
                </h3>
                <span className="fac__article-date--right">April 12, 2022</span>
              </div>
            </article>

            <article className="fac__article--right">
              <div className="fac__article-thumb--right">
                <a href="#link-article">
                  <img src="" alt="article-image-right" />
                </a>
              </div>

              <div className="fac__article-content--right">
                <h3 className="fac__article-title--right">
                  <a href="#link-article">
                    Cheap and cheerful: Yotam Ottolenghi's recipes for quick and
                    easy meals
                  </a>
                </h3>
                <span className="fac__article-date--right">April 12, 2022</span>
              </div>
            </article>

            <article className="fac__article--right">
              <div className="fac__article-thumb--right">
                <a href="#link-article">
                  <img src="" alt="article-image-right" />
                </a>
              </div>

              <div className="fac__article-content--right">
                <h3 className="fac__article-title--right">
                  <a href="#link-article">
                    Cheap and cheerful: Yotam Ottolenghi's recipes for quick and
                    easy meals
                  </a>
                </h3>
                <span className="fac__article-date--right">April 12, 2022</span>
              </div>
            </article>

            <article className="fac__article--right">
              <div className="fac__article-thumb--right">
                <a href="#link-article">
                  <img src="" alt="article-image-right" />
                </a>
              </div>

              <div className="fac__article-content--right">
                <h3 className="fac__article-title--right">
                  <a href="#link-article">
                    Cheap and cheerful: Yotam Ottolenghi's recipes for quick and
                    easy meals
                  </a>
                </h3>
                <span className="fac__article-date--right">April 12, 2022</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* MUSIC NEWS */}
      <section className="music-news">
        <div className="mn__header">
          <h2 className="mn__header-title">MUSIC NEWS</h2>

          <div className="mn__header-pagination">
            <button className="mn__header-pagination-btn">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="mn__header-pagination-btn">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="mn__article-container">
          {/* LEFT */}
          <article className="mn__article">
            <div className="mn__article-thumb">
              <a href="#link-article">
                <img src="" alt="mn-article-left" />
              </a>
            </div>

            <div className="mn__article-content">
              <h3 className="mn__article-title">
                <a href="#link-article">
                  'He was revolutionary': Louisville chefs, friends honor late
                  talented Brown Hotel chef
                </a>
              </h3>
              <div className="mn__article-metadata">
                <span className="mn__article-author">
                  by<a href="#link-author"> Penci Design </a>
                </span>
                &bull;
                <span className="mn__article-date"> April 12,2022</span>
              </div>
              <p className="mn__article-excerpt">
                Luxury travel is back. The pandemic-weary population is emerging
                from lockdowns with the goal of relaxing and reviving senses
                dulled by one zoom meeting after long stressful days
              </p>
            </div>
          </article>

          {/* RIGHT */}
          <div className="mn__article-container--right">
            <article className="mn__article--right">
              <div className="mn__article-thumb--right">
                <a href="#link-article">
                  <img src="" alt="article-image-right" />
                </a>
              </div>

              <div className="mn__article-content--right">
                <h3 className="mn__article-title--right">
                  <a href="#link-article">
                    Cheap and cheerful: Yotam Ottolenghi's recipes for quick and
                    easy meals
                  </a>
                </h3>
                <span className="mn__article-date--right">April 12, 2022</span>
              </div>
            </article>

            <article className="mn__article--right">
              <div className="mn__article-thumb--right">
                <a href="#link-article">
                  <img src="" alt="article-image-right" />
                </a>
              </div>

              <div className="mn__article-content--right">
                <h3 className="mn__article-title--right">
                  <a href="#link-article">
                    Cheap and cheerful: Yotam Ottolenghi's recipes for quick and
                    easy meals
                  </a>
                </h3>
                <span className="mn__article-date--right">April 12, 2022</span>
              </div>
            </article>

            <article className="mn__article--right">
              <div className="mn__article-thumb--right">
                <a href="#link-article">
                  <img src="" alt="article-image-right" />
                </a>
              </div>

              <div className="mn__article-content--right">
                <h3 className="mn__article-title--right">
                  <a href="#link-article">
                    Cheap and cheerful: Yotam Ottolenghi's recipes for quick and
                    easy meals
                  </a>
                </h3>
                <span className="mn__article-date--right">April 12, 2022</span>
              </div>
            </article>

            <article className="mn__article--right">
              <div className="mn__article-thumb--right">
                <a href="#link-article">
                  <img src="" alt="article-image-right" />
                </a>
              </div>

              <div className="mn__article-content--right">
                <h3 className="mn__article-title--right">
                  <a href="#link-article">
                    Cheap and cheerful: Yotam Ottolenghi's recipes for quick and
                    easy meals
                  </a>
                </h3>
                <span className="mn__article-date--right">April 12, 2022</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FoodCousineAndMusicNews;
