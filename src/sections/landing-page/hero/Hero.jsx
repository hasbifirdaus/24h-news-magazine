import "./Hero.css";
import HERO1 from "../../../assets/hero/hero-1.jpg";
import HERO2 from "../../../assets/hero/hero-2.webp";
import HERO3 from "../../../assets/hero/hero-3.webp";
import HERO4 from "../../../assets/hero/hero-4.webp";
import HERO5 from "../../../assets/hero/hero-5.webp";
import HERO6 from "../../../assets/hero/hero-6.jpg";
import HERO7 from "../../../assets/hero/hero-7.webp";
import HERO8 from "../../../assets/hero/hero-8.webp";
import HERO9 from "../../../assets/hero/hero-9.jpg";
import HERO10 from "../../../assets/hero/hero-10.jpg";

const ARTICLES_ONE = [
  {
    image: HERO2,
    title:
      "Does probiotic skin care work? Products, uses, and more for a better routines",
    author: "Penci Design",
  },
  {
    image: HERO3,
    title:
      "The big impact of online shopping on retail sales during COVID-19 pandemic",
    author: "Penci Design",
  },
  {
    image: HERO4,
    title:
      "4 ways to style your workwear this summer with your personal sense of fashion",
    author: "Penci Design",
  },
  {
    image: HERO5,
    title:
      "Is a software career right for me? 10 burning questions you have been asking",
    author: "Penci Design",
  },
];

const ARTICLES_TWO = [
  {
    image: HERO8,
    title:
      "Warren Buffett’s simple investing advice that’s beaten most pros for 12 straight years: Morning Brief",
    author: "Penci Design",
  },
  {
    image: HERO9,
    title:
      "Chinese banks and bad-debt managers urged to rescue real estate projects",
    author: "Penci Design",
  },
  {
    image: HERO10,
    title:
      "The romance of train travel is alive but exorbitantly expensive for normal people",
    author: "Penci Design",
  },
];

const FEATURED_STORY = [
  {
    image: HERO6,
    title:
      "'He was revolutionary': Louisville chefs, friends honor late talented Brown Hotel chef",
    author: "Penci Design",
  },
  {
    image: HERO7,
    title:
      "Study reveals concerning changes to young people health and physical fitness post-pandemic",
    author: "Penci Design",
  },
];

const TRENDING_TOPICS = [
  "How tech companies are trying to woo employees returning to work after...",
  "The most stylish celeb Instagram looks you missed this week fashion now...",
  "Netflix's summer 2022 movie slate is full of star power with a...",
  "New issue of What Hi-Fi? out now: music streamers, all-in-one systems and...",
  "The French TV series that stormed the world with excellent reviews and...",
];

function ArticleList({ articles, className = "" }) {
  return (
    <div className={`hero__articles${className}`}>
      {articles.map((article) => (
        <div className="hero__article" key={article.title}>
          <img src={article.image} alt="" className="hero__article-image" />
          <div className="hero__article-content">
            <h1 className="hero__article-title">{article.title}</h1>
            <h2 className="hero__article-meta"> by {" " + article.author}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}

function FeaturedStory({ image, title, author }) {
  return (
    <div className="hero__featured">
      <img src={image} alt="hero-image" className="hero__featured-image" />

      <div className="hero__featured-overlay">
        <h1 className="hero__featured-title">{title}</h1>
        <h2 className="hero__featured-meta">{author}</h2>
      </div>

      <div className="hero__featured-gradient" />
    </div>
  );
}

function TrendingSection() {
  return (
    <div className="hero__trending">
      <h1 className="hero__trending-title">TRENDING NOW</h1>
      <hr className="hero__trending-divider" />
      <p className="hero__trending-list">
        {TRENDING_TOPICS.map((topic, index) => (
          <>
            <span key={index}>{topic}</span>
            <br />
          </>
        ))}
      </p>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Main Banner */}
      <div className="hero__banner">
        <img src={HERO1} alt="hero-image" className="hero__banner-image" />
        <div className="hero__banner-content">
          <h2>TV</h2>
          <p>
            The French Tv that stormed the world with excellence reviews and...
          </p>
          <div className="hero__banner-content-context">
            <h2>by Penci Design </h2>
            <span>∘</span>
            <h2>12 December 2022</h2>
          </div>
        </div>
      </div>

      {/* Secondary Articles */}
      <ArticleList articles={ARTICLES_ONE} />

      <div className="hero__featured-trending-wrapper">
        {/* Featured Story */}
        <FeaturedStory {...FEATURED_STORY[0]} />

        {/* Trending Section */}
        <TrendingSection />
      </div>

      <div className="hero__featured-article-wrapper">
        {/* Featured Story (Repeated) */}
        <FeaturedStory {...FEATURED_STORY[1]} />

        {/* Secondary Articles (Repeated) */}
        <ArticleList articles={ARTICLES_TWO} className={"two"} />
      </div>
    </section>
  );
}
