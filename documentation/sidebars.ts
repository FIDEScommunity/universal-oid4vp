import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
import openapiSidebar from './docs/openapi/sidebar';
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
    docs: [
        {
            type: 'doc',
            id: 'universal-oid4vp-introduction', // Refers to documentation/docs/universal-oid4vp-introduction.md
            label: 'Introduction',
        },
        /* {
              type: 'doc',
              id: 'README', // Refers to documentation/docs/readme.md
              label: 'Readme',
          },*/
        {
            type: 'doc',
            id: 'implementation-examples',
            label: 'Implementation Examples',
        },
        {
            type: "category",
            label: "OpenAPI",
            link: {
                type: "generated-index",
                title: "Universal OID4VP API",
                description:
                    "This section is intended for developers and describes the actual REST API endpoints",
                slug: "/category/openapi",
            },
            items: [{
                type: 'link',
                href: '/universal-oid4vp/swagger/index.html',
                label: 'Swagger UI',

            },
                ...openapiSidebar],
        },
        // TODO: Look into how to modify the automatic openapi generator to include the swagger ui

    ]
};

export default sidebars;
