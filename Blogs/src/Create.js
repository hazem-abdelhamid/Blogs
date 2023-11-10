import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Hazem");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      body,
      author,
    };
    setIsPending(true);

    fetch("http://localhost:7000/blogs/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      setIsPending(false);

      history.push("/");
    });
  };

  return (
    <div className="create">
      <form onSubmit={submitHandler}>
        <h2>Add a new blog</h2>
        <label>Blog title</label>
        <input
          value={title}
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label>Blog body</label>
        <textarea
          value={body}
          type="text"
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Hazem">Hazem</option>
          <option value="Ali">Ali</option>
        </select>
        {!isPending && <button type="submit">Add blog</button>}{" "}
        {isPending && <button disabled>Adding blog...</button>}{" "}
      </form>
    </div>
  );
};

export default Create;
