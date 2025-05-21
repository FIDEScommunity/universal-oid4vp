import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';
// import openapiSidebar from './docs/openapi/sidebar';
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

       {
            type: 'doc',
            id: 'README', // Refers to documentation/docs/readme.md
            label: 'Readme',
        },
        {
            type: 'doc',
            id: 'implementation-examples',
            label: 'Implementation Examples',
        },
//        {
//            type: "category",
//            label: "OpenAPI",
//            link: {
//                type: "generated-index",
//                title: "Universal OID4VP API",
//                description:
//                    "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
//                slug: "/category/openapi",
//            },
//            items: openapiSidebar,
//        }
    ]
};

export default sidebars;
