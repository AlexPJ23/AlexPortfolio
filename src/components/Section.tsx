import React from "react";

interface SectionProps {
  sectionTitle: string;
  SectionDescription: string;
}

const Section: React.FC<SectionProps> = ({ sectionTitle, SectionDescription }) => {
  return (
    <section className="my-4">
      <h2 className="text-2xl font-semibold text-gray-700">{sectionTitle}</h2>
      <p className="text-lg text-gray-800">
        {SectionDescription}
      </p>
    </section>
  );
};

export default Section;
