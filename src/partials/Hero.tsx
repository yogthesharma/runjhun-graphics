import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const TECHNOLOGIES = [
  'React',
  'Svelte',
  'Nodejs',
  'Typescript',
  'Javascript',
  'Solidity',
];

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Yog Sharma</GradientText> 👋
          <br />
          <p className="text-xl font-semibold leading-loose">
            I build things for web.
          </p>
        </>
      }
      description={
        <>
          <p className="text-lg font-light leading-8">
            I am an excellent developer as long as I am getting my coffee on
            time. I have hands on expirence in Web2 technologies, I'm trying to
            simplify Web3. Open for any collaboration and discussion.
            <br />
          </p>
          <p className="text-lg leading-8">
            If you're fabricating something awesome, I'd love to hear about it.
            Even if you're not and just want to hang out and chill, just
            schedule a{' '}
            <a
              target="__blank"
              className="text-cyan-400 hover:underline"
              href="https://calendly.com/yogthesharma/30min"
            >
              call
            </a>
            .{' '}
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
          >
            Resume
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
