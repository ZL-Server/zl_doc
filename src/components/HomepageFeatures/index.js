import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
        title: '为什么使用我们的服务器Wiki？',

    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
        <>
            我们的服务器Wiki旨在为您提供以下方面的帮助，以使您在游戏中更加轻松、顺利地享受。<br></br>
            新手入门指南、游戏机制解释、资源和建筑指导社区活动和事件、常见问题解答

        </>
    ),
  },
  {
      title: '如何使用服务器Wiki？',

    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
        <>
            在Wiki中，我们努力将所有的信息都整理得清晰易懂，以便每位玩家都能受益。如果您有任何反馈、建议或需要帮助，我们管理员团队随时愿意为您提供支持。
        </>
    ),
  },
  {
      title: '我该做什么？',

    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
        <>
            感谢您选择加入我们的游戏社区，我们希望这个Wiki能够为您的游戏之旅增添乐趣和便利！
        </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
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
