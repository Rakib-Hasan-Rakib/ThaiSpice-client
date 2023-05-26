import React from "react";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
  return (
    <div className="w-11/12 mx-auto my-6">
      <div className="flex justify-end mr-4">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <button
              className="text-white font-semibold px-4 py-2 rounded-lg bg-blue-700"
              onClick={toPdf}
            >
              Download a copy
            </button>
          )}
        </Pdf>
      </div>
      <div className="w-full h-full p-4" ref={ref}>
        <div className="w-11/12 mx-auto my-12">
          <div className="">
            <h1 className="font-semibold text-lg md:text-2xl">
              1. What is the differences between uncontrolled and controlled
              components?
            </h1>
            <p className="text-gray-700 my-4">
              <span className="font-semibold">Uncontrolled Components </span>:
              An uncontrolled component is a component that does not require
              explicit management by us. It typically manages its own state and
              does not rely on the application to pass data to it because it
              manages its own state internally and we do not need to explicitly
              manage its state.
            </p>
            <p className="text-gray-700 my-4">
              <span className="font-semibold">Controlled components</span>:A
              controlled Component is a component that requires explicit
              management by the us. We must pass data to the component via props
              and handle any events triggered by the component. A controlled
              component may have its state managed by the parent component or by
              a higher-level component in the application.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-lg md:text-2xl">
              2. How to validate React props using PropTypes?
            </h1>
            <p className="text-gray-700 my-4">
              React provides a way to validate the props passed to a component
              using the PropTypes library. PropTypes allow us to specify the
              expected type and shape of the props, which can help catch errors
              and improve code reliability.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-lg md:text-2xl">
              3. What is the difference between Node.js and Express.js?
            </h1>
            <p className="text-gray-700 my-4">
              <span className="font-semibold">Node.js </span>: Node.js is a
              JavaScript runtime environment that allows us to run JavaScript
              code on the server-side. It provides an environment that enables
              JavaScript code to be executed outside of the web browser. Node.js
              allows us to build scalable, high-performance applications that
              can handle a large number of requests.
            </p>
            <p className="text-gray-700 my-4">
              <span className="font-semibold">Express.js </span>: Express.js is
              a web framework that runs on top of Node.js. It provides a set of
              tools and utilities that make it easier to build web applications
              in Node.js. Express.js provides a simple and flexible interface
              for handling HTTP requests and building RESTful APIs.
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-lg md:text-2xl">
              4. What is a custom hook and why will I create a custom hook?
            </h1>
            <p className="text-gray-700 my-4">
              A custom hook is a JavaScript function that allows us to reuse
              stateful logic between components. Custom hooks allow us to
              extract reusable logic from components and keep them more
              organized and maintainable. Custom hooks are created when we have
              a piece of logic that needs to be used across multiple components.
              By creating a custom hook we can summarize this logic and reuse it
              in any component that needs it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
