import React from "react";
import Pdf from "react-to-pdf";

// import "./styles.css";
const ref = React.createRef();
const Blog = () => {
  return (
    <div>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="my-5 btn btn-success text-white" onClick={toPdf}>
            Generate Pdf
          </button>
        )}
      </Pdf>
      <div ref={ref} className="w-full p-8">
        <div className="card w-96 md:w-[780px] mx-auto mb-8 bg-base-100 shadow-xl">
          <div className="card-body text-left ">
            <h2 className="card-title ">
              Differences between uncontrolled and controlled components.
            </h2>
            <p>
              <b>Control Component:</b> এখানে ফ্রম এর ডাটা হেন্ডেল করে অই
              কম্পোনেন্ট নিজেই রিয়াক্ট এর এর স্টেট ব্যভার করে।
            </p>
            <p>
              <b>Uncontrolled component:</b>
              এটা ফ্রম এর ডাটা হেন্ডেল করে ডম ব্যবহার করে।
            </p>
          </div>
        </div>
        <div className="card w-96 md:w-[780px] mx-auto mb-8 bg-base-100 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-left">
              How to validate React props using PropTypes
            </h2>
            <p>
              আমরা চাইলে খুবই সহজে propTypes ব্যবহার করে প্রপ্স এর ভ্যালু চেক
              করতে পারি এতা করার জন্য আমাদের Proptype কে ইম্প্রট করে নিতে হবে
              তার পর যেই কম্পোনেন্ট এর প্রপ্স এর টাইপ চেক করার দরকার তার নামের
              পাসে .propTypes = {"name: PropTypes.string"}
              টাইপ সেট করার জন্য কি ভ্যালু পেয়ার আকারে মাণ সেট করতে হবে। সেট
              ক্রিত টাইপ বাদে অন্য টাইপএর ভ্যালু উক্ত কম্পোনেন্ট এ প্রপ্স হিসাবে
              দিলে console এ ওয়ার্নিং দিবে।
            </p>
          </div>
        </div>
        <div className="card w-96 md:w-[780px] mx-auto mb-8 bg-base-100 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-left ">
              Difference between nodejs and express js.
            </h2>
            <p>
              node js হচ্ছে জাভাস্ক্রিপ্ট এর একটি রানটাইম, অপরদিকে express js
              হচ্ছে node js এর ফ্রেমওয়ার্ক জার মাধ্যমে node js এর কাজ গুলা খুবই
              সহজে অল্প সময়ে করা যায়।
            </p>
          </div>
        </div>
        <div className="card w-96 md:w-[780px] mx-auto mb-8  bg-base-100 shadow-xl">
          <div className="card-body text-left">
            <h2 className="card-title text-left">
              What is a custom hook, and why will you create a custom hook?
            </h2>
            <p>
              কাস্টম হুক হচ্ছে এমন এক ধরণের হুক যা আমরা কাজের সুবিধার্থে তৈরি
              করে থাকি। এর মাধ্যমে আমরা একই রকম কাজ বিভিন্ন কম্পোনেন্টে ব্যবহার
              করতে পারি একই কোড বার বার না লিখে, এটা নার এর প্রথন অংশ use দ্বারা
              লিখতে হয়।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
