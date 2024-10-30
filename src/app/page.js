"use client"
import { useEffect, useState } from "react";
import { getSdkJWT } from "../../utils/sdkJWT";

export default function Home() {

  const [jwt, setJwt] = useState();

  useEffect(() => {
    const getsdkJwt = async() => {
      const jwt = await getSdkJWT();
      setJwt(jwt);
      localStorage.setItem("zoom-sdk-auth", JSON.stringify(jwt));
    }
    getsdkJwt();
  },[]);

  return (
    <div>
      <p>ZOOM JWT</p>
      <p>{jwt}</p>
    </div>
  );
}
