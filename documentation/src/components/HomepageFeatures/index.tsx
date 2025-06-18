import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from "@docusaurus/Link";

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: 'Introduction',
        Svg: require('@site/static/img/universal_oid4vp_icon_only.svg').default,
        description: (
            <>
                The Universal OID4VP API is a simple, standardized interface that makes it easy for websites and native apps to request and verify Verifiable Credentials — using the
                OpenID for Verifiable Presentations (OID4VP) standard. <Link
                // className="button button--secondary button--lg"
                to="/docs/universal-oid4vp-introduction">
                Read more
            </Link>
            </>
        ),
    },
    {
        title: 'Implementation Examples',
        Svg: require('@site/static/img/implementation_examples_icon_only.svg').default,
        description: (
            <>
                There are multiple implementations available. <Link
                    // className="button button--secondary button--lg"
                    to="/docs/implementation-examples">
                    Read more
                </Link>
            </>
        ),
    },
    {
        title: 'Developers',
        Svg: require('@site/static/img/openapi_cogwheel_icon_custom.svg').default,
        description: (
            <>
                It is easy for developers to integrate their wallets, or integrate their webapps with OID4VP using OpenAPI. <Link
                    // className="button button--secondary button--lg"
                    to="/docs/openapi/universal-oid-4-vp">
                    Read more
                </Link>
            </>
        ),
    },
];

function Feature({title, Svg, description}: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img"/>
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
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
