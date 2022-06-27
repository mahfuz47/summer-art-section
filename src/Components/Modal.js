import React from "react";

const Modal = () => {
  return (
    <div>
      <input type="checkbox" id="modal" className="modal-toggle" />
      <label className="modal modal-middle">
        <div className="modal-box max-w-2xl max-h-4xl">
          <label
            htmlFor="modal"
            className="btn btn-sm bg-gray-800 absolute right-2 top-2"
          >
            Back
          </label>
          <div className="h-full py-4">
            <h2 className="text-gray-800 font-bold text-2xl">
              Monday - Friday
            </h2>
            <div>
              <p>*08:00AM-10:00AM</p>
              <p>*10:00AM-12:00PM</p>
              <p>*12:00PM-02:00PM</p>
              <p>*03:00PM-05:00PM</p>
              <p>*05:00PM-07:00PM</p>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Modal;
