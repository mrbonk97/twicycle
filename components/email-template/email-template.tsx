import * as React from "react";

interface Props {
  name: string;
  description: string;
  lat: number;
  lng: number;
  imageUrl: string;
}

export const EmailTemplate = ({ name, description, lat, lng, imageUrl }: Props) => (
  <div>
    <h1>이인거</h1>
    <h2>새로운 장소 등록 요청이 도착했습니다.</h2>
    <div>장소: {name}</div>
    <div>
      위도: {lat}, 경도: {lng}
    </div>
    <div>이미지 첨부: {imageUrl || "없음"}</div>
    <img src={imageUrl} alt={name} />
    <p>설명: {description}</p>
  </div>
);
