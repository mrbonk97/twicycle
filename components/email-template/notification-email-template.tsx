import * as React from "react";

interface EmailTemplateProps {
  name: string;
}

export const NotificationEmailTemplate: React.FC<
  Readonly<EmailTemplateProps>
> = ({ name }) => (
  <div>
    <h1>🚴‍♂️이인거🚴‍♂️</h1>
    <p className="mt-5">새로운 장소 제보에 감사드립니다.</p>
    <p> 장소: {name}가 등록되면 알림 메일을 발송해드리겠습니다.</p>
  </div>
);
