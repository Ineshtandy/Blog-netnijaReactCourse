import { Link } from "react-router-dom";

const BlogList = ({ blogs, title, handleDelete }) => {
  //   put props in the parenthesis if you want this pattern
  //   const blogs = props.blogs;
  //   const title = props.title;

  return (
    //without creating blog-list div return was giving error
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        //key property is necessary when list is returned as it helps react keep track
        <div className="blog-preview" key={blog.id}>
          <Link to={`blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </Link>
          {/*  <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
