import "./Entertainment.css";

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
        <div className="entertainment__header-container">
          <h2 className="entertainment__header-title">Entertainment</h2>
        </div>
      </header>

      <div className="entertainment__container">
        {entertainmentItems.map((item) => (
          <article className="entertainment__box" key={item.id}>
            <div className="entertainment__box-image" />
            <div className="entertainment__box-content">
              <h1 className="entertainment__box-title">{item.title}</h1>
              <span className="entertainment__box-author">{item.author}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
