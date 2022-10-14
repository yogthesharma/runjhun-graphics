import { Section } from 'astro-boilerplate-components';

import styles from './styles.module.css';

const FourOFour = () => {
  return (
    <Section>
      <div className={styles.errorPageContainer}>
        <div className={styles.text}>
          <div>ERROR</div>
          <h1>404</h1>
          <hr />
          <div>Page Not Found</div>
        </div>

        <div className={styles.astronaut}>
          <img
            src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png"
            alt=""
            className={styles.src}
          />
        </div>
      </div>
    </Section>
  );
};

export { FourOFour };
