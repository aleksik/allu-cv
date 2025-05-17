"use client";

import { type Experience } from "@/lib/cv-data";
import { BulletPoints } from "./bullet-points";
import { Keywords } from "./keywords";
import { Project } from "./project";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { usePostHog } from "posthog-js/react";
import { GlobeIcon } from "lucide-react";

type WorkExperienceProps = Experience & { tight?: boolean };

export function Experience({
  title,
  years,
  jobTitle,
  description,
  bulletPoints,
  keywords,
  projects: allProjects,
  numOfProjectsToShow,
  showMoreButtonText,
  tight = false,
  website,
}: WorkExperienceProps) {
  const posthog = usePostHog();

  const [showAllProjects, setShowAllProjects] = useState(
    numOfProjectsToShow === undefined ||
    numOfProjectsToShow === allProjects.length
  );

  const projects = showAllProjects
    ? allProjects
    : allProjects.slice(0, numOfProjectsToShow);

  return (
    <div
      className={cn(
        "flex flex-col gap-2 border-b first:pt-0 last:border-none",
        tight ? "py-6" : "py-16"
      )}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="text-lg font-semibold">{title}</div>
        <div className="text-subtle text-sm">{years}</div>
      </div>
      <div className="text-subtle text-sm">{jobTitle}</div>
      <div className="flex flex-col gap-5 text-sm leading-relaxed mt-3">
        {description.map((description) => (
          <p key={description}>{description}</p>
        ))}

        {bulletPoints.length > 0 && <BulletPoints items={bulletPoints} />}

        {keywords.length > 0 && <Keywords small items={keywords} />}

        {website && (
          <div>
            <a
              href={website}
              target="_blank"
              title="Website"
              className="inline-flex flex-row items-center justify-center gap-2 hover:bg-rose/20 transition-colors text-rose text-xs py-1 px-2 rounded-full"
            >
              <GlobeIcon className="size-4" /> Website
            </a>
          </div>
        )}


        {projects.length > 0 && (
          <>
            <div className="font-semibold">Selected projects:</div>
            {projects.map((project) => (
              <Project key={project.name} {...project} />
            ))}
          </>
        )}

        {showAllProjects === false && (
          <div className="flex flex-row justify-center">
            <button
              onClick={() => {
                setShowAllProjects(true);
                posthog.capture('show_all', { job: title })
              }}
              className="text-iris hover:bg-iris/30 py-2 px-3 rounded-full text-xs transition-colors"
            >
              {showMoreButtonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
