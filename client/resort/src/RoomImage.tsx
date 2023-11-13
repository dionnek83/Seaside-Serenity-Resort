import React from 'react';

const RoomImage= (props: { image: any; }) => {
  const divStyle = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="md2:w-full h-80  md2:h-screen " style={divStyle}>
      {/* Your content goes here */}
    </div>
  );
};

export default RoomImage;
