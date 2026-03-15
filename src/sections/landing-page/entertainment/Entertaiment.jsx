import "./Entertaiment.css";

export default function Entertainment() {
  const entertainmentItems = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia quis velit, sed dolor voluptates aliquam labore voluptas sint veritatis vel quod error a qui eos! Illo nihil consequatur tempora.",
      author: "By Foren",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia quis velit, sed dolor voluptates aliquam labore voluptas sint veritatis vel quod error a qui eos! Illo nihil consequatur tempora.",
      author: "By Foren",
    },
    {
      id: 3,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia quis velit, sed dolor voluptates aliquam labore voluptas sint veritatis vel quod error a qui eos! Illo nihil consequatur tempora.",
      author: "By Foren",
    },
    {
      id: 4,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quidem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis officia quis velit, sed dolor voluptates aliquam labore voluptas sint veritatis vel quod error a qui eos! Illo nihil consequatur tempora.",
      author: "By Foren",
    },
  ];

  return (
    <section className="entertainment">
      <header className="entertainment__header">
        <div className="entertainment__header__container">
          <h2 className="entertainment__header__title">Entertainment</h2>
        </div>
      </header>

      <div className="entertainment__container">
        {entertainmentItems.map((item) => (
          <article className="entertainment__box" key={item.id}>
            <div className="entertainment__box__image" />
            <div className="entertainment__box__content">
              <h1>{item.title}</h1>
              <span>{item.author}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
