import React from "react";

const Proficiency = () => {
  const skillBars = [
    { stack: "Java", percentage: 70 },
    { stack: "Python", percentage: 60 },
    { stack: "Html", percentage: 70 },
    { stack: "Css", percentage: 65 },
    { stack: "MongoDB", percentage: 60 },
    { stack: "Express.js", percentage: 60 },
    { stack: "React.js", percentage: 70 },
    { stack: "Node.js", percentage: 60 },
    // Add more stacks as needed
  ];

  return (
    <section name='prof'className="py-12 bg-[#0a192f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Proficiency</p>
      <p className='py-4 text-gray-300'>// These are the level</p>
        <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8">
          {skillBars.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div className="w-32 text-gray-300">{skill.stack}</div>
              <div className="flex-grow h-4 bg-gray-200 rounded-md">
                <div
                  className="h-full bg-blue-500 rounded-md"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="ml-2 text-gray-300">{skill.percentage}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proficiency;
