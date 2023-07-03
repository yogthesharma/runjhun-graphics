import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const projectInfo = [
  {
    name: 'Netflix Clone',
    description:
      'Experience the magic of a Netflix-inspired world with my Figma clone design. Immerse yourself in the captivating interface and discover a seamless journey of browsing, searching, and enjoying your favorite shows and movies. Get a taste of the future of streaming as you navigate through sleek visuals and intuitive user interactions. Lights, camera, interaction!',
    link: 'https://www.figma.com/proto/k45H7jLwFUXi6QATHecZUF/netflix?page-id=0%3A1&type=design&node-id=1-2&viewport=184%2C182%2C0.33&t=UxOFtNhx58Lg4mfk-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design',
    tags: ['netflix', 'figma', 'clone'],
  },
  {
    name: 'Apple Website design',
    description:
      'Step into a stunning digital realm inspired by the iconic Apple website. Explore the meticulously crafted Figma clone, where elegant simplicity meets cutting-edge design. Engage with the familiar elegance and effortless navigation as you discover the latest innovations, products, and services. Immerse yourself in a world of sleek aesthetics and intuitive interactions, and witness the art of digital perfection. Welcome to the Apple-inspired journey of inspiration and innovation.',
    link: 'https://www.figma.com/proto/BIO8ohvL9SY9SVq8pa9C9z/apple?page-id=0%3A1&type=design&node-id=1-2&viewport=426%2C329%2C0.12&t=C7nTJ8USDW1cShwu-1&scaling=scale-down&starting-point-node-id=1%3A2&mode=design',
    tags: ['apple', 'figma', 'clone', 'iphone'],
  },
  {
    name: 'Wedding invitation',
    description: `Embark on a romantic journey through my Figma clone of a dreamy wedding website. Delve into a world of love and celebration as you explore enchanting designs and personalized details. From elegant invitations to beautiful photo galleries, experience the essence of your special day come to life. Let the harmonious blend of aesthetics and functionality guide you through seamless RSVPs, event information, and heartfelt stories. Get ready to say 'I do' to an extraordinary digital experience that captures the magic of your love story.`,
    link: 'https://www.figma.com/proto/RDsL7gZsPPKuCx3KjXnE2W/Untitled?page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2&mode=design&t=E0xWc5CVK47V0eg4-1',
    tags: ['wedding', 'figma', 'ui/ux', 'family'],
  },
  {
    name: 'Visiting Card',
    description:
      'Unleash your professional presence with my Figma clone of a captivating visiting card design. Elevate your personal brand with a perfect blend of aesthetics and information. Experience the power of a visually striking card that leaves a lasting impression. From sleek typography to exquisite color palettes, every element is meticulously crafted to reflect your unique identity. Stand out from the crowd and make your mark with a visiting card that speaks volumes about your professionalism and creativity. Unlock the door to endless networking opportunities with a card that truly represents you.',
    link: 'https://www.figma.com/proto/VDfIqpNZ5LTOq7m73BsuU8/Untitled?page-id=0%3A1&type=design&node-id=102-3&viewport=177%2C217%2C0.35&t=qoJWOiWWMu8xja63-1&scaling=min-zoom&mode=design',
    tags: ['Card', 'figma', 'ui/ux'],
  },
  {
    name: 'Instagram Post',
    description:
      'Ignite your Instagram feed with my Figma clone of a captivating post design. Discover a world of visually stunning content that sparks intrigue and captivates your followers. From vibrant imagery to engaging typography, each post is meticulously crafted to tell a compelling story. Experience the art of social media aesthetics as you effortlessly share your passions, inspirations, and moments of creativity. Unlock the potential for endless likes, comments, and shares with Instagram posts that leave a lasting impression. Get ready to stand out in the digital realm and create an irresistible visual feast for your audience.',
    link: 'https://www.figma.com/proto/jqqjDwHs3TZJpvQ877mVTs/Untitled?page-id=0%3A1&type=design&node-id=1-2&viewport=426%2C336%2C0.54&t=voljpsn5xp3sRX5T-1&scaling=min-zoom&mode=design',
    tags: ['instagram', 'figma', 'ui/ux', 'post'],
  },
];

const ProjectList = () => (
  <Section
    title={
      <>
        Some <GradientText>Projects</GradientText> That I Worked On
      </>
    }
  >
    <div className="flex flex-col gap-6">
      {/* Yha Se */}
      {projectInfo.map((val) => (
        <Project
          name={val.name}
          description={val.description}
          link={val.link}
          img={{
            src: '/assets/images/project-web-design.png',
            alt: 'Project Web Design',
          }}
          category={
            <div className="flex items-center justify-center">
              {val.tags.map((item) => (
                <div className="ml-4">
                  <Tags color={ColorTags.CYAN}>{item}</Tags>
                </div>
              ))}
            </div>
          }
        />
      ))}
      {/* Yha Tak */}
    </div>
  </Section>
);

export { ProjectList };
