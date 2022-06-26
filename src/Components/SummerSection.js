import axios from "axios";
import { FaArrowLeft, FaArrowRight, FaQuestion, FaStar } from "react-icons/fa";
import {} from "react-icons/si";
import React, { useEffect, useState } from "react";

const SummerSection = () => {
  const [data, setData] = useState({});
  const { img1, img2, img3, header, underline, article, userimg, user } = data;
  useEffect(() => {
    axios.get("image.json").then((data) => setData(data.data));
  }, []);
  console.log(data);

  return (
    <div className="p-4">
      <div>
        <h1 className="text-5xl font-bold text-slate-800">{header}</h1>
        <p className="text-xl text-gray-600 font-bold font-mono py-2 items-center flex">
          {underline}{" "}
          <span className="mx-1 active:text-gray-900 border-2 p-1 rounded-full">
            <FaQuestion size={10} title="A course with multiple days" />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center">
        <div>
          <article className="text-gray-800 font-semibold pr-12 text-lg">
            {article}
          </article>
          <div className="flex justify-start items-center space-x-2 py-4">
            <img className="w-8 h-7 rounded-full" src={userimg} alt="user" />
            <h1 className="text-purple-600 text-xl font-bold">{user}</h1>
          </div>
          <div className="flex items-center justify-start space-x-3">
            <div className="flex justify-center items-center text-2xl text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> <FaStar />
            </div>
            <p className="text-sm text-gray-500">
              467 total reviews for this teacher
            </p>
          </div>
          <div className="flex items-center justify-start space-x-3">
            <div className="flex justify-center items-center text-2xl text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar /> <FaStar />
            </div>
            <p className="text-sm text-gray-500">5 reviews for this class</p>
          </div>
          <h3 className="text-2xl font-semibold my-3">
            Completed by 21 learners
          </h3>
          <div>
            <button className="flex items-center justify-center">
              See Class Schedule <FaArrowRight />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <div>
            <img
              className="row-span-3 h-full rounded-tl-xl rounded-sm"
              src={img1}
              alt="art image1"
            />
          </div>
          <div className="inline-block space-y-2">
            <div>
              <img
                className="rounded-tr-xl rounded-sm"
                src={img2}
                alt="art image2"
              />
            </div>
            <div>
              <img className="rounded-sm" src={img3} alt="art image3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerSection;
