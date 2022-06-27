import axios from "axios";
import { FaQuestion, FaStar } from "react-icons/fa";
import { GoChevronRight } from "react-icons/go";
import { FiHeart } from "react-icons/fi";
import { TiArrowForwardOutline } from "react-icons/ti";
import {} from "react-icons/si";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

const SummerSection = () => {
  const [data, setData] = useState({});
  const [modal, setModal] = useState(null);
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
          <span className="mx-1 active:text-gray-900 border-gray-500 border-2 p-1 rounded-full">
            <FaQuestion size={10} title="A course with multiple days" />
          </span>
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 place-content-center place-items-center my-8">
        <div>
          <article className="text-gray-800 font-semibold pr-16 text-lg">
            {article}
          </article>
          <div className="flex justify-start items-center space-x-2 py-2 my-2 ">
            <img className="w-8 h-8 rounded-full" src={userimg} alt="user" />
            <h1 className="text-purple-600 text-2xl font-semibold">{user}</h1>
          </div>
          <div className="flex items-center justify-start space-x-3">
            <div className="flex justify-center items-center text-2xl text-yellow-400 pb-2">
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
          <h3 className="text-xl font-semibold py-3 text-black">
            Completed by 21 learners
          </h3>
          <div className=" flex items-center py-6">
            <label
              htmlFor="modal"
              onClick={() => setModal(true)}
              className=" px-5 btn normal-case border-none rounded-3xl flex items-center justify-center bg-indigo-600 hover:bg-indigo-700 font-semibold text-xl text-white"
            >
              See Class Schedule <GoChevronRight size={25} />
            </label>
            <button className="mx-10 flex items-center text-indigo-600 font-bold text-xl gap-x-1">
              <FiHeart size={25} /> Save
            </button>
            <button className="ml-10 flex items-center text-indigo-600 font-bold text-xl gap-x-1">
              <TiArrowForwardOutline size={30} /> Share
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
      {modal && <Modal></Modal>}
    </div>
  );
};

export default SummerSection;
