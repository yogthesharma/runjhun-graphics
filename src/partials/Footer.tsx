import { Section } from 'astro-boilerplate-components';

const Footer = () => (
  <Section>
    <div className="relative flex flex-col items-center py-5">
      <div className="w-full grow border-t border-gray-700"></div>
      <p className="mt-4 font-semibold">Made with ❤️ in India</p>
    </div>
  </Section>
);

export { Footer };
