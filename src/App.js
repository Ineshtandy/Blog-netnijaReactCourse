//ROOT COMPONENT
import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

//component in general is just a function
//we must always return a value out of this function
function App() {
  //can write any valid js before the return statement
  const title = "Welcome to the new blog";
  const likes = 1000;
  const boolVal = true;
  const person = { name: "lisa", relation: "friend" };
  const link = "www.google.com";

  return (
    //returned file in general is gonna be a jsx file
    //this file template here is a jsx file which looks like html but isnt
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          {/* <h1>{title}</h1>
          <p>React is {likes} times better</p>
          <p>
            {person.name} is a {person.relation} of mine
          </p>
          <p>
            {/* cannot display boolean values 
            {person.name} likes {boolVal}
          </p>
          <a href={link}>Link to google</a> */}
        </div>
      </div>
    </Router>
  );
}

export default App;
