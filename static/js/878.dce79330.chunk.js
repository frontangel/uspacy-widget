/*! For license information please see 878.dce79330.chunk.js.LICENSE.txt */
(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[878,848],{3589:(e,n,t)=>{"use strict";t.d(n,{A:()=>a});var r=t(4848),o=t(645),i=t(7216);const a=function(e){var n=e.children,t=e.userSettings;return(0,r.jsx)(i.Ay,{userSettings:t,children:(0,r.jsx)(o.A,{children:n})})}},5878:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>p});var r=t(4848),o=t(4408),i=t(1527),a=t(2339),s=t(1277),u=t(3589),c=function(){return c=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},c.apply(this,arguments)},l=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{u(r.next(e))}catch(e){i(e)}}function s(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}u((r=r.apply(e,n||[])).next())}))},d=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}},f=function(){var e,n,t,u=(0,i.useState)({installed:!1,apiKey:"",isConnected:!1}),f=u[0],p=u[1],h=(0,i.useState)(!1),v=h[0],y=h[1],b=(0,i.useState)(!1),x=b[0],g=b[1],m=(0,i.useState)(""),w=m[0],j=m[1],k=(0,a.useTranslation)("settings").t,S=function(e,n,t){return new Promise((function(r,o){var i={"Accept-Language":"uk"};n&&(i.Authorization="Bearer ".concat(n)),fetch(e,c({headers:i},t)).then((function(e){return e.json()})).then(r).catch(o)}))},_=function(){return l(void 0,void 0,void 0,(function(){var e,n,t;return d(this,(function(r){switch(r.label){case 0:return[4,(0,s.kP)("token")];case 1:return e=r.sent(),[4,S("/apps/v1/apps?code[]=do_it_well_lead_box",e)];case 2:return n=r.sent(),[4,C()];case 3:return r.sent(),[2,(null===(t=null==n?void 0:n.data[0])||void 0===t?void 0:t.integration_token)||""]}}))}))},C=function(e){return void 0===e&&(e=1e3),new Promise((function(n){return setTimeout(n,e)}))};(0,i.useEffect)((function(){l(void 0,void 0,void 0,(function(){var e,n;return d(this,(function(t){switch(t.label){case 0:return y(!0),[4,_()];case 1:return e=t.sent(),[4,S("https://auth.leadbox.com.ua/uspacy/settings",e)];case 2:return n=t.sent(),p(n),y(!1),[2]}}))}))}),[]);var P=(null==f?void 0:f.isConnected)?{backgroundColor:"#d2f7b6",color:"#58ca00"}:{backgroundColor:"#ffdada",color:"#f00"};return(0,r.jsxs)(o.Box,{children:[(0,r.jsx)(o.Box,{sx:{width:"100%",display:"flex",justifyContent:"flex-end",marginBottom:"1rem"},children:(0,r.jsx)(o.Typography,{sx:c(c({},P),{display:"inline-flex",fontSize:"12px",letterSpacing:"1px",padding:"0.1rem 0.75rem",borderRadius:"1rem"}),children:(null==f?void 0:f.isConnected)?k("connected"):k("notConnected")})}),(0,r.jsx)(o.Typography,{variant:"subtitle2",sx:{fontWeight:"bold",paddingLeft:"1rem"},children:k("LABEL_API_KEY")}),(0,r.jsxs)(o.Box,{sx:{display:"flex",justifyContent:"center",gap:"1rem"},component:"form",onSubmit:function(e){return l(void 0,void 0,void 0,(function(){var n,t,r;return d(this,(function(o){switch(o.label){case 0:e.preventDefault(),y(!0),o.label=1;case 1:return o.trys.push([1,4,5,6]),[4,_()];case 2:return n=o.sent(),[4,S("https://auth.leadbox.com.ua/uspacy/settings",n,{method:"POST",body:JSON.stringify({apiKey:f.apiKey})})];case 3:return t=o.sent(),p(t),[3,6];case 4:return r=o.sent(),console.log(r),[3,6];case 5:return y(!1),g(!1),[7];case 6:return[2]}}))}))},children:[(0,r.jsx)(o.Input,{sx:{width:"100%",border:"1px solid #ddd",outline:"none",borderRadius:"4px",paddingLeft:"1rem",paddingRight:"1rem","&:before":{content:"none"},"&:after":{content:"none"}},disabled:v,placeholder:k("integrationApiKey"),value:f.apiKey||"",onChange:function(e){j(""),p(c(c({},f),{apiKey:e.target.value})),g(!0)}}),(0,r.jsxs)(o.Button,{disableElevation:!0,variant:(null===(e=f.apiKey)||void 0===e?void 0:e.trim())&&x?"contained":"outlined",type:"submit",disabled:v||!(null===(n=f.apiKey)||void 0===n?void 0:n.trim())||!x,sx:{backgroundColor:"#58ca00",border:"1px solid #58ca00",padding:"5px 2rem",textTransform:"none",letterSpacing:"1px","&:hover":{backgroundColor:"#58ca00"},"&:disabled":{backgroundColor:(null===(t=f.apiKey)||void 0===t?void 0:t.trim())&&x?"#d2f7b6":"transparent",color:"#58ca00",borderColor:"#58ca00"}},children:[k("connect"),v&&(0,r.jsx)(o.CircularProgress,{size:22,sx:{color:"#58ca00",position:"absolute",zIndex:1}})]})]}),(0,r.jsx)(o.Box,{sx:{position:"relative",height:"1rem",marginBottom:"1rem"},children:w&&(0,r.jsx)(o.Typography,{variant:"subtitle2",sx:{color:"red",position:"absolute",left:0,top:0,fontSize:"11px",paddingLeft:"1rem"},children:k(w)})})]})};const p=function(e){var n=e.userSettings;return(0,r.jsx)(u.A,{userSettings:n,children:(0,r.jsx)(f,{})})}},645:(e,n,t)=>{"use strict";t.d(n,{A:()=>c});var r=t(4848),o=t(1527),i=t(2339),a=t(177),s=t(7216),u=(0,o.createContext)({});const c=function(e){var n=e.children,t=(0,s.dk)().userSettings;return(0,o.useEffect)((function(){a.A.changeLanguage(null==t?void 0:t.lang)}),[null==t?void 0:t.lang]),(0,r.jsx)(u.Provider,{value:{userSettings:t},children:(0,r.jsx)(i.I18nextProvider,{i18n:a.A,children:n})})}},7216:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>s,dk:()=>a});var r=t(4848),o=t(1527),i=(0,o.createContext)({}),a=function(){return(0,o.useContext)(i)};const s=function(e){var n=e.children,t=e.userSettings;return(0,r.jsx)(i.Provider,{value:{userSettings:t},children:n})}},1277:(e,n,t)=>{"use strict";t.d(n,{kP:()=>i});var r=t(7314),o=(0,r.openDB)("Uspacy"),i=function(e){return n=void 0,t=void 0,i=function(){return function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(a=0)),a;)try{if(t=1,r&&(o=2&s[0]?r.return:s[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,s[1])).done)return o;switch(r=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return a.label++,{value:s[1],done:!1};case 5:a.label++,r=s[1],s=[0];continue;case 7:s=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==s[0]&&2!==s[0])){a=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){a.label=s[1];break}if(6===s[0]&&a.label<o[1]){a.label=o[1],o=s;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(s);break}o[2]&&a.ops.pop(),a.trys.pop();continue}s=n.call(e,a)}catch(e){s=[6,e],r=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(n){switch(n.label){case 0:return[4,o];case 1:return[4,n.sent().get("tokens",e)];case 2:return[2,n.sent()]}}))},new((r=void 0)||(r=Promise))((function(e,o){function a(e){try{u(i.next(e))}catch(e){o(e)}}function s(e){try{u(i.throw(e))}catch(e){o(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((i=i.apply(n,t||[])).next())}));var n,t,r,i}},177:(e,n,t)=>{"use strict";t.d(n,{A:()=>u});var r=t(3062),o=t.n(r),i=t(612),a=t.n(i),s=t(2339);o().use(s.initReactI18next).use(a()((function(e,n,r){t(2096)("./".concat(e,"/").concat(n,".json")).then((function(e){r(null,e)})).catch((function(e){r(e,null)}))}))).init({fallbackLng:"uk"});const u=o()},1020:(e,n,t)=>{"use strict";var r=t(1527),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)a.call(n,r)&&!u.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:s.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},4848:(e,n,t)=>{"use strict";e.exports=t(1020)},2096:(e,n,t)=>{var r={"./en-US/settings.json":[2127,127],"./en-US/translation.json":[9833,833],"./pl/settings.json":[4031,31],"./pl/translation.json":[7561,561],"./pt-BR/settings.json":[2512,512],"./pt-BR/translation.json":[5804,804],"./uk/settings.json":[3559,559],"./uk/translation.json":[6769,769]};function o(e){if(!t.o(r,e))return Promise.resolve().then((()=>{var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],o=n[0];return t.e(n[1]).then((()=>t.t(o,19)))}o.keys=()=>Object.keys(r),o.id=2096,e.exports=o}}]);
//# sourceMappingURL=878.dce79330.chunk.js.map