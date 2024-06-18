import React from "react";

interface SectionProps {
  Title: string;
  Description: string;
}

const Section: React.FC<SectionProps> = ({ Title, Description }) => {
  return (
    <section className="my-4">
      <h2 className="text-2xl font-semibold text-gray-700">{Title}</h2>
      <p className="text-lg text-gray-800">
        {Description}
      </p>
    </section>
  );
};

export default Section;
