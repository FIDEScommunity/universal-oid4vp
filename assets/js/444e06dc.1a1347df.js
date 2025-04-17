"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[591],{47219:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"openapi/schemas/createauthorizationrequestresponse","title":"CreateAuthorizationRequestResponse","description":"","source":"@site/docs/openapi/schemas/createauthorizationrequestresponse.schema.mdx","sourceDirName":"openapi/schemas","slug":"/openapi/schemas/createauthorizationrequestresponse","permalink":"/universal-oid4vp/docs/openapi/schemas/createauthorizationrequestresponse","draft":false,"unlisted":false,"editUrl":null,"tags":[],"version":"current","frontMatter":{"id":"createauthorizationrequestresponse","title":"CreateAuthorizationRequestResponse","description":"","sidebar_label":"CreateAuthorizationRequestResponse","hide_title":true,"hide_table_of_contents":true,"schema":true,"sample":{"correlation_id":"2cc29d1c-7d00-46f8-b0ae-b4779d2ff143","query_id":"example-dcql-id","request_uri":"openid-vc://?request_uri=https://example.com/siop/definitions/PensionSdJwt/auth-requests/b5cab09e-7c08-42c9-870b-c2b83a2c8acd","status_uri":"https://example.com/oid4vp/backend/auth/status","qr_uri":"data:image/png;base64,iVBORw0<snip>ef="},"custom_edit_url":null},"sidebar":"docs","previous":{"title":"VerifiedDataOpts","permalink":"/universal-oid4vp/docs/openapi/schemas/verifieddataopts"},"next":{"title":"AuthorizationStatusResponse","permalink":"/universal-oid4vp/docs/openapi/schemas/authorizationstatusresponse"}}');var a=i(74848),r=i(28453),n=i(95730),o=i.n(n),u=i(9303);const c={id:"createauthorizationrequestresponse",title:"CreateAuthorizationRequestResponse",description:"",sidebar_label:"CreateAuthorizationRequestResponse",hide_title:!0,hide_table_of_contents:!0,schema:!0,sample:{correlation_id:"2cc29d1c-7d00-46f8-b0ae-b4779d2ff143",query_id:"example-dcql-id",request_uri:"openid-vc://?request_uri=https://example.com/siop/definitions/PensionSdJwt/auth-requests/b5cab09e-7c08-42c9-870b-c2b83a2c8acd",status_uri:"https://example.com/oid4vp/backend/auth/status",qr_uri:"data:image/png;base64,iVBORw0<snip>ef="},custom_edit_url:null},d=void 0,p={},l=[];function h(e){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.default,{as:"h1",className:"openapi__heading",children:"CreateAuthorizationRequestResponse"}),"\n",(0,a.jsx)(o(),{schema:{type:"object",required:["correlation_id","query_id","request_uri","status_uri"],properties:{correlation_id:{type:"string",description:"Unique identifier for the authentication session",example:"2cc29d1c-7d00-46f8-b0ae-b4779d2ff143"},query_id:{type:"string",description:"Identifier for the DCQL/PE query that specifies the requested Digital Credentials",example:"example-dcql-id"},request_uri:{type:"string",description:"(Deep)link URI that initiates the authentication flow by redirect. The wallet will use this value. Should be part of a redirect, link or QR code. This API requires Auth Request be references only, meaning `request_uri` only and no `request`",example:"openid-vc://?request_uri=https://example.com/siop/definitions/PensionSdJwt/auth-requests/b5cab09e-7c08-42c9-870b-c2b83a2c8acd"},status_uri:{type:"string",description:"Endpoint URL for checking the status of the authentication request, conforming to this OpenAPI specification",example:"https://example.com/oid4vp/backend/auth/status"},qr_uri:{type:"string",format:"dataurl",description:"The QR code image as generated by the RP in data Uri format. Only provided in case the request contained a qr_code object (can be an empty object). Should not be provided in case no qr_code property was present, or when it was null/undefined.",example:"data:image/png;base64,iVBORw0<snip>ef="}},title:"CreateAuthorizationRequestResponse"},schemaType:"response"})]})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h()}}}]);