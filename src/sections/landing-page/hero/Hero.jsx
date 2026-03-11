import "./Hero.css";

function HeroArticle({ className }) {
  return (
    <article className={`hero__article ${className}`}>
      <div className="hero__article__image" />
      <div className="hero__article__content">
        <h1 className="hero__article__title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quia
          eaque, harum cumque mollitia aliquam ullam sint ex obcaecati delectus
          unde illo corrupti tempore quis esse alias nisi quibusdam
          consequuntur.
        </h1>
        <p className="hero__article__author">by John Doe</p>
      </div>
    </article>
  );
}

function HeroFeaturedArticle({ className }) {
  return (
    <article className={`hero__featured-article ${className}`}>
      <div className="hero__featured-article__background" />
      <div className="hero__featured-article__content">
        <h1 className="hero__featured-article__title">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quia
          eaque, harum cumque mollitia aliquam ullam sint ex obcaecati delectus
          unde illo corrupti tempore quis esse alias nisi quibusdam
          consequuntur.
        </h1>
        <p className="hero__featured-article__author">by John Doe</p>
        <div className="hero__featured-article__overlay" />
      </div>
    </article>
  );
}

function HeroTrendingArticle({ className }) {
  return (
    <article className={`hero__trending-articles ${className}`}>
      <h1 className="hero__trending-articles__title">Trending Now</h1>
      <hr className="hero__trending-articles__divider" />
      {[...Array(6)].map((_, index) => (
        <p className="hero__trending-articles__article" key={index}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
          molestiae vero corrupti ipsum expedita totam blanditiis inventore
          excepturi recusandae rerum ducimus asperiores at culpa qui, magnam
          labore velit nobis? Quis.
        </p>
      ))}
    </article>
  );
}

export default function Hero() {
  return (
    <main className="hero">
      <div className="hero__grid__slider-and-articles">
        {/* Slider */}
        <div className="hero__slider">
          <h1>1</h1>
        </div>

        {/* Article List */}
        <div className="hero__grid__article-list">
          {[...Array(4)].map((_, index) => (
            <HeroArticle key={index} />
          ))}
        </div>
      </div>

      <div className="hero__grid__featured-and_trending">
        {/* Featured Article */}
        <HeroFeaturedArticle className="hero__featured-trending-1" />

        {/* Trending Article */}
        <HeroTrendingArticle className="hero__featured-trending-2" />

        {/* Featured Article 2 */}
        <HeroFeaturedArticle className="hero__featured-trending-3" />

        {/* Article List 2 */}
        <div className="hero__grid__article-list-second">
          {[...Array(3)].map((_, index) => (
            <HeroArticle key={index} className="hero__featured-trending-4" />
          ))}
        </div>
      </div>
    </main>
  );
}
