(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[169],{18314:function(e,t,n){"use strict";var r=n(41811);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,a){if(a!==r){var l=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},74404:function(e,t,n){e.exports=n(18314)()},41811:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},42711:function(e,t,n){"use strict";n.d(t,{fh:function(){return ej}});var r=n(2265),o=n(74404);let i=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function a(e,t){let n=function(e){let{name:t}=e;if(t&&-1!==t.lastIndexOf(".")&&!e.type){let n=t.split(".").pop().toLowerCase(),r=i.get(n);r&&Object.defineProperty(e,"type",{value:r,writable:!1,configurable:!1,enumerable:!0})}return e}(e);if("string"!=typeof n.path){let{webkitRelativePath:r}=e;Object.defineProperty(n,"path",{value:"string"==typeof t?t:"string"==typeof r&&r.length>0?r:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}var l=(e,t,n)=>new Promise((r,o)=>{var i=e=>{try{l(n.next(e))}catch(e){o(e)}},a=e=>{try{l(n.throw(e))}catch(e){o(e)}},l=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,a);l((n=n.apply(e,t)).next())});let c=[".DS_Store","Thumbs.db"];function s(e){return"object"==typeof e&&null!==e}function u(e){return e.filter(e=>-1===c.indexOf(e.name))}function p(e){if(null===e)return[];let t=[];for(let n=0;n<e.length;n++){let r=e[n];t.push(r)}return t}function f(e){if("function"!=typeof e.webkitGetAsEntry)return d(e);let t=e.webkitGetAsEntry();return t&&t.isDirectory?g(t):d(e)}function d(e){let t=e.getAsFile();return t?Promise.resolve(a(t)):Promise.reject(`${e} is not a File`)}function m(e){return l(this,null,function*(){return e.isDirectory?g(e):function(e){return l(this,null,function*(){return new Promise((t,n)=>{e.file(n=>{t(a(n,e.fullPath))},e=>{n(e)})})})}(e)})}function g(e){let t=e.createReader();return new Promise((e,n)=>{let r=[];!function o(){t.readEntries(t=>l(this,null,function*(){if(t.length){let e=Promise.all(t.map(m));r.push(e),o()}else try{let t=yield Promise.all(r);e(t)}catch(e){n(e)}}),e=>{n(e)})}()})}var v=Object.defineProperty,y=Object.defineProperties,b=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,w=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t)=>{for(var n in t||(t={}))D.call(t,n)&&w(e,n,t[n]);if(h)for(var n of h(t))x.call(t,n)&&w(e,n,t[n]);return e},k=(e,t)=>y(e,b(t));let O=e=>{let t=Array.isArray(e=Array.isArray(e)&&1===e.length?e[0]:e)?`one of ${e.join(", ")}`:e;return{code:"file-invalid-type",message:`File type must be ${t}`}},j=e=>({code:"file-too-large",message:`File is larger than ${e} ${1===e?"byte":"bytes"}`}),F=e=>({code:"file-too-small",message:`File is smaller than ${e} ${1===e?"byte":"bytes"}`}),z={code:"too-many-files",message:"Too many files"};function C(e,t){let n="application/x-moz-file"===e.type||function(e,t){if(e&&t){let n=Array.isArray(t)?t:t.split(","),r=e.name||"",o=(e.type||"").toLowerCase(),i=o.replace(/\/.*$/,"");return n.some(e=>{let t=e.trim().toLowerCase();return"."===t.charAt(0)?r.toLowerCase().endsWith(t):t.endsWith("/*")?i===t.replace(/\/.*$/,""):o===t})}return!0}(e,t);return[n,n?null:O(t)]}function A(e,t,n){if(P(e.size)){if(P(t)&&P(n)){if(e.size>n)return[!1,j(n)];if(e.size<t)return[!1,F(t)]}else if(P(t)&&e.size<t)return[!1,F(t)];else if(P(n)&&e.size>n)return[!1,j(n)]}return[!0,null]}function P(e){return null!=e}function S(e){return"function"==typeof e.isPropagationStopped?e.isPropagationStopped():void 0!==e.cancelBubble&&e.cancelBubble}function R(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,e=>"Files"===e||"application/x-moz-file"===e):!!e.target&&!!e.target.files}function T(e){e.preventDefault()}function _(...e){return(t,...n)=>e.some(e=>(!S(t)&&e&&e(t,...n),S(t)))}function I(e){return"audio/*"===e||"video/*"===e||"image/*"===e||"text/*"===e||/\w+\/[-+.\w]+/g.test(e)}function M(e){return/^.*\.[\w]+$/.test(e)}var L=Object.defineProperty,N=Object.defineProperties,B=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,Z=(e,t,n)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,q=(e,t)=>{for(var n in t||(t={}))K.call(t,n)&&Z(e,n,t[n]);if($)for(var n of $(t))W.call(t,n)&&Z(e,n,t[n]);return e},U=(e,t)=>N(e,B(t)),H=(e,t)=>{var n={};for(var r in e)K.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&$)for(var r of $(e))0>t.indexOf(r)&&W.call(e,r)&&(n[r]=e[r]);return n};let G=(0,r.forwardRef)((e,t)=>{var{children:n}=e;let o=Y(H(e,["children"])),{open:i}=o,a=H(o,["open"]);return(0,r.useImperativeHandle)(t,()=>({open:i}),[i]),r.createElement(r.Fragment,null,n(U(q({},a),{open:i})))});G.displayName="Dropzone";let Q={disabled:!1,getFilesFromEvent:function(e){return l(this,null,function*(){return s(e)&&s(e.dataTransfer)?function(e,t){return l(this,null,function*(){if(e.items){let n=p(e.items).filter(e=>"file"===e.kind);return"drop"!==t?n:u(function e(t){return t.reduce((t,n)=>[...t,...Array.isArray(n)?e(n):[n]],[])}((yield Promise.all(n.map(f)))))}return u(p(e.files).map(e=>a(e)))})}(e.dataTransfer,e.type):s(e)&&s(e.target)?p(e.target.files).map(e=>a(e)):Array.isArray(e)&&e.every(e=>"getFile"in e&&"function"==typeof e.getFile)?function(e){return l(this,null,function*(){return(yield Promise.all(e.map(e=>e.getFile()))).map(e=>a(e))})}(e):[]})},maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};G.defaultProps=Q,G.propTypes={children:o.func,accept:o.objectOf(o.arrayOf(o.string)),multiple:o.bool,preventDropOnDocument:o.bool,noClick:o.bool,noKeyboard:o.bool,noDrag:o.bool,noDragEventsBubbling:o.bool,minSize:o.number,maxSize:o.number,maxFiles:o.number,disabled:o.bool,getFilesFromEvent:o.func,onFileDialogCancel:o.func,onFileDialogOpen:o.func,useFsAccessApi:o.bool,autoFocus:o.bool,onDragEnter:o.func,onDragLeave:o.func,onDragOver:o.func,onDrop:o.func,onDropAccepted:o.func,onDropRejected:o.func,onError:o.func,validator:o.func};let V={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{accept:t,disabled:n,getFilesFromEvent:o,maxSize:i,minSize:a,multiple:l,maxFiles:c,onDragEnter:s,onDragLeave:u,onDragOver:p,onDrop:f,onDropAccepted:d,onDropRejected:m,onFileDialogCancel:g,onFileDialogOpen:v,useFsAccessApi:y,autoFocus:b,preventDropOnDocument:h,noClick:D,noKeyboard:x,noDrag:w,noDragEventsBubbling:O,onError:j,validator:F}=q(q({},Q),e),L=(0,r.useMemo)(()=>(function(e){if(P(e))return Object.entries(e).reduce((e,[t,n])=>[...e,t,...n],[]).filter(e=>I(e)||M(e)).join(",")})(t),[t]),N=(0,r.useMemo)(()=>P(t)?[{description:"Files",accept:Object.entries(t).filter(([e,t])=>{let n=!0;return I(e)||(console.warn(`Skipped "${e}" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.`),n=!1),Array.isArray(t)&&t.every(M)||(console.warn(`Skipped "${e}" because an invalid file extension was provided.`),n=!1),n}).reduce((e,[t,n])=>k(E({},e),{[t]:n}),{})}]:t,[t]),B=(0,r.useMemo)(()=>"function"==typeof v?v:X,[v]),$=(0,r.useMemo)(()=>"function"==typeof g?g:X,[g]),K=(0,r.useRef)(null),W=(0,r.useRef)(null),[Z,G]=(0,r.useReducer)(J,V),{isFocused:Y,isFileDialogActive:ee}=Z,et=(0,r.useRef)("undefined"!=typeof window&&window.isSecureContext&&y&&"showOpenFilePicker"in window),en=()=>{!et.current&&ee&&setTimeout(()=>{if(W.current){let{files:e}=W.current;e.length||(G({type:"closeDialog"}),$())}},300)};(0,r.useEffect)(()=>(window.addEventListener("focus",en,!1),()=>{window.removeEventListener("focus",en,!1)}),[W,ee,$,et]);let er=(0,r.useRef)([]),eo=e=>{K.current&&K.current.contains(e.target)||(e.preventDefault(),er.current=[])};(0,r.useEffect)(()=>(h&&(document.addEventListener("dragover",T,!1),document.addEventListener("drop",eo,!1)),()=>{h&&(document.removeEventListener("dragover",T),document.removeEventListener("drop",eo))}),[K,h]),(0,r.useEffect)(()=>(!n&&b&&K.current&&K.current.focus(),()=>{}),[K,b,n]);let ei=(0,r.useCallback)(e=>{j?j(e):console.error(e)},[j]),ea=(0,r.useCallback)(e=>{e.preventDefault(),e.persist(),eh(e),er.current=[...er.current,e.target],R(e)&&Promise.resolve(o(e)).then(t=>{if(S(e)&&!O)return;let n=t.length,r=n>0&&function({files:e,accept:t,minSize:n,maxSize:r,multiple:o,maxFiles:i,validator:a}){return(!!o||!(e.length>1))&&(!o||!(i>=1)||!(e.length>i))&&e.every(e=>{let[o]=C(e,t),[i]=A(e,n,r),l=a?a(e):null;return o&&i&&!l})}({files:t,accept:L,minSize:a,maxSize:i,multiple:l,maxFiles:c,validator:F});G({isDragAccept:r,isDragReject:n>0&&!r,isDragActive:!0,type:"setDraggedFiles"}),s&&s(e)}).catch(e=>ei(e))},[o,s,ei,O,L,a,i,l,c,F]),el=(0,r.useCallback)(e=>{e.preventDefault(),e.persist(),eh(e);let t=R(e);if(t&&e.dataTransfer)try{e.dataTransfer.dropEffect="copy"}catch(e){}return t&&p&&p(e),!1},[p,O]),ec=(0,r.useCallback)(e=>{e.preventDefault(),e.persist(),eh(e);let t=er.current.filter(e=>K.current&&K.current.contains(e)),n=t.indexOf(e.target);-1!==n&&t.splice(n,1),er.current=t,!(t.length>0)&&(G({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),R(e)&&u&&u(e))},[K,u,O]),es=(0,r.useCallback)((e,t)=>{let n=[],r=[];e.forEach(e=>{let[t,o]=C(e,L),[l,c]=A(e,a,i),s=F?F(e):null;if(t&&l&&!s)n.push(e);else{let t=[o,c];s&&(t=t.concat(s)),r.push({file:e,errors:t.filter(e=>e)})}}),(!l&&n.length>1||l&&c>=1&&n.length>c)&&(n.forEach(e=>{r.push({file:e,errors:[z]})}),n.splice(0)),G({acceptedFiles:n,fileRejections:r,type:"setFiles"}),f&&f(n,r,t),r.length>0&&m&&m(r,t),n.length>0&&d&&d(n,t)},[G,l,L,a,i,c,f,d,m,F]),eu=(0,r.useCallback)(e=>{e.preventDefault(),e.persist(),eh(e),er.current=[],R(e)&&Promise.resolve(o(e)).then(t=>{(!S(e)||O)&&es(t,e)}).catch(e=>ei(e)),G({type:"reset"})},[o,es,ei,O]),ep=(0,r.useCallback)(()=>{if(et.current){G({type:"openDialog"}),B(),window.showOpenFilePicker({multiple:l,types:N}).then(e=>o(e)).then(e=>{es(e,null),G({type:"closeDialog"})}).catch(e=>{e instanceof DOMException&&("AbortError"===e.name||e.code===e.ABORT_ERR)?($(e),G({type:"closeDialog"})):e instanceof DOMException&&("SecurityError"===e.name||e.code===e.SECURITY_ERR)?(et.current=!1,W.current?(W.current.value=null,W.current.click()):ei(Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):ei(e)});return}W.current&&(G({type:"openDialog"}),B(),W.current.value=null,W.current.click())},[G,B,$,y,es,ei,N,l]),ef=(0,r.useCallback)(e=>{K.current&&K.current.isEqualNode(e.target)&&(" "===e.key||"Enter"===e.key||32===e.keyCode||13===e.keyCode)&&(e.preventDefault(),ep())},[K,ep]),ed=(0,r.useCallback)(()=>{G({type:"focus"})},[]),em=(0,r.useCallback)(()=>{G({type:"blur"})},[]),eg=(0,r.useCallback)(()=>{D||(function(e=window.navigator.userAgent){return -1!==e.indexOf("MSIE")||-1!==e.indexOf("Trident/")||-1!==e.indexOf("Edge/")}()?setTimeout(ep,0):ep())},[D,ep]),ev=e=>n?null:e,ey=e=>x?null:ev(e),eb=e=>w?null:ev(e),eh=e=>{O&&e.stopPropagation()},eD=(0,r.useMemo)(()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var{refKey:t="ref",role:r,onKeyDown:o,onFocus:i,onBlur:a,onClick:l,onDragEnter:c,onDragOver:s,onDragLeave:u,onDrop:p}=e,f=H(e,["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"]);return q(q({onKeyDown:ey(_(o,ef)),onFocus:ey(_(i,ed)),onBlur:ey(_(a,em)),onClick:ev(_(l,eg)),onDragEnter:eb(_(c,ea)),onDragOver:eb(_(s,el)),onDragLeave:eb(_(u,ec)),onDrop:eb(_(p,eu)),role:"string"==typeof r&&""!==r?r:"presentation",[t]:K},n||x?{}:{tabIndex:0}),f)},[K,ef,ed,em,eg,ea,el,ec,eu,x,w,n]),ex=(0,r.useCallback)(e=>{e.stopPropagation()},[]),ew=(0,r.useMemo)(()=>function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var{refKey:t="ref",onChange:n,onClick:r}=e,o=H(e,["refKey","onChange","onClick"]);return q(q({},{accept:L,multiple:l,type:"file",style:{display:"none"},onChange:ev(_(n,eu)),onClick:ev(_(r,ex)),tabIndex:-1,[t]:W}),o)},[W,t,l,eu,n]);return U(q({},Z),{isFocused:Y&&!n,getRootProps:eD,getInputProps:ew,rootRef:K,inputRef:W,open:ev(ep)})}function J(e,t){switch(t.type){case"focus":return U(q({},e),{isFocused:!0});case"blur":return U(q({},e),{isFocused:!1});case"openDialog":return U(q({},V),{isFileDialogActive:!0});case"closeDialog":return U(q({},e),{isFileDialogActive:!1});case"setDraggedFiles":return U(q({},e),{isDragActive:t.isDragActive,isDragAccept:t.isDragAccept,isDragReject:t.isDragReject});case"setFiles":return U(q({},e),{acceptedFiles:t.acceptedFiles,fileRejections:t.fileRejections});case"reset":return q({},V);default:return e}}function X(){}var ee=n(27745),et=n(2544),en=n(74565),er=n(59608),eo=n(88276),ei=n(32604),ea=n(49606),el=n(11349);let[ec,es]=(0,n(30932).createSafeContext)("Dropzone component was not found in tree");var eu=n(16296),ep=n(50973);function ef(e){let t=t=>{let{children:n,...o}=(0,er.useProps)("Dropzone".concat((0,ep.upperFirst)(e)),{},t),i=es(),a=(0,eu.isElement)(n)?n:r.createElement("span",null,n);return i[e]?(0,r.cloneElement)(a,o):null};return t.displayName="@mantine/dropzone/".concat((0,ep.upperFirst)(e)),t}let ed=ef("accept"),em=ef("reject"),eg=ef("idle");var ev={root:"m_d46a4834",inner:"m_b85f7144",fullScreen:"m_96f6e9ad",dropzone:"m_7946116d"};let ey={loading:!1,multiple:!0,maxSize:1/0,autoFocus:!1,activateOnClick:!0,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,useFsAccessApi:!0,variant:"light",rejectColor:"red"},eb=(0,ee.createVarsResolver)((e,t)=>{let{radius:n,variant:r,acceptColor:o,rejectColor:i}=t,a=e.variantColorResolver({color:o||e.primaryColor,theme:e,variant:r}),l=e.variantColorResolver({color:i||"red",theme:e,variant:r});return{root:{"--dropzone-radius":(0,et.getRadius)(n),"--dropzone-accept-color":a.color,"--dropzone-accept-bg":a.background,"--dropzone-reject-color":l.color,"--dropzone-reject-bg":l.background}}}),eh=(0,en.factory)((e,t)=>{let n=(0,er.useProps)("Dropzone",ey,e),{classNames:o,className:i,style:a,styles:l,unstyled:c,vars:s,radius:u,disabled:p,loading:f,multiple:d,maxSize:m,accept:g,children:v,onDropAny:y,onDrop:b,onReject:h,openRef:D,name:x,maxFiles:w,autoFocus:E,activateOnClick:k,activateOnDrag:O,dragEventsBubbling:j,activateOnKeyboard:F,onDragEnter:z,onDragLeave:C,onDragOver:A,onFileDialogCancel:P,onFileDialogOpen:S,preventDropOnDocument:R,useFsAccessApi:T,getFilesFromEvent:_,validator:I,rejectColor:M,acceptColor:L,enablePointerEvents:N,loaderProps:B,inputProps:$,mod:K,...W}=n,Z=(0,eo.useStyles)({name:"Dropzone",classes:ev,props:n,className:i,style:a,classNames:o,styles:l,unstyled:c,vars:s,varsResolver:eb}),{getRootProps:q,getInputProps:U,isDragAccept:H,isDragReject:G,open:Q}=Y({onDrop:y,onDropAccepted:b,onDropRejected:h,disabled:p||f,accept:Array.isArray(g)?g.reduce((e,t)=>({...e,[t]:[]}),{}):g,multiple:d,maxSize:m,maxFiles:w,autoFocus:E,noClick:!k,noDrag:!O,noDragEventsBubbling:!j,noKeyboard:!F,onDragEnter:z,onDragLeave:C,onDragOver:A,onFileDialogCancel:P,onFileDialogOpen:S,preventDropOnDocument:R,useFsAccessApi:T,validator:I,..._?{getFilesFromEvent:_}:null});(0,el.assignRef)(D,Q);let V=!H&&!G;return r.createElement(ec,{value:{accept:H,reject:G,idle:V}},r.createElement(ei.Box,{...q({ref:t}),...Z("root",{focusable:!0}),...W,mod:[{accept:H,reject:G,idle:V,loading:f,"activate-on-click":k},K]},r.createElement(ea.LoadingOverlay,{visible:f,overlayProps:{radius:u},unstyled:c,loaderProps:B}),r.createElement("input",{...U($),name:x}),r.createElement("div",{...Z("inner"),"data-enable-pointer-events":N||void 0},v)))});eh.classes=ev,eh.displayName="@mantine/dropzone/Dropzone",eh.Accept=ed,eh.Idle=eg,eh.Reject=em;var eD=n(39633),ex=n(9467),ew=n(20566),eE=n(29270);let ek={loading:!1,maxSize:1/0,activateOnClick:!1,activateOnDrag:!0,dragEventsBubbling:!0,activateOnKeyboard:!0,active:!0,zIndex:(0,eD.getDefaultZIndex)("max"),withinPortal:!0},eO=(0,en.factory)((e,t)=>{let n=(0,er.useProps)("DropzoneFullScreen",ek,e),{classNames:o,className:i,style:a,styles:l,unstyled:c,vars:s,active:u,onDrop:p,onReject:f,zIndex:d,withinPortal:m,portalProps:g,...v}=n,y=(0,eo.useStyles)({name:"DropzoneFullScreen",classes:ev,props:n,className:i,style:a,classNames:o,styles:l,unstyled:c,rootSelector:"fullScreen"}),{resolvedClassNames:b,resolvedStyles:h}=(0,ex.useResolvedStylesApi)({classNames:o,styles:l,props:n}),[D,x]=(0,r.useState)(0),[w,{open:E,close:k}]=(0,eE.useDisclosure)(!1),O=e=>{var t;(null===(t=e.dataTransfer)||void 0===t?void 0:t.types.includes("Files"))&&(x(e=>e+1),E())},j=()=>{x(e=>e-1)};return(0,r.useEffect)(()=>{0===D&&k()},[D]),(0,r.useEffect)(()=>{if(u)return document.addEventListener("dragenter",O,!1),document.addEventListener("dragleave",j,!1),()=>{document.removeEventListener("dragenter",O,!1),document.removeEventListener("dragleave",j,!1)}},[u]),r.createElement(ew.OptionalPortal,{...g,withinPortal:m},r.createElement(ei.Box,{...y("fullScreen",{style:{opacity:w?1:0,pointerEvents:w?"all":"none",zIndex:d}}),ref:t},r.createElement(eh,{...v,classNames:b,styles:h,unstyled:c,className:ev.dropzone,onDrop:e=>{null==p||p(e),k(),x(0)},onReject:e=>{null==f||f(e),k(),x(0)}})))});eO.classes=ev,eO.displayName="@mantine/dropzone/DropzoneFullScreen",eh.FullScreen=eO;let ej=eh},29944:function(e,t,n){"use strict";n.r(t),n.d(t,{cleanNotifications:function(){return f},cleanNotificationsQueue:function(){return d},createNotificationsStore:function(){return i},hideNotification:function(){return u},notifications:function(){return m},notificationsStore:function(){return a},showNotification:function(){return s},updateNotification:function(){return p},updateNotificationsState:function(){return c},useNotifications:function(){return l}});var r=n(60491),o=n(92388);let i=()=>(0,o.M)({notifications:[],queue:[],limit:5}),a=i(),l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;return(0,o.o)(e)};function c(e,t){let n=e.getState(),r=t([...n.notifications,...n.queue]);e.setState({notifications:r.slice(0,n.limit),queue:r.slice(n.limit),limit:n.limit})}function s(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,n=e.id||(0,r.randomId)();return c(t,t=>e.id&&t.some(t=>t.id===e.id)?t:[...t,{...e,id:n}]),n}function u(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c(t,t=>t.filter(t=>{if(t.id===e){var n;return null===(n=t.onClose)||void 0===n||n.call(t,t),!1}return!0})),e}function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a;return c(t,t=>t.map(t=>t.id===e.id?{...t,...e}:t)),e.id}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;c(e,()=>[])}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a;c(e,t=>t.slice(0,e.getState().limit))}let m={show:s,hide:u,update:p,clean:f,cleanQueue:d,updateState:c}},32202:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(27677).Z)("outline","check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},81461:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(27677).Z)("outline","copy","IconCopy",[["path",{d:"M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z",key:"svg-0"}],["path",{d:"M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1",key:"svg-1"}]])},44416:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.1.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(27677).Z)("outline","upload","IconUpload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 9l5 -5l5 5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]])}}]);