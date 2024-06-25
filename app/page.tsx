import { Header } from "@/components/header";
import { Keywords } from "@/components/keywords";
import { Section } from "@/components/section";

import data from "../lib/cv-data";
import { WorkExperience } from "@/components/work-experience";

export default function CV() {
  return (
    <main className="container mx-auto max-w-screen-lg p-10 flex flex-col gap-12">
      <Header title={data.header.title} subtitle={data.header.subtitle} />

      <Section title="Key skills">
        <Keywords items={data.keySkills} />
      </Section>

      <Section title="Work experience">
        <div className="flex flex-col">
          {data.workExperience.map((workExperience) => (
            <WorkExperience key={workExperience.title} {...workExperience} />
          ))}
        </div>
      </Section>
    </main>
  );
}
