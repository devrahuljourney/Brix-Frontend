import React from 'react';
import "../../style/Navbar.css";

export default function NavCard(props) {
  const data = props.data;

  return (
    <div className='navcard__container'>
      <ul className='navcard__ul' style={{ color: "black" }}>
        {data.map((element, index) => (
          <div className='navcard__link__container' key={index}>
            <p className='navcard__category'>{element.category}</p>
            <div className='navcard__link__ul'>
              {element.about.map((item, idx) => (
                <div className='navcard__link' key={idx}>
                  <a href={item.link}>{item.item}</a>
                </div>
              ))}
            </div>
            {index !== data.length - 1 && <div className='line'></div>}
            <div className='popup'>
              {element.about.map((item, idx) => (
                <div className='popup__content' key={idx}>
                  <p>{item.title}</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}
