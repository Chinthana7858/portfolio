"use client";

import PageHeading from "@/Components/PageHeading";
import PageShell from "@/Components/PageShell";
import SectionHeading from "@/Components/SectionHeading";
import SkillGroups from "@/Components/about/SkillGroups";
import TextListSection from "@/Components/about/TextListSection";
import Timeline from "@/Components/about/Timeline";
import {
  achievements,
  skillGroups,
  timelineEntries,
  volunteerExperience,
} from "@/data/about";

export default function AboutClient() {
  return (
    <PageShell bottomSpacerClassName="h-9">
      {({ dark }) => (
        <div className="text-start">
          <PageHeading>About</PageHeading>

          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.85fr)]">
            <div>
            <SectionHeading>Experience & Education</SectionHeading>
            <Timeline entries={timelineEntries} dark={dark} />

            <SectionHeading>Achievements</SectionHeading>
            <TextListSection items={achievements} dark={dark} />

            <SectionHeading>Volunteer Experience</SectionHeading>
            <TextListSection items={volunteerExperience} dark={dark} />
            </div>

            <aside className="lg:sticky lg:top-28">
              <SectionHeading>Skills</SectionHeading>
              <SkillGroups groups={skillGroups} dark={dark} layout="sidebar" />
            </aside>
          </div>
        </div>
      )}
    </PageShell>
  );
}
