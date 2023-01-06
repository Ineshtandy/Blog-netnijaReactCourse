import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //let name = "mario";
  //useState returns an array with second val beinig a func to change the value
  //const [name, setName] = useState("mario");
  //const [age, setAge] = useState(20);

  // const [blogs, setBlogs] = useState([
  //   { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
  //   { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
  //   {
  //     title: "Web dev top tips",
  //     body: "lorem ipsum...",
  //     author: "mario",
  //     id: 3,
  //   },
  // ]);

  // const handleDelete = (id) => {
  //   //creating a whole new array and setting it to the original one
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // const handleClick = () => {
  //   setName("luigi");
  //   setAge(21);
  // };

  //const handleClickAgain = (name) => console.log(`hello ${name}`);

  //refactored the below code in a custom hook
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);

  // useEffect(() => {
  //   fetch("http://localhost:8000/blogs")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBlogs(data);
  //       setIsPending(false);
  //     });
  // }, []);

  //hook is special type of function that does a certian job(starts with use)
  //'use state' hook gives a way to make a reactive value and change it whenever we want

  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div className="thisError">{error}</div>}
      {isPending && <div>Loading...</div>}
      {/* below line will check if blogs is null, if it isnt it will output the right of && */}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

      {/* <button onClick={handleClick}>Click Me</button> */}
      {/* <button onClick={() => handleClickAgain("papaji")}>Click me Daddy</button> */}
    </div>
  );
};

export default Home;
