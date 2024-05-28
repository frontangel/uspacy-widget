(self.webpackChunkcontainer=self.webpackChunkcontainer||[]).push([[180],{1542:function(e,t){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.MainRoles=void 0,function(e){e.ADMIN="ADMIN",e.OWNER="OWNER"}(r||(t.MainRoles=r={}))},3537:function(e,t,r){(()=>{"use strict";var t={641:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useAppSelector=t.useAppDispatch=void 0;const n=r(6022);t.useAppDispatch=()=>(0,n.useDispatch)(),t.useAppSelector=n.useSelector},9790:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function c(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removeUsersFromDepartment=t.addUsersToDepartment=t.deleteDepartment=t.editDepartment=t.createDepartment=t.fetchDepartments=void 0;const a=r(5184),i=r(4809),c=r(8065);t.fetchDepartments=(0,a.createAsyncThunk)("departments/fetchDepartments",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const e=(yield i.uspacySdk.tokensService.getUserRoles().catch((()=>{})))||[],t=i.uspacySdk.usersService.hasRole(e,[c.MainRoles.ADMIN,c.MainRoles.OWNER])?"all":void 0;return(yield i.uspacySdk.departmentsService.getDepartments(void 0,"all",t)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.createDepartment=(0,a.createAsyncThunk)("departments/createDepartment",(({name:e,headId:t,description:r,usersIds:a,parentDepartmentId:c,generalDepartmentId:s},u)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.departmentsService.createDepartment({name:e,headId:t,description:r,usersIds:a,parentDepartmentId:c||s.toString()})).data}catch(e){return u.rejectWithValue("Failure")}})))),t.editDepartment=(0,a.createAsyncThunk)("departments/editDepartment",(({id:e,name:t,headId:r,description:a,usersIds:c,parentDepartmentId:s},u)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.departmentsService.updateDepartment(e,{name:t,headId:r,description:a,parentDepartmentId:s,usersIds:c})).data}catch(e){return u.rejectWithValue("Failure")}})))),t.deleteDepartment=(0,a.createAsyncThunk)("departments/deleteDepartment",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return i.uspacySdk.departmentsService.deleteDepartment(e)}catch(e){return t.rejectWithValue("Failure")}finally{return e}})))),t.addUsersToDepartment=(0,a.createAsyncThunk)("departments/addUsersToDepartment",(({departmentId:e,usersIds:t},r)=>n(void 0,void 0,void 0,(function*(){try{return i.uspacySdk.departmentsService.addUsersToDepartment(String(e),t)}catch(e){return r.rejectWithValue("Failure")}})))),t.removeUsersFromDepartment=(0,a.createAsyncThunk)("departments/removeUsersFromDepartment",(({departmentId:e,usersIds:t},r)=>n(void 0,void 0,void 0,(function*(){try{return i.uspacySdk.departmentsService.deleteUsersFromDepartment(String(e),t)}catch(e){return r.rejectWithValue("Failure")}}))))},995:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function c(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}u((n=n.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.removeTemplate=t.updateTemplate=t.createTemplate=t.fetchBasicTemplates=t.fetchTemplates=t.removeRequisite=t.updateRequisite=t.fetchRequisites=t.fetchProfile=void 0;const a=r(5184),i=r(4809);t.fetchProfile=(0,a.createAsyncThunk)("profile/fetchProfile",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.profileService.getProfile()).data}catch(e){return t.rejectWithValue(e)}})))),t.fetchRequisites=(0,a.createAsyncThunk)("crm/fetchRequisites",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.profileService.getRequisites()).data}catch(e){return t.rejectWithValue(e)}})))),t.updateRequisite=(0,a.createAsyncThunk)("crm/updateRequisite",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.profileService.updateRequisite(e)).data}catch(e){return t.rejectWithValue(e)}})))),t.removeRequisite=(0,a.createAsyncThunk)("crm/removeRequisite",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return yield i.uspacySdk.profileService.removeRequisite(e),e}catch(e){return t.rejectWithValue(e)}})))),t.fetchTemplates=(0,a.createAsyncThunk)("crm/fetchTemplates",((e,t)=>n(void 0,void 0,void 0,(function*(){const{page:r,list:n}=e;try{return(yield i.uspacySdk.profileService.getTemplates(r,n)).data}catch(e){return t.rejectWithValue(e)}})))),t.fetchBasicTemplates=(0,a.createAsyncThunk)("crm/fetchBasicTemplates",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.profileService.getBasicTemplates()).data}catch(e){return t.rejectWithValue(e)}})))),t.createTemplate=(0,a.createAsyncThunk)("crm/createTemplate",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.profileService.createTemplate(e)).data}catch(e){return t.rejectWithValue(e)}})))),t.updateTemplate=(0,a.createAsyncThunk)("crm/updateTemplate",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield i.uspacySdk.profileService.updateTemplate(e)).data}catch(e){return t.rejectWithValue(e)}})))),t.removeTemplate=(0,a.createAsyncThunk)("crm/removeTemplate",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return yield i.uspacySdk.profileService.removeTemplate(e),e}catch(e){return t.rejectWithValue(e)}}))))},8508:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(a,i){function c(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(c,s)}u((n=n.apply(e,t||[])).next())}))},a=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.uploadAvatar=t.deleteInvitation=t.repeatInvitation=t.sendUserInvites=t.activateUser=t.deactivateUser=t.updateUserRoles=t.updateUserPosition=t.updateUser=t.fetchUsers=void 0;const i=r(5184),c=r(4809),s=r(8065);t.fetchUsers=(0,i.createAsyncThunk)("users/fetchUsers",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const e=(yield c.uspacySdk.tokensService.getUserRoles().catch((()=>{})))||[],t=c.uspacySdk.usersService.hasRole(e,[s.MainRoles.ADMIN,s.MainRoles.OWNER])?"all":void 0;return(yield c.uspacySdk.usersService.getUsers(void 0,"all",t)).data}catch(e){return t.rejectWithValue("Failure load users")}})))),t.updateUser=(0,i.createAsyncThunk)("users/updateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{const{id:t}=e,r=a(e,["id"]),n=yield c.uspacySdk.usersService.updateUser(t,r);return e.active||e.registered||(n.data.dateOfInvitation=e.dateOfInvitation),n.data}catch(e){return t.rejectWithValue("Failure")}})))),t.updateUserPosition=(0,i.createAsyncThunk)("users/updateUserPosition",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield c.uspacySdk.usersService.updatePosition(e.id,e.position)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.updateUserRoles=(0,i.createAsyncThunk)("users/updateUserRoles",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield c.uspacySdk.usersService.updateRoles(e.id,e.roles)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.deactivateUser=(0,i.createAsyncThunk)("users/deactivateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield c.uspacySdk.usersService.deactivateUser(e)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.activateUser=(0,i.createAsyncThunk)("users/activateUser",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return(yield c.uspacySdk.usersService.activateUser(e)).data}catch(e){return t.rejectWithValue("Failure")}})))),t.sendUserInvites=(0,i.createAsyncThunk)("users/sendUserInvites",(({invites:e,type:r},a)=>n(void 0,void 0,void 0,(function*(){try{return"single"===r?c.uspacySdk.invatesService.createInvates(e.reduce(((e,t)=>t.email.length>0?[...e,{email:t.email,firstName:t.firstName,lastName:t.lastName}]:e),[])):c.uspacySdk.invatesService.createInvatesBatch(e.reduce(((e,t)=>t.email.length>0?[...e,t.email]:e),[]))}catch(e){return a.rejectWithValue("Failure")}finally{return a.dispatch((0,t.fetchUsers)())}})))),t.repeatInvitation=(0,i.createAsyncThunk)("users/repeatInvitation",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return yield c.uspacySdk.invatesService.resendInvateByUserId(e),e}catch(e){return t.rejectWithValue("Failure")}})))),t.deleteInvitation=(0,i.createAsyncThunk)("users/deleteInvitation",((e,t)=>n(void 0,void 0,void 0,(function*(){try{return c.uspacySdk.invatesService.deleteInvateByUserId(e)}catch(e){return t.rejectWithValue("Failure")}finally{return e}})))),t.uploadAvatar=(0,i.createAsyncThunk)("users/uploadAvatar",(({file:e,userId:t,adminRole:r,profileId:a},{rejectWithValue:i})=>n(void 0,void 0,void 0,(function*(){try{return(yield c.uspacySdk.usersService.uploadAvatar({file:e,userId:r&&t!==a?t:a})).data}catch(e){return i("Failure")}}))))},5184:e=>{e.exports=r(3501)},4809:e=>{e.exports=r(2903)},8065:e=>{e.exports=r(1542)},6689:e=>{e.exports=r(2747)},6022:e=>{e.exports=r(9238)}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var i=n[e]={exports:{}};return t[e].call(i.exports,i,i.exports,a),i.exports}var i={};(()=>{var e=i;Object.defineProperty(e,"__esModule",{value:!0});const t=a(6689),r=a(641),n=a(9790),c=a(995),s=a(8508);e.default=()=>{const e=(0,r.useAppDispatch)();return(0,t.useEffect)((()=>{e((0,c.fetchProfile)()),e((0,s.fetchUsers)()),e((0,n.fetchDepartments)())}),[]),null}})(),e.exports=i})()},180:function(e,t,r){"use strict";r.r(t);var n=r(5893),a=r(6300),i=r(3537),c=r.n(i),s=r(745),u=r(1508),o=r(5712),d=r(2747),l=r(5146),p=r.n(l),v=r(4929),f=r.n(v);p().use(o.initReactI18next).use(f()((function(e,t,n){r(7535)("./".concat(e,"/").concat(t,".json")).then((function(e){n(null,e)})).catch((function(e){n(e,null)}))}))).init({fallbackLng:"uk"});var h,y,m=p(),S=(0,d.createContext)({}),k=function(e){var t=e.children,r=e.userSettings;return(0,n.jsx)(S.Provider,{value:{userSettings:r},children:t})},j=(0,d.createContext)({}),T=function(e){var t=e.children,r=(0,d.useContext)(S).userSettings;return(0,d.useEffect)((function(){m.changeLanguage(null==r?void 0:r.lang)}),[null==r?void 0:r.lang]),(0,n.jsx)(j.Provider,{value:{userSettings:r},children:(0,n.jsx)(o.I18nextProvider,{i18n:m,children:t})})},I=function(e){var t=e.children,r=e.userSettings;return(0,n.jsx)(k,{userSettings:r,children:(0,n.jsx)(T,{children:t})})},x=function(){var e=(0,o.useTranslation)().t,t=(0,a.useAppSelector)((function(e){return e.profile.data}));return(0,n.jsxs)(u.Z,{sx:{display:"flex",justifyContent:"center",color:function(e){return e.palette.primary.main}},children:[e("helloWorld")," | ",null==t?void 0:t.firstName," ",null==t?void 0:t.lastName]})},b=function(e){var t=e.userSettings;return(0,n.jsx)(I,{userSettings:t,children:(0,n.jsx)(x,{})})},A=r(2903);y=function(){var e;return function(e,t){var r,n,a,i,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(c=0)),c;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,n=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){c=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){c.label=s[1];break}if(6===s[0]&&c.label<a[1]){c.label=a[1],a=s;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(s);break}a[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(e,c)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(t){switch(t.label){case 0:return[4,(r="MISSING_ENV_VAR".PORTAL_AUTH_EMAIL,i="MISSING_ENV_VAR".PORTAL_AUTH_PASSWORD,new Promise((function(e,t){return n=void 0,a=void 0,s=function(){var n;return function(e,t){var r,n,a,i,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(s){return function(u){return function(s){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,s[0]&&(c=0)),c;)try{if(r=1,n&&(a=2&s[0]?n.return:s[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,s[1])).done)return a;switch(n=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return c.label++,{value:s[1],done:!1};case 5:c.label++,n=s[1],s=[0];continue;case 7:s=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){c=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){c.label=s[1];break}if(6===s[0]&&c.label<a[1]){c.label=a[1],a=s;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(s);break}a[2]&&c.ops.pop(),c.trys.pop();continue}s=t.call(e,c)}catch(e){s=[6,e],n=0}finally{r=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}}(this,(function(a){switch(a.label){case 0:return[2,e()];case 1:return a.trys.push([1,3,,4]),[4,A.uspacySdk.authService.login({email:r,password:i})];case 2:return a.sent(),e(),[3,4];case 3:return n=a.sent(),t(n),[3,4];case 4:return[2]}}))},new((c=void 0)||(c=Promise))((function(e,t){function r(e){try{u(s.next(e))}catch(e){t(e)}}function i(e){try{u(s.throw(e))}catch(e){t(e)}}function u(t){var n;t.done?e(t.value):(n=t.value,n instanceof c?n:new c((function(e){e(n)}))).then(r,i)}u((s=s.apply(n,a||[])).next())}));var n,a,c,s})))];case 1:return t.sent(),e=document.getElementById("root"),(0,s.s)(e).render((0,n.jsxs)(a.StoreProvider,{children:[(0,n.jsx)(c(),{}),(0,n.jsx)(b,{})]})),[2]}var r,i}))},new((h=void 0)||(h=Promise))((function(e,t){function r(e){try{a(y.next(e))}catch(e){t(e)}}function n(e){try{a(y.throw(e))}catch(e){t(e)}}function a(t){var a;t.done?e(t.value):(a=t.value,a instanceof h?a:new h((function(e){e(a)}))).then(r,n)}a((y=y.apply(void 0,[])).next())}))},745:function(e,t,r){"use strict";var n=r(56);t.s=n.createRoot,n.hydrateRoot},7535:function(e,t,r){var n={"./en-US/settings.json":[8414,852],"./en-US/translation.json":[567,567],"./pl/settings.json":[1441,441],"./pl/translation.json":[450,450],"./pt-BR/settings.json":[2248,248],"./pt-BR/translation.json":[9536,536],"./uk/settings.json":[8480,480],"./uk/translation.json":[2978,978]};function a(e){if(!r.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],a=t[0];return r.e(t[1]).then((function(){return r.t(a,19)}))}a.keys=function(){return Object.keys(n)},a.id=7535,e.exports=a}}]);
//# sourceMappingURL=180.2381583b.chunk.js.map