import axios from "axios";
import { FaQuestion } from "react-icons/fa";
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
        <p className="text-xl text-gray-500 font-bold font-mono py-2 items-center flex">
          {underline}{" "}
          <span className="mx-1 active:text-gray-900 border-2 p-1 rounded-full">
            <FaQuestion size={10} title="A course with multiple days" />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 place-content-center place-items-center">
        <div>
          <article>{article}</article>
          <div className="flex justify-start items-center space-x-2 py-4">
            <img className="w-8 h-7 rounded-full" src={userimg} alt="user" />
            <h1>{user}</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-2">
          <div>
            <img className="row-span-3 h-full" src={img1} alt="art image1" />
          </div>
          <div className="inline-block space-y-2">
            <div>
              <img src={img2} alt="art image2" />
            </div>
            <div>
              <img src={img3} alt="art image3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerSection;
