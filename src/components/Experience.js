import React from 'react';

const Details = ({ position, comapany, companyLink, time, address, work }) => {
  return (
    <li>
      <div>
        <h3>
          {position}&nbsp;<a href={companyLink}>@{comapany}</a>
        </h3>
        <span>
          {time} | {address}
        </span>
        <p>{work}</p>
      </div>
    </li>
  );
};
const Experience = () => {
  return (
    <div className='my-64'>
      <h2 className='font-bold text-8xl mb-32 w-full text-center'>
        Experience
      </h2>
      <div className='w-[75%] mx-auto relative'>
        <ul>
          <Details
            position='Software Engineer'
            comapany='Google'
            time='2022-Present'
            address='Mountain View, CA'
            work={`
          Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization.`}
          />
          <Details
            position='Intern'
            comapany='Facebook'
            time='Summer 2021'
            address='Menlo Park, CA.'
            work={`
          Worked on a team responsible for developing a new mobile app feature that allowed users to create and 
share short-form video content, including designing and implementing a new user interface and developing 
the backend infrastructure to support the feature.`}
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
