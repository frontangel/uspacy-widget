/*! For license information please see 878.5a03f3fd.chunk.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[878,848],{3589:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var r=t(4848),o=t(645),i=t(7216);const a=function(e){var n=e.children,t=e.userSettings;return(0,r.jsx)(i.Ay,{userSettings:t,children:(0,r.jsx)(o.A,{children:n})})}},5878:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>f});var r=t(4848),o=t(4408),i=t(1527),a=t(2339),s=t(9883),c=t(3589),u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},u.apply(this,arguments)},l=function(){var e,n,t,c=(0,i.useState)({installed:!1,apiKey:"",isConnected:!1}),l=c[0],f=c[1],d=(0,i.useState)(!1),p=d[0],h=d[1],v=(0,i.useState)(!1),y=v[0],b=v[1],x=(0,i.useState)(""),g=x[0],m=x[1],w=(0,a.useTranslation)("settings").t;(0,i.useEffect)((function(){var e,n,t,r;e=void 0,n=void 0,r=function(){return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(e){return s.F.get("/settings").then((function(e){return f(e.data)})).catch((function(e){console.log(e)})),[2]}))},new((t=void 0)||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(e){i(e)}}function s(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))}),[]);var k=(null==l?void 0:l.isConnected)?{backgroundColor:"#d2f7b6",color:"#58ca00"}:{backgroundColor:"#ffdada",color:"#f00"};return(0,r.jsxs)(o.Box,{children:[(0,r.jsx)(o.Box,{sx:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"1rem"},children:(0,r.jsx)(o.Typography,{sx:u(u({},k),{display:"inline-flex",fontSize:"12px",letterSpacing:"1px",padding:"0.1rem 0.75rem",borderRadius:"1rem"}),children:(null==l?void 0:l.isConnected)?w("connected"):w("notConnected")})}),(0,r.jsx)(o.Typography,{variant:"subtitle2",sx:{fontWeight:"bold",paddingLeft:"1rem"},children:w("LABEL_API_KEY")}),(0,r.jsxs)(o.Box,{sx:{display:"flex",justifyContent:"center",gap:"1rem"},component:"form",onSubmit:function(e){e.preventDefault(),h(!0),s.F.post("/settings",{apiKey:l.apiKey}).then((function(e){f(e.data)})).catch((function(e){console.log(e),m(e.response.data.message||e.message)})).finally((function(){h(!1),b(!1)}))},children:[(0,r.jsx)(o.Input,{sx:{width:"100%",border:"1px solid #ddd",outline:"none",borderRadius:"4px",paddingLeft:"1rem",paddingRight:"1rem","&:before":{content:"none"},"&:after":{content:"none"}},disabled:p,placeholder:w("integrationApiKey"),value:l.apiKey||"",onChange:function(e){m(""),f(u(u({},l),{apiKey:e.target.value})),b(!0)}}),(0,r.jsxs)(o.Button,{disableElevation:!0,variant:(null===(e=l.apiKey)||void 0===e?void 0:e.trim())&&y?"contained":"outlined",type:"submit",disabled:p||!(null===(n=l.apiKey)||void 0===n?void 0:n.trim())||!y,sx:{backgroundColor:"#58ca00",border:"1px solid #58ca00",padding:"5px 2rem",textTransform:"none",letterSpacing:"1px","&:hover":{backgroundColor:"#58ca00"},"&:disabled":{backgroundColor:(null===(t=l.apiKey)||void 0===t?void 0:t.trim())&&y?"#d2f7b6":"transparent",color:"#58ca00",borderColor:"#58ca00"}},children:[w("connect"),p&&(0,r.jsx)(o.CircularProgress,{size:22,sx:{color:"#58ca00",position:"absolute",zIndex:1}})]})]}),(0,r.jsx)(o.Box,{sx:{position:"relative",height:"1rem",marginBottom:"1rem"},children:g&&(0,r.jsx)(o.Typography,{variant:"subtitle2",sx:{color:"red",position:"absolute",left:0,top:0,fontSize:"11px",paddingLeft:"1rem"},children:w(g)})})]})};const f=function(e){var n=e.userSettings;return(0,r.jsx)(c.A,{userSettings:n,children:(0,r.jsx)(l,{})})}},645:(e,n,t)=>{"use strict";t.d(n,{A:()=>u});var r=t(4848),o=t(1527),i=t(2339),a=t(177),s=t(7216),c=(0,o.createContext)({});const u=function(e){var n=e.children,t=(0,s.dk)().userSettings;return(0,o.useEffect)((function(){a.A.changeLanguage(null==t?void 0:t.lang)}),[null==t?void 0:t.lang]),(0,r.jsx)(c.Provider,{value:{userSettings:t},children:(0,r.jsx)(i.I18nextProvider,{i18n:a.A,children:n})})}},7216:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>s,dk:()=>a});var r=t(4848),o=t(1527),i=(0,o.createContext)({}),a=function(){return(0,o.useContext)(i)};const s=function(e){var n=e.children,t=e.userSettings;return(0,r.jsx)(i.Provider,{value:{userSettings:t},children:n})}},9883:(e,n,t)=>{"use strict";t.d(n,{F:()=>a});var r=t(5364),o=t.n(r),i=t(1277),a=o().create({baseURL:"MISSING_ENV_VAR".API_URL});a.interceptors.request.use((function(e){return n=void 0,t=void 0,o=function(){var n;return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(t){switch(t.label){case 0:return[4,(0,i.kP)("token")];case 1:return(n=t.sent())&&(e.headers.Authorization="Bearer ".concat(n)),[2,e]}}))},new((r=void 0)||(r=Promise))((function(e,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((o=o.apply(n,t||[])).next())}));var n,t,r,o}),(function(e){return Promise.reject(e)}))},1277:(e,n,t)=>{"use strict";t.d(n,{kP:()=>i});var r=t(7314),o=(0,r.openDB)("Uspacy"),i=function(e){return n=void 0,t=void 0,i=function(){return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(c){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(n){switch(n.label){case 0:return[4,o];case 1:return[4,n.sent().get("tokens",e)];case 2:return[2,n.sent()]}}))},new((r=void 0)||(r=Promise))((function(e,o){function a(e){try{c(i.next(e))}catch(e){o(e)}}function s(e){try{c(i.throw(e))}catch(e){o(e)}}function c(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((i=i.apply(n,t||[])).next())}));var n,t,r,i}},177:(e,n,t)=>{"use strict";t.d(n,{A:()=>c});var r=t(3062),o=t.n(r),i=t(612),a=t.n(i),s=t(2339);o().use(s.initReactI18next).use(a()((function(e,n,r){t(2096)("./".concat(e,"/").concat(n,".json")).then((function(e){r(null,e)})).catch((function(e){r(e,null)}))}))).init({fallbackLng:"uk"});const c=o()},1020:(e,n,t)=>{"use strict";var r=t(1527),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,t){var r,i={},u=null,l=null;for(r in void 0!==t&&(u=""+t),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:u,ref:l,props:i,_owner:s.current}}n.Fragment=i,n.jsx=u,n.jsxs=u},4848:(e,n,t)=>{"use strict";e.exports=t(1020)},2096:(e,n,t)=>{var r={"./en-US/settings.json":[2127,127],"./en-US/translation.json":[9833,833],"./pl/settings.json":[4031,31],"./pl/translation.json":[7561,561],"./pt-BR/settings.json":[2512,512],"./pt-BR/translation.json":[5804,804],"./uk/settings.json":[3559,559],"./uk/translation.json":[6769,769]};function o(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((()=>t.t(o,19)))}o.keys=()=>Object.keys(r),o.id=2096,e.exports=o}}]);
//# sourceMappingURL=878.5a03f3fd.chunk.js.map