(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[9],{1163:function(e,t,n){"use strict";var r=n(1),a=n(5),o=n(0),i=(n(2),n(4)),c=n(246),u=n(7),s=o.forwardRef((function(e,t){var n=e.classes,u=e.className,s=e.raised,l=void 0!==s&&s,f=Object(a.a)(e,["classes","className","raised"]);return o.createElement(c.a,Object(r.a)({className:Object(i.a)(n.root,u),elevation:l?8:1,ref:t},f))}));t.a=Object(u.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},1174:function(e,t,n){"use strict";var r=n(1),a=n(5),o=n(0),i=(n(2),n(4)),c=n(7),u=o.forwardRef((function(e,t){var n=e.classes,c=e.className,u=e.component,s=void 0===u?"div":u,l=Object(a.a)(e,["classes","className","component"]);return o.createElement(s,Object(r.a)({className:Object(i.a)(n.root,c),ref:t},l))}));t.a=Object(c.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(u)},1197:function(e,t,n){"use strict";var r=n(1),a=n(5),o=n(0),i=(n(2),n(4)),c=n(7),u=n(127),s=o.forwardRef((function(e,t){var n=e.action,c=e.avatar,s=e.classes,l=e.className,f=e.component,p=void 0===f?"div":f,d=e.disableTypography,v=void 0!==d&&d,g=e.subheader,b=e.subheaderTypographyProps,m=e.title,y=e.titleTypographyProps,h=Object(a.a)(e,["action","avatar","classes","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"]),O=m;null==O||O.type===u.a||v||(O=o.createElement(u.a,Object(r.a)({variant:c?"body2":"h5",className:s.title,component:"span",display:"block"},y),O));var j=g;return null==j||j.type===u.a||v||(j=o.createElement(u.a,Object(r.a)({variant:c?"body2":"body1",className:s.subheader,color:"textSecondary",component:"span",display:"block"},b),j)),o.createElement(p,Object(r.a)({className:Object(i.a)(s.root,l),ref:t},h),c&&o.createElement("div",{className:s.avatar},c),o.createElement("div",{className:s.content},O,j),n&&o.createElement("div",{className:s.action},n))}));t.a=Object(c.a)({root:{display:"flex",alignItems:"center",padding:16},avatar:{flex:"0 0 auto",marginRight:16},action:{flex:"0 0 auto",alignSelf:"flex-start",marginTop:-8,marginRight:-8},content:{flex:"1 1 auto"},title:{},subheader:{}},{name:"MuiCardHeader"})(s)},1198:function(e,t,n){"use strict";var r=n(189);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),o=(0,r(n(247)).default)(a.default.createElement("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm-1 4l6 6v10c0 1.1-.9 2-2 2H7.99C6.89 23 6 22.1 6 21l.01-14c0-1.1.89-2 1.99-2h7zm-1 7h5.5L14 6.5V12z"}),"FileCopy");t.default=o},1239:function(e,t,n){"use strict";var r=n(1),a=n(5),o=n(0),i=(n(2),n(4)),c=n(7),u=n(91),s=o.forwardRef((function(e,t){var n=e.classes,c=e.className,s=Object(a.a)(e,["classes","className"]),l=o.useContext(u.a);return o.createElement("div",Object(r.a)({className:Object(i.a)(n.root,c,"flex-start"===l.alignItems&&n.alignItemsFlexStart),ref:t},s))}));t.a=Object(c.a)((function(e){return{root:{minWidth:56,color:e.palette.action.active,flexShrink:0,display:"inline-flex"},alignItemsFlexStart:{marginTop:8}}}),{name:"MuiListItemIcon"})(s)},1554:function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));var r=n(0),a=n.n(r),o=n(2),i=n.n(o),c=n(561),u=new Map([["avi","video/avi"],["gif","image/gif"],["ico","image/x-icon"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["mkv","video/x-matroska"],["mov","video/quicktime"],["mp4","video/mp4"],["pdf","application/pdf"],["png","image/png"],["zip","application/zip"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]]);function s(e,t){var n=function(e){var t=e.name;if(t&&-1!==t.lastIndexOf(".")&&!e.type){var n=t.split(".").pop().toLowerCase(),r=u.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!==typeof n.path){var r=e.webkitRelativePath;Object.defineProperty(n,"path",{value:"string"===typeof t?t:"string"===typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=[".DS_Store","Thumbs.db"];function f(e){return c.b(this,void 0,void 0,(function(){return c.c(this,(function(t){return[2,(n=e,n.dataTransfer&&e.dataTransfer?d(e.dataTransfer,e.type):p(e))];var n}))}))}function p(e){return(null!==e.target&&e.target.files?g(e.target.files):[]).map((function(e){return s(e)}))}function d(e,t){return c.b(this,void 0,void 0,(function(){var n;return c.c(this,(function(r){switch(r.label){case 0:return e.items?(n=g(e.items).filter((function(e){return"file"===e.kind})),"drop"!==t?[2,n]:[4,Promise.all(n.map(b))]):[3,2];case 1:return[2,v(m(r.sent()))];case 2:return[2,v(g(e.files).map((function(e){return s(e)})))]}}))}))}function v(e){return e.filter((function(e){return-1===l.indexOf(e.name)}))}function g(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];t.push(r)}return t}function b(e){if("function"!==typeof e.webkitGetAsEntry)return y(e);var t=e.webkitGetAsEntry();return t&&t.isDirectory?O(t):y(e)}function m(e){return e.reduce((function(e,t){return c.d(e,Array.isArray(t)?m(t):[t])}),[])}function y(e){var t=e.getAsFile();if(!t)return Promise.reject(e+" is not a File");var n=s(t);return Promise.resolve(n)}function h(e){return c.b(this,void 0,void 0,(function(){return c.c(this,(function(t){return[2,e.isDirectory?O(e):j(e)]}))}))}function O(e){var t=e.createReader();return new Promise((function(e,n){var r=[];!function a(){var o=this;t.readEntries((function(t){return c.b(o,void 0,void 0,(function(){var o,i,u;return c.c(this,(function(c){switch(c.label){case 0:if(t.length)return[3,5];c.label=1;case 1:return c.trys.push([1,3,,4]),[4,Promise.all(r)];case 2:return o=c.sent(),e(o),[3,4];case 3:return i=c.sent(),n(i),[3,4];case 4:return[3,6];case 5:u=Promise.all(t.map(h)),r.push(u),a(),c.label=6;case 6:return[2]}}))}))}),(function(e){n(e)}))}()}))}function j(e){return c.b(this,void 0,void 0,(function(){return c.c(this,(function(t){return[2,new Promise((function(t,n){e.file((function(n){var r=s(n,e.fullPath);t(r)}),(function(e){n(e)}))}))]}))}))}var D=n(1588),w=n.n(D);function F(e,t){return"application/x-moz-file"===e.type||w()(e,t)}function E(e,t,n){if(x(e.size)){if(x(t)&&x(n))return e.size>=t&&e.size<=n;if(x(t))return e.size>=t;if(x(n))return e.size<=n}return!0}function x(e){return void 0!==e&&null!==e}function k(e){var t=e.files,n=e.accept,r=e.minSize,a=e.maxSize;return!(!e.multiple&&t.length>1)&&t.every((function(e){return F(e,n)&&E(e,r,a)}))}function P(e){return"function"===typeof e.isPropagationStopped?e.isPropagationStopped():"undefined"!==typeof e.cancelBubble&&e.cancelBubble}function C(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,(function(e){return"Files"===e||"application/x-moz-file"===e})):!!e.target&&!!e.target.files}function A(e){e.preventDefault()}function S(e){return-1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")}function T(e){return-1!==e.indexOf("Edge/")}function z(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window.navigator.userAgent;return S(e)||T(e)}function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return t.some((function(t){return!P(e)&&t&&t.apply(void 0,[e].concat(r)),P(e)}))}}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function L(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e))&&"[object Arguments]"!==Object.prototype.toString.call(e))return;var n=[],r=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){a=!0,o=u}finally{try{r||null==c.return||c.return()}finally{if(a)throw o}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(n,!0).forEach((function(t){K(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function B(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _=Object(r.forwardRef)((function(e,t){var n=e.children,o=V(B(e,["children"])),i=o.open,c=B(o,["open"]);return Object(r.useImperativeHandle)(t,(function(){return{open:i}}),[i]),a.a.createElement(r.Fragment,null,n(M({},c,{open:i})))}));_.displayName="Dropzone",_.propTypes={children:i.a.func,accept:i.a.oneOfType([i.a.string,i.a.arrayOf(i.a.string)]),multiple:i.a.bool,preventDropOnDocument:i.a.bool,noClick:i.a.bool,noKeyboard:i.a.bool,noDrag:i.a.bool,noDragEventsBubbling:i.a.bool,minSize:i.a.number,maxSize:i.a.number,disabled:i.a.bool,getFilesFromEvent:i.a.func,onFileDialogCancel:i.a.func,onDragEnter:i.a.func,onDragLeave:i.a.func,onDragOver:i.a.func,onDrop:i.a.func,onDropAccepted:i.a.func,onDropRejected:i.a.func};var H={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]};function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.accept,n=e.disabled,a=void 0!==n&&n,o=e.getFilesFromEvent,i=void 0===o?f:o,c=e.maxSize,u=void 0===c?1/0:c,s=e.minSize,l=void 0===s?0:s,p=e.multiple,d=void 0===p||p,v=e.onDragEnter,g=e.onDragLeave,b=e.onDragOver,m=e.onDrop,y=e.onDropAccepted,h=e.onDropRejected,O=e.onFileDialogCancel,j=e.preventDropOnDocument,D=void 0===j||j,w=e.noClick,x=void 0!==w&&w,S=e.noKeyboard,T=void 0!==S&&S,I=e.noDrag,_=void 0!==I&&I,V=e.noDragEventsBubbling,q=void 0!==V&&V,G=Object(r.useRef)(null),J=Object(r.useRef)(null),$=Object(r.useReducer)(W,H),Q=L($,2),U=Q[0],X=Q[1],Y=U.isFocused,Z=U.isFileDialogActive,ee=U.draggedFiles,te=Object(r.useCallback)((function(){J.current&&(X({type:"openDialog"}),J.current.value=null,J.current.click())}),[X]),ne=function(){Z&&setTimeout((function(){J.current&&(J.current.files.length||(X({type:"closeDialog"}),"function"===typeof O&&O()))}),300)};Object(r.useEffect)((function(){return window.addEventListener("focus",ne,!1),function(){window.removeEventListener("focus",ne,!1)}}),[J,Z,O]);var re=Object(r.useCallback)((function(e){G.current&&G.current.isEqualNode(e.target)&&(32!==e.keyCode&&13!==e.keyCode||(e.preventDefault(),te()))}),[G,J]),ae=Object(r.useCallback)((function(){X({type:"focus"})}),[]),oe=Object(r.useCallback)((function(){X({type:"blur"})}),[]),ie=Object(r.useCallback)((function(){x||(z()?setTimeout(te,0):te())}),[J,x]),ce=Object(r.useRef)([]),ue=function(e){G.current&&G.current.contains(e.target)||(e.preventDefault(),ce.current=[])};Object(r.useEffect)((function(){return D&&(document.addEventListener("dragover",A,!1),document.addEventListener("drop",ue,!1)),function(){D&&(document.removeEventListener("dragover",A),document.removeEventListener("drop",ue))}}),[G,D]);var se=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e),-1===ce.current.indexOf(e.target)&&(ce.current=[].concat(N(ce.current),[e.target])),C(e)&&Promise.resolve(i(e)).then((function(t){P(e)&&!q||(X({draggedFiles:t,isDragActive:!0,type:"setDraggedFiles"}),v&&v(e))}))}),[i,v,q]),le=Object(r.useCallback)((function(e){if(e.preventDefault(),e.persist(),be(e),e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(t){}return C(e)&&b&&b(e),!1}),[b,q]),fe=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e);var t=ce.current.filter((function(t){return t!==e.target&&G.current&&G.current.contains(t)}));ce.current=t,t.length>0||(X({isDragActive:!1,type:"setDraggedFiles",draggedFiles:[]}),C(e)&&g&&g(e))}),[G,g,q]),pe=Object(r.useCallback)((function(e){e.preventDefault(),e.persist(),be(e),ce.current=[],C(e)&&Promise.resolve(i(e)).then((function(n){if(!P(e)||q){var r=[],a=[];n.forEach((function(e){F(e,t)&&E(e,l,u)?r.push(e):a.push(e)})),!d&&r.length>1&&a.push.apply(a,N(r.splice(0))),X({acceptedFiles:r,rejectedFiles:a,type:"setFiles"}),m&&m(r,a,e),a.length>0&&h&&h(a,e),r.length>0&&y&&y(r,e)}})),X({type:"reset"})}),[d,t,l,u,i,m,y,h,q]),de=function(e){return a?null:e},ve=function(e){return T?null:de(e)},ge=function(e){return _?null:de(e)},be=function(e){q&&e.stopPropagation()},me=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refKey,n=void 0===t?"ref":t,r=e.onKeyDown,o=e.onFocus,i=e.onBlur,c=e.onClick,u=e.onDragEnter,s=e.onDragOver,l=e.onDragLeave,f=e.onDrop,p=B(e,["refKey","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return M(K({onKeyDown:ve(R(r,re)),onFocus:ve(R(o,ae)),onBlur:ve(R(i,oe)),onClick:de(R(c,ie)),onDragEnter:ge(R(u,se)),onDragOver:ge(R(s,le)),onDragLeave:ge(R(l,fe)),onDrop:ge(R(f,pe))},n,G),a||T?{}:{tabIndex:0},{},p)}}),[G,re,ae,oe,ie,se,le,fe,pe,T,_,a]),ye=Object(r.useCallback)((function(e){e.stopPropagation()}),[]),he=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.refKey,r=void 0===n?"ref":n,a=e.onChange,o=e.onClick,i=B(e,["refKey","onChange","onClick"]),c=K({accept:t,multiple:d,type:"file",style:{display:"none"},onChange:de(R(a,pe)),onClick:de(R(o,ye)),autoComplete:"off",tabIndex:-1},r,J);return M({},c,{},i)}}),[J,t,d,pe,a]),Oe=ee.length,je=Oe>0&&k({files:ee,accept:t,minSize:l,maxSize:u,multiple:d}),De=Oe>0&&!je;return M({},U,{isDragAccept:je,isDragReject:De,isFocused:Y&&!a,getRootProps:me,getInputProps:he,rootRef:G,inputRef:J,open:de(te)})}function W(e,t){switch(t.type){case"focus":return M({},e,{isFocused:!0});case"blur":return M({},e,{isFocused:!1});case"openDialog":return M({},e,{isFileDialogActive:!0});case"closeDialog":return M({},e,{isFileDialogActive:!1});case"setDraggedFiles":var n=t.isDragActive;return M({},e,{draggedFiles:t.draggedFiles,isDragActive:n});case"setFiles":return M({},e,{acceptedFiles:t.acceptedFiles,rejectedFiles:t.rejectedFiles});case"reset":return M({},e,{isFileDialogActive:!1,isDragActive:!1,draggedFiles:[],acceptedFiles:[],rejectedFiles:[]});default:return e}}},1588:function(e,t){e.exports=function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(e&&t){var n=Array.isArray(t)?t:t.split(","),r=e.name||"",a=e.type||"",o=a.replace(/\/.*$/,"");return n.some((function(e){var t=e.trim();return"."===t.charAt(0)?r.toLowerCase().endsWith(t.toLowerCase()):t.endsWith("/*")?o===t.replace(/\/.*$/,""):a===t}))}return!0}}])}}]);
//# sourceMappingURL=9.0d4fd8ff.chunk.js.map