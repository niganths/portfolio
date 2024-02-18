import React from "react";

const Proficiency = () => {
  const skillBars = [
    { stack: "Java", percentage: 65 },
    { stack: "Python", percentage: 55 },
    { stack: "C", percentage: 60 },
    { stack: "Javascript", percentage: 60 },
    { stack: "Html", percentage: 70 },
    { stack: "Css", percentage: 60 },
    { stack: "Mern Stack", percentage: 60 },
    { stack: "Sql", percentage: 60 }
    
  ];

  return (
    <div name='prof' className='w-full h-screen bg-[#0a192f] text-gray-300'>
   
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
            
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8">
        {skillBars.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div className="w-32 text-gray-300">{skill.stack}</div>
              <div className="flex-grow h-4 bg-gray-200 rounded-md">
                <div
                  className="h-full bg-pink-600 rounded-md"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="ml-2 text-gray-300">{skill.percentage}%</div>
            </div>
          ))}
        </div>
    </div>
</div>
  );
};

export default Proficiency;
// <div className="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8">
//           {skillBars.map((skill, index) => (
//             <div key={index} className="flex items-center">
//               <div className="w-32 text-gray-300">{skill.stack}</div>
//               <div className="flex-grow h-4 bg-gray-200 rounded-md">
//                 <div
//                   className="h-full bg-pink-600 rounded-md"
//                   style={{ width: `${skill.percentage}%` }}
//                 ></div>
//               </div>
//               <div className="ml-2 text-gray-300">{skill.percentage}%</div>
//             </div>
//           ))}
//         </div>