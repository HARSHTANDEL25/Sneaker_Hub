const BlogBox = (props) => {
  return (
    <div className="blog-box rounded-3 bg-light overflow-hidden d-flex flex-column gap-3">
      <div className="blog-img">
        <img
          src={props.blogItem.img}
          className="img-fluid w-100 d-block"
          alt=""
        />
      </div>
      <div className="blog-info px-3 d-flex flex-wrap gap-2 align-items-center justify-content-between">
        <small>
          <i className="fa-solid fa-heart me-1"></i>
          {props.blogItem.rate}/5
        </small>
        <small>
          <i className="fa-solid fa-clock me-1"></i>
          {props.blogItem.time}
        </small>
        <small className="fw-bold author"># {props.blogItem.author}</small>
      </div>
      <div className="blog-content px-3">
        <h6 className="fw-bold">{props.blogItem.title}</h6>
        <small className="text-black-50 fw-bold">{props.blogItem.desc}</small>
      </div>
      <button className="bg-dark px-3 py-2">
        <a
          className="text-white"
          href="https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/"
          target="_blank"
          rel="noreferrer"
        >
          Read More
        </a>
      </button>
    </div>
  );
};

export default BlogBox;
