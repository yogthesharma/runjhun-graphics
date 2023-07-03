import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const TECHNOLOGIES = [
  'Figma',
  'Photoshop',
  'Responsive Design',
  'UX First Approach',
];

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Runjhun Sharma</GradientText> 👋
          <br />
          <p className="text-xl font-semibold leading-loose">
            I create intuitive and visually appealing user experiences.
          </p>
        </>
      }
      description={
        <>
          <p className="text-lg font-light leading-8">
            I am a passionate UI/UX designer dedicated to creating engaging and
            delightful user experiences. With a keen eye for aesthetics and a
            deep understanding of user-centered design principles, I strive to
            craft visually stunning interfaces that are intuitive and easy to
            use. I believe in the power of design to solve problems and enhance
            the way people interact with digital products. I am constantly
            exploring the latest design trends and technologies to stay at the
            forefront of the industry.
            <br />
          </p>
          <div className="mt-6">
            <h2 className="mb-4 text-2xl font-semibold">
              Some technologies I like to work with:
            </h2>
            <div className="grid w-2/3 grid-cols-2 grid-rows-3 md:w-1/2">
              {TECHNOLOGIES.map((tech) => (
                <span key={tech} className="mb-2 flex items-center">
                  <div className="mr-3  inline-block w-2 overflow-hidden">
                    <div className=" h-4  origin-top-left rotate-45 bg-cyan-400"></div>
                  </div>{' '}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            className="mt-4 border border-cyan-400 py-2 px-6 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-black"
            target="__blank"
            href="/assets/resume/Resume.pdf"
            download
          >
            Resume
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
