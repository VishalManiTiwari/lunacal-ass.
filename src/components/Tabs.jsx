import React, { useState } from "react";
import { motion } from "framer-motion";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <>
      <div className="w-full shadow-2xl bg-gray-700 rounded-xl p-5">
        {/* Tabs Navigation */}
        <div
          className="flex flex-col lg:flex-row-3 sm:flex-row justify-around
         space-y-2 py-[8px] 
        sm:space-y-0 sm:space-x-2 rounded-3xl bg-gray-900 "
        >
          <button
            className={`px-4 sm:px-10 md:px-14 py-2 sm:py-3 
              rounded-2xl font-semibold transition-all ${
              activeTab === "about"
                ? "bg-gray-700 shadow-3xl text-white"
                : "bg-gray-900 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("about")}
          >
            About Me
          </button>
          <button
            className={`px-4 sm:px-10 md:px-16 py-2 sm:py-3 rounded-2xl font-semibold transition-all ${
              activeTab === "experiences"
                ? "bg-gray-700 text-white shadow-2xl"
                : "bg-gray-900 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("experiences")}
          >
            Experiences
          </button>
          <button
            className={`px-4 sm:px-10 md:px-14 py-2 sm:py-3 rounded-2xl font-semibold transition-all ${
              activeTab === "recommended"
                ? "bg-gray-700 text-white shadow-2xl"
                : "bg-gray-900 text-gray-300 hover:bg-gray-700"
            }`}
            onClick={() => setActiveTab("recommended")}
          >
            Recommended
          </button>
        </div>

        {/* Tab Content with Slide Animation */}
        <div className="mt-4 bg-gray-700 p-4 sm:p-6 md:p-8 rounded-lg text-gray-400">
          <motion.div
            key={activeTab}
            variants={tabVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4 }}
          >
            {activeTab === "about" && (
              <p className="text-sm sm:text-base md:text-lg h-32 overflow-y-auto custom-scrollbar">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt recusandae voluptas libero facilis repudiandae ratione
                omnis earum debitis aut quia et doloremque sint magnam, fuga
                eaque nostrum enim officia vel cum, exercitationem, laborum
                voluptatibus est aspernatur! Totam, minima beatae? Dolore rerum
                nobis ad iusto molestiae neque minus, sapiente facere
                laboriosam!
              </p>
            )}
            {activeTab === "experiences" && (
              <p className="text-sm sm:text-base md:text-lg h-32 overflow-y-auto custom-scrollbar">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis exercitationem aspernatur repellat placeat reiciendis
                eveniet accusamus temporibus accusantium doloribus culpa
                voluptatem a illum architecto dolore libero, dolores, voluptate
                id totam! Odit expedita consectetur molestiae possimus, dicta
                rem id aperiam ipsum, laudantium labore quae, est aspernatur
                tempora ad voluptates repellendus! Ab, non.
              </p>
            )}
            {activeTab === "recommended" && (
              <p className="text-sm sm:text-base md:text-lg h-32 overflow-y-auto custom-scrollbar">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                consequuntur eius doloremque ipsam dolores porro quod tempore
                ipsa expedita excepturi labore similique beatae dignissimos nam
                magni explicabo nulla debitis eaque distinctio qui maiores,
                quisquam consectetur. Ea repudiandae commodi inventore soluta
                perferendis, alias odit voluptas reiciendis at dolores sint,
                labore ad itaque eligendi ullam nulla voluptate.
              </p>
            )}
          </motion.div>
        </div>
      </div>
      <div
        className="relative shadow-2xl xl:mx-[5rem] mx-8 
        md:mx-[4rem]  rounded-xl 
        border border-gray-700 border-b-[4px] 
        bg-gradient-to-r from-gray-800 to-gray-900"
      ></div>
    </>
  );
};

export default Tabs;
