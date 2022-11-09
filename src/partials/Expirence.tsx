import { GradientText, Section } from 'astro-boilerplate-components';

const TABSANDINFO = [
  {
    label: 'Uibix',
    info: (
      <div>
        <h2 className="text-lg">
          Frontend Developer Intern <GradientText>@Uibix</GradientText>
        </h2>
        <span className="my-3 block text-xs text-blue-400">
          <GradientText>Jan 2021 - Jun 2021</GradientText>
        </span>
        <ul className="font-light">
          <li className="mb-2 flex items-start">
            <div className="mr-3 mt-2  inline-block w-3 overflow-hidden md:w-1">
              <div className="h-4  origin-top-left rotate-45 bg-cyan-400"></div>
            </div>{' '}
            <div className="w-11/12">
              Built various ui Reusable components in React used across
              applications and quickly built various prototypes with information
              gathered from the product team.
            </div>
          </li>
          <li className="mb-2 flex items-start">
            <div className="mr-3 mt-2  inline-block w-3 overflow-hidden md:w-1">
              <div className=" h-4  origin-top-left rotate-45 bg-cyan-400"></div>
            </div>{' '}
            <div className="w-11/12">
              Improved user experience and accomplish webpage objectives by
              creating site structure, navigation, page optimization and
              graphics integraton.
            </div>
          </li>
          <li className="mb-2 flex items-start">
            <div className="mr-3 mt-2  inline-block w-3 overflow-hidden md:w-1">
              <div className=" h-4  origin-top-left rotate-45 bg-cyan-400"></div>
            </div>{' '}
            <div className="w-11/12">
              Built stable and maintainable codebases using React.
            </div>
          </li>
        </ul>
      </div>
    ),
    order: 1,
  },
  {
    label: 'IQM Corporation',
    info: (
      <div>
        <h2 className="text-lg">
          Frontend Developer <GradientText>@IQM Corporation</GradientText>
        </h2>
        <span className="my-3 block text-xs text-blue-400">
          <GradientText>Jul 2021 - Present</GradientText>
        </span>
        <ul className="font-light">
          <li className="mb-2 flex items-start">
            <div className="mt-2 mr-2 inline-block w-3 overflow-hidden md:w-1">
              <div className=" h-4  origin-top-left rotate-45 bg-cyan-400"></div>
            </div>{' '}
            <div className="w-11/12">
              Wrote and maintained a new functionality for the product that was
              successfully implemented in production.
            </div>
          </li>
          <li className="mb-2 flex items-start">
            <div className="mr-3 mt-2 inline-block w-3 overflow-hidden md:w-1">
              <div className=" h-4  origin-top-left rotate-45 bg-cyan-400"></div>
            </div>{' '}
            <div className="w-11/12">
              Improved product UI using HTML,CSS, JavaScript and TypeScript.
            </div>
          </li>
          <li className="mb-2 flex items-start">
            <div className="mr-3 mt-2 inline-block w-3 overflow-hidden md:w-1">
              <div className=" h-4  origin-top-left rotate-45 bg-cyan-400"></div>
            </div>{' '}
            <div className="w-11/12">
              Improved the code structure, Built reusable functions.
            </div>
          </li>
        </ul>
      </div>
    ),
    order: 2,
  },
];

const Expirence = () => {
  return (
    <Section
      title={
        <>
          Where I've <GradientText>Worked</GradientText>
        </>
      }
    >
      <main className="flex">
        <aside className="">
          {TABSANDINFO.map((exp) => {
            return (
              <div key={exp.order}>
                <nav>
                  <ul>
                    <li className="mb-8 w-full border-l-2 p-4">
                      {/* <button
                        type="button"
                        className="pointer-events-auto block w-full cursor-pointer text-left text-xs font-semibold hover:bg-sky-900"
                        onMouseOver={() => {
                          setSelectedCareer(exp.order);
                        }}
                      >
                        {exp.label}
                      </button> */}
                      <div>{exp.info}</div>
                    </li>
                  </ul>
                </nav>
              </div>
            );
          })}
        </aside>
        {/* <div className="w-10/12 p-4">
          {TABSANDINFO.find((exp) => exp.order === selectedCareer)?.info}
        </div> */}
      </main>
    </Section>
  );
};

export { Expirence };
