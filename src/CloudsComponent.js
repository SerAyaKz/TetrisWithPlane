import React from 'react';
import bg from "./img/cloud3.png";
import plane from "./img/plane.png";

const CloudsComponent = () => {
  return (
    <section>
      {/* add clouds */}
      <div className="clouds">
        <img src={bg} style={{ '--i': 1 }} />
        <img src={bg} style={{ '--i': 2 }} />
        <img src={bg} style={{ '--i': 3 }} />
      </div>
      <div className="clouds clouds2">
        <img src={bg} style={{ '--i': 1 }} />
        <img src={bg} style={{ '--i': 2 }} />
        <img src={bg} style={{ '--i': 3 }} />
      </div>
      <div className="runway"></div>
      <img className="plane" src={plane} alt="" />
    </section>
  );
};

export default CloudsComponent;
