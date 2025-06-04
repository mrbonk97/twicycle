import Script from "next/script";

export const NaverMapScript = () => (
  <Script
    id="naver-map-script"
    type="text/javascript"
    src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NAVER_CLIENT_ID}`}
  />
);
