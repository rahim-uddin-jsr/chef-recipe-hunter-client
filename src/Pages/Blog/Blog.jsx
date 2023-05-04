import React from "react";
import Pdf from "react-to-pdf";

// import "./styles.css";
const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref} className="w-full p-8"></div>
    </div>
  );
};

export default Blog;
