import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>
        Sorry that page cannot be found <br></br>
        <Link to="/" className="link">
          Go to Homepage
        </Link>
      </h2>
    </div>
  );
};

export default NotFound;
