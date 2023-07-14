/*! For license information please see 925.f0fa782a993dd456.js.LICENSE.txt */
(self.webpackChunkauth=self.webpackChunkauth||[]).push([[925],{452:(e,t,n)=>{var r=n(9619),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=r.useState,a=r.useEffect,s=r.useLayoutEffect,c=r.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,l=r[1];return s((function(){o.value=n,o.getSnapshot=t,u(o)&&l({inst:o})}),[e,n,t]),a((function(){return u(o)&&l({inst:o}),e((function(){u(o)&&l({inst:o})}))}),[e]),c(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},402:(e,t,n)=>{var r=n(9619),o=n(3100),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=o.useSyncExternalStore,s=r.useRef,c=r.useEffect,u=r.useMemo,l=r.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,n,r,o){var f=s(null);if(null===f.current){var d={hasValue:!1,value:null};f.current=d}else d=f.current;f=u((function(){function e(e){if(!c){if(c=!0,a=e,e=r(e),void 0!==o&&d.hasValue){var t=d.value;if(o(t,e))return s=t}return s=e}if(t=s,i(a,e))return t;var n=r(e);return void 0!==o&&o(t,n)?t:(a=e,s=n)}var a,s,c=!1,u=void 0===n?null:n;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]}),[t,n,r,o]);var p=a(e,f[0],f[1]);return c((function(){d.hasValue=!0,d.value=p}),[p]),l(p),p}},3100:(e,t,n)=>{e.exports=n(452)},1110:(e,t,n)=>{e.exports=n(402)},624:(e,t,n)=>{n.d(t,{Ue:()=>c});const r=e=>{let t;const n=new Set,r=(e,r)=>{const o="function"==typeof e?e(t):e;if(!Object.is(o,t)){const e=t;t=(null!=r?r:"object"!=typeof o)?o:Object.assign({},t,o),n.forEach((n=>n(t,e)))}},o=()=>t,i={setState:r,getState:o,subscribe:e=>(n.add(e),()=>n.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}};return t=e(r,o,i),i};var o=n(9619),i=n(1110);const{useSyncExternalStoreWithSelector:a}=i,s=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t="function"==typeof e?(e=>e?r(e):r)(e):e,n=(e,n)=>function(e,t=e.getState,n){const r=a(e.subscribe,e.getState,e.getServerState||e.getState,t,n);return(0,o.useDebugValue)(r),r}(t,e,n);return Object.assign(n,t),n},c=e=>e?s(e):s},7832:(e,t,n)=>{n.d(t,{mW:()=>i,tJ:()=>u});const r=new Map,o=e=>{const t=r.get(e);return t?Object.fromEntries(Object.entries(t.stores).map((([e,t])=>[e,t.getState()]))):{}},i=(e,t={})=>(n,i,s)=>{const{enabled:c,anonymousActionType:u,store:l,...f}=t;let d;try{d=(null==c||c)&&window.__REDUX_DEVTOOLS_EXTENSION__}catch(e){}if(!d)return c&&console.warn("[zustand devtools middleware] Please install/enable Redux devtools extension"),e(n,i,s);const{connection:p,...y}=((e,t,n)=>{if(void 0===e)return{type:"untracked",connection:t.connect(n)};const o=r.get(n.name);if(o)return{type:"tracked",store:e,...o};const i={connection:t.connect(n),stores:{}};return r.set(n.name,i),{type:"tracked",store:e,...i}})(l,d,f);let h=!0;s.setState=(e,t,r)=>{const a=n(e,t);if(!h)return a;const c=void 0===r?{type:u||"anonymous"}:"string"==typeof r?{type:r}:r;return void 0===l?(null==p||p.send(c,i()),a):(null==p||p.send({...c,type:`${l}/${c.type}`},{...o(f.name),[l]:s.getState()}),a)};const _=(...e)=>{const t=h;h=!1,n(...e),h=t},v=e(s.setState,i,s);if("untracked"===y.type?null==p||p.init(v):(y.stores[y.store]=s,null==p||p.init(Object.fromEntries(Object.entries(y.stores).map((([e,t])=>[e,e===y.store?v:t.getState()]))))),s.dispatchFromDevtools&&"function"==typeof s.dispatch){let e=!1;const t=s.dispatch;s.dispatch=(...n)=>{"__setState"!==n[0].type||e||(console.warn('[zustand devtools middleware] "__setState" action type is reserved to set state from the devtools. Avoid using it.'),e=!0),t(...n)}}return p.subscribe((e=>{var t;switch(e.type){case"ACTION":return"string"!=typeof e.payload?void console.error("[zustand devtools middleware] Unsupported action format"):a(e.payload,(e=>{if("__setState"!==e.type)s.dispatchFromDevtools&&"function"==typeof s.dispatch&&s.dispatch(e);else{if(void 0===l)return void _(e.state);1!==Object.keys(e.state).length&&console.error('\n                    [zustand devtools middleware] Unsupported __setState action format. \n                    When using \'store\' option in devtools(), the \'state\' should have only one key, which is a value of \'store\' that was passed in devtools(),\n                    and value of this only key should be a state object. Example: { "type": "__setState", "state": { "abc123Store": { "foo": "bar" } } }\n                    ');const t=e.state[l];if(null==t)return;JSON.stringify(s.getState())!==JSON.stringify(t)&&_(t)}}));case"DISPATCH":switch(e.payload.type){case"RESET":return _(v),void 0===l?null==p?void 0:p.init(s.getState()):null==p?void 0:p.init(o(f.name));case"COMMIT":return void 0===l?void(null==p||p.init(s.getState())):null==p?void 0:p.init(o(f.name));case"ROLLBACK":return a(e.state,(e=>{if(void 0===l)return _(e),void(null==p||p.init(s.getState()));_(e[l]),null==p||p.init(o(f.name))}));case"JUMP_TO_STATE":case"JUMP_TO_ACTION":return a(e.state,(e=>{void 0!==l?JSON.stringify(s.getState())!==JSON.stringify(e[l])&&_(e[l]):_(e)}));case"IMPORT_STATE":{const{nextLiftedState:n}=e.payload,r=null==(t=n.computedStates.slice(-1)[0])?void 0:t.state;if(!r)return;return _(void 0===l?r:r[l]),void(null==p||p.send(null,n))}case"PAUSE_RECORDING":return h=!h}return}})),v},a=(e,t)=>{let n;try{n=JSON.parse(e)}catch(e){console.error("[zustand devtools middleware] Could not parse the received json",e)}void 0!==n&&t(n)};function s(e,t){let n;try{n=e()}catch(e){return}return{getItem:e=>{var r;const o=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),i=null!=(r=n.getItem(e))?r:null;return i instanceof Promise?i.then(o):o(i)},setItem:(e,r)=>n.setItem(e,JSON.stringify(r,null==t?void 0:t.replacer)),removeItem:e=>n.removeItem(e)}}const c=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then:e=>c(e)(n),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>c(t)(e)}}},u=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),((e,t)=>(n,r,o)=>{let i={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const s=new Set,u=new Set;let l;try{l=i.getStorage()}catch(e){}if(!l)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...e)}),r,o);const f=c(i.serialize),d=()=>{const e=i.partialize({...r()});let t;const n=f({state:e,version:i.version}).then((e=>l.setItem(i.name,e))).catch((e=>{t=e}));if(t)throw t;return n},p=o.setState;o.setState=(e,t)=>{p(e,t),d()};const y=e(((...e)=>{n(...e),d()}),r,o);let h;const _=()=>{var e;if(!l)return;a=!1,s.forEach((e=>e(r())));const t=(null==(e=i.onRehydrateStorage)?void 0:e.call(i,r()))||void 0;return c(l.getItem.bind(l))(i.name).then((e=>{if(e)return i.deserialize(e)})).then((e=>{if(e){if("number"!=typeof e.version||e.version===i.version)return e.state;if(i.migrate)return i.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return h=i.merge(e,null!=(t=r())?t:y),n(h,!0),d()})).then((()=>{null==t||t(h,void 0),a=!0,u.forEach((e=>e(h)))})).catch((e=>{null==t||t(void 0,e)}))};return o.persist={setOptions:e=>{i={...i,...e},e.getStorage&&(l=e.getStorage())},clearStorage:()=>{null==l||l.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:e=>(s.add(e),()=>{s.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},_(),h||y})(e,t)):((e,t)=>(n,r,o)=>{let i={storage:s((()=>localStorage)),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},a=!1;const u=new Set,l=new Set;let f=i.storage;if(!f)return e(((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),n(...e)}),r,o);const d=()=>{const e=i.partialize({...r()});return f.setItem(i.name,{state:e,version:i.version})},p=o.setState;o.setState=(e,t)=>{p(e,t),d()};const y=e(((...e)=>{n(...e),d()}),r,o);let h;const _=()=>{var e,t;if(!f)return;a=!1,u.forEach((e=>{var t;return e(null!=(t=r())?t:y)}));const o=(null==(t=i.onRehydrateStorage)?void 0:t.call(i,null!=(e=r())?e:y))||void 0;return c(f.getItem.bind(f))(i.name).then((e=>{if(e){if("number"!=typeof e.version||e.version===i.version)return e.state;if(i.migrate)return i.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}})).then((e=>{var t;return h=i.merge(e,null!=(t=r())?t:y),n(h,!0),d()})).then((()=>{null==o||o(h,void 0),h=r(),a=!0,l.forEach((e=>e(h)))})).catch((e=>{null==o||o(void 0,e)}))};return o.persist={setOptions:e=>{i={...i,...e},e.storage&&(f=e.storage)},clearStorage:()=>{null==f||f.removeItem(i.name)},getOptions:()=>i,rehydrate:()=>_(),hasHydrated:()=>a,onHydrate:e=>(u.add(e),()=>{u.delete(e)}),onFinishHydration:e=>(l.add(e),()=>{l.delete(e)})},i.skipHydration||_(),h||y})(e,t)},5325:(e,t,n)=>{n.d(t,{n:()=>$});var r=Symbol.for("immer-nothing"),o=Symbol.for("immer-draftable"),i=Symbol.for("immer-state");function a(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var s=Object.getPrototypeOf;function c(e){return!!e&&!!e[i]}function u(e){return!!e&&(f(e)||Array.isArray(e)||!!e[o]||!!e.constructor?.[o]||_(e)||v(e))}var l=Object.prototype.constructor.toString();function f(e){if(!e||"object"!=typeof e)return!1;const t=s(e);if(null===t)return!0;const n=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return n===Object||"function"==typeof n&&Function.toString.call(n)===l}function d(e,t){0===p(e)?Object.entries(e).forEach((([n,r])=>{t(n,r,e)})):e.forEach(((n,r)=>t(r,n,e)))}function p(e){const t=e[i];return t?t.type_:Array.isArray(e)?1:_(e)?2:v(e)?3:0}function y(e,t){return 2===p(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function h(e,t,n){const r=p(e);2===r?e.set(t,n):3===r?e.add(n):e[t]=n}function _(e){return e instanceof Map}function v(e){return e instanceof Set}function g(e){return e.copy_||e.base_}function m(e,t){if(_(e))return new Map(e);if(v(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);if(!t&&f(e)){if(!s(e)){const t=Object.create(null);return Object.assign(t,e)}return{...e}}const n=Object.getOwnPropertyDescriptors(e);delete n[i];let r=Reflect.ownKeys(n);for(let t=0;t<r.length;t++){const o=r[t],i=n[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(n[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(s(e),n)}function S(e,t=!1){return w(e)||c(e)||!u(e)||(p(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&d(e,((e,t)=>S(t,!0)))),e}function b(){a(2)}function w(e){return Object.isFrozen(e)}var O,z={};function E(e){const t=z[e];return t||a(0),t}function P(){return O}function j(e,t){t&&(E("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function A(e){D(e),e.drafts_.forEach(C),e.drafts_=null}function D(e){e===O&&(O=e.parent_)}function I(e){return O={drafts_:[],parent_:O,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function C(e){const t=e[i];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function F(e,t){t.unfinalizedDrafts_=t.drafts_.length;const n=t.drafts_[0];return void 0!==e&&e!==n?(n[i].modified_&&(A(t),a(4)),u(e)&&(e=N(t,e),t.parent_||k(t,e)),t.patches_&&E("Patches").generateReplacementPatches_(n[i].base_,e,t.patches_,t.inversePatches_)):e=N(t,n,[]),A(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==r?e:void 0}function N(e,t,n){if(w(t))return t;const r=t[i];if(!r)return d(t,((o,i)=>T(e,r,t,o,i,n))),t;if(r.scope_!==e)return t;if(!r.modified_)return k(e,r.base_,!0),r.base_;if(!r.finalized_){r.finalized_=!0,r.scope_.unfinalizedDrafts_--;const t=r.copy_;let o=t,i=!1;3===r.type_&&(o=new Set(t),t.clear(),i=!0),d(o,((o,a)=>T(e,r,t,o,a,n,i))),k(e,t,!1),n&&e.patches_&&E("Patches").generatePatches_(r,n,e.patches_,e.inversePatches_)}return r.copy_}function T(e,t,n,r,o,i,a){if(c(o)){const a=N(e,o,i&&t&&3!==t.type_&&!y(t.assigned_,r)?i.concat(r):void 0);if(h(n,r,a),!c(a))return;e.canAutoFreeze_=!1}else a&&n.add(o);if(u(o)&&!w(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;N(e,o),t&&t.scope_.parent_||k(e,o)}}function k(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&S(t,n)}var R={get(e,t){if(t===i)return e;const n=g(e);if(!y(n,t))return function(e,t,n){const r=U(t,n);return r?"value"in r?r.value:r.get?.call(e.draft_):void 0}(e,n,t);const r=n[t];return e.finalized_||!u(r)?r:r===M(e.base_,t)?(H(e),e.copy_[t]=W(r,e)):r},has:(e,t)=>t in g(e),ownKeys:e=>Reflect.ownKeys(g(e)),set(e,t,n){const r=U(g(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){const r=M(g(e),t),s=r?.[i];if(s&&s.base_===n)return e.copy_[t]=n,e.assigned_[t]=!1,!0;if(((o=n)===(a=r)?0!==o||1/o==1/a:o!=o&&a!=a)&&(void 0!==n||y(e.base_,t)))return!0;H(e),J(e)}var o,a;return e.copy_[t]===n&&(void 0!==n||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=n,e.assigned_[t]=!0),!0},deleteProperty:(e,t)=>(void 0!==M(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,H(e),J(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){const n=g(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty(){a(11)},getPrototypeOf:e=>s(e.base_),setPrototypeOf(){a(12)}},x={};function M(e,t){const n=e[i];return(n?g(n):e)[t]}function U(e,t){if(!(t in e))return;let n=s(e);for(;n;){const e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=s(n)}}function J(e){e.modified_||(e.modified_=!0,e.parent_&&J(e.parent_))}function H(e){e.copy_||(e.copy_=m(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function W(e,t){const n=_(e)?E("MapSet").proxyMap_(e,t):v(e)?E("MapSet").proxySet_(e,t):function(e,t){const n=Array.isArray(e),r={type_:n?1:0,scope_:t?t.scope_:P(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let o=r,i=R;n&&(o=[r],i=x);const{revoke:a,proxy:s}=Proxy.revocable(o,i);return r.draft_=s,r.revoke_=a,s}(e,t);return(t?t.scope_:P()).drafts_.push(n),n}function L(e){if(!u(e)||w(e))return e;const t=e[i];let n;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=m(e,t.scope_.immer_.useStrictShallowCopy_)}else n=m(e,!0);return d(n,((e,t)=>{h(n,e,L(t))})),t&&(t.finalized_=!1),n}d(R,((e,t)=>{x[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),x.deleteProperty=function(e,t){return x.set.call(this,e,t,void 0)},x.set=function(e,t,n){return R.set.call(this,e[0],t,n,e[0])};var V=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,n)=>{if("function"==typeof e&&"function"!=typeof t){const n=t;t=e;const r=this;return function(e=n,...o){return r.produce(e,(e=>t.call(this,e,...o)))}}let o;if("function"!=typeof t&&a(6),void 0!==n&&"function"!=typeof n&&a(7),u(e)){const r=I(this),i=W(e,void 0);let a=!0;try{o=t(i),a=!1}finally{a?A(r):D(r)}return j(r,n),F(o,r)}if(!e||"object"!=typeof e){if(o=t(e),void 0===o&&(o=e),o===r&&(o=void 0),this.autoFreeze_&&S(o,!0),n){const t=[],r=[];E("Patches").generateReplacementPatches_(e,o,t,r),n(t,r)}return o}a(1)},this.produceWithPatches=(e,t)=>{if("function"==typeof e)return(t,...n)=>this.produceWithPatches(t,(t=>e(t,...n)));let n,r;return[this.produce(e,t,((e,t)=>{n=e,r=t})),n,r]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;u(e)||a(8),c(e)&&(c(t=e)||a(10),e=L(t));const n=I(this),r=W(e,void 0);return r[i].isManual_=!0,D(n),r}finishDraft(e,t){const n=e&&e[i];n&&n.isManual_||a(9);const{scope_:r}=n;return j(r,t),F(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){const r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}n>-1&&(t=t.slice(n+1));const r=E("Patches").applyPatches_;return c(e)?r(e,t):this.produce(e,(e=>r(e,t)))}},K=V.produce;V.produceWithPatches.bind(V),V.setAutoFreeze.bind(V),V.setUseStrictShallowCopy.bind(V),V.applyPatches.bind(V),V.createDraft.bind(V),V.finishDraft.bind(V);const $=e=>(t,n,r)=>(r.setState=(e,n,...r)=>{const o="function"==typeof e?K(e):e;return t(o,n,...r)},e(r.setState,n,r))}}]);