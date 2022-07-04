import React from "react";

export default function WildlifeTabContent(props) {
  const { content, rules, title, activeTab } = props;
  return (
    <div
      className={`${
        activeTab !== title && "hidden"
      } flex flex-row justify-center items-center h-80 mt-12`}
    >
      <div className="wildlife--description w-auto h-full flex-1 bg-green-100">
        <p className="pr-5">{content}</p>
      </div>
      <ul className="w-4/12 h-full rules flex flex-col text-left bg-green-100">
        <h1 className="bold font-bold text-2xl mb-3">Rules to Follow</h1>
        {rules.map((rule) => {
          return <li>{rule}</li>;
        })}
      </ul>
    </div>
  );
}
