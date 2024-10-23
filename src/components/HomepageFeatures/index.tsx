import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Interactive',
    Svg: require('@site/static/img/undraw_educator_re_ju47.svg').default,
    description: (
      <>
        WIMS offers data path visualization and step-by-step execution to improve learning.
      </>
    ),
  },
  {
    title: 'Accessible',
    Svg: require('@site/static/img/undraw_programmer_re_owql.svg').default,
    description: (
      <>
        WIMS is a web-based simulator, enabling easy access from any device.
      </>
    ),
  },
  {
    title: 'Modern Technologies',
    Svg: require('@site/static/img/undraw_react_re_g3ui.svg').default,
    description: (
      <>
        Built with React and TypeScript for a responsive and maintainable interface.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
