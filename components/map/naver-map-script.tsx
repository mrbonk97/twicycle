"use client";
import Script from "next/script";

export const NaverMapScript = () => (
  <Script
    id="naver-map-script"
    type="text/javascript"
    data-loaded="false"
    src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
    onLoad={() => {
      const script = document.getElementById("naver-map-script");
      if (script) script.setAttribute("data-loaded", "true");
    }}
  />
);
