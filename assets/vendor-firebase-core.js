const Xi=()=>{};var qs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=function(e){const n=[];let r=0;for(let o=0;o<e.length;o++){let a=e.charCodeAt(o);a<128?n[r++]=a:a<2048?(n[r++]=a>>6|192,n[r++]=a&63|128):(a&64512)===55296&&o+1<e.length&&(e.charCodeAt(o+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++o)&1023),n[r++]=a>>18|240,n[r++]=a>>12&63|128,n[r++]=a>>6&63|128,n[r++]=a&63|128):(n[r++]=a>>12|224,n[r++]=a>>6&63|128,n[r++]=a&63|128)}return n},Gi=function(e){const n=[];let r=0,o=0;for(;r<e.length;){const a=e[r++];if(a<128)n[o++]=String.fromCharCode(a);else if(a>191&&a<224){const h=e[r++];n[o++]=String.fromCharCode((a&31)<<6|h&63)}else if(a>239&&a<365){const h=e[r++],u=e[r++],w=e[r++],v=((a&7)<<18|(h&63)<<12|(u&63)<<6|w&63)-65536;n[o++]=String.fromCharCode(55296+(v>>10)),n[o++]=String.fromCharCode(56320+(v&1023))}else{const h=e[r++],u=e[r++];n[o++]=String.fromCharCode((a&15)<<12|(h&63)<<6|u&63)}}return n.join("")},ur={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,n){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=n?this.byteToCharMapWebSafe_:this.byteToCharMap_,o=[];for(let a=0;a<e.length;a+=3){const h=e[a],u=a+1<e.length,w=u?e[a+1]:0,v=a+2<e.length,E=v?e[a+2]:0,I=h>>2,C=(h&3)<<4|w>>4;let S=(w&15)<<2|E>>6,O=E&63;v||(O=64,u||(S=64)),o.push(r[I],r[C],r[S],r[O])}return o.join("")},encodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?btoa(e):this.encodeByteArray(cr(e),n)},decodeString(e,n){return this.HAS_NATIVE_SUPPORT&&!n?atob(e):Gi(this.decodeStringToByteArray(e,n))},decodeStringToByteArray(e,n){this.init_();const r=n?this.charToByteMapWebSafe_:this.charToByteMap_,o=[];for(let a=0;a<e.length;){const h=r[e.charAt(a++)],w=a<e.length?r[e.charAt(a)]:0;++a;const E=a<e.length?r[e.charAt(a)]:64;++a;const C=a<e.length?r[e.charAt(a)]:64;if(++a,h==null||w==null||E==null||C==null)throw new Ki;const S=h<<2|w>>4;if(o.push(S),E!==64){const O=w<<4&240|E>>2;if(o.push(O),C!==64){const k=E<<6&192|C;o.push(k)}}}return o},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ki extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ji=function(e){const n=cr(e);return ur.encodeByteArray(n,!0)},Ae=function(e){return Ji(e).replace(/\./g,"")},bn=function(e){try{return ur.decodeString(e,!0)}catch(n){console.error("base64Decode failed: ",n)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=()=>Yi().__FIREBASE_DEFAULTS__,Qi=()=>{if(typeof process>"u"||typeof qs>"u")return;const e=qs.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},to=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const n=e&&bn(e[1]);return n&&JSON.parse(n)},xe=()=>{try{return Xi()||Zi()||Qi()||to()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},eo=e=>{var n,r;return(r=(n=xe())==null?void 0:n.emulatorHosts)==null?void 0:r[e]},no=e=>{const n=eo(e);if(!n)return;const r=n.lastIndexOf(":");if(r<=0||r+1===n.length)throw new Error(`Invalid host ${n} with no separate hostname and port!`);const o=parseInt(n.substring(r+1),10);return n[0]==="["?[n.substring(1,r-1),o]:[n.substring(0,r),o]},fr=()=>{var e;return(e=xe())==null?void 0:e.config},hc=e=>{var n;return(n=xe())==null?void 0:n[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((n,r)=>{this.resolve=n,this.reject=r})}wrapCallback(n){return(r,o)=>{r?this.reject(r):this.resolve(o),typeof n=="function"&&(this.promise.catch(()=>{}),n.length===1?n(r):n(r,o))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){try{return(e.startsWith("http://")||e.startsWith("https://")?new URL(e).hostname:e).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ro(e){return(await fetch(e,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function io(e,n){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const r={alg:"none",type:"JWT"},o=n||"demo-project",a=e.iat||0,h=e.sub||e.user_id;if(!h)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u={iss:`https://securetoken.google.com/${o}`,aud:o,iat:a,exp:a+3600,auth_time:a,sub:h,user_id:h,firebase:{sign_in_provider:"custom",identities:{}},...e};return[Ae(JSON.stringify(r)),Ae(JSON.stringify(u)),""].join(".")}const ne={};function oo(){const e={prod:[],emulator:[]};for(const n of Object.keys(ne))ne[n]?e.emulator.push(n):e.prod.push(n);return e}function ao(e){let n=document.getElementById(e),r=!1;return n||(n=document.createElement("div"),n.setAttribute("id",e),r=!0),{created:r,element:n}}let zs=!1;function lo(e,n){if(typeof window>"u"||typeof document>"u"||!Rn(window.location.host)||ne[e]===n||ne[e]||zs)return;ne[e]=n;function r(S){return`__firebase__banner__${S}`}const o="__firebase__banner",h=oo().prod.length>0;function u(){const S=document.getElementById(o);S&&S.remove()}function w(S){S.style.display="flex",S.style.background="#7faaf0",S.style.position="fixed",S.style.bottom="5px",S.style.left="5px",S.style.padding=".5em",S.style.borderRadius="5px",S.style.alignItems="center"}function v(S,O){S.setAttribute("width","24"),S.setAttribute("id",O),S.setAttribute("height","24"),S.setAttribute("viewBox","0 0 24 24"),S.setAttribute("fill","none"),S.style.marginLeft="-6px"}function E(){const S=document.createElement("span");return S.style.cursor="pointer",S.style.marginLeft="16px",S.style.fontSize="24px",S.innerHTML=" &times;",S.onclick=()=>{zs=!0,u()},S}function I(S,O){S.setAttribute("id",O),S.innerText="Learn more",S.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",S.setAttribute("target","__blank"),S.style.paddingLeft="5px",S.style.textDecoration="underline"}function C(){const S=ao(o),O=r("text"),k=document.getElementById(O)||document.createElement("span"),D=r("learnmore"),R=document.getElementById(D)||document.createElement("a"),F=r("preprendIcon"),H=document.getElementById(F)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(S.created){const P=S.element;w(P),I(R,D);const N=E();v(H,F),P.append(H,k,R,N),document.body.appendChild(P)}h?(k.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,k.innerText="Preview backend running in this workspace."),k.setAttribute("id",O)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",C):C()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dr())}function pr(){var n;const e=(n=xe())==null?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uc(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fc(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function dc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pc(){const e=dr();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function gc(){return!pr()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mc(){return!pr()&&!!navigator.userAgent&&(navigator.userAgent.includes("Safari")||navigator.userAgent.includes("WebKit"))&&!navigator.userAgent.includes("Chrome")}function ho(){try{return typeof indexedDB=="object"}catch{return!1}}function co(){return new Promise((e,n)=>{try{let r=!0;const o="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(o);a.onsuccess=()=>{a.result.close(),r||self.indexedDB.deleteDatabase(o),e(!0)},a.onupgradeneeded=()=>{r=!1},a.onerror=()=>{var h;n(((h=a.error)==null?void 0:h.message)||"")}}catch(r){n(r)}})}function _c(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="FirebaseError";class bt extends Error{constructor(n,r,o){super(r),this.code=n,this.customData=o,this.name=uo,Object.setPrototypeOf(this,bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(n,r,o){this.service=n,this.serviceName=r,this.errors=o}create(n,...r){const o=r[0]||{},a=`${this.service}/${n}`,h=this.errors[n],u=h?fo(h,o):"Error",w=`${this.serviceName}: ${u} (${a}).`;return new bt(a,w,o)}}function fo(e,n){return e.replace(po,(r,o)=>{const a=n[o];return a!=null?String(a):`<${o}?>`})}const po=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(e){return JSON.parse(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go=function(e){let n={},r={},o={},a="";try{const h=e.split(".");n=Vs(bn(h[0])||""),r=Vs(bn(h[1])||""),a=h[2],o=r.d||{},delete r.d}catch{}return{header:n,claims:r,data:o,signature:a}},yc=function(e){const n=go(e).claims;return typeof n=="object"&&n.hasOwnProperty("iat")?n.iat:null};function bc(e){for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n))return!1;return!0}function wn(e,n){if(e===n)return!0;const r=Object.keys(e),o=Object.keys(n);for(const a of r){if(!o.includes(a))return!1;const h=e[a],u=n[a];if(Ws(h)&&Ws(u)){if(!wn(h,u))return!1}else if(h!==u)return!1}for(const a of o)if(!r.includes(a))return!1;return!0}function Ws(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(e){const n=[];for(const[r,o]of Object.entries(e))Array.isArray(o)?o.forEach(a=>{n.push(encodeURIComponent(r)+"="+encodeURIComponent(a))}):n.push(encodeURIComponent(r)+"="+encodeURIComponent(o));return n.length?"&"+n.join("&"):""}function vc(e){const n={};return e.replace(/^\?/,"").split("&").forEach(o=>{if(o){const[a,h]=o.split("=");n[decodeURIComponent(a)]=decodeURIComponent(h)}}),n}function Ec(e){const n=e.indexOf("?");if(!n)return"";const r=e.indexOf("#",n);return e.substring(n,r>0?r:void 0)}function Tc(e,n){const r=new mo(e,n);return r.subscribe.bind(r)}class mo{constructor(n,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{n(this)}).catch(o=>{this.error(o)})}next(n){this.forEachObserver(r=>{r.next(n)})}error(n){this.forEachObserver(r=>{r.error(n)}),this.close(n)}complete(){this.forEachObserver(n=>{n.complete()}),this.close()}subscribe(n,r,o){let a;if(n===void 0&&r===void 0&&o===void 0)throw new Error("Missing Observer.");_o(n,["next","error","complete"])?a=n:a={next:n,error:r,complete:o},a.next===void 0&&(a.next=hn),a.error===void 0&&(a.error=hn),a.complete===void 0&&(a.complete=hn);const h=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),h}unsubscribeOne(n){this.observers===void 0||this.observers[n]===void 0||(delete this.observers[n],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(n){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,n)}sendOne(n,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[n]!==void 0)try{r(this.observers[n])}catch(o){typeof console<"u"&&console.error&&console.error(o)}})}close(n){this.finalized||(this.finalized=!0,n!==void 0&&(this.finalError=n),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function _o(e,n){if(typeof e!="object"||e===null)return!1;for(const r of n)if(r in e&&typeof e[r]=="function")return!0;return!1}function hn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=1e3,bo=2,wo=14400*1e3,vo=.5;function Sc(e,n=yo,r=bo){const o=n*Math.pow(r,e),a=Math.round(vo*o*(Math.random()-.5)*2);return Math.min(wo,o+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(e){return e&&e._delegate?e._delegate:e}class kt{constructor(n,r,o){this.name=n,this.instanceFactory=r,this.type=o,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(n){return this.instantiationMode=n,this}setMultipleInstances(n){return this.multipleInstances=n,this}setServiceProps(n){return this.serviceProps=n,this}setInstanceCreatedCallback(n){return this.onInstanceCreated=n,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(n,r){this.name=n,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(n){const r=this.normalizeInstanceIdentifier(n);if(!this.instancesDeferred.has(r)){const o=new so;if(this.instancesDeferred.set(r,o),this.isInitialized(r)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:r});a&&o.resolve(a)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(n){const r=this.normalizeInstanceIdentifier(n==null?void 0:n.identifier),o=(n==null?void 0:n.optional)??!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(o)return null;throw a}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(n){if(n.name!==this.name)throw Error(`Mismatching Component ${n.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=n,!!this.shouldAutoInitialize()){if(So(n))try{this.getOrInitializeService({instanceIdentifier:Ct})}catch{}for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);try{const h=this.getOrInitializeService({instanceIdentifier:a});o.resolve(h)}catch{}}}}clearInstance(n=Ct){this.instancesDeferred.delete(n),this.instancesOptions.delete(n),this.instances.delete(n)}async delete(){const n=Array.from(this.instances.values());await Promise.all([...n.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...n.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(n=Ct){return this.instances.has(n)}getOptions(n=Ct){return this.instancesOptions.get(n)||{}}initialize(n={}){const{options:r={}}=n,o=this.normalizeInstanceIdentifier(n.instanceIdentifier);if(this.isInitialized(o))throw Error(`${this.name}(${o}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:o,options:r});for(const[h,u]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(h);o===w&&u.resolve(a)}return a}onInit(n,r){const o=this.normalizeInstanceIdentifier(r),a=this.onInitCallbacks.get(o)??new Set;a.add(n),this.onInitCallbacks.set(o,a);const h=this.instances.get(o);return h&&n(h,o),()=>{a.delete(n)}}invokeOnInitCallbacks(n,r){const o=this.onInitCallbacks.get(r);if(o)for(const a of o)try{a(n,r)}catch{}}getOrInitializeService({instanceIdentifier:n,options:r={}}){let o=this.instances.get(n);if(!o&&this.component&&(o=this.component.instanceFactory(this.container,{instanceIdentifier:To(n),options:r}),this.instances.set(n,o),this.instancesOptions.set(n,r),this.invokeOnInitCallbacks(o,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,o)}catch{}return o||null}normalizeInstanceIdentifier(n=Ct){return this.component?this.component.multipleInstances?n:Ct:n}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function To(e){return e===Ct?void 0:e}function So(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(n){this.name=n,this.providers=new Map}addComponent(n){const r=this.getProvider(n.name);if(r.isComponentSet())throw new Error(`Component ${n.name} has already been registered with ${this.name}`);r.setComponent(n)}addOrOverwriteComponent(n){this.getProvider(n.name).isComponentSet()&&this.providers.delete(n.name),this.addComponent(n)}getProvider(n){if(this.providers.has(n))return this.providers.get(n);const r=new Eo(n,this);return this.providers.set(n,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(U||(U={}));const Co={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Ro=U.INFO,Ao={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},ko=(e,n,...r)=>{if(n<e.logLevel)return;const o=new Date().toISOString(),a=Ao[n];if(a)console[a](`[${o}]  ${e.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${n})`)};class Oo{constructor(n){this.name=n,this._logLevel=Ro,this._logHandler=ko,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(n){if(!(n in U))throw new TypeError(`Invalid value "${n}" assigned to \`logLevel\``);this._logLevel=n}setLogLevel(n){this._logLevel=typeof n=="string"?Co[n]:n}get logHandler(){return this._logHandler}set logHandler(n){if(typeof n!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=n}get userLogHandler(){return this._userLogHandler}set userLogHandler(n){this._userLogHandler=n}debug(...n){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...n),this._logHandler(this,U.DEBUG,...n)}log(...n){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...n),this._logHandler(this,U.VERBOSE,...n)}info(...n){this._userLogHandler&&this._userLogHandler(this,U.INFO,...n),this._logHandler(this,U.INFO,...n)}warn(...n){this._userLogHandler&&this._userLogHandler(this,U.WARN,...n),this._logHandler(this,U.WARN,...n)}error(...n){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...n),this._logHandler(this,U.ERROR,...n)}}const Do=(e,n)=>n.some(r=>e instanceof r);let Xs,Gs;function Po(){return Xs||(Xs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xo(){return Gs||(Gs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gr=new WeakMap,vn=new WeakMap,mr=new WeakMap,cn=new WeakMap,kn=new WeakMap;function No(e){const n=new Promise((r,o)=>{const a=()=>{e.removeEventListener("success",h),e.removeEventListener("error",u)},h=()=>{r(_t(e.result)),a()},u=()=>{o(e.error),a()};e.addEventListener("success",h),e.addEventListener("error",u)});return n.then(r=>{r instanceof IDBCursor&&gr.set(r,e)}).catch(()=>{}),kn.set(n,e),n}function Bo(e){if(vn.has(e))return;const n=new Promise((r,o)=>{const a=()=>{e.removeEventListener("complete",h),e.removeEventListener("error",u),e.removeEventListener("abort",u)},h=()=>{r(),a()},u=()=>{o(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",h),e.addEventListener("error",u),e.addEventListener("abort",u)});vn.set(e,n)}let En={get(e,n,r){if(e instanceof IDBTransaction){if(n==="done")return vn.get(e);if(n==="objectStoreNames")return e.objectStoreNames||mr.get(e);if(n==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return _t(e[n])},set(e,n,r){return e[n]=r,!0},has(e,n){return e instanceof IDBTransaction&&(n==="done"||n==="store")?!0:n in e}};function Mo(e){En=e(En)}function Uo(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(n,...r){const o=e.call(un(this),n,...r);return mr.set(o,n.sort?n.sort():[n]),_t(o)}:xo().includes(e)?function(...n){return e.apply(un(this),n),_t(gr.get(this))}:function(...n){return _t(e.apply(un(this),n))}}function Lo(e){return typeof e=="function"?Uo(e):(e instanceof IDBTransaction&&Bo(e),Do(e,Po())?new Proxy(e,En):e)}function _t(e){if(e instanceof IDBRequest)return No(e);if(cn.has(e))return cn.get(e);const n=Lo(e);return n!==e&&(cn.set(e,n),kn.set(n,e)),n}const un=e=>kn.get(e);function _r(e,n,{blocked:r,upgrade:o,blocking:a,terminated:h}={}){const u=indexedDB.open(e,n),w=_t(u);return o&&u.addEventListener("upgradeneeded",v=>{o(_t(u.result),v.oldVersion,v.newVersion,_t(u.transaction),v)}),r&&u.addEventListener("blocked",v=>r(v.oldVersion,v.newVersion,v)),w.then(v=>{h&&v.addEventListener("close",()=>h()),a&&v.addEventListener("versionchange",E=>a(E.oldVersion,E.newVersion,E))}).catch(()=>{}),w}const jo=["get","getKey","getAll","getAllKeys","count"],Ho=["put","add","delete","clear"],fn=new Map;function Ks(e,n){if(!(e instanceof IDBDatabase&&!(n in e)&&typeof n=="string"))return;if(fn.get(n))return fn.get(n);const r=n.replace(/FromIndex$/,""),o=n!==r,a=Ho.includes(r);if(!(r in(o?IDBIndex:IDBObjectStore).prototype)||!(a||jo.includes(r)))return;const h=async function(u,...w){const v=this.transaction(u,a?"readwrite":"readonly");let E=v.store;return o&&(E=E.index(w.shift())),(await Promise.all([E[r](...w),a&&v.done]))[0]};return fn.set(n,h),h}Mo(e=>({...e,get:(n,r,o)=>Ks(n,r)||e.get(n,r,o),has:(n,r)=>!!Ks(n,r)||e.has(n,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(n){this.container=n}getPlatformInfoString(){return this.container.getProviders().map(r=>{if($o(r)){const o=r.getImmediate();return`${o.library}/${o.version}`}else return null}).filter(r=>r).join(" ")}}function $o(e){const n=e.getComponent();return(n==null?void 0:n.type)==="VERSION"}const Tn="@firebase/app",Js="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht=new Oo("@firebase/app"),qo="@firebase/app-compat",zo="@firebase/analytics-compat",Vo="@firebase/analytics",Wo="@firebase/app-check-compat",Xo="@firebase/app-check",Go="@firebase/auth",Ko="@firebase/auth-compat",Jo="@firebase/database",Yo="@firebase/data-connect",Zo="@firebase/database-compat",Qo="@firebase/functions",ta="@firebase/functions-compat",ea="@firebase/installations",na="@firebase/installations-compat",sa="@firebase/messaging",ra="@firebase/messaging-compat",ia="@firebase/performance",oa="@firebase/performance-compat",aa="@firebase/remote-config",la="@firebase/remote-config-compat",ha="@firebase/storage",ca="@firebase/storage-compat",ua="@firebase/firestore",fa="@firebase/ai",da="@firebase/firestore-compat",pa="firebase",ga="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const re="[DEFAULT]",ma={[Tn]:"fire-core",[qo]:"fire-core-compat",[Vo]:"fire-analytics",[zo]:"fire-analytics-compat",[Xo]:"fire-app-check",[Wo]:"fire-app-check-compat",[Go]:"fire-auth",[Ko]:"fire-auth-compat",[Jo]:"fire-rtdb",[Yo]:"fire-data-connect",[Zo]:"fire-rtdb-compat",[Qo]:"fire-fn",[ta]:"fire-fn-compat",[ea]:"fire-iid",[na]:"fire-iid-compat",[sa]:"fire-fcm",[ra]:"fire-fcm-compat",[ia]:"fire-perf",[oa]:"fire-perf-compat",[aa]:"fire-rc",[la]:"fire-rc-compat",[ha]:"fire-gcs",[ca]:"fire-gcs-compat",[ua]:"fire-fst",[da]:"fire-fst-compat",[fa]:"fire-vertex","fire-js":"fire-js",[pa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie=new Map,yr=new Map,ke=new Map;function Sn(e,n){try{e.container.addComponent(n)}catch(r){ht.debug(`Component ${n.name} failed to register with FirebaseApp ${e.name}`,r)}}function Ot(e){const n=e.name;if(ke.has(n))return ht.debug(`There were multiple attempts to register component ${n}.`),!1;ke.set(n,e);for(const r of ie.values())Sn(r,e);for(const r of yr.values())Sn(r,e);return!0}function ae(e,n){const r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(n)}function _a(e,n,r=re){ae(e,n).clearInstance(r)}function br(e){return e==null?!1:e.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yt=new An("app","Firebase",ya);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(n,r,o){this._isDeleted=!1,this._options={...n},this._config={...r},this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=o,this.container.addComponent(new kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(n){this.checkDestroyed(),this._automaticDataCollectionEnabled=n}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(n){this._isDeleted=n}checkDestroyed(){if(this.isDeleted)throw yt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=ga;function vr(e,n={}){let r=e;typeof n!="object"&&(n={name:n});const o={name:re,automaticDataCollectionEnabled:!0,...n},a=o.name;if(typeof a!="string"||!a)throw yt.create("bad-app-name",{appName:String(a)});if(r||(r=fr()),!r)throw yt.create("no-options");const h=ie.get(a);if(h){if(wn(r,h.options)&&wn(o,h.config))return h;throw yt.create("duplicate-app",{appName:a})}const u=new Io(a);for(const v of ke.values())u.addComponent(v);const w=new ba(r,o,u);return ie.set(a,w),w}function Er(e=re){const n=ie.get(e);if(!n&&e===re&&fr())return vr();if(!n)throw yt.create("no-app",{appName:e});return n}function lt(e,n,r){let o=ma[e]??e;r&&(o+=`-${r}`);const a=o.match(/\s|\//),h=n.match(/\s|\//);if(a||h){const u=[`Unable to register library "${o}" with version "${n}":`];a&&u.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&h&&u.push("and"),h&&u.push(`version name "${n}" contains illegal characters (whitespace or "/")`),ht.warn(u.join(" "));return}Ot(new kt(`${o}-version`,()=>({library:o,version:n}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="firebase-heartbeat-database",va=1,oe="firebase-heartbeat-store";let dn=null;function Tr(){return dn||(dn=_r(wa,va,{upgrade:(e,n)=>{switch(n){case 0:try{e.createObjectStore(oe)}catch(r){console.warn(r)}}}}).catch(e=>{throw yt.create("idb-open",{originalErrorMessage:e.message})})),dn}async function Ea(e){try{const r=(await Tr()).transaction(oe),o=await r.objectStore(oe).get(Sr(e));return await r.done,o}catch(n){if(n instanceof bt)ht.warn(n.message);else{const r=yt.create("idb-get",{originalErrorMessage:n==null?void 0:n.message});ht.warn(r.message)}}}async function Ys(e,n){try{const o=(await Tr()).transaction(oe,"readwrite");await o.objectStore(oe).put(n,Sr(e)),await o.done}catch(r){if(r instanceof bt)ht.warn(r.message);else{const o=yt.create("idb-set",{originalErrorMessage:r==null?void 0:r.message});ht.warn(o.message)}}}function Sr(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta=1024,Sa=30;class Ia{constructor(n){this.container=n,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new Ra(r),this._heartbeatsCachePromise=this._storage.read().then(o=>(this._heartbeatsCache=o,o))}async triggerHeartbeat(){var n,r;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),h=Zs();if(((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)==null?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===h||this._heartbeatsCache.heartbeats.some(u=>u.date===h))return;if(this._heartbeatsCache.heartbeats.push({date:h,agent:a}),this._heartbeatsCache.heartbeats.length>Sa){const u=Aa(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(o){ht.warn(o)}}async getHeartbeatsHeader(){var n;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Zs(),{heartbeatsToSend:o,unsentEntries:a}=Ca(this._heartbeatsCache.heartbeats),h=Ae(JSON.stringify({version:2,heartbeats:o}));return this._heartbeatsCache.lastSentHeartbeatDate=r,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),h}catch(r){return ht.warn(r),""}}}function Zs(){return new Date().toISOString().substring(0,10)}function Ca(e,n=Ta){const r=[];let o=e.slice();for(const a of e){const h=r.find(u=>u.agent===a.agent);if(h){if(h.dates.push(a.date),Qs(r)>n){h.dates.pop();break}}else if(r.push({agent:a.agent,dates:[a.date]}),Qs(r)>n){r.pop();break}o=o.slice(1)}return{heartbeatsToSend:r,unsentEntries:o}}class Ra{constructor(n){this.app=n,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ho()?co().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await Ea(this.app);return r!=null&&r.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(n){if(await this._canUseIndexedDBPromise){const o=await this.read();return Ys(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:n.heartbeats})}else return}async add(n){if(await this._canUseIndexedDBPromise){const o=await this.read();return Ys(this.app,{lastSentHeartbeatDate:n.lastSentHeartbeatDate??o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...n.heartbeats]})}else return}}function Qs(e){return Ae(JSON.stringify({version:2,heartbeats:e})).length}function Aa(e){if(e.length===0)return-1;let n=0,r=e[0].date;for(let o=1;o<e.length;o++)e[o].date<r&&(r=e[o].date,n=o);return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(e){Ot(new kt("platform-logger",n=>new Fo(n),"PRIVATE")),Ot(new kt("heartbeat",n=>new Ia(n),"PRIVATE")),lt(Tn,Js,e),lt(Tn,Js,"esm2020"),lt("fire-js","")}ka("");var tr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oa,Da;(function(){var e;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function n(g,c){function d(){}d.prototype=c.prototype,g.F=c.prototype,g.prototype=new d,g.prototype.constructor=g,g.D=function(m,p,y){for(var f=Array(arguments.length-2),Z=2;Z<arguments.length;Z++)f[Z-2]=arguments[Z];return c.prototype[p].apply(m,f)}}function r(){this.blockSize=-1}function o(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}n(o,r),o.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(g,c,d){d||(d=0);const m=Array(16);if(typeof c=="string")for(var p=0;p<16;++p)m[p]=c.charCodeAt(d++)|c.charCodeAt(d++)<<8|c.charCodeAt(d++)<<16|c.charCodeAt(d++)<<24;else for(p=0;p<16;++p)m[p]=c[d++]|c[d++]<<8|c[d++]<<16|c[d++]<<24;c=g.g[0],d=g.g[1],p=g.g[2];let y=g.g[3],f;f=c+(y^d&(p^y))+m[0]+3614090360&4294967295,c=d+(f<<7&4294967295|f>>>25),f=y+(p^c&(d^p))+m[1]+3905402710&4294967295,y=c+(f<<12&4294967295|f>>>20),f=p+(d^y&(c^d))+m[2]+606105819&4294967295,p=y+(f<<17&4294967295|f>>>15),f=d+(c^p&(y^c))+m[3]+3250441966&4294967295,d=p+(f<<22&4294967295|f>>>10),f=c+(y^d&(p^y))+m[4]+4118548399&4294967295,c=d+(f<<7&4294967295|f>>>25),f=y+(p^c&(d^p))+m[5]+1200080426&4294967295,y=c+(f<<12&4294967295|f>>>20),f=p+(d^y&(c^d))+m[6]+2821735955&4294967295,p=y+(f<<17&4294967295|f>>>15),f=d+(c^p&(y^c))+m[7]+4249261313&4294967295,d=p+(f<<22&4294967295|f>>>10),f=c+(y^d&(p^y))+m[8]+1770035416&4294967295,c=d+(f<<7&4294967295|f>>>25),f=y+(p^c&(d^p))+m[9]+2336552879&4294967295,y=c+(f<<12&4294967295|f>>>20),f=p+(d^y&(c^d))+m[10]+4294925233&4294967295,p=y+(f<<17&4294967295|f>>>15),f=d+(c^p&(y^c))+m[11]+2304563134&4294967295,d=p+(f<<22&4294967295|f>>>10),f=c+(y^d&(p^y))+m[12]+1804603682&4294967295,c=d+(f<<7&4294967295|f>>>25),f=y+(p^c&(d^p))+m[13]+4254626195&4294967295,y=c+(f<<12&4294967295|f>>>20),f=p+(d^y&(c^d))+m[14]+2792965006&4294967295,p=y+(f<<17&4294967295|f>>>15),f=d+(c^p&(y^c))+m[15]+1236535329&4294967295,d=p+(f<<22&4294967295|f>>>10),f=c+(p^y&(d^p))+m[1]+4129170786&4294967295,c=d+(f<<5&4294967295|f>>>27),f=y+(d^p&(c^d))+m[6]+3225465664&4294967295,y=c+(f<<9&4294967295|f>>>23),f=p+(c^d&(y^c))+m[11]+643717713&4294967295,p=y+(f<<14&4294967295|f>>>18),f=d+(y^c&(p^y))+m[0]+3921069994&4294967295,d=p+(f<<20&4294967295|f>>>12),f=c+(p^y&(d^p))+m[5]+3593408605&4294967295,c=d+(f<<5&4294967295|f>>>27),f=y+(d^p&(c^d))+m[10]+38016083&4294967295,y=c+(f<<9&4294967295|f>>>23),f=p+(c^d&(y^c))+m[15]+3634488961&4294967295,p=y+(f<<14&4294967295|f>>>18),f=d+(y^c&(p^y))+m[4]+3889429448&4294967295,d=p+(f<<20&4294967295|f>>>12),f=c+(p^y&(d^p))+m[9]+568446438&4294967295,c=d+(f<<5&4294967295|f>>>27),f=y+(d^p&(c^d))+m[14]+3275163606&4294967295,y=c+(f<<9&4294967295|f>>>23),f=p+(c^d&(y^c))+m[3]+4107603335&4294967295,p=y+(f<<14&4294967295|f>>>18),f=d+(y^c&(p^y))+m[8]+1163531501&4294967295,d=p+(f<<20&4294967295|f>>>12),f=c+(p^y&(d^p))+m[13]+2850285829&4294967295,c=d+(f<<5&4294967295|f>>>27),f=y+(d^p&(c^d))+m[2]+4243563512&4294967295,y=c+(f<<9&4294967295|f>>>23),f=p+(c^d&(y^c))+m[7]+1735328473&4294967295,p=y+(f<<14&4294967295|f>>>18),f=d+(y^c&(p^y))+m[12]+2368359562&4294967295,d=p+(f<<20&4294967295|f>>>12),f=c+(d^p^y)+m[5]+4294588738&4294967295,c=d+(f<<4&4294967295|f>>>28),f=y+(c^d^p)+m[8]+2272392833&4294967295,y=c+(f<<11&4294967295|f>>>21),f=p+(y^c^d)+m[11]+1839030562&4294967295,p=y+(f<<16&4294967295|f>>>16),f=d+(p^y^c)+m[14]+4259657740&4294967295,d=p+(f<<23&4294967295|f>>>9),f=c+(d^p^y)+m[1]+2763975236&4294967295,c=d+(f<<4&4294967295|f>>>28),f=y+(c^d^p)+m[4]+1272893353&4294967295,y=c+(f<<11&4294967295|f>>>21),f=p+(y^c^d)+m[7]+4139469664&4294967295,p=y+(f<<16&4294967295|f>>>16),f=d+(p^y^c)+m[10]+3200236656&4294967295,d=p+(f<<23&4294967295|f>>>9),f=c+(d^p^y)+m[13]+681279174&4294967295,c=d+(f<<4&4294967295|f>>>28),f=y+(c^d^p)+m[0]+3936430074&4294967295,y=c+(f<<11&4294967295|f>>>21),f=p+(y^c^d)+m[3]+3572445317&4294967295,p=y+(f<<16&4294967295|f>>>16),f=d+(p^y^c)+m[6]+76029189&4294967295,d=p+(f<<23&4294967295|f>>>9),f=c+(d^p^y)+m[9]+3654602809&4294967295,c=d+(f<<4&4294967295|f>>>28),f=y+(c^d^p)+m[12]+3873151461&4294967295,y=c+(f<<11&4294967295|f>>>21),f=p+(y^c^d)+m[15]+530742520&4294967295,p=y+(f<<16&4294967295|f>>>16),f=d+(p^y^c)+m[2]+3299628645&4294967295,d=p+(f<<23&4294967295|f>>>9),f=c+(p^(d|~y))+m[0]+4096336452&4294967295,c=d+(f<<6&4294967295|f>>>26),f=y+(d^(c|~p))+m[7]+1126891415&4294967295,y=c+(f<<10&4294967295|f>>>22),f=p+(c^(y|~d))+m[14]+2878612391&4294967295,p=y+(f<<15&4294967295|f>>>17),f=d+(y^(p|~c))+m[5]+4237533241&4294967295,d=p+(f<<21&4294967295|f>>>11),f=c+(p^(d|~y))+m[12]+1700485571&4294967295,c=d+(f<<6&4294967295|f>>>26),f=y+(d^(c|~p))+m[3]+2399980690&4294967295,y=c+(f<<10&4294967295|f>>>22),f=p+(c^(y|~d))+m[10]+4293915773&4294967295,p=y+(f<<15&4294967295|f>>>17),f=d+(y^(p|~c))+m[1]+2240044497&4294967295,d=p+(f<<21&4294967295|f>>>11),f=c+(p^(d|~y))+m[8]+1873313359&4294967295,c=d+(f<<6&4294967295|f>>>26),f=y+(d^(c|~p))+m[15]+4264355552&4294967295,y=c+(f<<10&4294967295|f>>>22),f=p+(c^(y|~d))+m[6]+2734768916&4294967295,p=y+(f<<15&4294967295|f>>>17),f=d+(y^(p|~c))+m[13]+1309151649&4294967295,d=p+(f<<21&4294967295|f>>>11),f=c+(p^(d|~y))+m[4]+4149444226&4294967295,c=d+(f<<6&4294967295|f>>>26),f=y+(d^(c|~p))+m[11]+3174756917&4294967295,y=c+(f<<10&4294967295|f>>>22),f=p+(c^(y|~d))+m[2]+718787259&4294967295,p=y+(f<<15&4294967295|f>>>17),f=d+(y^(p|~c))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+c&4294967295,g.g[1]=g.g[1]+(p+(f<<21&4294967295|f>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+y&4294967295}o.prototype.v=function(g,c){c===void 0&&(c=g.length);const d=c-this.blockSize,m=this.C;let p=this.h,y=0;for(;y<c;){if(p==0)for(;y<=d;)a(this,g,y),y+=this.blockSize;if(typeof g=="string"){for(;y<c;)if(m[p++]=g.charCodeAt(y++),p==this.blockSize){a(this,m),p=0;break}}else for(;y<c;)if(m[p++]=g[y++],p==this.blockSize){a(this,m),p=0;break}}this.h=p,this.o+=c},o.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var c=1;c<g.length-8;++c)g[c]=0;c=this.o*8;for(var d=g.length-8;d<g.length;++d)g[d]=c&255,c/=256;for(this.v(g),g=Array(16),c=0,d=0;d<4;++d)for(let m=0;m<32;m+=8)g[c++]=this.g[d]>>>m&255;return g};function h(g,c){var d=w;return Object.prototype.hasOwnProperty.call(d,g)?d[g]:d[g]=c(g)}function u(g,c){this.h=c;const d=[];let m=!0;for(let p=g.length-1;p>=0;p--){const y=g[p]|0;m&&y==c||(d[p]=y,m=!1)}this.g=d}var w={};function v(g){return-128<=g&&g<128?h(g,function(c){return new u([c|0],c<0?-1:0)}):new u([g|0],g<0?-1:0)}function E(g){if(isNaN(g)||!isFinite(g))return C;if(g<0)return R(E(-g));const c=[];let d=1;for(let m=0;g>=d;m++)c[m]=g/d|0,d*=4294967296;return new u(c,0)}function I(g,c){if(g.length==0)throw Error("number format error: empty string");if(c=c||10,c<2||36<c)throw Error("radix out of range: "+c);if(g.charAt(0)=="-")return R(I(g.substring(1),c));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const d=E(Math.pow(c,8));let m=C;for(let y=0;y<g.length;y+=8){var p=Math.min(8,g.length-y);const f=parseInt(g.substring(y,y+p),c);p<8?(p=E(Math.pow(c,p)),m=m.j(p).add(E(f))):(m=m.j(d),m=m.add(E(f)))}return m}var C=v(0),S=v(1),O=v(16777216);e=u.prototype,e.m=function(){if(D(this))return-R(this).m();let g=0,c=1;for(let d=0;d<this.g.length;d++){const m=this.i(d);g+=(m>=0?m:4294967296+m)*c,c*=4294967296}return g},e.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(k(this))return"0";if(D(this))return"-"+R(this).toString(g);const c=E(Math.pow(g,6));var d=this;let m="";for(;;){const p=N(d,c).g;d=F(d,p.j(c));let y=((d.g.length>0?d.g[0]:d.h)>>>0).toString(g);if(d=p,k(d))return y+m;for(;y.length<6;)y="0"+y;m=y+m}},e.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function k(g){if(g.h!=0)return!1;for(let c=0;c<g.g.length;c++)if(g.g[c]!=0)return!1;return!0}function D(g){return g.h==-1}e.l=function(g){return g=F(this,g),D(g)?-1:k(g)?0:1};function R(g){const c=g.g.length,d=[];for(let m=0;m<c;m++)d[m]=~g.g[m];return new u(d,~g.h).add(S)}e.abs=function(){return D(this)?R(this):this},e.add=function(g){const c=Math.max(this.g.length,g.g.length),d=[];let m=0;for(let p=0;p<=c;p++){let y=m+(this.i(p)&65535)+(g.i(p)&65535),f=(y>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);m=f>>>16,y&=65535,f&=65535,d[p]=f<<16|y}return new u(d,d[d.length-1]&-2147483648?-1:0)};function F(g,c){return g.add(R(c))}e.j=function(g){if(k(this)||k(g))return C;if(D(this))return D(g)?R(this).j(R(g)):R(R(this).j(g));if(D(g))return R(this.j(R(g)));if(this.l(O)<0&&g.l(O)<0)return E(this.m()*g.m());const c=this.g.length+g.g.length,d=[];for(var m=0;m<2*c;m++)d[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<g.g.length;p++){const y=this.i(m)>>>16,f=this.i(m)&65535,Z=g.i(p)>>>16,wt=g.i(p)&65535;d[2*m+2*p]+=f*wt,H(d,2*m+2*p),d[2*m+2*p+1]+=y*wt,H(d,2*m+2*p+1),d[2*m+2*p+1]+=f*Z,H(d,2*m+2*p+1),d[2*m+2*p+2]+=y*Z,H(d,2*m+2*p+2)}for(g=0;g<c;g++)d[g]=d[2*g+1]<<16|d[2*g];for(g=c;g<2*c;g++)d[g]=0;return new u(d,0)};function H(g,c){for(;(g[c]&65535)!=g[c];)g[c+1]+=g[c]>>>16,g[c]&=65535,c++}function P(g,c){this.g=g,this.h=c}function N(g,c){if(k(c))throw Error("division by zero");if(k(g))return new P(C,C);if(D(g))return c=N(R(g),c),new P(R(c.g),R(c.h));if(D(c))return c=N(g,R(c)),new P(R(c.g),c.h);if(g.g.length>30){if(D(g)||D(c))throw Error("slowDivide_ only works with positive integers.");for(var d=S,m=c;m.l(g)<=0;)d=X(d),m=X(m);var p=$(d,1),y=$(m,1);for(m=$(m,2),d=$(d,2);!k(m);){var f=y.add(m);f.l(g)<=0&&(p=p.add(d),y=f),m=$(m,1),d=$(d,1)}return c=F(g,p.j(c)),new P(p,c)}for(p=C;g.l(c)>=0;){for(d=Math.max(1,Math.floor(g.m()/c.m())),m=Math.ceil(Math.log(d)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),y=E(d),f=y.j(c);D(f)||f.l(g)>0;)d-=m,y=E(d),f=y.j(c);k(y)&&(y=S),p=p.add(y),g=F(g,f)}return new P(p,g)}e.B=function(g){return N(this,g).h},e.and=function(g){const c=Math.max(this.g.length,g.g.length),d=[];for(let m=0;m<c;m++)d[m]=this.i(m)&g.i(m);return new u(d,this.h&g.h)},e.or=function(g){const c=Math.max(this.g.length,g.g.length),d=[];for(let m=0;m<c;m++)d[m]=this.i(m)|g.i(m);return new u(d,this.h|g.h)},e.xor=function(g){const c=Math.max(this.g.length,g.g.length),d=[];for(let m=0;m<c;m++)d[m]=this.i(m)^g.i(m);return new u(d,this.h^g.h)};function X(g){const c=g.g.length+1,d=[];for(let m=0;m<c;m++)d[m]=g.i(m)<<1|g.i(m-1)>>>31;return new u(d,g.h)}function $(g,c){const d=c>>5;c%=32;const m=g.g.length-d,p=[];for(let y=0;y<m;y++)p[y]=c>0?g.i(y+d)>>>c|g.i(y+d+1)<<32-c:g.i(y+d);return new u(p,g.h)}o.prototype.digest=o.prototype.A,o.prototype.reset=o.prototype.u,o.prototype.update=o.prototype.v,Da=o,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.B,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=E,u.fromString=I,Oa=u}).apply(typeof tr<"u"?tr:typeof self<"u"?self:typeof window<"u"?window:{});var Ie=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Pa,xa,Na,Ba,Ma,Ua,La,ja;(function(){var e,n=Object.defineProperty;function r(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ie=="object"&&Ie];for(var s=0;s<t.length;++s){var i=t[s];if(i&&i.Math==Math)return i}throw Error("Cannot find global object")}var o=r(this);function a(t,s){if(s)t:{var i=o;t=t.split(".");for(var l=0;l<t.length-1;l++){var _=t[l];if(!(_ in i))break t;i=i[_]}t=t[t.length-1],l=i[t],s=s(l),s!=l&&s!=null&&n(i,t,{configurable:!0,writable:!0,value:s})}}a("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(t){return t||function(s){var i=[],l;for(l in s)Object.prototype.hasOwnProperty.call(s,l)&&i.push([l,s[l]]);return i}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},u=this||self;function w(t){var s=typeof t;return s=="object"&&t!=null||s=="function"}function v(t,s,i){return t.call.apply(t.bind,arguments)}function E(t,s,i){return E=v,E.apply(null,arguments)}function I(t,s){var i=Array.prototype.slice.call(arguments,1);return function(){var l=i.slice();return l.push.apply(l,arguments),t.apply(this,l)}}function C(t,s){function i(){}i.prototype=s.prototype,t.Z=s.prototype,t.prototype=new i,t.prototype.constructor=t,t.Ob=function(l,_,b){for(var T=Array(arguments.length-2),A=2;A<arguments.length;A++)T[A-2]=arguments[A];return s.prototype[_].apply(l,T)}}var S=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function O(t){const s=t.length;if(s>0){const i=Array(s);for(let l=0;l<s;l++)i[l]=t[l];return i}return[]}function k(t,s){for(let l=1;l<arguments.length;l++){const _=arguments[l];var i=typeof _;if(i=i!="object"?i:_?Array.isArray(_)?"array":i:"null",i=="array"||i=="object"&&typeof _.length=="number"){i=t.length||0;const b=_.length||0;t.length=i+b;for(let T=0;T<b;T++)t[i+T]=_[T]}else t.push(_)}}class D{constructor(s,i){this.i=s,this.j=i,this.h=0,this.g=null}get(){let s;return this.h>0?(this.h--,s=this.g,this.g=s.next,s.next=null):s=this.i(),s}}function R(t){u.setTimeout(()=>{throw t},0)}function F(){var t=g;let s=null;return t.g&&(s=t.g,t.g=t.g.next,t.g||(t.h=null),s.next=null),s}class H{constructor(){this.h=this.g=null}add(s,i){const l=P.get();l.set(s,i),this.h?this.h.next=l:this.g=l,this.h=l}}var P=new D(()=>new N,t=>t.reset());class N{constructor(){this.next=this.g=this.h=null}set(s,i){this.h=s,this.g=i,this.next=null}reset(){this.next=this.g=this.h=null}}let X,$=!1,g=new H,c=()=>{const t=Promise.resolve(void 0);X=()=>{t.then(d)}};function d(){for(var t;t=F();){try{t.h.call(t.g)}catch(i){R(i)}var s=P;s.j(t),s.h<100&&(s.h++,t.next=s.g,s.g=t)}$=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(t,s){this.type=t,this.g=this.target=s,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var y=(function(){if(!u.addEventListener||!Object.defineProperty)return!1;var t=!1,s=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const i=()=>{};u.addEventListener("test",i,s),u.removeEventListener("test",i,s)}catch{}return t})();function f(t){return/^[\s\xa0]*$/.test(t)}function Z(t,s){p.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,s)}C(Z,p),Z.prototype.init=function(t,s){const i=this.type=t.type,l=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=s,s=t.relatedTarget,s||(i=="mouseover"?s=t.fromElement:i=="mouseout"&&(s=t.toElement)),this.relatedTarget=s,l?(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&Z.Z.h.call(this)},Z.prototype.h=function(){Z.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var wt="closure_listenable_"+(Math.random()*1e6|0),gi=0;function mi(t,s,i,l,_){this.listener=t,this.proxy=null,this.src=s,this.type=i,this.capture=!!l,this.ha=_,this.key=++gi,this.da=this.fa=!1}function ce(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function ue(t,s,i){for(const l in t)s.call(i,t[l],l,t)}function _i(t,s){for(const i in t)s.call(void 0,t[i],i,t)}function $n(t){const s={};for(const i in t)s[i]=t[i];return s}const qn="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zn(t,s){let i,l;for(let _=1;_<arguments.length;_++){l=arguments[_];for(i in l)t[i]=l[i];for(let b=0;b<qn.length;b++)i=qn[b],Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i])}}function fe(t){this.src=t,this.g={},this.h=0}fe.prototype.add=function(t,s,i,l,_){const b=t.toString();t=this.g[b],t||(t=this.g[b]=[],this.h++);const T=je(t,s,l,_);return T>-1?(s=t[T],i||(s.fa=!1)):(s=new mi(s,this.src,b,!!l,_),s.fa=i,t.push(s)),s};function Le(t,s){const i=s.type;if(i in t.g){var l=t.g[i],_=Array.prototype.indexOf.call(l,s,void 0),b;(b=_>=0)&&Array.prototype.splice.call(l,_,1),b&&(ce(s),t.g[i].length==0&&(delete t.g[i],t.h--))}}function je(t,s,i,l){for(let _=0;_<t.length;++_){const b=t[_];if(!b.da&&b.listener==s&&b.capture==!!i&&b.ha==l)return _}return-1}var He="closure_lm_"+(Math.random()*1e6|0),Fe={};function Vn(t,s,i,l,_){if(Array.isArray(s)){for(let b=0;b<s.length;b++)Vn(t,s[b],i,l,_);return null}return i=Gn(i),t&&t[wt]?t.J(s,i,w(l)?!!l.capture:!1,_):yi(t,s,i,!1,l,_)}function yi(t,s,i,l,_,b){if(!s)throw Error("Invalid event type");const T=w(_)?!!_.capture:!!_;let A=qe(t);if(A||(t[He]=A=new fe(t)),i=A.add(s,i,l,T,b),i.proxy)return i;if(l=bi(),i.proxy=l,l.src=t,l.listener=i,t.addEventListener)y||(_=T),_===void 0&&(_=!1),t.addEventListener(s.toString(),l,_);else if(t.attachEvent)t.attachEvent(Xn(s.toString()),l);else if(t.addListener&&t.removeListener)t.addListener(l);else throw Error("addEventListener and attachEvent are unavailable.");return i}function bi(){function t(i){return s.call(t.src,t.listener,i)}const s=wi;return t}function Wn(t,s,i,l,_){if(Array.isArray(s))for(var b=0;b<s.length;b++)Wn(t,s[b],i,l,_);else l=w(l)?!!l.capture:!!l,i=Gn(i),t&&t[wt]?(t=t.i,b=String(s).toString(),b in t.g&&(s=t.g[b],i=je(s,i,l,_),i>-1&&(ce(s[i]),Array.prototype.splice.call(s,i,1),s.length==0&&(delete t.g[b],t.h--)))):t&&(t=qe(t))&&(s=t.g[s.toString()],t=-1,s&&(t=je(s,i,l,_)),(i=t>-1?s[t]:null)&&$e(i))}function $e(t){if(typeof t!="number"&&t&&!t.da){var s=t.src;if(s&&s[wt])Le(s.i,t);else{var i=t.type,l=t.proxy;s.removeEventListener?s.removeEventListener(i,l,t.capture):s.detachEvent?s.detachEvent(Xn(i),l):s.addListener&&s.removeListener&&s.removeListener(l),(i=qe(s))?(Le(i,t),i.h==0&&(i.src=null,s[He]=null)):ce(t)}}}function Xn(t){return t in Fe?Fe[t]:Fe[t]="on"+t}function wi(t,s){if(t.da)t=!0;else{s=new Z(s,this);const i=t.listener,l=t.ha||t.src;t.fa&&$e(t),t=i.call(l,s)}return t}function qe(t){return t=t[He],t instanceof fe?t:null}var ze="__closure_events_fn_"+(Math.random()*1e9>>>0);function Gn(t){return typeof t=="function"?t:(t[ze]||(t[ze]=function(s){return t.handleEvent(s)}),t[ze])}function V(){m.call(this),this.i=new fe(this),this.M=this,this.G=null}C(V,m),V.prototype[wt]=!0,V.prototype.removeEventListener=function(t,s,i,l){Wn(this,t,s,i,l)};function G(t,s){var i,l=t.G;if(l)for(i=[];l;l=l.G)i.push(l);if(t=t.M,l=s.type||s,typeof s=="string")s=new p(s,t);else if(s instanceof p)s.target=s.target||t;else{var _=s;s=new p(l,t),zn(s,_)}_=!0;let b,T;if(i)for(T=i.length-1;T>=0;T--)b=s.g=i[T],_=de(b,l,!0,s)&&_;if(b=s.g=t,_=de(b,l,!0,s)&&_,_=de(b,l,!1,s)&&_,i)for(T=0;T<i.length;T++)b=s.g=i[T],_=de(b,l,!1,s)&&_}V.prototype.N=function(){if(V.Z.N.call(this),this.i){var t=this.i;for(const s in t.g){const i=t.g[s];for(let l=0;l<i.length;l++)ce(i[l]);delete t.g[s],t.h--}}this.G=null},V.prototype.J=function(t,s,i,l){return this.i.add(String(t),s,!1,i,l)},V.prototype.K=function(t,s,i,l){return this.i.add(String(t),s,!0,i,l)};function de(t,s,i,l){if(s=t.i.g[String(s)],!s)return!0;s=s.concat();let _=!0;for(let b=0;b<s.length;++b){const T=s[b];if(T&&!T.da&&T.capture==i){const A=T.listener,q=T.ha||T.src;T.fa&&Le(t.i,T),_=A.call(q,l)!==!1&&_}}return _&&!l.defaultPrevented}function vi(t,s){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=E(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(s)>2147483647?-1:u.setTimeout(t,s||0)}function Kn(t){t.g=vi(()=>{t.g=null,t.i&&(t.i=!1,Kn(t))},t.l);const s=t.h;t.h=null,t.m.apply(null,s)}class Ei extends m{constructor(s,i){super(),this.m=s,this.l=i,this.h=null,this.i=!1,this.g=null}j(s){this.h=arguments,this.g?this.i=!0:Kn(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function jt(t){m.call(this),this.h=t,this.g={}}C(jt,m);var Jn=[];function Yn(t){ue(t.g,function(s,i){this.g.hasOwnProperty(i)&&$e(s)},t),t.g={}}jt.prototype.N=function(){jt.Z.N.call(this),Yn(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ve=u.JSON.stringify,Ti=u.JSON.parse,Si=class{stringify(t){return u.JSON.stringify(t,void 0)}parse(t){return u.JSON.parse(t,void 0)}};function Zn(){}function Qn(){}var Ht={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function We(){p.call(this,"d")}C(We,p);function Xe(){p.call(this,"c")}C(Xe,p);var vt={},ts=null;function pe(){return ts=ts||new V}vt.Ia="serverreachability";function es(t){p.call(this,vt.Ia,t)}C(es,p);function Ft(t){const s=pe();G(s,new es(s))}vt.STAT_EVENT="statevent";function ns(t,s){p.call(this,vt.STAT_EVENT,t),this.stat=s}C(ns,p);function K(t){const s=pe();G(s,new ns(s,t))}vt.Ja="timingevent";function ss(t,s){p.call(this,vt.Ja,t),this.size=s}C(ss,p);function $t(t,s){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){t()},s)}function qt(){this.g=!0}qt.prototype.ua=function(){this.g=!1};function Ii(t,s,i,l,_,b){t.info(function(){if(t.g)if(b){var T="",A=b.split("&");for(let x=0;x<A.length;x++){var q=A[x].split("=");if(q.length>1){const z=q[0];q=q[1];const rt=z.split("_");T=rt.length>=2&&rt[1]=="type"?T+(z+"="+q+"&"):T+(z+"=redacted&")}}}else T=null;else T=b;return"XMLHTTP REQ ("+l+") [attempt "+_+"]: "+s+`
`+i+`
`+T})}function Ci(t,s,i,l,_,b,T){t.info(function(){return"XMLHTTP RESP ("+l+") [ attempt "+_+"]: "+s+`
`+i+`
`+b+" "+T})}function Nt(t,s,i,l){t.info(function(){return"XMLHTTP TEXT ("+s+"): "+Ai(t,i)+(l?" "+l:"")})}function Ri(t,s){t.info(function(){return"TIMEOUT: "+s})}qt.prototype.info=function(){};function Ai(t,s){if(!t.g)return s;if(!s)return null;try{const b=JSON.parse(s);if(b){for(t=0;t<b.length;t++)if(Array.isArray(b[t])){var i=b[t];if(!(i.length<2)){var l=i[1];if(Array.isArray(l)&&!(l.length<1)){var _=l[0];if(_!="noop"&&_!="stop"&&_!="close")for(let T=1;T<l.length;T++)l[T]=""}}}}return Ve(b)}catch{return s}}var ge={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},rs={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},is;function Ge(){}C(Ge,Zn),Ge.prototype.g=function(){return new XMLHttpRequest},is=new Ge;function zt(t){return encodeURIComponent(String(t))}function ki(t){var s=1;t=t.split(":");const i=[];for(;s>0&&t.length;)i.push(t.shift()),s--;return t.length&&i.push(t.join(":")),i}function ut(t,s,i,l){this.j=t,this.i=s,this.l=i,this.S=l||1,this.V=new jt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new os}function os(){this.i=null,this.g="",this.h=!1}var as={},Ke={};function Je(t,s,i){t.M=1,t.A=_e(st(s)),t.u=i,t.R=!0,ls(t,null)}function ls(t,s){t.F=Date.now(),me(t),t.B=st(t.A);var i=t.B,l=t.S;Array.isArray(l)||(l=[String(l)]),vs(i.i,"t",l),t.C=0,i=t.j.L,t.h=new os,t.g=js(t.j,i?s:null,!t.u),t.P>0&&(t.O=new Ei(E(t.Y,t,t.g),t.P)),s=t.V,i=t.g,l=t.ba;var _="readystatechange";Array.isArray(_)||(_&&(Jn[0]=_.toString()),_=Jn);for(let b=0;b<_.length;b++){const T=Vn(i,_[b],l||s.handleEvent,!1,s.h||s);if(!T)break;s.g[T.key]=T}s=t.J?$n(t.J):{},t.u?(t.v||(t.v="POST"),s["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,s)):(t.v="GET",t.g.ea(t.B,t.v,null,s)),Ft(),Ii(t.i,t.v,t.B,t.l,t.S,t.u)}ut.prototype.ba=function(t){t=t.target;const s=this.O;s&&pt(t)==3?s.j():this.Y(t)},ut.prototype.Y=function(t){try{if(t==this.g)t:{const A=pt(this.g),q=this.g.ya(),x=this.g.ca();if(!(A<3)&&(A!=3||this.g&&(this.h.h||this.g.la()||As(this.g)))){this.K||A!=4||q==7||(q==8||x<=0?Ft(3):Ft(2)),Ye(this);var s=this.g.ca();this.X=s;var i=Oi(this);if(this.o=s==200,Ci(this.i,this.v,this.B,this.l,this.S,A,s),this.o){if(this.U&&!this.L){e:{if(this.g){var l,_=this.g;if((l=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!f(l)){var b=l;break e}}b=null}if(t=b)Nt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ze(this,t);else{this.o=!1,this.m=3,K(12),Et(this),Vt(this);break t}}if(this.R){t=!0;let z;for(;!this.K&&this.C<i.length;)if(z=Di(this,i),z==Ke){A==4&&(this.m=4,K(14),t=!1),Nt(this.i,this.l,null,"[Incomplete Response]");break}else if(z==as){this.m=4,K(15),Nt(this.i,this.l,i,"[Invalid Chunk]"),t=!1;break}else Nt(this.i,this.l,z,null),Ze(this,z);if(hs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),A!=4||i.length!=0||this.h.h||(this.m=1,K(16),t=!1),this.o=this.o&&t,!t)Nt(this.i,this.l,i,"[Invalid Chunked Response]"),Et(this),Vt(this);else if(i.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+i.length),an(T),T.P=!0,K(11))}}else Nt(this.i,this.l,i,null),Ze(this,i);A==4&&Et(this),this.o&&!this.K&&(A==4?Bs(this.j,this):(this.o=!1,me(this)))}else Vi(this.g),s==400&&i.indexOf("Unknown SID")>0?(this.m=3,K(12)):(this.m=0,K(13)),Et(this),Vt(this)}}}catch{}finally{}};function Oi(t){if(!hs(t))return t.g.la();const s=As(t.g);if(s==="")return"";let i="";const l=s.length,_=pt(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return Et(t),Vt(t),"";t.h.i=new u.TextDecoder}for(let b=0;b<l;b++)t.h.h=!0,i+=t.h.i.decode(s[b],{stream:!(_&&b==l-1)});return s.length=0,t.h.g+=i,t.C=0,t.h.g}function hs(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function Di(t,s){var i=t.C,l=s.indexOf(`
`,i);return l==-1?Ke:(i=Number(s.substring(i,l)),isNaN(i)?as:(l+=1,l+i>s.length?Ke:(s=s.slice(l,l+i),t.C=l+i,s)))}ut.prototype.cancel=function(){this.K=!0,Et(this)};function me(t){t.T=Date.now()+t.H,cs(t,t.H)}function cs(t,s){if(t.D!=null)throw Error("WatchDog timer not null");t.D=$t(E(t.aa,t),s)}function Ye(t){t.D&&(u.clearTimeout(t.D),t.D=null)}ut.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(Ri(this.i,this.B),this.M!=2&&(Ft(),K(17)),Et(this),this.m=2,Vt(this)):cs(this,this.T-t)};function Vt(t){t.j.I==0||t.K||Bs(t.j,t)}function Et(t){Ye(t);var s=t.O;s&&typeof s.dispose=="function"&&s.dispose(),t.O=null,Yn(t.V),t.g&&(s=t.g,t.g=null,s.abort(),s.dispose())}function Ze(t,s){try{var i=t.j;if(i.I!=0&&(i.g==t||Qe(i.h,t))){if(!t.L&&Qe(i.h,t)&&i.I==3){try{var l=i.Ba.g.parse(s)}catch{l=null}if(Array.isArray(l)&&l.length==3){var _=l;if(_[0]==0){t:if(!i.v){if(i.g)if(i.g.F+3e3<t.F)Ee(i),we(i);else break t;on(i),K(18)}}else i.xa=_[1],0<i.xa-i.K&&_[2]<37500&&i.F&&i.A==0&&!i.C&&(i.C=$t(E(i.Va,i),6e3));ds(i.h)<=1&&i.ta&&(i.ta=void 0)}else St(i,11)}else if((t.L||i.g==t)&&Ee(i),!f(s))for(_=i.Ba.g.parse(s),s=0;s<_.length;s++){let x=_[s];const z=x[0];if(!(z<=i.K))if(i.K=z,x=x[1],i.I==2)if(x[0]=="c"){i.M=x[1],i.ba=x[2];const rt=x[3];rt!=null&&(i.ka=rt,i.j.info("VER="+i.ka));const It=x[4];It!=null&&(i.za=It,i.j.info("SVER="+i.za));const gt=x[5];gt!=null&&typeof gt=="number"&&gt>0&&(l=1.5*gt,i.O=l,i.j.info("backChannelRequestTimeoutMs_="+l)),l=i;const mt=t.g;if(mt){const Se=mt.g?mt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Se){var b=l.h;b.g||Se.indexOf("spdy")==-1&&Se.indexOf("quic")==-1&&Se.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(tn(b,b.h),b.h=null))}if(l.G){const ln=mt.g?mt.g.getResponseHeader("X-HTTP-Session-Id"):null;ln&&(l.wa=ln,M(l.J,l.G,ln))}}i.I=3,i.l&&i.l.ra(),i.aa&&(i.T=Date.now()-t.F,i.j.info("Handshake RTT: "+i.T+"ms")),l=i;var T=t;if(l.na=Ls(l,l.L?l.ba:null,l.W),T.L){ps(l.h,T);var A=T,q=l.O;q&&(A.H=q),A.D&&(Ye(A),me(A)),l.g=T}else xs(l);i.i.length>0&&ve(i)}else x[0]!="stop"&&x[0]!="close"||St(i,7);else i.I==3&&(x[0]=="stop"||x[0]=="close"?x[0]=="stop"?St(i,7):rn(i):x[0]!="noop"&&i.l&&i.l.qa(x),i.A=0)}}Ft(4)}catch{}}var Pi=class{constructor(t,s){this.g=t,this.map=s}};function us(t){this.l=t||10,u.PerformanceNavigationTiming?(t=u.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function fs(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ds(t){return t.h?1:t.g?t.g.size:0}function Qe(t,s){return t.h?t.h==s:t.g?t.g.has(s):!1}function tn(t,s){t.g?t.g.add(s):t.h=s}function ps(t,s){t.h&&t.h==s?t.h=null:t.g&&t.g.has(s)&&t.g.delete(s)}us.prototype.cancel=function(){if(this.i=gs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function gs(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let s=t.i;for(const i of t.g.values())s=s.concat(i.G);return s}return O(t.i)}var ms=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function xi(t,s){if(t){t=t.split("&");for(let i=0;i<t.length;i++){const l=t[i].indexOf("=");let _,b=null;l>=0?(_=t[i].substring(0,l),b=t[i].substring(l+1)):_=t[i],s(_,b?decodeURIComponent(b.replace(/\+/g," ")):"")}}}function ft(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let s;t instanceof ft?(this.l=t.l,Wt(this,t.j),this.o=t.o,this.g=t.g,Xt(this,t.u),this.h=t.h,en(this,Es(t.i)),this.m=t.m):t&&(s=String(t).match(ms))?(this.l=!1,Wt(this,s[1]||"",!0),this.o=Gt(s[2]||""),this.g=Gt(s[3]||"",!0),Xt(this,s[4]),this.h=Gt(s[5]||"",!0),en(this,s[6]||"",!0),this.m=Gt(s[7]||"")):(this.l=!1,this.i=new Jt(null,this.l))}ft.prototype.toString=function(){const t=[];var s=this.j;s&&t.push(Kt(s,_s,!0),":");var i=this.g;return(i||s=="file")&&(t.push("//"),(s=this.o)&&t.push(Kt(s,_s,!0),"@"),t.push(zt(i).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i=this.u,i!=null&&t.push(":",String(i))),(i=this.h)&&(this.g&&i.charAt(0)!="/"&&t.push("/"),t.push(Kt(i,i.charAt(0)=="/"?Mi:Bi,!0))),(i=this.i.toString())&&t.push("?",i),(i=this.m)&&t.push("#",Kt(i,Li)),t.join("")},ft.prototype.resolve=function(t){const s=st(this);let i=!!t.j;i?Wt(s,t.j):i=!!t.o,i?s.o=t.o:i=!!t.g,i?s.g=t.g:i=t.u!=null;var l=t.h;if(i)Xt(s,t.u);else if(i=!!t.h){if(l.charAt(0)!="/")if(this.g&&!this.h)l="/"+l;else{var _=s.h.lastIndexOf("/");_!=-1&&(l=s.h.slice(0,_+1)+l)}if(_=l,_==".."||_==".")l="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){l=_.lastIndexOf("/",0)==0,_=_.split("/");const b=[];for(let T=0;T<_.length;){const A=_[T++];A=="."?l&&T==_.length&&b.push(""):A==".."?((b.length>1||b.length==1&&b[0]!="")&&b.pop(),l&&T==_.length&&b.push("")):(b.push(A),l=!0)}l=b.join("/")}else l=_}return i?s.h=l:i=t.i.toString()!=="",i?en(s,Es(t.i)):i=!!t.m,i&&(s.m=t.m),s};function st(t){return new ft(t)}function Wt(t,s,i){t.j=i?Gt(s,!0):s,t.j&&(t.j=t.j.replace(/:$/,""))}function Xt(t,s){if(s){if(s=Number(s),isNaN(s)||s<0)throw Error("Bad port number "+s);t.u=s}else t.u=null}function en(t,s,i){s instanceof Jt?(t.i=s,ji(t.i,t.l)):(i||(s=Kt(s,Ui)),t.i=new Jt(s,t.l))}function M(t,s,i){t.i.set(s,i)}function _e(t){return M(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function Gt(t,s){return t?s?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Kt(t,s,i){return typeof t=="string"?(t=encodeURI(t).replace(s,Ni),i&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ni(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _s=/[#\/\?@]/g,Bi=/[#\?:]/g,Mi=/[#\?]/g,Ui=/[#\?@]/g,Li=/#/g;function Jt(t,s){this.h=this.g=null,this.i=t||null,this.j=!!s}function Tt(t){t.g||(t.g=new Map,t.h=0,t.i&&xi(t.i,function(s,i){t.add(decodeURIComponent(s.replace(/\+/g," ")),i)}))}e=Jt.prototype,e.add=function(t,s){Tt(this),this.i=null,t=Bt(this,t);let i=this.g.get(t);return i||this.g.set(t,i=[]),i.push(s),this.h+=1,this};function ys(t,s){Tt(t),s=Bt(t,s),t.g.has(s)&&(t.i=null,t.h-=t.g.get(s).length,t.g.delete(s))}function bs(t,s){return Tt(t),s=Bt(t,s),t.g.has(s)}e.forEach=function(t,s){Tt(this),this.g.forEach(function(i,l){i.forEach(function(_){t.call(s,_,l,this)},this)},this)};function ws(t,s){Tt(t);let i=[];if(typeof s=="string")bs(t,s)&&(i=i.concat(t.g.get(Bt(t,s))));else for(t=Array.from(t.g.values()),s=0;s<t.length;s++)i=i.concat(t[s]);return i}e.set=function(t,s){return Tt(this),this.i=null,t=Bt(this,t),bs(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[s]),this.h+=1,this},e.get=function(t,s){return t?(t=ws(this,t),t.length>0?String(t[0]):s):s};function vs(t,s,i){ys(t,s),i.length>0&&(t.i=null,t.g.set(Bt(t,s),O(i)),t.h+=i.length)}e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],s=Array.from(this.g.keys());for(let l=0;l<s.length;l++){var i=s[l];const _=zt(i);i=ws(this,i);for(let b=0;b<i.length;b++){let T=_;i[b]!==""&&(T+="="+zt(i[b])),t.push(T)}}return this.i=t.join("&")};function Es(t){const s=new Jt;return s.i=t.i,t.g&&(s.g=new Map(t.g),s.h=t.h),s}function Bt(t,s){return s=String(s),t.j&&(s=s.toLowerCase()),s}function ji(t,s){s&&!t.j&&(Tt(t),t.i=null,t.g.forEach(function(i,l){const _=l.toLowerCase();l!=_&&(ys(this,l),vs(this,_,i))},t)),t.j=s}function Hi(t,s){const i=new qt;if(u.Image){const l=new Image;l.onload=I(dt,i,"TestLoadImage: loaded",!0,s,l),l.onerror=I(dt,i,"TestLoadImage: error",!1,s,l),l.onabort=I(dt,i,"TestLoadImage: abort",!1,s,l),l.ontimeout=I(dt,i,"TestLoadImage: timeout",!1,s,l),u.setTimeout(function(){l.ontimeout&&l.ontimeout()},1e4),l.src=t}else s(!1)}function Fi(t,s){const i=new qt,l=new AbortController,_=setTimeout(()=>{l.abort(),dt(i,"TestPingServer: timeout",!1,s)},1e4);fetch(t,{signal:l.signal}).then(b=>{clearTimeout(_),b.ok?dt(i,"TestPingServer: ok",!0,s):dt(i,"TestPingServer: server error",!1,s)}).catch(()=>{clearTimeout(_),dt(i,"TestPingServer: error",!1,s)})}function dt(t,s,i,l,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),l(i)}catch{}}function $i(){this.g=new Si}function nn(t){this.i=t.Sb||null,this.h=t.ab||!1}C(nn,Zn),nn.prototype.g=function(){return new ye(this.i,this.h)};function ye(t,s){V.call(this),this.H=t,this.o=s,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}C(ye,V),e=ye.prototype,e.open=function(t,s){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=s,this.readyState=1,Zt(this)},e.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const s={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(s.body=t),(this.H||u).fetch(new Request(this.D,s)).then(this.Pa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Yt(this)),this.readyState=0},e.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zt(this)),this.g&&(this.readyState=3,Zt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ts(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ts(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}e.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var s=t.value?t.value:new Uint8Array(0);(s=this.B.decode(s,{stream:!t.done}))&&(this.response=this.responseText+=s)}t.done?Yt(this):Zt(this),this.readyState==3&&Ts(this)}},e.Oa=function(t){this.g&&(this.response=this.responseText=t,Yt(this))},e.Na=function(t){this.g&&(this.response=t,Yt(this))},e.ga=function(){this.g&&Yt(this)};function Yt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,Zt(t)}e.setRequestHeader=function(t,s){this.A.append(t,s)},e.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],s=this.h.entries();for(var i=s.next();!i.done;)i=i.value,t.push(i[0]+": "+i[1]),i=s.next();return t.join(`\r
`)};function Zt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ye.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ss(t){let s="";return ue(t,function(i,l){s+=l,s+=":",s+=i,s+=`\r
`}),s}function sn(t,s,i){t:{for(l in i){var l=!1;break t}l=!0}l||(i=Ss(i),typeof t=="string"?i!=null&&zt(i):M(t,s,i))}function j(t){V.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}C(j,V);var qi=/^https?$/i,zi=["POST","PUT"];e=j.prototype,e.Fa=function(t){this.H=t},e.ea=function(t,s,i,l){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);s=s?s.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():is.g(),this.g.onreadystatechange=S(E(this.Ca,this));try{this.B=!0,this.g.open(s,String(t),!0),this.B=!1}catch(b){Is(this,b);return}if(t=i||"",i=new Map(this.headers),l)if(Object.getPrototypeOf(l)===Object.prototype)for(var _ in l)i.set(_,l[_]);else if(typeof l.keys=="function"&&typeof l.get=="function")for(const b of l.keys())i.set(b,l.get(b));else throw Error("Unknown input type for opt_headers: "+String(l));l=Array.from(i.keys()).find(b=>b.toLowerCase()=="content-type"),_=u.FormData&&t instanceof u.FormData,!(Array.prototype.indexOf.call(zi,s,void 0)>=0)||l||_||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,T]of i)this.g.setRequestHeader(b,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(b){Is(this,b)}};function Is(t,s){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=s,t.o=5,Cs(t),be(t)}function Cs(t){t.A||(t.A=!0,G(t,"complete"),G(t,"error"))}e.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,G(this,"complete"),G(this,"abort"),be(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),be(this,!0)),j.Z.N.call(this)},e.Ca=function(){this.u||(this.B||this.v||this.j?Rs(this):this.Xa())},e.Xa=function(){Rs(this)};function Rs(t){if(t.h&&typeof h<"u"){if(t.v&&pt(t)==4)setTimeout(t.Ca.bind(t),0);else if(G(t,"readystatechange"),pt(t)==4){t.h=!1;try{const b=t.ca();t:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var s=!0;break t;default:s=!1}var i;if(!(i=s)){var l;if(l=b===0){let T=String(t.D).match(ms)[1]||null;!T&&u.self&&u.self.location&&(T=u.self.location.protocol.slice(0,-1)),l=!qi.test(T?T.toLowerCase():"")}i=l}if(i)G(t,"complete"),G(t,"success");else{t.o=6;try{var _=pt(t)>2?t.g.statusText:""}catch{_=""}t.l=_+" ["+t.ca()+"]",Cs(t)}}finally{be(t)}}}}function be(t,s){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const i=t.g;t.g=null,s||G(t,"ready");try{i.onreadystatechange=null}catch{}}}e.isActive=function(){return!!this.g};function pt(t){return t.g?t.g.readyState:0}e.ca=function(){try{return pt(this)>2?this.g.status:-1}catch{return-1}},e.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},e.La=function(t){if(this.g){var s=this.g.responseText;return t&&s.indexOf(t)==0&&(s=s.substring(t.length)),Ti(s)}};function As(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Vi(t){const s={};t=(t.g&&pt(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let l=0;l<t.length;l++){if(f(t[l]))continue;var i=ki(t[l]);const _=i[0];if(i=i[1],typeof i!="string")continue;i=i.trim();const b=s[_]||[];s[_]=b,b.push(i)}_i(s,function(l){return l.join(", ")})}e.ya=function(){return this.o},e.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Qt(t,s,i){return i&&i.internalChannelParams&&i.internalChannelParams[t]||s}function ks(t){this.za=0,this.i=[],this.j=new qt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Qt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Qt("baseRetryDelayMs",5e3,t),this.Za=Qt("retryDelaySeedMs",1e4,t),this.Ta=Qt("forwardChannelMaxRetries",2,t),this.va=Qt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new us(t&&t.concurrentRequestLimit),this.Ba=new $i,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}e=ks.prototype,e.ka=8,e.I=1,e.connect=function(t,s,i,l){K(0),this.W=t,this.H=s||{},i&&l!==void 0&&(this.H.OSID=i,this.H.OAID=l),this.F=this.X,this.J=Ls(this,null,this.W),ve(this)};function rn(t){if(Os(t),t.I==3){var s=t.V++,i=st(t.J);if(M(i,"SID",t.M),M(i,"RID",s),M(i,"TYPE","terminate"),te(t,i),s=new ut(t,t.j,s),s.M=2,s.A=_e(st(i)),i=!1,u.navigator&&u.navigator.sendBeacon)try{i=u.navigator.sendBeacon(s.A.toString(),"")}catch{}!i&&u.Image&&(new Image().src=s.A,i=!0),i||(s.g=js(s.j,null),s.g.ea(s.A)),s.F=Date.now(),me(s)}Us(t)}function we(t){t.g&&(an(t),t.g.cancel(),t.g=null)}function Os(t){we(t),t.v&&(u.clearTimeout(t.v),t.v=null),Ee(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&u.clearTimeout(t.m),t.m=null)}function ve(t){if(!fs(t.h)&&!t.m){t.m=!0;var s=t.Ea;X||c(),$||(X(),$=!0),g.add(s,t),t.D=0}}function Wi(t,s){return ds(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=s.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=$t(E(t.Ea,t,s),Ms(t,t.D)),t.D++,!0)}e.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const _=new ut(this,this.j,t);let b=this.o;if(this.U&&(b?(b=$n(b),zn(b,this.U)):b=this.U),this.u!==null||this.R||(_.J=b,b=null),this.S)t:{for(var s=0,i=0;i<this.i.length;i++){e:{var l=this.i[i];if("__data__"in l.map&&(l=l.map.__data__,typeof l=="string")){l=l.length;break e}l=void 0}if(l===void 0)break;if(s+=l,s>4096){s=i;break t}if(s===4096||i===this.i.length-1){s=i+1;break t}}s=1e3}else s=1e3;s=Ps(this,_,s),i=st(this.J),M(i,"RID",t),M(i,"CVER",22),this.G&&M(i,"X-HTTP-Session-Id",this.G),te(this,i),b&&(this.R?s="headers="+zt(Ss(b))+"&"+s:this.u&&sn(i,this.u,b)),tn(this.h,_),this.Ra&&M(i,"TYPE","init"),this.S?(M(i,"$req",s),M(i,"SID","null"),_.U=!0,Je(_,i,null)):Je(_,i,s),this.I=2}}else this.I==3&&(t?Ds(this,t):this.i.length==0||fs(this.h)||Ds(this))};function Ds(t,s){var i;s?i=s.l:i=t.V++;const l=st(t.J);M(l,"SID",t.M),M(l,"RID",i),M(l,"AID",t.K),te(t,l),t.u&&t.o&&sn(l,t.u,t.o),i=new ut(t,t.j,i,t.D+1),t.u===null&&(i.J=t.o),s&&(t.i=s.G.concat(t.i)),s=Ps(t,i,1e3),i.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),tn(t.h,i),Je(i,l,s)}function te(t,s){t.H&&ue(t.H,function(i,l){M(s,l,i)}),t.l&&ue({},function(i,l){M(s,l,i)})}function Ps(t,s,i){i=Math.min(t.i.length,i);const l=t.l?E(t.l.Ka,t.l,t):null;t:{var _=t.i;let A=-1;for(;;){const q=["count="+i];A==-1?i>0?(A=_[0].g,q.push("ofs="+A)):A=0:q.push("ofs="+A);let x=!0;for(let z=0;z<i;z++){var b=_[z].g;const rt=_[z].map;if(b-=A,b<0)A=Math.max(0,_[z].g-100),x=!1;else try{b="req"+b+"_"||"";try{var T=rt instanceof Map?rt:Object.entries(rt);for(const[It,gt]of T){let mt=gt;w(gt)&&(mt=Ve(gt)),q.push(b+It+"="+encodeURIComponent(mt))}}catch(It){throw q.push(b+"type="+encodeURIComponent("_badmap")),It}}catch{l&&l(rt)}}if(x){T=q.join("&");break t}}T=void 0}return t=t.i.splice(0,i),s.G=t,T}function xs(t){if(!t.g&&!t.v){t.Y=1;var s=t.Da;X||c(),$||(X(),$=!0),g.add(s,t),t.A=0}}function on(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=$t(E(t.Da,t),Ms(t,t.A)),t.A++,!0)}e.Da=function(){if(this.v=null,Ns(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=$t(E(this.Wa,this),t)}},e.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,K(10),we(this),Ns(this))};function an(t){t.B!=null&&(u.clearTimeout(t.B),t.B=null)}function Ns(t){t.g=new ut(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var s=st(t.na);M(s,"RID","rpc"),M(s,"SID",t.M),M(s,"AID",t.K),M(s,"CI",t.F?"0":"1"),!t.F&&t.ia&&M(s,"TO",t.ia),M(s,"TYPE","xmlhttp"),te(t,s),t.u&&t.o&&sn(s,t.u,t.o),t.O&&(t.g.H=t.O);var i=t.g;t=t.ba,i.M=1,i.A=_e(st(s)),i.u=null,i.R=!0,ls(i,t)}e.Va=function(){this.C!=null&&(this.C=null,we(this),on(this),K(19))};function Ee(t){t.C!=null&&(u.clearTimeout(t.C),t.C=null)}function Bs(t,s){var i=null;if(t.g==s){Ee(t),an(t),t.g=null;var l=2}else if(Qe(t.h,s))i=s.G,ps(t.h,s),l=1;else return;if(t.I!=0){if(s.o)if(l==1){i=s.u?s.u.length:0,s=Date.now()-s.F;var _=t.D;l=pe(),G(l,new ss(l,i)),ve(t)}else xs(t);else if(_=s.m,_==3||_==0&&s.X>0||!(l==1&&Wi(t,s)||l==2&&on(t)))switch(i&&i.length>0&&(s=t.h,s.i=s.i.concat(i)),_){case 1:St(t,5);break;case 4:St(t,10);break;case 3:St(t,6);break;default:St(t,2)}}}function Ms(t,s){let i=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(i*=2),i*s}function St(t,s){if(t.j.info("Error code "+s),s==2){var i=E(t.bb,t),l=t.Ua;const _=!l;l=new ft(l||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Wt(l,"https"),_e(l),_?Hi(l.toString(),i):Fi(l.toString(),i)}else K(2);t.I=0,t.l&&t.l.pa(s),Us(t),Os(t)}e.bb=function(t){t?(this.j.info("Successfully pinged google.com"),K(2)):(this.j.info("Failed to ping google.com"),K(1))};function Us(t){if(t.I=0,t.ja=[],t.l){const s=gs(t.h);(s.length!=0||t.i.length!=0)&&(k(t.ja,s),k(t.ja,t.i),t.h.i.length=0,O(t.i),t.i.length=0),t.l.oa()}}function Ls(t,s,i){var l=i instanceof ft?st(i):new ft(i);if(l.g!="")s&&(l.g=s+"."+l.g),Xt(l,l.u);else{var _=u.location;l=_.protocol,s=s?s+"."+_.hostname:_.hostname,_=+_.port;const b=new ft(null);l&&Wt(b,l),s&&(b.g=s),_&&Xt(b,_),i&&(b.h=i),l=b}return i=t.G,s=t.wa,i&&s&&M(l,i,s),M(l,"VER",t.ka),te(t,l),l}function js(t,s,i){if(s&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return s=t.Aa&&!t.ma?new j(new nn({ab:i})):new j(t.ma),s.Fa(t.L),s}e.isActive=function(){return!!this.l&&this.l.isActive(this)};function Hs(){}e=Hs.prototype,e.ra=function(){},e.qa=function(){},e.pa=function(){},e.oa=function(){},e.isActive=function(){return!0},e.Ka=function(){};function Te(){}Te.prototype.g=function(t,s){return new Q(t,s)};function Q(t,s){V.call(this),this.g=new ks(s),this.l=t,this.h=s&&s.messageUrlParams||null,t=s&&s.messageHeaders||null,s&&s.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=s&&s.initMessageHeaders||null,s&&s.messageContentType&&(t?t["X-WebChannel-Content-Type"]=s.messageContentType:t={"X-WebChannel-Content-Type":s.messageContentType}),s&&s.sa&&(t?t["X-WebChannel-Client-Profile"]=s.sa:t={"X-WebChannel-Client-Profile":s.sa}),this.g.U=t,(t=s&&s.Qb)&&!f(t)&&(this.g.u=t),this.A=s&&s.supportsCrossDomainXhr||!1,this.v=s&&s.sendRawJson||!1,(s=s&&s.httpSessionIdParam)&&!f(s)&&(this.g.G=s,t=this.h,t!==null&&s in t&&(t=this.h,s in t&&delete t[s])),this.j=new Mt(this)}C(Q,V),Q.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Q.prototype.close=function(){rn(this.g)},Q.prototype.o=function(t){var s=this.g;if(typeof t=="string"){var i={};i.__data__=t,t=i}else this.v&&(i={},i.__data__=Ve(t),t=i);s.i.push(new Pi(s.Ya++,t)),s.I==3&&ve(s)},Q.prototype.N=function(){this.g.l=null,delete this.j,rn(this.g),delete this.g,Q.Z.N.call(this)};function Fs(t){We.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var s=t.__sm__;if(s){t:{for(const i in s){t=i;break t}t=void 0}(this.i=t)&&(t=this.i,s=s!==null&&t in s?s[t]:void 0),this.data=s}else this.data=t}C(Fs,We);function $s(){Xe.call(this),this.status=1}C($s,Xe);function Mt(t){this.g=t}C(Mt,Hs),Mt.prototype.ra=function(){G(this.g,"a")},Mt.prototype.qa=function(t){G(this.g,new Fs(t))},Mt.prototype.pa=function(t){G(this.g,new $s)},Mt.prototype.oa=function(){G(this.g,"b")},Te.prototype.createWebChannel=Te.prototype.g,Q.prototype.send=Q.prototype.o,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,ja=function(){return new Te},La=function(){return pe()},Ua=vt,Ma={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},ge.NO_ERROR=0,ge.TIMEOUT=8,ge.HTTP_ERROR=6,Ba=ge,rs.COMPLETE="complete",Na=rs,Qn.EventType=Ht,Ht.OPEN="a",Ht.CLOSE="b",Ht.ERROR="c",Ht.MESSAGE="d",V.prototype.listen=V.prototype.J,xa=Qn,j.prototype.listenOnce=j.prototype.K,j.prototype.getLastError=j.prototype.Ha,j.prototype.getLastErrorCode=j.prototype.ya,j.prototype.getStatus=j.prototype.ca,j.prototype.getResponseJson=j.prototype.La,j.prototype.getResponseText=j.prototype.la,j.prototype.send=j.prototype.ea,j.prototype.setWithCredentials=j.prototype.Fa,Pa=j}).apply(typeof Ie<"u"?Ie:typeof self<"u"?self:typeof window<"u"?window:{});const Ir="@firebase/installations",On="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr=1e4,Rr=`w:${On}`,Ar="FIS_v2",Ha="https://firebaseinstallations.googleapis.com/v1",Fa=3600*1e3,$a="installations",qa="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Dt=new An($a,qa,za);function kr(e){return e instanceof bt&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or({projectId:e}){return`${Ha}/projects/${e}/installations`}function Dr(e){return{token:e.token,requestStatus:2,expiresIn:Wa(e.expiresIn),creationTime:Date.now()}}async function Pr(e,n){const o=(await n.json()).error;return Dt.create("request-failed",{requestName:e,serverCode:o.code,serverMessage:o.message,serverStatus:o.status})}function xr({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Va(e,{refreshToken:n}){const r=xr(e);return r.append("Authorization",Xa(n)),r}async function Nr(e){const n=await e();return n.status>=500&&n.status<600?e():n}function Wa(e){return Number(e.replace("s","000"))}function Xa(e){return`${Ar} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga({appConfig:e,heartbeatServiceProvider:n},{fid:r}){const o=Or(e),a=xr(e),h=n.getImmediate({optional:!0});if(h){const E=await h.getHeartbeatsHeader();E&&a.append("x-firebase-client",E)}const u={fid:r,authVersion:Ar,appId:e.appId,sdkVersion:Rr},w={method:"POST",headers:a,body:JSON.stringify(u)},v=await Nr(()=>fetch(o,w));if(v.ok){const E=await v.json();return{fid:E.fid||r,registrationStatus:2,refreshToken:E.refreshToken,authToken:Dr(E.authToken)}}else throw await Pr("Create Installation",v)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e){return new Promise(n=>{setTimeout(n,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=/^[cdef][\w-]{21}$/,In="";function Ya(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const r=Za(e);return Ja.test(r)?r:In}catch{return In}}function Za(e){return Ka(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=new Map;function Ur(e,n){const r=Ne(e);Lr(r,n),Qa(r,n)}function Lr(e,n){const r=Mr.get(e);if(r)for(const o of r)o(n)}function Qa(e,n){const r=tl();r&&r.postMessage({key:e,fid:n}),el()}let Rt=null;function tl(){return!Rt&&"BroadcastChannel"in self&&(Rt=new BroadcastChannel("[Firebase] FID Change"),Rt.onmessage=e=>{Lr(e.data.key,e.data.fid)}),Rt}function el(){Mr.size===0&&Rt&&(Rt.close(),Rt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="firebase-installations-database",sl=1,Pt="firebase-installations-store";let pn=null;function Dn(){return pn||(pn=_r(nl,sl,{upgrade:(e,n)=>{switch(n){case 0:e.createObjectStore(Pt)}}})),pn}async function Oe(e,n){const r=Ne(e),a=(await Dn()).transaction(Pt,"readwrite"),h=a.objectStore(Pt),u=await h.get(r);return await h.put(n,r),await a.done,(!u||u.fid!==n.fid)&&Ur(e,n.fid),n}async function jr(e){const n=Ne(e),o=(await Dn()).transaction(Pt,"readwrite");await o.objectStore(Pt).delete(n),await o.done}async function Be(e,n){const r=Ne(e),a=(await Dn()).transaction(Pt,"readwrite"),h=a.objectStore(Pt),u=await h.get(r),w=n(u);return w===void 0?await h.delete(r):await h.put(w,r),await a.done,w&&(!u||u.fid!==w.fid)&&Ur(e,w.fid),w}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pn(e){let n;const r=await Be(e.appConfig,o=>{const a=rl(o),h=il(e,a);return n=h.registrationPromise,h.installationEntry});return r.fid===In?{installationEntry:await n}:{installationEntry:r,registrationPromise:n}}function rl(e){const n=e||{fid:Ya(),registrationStatus:0};return Hr(n)}function il(e,n){if(n.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(Dt.create("app-offline"));return{installationEntry:n,registrationPromise:a}}const r={fid:n.fid,registrationStatus:1,registrationTime:Date.now()},o=ol(e,r);return{installationEntry:r,registrationPromise:o}}else return n.registrationStatus===1?{installationEntry:n,registrationPromise:al(e)}:{installationEntry:n}}async function ol(e,n){try{const r=await Ga(e,n);return Oe(e.appConfig,r)}catch(r){throw kr(r)&&r.customData.serverCode===409?await jr(e.appConfig):await Oe(e.appConfig,{fid:n.fid,registrationStatus:0}),r}}async function al(e){let n=await er(e.appConfig);for(;n.registrationStatus===1;)await Br(100),n=await er(e.appConfig);if(n.registrationStatus===0){const{installationEntry:r,registrationPromise:o}=await Pn(e);return o||r}return n}function er(e){return Be(e,n=>{if(!n)throw Dt.create("installation-not-found");return Hr(n)})}function Hr(e){return ll(e)?{fid:e.fid,registrationStatus:0}:e}function ll(e){return e.registrationStatus===1&&e.registrationTime+Cr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl({appConfig:e,heartbeatServiceProvider:n},r){const o=cl(e,r),a=Va(e,r),h=n.getImmediate({optional:!0});if(h){const E=await h.getHeartbeatsHeader();E&&a.append("x-firebase-client",E)}const u={installation:{sdkVersion:Rr,appId:e.appId}},w={method:"POST",headers:a,body:JSON.stringify(u)},v=await Nr(()=>fetch(o,w));if(v.ok){const E=await v.json();return Dr(E)}else throw await Pr("Generate Auth Token",v)}function cl(e,{fid:n}){return`${Or(e)}/${n}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xn(e,n=!1){let r;const o=await Be(e.appConfig,h=>{if(!Fr(h))throw Dt.create("not-registered");const u=h.authToken;if(!n&&dl(u))return h;if(u.requestStatus===1)return r=ul(e,n),h;{if(!navigator.onLine)throw Dt.create("app-offline");const w=gl(h);return r=fl(e,w),w}});return r?await r:o.authToken}async function ul(e,n){let r=await nr(e.appConfig);for(;r.authToken.requestStatus===1;)await Br(100),r=await nr(e.appConfig);const o=r.authToken;return o.requestStatus===0?xn(e,n):o}function nr(e){return Be(e,n=>{if(!Fr(n))throw Dt.create("not-registered");const r=n.authToken;return ml(r)?{...n,authToken:{requestStatus:0}}:n})}async function fl(e,n){try{const r=await hl(e,n),o={...n,authToken:r};return await Oe(e.appConfig,o),r}catch(r){if(kr(r)&&(r.customData.serverCode===401||r.customData.serverCode===404))await jr(e.appConfig);else{const o={...n,authToken:{requestStatus:0}};await Oe(e.appConfig,o)}throw r}}function Fr(e){return e!==void 0&&e.registrationStatus===2}function dl(e){return e.requestStatus===2&&!pl(e)}function pl(e){const n=Date.now();return n<e.creationTime||e.creationTime+e.expiresIn<n+Fa}function gl(e){const n={requestStatus:1,requestTime:Date.now()};return{...e,authToken:n}}function ml(e){return e.requestStatus===1&&e.requestTime+Cr<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _l(e){const n=e,{installationEntry:r,registrationPromise:o}=await Pn(n);return o?o.catch(console.error):xn(n).catch(console.error),r.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(e,n=!1){const r=e;return await bl(r),(await xn(r,n)).token}async function bl(e){const{registrationPromise:n}=await Pn(e);n&&await n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e){if(!e||!e.options)throw gn("App Configuration");if(!e.name)throw gn("App Name");const n=["projectId","apiKey","appId"];for(const r of n)if(!e.options[r])throw gn(r);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function gn(e){return Dt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="installations",vl="installations-internal",El=e=>{const n=e.getProvider("app").getImmediate(),r=wl(n),o=ae(n,"heartbeat");return{app:n,appConfig:r,heartbeatServiceProvider:o,_delete:()=>Promise.resolve()}},Tl=e=>{const n=e.getProvider("app").getImmediate(),r=ae(n,$r).getImmediate();return{getId:()=>_l(r),getToken:a=>yl(r,a)}};function Sl(){Ot(new kt($r,El,"PUBLIC")),Ot(new kt(vl,Tl,"PRIVATE"))}Sl();lt(Ir,On);lt(Ir,On,"esm2020");var Il="firebase",Cl="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt(Il,Cl,"app");const Ic=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:bt,SDK_VERSION:wr,_DEFAULT_ENTRY_NAME:re,_addComponent:Sn,_apps:ie,_components:ke,_getProvider:ae,_isFirebaseServerApp:br,_registerComponent:Ot,_removeServiceInstance:_a,_serverApps:yr,getApp:Er,initializeApp:vr,registerVersion:lt},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="firebasestorage.googleapis.com",zr="storageBucket",Rl=120*1e3,Al=600*1e3,kl=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L extends bt{constructor(n,r,o=0){super(mn(n),`Firebase Storage: ${r} (${mn(n)})`),this.status_=o,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,L.prototype)}get status(){return this.status_}set status(n){this.status_=n}_codeEquals(n){return mn(n)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(n){this.customData.serverResponse=n,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var B;(function(e){e.UNKNOWN="unknown",e.OBJECT_NOT_FOUND="object-not-found",e.BUCKET_NOT_FOUND="bucket-not-found",e.PROJECT_NOT_FOUND="project-not-found",e.QUOTA_EXCEEDED="quota-exceeded",e.UNAUTHENTICATED="unauthenticated",e.UNAUTHORIZED="unauthorized",e.UNAUTHORIZED_APP="unauthorized-app",e.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",e.INVALID_CHECKSUM="invalid-checksum",e.CANCELED="canceled",e.INVALID_EVENT_NAME="invalid-event-name",e.INVALID_URL="invalid-url",e.INVALID_DEFAULT_BUCKET="invalid-default-bucket",e.NO_DEFAULT_BUCKET="no-default-bucket",e.CANNOT_SLICE_BLOB="cannot-slice-blob",e.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",e.NO_DOWNLOAD_URL="no-download-url",e.INVALID_ARGUMENT="invalid-argument",e.INVALID_ARGUMENT_COUNT="invalid-argument-count",e.APP_DELETED="app-deleted",e.INVALID_ROOT_OPERATION="invalid-root-operation",e.INVALID_FORMAT="invalid-format",e.INTERNAL_ERROR="internal-error",e.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(B||(B={}));function mn(e){return"storage/"+e}function Nn(){const e="An unknown error occurred, please check the error payload for server response.";return new L(B.UNKNOWN,e)}function Ol(e){return new L(B.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function Dl(e){return new L(B.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Pl(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new L(B.UNAUTHENTICATED,e)}function xl(){return new L(B.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Nl(e){return new L(B.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function Vr(){return new L(B.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Wr(){return new L(B.CANCELED,"User canceled the upload/download.")}function Bl(e){return new L(B.INVALID_URL,"Invalid URL '"+e+"'.")}function Ml(e){return new L(B.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function Ul(){return new L(B.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+zr+"' property when initializing the app?")}function Xr(){return new L(B.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ll(){return new L(B.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function jl(){return new L(B.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Hl(e){return new L(B.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function De(e){return new L(B.INVALID_ARGUMENT,e)}function Gr(){return new L(B.APP_DELETED,"The Firebase app was deleted.")}function Kr(e){return new L(B.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function se(e,n){return new L(B.INVALID_FORMAT,"String does not match format '"+e+"': "+n)}function ee(e){throw new L(B.INTERNAL_ERROR,"Internal error: "+e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(n,r){this.bucket=n,this.path_=r}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const n=encodeURIComponent;return"/b/"+n(this.bucket)+"/o/"+n(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(n,r){let o;try{o=W.makeFromUrl(n,r)}catch{return new W(n,"")}if(o.path==="")return o;throw Ml(n)}static makeFromUrl(n,r){let o=null;const a="([A-Za-z0-9.\\-_]+)";function h(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const u="(/(.*))?$",w=new RegExp("^gs://"+a+u,"i"),v={bucket:1,path:3};function E(N){N.path_=decodeURIComponent(N.path)}const I="v[A-Za-z0-9_]+",C=r.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${C}/${I}/b/${a}/o${S}`,"i"),k={bucket:1,path:3},D=r===qr?"(?:storage.googleapis.com|storage.cloud.google.com)":r,R="([^?#]*)",F=new RegExp(`^https?://${D}/${a}/${R}`,"i"),P=[{regex:w,indices:v,postModify:h},{regex:O,indices:k,postModify:E},{regex:F,indices:{bucket:1,path:2},postModify:E}];for(let N=0;N<P.length;N++){const X=P[N],$=X.regex.exec(n);if($){const g=$[X.indices.bucket];let c=$[X.indices.path];c||(c=""),o=new W(g,c),X.postModify(o);break}}if(o==null)throw Bl(n);return o}}class Fl{constructor(n){this.promise_=Promise.reject(n)}getPromise(){return this.promise_}cancel(n=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(e,n,r){let o=1,a=null,h=null,u=!1,w=0;function v(){return w===2}let E=!1;function I(...R){E||(E=!0,n.apply(null,R))}function C(R){a=setTimeout(()=>{a=null,e(O,v())},R)}function S(){h&&clearTimeout(h)}function O(R,...F){if(E){S();return}if(R){S(),I.call(null,R,...F);return}if(v()||u){S(),I.call(null,R,...F);return}o<64&&(o*=2);let P;w===1?(w=2,P=0):P=(o+Math.random())*1e3,C(P)}let k=!1;function D(R){k||(k=!0,S(),!E&&(a!==null?(R||(w=2),clearTimeout(a),C(0)):R||(w=1)))}return C(0),h=setTimeout(()=>{u=!0,D(!0)},r),D}function ql(e){e(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(e){return e!==void 0}function Vl(e){return typeof e=="function"}function Wl(e){return typeof e=="object"&&!Array.isArray(e)}function Me(e){return typeof e=="string"||e instanceof String}function sr(e){return Bn()&&e instanceof Blob}function Bn(){return typeof Blob<"u"}function Cn(e,n,r,o){if(o<n)throw De(`Invalid value for '${e}'. Expected ${n} or greater.`);if(o>r)throw De(`Invalid value for '${e}'. Expected ${r} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e,n,r){let o=n;return r==null&&(o=`https://${n}`),`${r}://${o}/v0${e}`}function Jr(e){const n=encodeURIComponent;let r="?";for(const o in e)if(e.hasOwnProperty(o)){const a=n(o)+"="+n(e[o]);r=r+a+"&"}return r=r.slice(0,-1),r}var At;(function(e){e[e.NO_ERROR=0]="NO_ERROR",e[e.NETWORK_ERROR=1]="NETWORK_ERROR",e[e.ABORT=2]="ABORT"})(At||(At={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(e,n){const r=e>=500&&e<600,a=[408,429].indexOf(e)!==-1,h=n.indexOf(e)!==-1;return r||a||h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(n,r,o,a,h,u,w,v,E,I,C,S=!0,O=!1){this.url_=n,this.method_=r,this.headers_=o,this.body_=a,this.successCodes_=h,this.additionalRetryCodes_=u,this.callback_=w,this.errorCallback_=v,this.timeout_=E,this.progressCallback_=I,this.connectionFactory_=C,this.retry=S,this.isUsingEmulator=O,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((k,D)=>{this.resolve_=k,this.reject_=D,this.start_()})}start_(){const n=(o,a)=>{if(a){o(!1,new Ce(!1,null,!0));return}const h=this.connectionFactory_();this.pendingConnection_=h;const u=w=>{const v=w.loaded,E=w.lengthComputable?w.total:-1;this.progressCallback_!==null&&this.progressCallback_(v,E)};this.progressCallback_!==null&&h.addUploadProgressListener(u),h.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&h.removeUploadProgressListener(u),this.pendingConnection_=null;const w=h.getErrorCode()===At.NO_ERROR,v=h.getStatus();if(!w||Yr(v,this.additionalRetryCodes_)&&this.retry){const I=h.getErrorCode()===At.ABORT;o(!1,new Ce(!1,null,I));return}const E=this.successCodes_.indexOf(v)!==-1;o(!0,new Ce(E,h))})},r=(o,a)=>{const h=this.resolve_,u=this.reject_,w=a.connection;if(a.wasSuccessCode)try{const v=this.callback_(w,w.getResponse());zl(v)?h(v):h()}catch(v){u(v)}else if(w!==null){const v=Nn();v.serverResponse=w.getErrorText(),this.errorCallback_?u(this.errorCallback_(w,v)):u(v)}else if(a.canceled){const v=this.appDelete_?Gr():Wr();u(v)}else{const v=Vr();u(v)}};this.canceled_?r(!1,new Ce(!1,null,!0)):this.backoffId_=$l(n,r,this.timeout_)}getPromise(){return this.promise_}cancel(n){this.canceled_=!0,this.appDelete_=n||!1,this.backoffId_!==null&&ql(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ce{constructor(n,r,o){this.wasSuccessCode=n,this.connection=r,this.canceled=!!o}}function Gl(e,n){n!==null&&n.length>0&&(e.Authorization="Firebase "+n)}function Kl(e,n){e["X-Firebase-Storage-Version"]="webjs/"+(n??"AppManager")}function Jl(e,n){n&&(e["X-Firebase-GMPID"]=n)}function Yl(e,n){n!==null&&(e["X-Firebase-AppCheck"]=n)}function Zl(e,n,r,o,a,h,u=!0,w=!1){const v=Jr(e.urlParams),E=e.url+v,I=Object.assign({},e.headers);return Jl(I,n),Gl(I,r),Kl(I,h),Yl(I,o),new Xl(E,e.method,I,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,a,u,w)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function th(...e){const n=Ql();if(n!==void 0){const r=new n;for(let o=0;o<e.length;o++)r.append(e[o]);return r.getBlob()}else{if(Bn())return new Blob(e);throw new L(B.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function eh(e,n,r){return e.webkitSlice?e.webkitSlice(n,r):e.mozSlice?e.mozSlice(n,r):e.slice?e.slice(n,r):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e){if(typeof atob>"u")throw Hl("base-64");return atob(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class _n{constructor(n,r){this.data=n,this.contentType=r||null}}function Mn(e,n){switch(e){case et.RAW:return new _n(Zr(n));case et.BASE64:case et.BASE64URL:return new _n(Qr(e,n));case et.DATA_URL:return new _n(rh(n),ih(n))}throw Nn()}function Zr(e){const n=[];for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);if(o<=127)n.push(o);else if(o<=2047)n.push(192|o>>6,128|o&63);else if((o&64512)===55296)if(!(r<e.length-1&&(e.charCodeAt(r+1)&64512)===56320))n.push(239,191,189);else{const h=o,u=e.charCodeAt(++r);o=65536|(h&1023)<<10|u&1023,n.push(240|o>>18,128|o>>12&63,128|o>>6&63,128|o&63)}else(o&64512)===56320?n.push(239,191,189):n.push(224|o>>12,128|o>>6&63,128|o&63)}return new Uint8Array(n)}function sh(e){let n;try{n=decodeURIComponent(e)}catch{throw se(et.DATA_URL,"Malformed data URL.")}return Zr(n)}function Qr(e,n){switch(e){case et.BASE64:{const a=n.indexOf("-")!==-1,h=n.indexOf("_")!==-1;if(a||h)throw se(e,"Invalid character '"+(a?"-":"_")+"' found: is it base64url encoded?");break}case et.BASE64URL:{const a=n.indexOf("+")!==-1,h=n.indexOf("/")!==-1;if(a||h)throw se(e,"Invalid character '"+(a?"+":"/")+"' found: is it base64 encoded?");n=n.replace(/-/g,"+").replace(/_/g,"/");break}}let r;try{r=nh(n)}catch(a){throw a.message.includes("polyfill")?a:se(e,"Invalid character found")}const o=new Uint8Array(r.length);for(let a=0;a<r.length;a++)o[a]=r.charCodeAt(a);return o}class ti{constructor(n){this.base64=!1,this.contentType=null;const r=n.match(/^data:([^,]+)?,/);if(r===null)throw se(et.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const o=r[1]||null;o!=null&&(this.base64=oh(o,";base64"),this.contentType=this.base64?o.substring(0,o.length-7):o),this.rest=n.substring(n.indexOf(",")+1)}}function rh(e){const n=new ti(e);return n.base64?Qr(et.BASE64,n.rest):sh(n.rest)}function ih(e){return new ti(e).contentType}function oh(e,n){return e.length>=n.length?e.substring(e.length-n.length)===n:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(n,r){let o=0,a="";sr(n)?(this.data_=n,o=n.size,a=n.type):n instanceof ArrayBuffer?(r?this.data_=new Uint8Array(n):(this.data_=new Uint8Array(n.byteLength),this.data_.set(new Uint8Array(n))),o=this.data_.length):n instanceof Uint8Array&&(r?this.data_=n:(this.data_=new Uint8Array(n.length),this.data_.set(n)),o=n.length),this.size_=o,this.type_=a}size(){return this.size_}type(){return this.type_}slice(n,r){if(sr(this.data_)){const o=this.data_,a=eh(o,n,r);return a===null?null:new it(a)}else{const o=new Uint8Array(this.data_.buffer,n,r-n);return new it(o,!0)}}static getBlob(...n){if(Bn()){const r=n.map(o=>o instanceof it?o.data_:o);return new it(th.apply(null,r))}else{const r=n.map(u=>Me(u)?Mn(et.RAW,u).data:u.data_);let o=0;r.forEach(u=>{o+=u.byteLength});const a=new Uint8Array(o);let h=0;return r.forEach(u=>{for(let w=0;w<u.length;w++)a[h++]=u[w]}),new it(a,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(e){let n;try{n=JSON.parse(e)}catch{return null}return Wl(n)?n:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(e){if(e.length===0)return null;const n=e.lastIndexOf("/");return n===-1?"":e.slice(0,n)}function lh(e,n){const r=n.split("/").filter(o=>o.length>0).join("/");return e.length===0?r:e+"/"+r}function ei(e){const n=e.lastIndexOf("/",e.length-2);return n===-1?e:e.slice(n+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hh(e,n){return n}class J{constructor(n,r,o,a){this.server=n,this.local=r||n,this.writable=!!o,this.xform=a||hh}}let Re=null;function ch(e){return!Me(e)||e.length<2?e:ei(e)}function le(){if(Re)return Re;const e=[];e.push(new J("bucket")),e.push(new J("generation")),e.push(new J("metageneration")),e.push(new J("name","fullPath",!0));function n(h,u){return ch(u)}const r=new J("name");r.xform=n,e.push(r);function o(h,u){return u!==void 0?Number(u):u}const a=new J("size");return a.xform=o,e.push(a),e.push(new J("timeCreated")),e.push(new J("updated")),e.push(new J("md5Hash",null,!0)),e.push(new J("cacheControl",null,!0)),e.push(new J("contentDisposition",null,!0)),e.push(new J("contentEncoding",null,!0)),e.push(new J("contentLanguage",null,!0)),e.push(new J("contentType",null,!0)),e.push(new J("metadata","customMetadata",!0)),Re=e,Re}function uh(e,n){function r(){const o=e.bucket,a=e.fullPath,h=new W(o,a);return n._makeStorageReference(h)}Object.defineProperty(e,"ref",{get:r})}function fh(e,n,r){const o={};o.type="file";const a=r.length;for(let h=0;h<a;h++){const u=r[h];o[u.local]=u.xform(o,n[u.server])}return uh(o,e),o}function ni(e,n,r){const o=Un(n);return o===null?null:fh(e,o,r)}function dh(e,n,r,o){const a=Un(n);if(a===null||!Me(a.downloadTokens))return null;const h=a.downloadTokens;if(h.length===0)return null;const u=encodeURIComponent;return h.split(",").map(E=>{const I=e.bucket,C=e.fullPath,S="/b/"+u(I)+"/o/"+u(C),O=ct(S,r,o),k=Jr({alt:"media",token:E});return O+k})[0]}function Ln(e,n){const r={},o=n.length;for(let a=0;a<o;a++){const h=n[a];h.writable&&(r[h.server]=e[h.local])}return JSON.stringify(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="prefixes",ir="items";function ph(e,n,r){const o={prefixes:[],items:[],nextPageToken:r.nextPageToken};if(r[rr])for(const a of r[rr]){const h=a.replace(/\/$/,""),u=e._makeStorageReference(new W(n,h));o.prefixes.push(u)}if(r[ir])for(const a of r[ir]){const h=e._makeStorageReference(new W(n,a.name));o.items.push(h)}return o}function gh(e,n,r){const o=Un(r);return o===null?null:ph(e,n,o)}class at{constructor(n,r,o,a){this.url=n,this.method=r,this.handler=o,this.timeout=a,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(e){if(!e)throw Nn()}function Ue(e,n){function r(o,a){const h=ni(e,a,n);return ot(h!==null),h}return r}function mh(e,n){function r(o,a){const h=gh(e,n,a);return ot(h!==null),h}return r}function _h(e,n){function r(o,a){const h=ni(e,a,n);return ot(h!==null),dh(h,a,e.host,e._protocol)}return r}function Lt(e){function n(r,o){let a;return r.getStatus()===401?r.getErrorText().includes("Firebase App Check token is invalid")?a=xl():a=Pl():r.getStatus()===402?a=Dl(e.bucket):r.getStatus()===403?a=Nl(e.path):a=o,a.status=r.getStatus(),a.serverResponse=o.serverResponse,a}return n}function he(e){const n=Lt(e);function r(o,a){let h=n(o,a);return o.getStatus()===404&&(h=Ol(e.path)),h.serverResponse=a.serverResponse,h}return r}function si(e,n,r){const o=n.fullServerUrl(),a=ct(o,e.host,e._protocol),h="GET",u=e.maxOperationRetryTime,w=new at(a,h,Ue(e,r),u);return w.errorHandler=he(n),w}function yh(e,n,r,o,a){const h={};n.isRoot?h.prefix="":h.prefix=n.path+"/",r.length>0&&(h.delimiter=r),o&&(h.pageToken=o),a&&(h.maxResults=a);const u=n.bucketOnlyServerUrl(),w=ct(u,e.host,e._protocol),v="GET",E=e.maxOperationRetryTime,I=new at(w,v,mh(e,n.bucket),E);return I.urlParams=h,I.errorHandler=Lt(n),I}function ri(e,n,r){const o=n.fullServerUrl(),a=ct(o,e.host,e._protocol)+"?alt=media",h="GET",u=e.maxOperationRetryTime,w=new at(a,h,(v,E)=>E,u);return w.errorHandler=he(n),r!==void 0&&(w.headers.Range=`bytes=0-${r}`,w.successCodes=[200,206]),w}function bh(e,n,r){const o=n.fullServerUrl(),a=ct(o,e.host,e._protocol),h="GET",u=e.maxOperationRetryTime,w=new at(a,h,_h(e,r),u);return w.errorHandler=he(n),w}function wh(e,n,r,o){const a=n.fullServerUrl(),h=ct(a,e.host,e._protocol),u="PATCH",w=Ln(r,o),v={"Content-Type":"application/json; charset=utf-8"},E=e.maxOperationRetryTime,I=new at(h,u,Ue(e,o),E);return I.headers=v,I.body=w,I.errorHandler=he(n),I}function vh(e,n){const r=n.fullServerUrl(),o=ct(r,e.host,e._protocol),a="DELETE",h=e.maxOperationRetryTime;function u(v,E){}const w=new at(o,a,u,h);return w.successCodes=[200,204],w.errorHandler=he(n),w}function Eh(e,n){return e&&e.contentType||n&&n.type()||"application/octet-stream"}function ii(e,n,r){const o=Object.assign({},r);return o.fullPath=e.path,o.size=n.size(),o.contentType||(o.contentType=Eh(null,n)),o}function oi(e,n,r,o,a){const h=n.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function w(){let P="";for(let N=0;N<2;N++)P=P+Math.random().toString().slice(2);return P}const v=w();u["Content-Type"]="multipart/related; boundary="+v;const E=ii(n,o,a),I=Ln(E,r),C="--"+v+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+I+`\r
--`+v+`\r
Content-Type: `+E.contentType+`\r
\r
`,S=`\r
--`+v+"--",O=it.getBlob(C,o,S);if(O===null)throw Xr();const k={name:E.fullPath},D=ct(h,e.host,e._protocol),R="POST",F=e.maxUploadRetryTime,H=new at(D,R,Ue(e,r),F);return H.urlParams=k,H.headers=u,H.body=O.uploadData(),H.errorHandler=Lt(n),H}class Pe{constructor(n,r,o,a){this.current=n,this.total=r,this.finalized=!!o,this.metadata=a||null}}function jn(e,n){let r=null;try{r=e.getResponseHeader("X-Goog-Upload-Status")}catch{ot(!1)}return ot(!!r&&(n||["active"]).indexOf(r)!==-1),r}function Th(e,n,r,o,a){const h=n.bucketOnlyServerUrl(),u=ii(n,o,a),w={name:u.fullPath},v=ct(h,e.host,e._protocol),E="POST",I={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${o.size()}`,"X-Goog-Upload-Header-Content-Type":u.contentType,"Content-Type":"application/json; charset=utf-8"},C=Ln(u,r),S=e.maxUploadRetryTime;function O(D){jn(D);let R;try{R=D.getResponseHeader("X-Goog-Upload-URL")}catch{ot(!1)}return ot(Me(R)),R}const k=new at(v,E,O,S);return k.urlParams=w,k.headers=I,k.body=C,k.errorHandler=Lt(n),k}function Sh(e,n,r,o){const a={"X-Goog-Upload-Command":"query"};function h(E){const I=jn(E,["active","final"]);let C=null;try{C=E.getResponseHeader("X-Goog-Upload-Size-Received")}catch{ot(!1)}C||ot(!1);const S=Number(C);return ot(!isNaN(S)),new Pe(S,o.size(),I==="final")}const u="POST",w=e.maxUploadRetryTime,v=new at(r,u,h,w);return v.headers=a,v.errorHandler=Lt(n),v}const or=256*1024;function Ih(e,n,r,o,a,h,u,w){const v=new Pe(0,0);if(u?(v.current=u.current,v.total=u.total):(v.current=0,v.total=o.size()),o.size()!==v.total)throw Ll();const E=v.total-v.current;let I=E;a>0&&(I=Math.min(I,a));const C=v.current,S=C+I;let O="";I===0?O="finalize":E===I?O="upload, finalize":O="upload";const k={"X-Goog-Upload-Command":O,"X-Goog-Upload-Offset":`${v.current}`},D=o.slice(C,S);if(D===null)throw Xr();function R(N,X){const $=jn(N,["active","final"]),g=v.current+I,c=o.size();let d;return $==="final"?d=Ue(n,h)(N,X):d=null,new Pe(g,c,$==="final",d)}const F="POST",H=n.maxUploadRetryTime,P=new at(r,F,R,H);return P.headers=k,P.body=D.uploadData(),P.progressCallback=w||null,P.errorHandler=Lt(e),P}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch={STATE_CHANGED:"state_changed"},Y={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function yn(e){switch(e){case"running":case"pausing":case"canceling":return Y.RUNNING;case"paused":return Y.PAUSED;case"success":return Y.SUCCESS;case"canceled":return Y.CANCELED;case"error":return Y.ERROR;default:return Y.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(n,r,o){if(Vl(n)||r!=null||o!=null)this.next=n,this.error=r??void 0,this.complete=o??void 0;else{const h=n;this.next=h.next,this.error=h.error,this.complete=h.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(e){return(...n)=>{Promise.resolve().then(()=>e(...n))}}class Hn{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=At.NO_ERROR,this.sendPromise_=new Promise(n=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=At.ABORT,n()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=At.NETWORK_ERROR,n()}),this.xhr_.addEventListener("load",()=>{n()})})}send(n,r,o,a,h){if(this.sent_)throw ee("cannot .send() more than once");if(Rn(n)&&o&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(r,n,!0),h!==void 0)for(const u in h)h.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,h[u].toString());return a!==void 0?this.xhr_.send(a):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ee("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ee("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ee("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ee("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(n){return this.xhr_.getResponseHeader(n)}addUploadProgressListener(n){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",n)}removeUploadProgressListener(n){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",n)}}class Ah extends Hn{initXhr(){this.xhr_.responseType="text"}}function nt(){return new Ah}class kh extends Hn{initXhr(){this.xhr_.responseType="arraybuffer"}}function Oh(){return new kh}class Dh extends Hn{initXhr(){this.xhr_.responseType="blob"}}function Ph(){return new Dh}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ai{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(n,r,o=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=n,this._blob=r,this._metadata=o,this._mappings=le(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=a=>{if(this._request=void 0,this._chunkMultiplier=1,a._codeEquals(B.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const h=this.isExponentialBackoffExpired();if(Yr(a.status,[]))if(h)a=Vr();else{this.sleepTime=Math.max(this.sleepTime*2,kl),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=a,this._transition("error")}},this._metadataErrorHandler=a=>{this._request=void 0,a._codeEquals(B.CANCELED)?this.completeTransitions_():(this._error=a,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((a,h)=>{this._resolve=a,this._reject=h,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const n=this._transferred;return r=>this._updateProgress(n+r)}_shouldDoResumable(n){return n.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(n){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([r,o])=>{switch(this._state){case"running":n(r,o);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((n,r)=>{const o=Th(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),a=this._ref.storage._makeRequest(o,nt,n,r);this._request=a,a.getPromise().then(h=>{this._request=void 0,this._uploadUrl=h,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const n=this._uploadUrl;this._resolveToken((r,o)=>{const a=Sh(this._ref.storage,this._ref._location,n,this._blob),h=this._ref.storage._makeRequest(a,nt,r,o);this._request=h,h.getPromise().then(u=>{u=u,this._request=void 0,this._updateProgress(u.current),this._needToFetchStatus=!1,u.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const n=or*this._chunkMultiplier,r=new Pe(this._transferred,this._blob.size()),o=this._uploadUrl;this._resolveToken((a,h)=>{let u;try{u=Ih(this._ref._location,this._ref.storage,o,this._blob,n,this._mappings,r,this._makeProgressCallback())}catch(v){this._error=v,this._transition("error");return}const w=this._ref.storage._makeRequest(u,nt,a,h,!1);this._request=w,w.getPromise().then(v=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(v.current),v.finalized?(this._metadata=v.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){or*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((n,r)=>{const o=si(this._ref.storage,this._ref._location,this._mappings),a=this._ref.storage._makeRequest(o,nt,n,r);this._request=a,a.getPromise().then(h=>{this._request=void 0,this._metadata=h,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((n,r)=>{const o=oi(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),a=this._ref.storage._makeRequest(o,nt,n,r);this._request=a,a.getPromise().then(h=>{this._request=void 0,this._metadata=h,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(n){const r=this._transferred;this._transferred=n,this._transferred!==r&&this._notifyObservers()}_transition(n){if(this._state!==n)switch(n){case"canceling":case"pausing":this._state=n,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const r=this._state==="paused";this._state=n,r&&(this._notifyObservers(),this._start());break;case"paused":this._state=n,this._notifyObservers();break;case"canceled":this._error=Wr(),this._state=n,this._notifyObservers();break;case"error":this._state=n,this._notifyObservers();break;case"success":this._state=n,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const n=yn(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:n,metadata:this._metadata,task:this,ref:this._ref}}on(n,r,o,a){const h=new Rh(r||void 0,o||void 0,a||void 0);return this._addObserver(h),()=>{this._removeObserver(h)}}then(n,r){return this._promise.then(n,r)}catch(n){return this.then(null,n)}_addObserver(n){this._observers.push(n),this._notifyObserver(n)}_removeObserver(n){const r=this._observers.indexOf(n);r!==-1&&this._observers.splice(r,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(r=>{this._notifyObserver(r)})}_finishPromise(){if(this._resolve!==void 0){let n=!0;switch(yn(this._state)){case Y.SUCCESS:Ut(this._resolve.bind(null,this.snapshot))();break;case Y.CANCELED:case Y.ERROR:const r=this._reject;Ut(r.bind(null,this._error))();break;default:n=!1;break}n&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(n){switch(yn(this._state)){case Y.RUNNING:case Y.PAUSED:n.next&&Ut(n.next.bind(n,this.snapshot))();break;case Y.SUCCESS:n.complete&&Ut(n.complete.bind(n))();break;case Y.CANCELED:case Y.ERROR:n.error&&Ut(n.error.bind(n,this._error))();break;default:n.error&&Ut(n.error.bind(n,this._error))()}}resume(){const n=this._state==="paused"||this._state==="pausing";return n&&this._transition("running"),n}pause(){const n=this._state==="running";return n&&this._transition("pausing"),n}cancel(){const n=this._state==="running"||this._state==="pausing";return n&&this._transition("canceling"),n}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(n,r){this._service=n,r instanceof W?this._location=r:this._location=W.makeFromUrl(r,n.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(n,r){return new xt(n,r)}get root(){const n=new W(this._location.bucket,"");return this._newRef(this._service,n)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ei(this._location.path)}get storage(){return this._service}get parent(){const n=ah(this._location.path);if(n===null)return null;const r=new W(this._location.bucket,n);return new xt(this._service,r)}_throwIfRoot(n){if(this._location.path==="")throw Kr(n)}}function xh(e,n){e._throwIfRoot("getBytes");const r=ri(e.storage,e._location,n);return e.storage.makeRequestWithTokens(r,Oh).then(o=>n!==void 0?o.slice(0,n):o)}function Nh(e,n){e._throwIfRoot("getBlob");const r=ri(e.storage,e._location,n);return e.storage.makeRequestWithTokens(r,Ph).then(o=>n!==void 0?o.slice(0,n):o)}function li(e,n,r){e._throwIfRoot("uploadBytes");const o=oi(e.storage,e._location,le(),new it(n,!0),r);return e.storage.makeRequestWithTokens(o,nt).then(a=>({metadata:a,ref:e}))}function Bh(e,n,r){return e._throwIfRoot("uploadBytesResumable"),new ai(e,new it(n),r)}function Mh(e,n,r=et.RAW,o){e._throwIfRoot("uploadString");const a=Mn(r,n),h={...o};return h.contentType==null&&a.contentType!=null&&(h.contentType=a.contentType),li(e,a.data,h)}function Uh(e){const n={prefixes:[],items:[]};return hi(e,n).then(()=>n)}async function hi(e,n,r){const a=await ci(e,{pageToken:r});n.prefixes.push(...a.prefixes),n.items.push(...a.items),a.nextPageToken!=null&&await hi(e,n,a.nextPageToken)}function ci(e,n){n!=null&&typeof n.maxResults=="number"&&Cn("options.maxResults",1,1e3,n.maxResults);const r=n||{},o=yh(e.storage,e._location,"/",r.pageToken,r.maxResults);return e.storage.makeRequestWithTokens(o,nt)}function Lh(e){e._throwIfRoot("getMetadata");const n=si(e.storage,e._location,le());return e.storage.makeRequestWithTokens(n,nt)}function jh(e,n){e._throwIfRoot("updateMetadata");const r=wh(e.storage,e._location,n,le());return e.storage.makeRequestWithTokens(r,nt)}function Hh(e){e._throwIfRoot("getDownloadURL");const n=bh(e.storage,e._location,le());return e.storage.makeRequestWithTokens(n,nt).then(r=>{if(r===null)throw jl();return r})}function Fh(e){e._throwIfRoot("deleteObject");const n=vh(e.storage,e._location);return e.storage.makeRequestWithTokens(n,nt)}function ui(e,n){const r=lh(e._location.path,n),o=new W(e._location.bucket,r);return new xt(e.storage,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(e){return/^[A-Za-z]+:\/\//.test(e)}function qh(e,n){return new xt(e,n)}function fi(e,n){if(e instanceof Fn){const r=e;if(r._bucket==null)throw Ul();const o=new xt(r,r._bucket);return n!=null?fi(o,n):o}else return n!==void 0?ui(e,n):e}function zh(e,n){if(n&&$h(n)){if(e instanceof Fn)return qh(e,n);throw De("To use ref(service, url), the first argument must be a Storage instance.")}else return fi(e,n)}function ar(e,n){const r=n==null?void 0:n[zr];return r==null?null:W.makeFromBucketSpec(r,e)}function Vh(e,n,r,o={}){e.host=`${n}:${r}`;const a=Rn(n);a&&(ro(`https://${e.host}/b`),lo("Storage",!0)),e._isUsingEmulator=!0,e._protocol=a?"https":"http";const{mockUserToken:h}=o;h&&(e._overrideAuthToken=typeof h=="string"?h:io(h,e.app.options.projectId))}class Fn{constructor(n,r,o,a,h,u=!1){this.app=n,this._authProvider=r,this._appCheckProvider=o,this._url=a,this._firebaseVersion=h,this._isUsingEmulator=u,this._bucket=null,this._host=qr,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Rl,this._maxUploadRetryTime=Al,this._requests=new Set,a!=null?this._bucket=W.makeFromBucketSpec(a,this._host):this._bucket=ar(this._host,this.app.options)}get host(){return this._host}set host(n){this._host=n,this._url!=null?this._bucket=W.makeFromBucketSpec(this._url,n):this._bucket=ar(n,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(n){Cn("time",0,Number.POSITIVE_INFINITY,n),this._maxUploadRetryTime=n}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(n){Cn("time",0,Number.POSITIVE_INFINITY,n),this._maxOperationRetryTime=n}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const n=this._authProvider.getImmediate({optional:!0});if(n){const r=await n.getToken();if(r!==null)return r.accessToken}return null}async _getAppCheckToken(){if(br(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=this._appCheckProvider.getImmediate({optional:!0});return n?(await n.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(n=>n.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(n){return new xt(this,n)}_makeRequest(n,r,o,a,h=!0){if(this._deleted)return new Fl(Gr());{const u=Zl(n,this._appId,o,a,r,this._firebaseVersion,h,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(n,r){const[o,a]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(n,r,o,a).getPromise()}}const lr="@firebase/storage",hr="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di="storage";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(e,n){return e=tt(e),xh(e,n)}function Xh(e,n,r){return e=tt(e),li(e,n,r)}function Gh(e,n,r,o){return e=tt(e),Mh(e,n,r,o)}function Kh(e,n,r){return e=tt(e),Bh(e,n,r)}function Jh(e){return e=tt(e),Lh(e)}function Yh(e,n){return e=tt(e),jh(e,n)}function Zh(e,n){return e=tt(e),ci(e,n)}function Qh(e){return e=tt(e),Uh(e)}function tc(e){return e=tt(e),Hh(e)}function ec(e){return e=tt(e),Fh(e)}function nc(e,n){return e=tt(e),zh(e,n)}function sc(e,n){return ui(e,n)}function rc(e=Er(),n){e=tt(e);const o=ae(e,di).getImmediate({identifier:n}),a=no("storage");return a&&pi(o,...a),o}function pi(e,n,r,o={}){Vh(e,n,r,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(e,n){return e=tt(e),Nh(e,n)}function oc(e,n){throw new Error("getStream() is only supported by NodeJS builds")}function ac(e,{instanceIdentifier:n}){const r=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return new Fn(r,o,a,n,wr)}function lc(){Ot(new kt(di,ac,"PUBLIC").setMultipleInstances(!0)),lt(lr,hr,""),lt(lr,hr,"esm2020")}lc();const Cc=Object.freeze(Object.defineProperty({__proto__:null,StorageError:L,get StorageErrorCode(){return B},StringFormat:et,_FbsBlob:it,_Location:W,_TaskEvent:Ch,_TaskState:Y,_UploadTask:ai,_dataFromString:Mn,_getChild:sc,_invalidArgument:De,_invalidRootOperation:Kr,connectStorageEmulator:pi,deleteObject:ec,getBlob:ic,getBytes:Wh,getDownloadURL:tc,getMetadata:Jh,getStorage:rc,getStream:oc,list:Zh,listAll:Qh,ref:nc,updateMetadata:Yh,uploadBytes:Xh,uploadBytesResumable:Kh,uploadString:Gh},Symbol.toStringTag,{value:"Module"}));export{Ic as $,_a as A,Yi as B,kt as C,ho as D,An as E,bt as F,gc as G,La as H,Oa as I,Ua as J,Na as K,Oo as L,Ba as M,ja as N,mc as O,Da as P,Ma as Q,_c as R,wr as S,co as T,Sc as U,yc as V,xa as W,Pa as X,so as Y,ur as Z,br as _,wc as a,Cc as a0,ae as b,hc as c,wn as d,Ec as e,eo as f,tt as g,Er as h,Rn as i,dr as j,pc as k,bc as l,bn as m,U as n,cc as o,ro as p,vc as q,dc as r,fc as s,uc as t,lo as u,Ot as v,lt as w,Tc as x,io as y,no as z};
