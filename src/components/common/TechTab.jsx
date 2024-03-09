import React, { useState } from 'react';
import { tabName, techTab } from '../../data/TechTabData';

export default function TechTab() {
  const [tab, setTab] = useState(tabName[0]);
  const [tabData, setTabData] = useState(techTab.find(item => item.tag === tab).details);

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
    const selectedTabData = techTab.find(item => item.tag === selectedTab).details;
    setTabData(selectedTabData);
  };

  return (
    <div className='techtab__container'>
      <div className='tech__heading'>
        {tabName.map((ele, index) => (
          <div>
          <p className={ele === tab ? 'current-tab' : ''} key={index} onClick={() => handleTabClick(ele)}>{ele}</p>
          <div className={` ${tab === ele ? 'selected-tab' : ''}`}></div>
          </div>
        ))}
      </div>
      
      <div className='tech__border' ></div>
      <div className='tech__tab__data'>
        {tabData.map((data, index) => (
          <div className='tech__info' key={index}>
            <img  className=' tech__info__img ' src={data.logo} alt={`${data.name}`} />
            <p className=' tech__info__name ' > {data.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
}
