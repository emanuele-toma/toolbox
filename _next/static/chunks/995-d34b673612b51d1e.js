(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[995],{49079:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(13127)},13127:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function a(){throw Error("clearTimeout has not been defined")}function u(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(e){r=a}}();var c=[],l=!1,s=-1;function d(){l&&n&&(l=!1,n.length?c=n.concat(c):s=-1,c.length&&f())}function f(){if(!l){var e=u(d);l=!0;for(var t=c.length;t;){for(n=c,c=[];++s<t;)n&&n[s].run();s=-1,t=c.length}n=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||u(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,n),a=!1}finally{a&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},14749:function(e,t,r){"use strict";function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},70444:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}r.d(t,{Z:function(){return n}})},89392:function(e,t,r){"use strict";r.r(t),r.d(t,{Checkbox:function(){return k}});var n=r(2265),o=r(20679),i=r(2544),a=r(27745),u=r(5007),c=r(78291),l=r(28886),s=r(79926),d=r(59608),f=r(88276),p=r(8730),h=r(32604),m=r(74565),v=r(69231),b=r(72942),g=r(64903),y=r(77662),x={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--outline":"m_215c4542"};let C={labelPosition:"right",icon:y.CheckboxIcon},E=(0,a.createVarsResolver)((e,t)=>{let{radius:r,color:n,size:o,iconColor:a,variant:d,autoContrast:f}=t,p=(0,u.parseThemeColor)({color:n||e.primaryColor,theme:e}),h=p.isThemeColor&&void 0===p.shade?"var(--mantine-color-".concat(p.color,"-outline)"):p.color;return{root:{"--checkbox-size":(0,i.getSize)(o,"checkbox-size"),"--checkbox-radius":void 0===r?void 0:(0,i.getRadius)(r),"--checkbox-color":"outline"===d?h:(0,c.getThemeColor)(n,e),"--checkbox-icon-color":a?(0,c.getThemeColor)(a,e):(0,s.getAutoContrastValue)(f,e)?(0,l.getContrastColor)({color:n,theme:e}):void 0}}}),k=(0,m.factory)((e,t)=>{let r=(0,d.useProps)("Checkbox",C,e),{classNames:i,className:a,style:u,styles:c,unstyled:l,vars:s,color:m,label:g,id:y,size:k,radius:T,wrapperProps:w,children:S,checked:_,labelPosition:z,description:L,error:R,disabled:B,variant:F,indeterminate:O,icon:I,rootRef:P,iconColor:W,onChange:N,autoContrast:H,mod:j,...A}=r,Z=(0,b.J)(),G=k||(null==Z?void 0:Z.size),M=(0,f.useStyles)({name:"Checkbox",props:r,classes:x,className:a,style:u,classNames:i,styles:c,unstyled:l,vars:s,varsResolver:E}),{styleProps:J,rest:V}=(0,p.extractStyleProps)(A),D=(0,o.useId)(y),U=Z?{checked:Z.value.includes(V.value),onChange:e=>{Z.onChange(e),null==N||N(e)}}:{};return n.createElement(v.Z,{...M("root"),__staticSelector:"Checkbox",__stylesApiProps:r,id:D,size:G,labelPosition:z,label:g,description:L,error:R,disabled:B,classNames:i,styles:c,unstyled:l,"data-checked":U.checked||_||void 0,variant:F,ref:P,mod:j,...J,...w},n.createElement(h.Box,{...M("inner"),mod:{"data-label-position":z}},n.createElement(h.Box,{component:"input",id:D,ref:t,checked:_,disabled:B,mod:{error:!!R,indeterminate:O},...M("input",{focusable:!0,variant:F}),onChange:N,...V,...U,type:"checkbox"}),n.createElement(I,{indeterminate:O,...M("icon")})))});k.classes={...x,...v.J},k.displayName="@mantine/core/Checkbox",k.Group=g.CheckboxGroup},72942:function(e,t,r){"use strict";r.d(t,{J:function(){return a},z:function(){return i}});var n=r(2265);let o=(0,n.createContext)(null),i=o.Provider,a=()=>(0,n.useContext)(o)},64903:function(e,t,r){"use strict";r.r(t),r.d(t,{CheckboxGroup:function(){return d}});var n=r(2265),o=r(65179),i=r(59608),a=r(74565),u=r(75362),c=r(59022),l=r(72942);let s={},d=(0,a.factory)((e,t)=>{let{value:r,defaultValue:a,onChange:d,size:f,wrapperProps:p,children:h,readOnly:m,...v}=(0,i.useProps)("CheckboxGroup",s,e),[b,g]=(0,o.useUncontrolled)({value:r,defaultValue:a,finalValue:[],onChange:d});return n.createElement(l.z,{value:{value:b,onChange:e=>{let t=e.currentTarget.value;m||g(b.includes(t)?b.filter(e=>e!==t):[...b,t])},size:f}},n.createElement(u.Input.Wrapper,{size:f,ref:t,...p,...v,labelElement:"div",__staticSelector:"CheckboxGroup"},n.createElement(c.m,{role:"group"},h)))});d.classes=u.Input.Wrapper.classes,d.displayName="@mantine/core/CheckboxGroup"},36010:function(e,t,r){"use strict";r.r(t),r.d(t,{CopyButton:function(){return u}});var n=r(2265),o=r(50661),i=r(59608);let a={timeout:1e3};function u(e){let{children:t,timeout:r,value:u,...c}=(0,i.useProps)("CopyButton",a,e),l=(0,o.useClipboard)({timeout:r});return n.createElement(n.Fragment,null,t({copy:()=>l.copy(u),copied:l.copied,...c}))}u.displayName="@mantine/core/CopyButton"},69231:function(e,t,r){"use strict";r.d(t,{Z:function(){return s},J:function(){return l}});var n=r(2265),o=r(2544),i=r(88276),a=r(32604),u=r(75362),c={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};let l=c,s=(0,n.forwardRef)((e,t)=>{let{__staticSelector:r,__stylesApiProps:l,className:s,classNames:d,styles:f,unstyled:p,children:h,label:m,description:v,id:b,disabled:g,error:y,size:x,labelPosition:C="left",bodyElement:E="div",labelElement:k="label",variant:T,style:w,vars:S,mod:_,...z}=e,L=(0,i.useStyles)({name:r,props:l,className:s,style:w,classes:c,classNames:d,styles:f,unstyled:p});return n.createElement(a.Box,{...L("root"),ref:t,__vars:{"--label-fz":(0,o.getFontSize)(x),"--label-lh":(0,o.getSize)(x,"label-lh")},mod:[{"label-position":C},_],variant:T,size:x,...z},n.createElement(a.Box,{component:E,htmlFor:"label"===E?b:void 0,...L("body")},h,n.createElement("div",{...L("labelWrapper"),"data-disabled":g||void 0},m&&n.createElement(a.Box,{component:k,htmlFor:"label"===k?b:void 0,...L("label"),"data-disabled":g||void 0},m),v&&n.createElement(u.Input.Description,{size:x,__inheritStyles:!1,...L("description")},v),y&&"boolean"!==y&&n.createElement(u.Input.Error,{size:x,__inheritStyles:!1,...L("error")},y))))});s.displayName="@mantine/core/InlineInput"},59022:function(e,t,r){"use strict";r.d(t,{m:function(){return i}});var n=r(2265),o=r(13226);function i(e){let{children:t,role:r}=e,i=(0,o.useInputWrapperContext)();return i?n.createElement("div",{role:r,"aria-labelledby":i.labelId,"aria-describedby":i.describedBy},t):n.createElement(n.Fragment,null,t)}},49606:function(e,t,r){"use strict";r.r(t),r.d(t,{LoadingOverlay:function(){return b}});var n=r(2265),o=r(39633),i=r(27745),a=r(54099),u=r(59608),c=r(88276),l=r(32604),s=r(74565),d=r(97309),f=r(78741),p=r(83564),h={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let m={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,o.getDefaultZIndex)("overlay")},v=(0,i.createVarsResolver)((e,t)=>{let{zIndex:r}=t;return{root:{"--lo-z-index":null==r?void 0:r.toString()}}}),b=(0,s.factory)((e,t)=>{let r=(0,u.useProps)("LoadingOverlay",m,e),{classNames:o,className:i,style:s,styles:b,unstyled:g,vars:y,transitionProps:x,loaderProps:C,overlayProps:E,visible:k,zIndex:T,...w}=r,S=(0,a.useMantineTheme)(),_=(0,c.useStyles)({name:"LoadingOverlay",classes:h,props:r,className:i,style:s,classNames:o,styles:b,unstyled:g,vars:y,varsResolver:v}),z={...m.overlayProps,...E};return n.createElement(p.Transition,{transition:"fade",...x,mounted:!!k},e=>n.createElement(l.Box,{..._("root",{style:e}),ref:t,...w},n.createElement(d.Loader,{..._("loader"),unstyled:g,...C}),n.createElement(f.Overlay,{...z,..._("overlay"),darkHidden:!0,unstyled:g,color:(null==E?void 0:E.color)||S.white}),n.createElement(f.Overlay,{...z,..._("overlay"),lightHidden:!0,unstyled:g,color:(null==E?void 0:E.color)||S.colors.dark[5]})))});b.classes=h,b.displayName="@mantine/core/LoadingOverlay"},11008:function(e,t,r){"use strict";r.r(t),r.d(t,{Textarea:function(){return z}});var n=r(2265),o=r(14749),i=r(70444),a=n.useLayoutEffect,u=function(e){var t=n.useRef(e);return a(function(){t.current=e}),t},c=function(e,t){if("function"==typeof e){e(t);return}e.current=t},l=function(e,t){var r=(0,n.useRef)();return(0,n.useCallback)(function(n){e.current=n,r.current&&c(r.current,null),r.current=t,t&&c(t,n)},[t])},s={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},d=function(e){Object.keys(s).forEach(function(t){e.style.setProperty(t,s[t],"important")})},f=null,p=function(e,t){var r=e.scrollHeight;return"border-box"===t.sizingStyle.boxSizing?r+t.borderSize:r-t.paddingSize},h=function(){},m=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],v=!!document.documentElement.currentStyle,b=function(e){var t=window.getComputedStyle(e);if(null===t)return null;var r=m.reduce(function(e,r){return e[r]=t[r],e},{}),n=r.boxSizing;if(""===n)return null;v&&"border-box"===n&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var o=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),i=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:o,borderSize:i}};function g(e,t,r){var o=u(r);n.useLayoutEffect(function(){var r=function(e){return o.current(e)};if(e)return e.addEventListener(t,r),function(){return e.removeEventListener(t,r)}},[])}var y=function(e){g(window,"resize",e)},x=function(e){g(document.fonts,"loadingdone",e)},C=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],E=n.forwardRef(function(e,t){var r=e.cacheMeasurements,a=e.maxRows,u=e.minRows,c=e.onChange,s=void 0===c?h:c,m=e.onHeightChange,v=void 0===m?h:m,g=(0,i.Z)(e,C),E=void 0!==g.value,k=n.useRef(null),T=l(k,t),w=n.useRef(0),S=n.useRef(),_=function(){var e,t,n,o,i,c,l,s,h,m,g,y=k.current,x=r&&S.current?S.current:b(y);if(x){S.current=x;var C=(e=y.value||y.placeholder||"x",void 0===(t=u)&&(t=1),void 0===(n=a)&&(n=1/0),f||((f=document.createElement("textarea")).setAttribute("tabindex","-1"),f.setAttribute("aria-hidden","true"),d(f)),null===f.parentNode&&document.body.appendChild(f),o=x.paddingSize,i=x.borderSize,l=(c=x.sizingStyle).boxSizing,Object.keys(c).forEach(function(e){f.style[e]=c[e]}),d(f),f.value=e,s=p(f,x),f.value=e,s=p(f,x),f.value="x",m=(h=f.scrollHeight-o)*t,"border-box"===l&&(m=m+o+i),s=Math.max(m,s),g=h*n,"border-box"===l&&(g=g+o+i),[s=Math.min(g,s),h]),E=C[0],T=C[1];w.current!==E&&(w.current=E,y.style.setProperty("height",E+"px","important"),v(E,{rowHeight:T}))}};return n.useLayoutEffect(_),y(_),x(_),n.createElement("textarea",(0,o.Z)({},g,{onChange:function(e){E||_(),s(e)},ref:T}))}),k=r(89295),T=r(59608),w=r(74565),S=r(55309);let _={},z=(0,w.factory)((e,t)=>{let{autosize:r,maxRows:o,minRows:i,__staticSelector:a,resize:u,...c}=(0,T.useProps)("Textarea",_,e),l=r&&"test"!==(0,k.getEnv)();return n.createElement(S.InputBase,{component:l?E:"textarea",ref:t,...c,__staticSelector:a||"Textarea",multiline:!0,"data-no-overflow":r&&void 0===o||void 0,__vars:{"--input-resize":u},...l?{maxRows:o,minRows:i}:{}})});z.classes=S.InputBase.classes,z.displayName="@mantine/core/Textarea"},89295:function(e,t,r){"use strict";r.r(t),r.d(t,{getEnv:function(){return o}});var n=r(49079);function o(){return void 0!==n&&n.env?"production":"development"}},50661:function(e,t,r){"use strict";r.r(t),r.d(t,{useClipboard:function(){return o}});var n=r(2265);function o(){let{timeout:e=2e3}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,n.useState)(null),[o,i]=(0,n.useState)(!1),[a,u]=(0,n.useState)(null),c=t=>{window.clearTimeout(a),u(window.setTimeout(()=>i(!1),e)),i(t)};return{copy:e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>c(!0)).catch(e=>r(e)):r(Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{i(!1),r(null),window.clearTimeout(a)},error:t,copied:o}}},29270:function(e,t,r){"use strict";r.r(t),r.d(t,{useDisclosure:function(){return o}});var n=r(2265);function o(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,{onOpen:r,onClose:o}=t||{},[i,a]=(0,n.useState)(e),u=(0,n.useCallback)(()=>{a(e=>e||(null==r||r(),!0))},[r]),c=(0,n.useCallback)(()=>{a(e=>e?(null==o||o(),!1):e)},[o]),l=(0,n.useCallback)(()=>{i?c():u()},[c,u,i]);return[i,{open:u,close:c,toggle:l}]}},50973:function(e,t,r){"use strict";function n(e){return"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)}r.r(t),r.d(t,{upperFirst:function(){return n}})}}]);