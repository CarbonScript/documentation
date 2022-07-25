import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Basic Tutorials",
    Svg: require("@site/static/img/Basic-Tutorials.svg").default,
    description: <>Provide basic grammar, language feature tutorials, and write runnable programs based on them</>,
  },
  {
    title: "Compiler and Tools",
    Svg: require("@site/static/img/Compiler-and-Tools.svg").default,
    description: (
      <>
        Guide the construction of the programming environment and the setting of the compiler, and correctly compile,
        package and execute the program.
      </>
    ),
  },
  {
    title: "Example Programs",
    Svg: require("@site/static/img/Example-Programs.svg").default,
    description: <>Provide some sample programs and code. Mining the features of language in all aspects.</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
