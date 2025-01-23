import React from 'react';

const MapEmbed = () => {
  const maps = [
    {
      src: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d903.9473111739592!2d67.04774932847882!3d25.00727639860883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAwJzI2LjIiTiA2N8KwMDInNTQuMiJF!5e0!3m2!1sen!2s!4v1733580266391!5m2!1sen!2s",
      width: "250",
      height: "250",
      className: "hover:shadow-lg rounded-3xl hover:shadow-gray-500 border-2 border-black mb-4"
    },
    // {
    //   src: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d446.1485648596023!2d67.053119!3d24.990755!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341d63ff87e0d%3A0xc5ac7ebfc1c79dbe!2sminam%20web%20development%20center!5e1!3m2!1sen!2sus!4v1733580585199!5m2!1sen!2sus",
    //   width: "250",
    //   height: "250",
    //   className: "hover:shadow-lg hover:shadow-gray-500 rounded-3xl border-2 border-black mb-3"
    // }
  ];

  return (
    <div className="map-container flex flex-col items-center">
      {maps.map((map, index) => (
        <iframe
          key={index}
          src={map.src}
          width={map.width}
          height={map.height}
          className={map.className}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ))}
    </div>
  );
};

export default MapEmbed;
