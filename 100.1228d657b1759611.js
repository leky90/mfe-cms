/*! For license information please see 100.1228d657b1759611.js.LICENSE.txt */
(self.webpackChunkcms=self.webpackChunkcms||[]).push([[100],{452:(e,t,n)=>{var u=n(9619),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},r=u.useState,c=u.useEffect,s=u.useLayoutEffect,i=u.useDebugValue;function a(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(e){return!0}}var f="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),u=r({inst:{value:n,getSnapshot:t}}),o=u[0].inst,f=u[1];return s((function(){o.value=n,o.getSnapshot=t,a(o)&&f({inst:o})}),[e,n,t]),c((function(){return a(o)&&f({inst:o}),e((function(){a(o)&&f({inst:o})}))}),[e]),i(n),n};t.useSyncExternalStore=void 0!==u.useSyncExternalStore?u.useSyncExternalStore:f},3100:(e,t,n)=>{e.exports=n(452)}}]);