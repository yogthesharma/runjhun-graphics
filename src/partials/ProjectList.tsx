import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="LittleSeeds NGO"
        description="A non-profit project for a non-profit organization. I developed this project to kick-start my career using latest and trending technologies."
        link="http://littleseedsngo.org/"
        img={{
          src: '/assets/images/project-web-design.png',
          alt: 'Project Web Design',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Next.js</Tags>
            <Tags color={ColorTags.LIME}>Web design</Tags>
            <Tags color={ColorTags.SKY}>Styled Components</Tags>
            <Tags color={ColorTags.ROSE}>Strapi.js</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
