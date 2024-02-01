import React, { useEffect, useRef } from "react";

const Linnworks = () => {
  const frameRef = useRef();
  console.log(frameRef);
  return (
    <iframe
      src="https://mobile.linnworks.net"
      style={{ width: "100%", height: "80vh" }}
      ref={frameRef}
    ></iframe>
  );
};

export default Linnworks;
