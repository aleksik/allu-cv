import { type Project } from "@/lib/cv-data";

import { BulletPoints } from "./bullet-points";
import { Keywords } from "./keywords";
import { GithubIcon, GlobeIcon } from "lucide-react";

type ProjectProps = Project;

export function Project({
  name,
  jobTitle,
  description,
  bulletPoints,
  keywords,
  website,
  github,
}: ProjectProps) {
  const hasLinks = website || github;

  return (
    <div className="bg-surface rounded-lg p-4 flex flex-col gap-2">
      <div className="font-semibold">{name}</div>
      <div className="text-subtle">{jobTitle}</div>
      <div className="flex flex-col gap-4 mt-2">
        {description.map((descriptionLine) => (
          <p key={descriptionLine}>{descriptionLine}</p>
        ))}
        <BulletPoints items={bulletPoints} />
        <Keywords small items={keywords} />
        {hasLinks && (
          <div className="flex flex-row items-center justify-start gap-2">
            {website && (
              <a
                href={website}
                target="_blank"
                title="Website"
                className="inline-flex flex-row items-center justify-center gap-2 hover:bg-rose/20 transition-colors text-rose text-xs py-1 px-2 rounded-full"
              >
                <GlobeIcon className="size-4" /> Website
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                className="inline-flex flex-row items-center justify-center gap-2 hover:bg-rose/20 transition-colors text-rose text-xs py-1 px-2 rounded-full"
              >
                <GithubIcon className="size-4" /> Github
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
