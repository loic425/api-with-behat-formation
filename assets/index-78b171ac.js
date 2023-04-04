(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(l){if(l.ep)return;l.ep=!0;const r=t(l);fetch(l.href,r)}})();function Ls(n,s){const t=Object.create(null),o=n.split(",");for(let l=0;l<o.length;l++)t[o[l]]=!0;return s?l=>!!t[l.toLowerCase()]:l=>!!t[l]}function tn(n){if(ae(n)){const s={};for(let t=0;t<n.length;t++){const o=n[t],l=Ve(o)?_f(o):tn(o);if(l)for(const r in l)s[r]=l[r]}return s}else{if(Ve(n))return n;if(Pe(n))return n}}const Bf=/;(?![^(]*\))/g,Cf=/:([^]+)/,kf=/\/\*.*?\*\//gs;function _f(n){const s={};return n.replace(kf,"").split(Bf).forEach(t=>{if(t){const o=t.split(Cf);o.length>1&&(s[o[0].trim()]=o[1].trim())}}),s}function ze(n){let s="";if(Ve(n))s=n;else if(ae(n))for(let t=0;t<n.length;t++){const o=ze(n[t]);o&&(s+=o+" ")}else if(Pe(n))for(const t in n)n[t]&&(s+=t+" ");return s.trim()}function pe(n){if(!n)return null;let{class:s,style:t}=n;return s&&!Ve(s)&&(n.class=ze(s)),t&&(n.style=tn(t)),n}const vf="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",Df="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",eu=Ls(vf),wf=Ls(Df),xf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",If=Ls(xf);function nu(n){return!!n||n===""}const at=n=>Ve(n)?n:n==null?"":ae(n)||Pe(n)&&(n.toString===lu||!ye(n.toString))?JSON.stringify(n,su,2):String(n),su=(n,s)=>s&&s.__v_isRef?su(n,s.value):Xs(s)?{[`Map(${s.size})`]:[...s.entries()].reduce((t,[o,l])=>(t[`${o} =>`]=l,t),{})}:ou(s)?{[`Set(${s.size})`]:[...s.values()]}:Pe(s)&&!ae(s)&&!au(s)?String(s):s,We=Object.freeze({}),Dt=Object.freeze([]),An=()=>{},tu=()=>!1,Sf=/^on[^a-z]/,Po=n=>Sf.test(n),gl=n=>n.startsWith("onUpdate:"),Ge=Object.assign,Pr=(n,s)=>{const t=n.indexOf(s);t>-1&&n.splice(t,1)},Ef=Object.prototype.hasOwnProperty,we=(n,s)=>Ef.call(n,s),ae=Array.isArray,Xs=n=>Ro(n)==="[object Map]",ou=n=>Ro(n)==="[object Set]",$f=n=>Ro(n)==="[object RegExp]",ye=n=>typeof n=="function",Ve=n=>typeof n=="string",Rr=n=>typeof n=="symbol",Pe=n=>n!==null&&typeof n=="object",Lr=n=>Pe(n)&&ye(n.then)&&ye(n.catch),lu=Object.prototype.toString,Ro=n=>lu.call(n),Nr=n=>Ro(n).slice(8,-1),au=n=>Ro(n)==="[object Object]",Wr=n=>Ve(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,rl=Ls(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tf=Ls("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"),Nl=n=>{const s=Object.create(null);return t=>s[t]||(s[t]=n(t))},Ff=/-(\w)/g,Xn=Nl(n=>n.replace(Ff,(s,t)=>t?t.toUpperCase():"")),Of=/\B([A-Z])/g,us=Nl(n=>n.replace(Of,"-$1").toLowerCase()),rt=Nl(n=>n.charAt(0).toUpperCase()+n.slice(1)),Hs=Nl(n=>n?`on${rt(n)}`:""),go=(n,s)=>!Object.is(n,s),_s=(n,s)=>{for(let t=0;t<n.length;t++)n[t](s)},Al=(n,s,t)=>{Object.defineProperty(n,s,{configurable:!0,enumerable:!1,value:t})},La=n=>{const s=parseFloat(n);return isNaN(s)?n:s},Mf=n=>{const s=Ve(n)?Number(n):NaN;return isNaN(s)?n:s};let Li;const ru=()=>Li||(Li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bl(n,...s){console.warn(`[Vue warn] ${n}`,...s)}let vn;class iu{constructor(s=!1){this.detached=s,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vn,!s&&vn&&(this.index=(vn.scopes||(vn.scopes=[])).push(this)-1)}get active(){return this._active}run(s){if(this._active){const t=vn;try{return vn=this,s()}finally{vn=t}}else bl("cannot run an inactive effect scope.")}on(){vn=this}off(){vn=this.parent}stop(s){if(this._active){let t,o;for(t=0,o=this.effects.length;t<o;t++)this.effects[t].stop();for(t=0,o=this.cleanups.length;t<o;t++)this.cleanups[t]();if(this.scopes)for(t=0,o=this.scopes.length;t<o;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!s){const l=this.parent.scopes.pop();l&&l!==this&&(this.parent.scopes[this.index]=l,l.index=this.index)}this.parent=void 0,this._active=!1}}}function Pf(n){return new iu(n)}function Rf(n,s=vn){s&&s.active&&s.effects.push(n)}function qr(){return vn}function cu(n){vn?vn.cleanups.push(n):bl("onScopeDispose() is called when there is no active effect scope to be associated with.")}const jr=n=>{const s=new Set(n);return s.w=0,s.n=0,s},pu=n=>(n.w&Os)>0,uu=n=>(n.n&Os)>0,Lf=({deps:n})=>{if(n.length)for(let s=0;s<n.length;s++)n[s].w|=Os},Nf=n=>{const{deps:s}=n;if(s.length){let t=0;for(let o=0;o<s.length;o++){const l=s[o];pu(l)&&!uu(l)?l.delete(n):s[t++]=l,l.w&=~Os,l.n&=~Os}s.length=t}},Bl=new WeakMap;let Qt=0,Os=1;const Na=30;let hn;const et=Symbol("iterate"),Wa=Symbol("Map key iterate");class Vr{constructor(s,t=null,o){this.fn=s,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Rf(this,o)}run(){if(!this.active)return this.fn();let s=hn,t=xs;for(;s;){if(s===this)return;s=s.parent}try{return this.parent=hn,hn=this,xs=!0,Os=1<<++Qt,Qt<=Na?Lf(this):Ni(this),this.fn()}finally{Qt<=Na&&Nf(this),Os=1<<--Qt,hn=this.parent,xs=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){hn===this?this.deferStop=!0:this.active&&(Ni(this),this.onStop&&this.onStop(),this.active=!1)}}function Ni(n){const{deps:s}=n;if(s.length){for(let t=0;t<s.length;t++)s[t].delete(n);s.length=0}}let xs=!0;const du=[];function ct(){du.push(xs),xs=!1}function pt(){const n=du.pop();xs=n===void 0?!0:n}function Bn(n,s,t){if(xs&&hn){let o=Bl.get(n);o||Bl.set(n,o=new Map);let l=o.get(t);l||o.set(t,l=jr()),hu(l,{effect:hn,target:n,type:s,key:t})}}function hu(n,s){let t=!1;Qt<=Na?uu(n)||(n.n|=Os,t=!pu(n)):t=!n.has(hn),t&&(n.add(hn),hn.deps.push(n),hn.onTrack&&hn.onTrack(Object.assign({effect:hn},s)))}function ds(n,s,t,o,l,r){const i=Bl.get(n);if(!i)return;let c=[];if(s==="clear")c=[...i.values()];else if(t==="length"&&ae(n)){const u=Number(o);i.forEach((d,h)=>{(h==="length"||h>=u)&&c.push(d)})}else switch(t!==void 0&&c.push(i.get(t)),s){case"add":ae(n)?Wr(t)&&c.push(i.get("length")):(c.push(i.get(et)),Xs(n)&&c.push(i.get(Wa)));break;case"delete":ae(n)||(c.push(i.get(et)),Xs(n)&&c.push(i.get(Wa)));break;case"set":Xs(n)&&c.push(i.get(et));break}const p={target:n,type:s,key:t,newValue:o,oldValue:l,oldTarget:r};if(c.length===1)c[0]&&qa(c[0],p);else{const u=[];for(const d of c)d&&u.push(...d);qa(jr(u),p)}}function qa(n,s){const t=ae(n)?n:[...n];for(const o of t)o.computed&&Wi(o,s);for(const o of t)o.computed||Wi(o,s)}function Wi(n,s){(n!==hn||n.allowRecurse)&&(n.onTrigger&&n.onTrigger(Ge({effect:n},s)),n.scheduler?n.scheduler():n.run())}function Wf(n,s){var t;return(t=Bl.get(n))===null||t===void 0?void 0:t.get(s)}const qf=Ls("__proto__,__v_isRef,__isVue"),fu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Rr)),jf=Wl(),Vf=Wl(!1,!0),Hf=Wl(!0),Gf=Wl(!0,!0),qi=Kf();function Kf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(s=>{n[s]=function(...t){const o=me(this);for(let r=0,i=this.length;r<i;r++)Bn(o,"get",r+"");const l=o[s](...t);return l===-1||l===!1?o[s](...t.map(me)):l}}),["push","pop","shift","unshift","splice"].forEach(s=>{n[s]=function(...t){ct();const o=me(this)[s].apply(this,t);return pt(),o}}),n}function Uf(n){const s=me(this);return Bn(s,"has",n),s.hasOwnProperty(n)}function Wl(n=!1,s=!1){return function(o,l,r){if(l==="__v_isReactive")return!n;if(l==="__v_isReadonly")return n;if(l==="__v_isShallow")return s;if(l==="__v_raw"&&r===(n?s?ku:Cu:s?Bu:bu).get(o))return o;const i=ae(o);if(!n){if(i&&we(qi,l))return Reflect.get(qi,l,r);if(l==="hasOwnProperty")return Uf}const c=Reflect.get(o,l,r);return(Rr(l)?fu.has(l):qf(l))||(n||Bn(o,"get",l),s)?c:Te(c)?i&&Wr(l)?c:c.value:Pe(c)?n?Zn(c):He(c):c}}const zf=yu(),Yf=yu(!0);function yu(n=!1){return function(t,o,l,r){let i=t[o];if(Ms(i)&&Te(i)&&!Te(l))return!1;if(!n&&(!Cl(l)&&!Ms(l)&&(i=me(i),l=me(l)),!ae(t)&&Te(i)&&!Te(l)))return i.value=l,!0;const c=ae(t)&&Wr(o)?Number(o)<t.length:we(t,o),p=Reflect.set(t,o,l,r);return t===me(r)&&(c?go(l,i)&&ds(t,"set",o,l,i):ds(t,"add",o,l)),p}}function Zf(n,s){const t=we(n,s),o=n[s],l=Reflect.deleteProperty(n,s);return l&&t&&ds(n,"delete",s,void 0,o),l}function Jf(n,s){const t=Reflect.has(n,s);return(!Rr(s)||!fu.has(s))&&Bn(n,"has",s),t}function Qf(n){return Bn(n,"iterate",ae(n)?"length":et),Reflect.ownKeys(n)}const mu={get:jf,set:zf,deleteProperty:Zf,has:Jf,ownKeys:Qf},gu={get:Hf,set(n,s){return bl(`Set operation on key "${String(s)}" failed: target is readonly.`,n),!0},deleteProperty(n,s){return bl(`Delete operation on key "${String(s)}" failed: target is readonly.`,n),!0}},Xf=Ge({},mu,{get:Vf,set:Yf}),ey=Ge({},gu,{get:Gf}),Hr=n=>n,ql=n=>Reflect.getPrototypeOf(n);function zo(n,s,t=!1,o=!1){n=n.__v_raw;const l=me(n),r=me(s);t||(s!==r&&Bn(l,"get",s),Bn(l,"get",r));const{has:i}=ql(l),c=o?Hr:t?Gr:Ao;if(i.call(l,s))return c(n.get(s));if(i.call(l,r))return c(n.get(r));n!==l&&n.get(s)}function Yo(n,s=!1){const t=this.__v_raw,o=me(t),l=me(n);return s||(n!==l&&Bn(o,"has",n),Bn(o,"has",l)),n===l?t.has(n):t.has(n)||t.has(l)}function Zo(n,s=!1){return n=n.__v_raw,!s&&Bn(me(n),"iterate",et),Reflect.get(n,"size",n)}function ji(n){n=me(n);const s=me(this);return ql(s).has.call(s,n)||(s.add(n),ds(s,"add",n,n)),this}function Vi(n,s){s=me(s);const t=me(this),{has:o,get:l}=ql(t);let r=o.call(t,n);r?Au(t,o,n):(n=me(n),r=o.call(t,n));const i=l.call(t,n);return t.set(n,s),r?go(s,i)&&ds(t,"set",n,s,i):ds(t,"add",n,s),this}function Hi(n){const s=me(this),{has:t,get:o}=ql(s);let l=t.call(s,n);l?Au(s,t,n):(n=me(n),l=t.call(s,n));const r=o?o.call(s,n):void 0,i=s.delete(n);return l&&ds(s,"delete",n,void 0,r),i}function Gi(){const n=me(this),s=n.size!==0,t=Xs(n)?new Map(n):new Set(n),o=n.clear();return s&&ds(n,"clear",void 0,void 0,t),o}function Jo(n,s){return function(o,l){const r=this,i=r.__v_raw,c=me(i),p=s?Hr:n?Gr:Ao;return!n&&Bn(c,"iterate",et),i.forEach((u,d)=>o.call(l,p(u),p(d),r))}}function Qo(n,s,t){return function(...o){const l=this.__v_raw,r=me(l),i=Xs(r),c=n==="entries"||n===Symbol.iterator&&i,p=n==="keys"&&i,u=l[n](...o),d=t?Hr:s?Gr:Ao;return!s&&Bn(r,"iterate",p?Wa:et),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:c?[d(h[0]),d(h[1])]:d(h),done:f}},[Symbol.iterator](){return this}}}}function ms(n){return function(...s){{const t=s[0]?`on key "${s[0]}" `:"";console.warn(`${rt(n)} operation ${t}failed: target is readonly.`,me(this))}return n==="delete"?!1:this}}function ny(){const n={get(r){return zo(this,r)},get size(){return Zo(this)},has:Yo,add:ji,set:Vi,delete:Hi,clear:Gi,forEach:Jo(!1,!1)},s={get(r){return zo(this,r,!1,!0)},get size(){return Zo(this)},has:Yo,add:ji,set:Vi,delete:Hi,clear:Gi,forEach:Jo(!1,!0)},t={get(r){return zo(this,r,!0)},get size(){return Zo(this,!0)},has(r){return Yo.call(this,r,!0)},add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear"),forEach:Jo(!0,!1)},o={get(r){return zo(this,r,!0,!0)},get size(){return Zo(this,!0)},has(r){return Yo.call(this,r,!0)},add:ms("add"),set:ms("set"),delete:ms("delete"),clear:ms("clear"),forEach:Jo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Qo(r,!1,!1),t[r]=Qo(r,!0,!1),s[r]=Qo(r,!1,!0),o[r]=Qo(r,!0,!0)}),[n,t,s,o]}const[sy,ty,oy,ly]=ny();function jl(n,s){const t=s?n?ly:oy:n?ty:sy;return(o,l,r)=>l==="__v_isReactive"?!n:l==="__v_isReadonly"?n:l==="__v_raw"?o:Reflect.get(we(t,l)&&l in o?t:o,l,r)}const ay={get:jl(!1,!1)},ry={get:jl(!1,!0)},iy={get:jl(!0,!1)},cy={get:jl(!0,!0)};function Au(n,s,t){const o=me(t);if(o!==t&&s.call(n,o)){const l=Nr(n);console.warn(`Reactive ${l} contains both the raw and reactive versions of the same object${l==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}const bu=new WeakMap,Bu=new WeakMap,Cu=new WeakMap,ku=new WeakMap;function py(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uy(n){return n.__v_skip||!Object.isExtensible(n)?0:py(Nr(n))}function He(n){return Ms(n)?n:Vl(n,!1,mu,ay,bu)}function dy(n){return Vl(n,!1,Xf,ry,Bu)}function Zn(n){return Vl(n,!0,gu,iy,Cu)}function _t(n){return Vl(n,!0,ey,cy,ku)}function Vl(n,s,t,o,l){if(!Pe(n))return console.warn(`value cannot be made reactive: ${String(n)}`),n;if(n.__v_raw&&!(s&&n.__v_isReactive))return n;const r=l.get(n);if(r)return r;const i=uy(n);if(i===0)return n;const c=new Proxy(n,i===2?o:t);return l.set(n,c),c}function nt(n){return Ms(n)?nt(n.__v_raw):!!(n&&n.__v_isReactive)}function Ms(n){return!!(n&&n.__v_isReadonly)}function Cl(n){return!!(n&&n.__v_isShallow)}function kl(n){return nt(n)||Ms(n)}function me(n){const s=n&&n.__v_raw;return s?me(s):n}function Hl(n){return Al(n,"__v_skip",!0),n}const Ao=n=>Pe(n)?He(n):n,Gr=n=>Pe(n)?Zn(n):n;function Kr(n){xs&&hn&&(n=me(n),hu(n.dep||(n.dep=jr()),{target:n,type:"get",key:"value"}))}function Ur(n,s){n=me(n);const t=n.dep;t&&qa(t,{target:n,type:"set",key:"value",newValue:s})}function Te(n){return!!(n&&n.__v_isRef===!0)}function z(n){return _u(n,!1)}function es(n){return _u(n,!0)}function _u(n,s){return Te(n)?n:new hy(n,s)}class hy{constructor(s,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?s:me(s),this._value=t?s:Ao(s)}get value(){return Kr(this),this._value}set value(s){const t=this.__v_isShallow||Cl(s)||Ms(s);s=t?s:me(s),go(s,this._rawValue)&&(this._rawValue=s,this._value=t?s:Ao(s),Ur(this,s))}}function v(n){return Te(n)?n.value:n}const fy={get:(n,s,t)=>v(Reflect.get(n,s,t)),set:(n,s,t,o)=>{const l=n[s];return Te(l)&&!Te(t)?(l.value=t,!0):Reflect.set(n,s,t,o)}};function vu(n){return nt(n)?n:new Proxy(n,fy)}class yy{constructor(s){this.dep=void 0,this.__v_isRef=!0;const{get:t,set:o}=s(()=>Kr(this),()=>Ur(this));this._get=t,this._set=o}get value(){return this._get()}set value(s){this._set(s)}}function Du(n){return new yy(n)}function my(n){kl(n)||console.warn("toRefs() expects a reactive object but received a plain one.");const s=ae(n)?new Array(n.length):{};for(const t in n)s[t]=Ay(n,t);return s}class gy{constructor(s,t,o){this._object=s,this._key=t,this._defaultValue=o,this.__v_isRef=!0}get value(){const s=this._object[this._key];return s===void 0?this._defaultValue:s}set value(s){this._object[this._key]=s}get dep(){return Wf(me(this._object),this._key)}}function Ay(n,s,t){const o=n[s];return Te(o)?o:new gy(n,s,t)}var wu;class by{constructor(s,t,o,l){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[wu]=!1,this._dirty=!0,this.effect=new Vr(s,()=>{this._dirty||(this._dirty=!0,Ur(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!l,this.__v_isReadonly=o}get value(){const s=me(this);return Kr(s),(s._dirty||!s._cacheable)&&(s._dirty=!1,s._value=s.effect.run()),s._value}set value(s){this._setter(s)}}wu="__v_isReadonly";function By(n,s,t=!1){let o,l;const r=ye(n);r?(o=n,l=()=>{console.warn("Write operation failed: computed value is readonly")}):(o=n.get,l=n.set);const i=new by(o,l,r||!l,t);return s&&!t&&(i.effect.onTrack=s.onTrack,i.effect.onTrigger=s.onTrigger),i}const st=[];function il(n){st.push(n)}function cl(){st.pop()}function P(n,...s){ct();const t=st.length?st[st.length-1].component:null,o=t&&t.appContext.config.warnHandler,l=Cy();if(o)ps(o,t,11,[n+s.join(""),t&&t.proxy,l.map(({vnode:r})=>`at <${ea(t,r.type)}>`).join(`
`),l]);else{const r=[`[Vue warn]: ${n}`,...s];l.length&&r.push(`
`,...ky(l)),console.warn(...r)}pt()}function Cy(){let n=st[st.length-1];if(!n)return[];const s=[];for(;n;){const t=s[0];t&&t.vnode===n?t.recurseCount++:s.push({vnode:n,recurseCount:0});const o=n.component&&n.component.parent;n=o&&o.vnode}return s}function ky(n){const s=[];return n.forEach((t,o)=>{s.push(...o===0?[]:[`
`],..._y(t))}),s}function _y({vnode:n,recurseCount:s}){const t=s>0?`... (${s} recursive calls)`:"",o=n.component?n.component.parent==null:!1,l=` at <${ea(n.component,n.type,o)}`,r=">"+t;return n.props?[l,...vy(n.props),r]:[l+r]}function vy(n){const s=[],t=Object.keys(n);return t.slice(0,3).forEach(o=>{s.push(...xu(o,n[o]))}),t.length>3&&s.push(" ..."),s}function xu(n,s,t){return Ve(s)?(s=JSON.stringify(s),t?s:[`${n}=${s}`]):typeof s=="number"||typeof s=="boolean"||s==null?t?s:[`${n}=${s}`]:Te(s)?(s=xu(n,me(s.value),!0),t?s:[`${n}=Ref<`,s,">"]):ye(s)?[`${n}=fn${s.name?`<${s.name}>`:""}`]:(s=me(s),t?s:[`${n}=`,s])}function Dy(n,s){n!==void 0&&(typeof n!="number"?P(`${s} is not a valid number - got ${JSON.stringify(n)}.`):isNaN(n)&&P(`${s} is NaN - the duration expression might be incorrect.`))}const zr={sp:"serverPrefetch hook",bc:"beforeCreate hook",c:"created hook",bm:"beforeMount hook",m:"mounted hook",bu:"beforeUpdate hook",u:"updated",bum:"beforeUnmount hook",um:"unmounted hook",a:"activated hook",da:"deactivated hook",ec:"errorCaptured hook",rtc:"renderTracked hook",rtg:"renderTriggered hook",[0]:"setup function",[1]:"render function",[2]:"watcher getter",[3]:"watcher callback",[4]:"watcher cleanup function",[5]:"native event handler",[6]:"component event handler",[7]:"vnode hook",[8]:"directive hook",[9]:"transition hook",[10]:"app errorHandler",[11]:"app warnHandler",[12]:"ref function",[13]:"async component loader",[14]:"scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"};function ps(n,s,t,o){let l;try{l=o?n(...o):n()}catch(r){Gl(r,s,t)}return l}function Mn(n,s,t,o){if(ye(n)){const r=ps(n,s,t,o);return r&&Lr(r)&&r.catch(i=>{Gl(i,s,t)}),r}const l=[];for(let r=0;r<n.length;r++)l.push(Mn(n[r],s,t,o));return l}function Gl(n,s,t,o=!0){const l=s?s.vnode:null;if(s){let r=s.parent;const i=s.proxy,c=zr[t];for(;r;){const u=r.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](n,i,c)===!1)return}r=r.parent}const p=s.appContext.config.errorHandler;if(p){ps(p,null,10,[n,i,c]);return}}wy(n,t,l,o)}function wy(n,s,t,o=!0){{const l=zr[s];if(t&&il(t),P(`Unhandled error${l?` during execution of ${l}`:""}`),t&&cl(),o)throw n;console.error(n)}}let bo=!1,ja=!1;const an=[];let zn=0;const wt=[];let Un=null,Bs=0;const Iu=Promise.resolve();let Yr=null;const xy=100;function sn(n){const s=Yr||Iu;return n?s.then(this?n.bind(this):n):s}function Iy(n){let s=zn+1,t=an.length;for(;s<t;){const o=s+t>>>1;Bo(an[o])<n?s=o+1:t=o}return s}function Kl(n){(!an.length||!an.includes(n,bo&&n.allowRecurse?zn+1:zn))&&(n.id==null?an.push(n):an.splice(Iy(n.id),0,n),Su())}function Su(){!bo&&!ja&&(ja=!0,Yr=Iu.then(Tu))}function Sy(n){const s=an.indexOf(n);s>zn&&an.splice(s,1)}function Eu(n){ae(n)?wt.push(...n):(!Un||!Un.includes(n,n.allowRecurse?Bs+1:Bs))&&wt.push(n),Su()}function Ki(n,s=bo?zn+1:0){for(n=n||new Map;s<an.length;s++){const t=an[s];if(t&&t.pre){if(Zr(n,t))continue;an.splice(s,1),s--,t()}}}function $u(n){if(wt.length){const s=[...new Set(wt)];if(wt.length=0,Un){Un.push(...s);return}for(Un=s,n=n||new Map,Un.sort((t,o)=>Bo(t)-Bo(o)),Bs=0;Bs<Un.length;Bs++)Zr(n,Un[Bs])||Un[Bs]();Un=null,Bs=0}}const Bo=n=>n.id==null?1/0:n.id,Ey=(n,s)=>{const t=Bo(n)-Bo(s);if(t===0){if(n.pre&&!s.pre)return-1;if(s.pre&&!n.pre)return 1}return t};function Tu(n){ja=!1,bo=!0,n=n||new Map,an.sort(Ey);const s=t=>Zr(n,t);try{for(zn=0;zn<an.length;zn++){const t=an[zn];if(t&&t.active!==!1){if(s(t))continue;ps(t,null,14)}}}finally{zn=0,an.length=0,$u(n),bo=!1,Yr=null,(an.length||wt.length)&&Tu(n)}}function Zr(n,s){if(!n.has(s))n.set(s,1);else{const t=n.get(s);if(t>xy){const o=s.ownerInstance,l=o&&vo(o.type);return P(`Maximum recursive updates exceeded${l?` in component <${l}>`:""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`),!0}else n.set(s,t+1)}}let Is=!1;const Bt=new Set;ru().__VUE_HMR_RUNTIME__={createRecord:aa(Fu),rerender:aa(Fy),reload:aa(Oy)};const it=new Map;function $y(n){const s=n.type.__hmrId;let t=it.get(s);t||(Fu(s,n.type),t=it.get(s)),t.instances.add(n)}function Ty(n){it.get(n.type.__hmrId).instances.delete(n)}function Fu(n,s){return it.has(n)?!1:(it.set(n,{initialDef:to(s),instances:new Set}),!0)}function to(n){return ud(n)?n.__vccOpts:n}function Fy(n,s){const t=it.get(n);t&&(t.initialDef.render=s,[...t.instances].forEach(o=>{s&&(o.render=s,to(o.type).render=s),o.renderCache=[],Is=!0,o.update(),Is=!1}))}function Oy(n,s){const t=it.get(n);if(!t)return;s=to(s),Ui(t.initialDef,s);const o=[...t.instances];for(const l of o){const r=to(l.type);Bt.has(r)||(r!==t.initialDef&&Ui(r,s),Bt.add(r)),l.appContext.optionsCache.delete(l.type),l.ceReload?(Bt.add(r),l.ceReload(s.styles),Bt.delete(r)):l.parent?Kl(l.parent.update):l.appContext.reload?l.appContext.reload():typeof window<"u"?window.location.reload():console.warn("[HMR] Root or manually mounted instance modified. Full reload required.")}Eu(()=>{for(const l of o)Bt.delete(to(l.type))})}function Ui(n,s){Ge(n,s);for(const t in n)t!=="__file"&&!(t in s)&&delete n[t]}function aa(n){return(s,t)=>{try{return n(s,t)}catch(o){console.error(o),console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.")}}}let Yn,Xt=[],Va=!1;function Lo(n,...s){Yn?Yn.emit(n,...s):Va||Xt.push({event:n,args:s})}function Ou(n,s){var t,o;Yn=n,Yn?(Yn.enabled=!0,Xt.forEach(({event:l,args:r})=>Yn.emit(l,...r)),Xt=[]):typeof window<"u"&&window.HTMLElement&&!(!((o=(t=window.navigator)===null||t===void 0?void 0:t.userAgent)===null||o===void 0)&&o.includes("jsdom"))?((s.__VUE_DEVTOOLS_HOOK_REPLAY__=s.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(r=>{Ou(r,s)}),setTimeout(()=>{Yn||(s.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Va=!0,Xt=[])},3e3)):(Va=!0,Xt=[])}function My(n,s){Lo("app:init",n,s,{Fragment:Oe,Text:jo,Comment:Xe,Static:pl})}function Py(n){Lo("app:unmount",n)}const Ha=Jr("component:added"),Mu=Jr("component:updated"),Ry=Jr("component:removed"),Ly=n=>{Yn&&typeof Yn.cleanupBuffer=="function"&&!Yn.cleanupBuffer(n)&&Ry(n)};function Jr(n){return s=>{Lo(n,s.appContext.app,s.uid,s.parent?s.parent.uid:void 0,s)}}const Ny=Pu("perf:start"),Wy=Pu("perf:end");function Pu(n){return(s,t,o)=>{Lo(n,s.appContext.app,s.uid,s,t,o)}}function qy(n,s,t){Lo("component:emit",n.appContext.app,n,s,t)}function jy(n,s,...t){if(n.isUnmounted)return;const o=n.vnode.props||We;{const{emitsOptions:d,propsOptions:[h]}=n;if(d)if(!(s in d))(!h||!(Hs(s)in h))&&P(`Component emitted event "${s}" but it is neither declared in the emits option nor as an "${Hs(s)}" prop.`);else{const f=d[s];ye(f)&&(f(...t)||P(`Invalid event arguments: event validation failed for event "${s}".`))}}let l=t;const r=s.startsWith("update:"),i=r&&s.slice(7);if(i&&i in o){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:h,trim:f}=o[d]||We;f&&(l=t.map(m=>Ve(m)?m.trim():m)),h&&(l=t.map(La))}qy(n,s,l);{const d=s.toLowerCase();d!==s&&o[Hs(d)]&&P(`Event "${d}" is emitted in component ${ea(n,n.type)} but the handler is registered for "${s}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${us(s)}" instead of "${s}".`)}let c,p=o[c=Hs(s)]||o[c=Hs(Xn(s))];!p&&r&&(p=o[c=Hs(us(s))]),p&&Mn(p,n,6,l);const u=o[c+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,Mn(u,n,6,l)}}function Ru(n,s,t=!1){const o=s.emitsCache,l=o.get(n);if(l!==void 0)return l;const r=n.emits;let i={},c=!1;if(!ye(n)){const p=u=>{const d=Ru(u,s,!0);d&&(c=!0,Ge(i,d))};!t&&s.mixins.length&&s.mixins.forEach(p),n.extends&&p(n.extends),n.mixins&&n.mixins.forEach(p)}return!r&&!c?(Pe(n)&&o.set(n,null),null):(ae(r)?r.forEach(p=>i[p]=null):Ge(i,r),Pe(n)&&o.set(n,i),i)}function Ul(n,s){return!n||!Po(s)?!1:(s=s.slice(2).replace(/Once$/,""),we(n,s[0].toLowerCase()+s.slice(1))||we(n,us(s))||we(n,s))}let Qe=null,zl=null;function _l(n){const s=Qe;return Qe=n,zl=n&&n.type.__scopeId||null,s}function l4(n){zl=n}function a4(){zl=null}function T(n,s=Qe,t){if(!s||n._n)return n;const o=(...l)=>{o._d&&ac(-1);const r=_l(s);let i;try{i=n(...l)}finally{_l(r),o._d&&ac(1)}return Mu(s),i};return o._n=!0,o._c=!0,o._d=!0,o}let Ga=!1;function vl(){Ga=!0}function ra(n){const{type:s,vnode:t,proxy:o,withProxy:l,props:r,propsOptions:[i],slots:c,attrs:p,emit:u,render:d,renderCache:h,data:f,setupState:m,ctx:y,inheritAttrs:A}=n;let b,_;const C=_l(n);Ga=!1;try{if(t.shapeFlag&4){const $=l||o;b=qn(d.call($,$,h,r,m,f,y)),_=p}else{const $=s;p===r&&vl(),b=qn($.length>1?$(r,{get attrs(){return vl(),p},slots:c,emit:u}):$(r,null)),_=s.props?p:Hy(p)}}catch($){lo.length=0,Gl($,n,1),b=M(Xe)}let k=b,w;if(b.patchFlag>0&&b.patchFlag&2048&&([k,w]=Vy(b)),_&&A!==!1){const $=Object.keys(_),{shapeFlag:R}=k;if($.length){if(R&7)i&&$.some(gl)&&(_=Gy(_,i)),k=Vn(k,_);else if(!Ga&&k.type!==Xe){const H=Object.keys(p),E=[],j=[];for(let ee=0,he=H.length;ee<he;ee++){const Z=H[ee];Po(Z)?gl(Z)||E.push(Z[2].toLowerCase()+Z.slice(3)):j.push(Z)}j.length&&P(`Extraneous non-props attributes (${j.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`),E.length&&P(`Extraneous non-emits event listeners (${E.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`)}}}return t.dirs&&(zi(k)||P("Runtime directive used on component with non-element root node. The directives will not function as intended."),k=Vn(k),k.dirs=k.dirs?k.dirs.concat(t.dirs):t.dirs),t.transition&&(zi(k)||P("Component inside <Transition> renders non-element root node that cannot be animated."),k.transition=t.transition),w?w(k):b=k,_l(C),b}const Vy=n=>{const s=n.children,t=n.dynamicChildren,o=Lu(s);if(!o)return[n,void 0];const l=s.indexOf(o),r=t?t.indexOf(o):-1,i=c=>{s[l]=c,t&&(r>-1?t[r]=c:c.patchFlag>0&&(n.dynamicChildren=[...t,c]))};return[qn(o),i]};function Lu(n){let s;for(let t=0;t<n.length;t++){const o=n[t];if(Ps(o)){if(o.type!==Xe||o.children==="v-if"){if(s)return;s=o}}else return}return s}const Hy=n=>{let s;for(const t in n)(t==="class"||t==="style"||Po(t))&&((s||(s={}))[t]=n[t]);return s},Gy=(n,s)=>{const t={};for(const o in n)(!gl(o)||!(o.slice(9)in s))&&(t[o]=n[o]);return t},zi=n=>n.shapeFlag&7||n.type===Xe;function Ky(n,s,t){const{props:o,children:l,component:r}=n,{props:i,children:c,patchFlag:p}=s,u=r.emitsOptions;if((l||c)&&Is||s.dirs||s.transition)return!0;if(t&&p>=0){if(p&1024)return!0;if(p&16)return o?Yi(o,i,u):!!i;if(p&8){const d=s.dynamicProps;for(let h=0;h<d.length;h++){const f=d[h];if(i[f]!==o[f]&&!Ul(u,f))return!0}}}else return(l||c)&&(!c||!c.$stable)?!0:o===i?!1:o?i?Yi(o,i,u):!0:!!i;return!1}function Yi(n,s,t){const o=Object.keys(s);if(o.length!==Object.keys(n).length)return!0;for(let l=0;l<o.length;l++){const r=o[l];if(s[r]!==n[r]&&!Ul(t,r))return!0}return!1}function Uy({vnode:n,parent:s},t){for(;s&&s.subTree===n;)(n=s.vnode).el=t,s=s.parent}const Nu=n=>n.__isSuspense;function zy(n,s){s&&s.pendingBranch?ae(n)?s.effects.push(...n):s.effects.push(n):Eu(n)}function Dn(n,s){if(!Ke)P("provide() can only be used inside setup().");else{let t=Ke.provides;const o=Ke.parent&&Ke.parent.provides;o===t&&(t=Ke.provides=Object.create(o)),t[n]=s}}function N(n,s,t=!1){const o=Ke||Qe;if(o){const l=o.parent==null?o.vnode.appContext&&o.vnode.appContext.provides:o.parent.provides;if(l&&n in l)return l[n];if(arguments.length>1)return t&&ye(s)?s.call(o.proxy):s;P(`injection "${String(n)}" not found.`)}else P("inject() can only be used inside setup() or functional components.")}function ut(n,s){return Qr(n,null,s)}const Xo={};function Be(n,s,t){return ye(s)||P("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."),Qr(n,s,t)}function Qr(n,s,{immediate:t,deep:o,flush:l,onTrack:r,onTrigger:i}=We){s||(t!==void 0&&P('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'),o!==void 0&&P('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));const c=w=>{P("Invalid watch source: ",w,"A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.")},p=qr()===(Ke==null?void 0:Ke.scope)?Ke:null;let u,d=!1,h=!1;if(Te(n)?(u=()=>n.value,d=Cl(n)):nt(n)?(u=()=>n,o=!0):ae(n)?(h=!0,d=n.some(w=>nt(w)||Cl(w)),u=()=>n.map(w=>{if(Te(w))return w.value;if(nt(w))return Zs(w);if(ye(w))return ps(w,p,2);c(w)})):ye(n)?s?u=()=>ps(n,p,2):u=()=>{if(!(p&&p.isUnmounted))return f&&f(),Mn(n,p,3,[m])}:(u=An,c(n)),s&&o){const w=u;u=()=>Zs(w())}let f,m=w=>{f=C.onStop=()=>{ps(w,p,4)}},y;if(_o)if(m=An,s?t&&Mn(s,p,3,[u(),h?[]:void 0,m]):u(),l==="sync"){const w=eg();y=w.__watcherHandles||(w.__watcherHandles=[])}else return An;let A=h?new Array(n.length).fill(Xo):Xo;const b=()=>{if(C.active)if(s){const w=C.run();(o||d||(h?w.some(($,R)=>go($,A[R])):go(w,A)))&&(f&&f(),Mn(s,p,3,[w,A===Xo?void 0:h&&A[0]===Xo?[]:A,m]),A=w)}else C.run()};b.allowRecurse=!!s;let _;l==="sync"?_=b:l==="post"?_=()=>nn(b,p&&p.suspense):(b.pre=!0,p&&(b.id=p.uid),_=()=>Kl(b));const C=new Vr(u,_);C.onTrack=r,C.onTrigger=i,s?t?b():A=C.run():l==="post"?nn(C.run.bind(C),p&&p.suspense):C.run();const k=()=>{C.stop(),p&&p.scope&&Pr(p.scope.effects,C)};return y&&y.push(k),k}function Yy(n,s,t){const o=this.proxy,l=Ve(n)?n.includes(".")?Wu(o,n):()=>o[n]:n.bind(o,o);let r;ye(s)?r=s:(r=s.handler,t=s);const i=Ke;Ft(this);const c=Qr(l,r.bind(o),t);return i?Ft(i):ot(),c}function Wu(n,s){const t=s.split(".");return()=>{let o=n;for(let l=0;l<t.length&&o;l++)o=o[t[l]];return o}}function Zs(n,s){if(!Pe(n)||n.__v_skip||(s=s||new Set,s.has(n)))return n;if(s.add(n),Te(n))Zs(n.value,s);else if(ae(n))for(let t=0;t<n.length;t++)Zs(n[t],s);else if(ou(n)||Xs(n))n.forEach(t=>{Zs(t,s)});else if(au(n))for(const t in n)Zs(n[t],s);return n}function qu(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return dt(()=>{n.isMounted=!0}),Wo(()=>{n.isUnmounting=!0}),n}const $n=[Function,Array],Zy={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:$n,onEnter:$n,onAfterEnter:$n,onEnterCancelled:$n,onBeforeLeave:$n,onLeave:$n,onAfterLeave:$n,onLeaveCancelled:$n,onBeforeAppear:$n,onAppear:$n,onAfterAppear:$n,onAppearCancelled:$n},setup(n,{slots:s}){const t=En(),o=qu();let l;return()=>{const r=s.default&&Xr(s.default(),!0);if(!r||!r.length)return;let i=r[0];if(r.length>1){let A=!1;for(const b of r)if(b.type!==Xe){if(A){P("<transition> can only be used on a single element or component. Use <transition-group> for lists.");break}i=b,A=!0}}const c=me(n),{mode:p}=c;if(p&&p!=="in-out"&&p!=="out-in"&&p!=="default"&&P(`invalid <transition> mode: ${p}`),o.isLeaving)return ia(i);const u=Zi(i);if(!u)return ia(i);const d=Co(u,c,o,t);Tt(u,d);const h=t.subTree,f=h&&Zi(h);let m=!1;const{getTransitionKey:y}=u.type;if(y){const A=y();l===void 0?l=A:A!==l&&(l=A,m=!0)}if(f&&f.type!==Xe&&(!Ds(u,f)||m)){const A=Co(f,c,o,t);if(Tt(f,A),p==="out-in")return o.isLeaving=!0,A.afterLeave=()=>{o.isLeaving=!1,t.update.active!==!1&&t.update()},ia(i);p==="in-out"&&u.type!==Xe&&(A.delayLeave=(b,_,C)=>{const k=ju(o,f);k[String(f.key)]=f,b._leaveCb=()=>{_(),b._leaveCb=void 0,delete d.delayedLeave},d.delayedLeave=C})}return i}}},Jy=Zy;function ju(n,s){const{leavingVNodes:t}=n;let o=t.get(s.type);return o||(o=Object.create(null),t.set(s.type,o)),o}function Co(n,s,t,o){const{appear:l,mode:r,persisted:i=!1,onBeforeEnter:c,onEnter:p,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:h,onLeave:f,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:A,onAppear:b,onAfterAppear:_,onAppearCancelled:C}=s,k=String(n.key),w=ju(t,n),$=(E,j)=>{E&&Mn(E,o,9,j)},R=(E,j)=>{const ee=j[1];$(E,j),ae(E)?E.every(he=>he.length<=1)&&ee():E.length<=1&&ee()},H={mode:r,persisted:i,beforeEnter(E){let j=c;if(!t.isMounted)if(l)j=A||c;else return;E._leaveCb&&E._leaveCb(!0);const ee=w[k];ee&&Ds(n,ee)&&ee.el._leaveCb&&ee.el._leaveCb(),$(j,[E])},enter(E){let j=p,ee=u,he=d;if(!t.isMounted)if(l)j=b||p,ee=_||u,he=C||d;else return;let Z=!1;const _e=E._enterCb=Fe=>{Z||(Z=!0,Fe?$(he,[E]):$(ee,[E]),H.delayedLeave&&H.delayedLeave(),E._enterCb=void 0)};j?R(j,[E,_e]):_e()},leave(E,j){const ee=String(n.key);if(E._enterCb&&E._enterCb(!0),t.isUnmounting)return j();$(h,[E]);let he=!1;const Z=E._leaveCb=_e=>{he||(he=!0,j(),_e?$(y,[E]):$(m,[E]),E._leaveCb=void 0,w[ee]===n&&delete w[ee])};w[ee]=n,f?R(f,[E,Z]):Z()},clone(E){return Co(E,s,t,o)}};return H}function ia(n){if(No(n))return n=Vn(n),n.children=null,n}function Zi(n){return No(n)?n.children?n.children[0]:void 0:n}function Tt(n,s){n.shapeFlag&6&&n.component?Tt(n.component.subTree,s):n.shapeFlag&128?(n.ssContent.transition=s.clone(n.ssContent),n.ssFallback.transition=s.clone(n.ssFallback)):n.transition=s}function Xr(n,s=!1,t){let o=[],l=0;for(let r=0;r<n.length;r++){let i=n[r];const c=t==null?i.key:String(t)+String(i.key!=null?i.key:r);i.type===Oe?(i.patchFlag&128&&l++,o=o.concat(Xr(i.children,s,c))):(s||i.type!==Xe)&&o.push(c!=null?Vn(i,{key:c}):i)}if(l>1)for(let r=0;r<o.length;r++)o[r].patchFlag=-2;return o}function Re(n){return ye(n)?{setup:n,name:n.name}:n}const xt=n=>!!n.type.__asyncLoader,No=n=>n.type.__isKeepAlive,Qy={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(n,{slots:s}){const t=En(),o=t.ctx;if(!o.renderer)return()=>{const C=s.default&&s.default();return C&&C.length===1?C[0]:C};const l=new Map,r=new Set;let i=null;t.__v_cache=l;const c=t.suspense,{renderer:{p,m:u,um:d,o:{createElement:h}}}=o,f=h("div");o.activate=(C,k,w,$,R)=>{const H=C.component;u(C,k,w,0,c),p(H.vnode,C,k,w,H,c,$,C.slotScopeIds,R),nn(()=>{H.isDeactivated=!1,H.a&&_s(H.a);const E=C.props&&C.props.onVnodeMounted;E&&Tn(E,H.parent,C)},c),Ha(H)},o.deactivate=C=>{const k=C.component;u(C,f,null,1,c),nn(()=>{k.da&&_s(k.da);const w=C.props&&C.props.onVnodeUnmounted;w&&Tn(w,k.parent,C),k.isDeactivated=!0},c),Ha(k)};function m(C){ca(C),d(C,t,c,!0)}function y(C){l.forEach((k,w)=>{const $=vo(k.type);$&&(!C||!C($))&&A(w)})}function A(C){const k=l.get(C);!i||!Ds(k,i)?m(k):i&&ca(i),l.delete(C),r.delete(C)}Be(()=>[n.include,n.exclude],([C,k])=>{C&&y(w=>eo(C,w)),k&&y(w=>!eo(k,w))},{flush:"post",deep:!0});let b=null;const _=()=>{b!=null&&l.set(b,pa(t.subTree))};return dt(_),Zl(_),Wo(()=>{l.forEach(C=>{const{subTree:k,suspense:w}=t,$=pa(k);if(C.type===$.type&&C.key===$.key){ca($);const R=$.component.da;R&&nn(R,w);return}m(C)})}),()=>{if(b=null,!s.default)return null;const C=s.default(),k=C[0];if(C.length>1)return P("KeepAlive should contain exactly one component child."),i=null,C;if(!Ps(k)||!(k.shapeFlag&4)&&!(k.shapeFlag&128))return i=null,k;let w=pa(k);const $=w.type,R=vo(xt(w)?w.type.__asyncResolved||{}:$),{include:H,exclude:E,max:j}=n;if(H&&(!R||!eo(H,R))||E&&R&&eo(E,R))return i=w,k;const ee=w.key==null?$:w.key,he=l.get(ee);return w.el&&(w=Vn(w),k.shapeFlag&128&&(k.ssContent=w)),b=ee,he?(w.el=he.el,w.component=he.component,w.transition&&Tt(w,w.transition),w.shapeFlag|=512,r.delete(ee),r.add(ee)):(r.add(ee),j&&r.size>parseInt(j,10)&&A(r.values().next().value)),w.shapeFlag|=256,i=w,Nu(k.type)?k:w}}},Vu=Qy;function eo(n,s){return ae(n)?n.some(t=>eo(t,s)):Ve(n)?n.split(",").includes(s):$f(n)?n.test(s):!1}function Hu(n,s){Ku(n,"a",s)}function Gu(n,s){Ku(n,"da",s)}function Ku(n,s,t=Ke){const o=n.__wdc||(n.__wdc=()=>{let l=t;for(;l;){if(l.isDeactivated)return;l=l.parent}return n()});if(Yl(s,o,t),t){let l=t.parent;for(;l&&l.parent;)No(l.parent.vnode)&&Xy(o,s,t,l),l=l.parent}}function Xy(n,s,t,o){const l=Yl(s,n,o,!0);Jl(()=>{Pr(o[s],l)},t)}function ca(n){n.shapeFlag&=-257,n.shapeFlag&=-513}function pa(n){return n.shapeFlag&128?n.ssContent:n}function Yl(n,s,t=Ke,o=!1){if(t){const l=t[n]||(t[n]=[]),r=s.__weh||(s.__weh=(...i)=>{if(t.isUnmounted)return;ct(),Ft(t);const c=Mn(s,t,n,i);return ot(),pt(),c});return o?l.unshift(r):l.push(r),r}else{const l=Hs(zr[n].replace(/ hook$/,""));P(`${l} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`)}}const fs=n=>(s,t=Ke)=>(!_o||n==="sp")&&Yl(n,(...o)=>s(...o),t),em=fs("bm"),dt=fs("m"),nm=fs("bu"),Zl=fs("u"),Wo=fs("bum"),Jl=fs("um"),sm=fs("sp"),tm=fs("rtg"),om=fs("rtc");function lm(n,s=Ke){Yl("ec",n,s)}function Uu(n){Tf(n)&&P("Do not use built-in directive ids as custom directive id: "+n)}function ei(n,s){const t=Qe;if(t===null)return P("withDirectives can only be used inside render functions."),n;const o=Xl(t)||t.proxy,l=n.dirs||(n.dirs=[]);for(let r=0;r<s.length;r++){let[i,c,p,u=We]=s[r];i&&(ye(i)&&(i={mounted:i,updated:i}),i.deep&&Zs(c),l.push({dir:i,instance:o,value:c,oldValue:void 0,arg:p,modifiers:u}))}return n}function Ns(n,s,t,o){const l=n.dirs,r=s&&s.dirs;for(let i=0;i<l.length;i++){const c=l[i];r&&(c.oldValue=r[i].value);let p=c.dir[o];p&&(ct(),Mn(p,t,8,[n.el,c,n,s]),pt())}}const Ka="components";function Dl(n,s){return rm(Ka,n,!0,s)||n}const am=Symbol();function rm(n,s,t=!0,o=!1){const l=Qe||Ke;if(l){const r=l.type;if(n===Ka){const c=vo(r,!1);if(c&&(c===s||c===Xn(s)||c===rt(Xn(s))))return r}const i=Ji(l[n]||r[n],s)||Ji(l.appContext[n],s);if(!i&&o)return r;if(t&&!i){const c=n===Ka?`
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`:"";P(`Failed to resolve ${n.slice(0,-1)}: ${s}${c}`)}return i}else P(`resolve${rt(n.slice(0,-1))} can only be used in render() or setup().`)}function Ji(n,s){return n&&(n[s]||n[Xn(s)]||n[rt(Xn(s))])}function qo(n,s,t,o){let l;const r=t&&t[o];if(ae(n)||Ve(n)){l=new Array(n.length);for(let i=0,c=n.length;i<c;i++)l[i]=s(n[i],i,void 0,r&&r[i])}else if(typeof n=="number"){Number.isInteger(n)||P(`The v-for range expect an integer value but got ${n}.`),l=new Array(n);for(let i=0;i<n;i++)l[i]=s(i+1,i,void 0,r&&r[i])}else if(Pe(n))if(n[Symbol.iterator])l=Array.from(n,(i,c)=>s(i,c,void 0,r&&r[c]));else{const i=Object.keys(n);l=new Array(i.length);for(let c=0,p=i.length;c<p;c++){const u=i[c];l[c]=s(n[u],u,c,r&&r[c])}}else l=[];return t&&(t[o]=l),l}function hs(n,s,t={},o,l){if(Qe.isCE||Qe.parent&&xt(Qe.parent)&&Qe.parent.isCE)return s!=="default"&&(t.name=s),M("slot",t,o&&o());let r=n[s];r&&r.length>1&&(P("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."),r=()=>[]),r&&r._c&&(r._d=!1),D();const i=r&&zu(r(t)),c=G(Oe,{key:t.key||i&&i.key||`_${s}`},i||(o?o():[]),i&&n._===1?64:-2);return!l&&c.scopeId&&(c.slotScopeIds=[c.scopeId+"-s"]),r&&r._c&&(r._d=!0),c}function zu(n){return n.some(s=>Ps(s)?!(s.type===Xe||s.type===Oe&&!zu(s.children)):!0)?n:null}const Ua=n=>n?id(n)?Xl(n)||n.proxy:Ua(n.parent):null,tt=Ge(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>_t(n.props),$attrs:n=>_t(n.attrs),$slots:n=>_t(n.slots),$refs:n=>_t(n.refs),$parent:n=>Ua(n.parent),$root:n=>Ua(n.root),$emit:n=>n.emit,$options:n=>si(n),$forceUpdate:n=>n.f||(n.f=()=>Kl(n.update)),$nextTick:n=>n.n||(n.n=sn.bind(n.proxy)),$watch:n=>Yy.bind(n)}),ni=n=>n==="_"||n==="$",ua=(n,s)=>n!==We&&!n.__isScriptSetup&&we(n,s),Yu={get({_:n},s){const{ctx:t,setupState:o,data:l,props:r,accessCache:i,type:c,appContext:p}=n;if(s==="__isVue")return!0;let u;if(s[0]!=="$"){const m=i[s];if(m!==void 0)switch(m){case 1:return o[s];case 2:return l[s];case 4:return t[s];case 3:return r[s]}else{if(ua(o,s))return i[s]=1,o[s];if(l!==We&&we(l,s))return i[s]=2,l[s];if((u=n.propsOptions[0])&&we(u,s))return i[s]=3,r[s];if(t!==We&&we(t,s))return i[s]=4,t[s];za&&(i[s]=0)}}const d=tt[s];let h,f;if(d)return s==="$attrs"&&(Bn(n,"get",s),vl()),d(n);if((h=c.__cssModules)&&(h=h[s]))return h;if(t!==We&&we(t,s))return i[s]=4,t[s];if(f=p.config.globalProperties,we(f,s))return f[s];Qe&&(!Ve(s)||s.indexOf("__v")!==0)&&(l!==We&&ni(s[0])&&we(l,s)?P(`Property ${JSON.stringify(s)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`):n===Qe&&P(`Property ${JSON.stringify(s)} was accessed during render but is not defined on instance.`))},set({_:n},s,t){const{data:o,setupState:l,ctx:r}=n;return ua(l,s)?(l[s]=t,!0):l.__isScriptSetup&&we(l,s)?(P(`Cannot mutate <script setup> binding "${s}" from Options API.`),!1):o!==We&&we(o,s)?(o[s]=t,!0):we(n.props,s)?(P(`Attempting to mutate prop "${s}". Props are readonly.`),!1):s[0]==="$"&&s.slice(1)in n?(P(`Attempting to mutate public property "${s}". Properties starting with $ are reserved and readonly.`),!1):(s in n.appContext.config.globalProperties?Object.defineProperty(r,s,{enumerable:!0,configurable:!0,value:t}):r[s]=t,!0)},has({_:{data:n,setupState:s,accessCache:t,ctx:o,appContext:l,propsOptions:r}},i){let c;return!!t[i]||n!==We&&we(n,i)||ua(s,i)||(c=r[0])&&we(c,i)||we(o,i)||we(tt,i)||we(l.config.globalProperties,i)},defineProperty(n,s,t){return t.get!=null?n._.accessCache[s]=0:we(t,"value")&&this.set(n,s,t.value,null),Reflect.defineProperty(n,s,t)}};Yu.ownKeys=n=>(P("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."),Reflect.ownKeys(n));function im(n){const s={};return Object.defineProperty(s,"_",{configurable:!0,enumerable:!1,get:()=>n}),Object.keys(tt).forEach(t=>{Object.defineProperty(s,t,{configurable:!0,enumerable:!1,get:()=>tt[t](n),set:An})}),s}function cm(n){const{ctx:s,propsOptions:[t]}=n;t&&Object.keys(t).forEach(o=>{Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>n.props[o],set:An})})}function pm(n){const{ctx:s,setupState:t}=n;Object.keys(me(t)).forEach(o=>{if(!t.__isScriptSetup){if(ni(o[0])){P(`setup() return property ${JSON.stringify(o)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);return}Object.defineProperty(s,o,{enumerable:!0,configurable:!0,get:()=>t[o],set:An})}})}function um(){const n=Object.create(null);return(s,t)=>{n[t]?P(`${s} property "${t}" is already defined in ${n[t]}.`):n[t]=s}}let za=!0;function dm(n){const s=si(n),t=n.proxy,o=n.ctx;za=!1,s.beforeCreate&&Qi(s.beforeCreate,n,"bc");const{data:l,computed:r,methods:i,watch:c,provide:p,inject:u,created:d,beforeMount:h,mounted:f,beforeUpdate:m,updated:y,activated:A,deactivated:b,beforeDestroy:_,beforeUnmount:C,destroyed:k,unmounted:w,render:$,renderTracked:R,renderTriggered:H,errorCaptured:E,serverPrefetch:j,expose:ee,inheritAttrs:he,components:Z,directives:_e,filters:Fe}=s,Se=um();{const[Q]=n.propsOptions;if(Q)for(const ie in Q)Se("Props",ie)}if(u&&hm(u,o,Se,n.appContext.config.unwrapInjectedRef),i)for(const Q in i){const ie=i[Q];ye(ie)?(Object.defineProperty(o,Q,{value:ie.bind(t),configurable:!0,enumerable:!0,writable:!0}),Se("Methods",Q)):P(`Method "${Q}" has type "${typeof ie}" in the component definition. Did you reference the function correctly?`)}if(l){ye(l)||P("The data option must be a function. Plain object usage is no longer supported.");const Q=l.call(t,t);if(Lr(Q)&&P("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."),!Pe(Q))P("data() should return an object.");else{n.data=He(Q);for(const ie in Q)Se("Data",ie),ni(ie[0])||Object.defineProperty(o,ie,{configurable:!0,enumerable:!0,get:()=>Q[ie],set:An})}}if(za=!0,r)for(const Q in r){const ie=r[Q],ke=ye(ie)?ie.bind(t,t):ye(ie.get)?ie.get.bind(t,t):An;ke===An&&P(`Computed property "${Q}" has no getter.`);const Le=!ye(ie)&&ye(ie.set)?ie.set.bind(t):()=>{P(`Write operation failed: computed property "${Q}" is readonly.`)},Cn=S({get:ke,set:Le});Object.defineProperty(o,Q,{enumerable:!0,configurable:!0,get:()=>Cn.value,set:on=>Cn.value=on}),Se("Computed",Q)}if(c)for(const Q in c)Zu(c[Q],o,t,Q);if(p){const Q=ye(p)?p.call(t):p;Reflect.ownKeys(Q).forEach(ie=>{Dn(ie,Q[ie])})}d&&Qi(d,n,"c");function qe(Q,ie){ae(ie)?ie.forEach(ke=>Q(ke.bind(t))):ie&&Q(ie.bind(t))}if(qe(em,h),qe(dt,f),qe(nm,m),qe(Zl,y),qe(Hu,A),qe(Gu,b),qe(lm,E),qe(om,R),qe(tm,H),qe(Wo,C),qe(Jl,w),qe(sm,j),ae(ee))if(ee.length){const Q=n.exposed||(n.exposed={});ee.forEach(ie=>{Object.defineProperty(Q,ie,{get:()=>t[ie],set:ke=>t[ie]=ke})})}else n.exposed||(n.exposed={});$&&n.render===An&&(n.render=$),he!=null&&(n.inheritAttrs=he),Z&&(n.components=Z),_e&&(n.directives=_e)}function hm(n,s,t=An,o=!1){ae(n)&&(n=Ya(n));for(const l in n){const r=n[l];let i;Pe(r)?"default"in r?i=N(r.from||l,r.default,!0):i=N(r.from||l):i=N(r),Te(i)?o?Object.defineProperty(s,l,{enumerable:!0,configurable:!0,get:()=>i.value,set:c=>i.value=c}):(P(`injected property "${l}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`),s[l]=i):s[l]=i,t("Inject",l)}}function Qi(n,s,t){Mn(ae(n)?n.map(o=>o.bind(s.proxy)):n.bind(s.proxy),s,t)}function Zu(n,s,t,o){const l=o.includes(".")?Wu(t,o):()=>t[o];if(Ve(n)){const r=s[n];ye(r)?Be(l,r):P(`Invalid watch handler specified by key "${n}"`,r)}else if(ye(n))Be(l,n.bind(t));else if(Pe(n))if(ae(n))n.forEach(r=>Zu(r,s,t,o));else{const r=ye(n.handler)?n.handler.bind(t):s[n.handler];ye(r)?Be(l,r,n):P(`Invalid watch handler specified by key "${n.handler}"`,r)}else P(`Invalid watch option: "${o}"`,n)}function si(n){const s=n.type,{mixins:t,extends:o}=s,{mixins:l,optionsCache:r,config:{optionMergeStrategies:i}}=n.appContext,c=r.get(s);let p;return c?p=c:!l.length&&!t&&!o?p=s:(p={},l.length&&l.forEach(u=>wl(p,u,i,!0)),wl(p,s,i)),Pe(s)&&r.set(s,p),p}function wl(n,s,t,o=!1){const{mixins:l,extends:r}=s;r&&wl(n,r,t,!0),l&&l.forEach(i=>wl(n,i,t,!0));for(const i in s)if(o&&i==="expose")P('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');else{const c=fm[i]||t&&t[i];n[i]=c?c(n[i],s[i]):s[i]}return n}const fm={data:Xi,props:Gs,emits:Gs,methods:Gs,computed:Gs,beforeCreate:pn,created:pn,beforeMount:pn,mounted:pn,beforeUpdate:pn,updated:pn,beforeDestroy:pn,beforeUnmount:pn,destroyed:pn,unmounted:pn,activated:pn,deactivated:pn,errorCaptured:pn,serverPrefetch:pn,components:Gs,directives:Gs,watch:mm,provide:Xi,inject:ym};function Xi(n,s){return s?n?function(){return Ge(ye(n)?n.call(this,this):n,ye(s)?s.call(this,this):s)}:s:n}function ym(n,s){return Gs(Ya(n),Ya(s))}function Ya(n){if(ae(n)){const s={};for(let t=0;t<n.length;t++)s[n[t]]=n[t];return s}return n}function pn(n,s){return n?[...new Set([].concat(n,s))]:s}function Gs(n,s){return n?Ge(Ge(Object.create(null),n),s):s}function mm(n,s){if(!n)return s;if(!s)return n;const t=Ge(Object.create(null),n);for(const o in s)t[o]=pn(n[o],s[o]);return t}function gm(n,s,t,o=!1){const l={},r={};Al(r,Ql,1),n.propsDefaults=Object.create(null),Ju(n,s,l,r);for(const i in n.propsOptions[0])i in l||(l[i]=void 0);Xu(s||{},l,n),t?n.props=o?l:dy(l):n.type.props?n.props=l:n.props=r,n.attrs=r}function Am(n){for(;n;){if(n.type.__hmrId)return!0;n=n.parent}}function bm(n,s,t,o){const{props:l,attrs:r,vnode:{patchFlag:i}}=n,c=me(l),[p]=n.propsOptions;let u=!1;if(!Am(n)&&(o||i>0)&&!(i&16)){if(i&8){const d=n.vnode.dynamicProps;for(let h=0;h<d.length;h++){let f=d[h];if(Ul(n.emitsOptions,f))continue;const m=s[f];if(p)if(we(r,f))m!==r[f]&&(r[f]=m,u=!0);else{const y=Xn(f);l[y]=Za(p,c,y,m,n,!1)}else m!==r[f]&&(r[f]=m,u=!0)}}}else{Ju(n,s,l,r)&&(u=!0);let d;for(const h in c)(!s||!we(s,h)&&((d=us(h))===h||!we(s,d)))&&(p?t&&(t[h]!==void 0||t[d]!==void 0)&&(l[h]=Za(p,c,h,void 0,n,!0)):delete l[h]);if(r!==c)for(const h in r)(!s||!we(s,h))&&(delete r[h],u=!0)}u&&ds(n,"set","$attrs"),Xu(s||{},l,n)}function Ju(n,s,t,o){const[l,r]=n.propsOptions;let i=!1,c;if(s)for(let p in s){if(rl(p))continue;const u=s[p];let d;l&&we(l,d=Xn(p))?!r||!r.includes(d)?t[d]=u:(c||(c={}))[d]=u:Ul(n.emitsOptions,p)||(!(p in o)||u!==o[p])&&(o[p]=u,i=!0)}if(r){const p=me(t),u=c||We;for(let d=0;d<r.length;d++){const h=r[d];t[h]=Za(l,p,h,u[h],n,!we(u,h))}}return i}function Za(n,s,t,o,l,r){const i=n[t];if(i!=null){const c=we(i,"default");if(c&&o===void 0){const p=i.default;if(i.type!==Function&&ye(p)){const{propsDefaults:u}=l;t in u?o=u[t]:(Ft(l),o=u[t]=p.call(null,s),ot())}else o=p}i[0]&&(r&&!c?o=!1:i[1]&&(o===""||o===us(t))&&(o=!0))}return o}function Qu(n,s,t=!1){const o=s.propsCache,l=o.get(n);if(l)return l;const r=n.props,i={},c=[];let p=!1;if(!ye(n)){const d=h=>{p=!0;const[f,m]=Qu(h,s,!0);Ge(i,f),m&&c.push(...m)};!t&&s.mixins.length&&s.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!r&&!p)return Pe(n)&&o.set(n,Dt),Dt;if(ae(r))for(let d=0;d<r.length;d++){Ve(r[d])||P("props must be strings when using array syntax.",r[d]);const h=Xn(r[d]);ec(h)&&(i[h]=We)}else if(r){Pe(r)||P("invalid props options",r);for(const d in r){const h=Xn(d);if(ec(h)){const f=r[d],m=i[h]=ae(f)||ye(f)?{type:f}:Object.assign({},f);if(m){const y=sc(Boolean,m.type),A=sc(String,m.type);m[0]=y>-1,m[1]=A<0||y<A,(y>-1||we(m,"default"))&&c.push(h)}}}}const u=[i,c];return Pe(n)&&o.set(n,u),u}function ec(n){return n[0]!=="$"?!0:(P(`Invalid prop name: "${n}" is a reserved property.`),!1)}function Ja(n){const s=n&&n.toString().match(/^\s*(function|class) (\w+)/);return s?s[2]:n===null?"null":""}function nc(n,s){return Ja(n)===Ja(s)}function sc(n,s){return ae(s)?s.findIndex(t=>nc(t,n)):ye(s)&&nc(s,n)?0:-1}function Xu(n,s,t){const o=me(s),l=t.propsOptions[0];for(const r in l){let i=l[r];i!=null&&Bm(r,o[r],i,!we(n,r)&&!we(n,us(r)))}}function Bm(n,s,t,o){const{type:l,required:r,validator:i}=t;if(r&&o){P('Missing required prop: "'+n+'"');return}if(!(s==null&&!t.required)){if(l!=null&&l!==!0){let c=!1;const p=ae(l)?l:[l],u=[];for(let d=0;d<p.length&&!c;d++){const{valid:h,expectedType:f}=km(s,p[d]);u.push(f||""),c=h}if(!c){P(_m(n,s,u));return}}i&&!i(s)&&P('Invalid prop: custom validator check failed for prop "'+n+'".')}}const Cm=Ls("String,Number,Boolean,Function,Symbol,BigInt");function km(n,s){let t;const o=Ja(s);if(Cm(o)){const l=typeof n;t=l===o.toLowerCase(),!t&&l==="object"&&(t=n instanceof s)}else o==="Object"?t=Pe(n):o==="Array"?t=ae(n):o==="null"?t=n===null:t=n instanceof s;return{valid:t,expectedType:o}}function _m(n,s,t){let o=`Invalid prop: type check failed for prop "${n}". Expected ${t.map(rt).join(" | ")}`;const l=t[0],r=Nr(s),i=tc(s,l),c=tc(s,r);return t.length===1&&oc(l)&&!vm(l,r)&&(o+=` with value ${i}`),o+=`, got ${r} `,oc(r)&&(o+=`with value ${c}.`),o}function tc(n,s){return s==="String"?`"${n}"`:s==="Number"?`${Number(n)}`:`${n}`}function oc(n){return["string","number","boolean"].some(t=>n.toLowerCase()===t)}function vm(...n){return n.some(s=>s.toLowerCase()==="boolean")}const ed=n=>n[0]==="_"||n==="$stable",ti=n=>ae(n)?n.map(qn):[qn(n)],Dm=(n,s,t)=>{if(s._n)return s;const o=T((...l)=>(Ke&&P(`Slot "${n}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`),ti(s(...l))),t);return o._c=!1,o},nd=(n,s,t)=>{const o=n._ctx;for(const l in n){if(ed(l))continue;const r=n[l];if(ye(r))s[l]=Dm(l,r,o);else if(r!=null){P(`Non-function value encountered for slot "${l}". Prefer function slots for better performance.`);const i=ti(r);s[l]=()=>i}}},sd=(n,s)=>{No(n.vnode)||P("Non-function value encountered for default slot. Prefer function slots for better performance.");const t=ti(s);n.slots.default=()=>t},wm=(n,s)=>{if(n.vnode.shapeFlag&32){const t=s._;t?(n.slots=me(s),Al(s,"_",t)):nd(s,n.slots={})}else n.slots={},s&&sd(n,s);Al(n.slots,Ql,1)},xm=(n,s,t)=>{const{vnode:o,slots:l}=n;let r=!0,i=We;if(o.shapeFlag&32){const c=s._;c?Is?Ge(l,s):t&&c===1?r=!1:(Ge(l,s),!t&&c===1&&delete l._):(r=!s.$stable,nd(s,l)),i=s}else s&&(sd(n,s),i={default:1});if(r)for(const c in l)!ed(c)&&!(c in i)&&delete l[c]};function td(){return{app:null,config:{isNativeTag:tu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Im=0;function Sm(n,s){return function(o,l=null){ye(o)||(o=Object.assign({},o)),l!=null&&!Pe(l)&&(P("root props passed to app.mount() must be an object."),l=null);const r=td(),i=new Set;let c=!1;const p=r.app={_uid:Im++,_component:o,_props:l,_container:null,_context:r,_instance:null,version:Il,get config(){return r.config},set config(u){P("app.config cannot be replaced. Modify individual options instead.")},use(u,...d){return i.has(u)?P("Plugin has already been applied to target app."):u&&ye(u.install)?(i.add(u),u.install(p,...d)):ye(u)?(i.add(u),u(p,...d)):P('A plugin must either be a function or an object with an "install" function.'),p},mixin(u){return r.mixins.includes(u)?P("Mixin has already been applied to target app"+(u.name?`: ${u.name}`:"")):r.mixins.push(u),p},component(u,d){return er(u,r.config),d?(r.components[u]&&P(`Component "${u}" has already been registered in target app.`),r.components[u]=d,p):r.components[u]},directive(u,d){return Uu(u),d?(r.directives[u]&&P(`Directive "${u}" has already been registered in target app.`),r.directives[u]=d,p):r.directives[u]},mount(u,d,h){if(c)P("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");else{u.__vue_app__&&P("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");const f=M(o,l);return f.appContext=r,r.reload=()=>{n(Vn(f),u,h)},d&&s?s(f,u):n(f,u,h),c=!0,p._container=u,u.__vue_app__=p,p._instance=f.component,My(p,Il),Xl(f.component)||f.component.proxy}},unmount(){c?(n(null,p._container),p._instance=null,Py(p),delete p._container.__vue_app__):P("Cannot unmount an app that is not mounted.")},provide(u,d){return u in r.provides&&P(`App already provides property with key "${String(u)}". It will be overwritten with the new value.`),r.provides[u]=d,p}};return p}}function Qa(n,s,t,o,l=!1){if(ae(n)){n.forEach((f,m)=>Qa(f,s&&(ae(s)?s[m]:s),t,o,l));return}if(xt(o)&&!l)return;const r=o.shapeFlag&4?Xl(o.component)||o.component.proxy:o.el,i=l?null:r,{i:c,r:p}=n;if(!c){P("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");return}const u=s&&s.r,d=c.refs===We?c.refs={}:c.refs,h=c.setupState;if(u!=null&&u!==p&&(Ve(u)?(d[u]=null,we(h,u)&&(h[u]=null)):Te(u)&&(u.value=null)),ye(p))ps(p,c,12,[i,d]);else{const f=Ve(p),m=Te(p);if(f||m){const y=()=>{if(n.f){const A=f?we(h,p)?h[p]:d[p]:p.value;l?ae(A)&&Pr(A,r):ae(A)?A.includes(r)||A.push(r):f?(d[p]=[r],we(h,p)&&(h[p]=d[p])):(p.value=[r],n.k&&(d[n.k]=p.value))}else f?(d[p]=i,we(h,p)&&(h[p]=i)):m?(p.value=i,n.k&&(d[n.k]=i)):P("Invalid template ref type:",p,`(${typeof p})`)};i?(y.id=-1,nn(y,t)):y()}else P("Invalid template ref type:",p,`(${typeof p})`)}}let Wt,vs;function ts(n,s){n.appContext.config.performance&&xl()&&vs.mark(`vue-${s}-${n.uid}`),Ny(n,s,xl()?vs.now():Date.now())}function os(n,s){if(n.appContext.config.performance&&xl()){const t=`vue-${s}-${n.uid}`,o=t+":end";vs.mark(o),vs.measure(`<${ea(n,n.type)}> ${s}`,t,o),vs.clearMarks(t),vs.clearMarks(o)}Wy(n,s,xl()?vs.now():Date.now())}function xl(){return Wt!==void 0||(typeof window<"u"&&window.performance?(Wt=!0,vs=window.performance):Wt=!1),Wt}function Em(){const n=[];if(n.length){const s=n.length>1;console.warn(`Feature flag${s?"s":""} ${n.join(", ")} ${s?"are":"is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)}}const nn=zy;function $m(n){return Tm(n)}function Tm(n,s){Em();const t=ru();t.__VUE__=!0,Ou(t.__VUE_DEVTOOLS_GLOBAL_HOOK__,t);const{insert:o,remove:l,patchProp:r,createElement:i,createText:c,createComment:p,setText:u,setElementText:d,parentNode:h,nextSibling:f,setScopeId:m=An,insertStaticContent:y}=n,A=(g,B,x,O=null,F=null,q=null,U=!1,W=null,V=Is?!1:!!B.dynamicChildren)=>{if(g===B)return;g&&!Ds(g,B)&&(O=se(g),yn(g,F,q,!0),g=null),B.patchFlag===-2&&(V=!1,B.dynamicChildren=null);const{type:L,ref:oe,shapeFlag:te}=B;switch(L){case jo:b(g,B,x,O);break;case Xe:_(g,B,x,O);break;case pl:g==null?C(B,x,O,U):k(g,B,x,U);break;case Oe:_e(g,B,x,O,F,q,U,W,V);break;default:te&1?R(g,B,x,O,F,q,U,W,V):te&6?Fe(g,B,x,O,F,q,U,W,V):te&64||te&128?L.process(g,B,x,O,F,q,U,W,V,Ie):P("Invalid VNode type:",L,`(${typeof L})`)}oe!=null&&F&&Qa(oe,g&&g.ref,q,B||g,!B)},b=(g,B,x,O)=>{if(g==null)o(B.el=c(B.children),x,O);else{const F=B.el=g.el;B.children!==g.children&&u(F,B.children)}},_=(g,B,x,O)=>{g==null?o(B.el=p(B.children||""),x,O):B.el=g.el},C=(g,B,x,O)=>{[g.el,g.anchor]=y(g.children,B,x,O,g.el,g.anchor)},k=(g,B,x,O)=>{if(B.children!==g.children){const F=f(g.anchor);$(g),[B.el,B.anchor]=y(B.children,x,F,O)}else B.el=g.el,B.anchor=g.anchor},w=({el:g,anchor:B},x,O)=>{let F;for(;g&&g!==B;)F=f(g),o(g,x,O),g=F;o(B,x,O)},$=({el:g,anchor:B})=>{let x;for(;g&&g!==B;)x=f(g),l(g),g=x;l(B)},R=(g,B,x,O,F,q,U,W,V)=>{U=U||B.type==="svg",g==null?H(B,x,O,F,q,U,W,V):ee(g,B,F,q,U,W,V)},H=(g,B,x,O,F,q,U,W)=>{let V,L;const{type:oe,props:te,shapeFlag:le,transition:Ae,dirs:xe}=g;if(V=g.el=i(g.type,q,te&&te.is,te),le&8?d(V,g.children):le&16&&j(g.children,V,null,O,F,q&&oe!=="foreignObject",U,W),xe&&Ns(g,null,O,"created"),E(V,g,g.scopeId,U,O),te){for(const Ne in te)Ne!=="value"&&!rl(Ne)&&r(V,Ne,null,te[Ne],q,g.children,O,F,K);"value"in te&&r(V,"value",null,te.value),(L=te.onVnodeBeforeMount)&&Tn(L,O,g)}Object.defineProperty(V,"__vnode",{value:g,enumerable:!1}),Object.defineProperty(V,"__vueParentComponent",{value:O,enumerable:!1}),xe&&Ns(g,null,O,"beforeMount");const je=(!F||F&&!F.pendingBranch)&&Ae&&!Ae.persisted;je&&Ae.beforeEnter(V),o(V,B,x),((L=te&&te.onVnodeMounted)||je||xe)&&nn(()=>{L&&Tn(L,O,g),je&&Ae.enter(V),xe&&Ns(g,null,O,"mounted")},F)},E=(g,B,x,O,F)=>{if(x&&m(g,x),O)for(let q=0;q<O.length;q++)m(g,O[q]);if(F){let q=F.subTree;if(q.patchFlag>0&&q.patchFlag&2048&&(q=Lu(q.children)||q),B===q){const U=F.vnode;E(g,U,U.scopeId,U.slotScopeIds,F.parent)}}},j=(g,B,x,O,F,q,U,W,V=0)=>{for(let L=V;L<g.length;L++){const oe=g[L]=W?Cs(g[L]):qn(g[L]);A(null,oe,B,x,O,F,q,U,W)}},ee=(g,B,x,O,F,q,U)=>{const W=B.el=g.el;let{patchFlag:V,dynamicChildren:L,dirs:oe}=B;V|=g.patchFlag&16;const te=g.props||We,le=B.props||We;let Ae;x&&Ws(x,!1),(Ae=le.onVnodeBeforeUpdate)&&Tn(Ae,x,B,g),oe&&Ns(B,g,x,"beforeUpdate"),x&&Ws(x,!0),Is&&(V=0,U=!1,L=null);const xe=F&&B.type!=="foreignObject";if(L?(he(g.dynamicChildren,L,W,x,O,xe,q),x&&x.type.__hmrId&&oo(g,B)):U||ke(g,B,W,null,x,O,xe,q,!1),V>0){if(V&16)Z(W,B,te,le,x,O,F);else if(V&2&&te.class!==le.class&&r(W,"class",null,le.class,F),V&4&&r(W,"style",te.style,le.style,F),V&8){const je=B.dynamicProps;for(let Ne=0;Ne<je.length;Ne++){const Ye=je[Ne],Ln=te[Ye],yt=le[Ye];(yt!==Ln||Ye==="value")&&r(W,Ye,Ln,yt,F,g.children,x,O,K)}}V&1&&g.children!==B.children&&d(W,B.children)}else!U&&L==null&&Z(W,B,te,le,x,O,F);((Ae=le.onVnodeUpdated)||oe)&&nn(()=>{Ae&&Tn(Ae,x,B,g),oe&&Ns(B,g,x,"updated")},O)},he=(g,B,x,O,F,q,U)=>{for(let W=0;W<B.length;W++){const V=g[W],L=B[W],oe=V.el&&(V.type===Oe||!Ds(V,L)||V.shapeFlag&70)?h(V.el):x;A(V,L,oe,null,O,F,q,U,!0)}},Z=(g,B,x,O,F,q,U)=>{if(x!==O){if(x!==We)for(const W in x)!rl(W)&&!(W in O)&&r(g,W,x[W],null,U,B.children,F,q,K);for(const W in O){if(rl(W))continue;const V=O[W],L=x[W];V!==L&&W!=="value"&&r(g,W,L,V,U,B.children,F,q,K)}"value"in O&&r(g,"value",x.value,O.value)}},_e=(g,B,x,O,F,q,U,W,V)=>{const L=B.el=g?g.el:c(""),oe=B.anchor=g?g.anchor:c("");let{patchFlag:te,dynamicChildren:le,slotScopeIds:Ae}=B;(Is||te&2048)&&(te=0,V=!1,le=null),Ae&&(W=W?W.concat(Ae):Ae),g==null?(o(L,x,O),o(oe,x,O),j(B.children,x,oe,F,q,U,W,V)):te>0&&te&64&&le&&g.dynamicChildren?(he(g.dynamicChildren,le,x,F,q,U,W),F&&F.type.__hmrId?oo(g,B):(B.key!=null||F&&B===F.subTree)&&oo(g,B,!0)):ke(g,B,x,oe,F,q,U,W,V)},Fe=(g,B,x,O,F,q,U,W,V)=>{B.slotScopeIds=W,g==null?B.shapeFlag&512?F.ctx.activate(B,x,O,U,V):Se(B,x,O,F,q,U,V):qe(g,B,V)},Se=(g,B,x,O,F,q,U)=>{const W=g.component=Vm(g,O,F);if(W.type.__hmrId&&$y(W),il(g),ts(W,"mount"),No(g)&&(W.ctx.renderer=Ie),ts(W,"init"),Gm(W),os(W,"init"),W.asyncDep){if(F&&F.registerDep(W,Q),!g.el){const V=W.subTree=M(Xe);_(null,V,B,x)}return}Q(W,g,B,x,F,q,U),cl(),os(W,"mount")},qe=(g,B,x)=>{const O=B.component=g.component;if(Ky(g,B,x))if(O.asyncDep&&!O.asyncResolved){il(B),ie(O,B,x),cl();return}else O.next=B,Sy(O.update),O.update();else B.el=g.el,O.vnode=B},Q=(g,B,x,O,F,q,U)=>{const W=()=>{if(g.isMounted){let{next:oe,bu:te,u:le,parent:Ae,vnode:xe}=g,je=oe,Ne;il(oe||g.vnode),Ws(g,!1),oe?(oe.el=xe.el,ie(g,oe,U)):oe=xe,te&&_s(te),(Ne=oe.props&&oe.props.onVnodeBeforeUpdate)&&Tn(Ne,Ae,oe,xe),Ws(g,!0),ts(g,"render");const Ye=ra(g);os(g,"render");const Ln=g.subTree;g.subTree=Ye,ts(g,"patch"),A(Ln,Ye,h(Ln.el),se(Ln),g,F,q),os(g,"patch"),oe.el=Ye.el,je===null&&Uy(g,Ye.el),le&&nn(le,F),(Ne=oe.props&&oe.props.onVnodeUpdated)&&nn(()=>Tn(Ne,Ae,oe,xe),F),Mu(g),cl()}else{let oe;const{el:te,props:le}=B,{bm:Ae,m:xe,parent:je}=g,Ne=xt(B);if(Ws(g,!1),Ae&&_s(Ae),!Ne&&(oe=le&&le.onVnodeBeforeMount)&&Tn(oe,je,B),Ws(g,!0),te&&fe){const Ye=()=>{ts(g,"render"),g.subTree=ra(g),os(g,"render"),ts(g,"hydrate"),fe(te,g.subTree,g,F,null),os(g,"hydrate")};Ne?B.type.__asyncLoader().then(()=>!g.isUnmounted&&Ye()):Ye()}else{ts(g,"render");const Ye=g.subTree=ra(g);os(g,"render"),ts(g,"patch"),A(null,Ye,x,O,g,F,q),os(g,"patch"),B.el=Ye.el}if(xe&&nn(xe,F),!Ne&&(oe=le&&le.onVnodeMounted)){const Ye=B;nn(()=>Tn(oe,je,Ye),F)}(B.shapeFlag&256||je&&xt(je.vnode)&&je.vnode.shapeFlag&256)&&g.a&&nn(g.a,F),g.isMounted=!0,Ha(g),B=x=O=null}},V=g.effect=new Vr(W,()=>Kl(L),g.scope),L=g.update=()=>V.run();L.id=g.uid,Ws(g,!0),V.onTrack=g.rtc?oe=>_s(g.rtc,oe):void 0,V.onTrigger=g.rtg?oe=>_s(g.rtg,oe):void 0,L.ownerInstance=g,L()},ie=(g,B,x)=>{B.component=g;const O=g.vnode.props;g.vnode=B,g.next=null,bm(g,B.props,O,x),xm(g,B.children,x),ct(),Ki(),pt()},ke=(g,B,x,O,F,q,U,W,V=!1)=>{const L=g&&g.children,oe=g?g.shapeFlag:0,te=B.children,{patchFlag:le,shapeFlag:Ae}=B;if(le>0){if(le&128){Cn(L,te,x,O,F,q,U,W,V);return}else if(le&256){Le(L,te,x,O,F,q,U,W,V);return}}Ae&8?(oe&16&&K(L,F,q),te!==L&&d(x,te)):oe&16?Ae&16?Cn(L,te,x,O,F,q,U,W,V):K(L,F,q,!0):(oe&8&&d(x,""),Ae&16&&j(te,x,O,F,q,U,W,V))},Le=(g,B,x,O,F,q,U,W,V)=>{g=g||Dt,B=B||Dt;const L=g.length,oe=B.length,te=Math.min(L,oe);let le;for(le=0;le<te;le++){const Ae=B[le]=V?Cs(B[le]):qn(B[le]);A(g[le],Ae,x,null,F,q,U,W,V)}L>oe?K(g,F,q,!0,!1,te):j(B,x,O,F,q,U,W,V,te)},Cn=(g,B,x,O,F,q,U,W,V)=>{let L=0;const oe=B.length;let te=g.length-1,le=oe-1;for(;L<=te&&L<=le;){const Ae=g[L],xe=B[L]=V?Cs(B[L]):qn(B[L]);if(Ds(Ae,xe))A(Ae,xe,x,null,F,q,U,W,V);else break;L++}for(;L<=te&&L<=le;){const Ae=g[te],xe=B[le]=V?Cs(B[le]):qn(B[le]);if(Ds(Ae,xe))A(Ae,xe,x,null,F,q,U,W,V);else break;te--,le--}if(L>te){if(L<=le){const Ae=le+1,xe=Ae<oe?B[Ae].el:O;for(;L<=le;)A(null,B[L]=V?Cs(B[L]):qn(B[L]),x,xe,F,q,U,W,V),L++}}else if(L>le)for(;L<=te;)yn(g[L],F,q,!0),L++;else{const Ae=L,xe=L,je=new Map;for(L=xe;L<=le;L++){const cn=B[L]=V?Cs(B[L]):qn(B[L]);cn.key!=null&&(je.has(cn.key)&&P("Duplicate keys found during update:",JSON.stringify(cn.key),"Make sure keys are unique."),je.set(cn.key,L))}let Ne,Ye=0;const Ln=le-xe+1;let yt=!1,Mi=0;const Nt=new Array(Ln);for(L=0;L<Ln;L++)Nt[L]=0;for(L=Ae;L<=te;L++){const cn=g[L];if(Ye>=Ln){yn(cn,F,q,!0);continue}let Kn;if(cn.key!=null)Kn=je.get(cn.key);else for(Ne=xe;Ne<=le;Ne++)if(Nt[Ne-xe]===0&&Ds(cn,B[Ne])){Kn=Ne;break}Kn===void 0?yn(cn,F,q,!0):(Nt[Kn-xe]=L+1,Kn>=Mi?Mi=Kn:yt=!0,A(cn,B[Kn],x,null,F,q,U,W,V),Ye++)}const Pi=yt?Fm(Nt):Dt;for(Ne=Pi.length-1,L=Ln-1;L>=0;L--){const cn=xe+L,Kn=B[cn],Ri=cn+1<oe?B[cn+1].el:O;Nt[L]===0?A(null,Kn,x,Ri,F,q,U,W,V):yt&&(Ne<0||L!==Pi[Ne]?on(Kn,x,Ri,2):Ne--)}}},on=(g,B,x,O,F=null)=>{const{el:q,type:U,transition:W,children:V,shapeFlag:L}=g;if(L&6){on(g.component.subTree,B,x,O);return}if(L&128){g.suspense.move(B,x,O);return}if(L&64){U.move(g,B,x,Ie);return}if(U===Oe){o(q,B,x);for(let te=0;te<V.length;te++)on(V[te],B,x,O);o(g.anchor,B,x);return}if(U===pl){w(g,B,x);return}if(O!==2&&L&1&&W)if(O===0)W.beforeEnter(q),o(q,B,x),nn(()=>W.enter(q),F);else{const{leave:te,delayLeave:le,afterLeave:Ae}=W,xe=()=>o(q,B,x),je=()=>{te(q,()=>{xe(),Ae&&Ae()})};le?le(q,xe,je):je()}else o(q,B,x)},yn=(g,B,x,O=!1,F=!1)=>{const{type:q,props:U,ref:W,children:V,dynamicChildren:L,shapeFlag:oe,patchFlag:te,dirs:le}=g;if(W!=null&&Qa(W,null,x,g,!0),oe&256){B.ctx.deactivate(g);return}const Ae=oe&1&&le,xe=!xt(g);let je;if(xe&&(je=U&&U.onVnodeBeforeUnmount)&&Tn(je,B,g),oe&6)X(g.component,x,O);else{if(oe&128){g.suspense.unmount(x,O);return}Ae&&Ns(g,null,B,"beforeUnmount"),oe&64?g.type.remove(g,B,x,F,Ie,O):L&&(q!==Oe||te>0&&te&64)?K(L,B,x,!1,!0):(q===Oe&&te&384||!F&&oe&16)&&K(V,B,x),O&&ys(g)}(xe&&(je=U&&U.onVnodeUnmounted)||Ae)&&nn(()=>{je&&Tn(je,B,g),Ae&&Ns(g,null,B,"unmounted")},x)},ys=g=>{const{type:B,el:x,anchor:O,transition:F}=g;if(B===Oe){g.patchFlag>0&&g.patchFlag&2048&&F&&!F.persisted?g.children.forEach(U=>{U.type===Xe?l(U.el):ys(U)}):I(x,O);return}if(B===pl){$(g);return}const q=()=>{l(x),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(g.shapeFlag&1&&F&&!F.persisted){const{leave:U,delayLeave:W}=F,V=()=>U(x,q);W?W(g.el,q,V):V()}else q()},I=(g,B)=>{let x;for(;g!==B;)x=f(g),l(g),g=x;l(B)},X=(g,B,x)=>{g.type.__hmrId&&Ty(g);const{bum:O,scope:F,update:q,subTree:U,um:W}=g;O&&_s(O),F.stop(),q&&(q.active=!1,yn(U,g,B,x)),W&&nn(W,B),nn(()=>{g.isUnmounted=!0},B),B&&B.pendingBranch&&!B.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===B.pendingId&&(B.deps--,B.deps===0&&B.resolve()),Ly(g)},K=(g,B,x,O=!1,F=!1,q=0)=>{for(let U=q;U<g.length;U++)yn(g[U],B,x,O,F)},se=g=>g.shapeFlag&6?se(g.component.subTree):g.shapeFlag&128?g.suspense.next():f(g.anchor||g.el),ve=(g,B,x)=>{g==null?B._vnode&&yn(B._vnode,null,null,!0):A(B._vnode||null,g,B,null,null,null,x),Ki(),$u(),B._vnode=g},Ie={p:A,um:yn,m:on,r:ys,mt:Se,mc:j,pc:ke,pbc:he,n:se,o:n};let ge,fe;return s&&([ge,fe]=s(Ie)),{render:ve,hydrate:ge,createApp:Sm(ve,ge)}}function Ws({effect:n,update:s},t){n.allowRecurse=s.allowRecurse=t}function oo(n,s,t=!1){const o=n.children,l=s.children;if(ae(o)&&ae(l))for(let r=0;r<o.length;r++){const i=o[r];let c=l[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=l[r]=Cs(l[r]),c.el=i.el),t||oo(i,c)),c.type===jo&&(c.el=i.el),c.type===Xe&&!c.el&&(c.el=i.el)}}function Fm(n){const s=n.slice(),t=[0];let o,l,r,i,c;const p=n.length;for(o=0;o<p;o++){const u=n[o];if(u!==0){if(l=t[t.length-1],n[l]<u){s[o]=l,t.push(o);continue}for(r=0,i=t.length-1;r<i;)c=r+i>>1,n[t[c]]<u?r=c+1:i=c;u<n[t[r]]&&(r>0&&(s[o]=t[r-1]),t[r]=o)}}for(r=t.length,i=t[r-1];r-- >0;)t[r]=i,i=s[i];return t}const Om=n=>n.__isTeleport,It=n=>n&&(n.disabled||n.disabled===""),lc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,Xa=(n,s)=>{const t=n&&n.to;if(Ve(t))if(s){const o=s(t);return o||P(`Failed to locate Teleport target with selector "${t}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`),o}else return P("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"),null;else return!t&&!It(n)&&P(`Invalid Teleport target: ${t}`),t},Mm={__isTeleport:!0,process(n,s,t,o,l,r,i,c,p,u){const{mc:d,pc:h,pbc:f,o:{insert:m,querySelector:y,createText:A,createComment:b}}=u,_=It(s.props);let{shapeFlag:C,children:k,dynamicChildren:w}=s;if(Is&&(p=!1,w=null),n==null){const $=s.el=b("teleport start"),R=s.anchor=b("teleport end");m($,t,o),m(R,t,o);const H=s.target=Xa(s.props,y),E=s.targetAnchor=A("");H?(m(E,H),i=i||lc(H)):_||P("Invalid Teleport target on mount:",H,`(${typeof H})`);const j=(ee,he)=>{C&16&&d(k,ee,he,l,r,i,c,p)};_?j(t,R):H&&j(H,E)}else{s.el=n.el;const $=s.anchor=n.anchor,R=s.target=n.target,H=s.targetAnchor=n.targetAnchor,E=It(n.props),j=E?t:R,ee=E?$:H;if(i=i||lc(R),w?(f(n.dynamicChildren,w,j,l,r,i,c),oo(n,s,!0)):p||h(n,s,j,ee,l,r,i,c,!1),_)E||el(s,t,$,u,1);else if((s.props&&s.props.to)!==(n.props&&n.props.to)){const he=s.target=Xa(s.props,y);he?el(s,he,null,u,0):P("Invalid Teleport target on update:",R,`(${typeof R})`)}else E&&el(s,R,H,u,1)}od(s)},remove(n,s,t,o,{um:l,o:{remove:r}},i){const{shapeFlag:c,children:p,anchor:u,targetAnchor:d,target:h,props:f}=n;if(h&&r(d),(i||!It(f))&&(r(u),c&16))for(let m=0;m<p.length;m++){const y=p[m];l(y,s,t,!0,!!y.dynamicChildren)}},move:el,hydrate:Pm};function el(n,s,t,{o:{insert:o},m:l},r=2){r===0&&o(n.targetAnchor,s,t);const{el:i,anchor:c,shapeFlag:p,children:u,props:d}=n,h=r===2;if(h&&o(i,s,t),(!h||It(d))&&p&16)for(let f=0;f<u.length;f++)l(u[f],s,t,2);h&&o(c,s,t)}function Pm(n,s,t,o,l,r,{o:{nextSibling:i,parentNode:c,querySelector:p}},u){const d=s.target=Xa(s.props,p);if(d){const h=d._lpa||d.firstChild;if(s.shapeFlag&16)if(It(s.props))s.anchor=u(i(n),s,c(n),t,o,l,r),s.targetAnchor=h;else{s.anchor=i(n);let f=h;for(;f;)if(f=i(f),f&&f.nodeType===8&&f.data==="teleport anchor"){s.targetAnchor=f,d._lpa=s.targetAnchor&&i(s.targetAnchor);break}u(h,s,d,t,o,l,r)}od(s)}return s.anchor&&i(s.anchor)}const Rm=Mm;function od(n){const s=n.ctx;if(s&&s.ut){let t=n.children[0].el;for(;t!==n.targetAnchor;)t.nodeType===1&&t.setAttribute("data-v-owner",s.uid),t=t.nextSibling;s.ut()}}const Oe=Symbol("Fragment"),jo=Symbol("Text"),Xe=Symbol("Comment"),pl=Symbol("Static"),lo=[];let jn=null;function D(n=!1){lo.push(jn=n?null:[])}function Lm(){lo.pop(),jn=lo[lo.length-1]||null}let ko=1;function ac(n){ko+=n}function ld(n){return n.dynamicChildren=ko>0?jn||Dt:null,Lm(),ko>0&&jn&&jn.push(n),n}function ne(n,s,t,o,l,r){return ld(e(n,s,t,o,l,r,!0))}function G(n,s,t,o,l){return ld(M(n,s,t,o,l,!0))}function Ps(n){return n?n.__v_isVNode===!0:!1}function Ds(n,s){return s.shapeFlag&6&&Bt.has(s.type)?(n.shapeFlag&=-257,s.shapeFlag&=-513,!1):n.type===s.type&&n.key===s.key}const Nm=(...n)=>Wm(...n),Ql="__vInternal",ad=({key:n})=>n??null,ul=({ref:n,ref_key:s,ref_for:t})=>n!=null?Ve(n)||Te(n)||ye(n)?{i:Qe,r:n,k:s,f:!!t}:n:null;function e(n,s=null,t=null,o=0,l=null,r=n===Oe?0:1,i=!1,c=!1){const p={__v_isVNode:!0,__v_skip:!0,type:n,props:s,key:s&&ad(s),ref:s&&ul(s),scopeId:zl,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:o,dynamicProps:l,dynamicChildren:null,appContext:null,ctx:Qe};return c?(oi(p,t),r&128&&n.normalize(p)):t&&(p.shapeFlag|=Ve(t)?8:16),p.key!==p.key&&P("VNode created with invalid key (NaN). VNode type:",p.type),ko>0&&!i&&jn&&(p.patchFlag>0||r&6)&&p.patchFlag!==32&&jn.push(p),p}const M=Nm;function Wm(n,s=null,t=null,o=0,l=null,r=!1){if((!n||n===am)&&(n||P(`Invalid vnode type when creating vnode: ${n}.`),n=Xe),Ps(n)){const c=Vn(n,s,!0);return t&&oi(c,t),ko>0&&!r&&jn&&(c.shapeFlag&6?jn[jn.indexOf(n)]=c:jn.push(c)),c.patchFlag|=-2,c}if(ud(n)&&(n=n.__vccOpts),s){s=ce(s);let{class:c,style:p}=s;c&&!Ve(c)&&(s.class=ze(c)),Pe(p)&&(kl(p)&&!ae(p)&&(p=Ge({},p)),s.style=tn(p))}const i=Ve(n)?1:Nu(n)?128:Om(n)?64:Pe(n)?4:ye(n)?2:0;return i&4&&kl(n)&&(n=me(n),P("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",`
Component that was made reactive: `,n)),e(n,s,t,o,l,i,r,!0)}function ce(n){return n?kl(n)||Ql in n?Ge({},n):n:null}function Vn(n,s,t=!1){const{props:o,ref:l,patchFlag:r,children:i}=n,c=s?re(o||{},s):o;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&ad(c),ref:s&&s.ref?t&&l?ae(l)?l.concat(ul(s)):[l,ul(s)]:ul(s):l,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:r===-1&&ae(i)?i.map(rd):i,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:s&&n.type!==Oe?r===-1?16:r|16:r,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vn(n.ssContent),ssFallback:n.ssFallback&&Vn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function rd(n){const s=Vn(n);return ae(n.children)&&(s.children=n.children.map(rd)),s}function a(n=" ",s=0){return M(jo,null,n,s)}function De(n="",s=!1){return s?(D(),G(Xe,null,n)):M(Xe,null,n)}function qn(n){return n==null||typeof n=="boolean"?M(Xe):ae(n)?M(Oe,null,n.slice()):typeof n=="object"?Cs(n):M(jo,null,String(n))}function Cs(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Vn(n)}function oi(n,s){let t=0;const{shapeFlag:o}=n;if(s==null)s=null;else if(ae(s))t=16;else if(typeof s=="object")if(o&65){const l=s.default;l&&(l._c&&(l._d=!1),oi(n,l()),l._c&&(l._d=!0));return}else{t=32;const l=s._;!l&&!(Ql in s)?s._ctx=Qe:l===3&&Qe&&(Qe.slots._===1?s._=1:(s._=2,n.patchFlag|=1024))}else ye(s)?(s={default:s,_ctx:Qe},t=32):(s=String(s),o&64?(t=16,s=[a(s)]):t=8);n.children=s,n.shapeFlag|=t}function re(...n){const s={};for(let t=0;t<n.length;t++){const o=n[t];for(const l in o)if(l==="class")s.class!==o.class&&(s.class=ze([s.class,o.class]));else if(l==="style")s.style=tn([s.style,o.style]);else if(Po(l)){const r=s[l],i=o[l];i&&r!==i&&!(ae(r)&&r.includes(i))&&(s[l]=r?[].concat(r,i):i)}else l!==""&&(s[l]=o[l])}return s}function Tn(n,s,t,o=null){Mn(n,s,7,[t,o])}const qm=td();let jm=0;function Vm(n,s,t){const o=n.type,l=(s?s.appContext:n.appContext)||qm,r={uid:jm++,vnode:n,type:o,parent:s,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new iu(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:s?s.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qu(o,l),emitsOptions:Ru(o,l),emit:null,emitted:null,propsDefaults:We,inheritAttrs:o.inheritAttrs,ctx:We,data:We,props:We,attrs:We,slots:We,refs:We,setupState:We,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx=im(r),r.root=s?s.root:r,r.emit=jy.bind(null,r),n.ce&&n.ce(r),r}let Ke=null;const En=()=>Ke||Qe,Ft=n=>{Ke=n,n.scope.on()},ot=()=>{Ke&&Ke.scope.off(),Ke=null},Hm=Ls("slot,component");function er(n,s){const t=s.isNativeTag||tu;(Hm(n)||t(n))&&P("Do not use built-in or reserved HTML elements as component id: "+n)}function id(n){return n.vnode.shapeFlag&4}let _o=!1;function Gm(n,s=!1){_o=s;const{props:t,children:o}=n.vnode,l=id(n);gm(n,t,l,s),wm(n,o);const r=l?Km(n,s):void 0;return _o=!1,r}function Km(n,s){var t;const o=n.type;{if(o.name&&er(o.name,n.appContext.config),o.components){const r=Object.keys(o.components);for(let i=0;i<r.length;i++)er(r[i],n.appContext.config)}if(o.directives){const r=Object.keys(o.directives);for(let i=0;i<r.length;i++)Uu(r[i])}o.compilerOptions&&Um()&&P('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.')}n.accessCache=Object.create(null),n.proxy=Hl(new Proxy(n.ctx,Yu)),cm(n);const{setup:l}=o;if(l){const r=n.setupContext=l.length>1?pd(n):null;Ft(n),ct();const i=ps(l,n,0,[_t(n.props),r]);if(pt(),ot(),Lr(i)){if(i.then(ot,ot),s)return i.then(c=>{rc(n,c,s)}).catch(c=>{Gl(c,n,0)});if(n.asyncDep=i,!n.suspense){const c=(t=o.name)!==null&&t!==void 0?t:"Anonymous";P(`Component <${c}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`)}}else rc(n,i,s)}else cd(n,s)}function rc(n,s,t){ye(s)?n.type.__ssrInlineRender?n.ssrRender=s:n.render=s:Pe(s)?(Ps(s)&&P("setup() should not return VNodes directly - return a render function instead."),n.devtoolsRawSetupState=s,n.setupState=vu(s),pm(n)):s!==void 0&&P(`setup() should return an object. Received: ${s===null?"null":typeof s}`),cd(n,t)}let nr;const Um=()=>!nr;function cd(n,s,t){const o=n.type;if(!n.render){if(!s&&nr&&!o.render){const l=o.template||si(n).template;if(l){ts(n,"compile");const{isCustomElement:r,compilerOptions:i}=n.appContext.config,{delimiters:c,compilerOptions:p}=o,u=Ge(Ge({isCustomElement:r,delimiters:c},i),p);o.render=nr(l,u),os(n,"compile")}}n.render=o.render||An}Ft(n),ct(),dm(n),pt(),ot(),!o.render&&n.render===An&&!s&&(o.template?P('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'):P("Component is missing template or render function."))}function zm(n){return new Proxy(n.attrs,{get(s,t){return vl(),Bn(n,"get","$attrs"),s[t]},set(){return P("setupContext.attrs is readonly."),!1},deleteProperty(){return P("setupContext.attrs is readonly."),!1}})}function pd(n){const s=o=>{if(n.exposed&&P("expose() should be called only once per setup()."),o!=null){let l=typeof o;l==="object"&&(ae(o)?l="array":Te(o)&&(l="ref")),l!=="object"&&P(`expose() should be passed a plain object, received ${l}.`)}n.exposed=o||{}};let t;return Object.freeze({get attrs(){return t||(t=zm(n))},get slots(){return _t(n.slots)},get emit(){return(o,...l)=>n.emit(o,...l)},expose:s})}function Xl(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(vu(Hl(n.exposed)),{get(s,t){if(t in s)return s[t];if(t in tt)return tt[t](n)},has(s,t){return t in s||t in tt}}))}const Ym=/(?:^|[-_])(\w)/g,Zm=n=>n.replace(Ym,s=>s.toUpperCase()).replace(/[-_]/g,"");function vo(n,s=!0){return ye(n)?n.displayName||n.name:n.name||s&&n.__name}function ea(n,s,t=!1){let o=vo(s);if(!o&&s.__file){const l=s.__file.match(/([^/\\]+)\.\w+$/);l&&(o=l[1])}if(!o&&n&&n.parent){const l=r=>{for(const i in r)if(r[i]===s)return i};o=l(n.components||n.parent.type.components)||l(n.appContext.components)}return o?Zm(o):t?"App":"Anonymous"}function ud(n){return ye(n)&&"__vccOpts"in n}const S=(n,s)=>By(n,s,_o);function Jm(){return Qm().slots}function Qm(){const n=En();return n||P("useContext() called without active instance."),n.setupContext||(n.setupContext=pd(n))}function xn(n,s,t){const o=arguments.length;return o===2?Pe(s)&&!ae(s)?Ps(s)?M(n,null,[s]):M(n,s):M(n,null,s):(o>3?t=Array.prototype.slice.call(arguments,2):o===3&&Ps(t)&&(t=[t]),M(n,s,t))}const Xm=Symbol("ssrContext"),eg=()=>{{const n=N(Xm);return n||P("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."),n}};function da(n){return!!(n&&n.__v_isShallow)}function ng(){if(typeof window>"u")return;const n={style:"color:#3ba776"},s={style:"color:#0b1bc9"},t={style:"color:#b62e24"},o={style:"color:#9d288c"},l={header(h){return Pe(h)?h.__isVue?["div",n,"VueInstance"]:Te(h)?["div",{},["span",n,d(h)],"<",c(h.value),">"]:nt(h)?["div",{},["span",n,da(h)?"ShallowReactive":"Reactive"],"<",c(h),`>${Ms(h)?" (readonly)":""}`]:Ms(h)?["div",{},["span",n,da(h)?"ShallowReadonly":"Readonly"],"<",c(h),">"]:null:null},hasBody(h){return h&&h.__isVue},body(h){if(h&&h.__isVue)return["div",{},...r(h.$)]}};function r(h){const f=[];h.type.props&&h.props&&f.push(i("props",me(h.props))),h.setupState!==We&&f.push(i("setup",h.setupState)),h.data!==We&&f.push(i("data",me(h.data)));const m=p(h,"computed");m&&f.push(i("computed",m));const y=p(h,"inject");return y&&f.push(i("injected",y)),f.push(["div",{},["span",{style:o.style+";opacity:0.66"},"$ (internal): "],["object",{object:h}]]),f}function i(h,f){return f=Ge({},f),Object.keys(f).length?["div",{style:"line-height:1.25em;margin-bottom:0.6em"},["div",{style:"color:#476582"},h],["div",{style:"padding-left:1.25em"},...Object.keys(f).map(m=>["div",{},["span",o,m+": "],c(f[m],!1)])]]:["span",{}]}function c(h,f=!0){return typeof h=="number"?["span",s,h]:typeof h=="string"?["span",t,JSON.stringify(h)]:typeof h=="boolean"?["span",o,h]:Pe(h)?["object",{object:f?me(h):h}]:["span",t,String(h)]}function p(h,f){const m=h.type;if(ye(m))return;const y={};for(const A in h.ctx)u(m,A,f)&&(y[A]=h.ctx[A]);return y}function u(h,f,m){const y=h[m];if(ae(y)&&y.includes(f)||Pe(y)&&f in y||h.extends&&u(h.extends,f,m)||h.mixins&&h.mixins.some(A=>u(A,f,m)))return!0}function d(h){return da(h)?"ShallowRef":h.effect?"ComputedRef":"Ref"}window.devtoolsFormatters?window.devtoolsFormatters.push(l):window.devtoolsFormatters=[l]}const Il="3.2.47",sg="http://www.w3.org/2000/svg",Us=typeof document<"u"?document:null,ic=Us&&Us.createElement("template"),tg={insert:(n,s,t)=>{s.insertBefore(n,t||null)},remove:n=>{const s=n.parentNode;s&&s.removeChild(n)},createElement:(n,s,t,o)=>{const l=s?Us.createElementNS(sg,n):Us.createElement(n,t?{is:t}:void 0);return n==="select"&&o&&o.multiple!=null&&l.setAttribute("multiple",o.multiple),l},createText:n=>Us.createTextNode(n),createComment:n=>Us.createComment(n),setText:(n,s)=>{n.nodeValue=s},setElementText:(n,s)=>{n.textContent=s},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Us.querySelector(n),setScopeId(n,s){n.setAttribute(s,"")},insertStaticContent(n,s,t,o,l,r){const i=t?t.previousSibling:s.lastChild;if(l&&(l===r||l.nextSibling))for(;s.insertBefore(l.cloneNode(!0),t),!(l===r||!(l=l.nextSibling)););else{ic.innerHTML=o?`<svg>${n}</svg>`:n;const c=ic.content;if(o){const p=c.firstChild;for(;p.firstChild;)c.appendChild(p.firstChild);c.removeChild(p)}s.insertBefore(c,t)}return[i?i.nextSibling:s.firstChild,t?t.previousSibling:s.lastChild]}};function og(n,s,t){const o=n._vtc;o&&(s=(s?[s,...o]:[...o]).join(" ")),s==null?n.removeAttribute("class"):t?n.setAttribute("class",s):n.className=s}function lg(n,s,t){const o=n.style,l=Ve(t);if(t&&!l){if(s&&!Ve(s))for(const r in s)t[r]==null&&sr(o,r,"");for(const r in t)sr(o,r,t[r])}else{const r=o.display;l?s!==t&&(o.cssText=t):s&&n.removeAttribute("style"),"_vod"in n&&(o.display=r)}}const ag=/[^\\];\s*$/,cc=/\s*!important$/;function sr(n,s,t){if(ae(t))t.forEach(o=>sr(n,s,o));else if(t==null&&(t=""),ag.test(t)&&P(`Unexpected semicolon at the end of '${s}' style value: '${t}'`),s.startsWith("--"))n.setProperty(s,t);else{const o=rg(n,s);cc.test(t)?n.setProperty(us(o),t.replace(cc,""),"important"):n[o]=t}}const pc=["Webkit","Moz","ms"],ha={};function rg(n,s){const t=ha[s];if(t)return t;let o=Xn(s);if(o!=="filter"&&o in n)return ha[s]=o;o=rt(o);for(let l=0;l<pc.length;l++){const r=pc[l]+o;if(r in n)return ha[s]=r}return s}const uc="http://www.w3.org/1999/xlink";function ig(n,s,t,o,l){if(o&&s.startsWith("xlink:"))t==null?n.removeAttributeNS(uc,s.slice(6,s.length)):n.setAttributeNS(uc,s,t);else{const r=If(s);t==null||r&&!nu(t)?n.removeAttribute(s):n.setAttribute(s,r?"":t)}}function cg(n,s,t,o,l,r,i){if(s==="innerHTML"||s==="textContent"){o&&i(o,l,r),n[s]=t??"";return}if(s==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const p=t??"";(n.value!==p||n.tagName==="OPTION")&&(n.value=p),t==null&&n.removeAttribute(s);return}let c=!1;if(t===""||t==null){const p=typeof n[s];p==="boolean"?t=nu(t):t==null&&p==="string"?(t="",c=!0):p==="number"&&(t=0,c=!0)}try{n[s]=t}catch(p){c||P(`Failed setting prop "${s}" on <${n.tagName.toLowerCase()}>: value ${t} is invalid.`,p)}c&&n.removeAttribute(s)}function Ct(n,s,t,o){n.addEventListener(s,t,o)}function pg(n,s,t,o){n.removeEventListener(s,t,o)}function ug(n,s,t,o,l=null){const r=n._vei||(n._vei={}),i=r[s];if(o&&i)i.value=o;else{const[c,p]=dg(s);if(o){const u=r[s]=yg(o,l);Ct(n,c,u,p)}else i&&(pg(n,c,i,p),r[s]=void 0)}}const dc=/(?:Once|Passive|Capture)$/;function dg(n){let s;if(dc.test(n)){s={};let o;for(;o=n.match(dc);)n=n.slice(0,n.length-o[0].length),s[o[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):us(n.slice(2)),s]}let fa=0;const hg=Promise.resolve(),fg=()=>fa||(hg.then(()=>fa=0),fa=Date.now());function yg(n,s){const t=o=>{if(!o._vts)o._vts=Date.now();else if(o._vts<=t.attached)return;Mn(mg(o,t.value),s,5,[o])};return t.value=n,t.attached=fg(),t}function mg(n,s){if(ae(s)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},s.map(o=>l=>!l._stopped&&o&&o(l))}else return s}const hc=/^on[a-z]/,gg=(n,s,t,o,l=!1,r,i,c,p)=>{s==="class"?og(n,o,l):s==="style"?lg(n,t,o):Po(s)?gl(s)||ug(n,s,t,o,i):(s[0]==="."?(s=s.slice(1),!0):s[0]==="^"?(s=s.slice(1),!1):Ag(n,s,o,l))?cg(n,s,o,r,i,c,p):(s==="true-value"?n._trueValue=o:s==="false-value"&&(n._falseValue=o),ig(n,s,o,l))};function Ag(n,s,t,o){return o?!!(s==="innerHTML"||s==="textContent"||s in n&&hc.test(s)&&ye(t)):s==="spellcheck"||s==="draggable"||s==="translate"||s==="form"||s==="list"&&n.tagName==="INPUT"||s==="type"&&n.tagName==="TEXTAREA"||hc.test(s)&&Ve(t)?!1:s in n}const gs="transition",qt="animation",dd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},bg=Ge({},Jy.props,dd),qs=(n,s=[])=>{ae(n)?n.forEach(t=>t(...s)):n&&n(...s)},fc=n=>n?ae(n)?n.some(s=>s.length>1):n.length>1:!1;function Bg(n){const s={};for(const Z in n)Z in dd||(s[Z]=n[Z]);if(n.css===!1)return s;const{name:t="v",type:o,duration:l,enterFromClass:r=`${t}-enter-from`,enterActiveClass:i=`${t}-enter-active`,enterToClass:c=`${t}-enter-to`,appearFromClass:p=r,appearActiveClass:u=i,appearToClass:d=c,leaveFromClass:h=`${t}-leave-from`,leaveActiveClass:f=`${t}-leave-active`,leaveToClass:m=`${t}-leave-to`}=n,y=Cg(l),A=y&&y[0],b=y&&y[1],{onBeforeEnter:_,onEnter:C,onEnterCancelled:k,onLeave:w,onLeaveCancelled:$,onBeforeAppear:R=_,onAppear:H=C,onAppearCancelled:E=k}=s,j=(Z,_e,Fe)=>{bs(Z,_e?d:c),bs(Z,_e?u:i),Fe&&Fe()},ee=(Z,_e)=>{Z._isLeaving=!1,bs(Z,h),bs(Z,m),bs(Z,f),_e&&_e()},he=Z=>(_e,Fe)=>{const Se=Z?H:C,qe=()=>j(_e,Z,Fe);qs(Se,[_e,qe]),yc(()=>{bs(_e,Z?p:r),ls(_e,Z?d:c),fc(Se)||mc(_e,o,A,qe)})};return Ge(s,{onBeforeEnter(Z){qs(_,[Z]),ls(Z,r),ls(Z,i)},onBeforeAppear(Z){qs(R,[Z]),ls(Z,p),ls(Z,u)},onEnter:he(!1),onAppear:he(!0),onLeave(Z,_e){Z._isLeaving=!0;const Fe=()=>ee(Z,_e);ls(Z,h),fd(),ls(Z,f),yc(()=>{Z._isLeaving&&(bs(Z,h),ls(Z,m),fc(w)||mc(Z,o,b,Fe))}),qs(w,[Z,Fe])},onEnterCancelled(Z){j(Z,!1),qs(k,[Z])},onAppearCancelled(Z){j(Z,!0),qs(E,[Z])},onLeaveCancelled(Z){ee(Z),qs($,[Z])}})}function Cg(n){if(n==null)return null;if(Pe(n))return[ya(n.enter),ya(n.leave)];{const s=ya(n);return[s,s]}}function ya(n){const s=Mf(n);return Dy(s,"<transition> explicit duration"),s}function ls(n,s){s.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n._vtc||(n._vtc=new Set)).add(s)}function bs(n,s){s.split(/\s+/).forEach(o=>o&&n.classList.remove(o));const{_vtc:t}=n;t&&(t.delete(s),t.size||(n._vtc=void 0))}function yc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let kg=0;function mc(n,s,t,o){const l=n._endId=++kg,r=()=>{l===n._endId&&o()};if(t)return setTimeout(r,t);const{type:i,timeout:c,propCount:p}=hd(n,s);if(!i)return o();const u=i+"end";let d=0;const h=()=>{n.removeEventListener(u,f),r()},f=m=>{m.target===n&&++d>=p&&h()};setTimeout(()=>{d<p&&h()},c+1),n.addEventListener(u,f)}function hd(n,s){const t=window.getComputedStyle(n),o=y=>(t[y]||"").split(", "),l=o(`${gs}Delay`),r=o(`${gs}Duration`),i=gc(l,r),c=o(`${qt}Delay`),p=o(`${qt}Duration`),u=gc(c,p);let d=null,h=0,f=0;s===gs?i>0&&(d=gs,h=i,f=r.length):s===qt?u>0&&(d=qt,h=u,f=p.length):(h=Math.max(i,u),d=h>0?i>u?gs:qt:null,f=d?d===gs?r.length:p.length:0);const m=d===gs&&/\b(transform|all)(,|$)/.test(o(`${gs}Property`).toString());return{type:d,timeout:h,propCount:f,hasTransform:m}}function gc(n,s){for(;n.length<s.length;)n=n.concat(n);return Math.max(...s.map((t,o)=>Ac(t)+Ac(n[o])))}function Ac(n){return Number(n.slice(0,-1).replace(",","."))*1e3}function fd(){return document.body.offsetHeight}const yd=new WeakMap,md=new WeakMap,gd={name:"TransitionGroup",props:Ge({},bg,{tag:String,moveClass:String}),setup(n,{slots:s}){const t=En(),o=qu();let l,r;return Zl(()=>{if(!l.length)return;const i=n.moveClass||`${n.name||"v"}-move`;if(!Ig(l[0].el,t.vnode.el,i))return;l.forEach(Dg),l.forEach(wg);const c=l.filter(xg);fd(),c.forEach(p=>{const u=p.el,d=u.style;ls(u,i),d.transform=d.webkitTransform=d.transitionDuration="";const h=u._moveCb=f=>{f&&f.target!==u||(!f||/transform$/.test(f.propertyName))&&(u.removeEventListener("transitionend",h),u._moveCb=null,bs(u,i))};u.addEventListener("transitionend",h)})}),()=>{const i=me(n),c=Bg(i);let p=i.tag||Oe;l=r,r=s.default?Xr(s.default()):[];for(let u=0;u<r.length;u++){const d=r[u];d.key!=null?Tt(d,Co(d,c,o,t)):P("<TransitionGroup> children must be keyed.")}if(l)for(let u=0;u<l.length;u++){const d=l[u];Tt(d,Co(d,c,o,t)),yd.set(d,d.el.getBoundingClientRect())}return M(p,null,r)}}},_g=n=>delete n.mode;gd.props;const vg=gd;function Dg(n){const s=n.el;s._moveCb&&s._moveCb(),s._enterCb&&s._enterCb()}function wg(n){md.set(n,n.el.getBoundingClientRect())}function xg(n){const s=yd.get(n),t=md.get(n),o=s.left-t.left,l=s.top-t.top;if(o||l){const r=n.el.style;return r.transform=r.webkitTransform=`translate(${o}px,${l}px)`,r.transitionDuration="0s",n}}function Ig(n,s,t){const o=n.cloneNode();n._vtc&&n._vtc.forEach(i=>{i.split(/\s+/).forEach(c=>c&&o.classList.remove(c))}),t.split(/\s+/).forEach(i=>i&&o.classList.add(i)),o.style.display="none";const l=s.nodeType===1?s:s.parentNode;l.appendChild(o);const{hasTransform:r}=hd(o);return l.removeChild(o),r}const bc=n=>{const s=n.props["onUpdate:modelValue"]||!1;return ae(s)?t=>_s(s,t):s};function Sg(n){n.target.composing=!0}function Bc(n){const s=n.target;s.composing&&(s.composing=!1,s.dispatchEvent(new Event("input")))}const Eg={created(n,{modifiers:{lazy:s,trim:t,number:o}},l){n._assign=bc(l);const r=o||l.props&&l.props.type==="number";Ct(n,s?"change":"input",i=>{if(i.target.composing)return;let c=n.value;t&&(c=c.trim()),r&&(c=La(c)),n._assign(c)}),t&&Ct(n,"change",()=>{n.value=n.value.trim()}),s||(Ct(n,"compositionstart",Sg),Ct(n,"compositionend",Bc),Ct(n,"change",Bc))},mounted(n,{value:s}){n.value=s??""},beforeUpdate(n,{value:s,modifiers:{lazy:t,trim:o,number:l}},r){if(n._assign=bc(r),n.composing||document.activeElement===n&&n.type!=="range"&&(t||o&&n.value.trim()===s||(l||n.type==="number")&&La(n.value)===s))return;const i=s??"";n.value!==i&&(n.value=i)}},$g={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Cc=(n,s)=>t=>{if(!("key"in t))return;const o=us(t.key);if(s.some(l=>l===o||$g[l]===o))return n(t)},Ad={beforeMount(n,{value:s},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&s?t.beforeEnter(n):jt(n,s)},mounted(n,{value:s},{transition:t}){t&&s&&t.enter(n)},updated(n,{value:s,oldValue:t},{transition:o}){!s!=!t&&(o?s?(o.beforeEnter(n),jt(n,!0),o.enter(n)):o.leave(n,()=>{jt(n,!1)}):jt(n,s))},beforeUnmount(n,{value:s}){jt(n,s)}};function jt(n,s){n.style.display=s?n._vod:"none"}const Tg=Ge({patchProp:gg},tg);let kc;function Fg(){return kc||(kc=$m(Tg))}const Og=(...n)=>{const s=Fg().createApp(...n);Mg(s),Pg(s);const{mount:t}=s;return s.mount=o=>{const l=Rg(o);if(!l)return;const r=s._component;!ye(r)&&!r.render&&!r.template&&(r.template=l.innerHTML),l.innerHTML="";const i=t(l,!1,l instanceof SVGElement);return l instanceof Element&&(l.removeAttribute("v-cloak"),l.setAttribute("data-v-app","")),i},s};function Mg(n){Object.defineProperty(n.config,"isNativeTag",{value:s=>eu(s)||wf(s),writable:!1})}function Pg(n){{const s=n.config.isCustomElement;Object.defineProperty(n.config,"isCustomElement",{get(){return s},set(){P("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.")}});const t=n.config.compilerOptions,o='The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';Object.defineProperty(n.config,"compilerOptions",{get(){return P(o),t},set(){P(o)}})}}function Rg(n){if(Ve(n)){const s=document.querySelector(n);return s||P(`Failed to mount app: mount target selector "${n}" returned null.`),s}return window.ShadowRoot&&n instanceof window.ShadowRoot&&n.mode==="closed"&&P('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),n}function Lg(){ng()}Lg();function tr(n,s={},t){for(const o in n){const l=n[o],r=t?`${t}:${o}`:o;typeof l=="object"&&l!==null?tr(l,s,r):typeof l=="function"&&(s[r]=l)}return s}function Ng(n,s){return n.reduce((t,o)=>t.then(()=>o.apply(void 0,s)),Promise.resolve())}function Wg(n,s){return Promise.all(n.map(t=>t.apply(void 0,s)))}function ma(n,s){for(const t of n)t(s)}class qg{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(s,t,o={}){if(!s||typeof t!="function")return()=>{};const l=s;let r;for(;this._deprecatedHooks[s];)r=this._deprecatedHooks[s],s=r.to;if(r&&!o.allowDeprecated){let i=r.message;i||(i=`${l} hook has been deprecated`+(r.to?`, please use ${r.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}return this._hooks[s]=this._hooks[s]||[],this._hooks[s].push(t),()=>{t&&(this.removeHook(s,t),t=void 0)}}hookOnce(s,t){let o,l=(...r)=>(typeof o=="function"&&o(),o=void 0,l=void 0,t(...r));return o=this.hook(s,l),o}removeHook(s,t){if(this._hooks[s]){const o=this._hooks[s].indexOf(t);o!==-1&&this._hooks[s].splice(o,1),this._hooks[s].length===0&&delete this._hooks[s]}}deprecateHook(s,t){this._deprecatedHooks[s]=typeof t=="string"?{to:t}:t;const o=this._hooks[s]||[];this._hooks[s]=void 0;for(const l of o)this.hook(s,l)}deprecateHooks(s){Object.assign(this._deprecatedHooks,s);for(const t in s)this.deprecateHook(t,s[t])}addHooks(s){const t=tr(s),o=Object.keys(t).map(l=>this.hook(l,t[l]));return()=>{for(const l of o.splice(0,o.length))l()}}removeHooks(s){const t=tr(s);for(const o in t)this.removeHook(o,t[o])}callHook(s,...t){return this.callHookWith(Ng,s,...t)}callHookParallel(s,...t){return this.callHookWith(Wg,s,...t)}callHookWith(s,t,...o){const l=this._before||this._after?{name:t,args:o,context:{}}:void 0;this._before&&ma(this._before,l);const r=s(this._hooks[t]||[],o);return r instanceof Promise?r.finally(()=>{this._after&&l&&ma(this._after,l)}):(this._after&&l&&ma(this._after,l),r)}beforeEach(s){return this._before=this._before||[],this._before.push(s),()=>{const t=this._before.indexOf(s);t!==-1&&this._before.splice(t,1)}}afterEach(s){return this._after=this._after||[],this._after.push(s),()=>{const t=this._after.indexOf(s);t!==-1&&this._after.splice(t,1)}}}function jg(){return new qg}function Vg(n){return Array.isArray(n)?n:[n]}const bd=["title","script","style","noscript"],li=["base","meta","link","style","script","noscript"],Hg=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Gg=["base","title","titleTemplate","bodyAttrs","htmlAttrs"],Kg=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Bd(n){let s=9;for(let t=0;t<n.length;)s=Math.imul(s^n.charCodeAt(t++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Sl(n){return Bd(`${n.tag}:${n.textContent||n.innerHTML||""}:${Object.entries(n.props).map(([s,t])=>`${s}:${String(t)}`).join(",")}`)}function Ug(n){let s=9;for(const t of n)for(let o=0;o<t.length;)s=Math.imul(s^t.charCodeAt(o++),9**9);return((s^s>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Cd(n,s){const{props:t,tag:o}=n;if(Gg.includes(o))return o;if(o==="link"&&t.rel==="canonical")return"canonical";if(t.charset)return"charset";const l=["id"];o==="meta"&&l.push("name","property","http-equiv");for(const r of l)if(typeof t[r]<"u"){const i=String(t[r]);return s&&!s(i)?!1:`${o}:${r}:${i}`}return!1}const nl=(n,s=!1,t)=>{const{tag:o,$el:l}=n;l&&(Object.entries(o.props).forEach(([r,i])=>{i=String(i);const c=`attr:${r}`;if(r==="class"){if(!i)return;for(const p of i.split(" ")){const u=`${c}:${p}`;t&&t(n,u,()=>l.classList.remove(p)),l.classList.contains(p)||l.classList.add(p)}return}t&&!r.startsWith("data-h-")&&t(n,c,()=>l.removeAttribute(r)),(s||l.getAttribute(r)!==i)&&l.setAttribute(r,i)}),bd.includes(o.tag)&&(o.textContent&&o.textContent!==l.textContent?l.textContent=o.textContent:o.innerHTML&&o.innerHTML!==l.innerHTML&&(l.innerHTML=o.innerHTML)))};let Vt=!1;async function kd(n,s={}){var f,m;const t={shouldRender:!0};if(await n.hooks.callHook("dom:beforeRender",t),!t.shouldRender)return;const o=s.document||n.resolvedOptions.document||window.document,l=(await n.resolveTags()).map(c);if(n.resolvedOptions.experimentalHashHydration&&(Vt=Vt||n._hash||!1,Vt)){const y=Ug(l.map(A=>A.tag._h));if(Vt===y)return;Vt=y}const r=n._popSideEffectQueue();n.headEntries().map(y=>y._sde).forEach(y=>{Object.entries(y).forEach(([A,b])=>{r[A]=b})});const i=(y,A,b)=>{A=`${y.renderId}:${A}`,y.entry&&(y.entry._sde[A]=b),delete r[A]};function c(y){const A=n.headEntries().find(_=>_._i===y._e),b={renderId:y._d||Sl(y),$el:null,shouldRender:!0,tag:y,entry:A,markSideEffect:(_,C)=>i(b,_,C)};return b}const p=[],u={body:[],head:[]},d=y=>{n._elMap[y.renderId]=y.$el,p.push(y),i(y,"el",()=>{var A;(A=y.$el)==null||A.remove(),delete n._elMap[y.renderId]})};for(const y of l){if(await n.hooks.callHook("dom:beforeRenderTag",y),!y.shouldRender)continue;const{tag:A}=y;if(A.tag==="title"){o.title=A.textContent||"",p.push(y);continue}if(A.tag==="htmlAttrs"||A.tag==="bodyAttrs"){y.$el=o[A.tag==="htmlAttrs"?"documentElement":"body"],nl(y,!1,i),p.push(y);continue}if(y.$el=n._elMap[y.renderId],!y.$el&&A.key&&(y.$el=o.querySelector(`${(f=A.tagPosition)!=null&&f.startsWith("body")?"body":"head"} > ${A.tag}[data-h-${A._h}]`)),y.$el){y.tag._d&&nl(y),d(y);continue}u[(m=A.tagPosition)!=null&&m.startsWith("body")?"body":"head"].push(y)}const h={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(u).forEach(([y,A])=>{var _;if(!A.length)return;const b=(_=o==null?void 0:o[y])==null?void 0:_.children;if(b){for(const C of[...b].reverse()){const k=C.tagName.toLowerCase();if(!li.includes(k))continue;const w=C.getAttributeNames().reduce((E,j)=>({...E,[j]:C.getAttribute(j)}),{}),$={tag:k,props:w};C.innerHTML&&($.innerHTML=C.innerHTML);const R=Sl($);let H=A.findIndex(E=>(E==null?void 0:E.renderId)===R);if(H===-1){const E=Cd($);H=A.findIndex(j=>(j==null?void 0:j.tag._d)&&j.tag._d===E)}if(H!==-1){const E=A[H];E.$el=C,nl(E),d(E),delete A[H]}}A.forEach(C=>{const k=C.tag.tagPosition||"head";h[k]=h[k]||o.createDocumentFragment(),C.$el||(C.$el=o.createElement(C.tag.tag),nl(C,!0)),h[k].appendChild(C.$el),d(C)})}}),h.head&&o.head.appendChild(h.head),h.bodyOpen&&o.body.insertBefore(h.bodyOpen,o.body.firstChild),h.bodyClose&&o.body.appendChild(h.bodyClose);for(const y of p)await n.hooks.callHook("dom:renderTag",y);Object.values(r).forEach(y=>y())}let ga=null;async function _d(n,s={}){function t(){return ga=null,kd(n,s)}const o=s.delayFn||(l=>setTimeout(l,10));return ga=ga||new Promise(l=>o(()=>l(t())))}const zg=n=>({hooks:{"entries:updated":function(s){if(typeof(n==null?void 0:n.document)>"u"&&typeof window>"u")return;let t=n==null?void 0:n.delayFn;!t&&typeof requestAnimationFrame<"u"&&(t=requestAnimationFrame),_d(s,{document:(n==null?void 0:n.document)||window.document,delayFn:t})}}});function Yg(n){var s;return((s=n==null?void 0:n.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:s.getAttribute("content"))||!1}const _c={critical:2,high:9,low:12,base:-1,title:1,meta:10};function vc(n){if(typeof n.tagPriority=="number")return n.tagPriority;if(n.tag==="meta"){if(n.props.charset)return-2;if(n.props["http-equiv"]==="content-security-policy")return 0}const s=n.tagPriority||n.tag;return s in _c?_c[s]:10}const Zg=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function Jg(){return{hooks:{"tags:resolve":n=>{const s=t=>{var o;return(o=n.tags.find(l=>l._d===t))==null?void 0:o._p};for(const{prefix:t,offset:o}of Zg)for(const l of n.tags.filter(r=>typeof r.tagPriority=="string"&&r.tagPriority.startsWith(t))){const r=s(l.tagPriority.replace(t,""));typeof r<"u"&&(l._p=r+o)}n.tags.sort((t,o)=>t._p-o._p).sort((t,o)=>vc(t)-vc(o))}}}}const Dc=(n,s)=>n==null?s||null:typeof n=="function"?n(s):n.replace("%s",s??""),Qg=()=>({hooks:{"tags:resolve":n=>{const{tags:s}=n;let t=s.findIndex(l=>l.tag==="titleTemplate");const o=s.findIndex(l=>l.tag==="title");if(o!==-1&&t!==-1){const l=Dc(s[t].textContent,s[o].textContent);l!==null?s[o].textContent=l||s[o].textContent:delete s[o]}else if(t!==-1){const l=Dc(s[t].textContent);l!==null&&(s[t].textContent=l,s[t].tag="title",t=-1)}t!==-1&&delete s[t],n.tags=s.filter(Boolean)}}}),Xg=()=>({hooks:{"tag:normalise":function({tag:n}){typeof n.props.body<"u"&&(n.tagPosition="bodyClose",delete n.props.body)}}}),vd=typeof window<"u",eA=()=>({hooks:{"tag:normalise":n=>{var r,i;const{tag:s,entry:t,resolvedOptions:o}=n;o.experimentalHashHydration===!0&&(s._h=Sl(s));const l=typeof s.props._dynamic<"u";!li.includes(s.tag)||!s.key||vd||(i=(r=wd())==null?void 0:r.resolvedOptions)!=null&&i.document||(t._m==="server"||l)&&(s._h=s._h||Sl(s),s.props[`data-h-${s._h}`]="")},"tags:resolve":n=>{n.tags=n.tags.map(s=>(delete s.props._dynamic,s))}}}),wc=["script","link","bodyAttrs"],nA=()=>{const n=(s,t)=>{const o={},l={};Object.entries(t.props).forEach(([i,c])=>{i.startsWith("on")&&typeof c=="function"?l[i]=c:o[i]=c});let r;return s==="dom"&&t.tag==="script"&&typeof o.src=="string"&&typeof l.onload<"u"&&(r=o.src,delete o.src),{props:o,eventHandlers:l,delayedSrc:r}};return{hooks:{"ssr:render":function(s){s.tags=s.tags.map(t=>(!wc.includes(t.tag)||!Object.entries(t.props).find(([o,l])=>o.startsWith("on")&&typeof l=="function")||(t.props=n("ssr",t).props),t))},"dom:beforeRenderTag":function(s){if(!wc.includes(s.tag.tag)||!Object.entries(s.tag.props).find(([r,i])=>r.startsWith("on")&&typeof i=="function"))return;const{props:t,eventHandlers:o,delayedSrc:l}=n("dom",s.tag);Object.keys(o).length&&(s.tag.props=t,s.tag._eventHandlers=o,s.tag._delayedSrc=l)},"dom:renderTag":function(s){const t=s.$el;if(!s.tag._eventHandlers||!t)return;const o=s.tag.tag==="bodyAttrs"&&typeof window<"u"?window:t;Object.entries(s.tag._eventHandlers).forEach(([l,r])=>{const i=`${s.tag._d||s.tag._p}:${l}`,c=l.slice(2).toLowerCase(),p=`data-h-${c}`;if(s.markSideEffect(i,()=>{}),t.hasAttribute(p))return;const u=r;t.setAttribute(p,""),o.addEventListener(c,u),s.entry&&(s.entry._sde[i]=()=>{o.removeEventListener(c,u),t.removeAttribute(p)})}),s.tag._delayedSrc&&t.setAttribute("src",s.tag._delayedSrc)}}}},sA=["templateParams","htmlAttrs","bodyAttrs"],tA=n=>{n=n||{};const s=n.dedupeKeys||["hid","vmid","key"];return{hooks:{"tag:normalise":function({tag:t}){s.forEach(l=>{t.props[l]&&(t.key=t.props[l],delete t.props[l])});const o=t.key?`${t.tag}:${t.key}`:Cd(t);o&&(t._d=o)},"tags:resolve":function(t){const o={};t.tags.forEach(r=>{const i=r._d||r._p,c=o[i];if(c){let p=r==null?void 0:r.tagDuplicateStrategy;if(!p&&sA.includes(r.tag)&&(p="merge"),p==="merge"){const d=c.props;["class","style"].forEach(h=>{r.props[h]&&d[h]&&(h==="style"&&!d[h].endsWith(";")&&(d[h]+=";"),r.props[h]=`${d[h]} ${r.props[h]}`)}),o[i].props={...d,...r.props};return}else if(r._e===c._e){c._duped=c._duped||[],r._d=`${c._d}:${c._duped.length+1}`,c._duped.push(r);return}const u=Object.keys(r.props).length;if((u===0||u===1&&typeof r.props["data-h-key"]<"u")&&!r.innerHTML&&!r.textContent){delete o[i];return}}o[i]=r});const l=[];Object.values(o).forEach(r=>{const i=r._duped;delete r._duped,l.push(r),i&&l.push(...i)}),t.tags=l}}}};function Aa(n,s){const t=(l,r)=>{let i;return r==="pageTitle"||r==="s"?i=s.pageTitle:r.includes(".")?i=r.split(".").reduce((c,p)=>c[p]||"",s):i=s[r],i||""};let o=n.replace(/%(\w+\.+\w+)/g,t).replace(/%(\w+)/g,t).trim();return s.separator&&(o.endsWith(s.separator)&&(o=o.slice(0,-s.separator.length).trim()),o.startsWith(s.separator)&&(o=o.slice(s.separator.length).trim()),o=o.replace(new RegExp(`\\${s.separator}\\s*\\${s.separator}`,"g"),s.separator)),o}function oA(){return{hooks:{"tags:resolve":n=>{var r;const{tags:s}=n,t=(r=s.find(i=>i.tag==="title"))==null?void 0:r.textContent,o=s.findIndex(i=>i.tag==="templateParams"),l=o!==-1?s[o].textContent:{};l.pageTitle=l.pageTitle||t||"";for(const i of s)["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string"?i.textContent=Aa(i.textContent,l):i.tag==="meta"&&typeof i.props.content=="string"?i.props.content=Aa(i.props.content,l):i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string"&&(i.innerHTML=Aa(i.innerHTML,l));n.tags=s.filter(i=>i.tag!=="templateParams")}}}}let Dd;const lA=n=>Dd=n,wd=()=>Dd;async function aA(n,s){const t={tag:n,props:{}};return["title","titleTemplate","templateParams"].includes(n)?(t.textContent=s instanceof Promise?await s:s,t):typeof s=="string"?["script","noscript","style"].includes(n)?(n==="script"&&(/^(https?:)?\/\//.test(s)||s.startsWith("/"))?t.props.src=s:(t.innerHTML=s,t.key=Bd(s)),t):!1:(t.props=await iA(n,{...s}),t.props.children&&(t.props.innerHTML=t.props.children),delete t.props.children,Object.keys(t.props).filter(o=>Kg.includes(o)).forEach(o=>{(!["innerHTML","textContent"].includes(o)||bd.includes(t.tag))&&(t[o]=t.props[o]),delete t.props[o]}),["innerHTML","textContent"].forEach(o=>{if(t.tag==="script"&&typeof t[o]=="string"&&["application/ld+json","application/json"].includes(t.props.type))try{t[o]=JSON.parse(t[o])}catch{t[o]=""}typeof t[o]=="object"&&(t[o]=JSON.stringify(t[o]))}),t.props.class&&(t.props.class=rA(t.props.class)),t.props.content&&Array.isArray(t.props.content)?t.props.content.map(o=>({...t,props:{...t.props,content:o}})):t)}function rA(n){return typeof n=="object"&&!Array.isArray(n)&&(n=Object.keys(n).filter(s=>n[s])),(Array.isArray(n)?n.join(" "):n).split(" ").filter(s=>s.trim()).filter(Boolean).join(" ")}async function iA(n,s){for(const t of Object.keys(s)){const o=t.startsWith("data-");s[t]instanceof Promise&&(s[t]=await s[t]),String(s[t])==="true"?s[t]=o?"true":"":String(s[t])==="false"&&(o?s[t]="false":delete s[t])}return s}const cA=10;async function pA(n){const s=[];return Object.entries(n.resolvedInput).filter(([t,o])=>typeof o<"u"&&Hg.includes(t)).forEach(([t,o])=>{const l=Vg(o);s.push(...l.map(r=>aA(t,r)).flat())}),(await Promise.all(s)).flat().filter(Boolean).map((t,o)=>(t._e=n._i,t._p=(n._i<<cA)+o,t))}const uA=()=>[tA(),Jg(),oA(),Qg(),eA(),nA(),Xg()],dA=(n={})=>[zg({document:n==null?void 0:n.document,delayFn:n==null?void 0:n.domDelayFn})];function hA(n={}){const s=fA({...n,plugins:[...dA(n),...(n==null?void 0:n.plugins)||[]]});return n.experimentalHashHydration&&s.resolvedOptions.document&&(s._hash=Yg(s.resolvedOptions.document)),lA(s),s}function fA(n={}){let s=[],t={},o=0;const l=jg();n!=null&&n.hooks&&l.addHooks(n.hooks),n.plugins=[...uA(),...(n==null?void 0:n.plugins)||[]],n.plugins.forEach(c=>c.hooks&&l.addHooks(c.hooks)),n.document=n.document||(vd?document:void 0);const r=()=>l.callHook("entries:updated",i),i={resolvedOptions:n,headEntries(){return s},get hooks(){return l},use(c){c.hooks&&l.addHooks(c.hooks)},push(c,p){const u={_i:o++,input:c,_sde:{}};return p!=null&&p.mode&&(u._m=p==null?void 0:p.mode),p!=null&&p.transform&&(u._t=p==null?void 0:p.transform),s.push(u),r(),{dispose(){s=s.filter(d=>d._i!==u._i?!0:(t={...t,...d._sde||{}},d._sde={},r(),!1))},patch(d){s=s.map(h=>(h._i===u._i&&(u.input=h.input=d,r()),h))}}},async resolveTags(){const c={tags:[],entries:[...s]};await l.callHook("entries:resolve",c);for(const p of c.entries){const u=p._t||(d=>d);p.resolvedInput=u(p.resolvedInput||p.input);for(const d of await pA(p)){const h={tag:d,entry:p,resolvedOptions:i.resolvedOptions};await l.callHook("tag:normalise",h),c.tags.push(h.tag)}}return await l.callHook("tags:resolve",c),c.tags},_popSideEffectQueue(){const c={...t};return t={},c},_elMap:{}};return i.hooks.callHook("init",i),i}function yA(n){return typeof n=="function"?n():v(n)}function El(n,s=""){if(n instanceof Promise)return n;const t=yA(n);if(!n||!t)return t;if(Array.isArray(t))return t.map(o=>El(o,s));if(typeof t=="object"){let o=!1;const l=Object.fromEntries(Object.entries(t).map(([r,i])=>r==="titleTemplate"||r.startsWith("on")?[r,v(i)]:((typeof i=="function"||Te(i))&&(o=!0),[r,El(i,r)])));return o&&li.includes(String(s))&&(l._dynamic=!0),l}return t}const mA=Il.startsWith("3"),gA=typeof window<"u",xd="usehead";function ai(){return En()&&N(xd)||wd()}function AA(n){return{install(t){mA&&(t.config.globalProperties.$unhead=n,t.config.globalProperties.$head=n,t.provide(xd,n))}}.install}function bA(n={}){const s=hA({...n,domDelayFn:t=>setTimeout(()=>sn(()=>t()),10),plugins:[BA(),...(n==null?void 0:n.plugins)||[]]});return s.install=AA(s),s}const BA=()=>({hooks:{"entries:resolve":function(n){for(const s of n.entries)s.resolvedInput=El(s.input)}}});function CA(n,s={}){const t=ai(),o=z(!1),l=z({});ut(()=>{l.value=o.value?{}:El(n)});const r=t.push(l.value,s);return Be(l,c=>{r.patch(c)}),En()&&(Wo(()=>{r.dispose()}),Gu(()=>{o.value=!0}),Hu(()=>{o.value=!1})),r}function kA(n,s={}){return ai().push(n,s)}function ri(n,s={}){var o;const t=ai();if(t){const l=gA||!!((o=t.resolvedOptions)!=null&&o.document);return s.mode==="server"&&l||s.mode==="client"&&!l?void 0:l?CA(n,s):kA(n,s)}}const _A=n=>ri({htmlAttrs:n});function vA(n,s){const t=bA(s||{}),o={unhead:t,install(l){Il.startsWith("3")&&(l.config.globalProperties.$head=t,l.provide("usehead",t))},use(l){t.use(l)},resolveTags(){return t.resolveTags()},headEntries(){return t.headEntries()},headTags(){return t.resolveTags()},push(l,r){return t.push(l,r)},addEntry(l,r){return t.push(l,r)},addHeadObjs(l,r){return t.push(l,r)},addReactiveEntry(l,r){const i=ri(l,r);return typeof i<"u"?i.dispose:()=>{}},removeHeadObjs(){},updateDOM(l,r){r?kd(t,{document:l}):_d(t,{delayFn:i=>setTimeout(()=>i(),50),document:l})},internalHooks:t.hooks,hooks:{"before:dom":[],"resolved:tags":[],"resolved:entries":[]}};return t.addHeadObjs=o.addHeadObjs,t.updateDOM=o.updateDOM,t.hooks.hook("dom:beforeRender",l=>{for(const r of o.hooks["before:dom"])r()===!1&&(l.shouldRender=!1)}),n&&o.addHeadObjs(n),o}const ao=Symbol("v-click-clicks"),zs=Symbol("v-click-clicks-elements"),or=Symbol("v-click-clicks-order-map"),ro=Symbol("v-click-clicks-disabled"),Id=Symbol("slidev-slide-scale"),Y=Symbol("slidev-slidev-context"),DA=Symbol("slidev-route"),wA=Symbol("slidev-slide-context"),Ks="slidev-vclick-target",ba="slidev-vclick-hidden",xA="slidev-vclick-fade",Ba="slidev-vclick-hidden-explicitly",Ht="slidev-vclick-current",sl="slidev-vclick-prior",IA=["localhost","127.0.0.1"];let SA=(n=21)=>crypto.getRandomValues(new Uint8Array(n)).reduce((s,t)=>(t&=63,t<36?s+=t.toString(36):t<62?s+=(t-26).toString(36).toUpperCase():t>62?s+="-":s+="_",s),"");function lr(n,s){if(!n)return!1;const t=n.indexOf(s);return t>=0?(n.splice(t,1),!0):!1}function EA(...n){let s,t,o;n.length===1?(s=0,o=1,[t]=n):[s,t,o=1]=n;const l=[];let r=s;for(;r<t;)l.push(r),r+=o||1;return l}function $A(n){return n!=null}function TA(n,s){return Object.fromEntries(Object.entries(n).map(([t,o])=>s(t,o)).filter($A))}const no={theme:"seriph",title:"API with Behat Formation",titleTemplate:"%s - Slidev",addons:[],remoteAssets:!1,monaco:"dev",download:!1,export:{},info:`<h2>Slidev Starter Template</h2>
<p>Presentation slides for developers.</p>
<p>Learn more at <a href="https://sli.dev" target="_blank" rel="noopener">Sli.dev</a></p>
`,highlighter:"shiki",lineNumbers:!1,colorSchema:"light",routerMode:"history",aspectRatio:1.7777777777777777,canvasWidth:980,exportFilename:"",selectable:!1,themeConfig:{},fonts:{sans:['"PT Serif"',"ui-sans-serif","system-ui","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial",'"Noto Sans"',"sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"','"Noto Color Emoji"'],serif:['"PT Serif"',"ui-serif","Georgia","Cambria",'"Times New Roman"',"Times","serif"],mono:['"PT Mono"',"ui-monospace","SFMono-Regular","Menlo","Monaco","Consolas",'"Liberation Mono"','"Courier New"',"monospace"],webfonts:["PT Serif","PT Mono"],provider:"google",local:[],italic:!0,weights:["400","700"]},favicon:"https://cdn.jsdelivr.net/gh/slidevjs/slidev/assets/favicon.png",drawings:{enabled:!0,persist:!1,presenterOnly:!1,syncAll:!0},plantUmlServer:"https://www.plantuml.com/plantuml",codeCopy:!0,record:"dev",css:"unocss",presenter:!0,htmlAttrs:{},transition:"slide-left",background:!1,class:"text-center"},$e=no,Ss=$e.aspectRatio??16/9,Es=$e.canvasWidth??980,ii=Math.ceil(Es/Ss),ci=S(()=>TA($e.themeConfig||{},(n,s)=>[`--slidev-theme-${n}`,s]));function Rn(n,s,t){Object.defineProperty(n,s,{value:t,writable:!0,enumerable:!1})}const ht=He({page:0,clicks:0});let FA=[],OA=[];Rn(ht,"$syncUp",!0);Rn(ht,"$syncDown",!0);Rn(ht,"$paused",!1);Rn(ht,"$onSet",n=>FA.push(n));Rn(ht,"$onPatch",n=>OA.push(n));Rn(ht,"$patch",async()=>!1);function Sd(n,s,t=!1){const o=[];let l=!1,r=!1,i,c;const p=He(s);function u(m){o.push(m)}function d(m,y){p[m]!==y&&(clearTimeout(i),l=!0,p[m]=y,i=setTimeout(()=>l=!1,0))}function h(m){l||(clearTimeout(c),r=!0,Object.entries(m).forEach(([y,A])=>{p[y]=A}),c=setTimeout(()=>r=!1,0))}function f(m){let y;t?t&&window.addEventListener("storage",b=>{b&&b.key===m&&b.newValue&&h(JSON.parse(b.newValue))}):(y=new BroadcastChannel(m),y.addEventListener("message",b=>h(b.data)));function A(){!t&&y&&!r?y.postMessage(me(p)):t&&!r&&window.localStorage.setItem(m,JSON.stringify(p)),l||o.forEach(b=>b(p))}if(Be(p,A,{deep:!0}),t){const b=window.localStorage.getItem(m);b&&h(JSON.parse(b))}}return{init:f,onPatch:u,patch:d,state:p}}const{init:MA,onPatch:PA,patch:Gt,state:Ca}=Sd(ht,{page:1,clicks:0,viewerPage:1,viewerClicks:0}),ft=He({});let RA=[],LA=[];Rn(ft,"$syncUp",!0);Rn(ft,"$syncDown",!0);Rn(ft,"$paused",!1);Rn(ft,"$onSet",n=>RA.push(n));Rn(ft,"$onPatch",n=>LA.push(n));Rn(ft,"$patch",async()=>!1);const{init:NA,onPatch:WA,patch:Ed,state:$l}=Sd(ft,{},!1),qA="modulepreload",jA=function(n){return"/api-with-behat-formation/"+n},xc={},$s=function(s,t,o){if(!t||t.length===0)return s();const l=document.getElementsByTagName("link");return Promise.all(t.map(r=>{if(r=jA(r),r in xc)return;xc[r]=!0;const i=r.endsWith(".css"),c=i?'[rel="stylesheet"]':"";if(!!o)for(let d=l.length-1;d>=0;d--){const h=l[d];if(h.href===r&&(!i||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${c}`))return;const u=document.createElement("link");if(u.rel=i?"stylesheet":qA,i||(u.as="script",u.crossOrigin=""),u.href=r,document.head.appendChild(u),i)return new Promise((d,h)=>{u.addEventListener("load",d),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>s())};var Ic;const Hn=typeof window<"u",VA=n=>typeof n<"u",HA=Object.prototype.toString,Do=n=>typeof n=="function",GA=n=>typeof n=="number",$d=n=>typeof n=="string",ar=n=>HA.call(n)==="[object Object]",rr=()=>+Date.now(),St=()=>{},KA=Hn&&((Ic=window==null?void 0:window.navigator)==null?void 0:Ic.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function ln(n){return typeof n=="function"?n():v(n)}function UA(n,s){function t(...o){return new Promise((l,r)=>{Promise.resolve(n(()=>s.apply(this,o),{fn:s,thisArg:this,args:o})).then(l).catch(r)})}return t}const Td=n=>n();function zA(n=Td){const s=z(!0);function t(){s.value=!1}function o(){s.value=!0}const l=(...r)=>{s.value&&n(...r)};return{isActive:Zn(s),pause:t,resume:o,eventFilter:l}}function YA(n){return n}function ZA(n,s){var t;if(typeof n=="number")return n+s;const o=((t=n.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:t[0])||"",l=n.slice(o.length),r=parseFloat(o)+s;return Number.isNaN(r)?n:r+l}function JA(n,s){let t,o,l;const r=z(!0),i=()=>{r.value=!0,l()};Be(n,i,{flush:"sync"});const c=Do(s)?s:s.get,p=Do(s)?void 0:s.set,u=Du((d,h)=>(o=d,l=h,{get(){return r.value&&(t=c(),r.value=!1),o(),t},set(f){p==null||p(f)}}));return Object.isExtensible(u)&&(u.trigger=i),u}function ns(n){return qr()?(cu(n),!0):!1}function QA(n){if(!Te(n))return He(n);const s=new Proxy({},{get(t,o,l){return v(Reflect.get(n.value,o,l))},set(t,o,l){return Te(n.value[o])&&!Te(l)?n.value[o].value=l:n.value[o]=l,!0},deleteProperty(t,o){return Reflect.deleteProperty(n.value,o)},has(t,o){return Reflect.has(n.value,o)},ownKeys(){return Object.keys(n.value)},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}}});return He(s)}function Fd(n){return typeof n=="function"?S(n):z(n)}var XA=Object.defineProperty,e8=Object.defineProperties,n8=Object.getOwnPropertyDescriptors,Sc=Object.getOwnPropertySymbols,s8=Object.prototype.hasOwnProperty,t8=Object.prototype.propertyIsEnumerable,Ec=(n,s,t)=>s in n?XA(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,o8=(n,s)=>{for(var t in s||(s={}))s8.call(s,t)&&Ec(n,t,s[t]);if(Sc)for(var t of Sc(s))t8.call(s,t)&&Ec(n,t,s[t]);return n},l8=(n,s)=>e8(n,n8(s));function a8(n){if(!Te(n))return my(n);const s=Array.isArray(n.value)?new Array(n.value.length):{};for(const t in n.value)s[t]=Du(()=>({get(){return n.value[t]},set(o){if(Array.isArray(n.value)){const l=[...n.value];l[t]=o,n.value=l}else{const l=l8(o8({},n.value),{[t]:o});Object.setPrototypeOf(l,n.value),n.value=l}}}));return s}function pi(n,s=!0){En()?dt(n):s?n():sn(n)}function r8(n){En()&&Jl(n)}function i8(n,s=1e3,t={}){const{immediate:o=!0,immediateCallback:l=!1}=t;let r=null;const i=z(!1);function c(){r&&(clearInterval(r),r=null)}function p(){i.value=!1,c()}function u(){const d=ln(s);d<=0||(i.value=!0,l&&n(),c(),r=setInterval(n,d))}if(o&&Hn&&u(),Te(s)||Do(s)){const d=Be(s,()=>{i.value&&Hn&&u()});ns(d)}return ns(p),{isActive:i,pause:p,resume:u}}function c8(n,s,t={}){const{immediate:o=!0}=t,l=z(!1);let r=null;function i(){r&&(clearTimeout(r),r=null)}function c(){l.value=!1,i()}function p(...u){i(),l.value=!0,r=setTimeout(()=>{l.value=!1,r=null,n(...u)},ln(s))}return o&&(l.value=!0,Hn&&p()),ns(c),{isPending:Zn(l),start:p,stop:c}}function Od(n=!1,s={}){const{truthyValue:t=!0,falsyValue:o=!1}=s,l=Te(n),r=z(n);function i(c){if(arguments.length)return r.value=c,r.value;{const p=ln(t);return r.value=r.value===p?ln(o):p,r.value}}return l?i:[r,i]}var $c=Object.getOwnPropertySymbols,p8=Object.prototype.hasOwnProperty,u8=Object.prototype.propertyIsEnumerable,d8=(n,s)=>{var t={};for(var o in n)p8.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&$c)for(var o of $c(n))s.indexOf(o)<0&&u8.call(n,o)&&(t[o]=n[o]);return t};function h8(n,s,t={}){const o=t,{eventFilter:l=Td}=o,r=d8(o,["eventFilter"]);return Be(n,UA(l,s),r)}var f8=Object.defineProperty,y8=Object.defineProperties,m8=Object.getOwnPropertyDescriptors,Tl=Object.getOwnPropertySymbols,Md=Object.prototype.hasOwnProperty,Pd=Object.prototype.propertyIsEnumerable,Tc=(n,s,t)=>s in n?f8(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,g8=(n,s)=>{for(var t in s||(s={}))Md.call(s,t)&&Tc(n,t,s[t]);if(Tl)for(var t of Tl(s))Pd.call(s,t)&&Tc(n,t,s[t]);return n},A8=(n,s)=>y8(n,m8(s)),b8=(n,s)=>{var t={};for(var o in n)Md.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&Tl)for(var o of Tl(n))s.indexOf(o)<0&&Pd.call(n,o)&&(t[o]=n[o]);return t};function B8(n,s,t={}){const o=t,{eventFilter:l}=o,r=b8(o,["eventFilter"]),{eventFilter:i,pause:c,resume:p,isActive:u}=zA(l);return{stop:h8(n,s,A8(g8({},r),{eventFilter:i})),pause:c,resume:p,isActive:u}}function wn(n){var s;const t=ln(n);return(s=t==null?void 0:t.$el)!=null?s:t}const en=Hn?window:void 0,Rd=Hn?window.document:void 0,C8=Hn?window.navigator:void 0;function Ce(...n){let s,t,o,l;if($d(n[0])||Array.isArray(n[0])?([t,o,l]=n,s=en):[s,t,o,l]=n,!s)return St;Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);const r=[],i=()=>{r.forEach(d=>d()),r.length=0},c=(d,h,f,m)=>(d.addEventListener(h,f,m),()=>d.removeEventListener(h,f,m)),p=Be(()=>[wn(s),ln(l)],([d,h])=>{i(),d&&r.push(...t.flatMap(f=>o.map(m=>c(d,f,m,h))))},{immediate:!0,flush:"post"}),u=()=>{p(),i()};return ns(u),u}let Fc=!1;function k8(n,s,t={}){const{window:o=en,ignore:l=[],capture:r=!0,detectIframe:i=!1}=t;if(!o)return;KA&&!Fc&&(Fc=!0,Array.from(o.document.body.children).forEach(f=>f.addEventListener("click",St)));let c=!0;const p=f=>l.some(m=>{if(typeof m=="string")return Array.from(o.document.querySelectorAll(m)).some(y=>y===f.target||f.composedPath().includes(y));{const y=wn(m);return y&&(f.target===y||f.composedPath().includes(y))}}),d=[Ce(o,"click",f=>{const m=wn(n);if(!(!m||m===f.target||f.composedPath().includes(m))){if(f.detail===0&&(c=!p(f)),!c){c=!0;return}s(f)}},{passive:!0,capture:r}),Ce(o,"pointerdown",f=>{const m=wn(n);m&&(c=!f.composedPath().includes(m)&&!p(f))},{passive:!0}),i&&Ce(o,"blur",f=>{var m;const y=wn(n);((m=o.document.activeElement)==null?void 0:m.tagName)==="IFRAME"&&!(y!=null&&y.contains(o.document.activeElement))&&s(f)})].filter(Boolean);return()=>d.forEach(f=>f())}const _8=n=>typeof n=="function"?n:typeof n=="string"?s=>s.key===n:Array.isArray(n)?s=>n.includes(s.key):()=>!0;function v8(...n){let s,t,o={};n.length===3?(s=n[0],t=n[1],o=n[2]):n.length===2?typeof n[1]=="object"?(s=!0,t=n[0],o=n[1]):(s=n[0],t=n[1]):(s=!0,t=n[0]);const{target:l=en,eventName:r="keydown",passive:i=!1}=o,c=_8(s);return Ce(l,r,u=>{c(u)&&t(u)},i)}function D8(n={}){var s;const{window:t=en}=n,o=(s=n.document)!=null?s:t==null?void 0:t.document,l=JA(()=>null,()=>o==null?void 0:o.activeElement);return t&&(Ce(t,"blur",r=>{r.relatedTarget===null&&l.trigger()},!0),Ce(t,"focus",l.trigger,!0)),l}function Vo(n,s=!1){const t=z(),o=()=>t.value=Boolean(n());return o(),pi(o,s),t}function kt(n,s={}){const{window:t=en}=s,o=Vo(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let l;const r=z(!1),i=()=>{l&&("removeEventListener"in l?l.removeEventListener("change",c):l.removeListener(c))},c=()=>{o.value&&(i(),l=t.matchMedia(Fd(n).value),r.value=l.matches,"addEventListener"in l?l.addEventListener("change",c):l.addListener(c))};return ut(c),ns(()=>i()),r}const w8={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var x8=Object.defineProperty,Oc=Object.getOwnPropertySymbols,I8=Object.prototype.hasOwnProperty,S8=Object.prototype.propertyIsEnumerable,Mc=(n,s,t)=>s in n?x8(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,E8=(n,s)=>{for(var t in s||(s={}))I8.call(s,t)&&Mc(n,t,s[t]);if(Oc)for(var t of Oc(s))S8.call(s,t)&&Mc(n,t,s[t]);return n};function $8(n,s={}){function t(c,p){let u=n[c];return p!=null&&(u=ZA(u,p)),typeof u=="number"&&(u=`${u}px`),u}const{window:o=en}=s;function l(c){return o?o.matchMedia(c).matches:!1}const r=c=>kt(`(min-width: ${t(c)})`,s),i=Object.keys(n).reduce((c,p)=>(Object.defineProperty(c,p,{get:()=>r(p),enumerable:!0,configurable:!0}),c),{});return E8({greater(c){return kt(`(min-width: ${t(c,.1)})`,s)},greaterOrEqual:r,smaller(c){return kt(`(max-width: ${t(c,-.1)})`,s)},smallerOrEqual(c){return kt(`(max-width: ${t(c)})`,s)},between(c,p){return kt(`(min-width: ${t(c)}) and (max-width: ${t(p,-.1)})`,s)},isGreater(c){return l(`(min-width: ${t(c,.1)})`)},isGreaterOrEqual(c){return l(`(min-width: ${t(c)})`)},isSmaller(c){return l(`(max-width: ${t(c,-.1)})`)},isSmallerOrEqual(c){return l(`(max-width: ${t(c)})`)},isInBetween(c,p){return l(`(min-width: ${t(c)}) and (max-width: ${t(p,-.1)})`)}},i)}function T8(n={}){const{navigator:s=C8,read:t=!1,source:o,copiedDuring:l=1500,legacy:r=!1}=n,i=["copy","cut"],c=Vo(()=>s&&"clipboard"in s),p=S(()=>c.value||r),u=z(""),d=z(!1),h=c8(()=>d.value=!1,l);function f(){c.value?s.clipboard.readText().then(b=>{u.value=b}):u.value=A()}if(p.value&&t)for(const b of i)Ce(b,f);async function m(b=ln(o)){p.value&&b!=null&&(c.value?await s.clipboard.writeText(b):y(b),u.value=b,d.value=!0,h.start())}function y(b){const _=document.createElement("textarea");_.value=b??"",_.style.position="absolute",_.style.opacity="0",document.body.appendChild(_),_.select(),document.execCommand("copy"),_.remove()}function A(){var b,_,C;return(C=(_=(b=document==null?void 0:document.getSelection)==null?void 0:b.call(document))==null?void 0:_.toString())!=null?C:""}return{isSupported:p,text:u,copied:d,copy:m}}function F8(n){return JSON.parse(JSON.stringify(n))}const ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},cr="__vueuse_ssr_handlers__";ir[cr]=ir[cr]||{};const O8=ir[cr];function M8(n,s){return O8[n]||s}function P8(n){return n==null?"any":n instanceof Set?"set":n instanceof Map?"map":n instanceof Date?"date":typeof n=="boolean"?"boolean":typeof n=="string"?"string":typeof n=="object"?"object":Number.isNaN(n)?"any":"number"}var R8=Object.defineProperty,Pc=Object.getOwnPropertySymbols,L8=Object.prototype.hasOwnProperty,N8=Object.prototype.propertyIsEnumerable,Rc=(n,s,t)=>s in n?R8(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,Lc=(n,s)=>{for(var t in s||(s={}))L8.call(s,t)&&Rc(n,t,s[t]);if(Pc)for(var t of Pc(s))N8.call(s,t)&&Rc(n,t,s[t]);return n};const W8={boolean:{read:n=>n==="true",write:n=>String(n)},object:{read:n=>JSON.parse(n),write:n=>JSON.stringify(n)},number:{read:n=>Number.parseFloat(n),write:n=>String(n)},any:{read:n=>n,write:n=>String(n)},string:{read:n=>n,write:n=>String(n)},map:{read:n=>new Map(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n.entries()))},set:{read:n=>new Set(JSON.parse(n)),write:n=>JSON.stringify(Array.from(n))},date:{read:n=>new Date(n),write:n=>n.toISOString()}},Nc="vueuse-storage";function q8(n,s,t,o={}){var l;const{flush:r="pre",deep:i=!0,listenToStorageChanges:c=!0,writeDefaults:p=!0,mergeDefaults:u=!1,shallow:d,window:h=en,eventFilter:f,onError:m=E=>{console.error(E)}}=o,y=(d?es:z)(s);if(!t)try{t=M8("getDefaultStorage",()=>{var E;return(E=en)==null?void 0:E.localStorage})()}catch(E){m(E)}if(!t)return y;const A=ln(s),b=P8(A),_=(l=o.serializer)!=null?l:W8[b],{pause:C,resume:k}=B8(y,()=>w(y.value),{flush:r,deep:i,eventFilter:f});return h&&c&&(Ce(h,"storage",H),Ce(h,Nc,R)),H(),y;function w(E){try{if(E==null)t.removeItem(n);else{const j=_.write(E),ee=t.getItem(n);ee!==j&&(t.setItem(n,j),h&&h.dispatchEvent(new CustomEvent(Nc,{detail:{key:n,oldValue:ee,newValue:j,storageArea:t}})))}}catch(j){m(j)}}function $(E){const j=E?E.newValue:t.getItem(n);if(j==null)return p&&A!==null&&t.setItem(n,_.write(A)),A;if(!E&&u){const ee=_.read(j);return Do(u)?u(ee,A):b==="object"&&!Array.isArray(ee)?Lc(Lc({},A),ee):ee}else return typeof j!="string"?j:_.read(j)}function R(E){H(E.detail)}function H(E){if(!(E&&E.storageArea!==t)){if(E&&E.key==null){y.value=A;return}if(!(E&&E.key!==n)){C();try{y.value=$(E)}catch(j){m(j)}finally{E?sn(k):k()}}}}}function j8(n){return kt("(prefers-color-scheme: dark)",n)}var V8=Object.defineProperty,H8=Object.defineProperties,G8=Object.getOwnPropertyDescriptors,Wc=Object.getOwnPropertySymbols,K8=Object.prototype.hasOwnProperty,U8=Object.prototype.propertyIsEnumerable,qc=(n,s,t)=>s in n?V8(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,z8=(n,s)=>{for(var t in s||(s={}))K8.call(s,t)&&qc(n,t,s[t]);if(Wc)for(var t of Wc(s))U8.call(s,t)&&qc(n,t,s[t]);return n},Y8=(n,s)=>H8(n,G8(s));function r4(n,s={}){var t,o,l;const r=(t=s.draggingElement)!=null?t:en,i=(o=s.handle)!=null?o:n,c=z((l=ln(s.initialValue))!=null?l:{x:0,y:0}),p=z(),u=y=>s.pointerTypes?s.pointerTypes.includes(y.pointerType):!0,d=y=>{ln(s.preventDefault)&&y.preventDefault(),ln(s.stopPropagation)&&y.stopPropagation()},h=y=>{var A;if(!u(y)||ln(s.exact)&&y.target!==ln(n))return;const b=ln(n).getBoundingClientRect(),_={x:y.clientX-b.left,y:y.clientY-b.top};((A=s.onStart)==null?void 0:A.call(s,_,y))!==!1&&(p.value=_,d(y))},f=y=>{var A;u(y)&&p.value&&(c.value={x:y.clientX-p.value.x,y:y.clientY-p.value.y},(A=s.onMove)==null||A.call(s,c.value,y),d(y))},m=y=>{var A;u(y)&&p.value&&(p.value=void 0,(A=s.onEnd)==null||A.call(s,c.value,y),d(y))};return Hn&&(Ce(i,"pointerdown",h,!0),Ce(r,"pointermove",f,!0),Ce(r,"pointerup",m,!0)),Y8(z8({},a8(c)),{position:c,isDragging:S(()=>!!p.value),style:S(()=>`left:${c.value.x}px;top:${c.value.y}px;`)})}var jc=Object.getOwnPropertySymbols,Z8=Object.prototype.hasOwnProperty,J8=Object.prototype.propertyIsEnumerable,Q8=(n,s)=>{var t={};for(var o in n)Z8.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&jc)for(var o of jc(n))s.indexOf(o)<0&&J8.call(n,o)&&(t[o]=n[o]);return t};function X8(n,s,t={}){const o=t,{window:l=en}=o,r=Q8(o,["window"]);let i;const c=Vo(()=>l&&"ResizeObserver"in l),p=()=>{i&&(i.disconnect(),i=void 0)},u=Be(()=>wn(n),h=>{p(),c.value&&l&&h&&(i=new ResizeObserver(s),i.observe(h,r))},{immediate:!0,flush:"post"}),d=()=>{p(),u()};return ns(d),{isSupported:c,stop:d}}function eb(n,s={}){const{immediate:t=!0,window:o=en}=s,l=z(!1);let r=0,i=null;function c(d){if(!l.value||!o)return;const h=d-r;n({delta:h,timestamp:d}),r=d,i=o.requestAnimationFrame(c)}function p(){!l.value&&o&&(l.value=!0,i=o.requestAnimationFrame(c))}function u(){l.value=!1,i!=null&&o&&(o.cancelAnimationFrame(i),i=null)}return t&&p(),ns(u),{isActive:Zn(l),pause:u,resume:p}}function nb(n,s={width:0,height:0},t={}){const{window:o=en,box:l="content-box"}=t,r=S(()=>{var p,u;return(u=(p=wn(n))==null?void 0:p.namespaceURI)==null?void 0:u.includes("svg")}),i=z(s.width),c=z(s.height);return X8(n,([p])=>{const u=l==="border-box"?p.borderBoxSize:l==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(o&&r.value){const d=wn(n);if(d){const h=o.getComputedStyle(d);i.value=parseFloat(h.width),c.value=parseFloat(h.height)}}else if(u){const d=Array.isArray(u)?u:[u];i.value=d.reduce((h,{inlineSize:f})=>h+f,0),c.value=d.reduce((h,{blockSize:f})=>h+f,0)}else i.value=p.contentRect.width,c.value=p.contentRect.height},t),Be(()=>wn(n),p=>{i.value=p?s.width:0,c.value=p?s.height:0}),{width:i,height:c}}const Vc=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]];function sb(n,s={}){const{document:t=Rd,autoExit:o=!1}=s,l=n||(t==null?void 0:t.querySelector("html")),r=z(!1);let i=Vc[0];const c=Vo(()=>{if(t){for(const A of Vc)if(A[1]in t)return i=A,!0}else return!1;return!1}),[p,u,d,,h]=i;async function f(){c.value&&(t!=null&&t[d]&&await t[u](),r.value=!1)}async function m(){if(!c.value)return;await f();const A=wn(l);A&&(await A[p](),r.value=!0)}async function y(){r.value?await f():await m()}return t&&Ce(t,h,()=>{r.value=!!(t!=null&&t[d])},!1),o&&ns(f),{isSupported:c,isFullscreen:r,enter:m,exit:f,toggle:y}}function tb(n,s,t={}){const{root:o,rootMargin:l="0px",threshold:r=.1,window:i=en}=t,c=Vo(()=>i&&"IntersectionObserver"in i);let p=St;const u=c.value?Be(()=>({el:wn(n),root:wn(o)}),({el:h,root:f})=>{if(p(),!h)return;const m=new IntersectionObserver(s,{root:f,rootMargin:l,threshold:r});m.observe(h),p=()=>{m.disconnect(),p=St}},{immediate:!0,flush:"post"}):St,d=()=>{p(),u()};return ns(d),{isSupported:c,stop:d}}function Gn(n,s,t={}){const{window:o=en}=t;return q8(n,s,o==null?void 0:o.localStorage,t)}const ob={ctrl:"control",command:"meta",cmd:"meta",option:"alt",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright"};function lb(n={}){const{reactive:s=!1,target:t=en,aliasMap:o=ob,passive:l=!0,onEventFired:r=St}=n,i=He(new Set),c={toJSON(){return{}},current:i},p=s?He(c):c,u=new Set,d=new Set;function h(A,b){A in p&&(s?p[A]=b:p[A].value=b)}function f(){i.clear();for(const A of d)h(A,!1)}function m(A,b){var _,C;const k=(_=A.key)==null?void 0:_.toLowerCase(),$=[(C=A.code)==null?void 0:C.toLowerCase(),k].filter(Boolean);k&&(b?i.add(k):i.delete(k));for(const R of $)d.add(R),h(R,b);k==="meta"&&!b?(u.forEach(R=>{i.delete(R),h(R,!1)}),u.clear()):typeof A.getModifierState=="function"&&A.getModifierState("Meta")&&b&&[...i,...$].forEach(R=>u.add(R))}Ce(t,"keydown",A=>(m(A,!0),r(A)),{passive:l}),Ce(t,"keyup",A=>(m(A,!1),r(A)),{passive:l}),Ce("blur",f,{passive:!0}),Ce("focus",f,{passive:!0});const y=new Proxy(p,{get(A,b,_){if(typeof b!="string")return Reflect.get(A,b,_);if(b=b.toLowerCase(),b in o&&(b=o[b]),!(b in p))if(/[+_-]/.test(b)){const k=b.split(/[+_-]/g).map(w=>w.trim());p[b]=S(()=>k.every(w=>v(y[w])))}else p[b]=z(!1);const C=Reflect.get(A,b,_);return s?v(C):C}});return y}function i4(n={}){const{type:s="page",touch:t=!0,resetOnTouchEnds:o=!1,initialValue:l={x:0,y:0},window:r=en,eventFilter:i}=n,c=z(l.x),p=z(l.y),u=z(null),d=A=>{s==="page"?(c.value=A.pageX,p.value=A.pageY):s==="client"?(c.value=A.clientX,p.value=A.clientY):s==="movement"&&(c.value=A.movementX,p.value=A.movementY),u.value="mouse"},h=()=>{c.value=l.x,p.value=l.y},f=A=>{if(A.touches.length>0){const b=A.touches[0];s==="page"?(c.value=b.pageX,p.value=b.pageY):s==="client"&&(c.value=b.clientX,p.value=b.clientY),u.value="touch"}},m=A=>i===void 0?d(A):i(()=>d(A),{}),y=A=>i===void 0?f(A):i(()=>f(A),{});return r&&(Ce(r,"mousemove",m,{passive:!0}),Ce(r,"dragover",m,{passive:!0}),t&&s!=="movement"&&(Ce(r,"touchstart",y,{passive:!0}),Ce(r,"touchmove",y,{passive:!0}),o&&Ce(r,"touchend",h,{passive:!0}))),{x:c,y:p,sourceType:u}}var cs;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(cs||(cs={}));function ab(n,s={}){const t=Fd(n),{threshold:o=50,onSwipe:l,onSwipeEnd:r,onSwipeStart:i}=s,c=He({x:0,y:0}),p=(R,H)=>{c.x=R,c.y=H},u=He({x:0,y:0}),d=(R,H)=>{u.x=R,u.y=H},h=S(()=>c.x-u.x),f=S(()=>c.y-u.y),{max:m,abs:y}=Math,A=S(()=>m(y(h.value),y(f.value))>=o),b=z(!1),_=z(!1),C=S(()=>A.value?y(h.value)>y(f.value)?h.value>0?cs.LEFT:cs.RIGHT:f.value>0?cs.UP:cs.DOWN:cs.NONE),k=R=>{var H,E,j;const ee=R.buttons===0,he=R.buttons===1;return(j=(E=(H=s.pointerTypes)==null?void 0:H.includes(R.pointerType))!=null?E:ee||he)!=null?j:!0},w=[Ce(n,"pointerdown",R=>{var H,E;if(!k(R))return;_.value=!0,(E=(H=t.value)==null?void 0:H.style)==null||E.setProperty("touch-action","none");const j=R.target;j==null||j.setPointerCapture(R.pointerId);const{clientX:ee,clientY:he}=R;p(ee,he),d(ee,he),i==null||i(R)}),Ce(n,"pointermove",R=>{if(!k(R)||!_.value)return;const{clientX:H,clientY:E}=R;d(H,E),!b.value&&A.value&&(b.value=!0),b.value&&(l==null||l(R))}),Ce(n,"pointerup",R=>{var H,E;k(R)&&(b.value&&(r==null||r(R,C.value)),_.value=!1,b.value=!1,(E=(H=t.value)==null?void 0:H.style)==null||E.setProperty("touch-action","initial"))})],$=()=>w.forEach(R=>R());return{isSwiping:Zn(b),direction:Zn(C),posStart:Zn(c),posEnd:Zn(u),distanceX:h,distanceY:f,stop:$}}let rb=0;function c4(n,s={}){const t=z(!1),{document:o=Rd,immediate:l=!0,manual:r=!1,id:i=`vueuse_styletag_${++rb}`}=s,c=z(n);let p=()=>{};const u=()=>{if(!o)return;const h=o.getElementById(i)||o.createElement("style");h.isConnected||(h.type="text/css",h.id=i,s.media&&(h.media=s.media),o.head.appendChild(h)),!t.value&&(p=Be(c,f=>{h.textContent=f},{immediate:!0}),t.value=!0)},d=()=>{!o||!t.value||(p(),o.head.removeChild(o.getElementById(i)),t.value=!1)};return l&&!r&&pi(u),r||ns(d),{id:i,css:c,unload:d,load:u,isLoaded:Zn(t)}}var ib=Object.defineProperty,Hc=Object.getOwnPropertySymbols,cb=Object.prototype.hasOwnProperty,pb=Object.prototype.propertyIsEnumerable,Gc=(n,s,t)=>s in n?ib(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,ub=(n,s)=>{for(var t in s||(s={}))cb.call(s,t)&&Gc(n,t,s[t]);if(Hc)for(var t of Hc(s))pb.call(s,t)&&Gc(n,t,s[t]);return n};function p4(n={}){const{controls:s=!1,offset:t=0,immediate:o=!0,interval:l="requestAnimationFrame",callback:r}=n,i=z(rr()+t),c=()=>i.value=rr()+t,p=r?()=>{c(),r(i.value)}:c,u=l==="requestAnimationFrame"?eb(p,{immediate:o}):i8(p,l,{immediate:o});return s?ub({timestamp:i},u):i}var db=Object.defineProperty,Kc=Object.getOwnPropertySymbols,hb=Object.prototype.hasOwnProperty,fb=Object.prototype.propertyIsEnumerable,Uc=(n,s,t)=>s in n?db(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,yb=(n,s)=>{for(var t in s||(s={}))hb.call(s,t)&&Uc(n,t,s[t]);if(Kc)for(var t of Kc(s))fb.call(s,t)&&Uc(n,t,s[t]);return n};const mb={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};yb({linear:YA},mb);function Jn(n,s,t,o={}){var l,r,i;const{clone:c=!1,passive:p=!1,eventName:u,deep:d=!1,defaultValue:h}=o,f=En(),m=t||(f==null?void 0:f.emit)||((l=f==null?void 0:f.$emit)==null?void 0:l.bind(f))||((i=(r=f==null?void 0:f.proxy)==null?void 0:r.$emit)==null?void 0:i.bind(f==null?void 0:f.proxy));let y=u;s||(s="modelValue"),y=u||y||`update:${s.toString()}`;const A=_=>c?Do(c)?c(_):F8(_):_,b=()=>VA(n[s])?A(n[s]):h;if(p){const _=b(),C=z(_);return Be(()=>n[s],k=>C.value=A(k)),Be(C,k=>{(k!==n[s]||d)&&m(y,k)},{deep:d}),C}else return S({get(){return b()},set(_){m(y,_)}})}function u4({window:n=en}={}){if(!n)return z(!1);const s=z(n.document.hasFocus());return Ce(n,"blur",()=>{s.value=!1}),Ce(n,"focus",()=>{s.value=!0}),s}function gb(n={}){const{window:s=en,initialWidth:t=1/0,initialHeight:o=1/0,listenOrientation:l=!0,includeScrollbar:r=!0}=n,i=z(t),c=z(o),p=()=>{s&&(r?(i.value=s.innerWidth,c.value=s.innerHeight):(i.value=s.document.documentElement.clientWidth,c.value=s.document.documentElement.clientHeight))};return p(),pi(p),Ce("resize",p,{passive:!0}),l&&Ce("orientationchange",p,{passive:!0}),{width:i,height:c}}function Ab(){return Ld().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ld(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const bb=typeof Proxy=="function",Bb="devtools-plugin:setup",Cb="plugin:settings:set";let mt,pr;function kb(){var n;return mt!==void 0||(typeof window<"u"&&window.performance?(mt=!0,pr=window.performance):typeof global<"u"&&(!((n=global.perf_hooks)===null||n===void 0)&&n.performance)?(mt=!0,pr=global.perf_hooks.performance):mt=!1),mt}function _b(){return kb()?pr.now():Date.now()}class vb{constructor(s,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=s,this.hook=t;const o={};if(s.settings)for(const i in s.settings){const c=s.settings[i];o[i]=c.defaultValue}const l=`__vue-devtools-plugin-settings__${s.id}`;let r=Object.assign({},o);try{const i=localStorage.getItem(l),c=JSON.parse(i);Object.assign(r,c)}catch{}this.fallbacks={getSettings(){return r},setSettings(i){try{localStorage.setItem(l,JSON.stringify(i))}catch{}r=i},now(){return _b()}},t&&t.on(Cb,(i,c)=>{i===this.plugin.id&&this.fallbacks.setSettings(c)}),this.proxiedOn=new Proxy({},{get:(i,c)=>this.target?this.target.on[c]:(...p)=>{this.onQueue.push({method:c,args:p})}}),this.proxiedTarget=new Proxy({},{get:(i,c)=>this.target?this.target[c]:c==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(c)?(...p)=>(this.targetQueue.push({method:c,args:p,resolve:()=>{}}),this.fallbacks[c](...p)):(...p)=>new Promise(u=>{this.targetQueue.push({method:c,args:p,resolve:u})})})}async setRealTarget(s){this.target=s;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}function Db(n,s){const t=n,o=Ld(),l=Ab(),r=bb&&t.enableEarlyProxy;if(l&&(o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!r))l.emit(Bb,n,s);else{const i=r?new vb(t,l):null;(o.__VUE_DEVTOOLS_PLUGINS__=o.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:t,setupFn:s,proxy:i}),i&&s(i.proxiedTarget)}}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const rs=typeof window<"u";function wb(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Me=Object.assign;function ka(n,s){const t={};for(const o in s){const l=s[o];t[o]=Sn(l)?l.map(n):n(l)}return t}const io=()=>{},Sn=Array.isArray;function Ee(n){const s=Array.from(arguments).slice(1);console.warn.apply(console,["[Vue Router warn]: "+n].concat(s))}const xb=/\/$/,Ib=n=>n.replace(xb,"");function _a(n,s,t="/"){let o,l={},r="",i="";const c=s.indexOf("#");let p=s.indexOf("?");return c<p&&c>=0&&(p=-1),p>-1&&(o=s.slice(0,p),r=s.slice(p+1,c>-1?c:s.length),l=n(r)),c>-1&&(o=o||s.slice(0,c),i=s.slice(c,s.length)),o=$b(o??s,t),{fullPath:o+(r&&"?")+r+i,path:o,query:l,hash:i}}function Sb(n,s){const t=s.query?n(s.query):"";return s.path+(t&&"?")+t+(s.hash||"")}function zc(n,s){return!s||!n.toLowerCase().startsWith(s.toLowerCase())?n:n.slice(s.length)||"/"}function Yc(n,s,t){const o=s.matched.length-1,l=t.matched.length-1;return o>-1&&o===l&&Rs(s.matched[o],t.matched[l])&&Nd(s.params,t.params)&&n(s.query)===n(t.query)&&s.hash===t.hash}function Rs(n,s){return(n.aliasOf||n)===(s.aliasOf||s)}function Nd(n,s){if(Object.keys(n).length!==Object.keys(s).length)return!1;for(const t in n)if(!Eb(n[t],s[t]))return!1;return!0}function Eb(n,s){return Sn(n)?Zc(n,s):Sn(s)?Zc(s,n):n===s}function Zc(n,s){return Sn(s)?n.length===s.length&&n.every((t,o)=>t===s[o]):n.length===1&&n[0]===s}function $b(n,s){if(n.startsWith("/"))return n;if(!s.startsWith("/"))return Ee(`Cannot resolve a relative location without an absolute path. Trying to resolve "${n}" from "${s}". It should look like "/${s}".`),n;if(!n)return s;const t=s.split("/"),o=n.split("/");let l=t.length-1,r,i;for(r=0;r<o.length;r++)if(i=o[r],i!==".")if(i==="..")l>1&&l--;else break;return t.slice(0,l).join("/")+"/"+o.slice(r-(r===o.length?1:0)).join("/")}var wo;(function(n){n.pop="pop",n.push="push"})(wo||(wo={}));var co;(function(n){n.back="back",n.forward="forward",n.unknown=""})(co||(co={}));function Tb(n){if(!n)if(rs){const s=document.querySelector("base");n=s&&s.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),Ib(n)}const Fb=/^[^#]+#/;function Ob(n,s){return n.replace(Fb,"#")+s}function Mb(n,s){const t=document.documentElement.getBoundingClientRect(),o=n.getBoundingClientRect();return{behavior:s.behavior,left:o.left-t.left-(s.left||0),top:o.top-t.top-(s.top||0)}}const na=()=>({left:window.pageXOffset,top:window.pageYOffset});function Pb(n){let s;if("el"in n){const t=n.el,o=typeof t=="string"&&t.startsWith("#");if(typeof n.el=="string"&&(!o||!document.getElementById(n.el.slice(1))))try{const r=document.querySelector(n.el);if(o&&r){Ee(`The selector "${n.el}" should be passed as "el: document.querySelector('${n.el}')" because it starts with "#".`);return}}catch{Ee(`The selector "${n.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);return}const l=typeof t=="string"?o?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!l){Ee(`Couldn't find element using selector "${n.el}" returned by scrollBehavior.`);return}s=Mb(l,n)}else s=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(s):window.scrollTo(s.left!=null?s.left:window.pageXOffset,s.top!=null?s.top:window.pageYOffset)}function Jc(n,s){return(history.state?history.state.position-s:-1)+n}const ur=new Map;function Rb(n,s){ur.set(n,s)}function Lb(n){const s=ur.get(n);return ur.delete(n),s}let Nb=()=>location.protocol+"//"+location.host;function Wd(n,s){const{pathname:t,search:o,hash:l}=s,r=n.indexOf("#");if(r>-1){let c=l.includes(n.slice(r))?n.slice(r).length:1,p=l.slice(c);return p[0]!=="/"&&(p="/"+p),zc(p,"")}return zc(t,n)+o+l}function Wb(n,s,t,o){let l=[],r=[],i=null;const c=({state:f})=>{const m=Wd(n,location),y=t.value,A=s.value;let b=0;if(f){if(t.value=m,s.value=f,i&&i===y){i=null;return}b=A?f.position-A.position:0}else o(m);l.forEach(_=>{_(t.value,y,{delta:b,type:wo.pop,direction:b?b>0?co.forward:co.back:co.unknown})})};function p(){i=t.value}function u(f){l.push(f);const m=()=>{const y=l.indexOf(f);y>-1&&l.splice(y,1)};return r.push(m),m}function d(){const{history:f}=window;f.state&&f.replaceState(Me({},f.state,{scroll:na()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",d),{pauseListeners:p,listen:u,destroy:h}}function Qc(n,s,t,o=!1,l=!1){return{back:n,current:s,forward:t,replaced:o,position:window.history.length,scroll:l?na():null}}function qb(n){const{history:s,location:t}=window,o={value:Wd(n,t)},l={value:s.state};l.value||r(o.value,{back:null,current:o.value,forward:null,position:s.length-1,replaced:!0,scroll:null},!0);function r(p,u,d){const h=n.indexOf("#"),f=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+p:Nb()+n+p;try{s[d?"replaceState":"pushState"](u,"",f),l.value=u}catch(m){Ee("Error with push/replace State",m),t[d?"replace":"assign"](f)}}function i(p,u){const d=Me({},s.state,Qc(l.value.back,p,l.value.forward,!0),u,{position:l.value.position});r(p,d,!0),o.value=p}function c(p,u){const d=Me({},l.value,s.state,{forward:p,scroll:na()});s.state||Ee(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://next.router.vuejs.org/guide/migration/#usage-of-history-state.`),r(d.current,d,!0);const h=Me({},Qc(o.value,p,null),{position:d.position+1},u);r(p,h,!1),o.value=p}return{location:o,state:l,push:c,replace:i}}function jb(n){n=Tb(n);const s=qb(n),t=Wb(n,s.state,s.location,s.replace);function o(r,i=!0){i||t.pauseListeners(),history.go(r)}const l=Me({location:"",base:n,go:o,createHref:Ob.bind(null,n)},s,t);return Object.defineProperty(l,"location",{enumerable:!0,get:()=>s.location.value}),Object.defineProperty(l,"state",{enumerable:!0,get:()=>s.state.value}),l}function Vb(n){return typeof n=="string"||n&&typeof n=="object"}function qd(n){return typeof n=="string"||typeof n=="symbol"}const As={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},jd=Symbol("navigation failure");var Xc;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Xc||(Xc={}));const Hb={[1]({location:n,currentLocation:s}){return`No match for
 ${JSON.stringify(n)}${s?`
while being at
`+JSON.stringify(s):""}`},[2]({from:n,to:s}){return`Redirected from "${n.fullPath}" to "${Kb(s)}" via a navigation guard.`},[4]({from:n,to:s}){return`Navigation aborted from "${n.fullPath}" to "${s.fullPath}" via a navigation guard.`},[8]({from:n,to:s}){return`Navigation cancelled from "${n.fullPath}" to "${s.fullPath}" with a new navigation.`},[16]({from:n,to:s}){return`Avoided redundant navigation to current location: "${n.fullPath}".`}};function Ot(n,s){return Me(new Error(Hb[n](s)),{type:n,[jd]:!0},s)}function ss(n,s){return n instanceof Error&&jd in n&&(s==null||!!(n.type&s))}const Gb=["params","query","hash"];function Kb(n){if(typeof n=="string")return n;if("path"in n)return n.path;const s={};for(const t of Gb)t in n&&(s[t]=n[t]);return JSON.stringify(s,null,2)}const ep="[^/]+?",Ub={sensitive:!1,strict:!1,start:!0,end:!0},zb=/[.+*?^${}()[\]/\\]/g;function Yb(n,s){const t=Me({},Ub,s),o=[];let l=t.start?"^":"";const r=[];for(const u of n){const d=u.length?[]:[90];t.strict&&!u.length&&(l+="/");for(let h=0;h<u.length;h++){const f=u[h];let m=40+(t.sensitive?.25:0);if(f.type===0)h||(l+="/"),l+=f.value.replace(zb,"\\$&"),m+=40;else if(f.type===1){const{value:y,repeatable:A,optional:b,regexp:_}=f;r.push({name:y,repeatable:A,optional:b});const C=_||ep;if(C!==ep){m+=10;try{new RegExp(`(${C})`)}catch(w){throw new Error(`Invalid custom RegExp for param "${y}" (${C}): `+w.message)}}let k=A?`((?:${C})(?:/(?:${C}))*)`:`(${C})`;h||(k=b&&u.length<2?`(?:/${k})`:"/"+k),b&&(k+="?"),l+=k,m+=20,b&&(m+=-8),A&&(m+=-20),C===".*"&&(m+=-50)}d.push(m)}o.push(d)}if(t.strict&&t.end){const u=o.length-1;o[u][o[u].length-1]+=.7000000000000001}t.strict||(l+="/?"),t.end?l+="$":t.strict&&(l+="(?:/|$)");const i=new RegExp(l,t.sensitive?"":"i");function c(u){const d=u.match(i),h={};if(!d)return null;for(let f=1;f<d.length;f++){const m=d[f]||"",y=r[f-1];h[y.name]=m&&y.repeatable?m.split("/"):m}return h}function p(u){let d="",h=!1;for(const f of n){(!h||!d.endsWith("/"))&&(d+="/"),h=!1;for(const m of f)if(m.type===0)d+=m.value;else if(m.type===1){const{value:y,repeatable:A,optional:b}=m,_=y in u?u[y]:"";if(Sn(_)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const C=Sn(_)?_.join("/"):_;if(!C)if(b)f.length<2&&(d.endsWith("/")?d=d.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);d+=C}}return d||"/"}return{re:i,score:o,keys:r,parse:c,stringify:p}}function Zb(n,s){let t=0;for(;t<n.length&&t<s.length;){const o=s[t]-n[t];if(o)return o;t++}return n.length<s.length?n.length===1&&n[0]===40+40?-1:1:n.length>s.length?s.length===1&&s[0]===40+40?1:-1:0}function Jb(n,s){let t=0;const o=n.score,l=s.score;for(;t<o.length&&t<l.length;){const r=Zb(o[t],l[t]);if(r)return r;t++}if(Math.abs(l.length-o.length)===1){if(np(o))return 1;if(np(l))return-1}return l.length-o.length}function np(n){const s=n[n.length-1];return n.length>0&&s[s.length-1]<0}const Qb={type:0,value:""},Xb=/[a-zA-Z0-9_]/;function eB(n){if(!n)return[[]];if(n==="/")return[[Qb]];if(!n.startsWith("/"))throw new Error(`Route paths should start with a "/": "${n}" should be "/${n}".`);function s(m){throw new Error(`ERR (${t})/"${u}": ${m}`)}let t=0,o=t;const l=[];let r;function i(){r&&l.push(r),r=[]}let c=0,p,u="",d="";function h(){u&&(t===0?r.push({type:0,value:u}):t===1||t===2||t===3?(r.length>1&&(p==="*"||p==="+")&&s(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:u,regexp:d,repeatable:p==="*"||p==="+",optional:p==="*"||p==="?"})):s("Invalid state to consume buffer"),u="")}function f(){u+=p}for(;c<n.length;){if(p=n[c++],p==="\\"&&t!==2){o=t,t=4;continue}switch(t){case 0:p==="/"?(u&&h(),i()):p===":"?(h(),t=1):f();break;case 4:f(),t=o;break;case 1:p==="("?t=2:Xb.test(p)?f():(h(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&c--);break;case 2:p===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+p:t=3:d+=p;break;case 3:h(),t=0,p!=="*"&&p!=="?"&&p!=="+"&&c--,d="";break;default:s("Unknown state");break}}return t===2&&s(`Unfinished custom RegExp for param "${u}"`),h(),i(),l}function nB(n,s,t){const o=Yb(eB(n.path),t);{const r=new Set;for(const i of o.keys)r.has(i.name)&&Ee(`Found duplicated params with name "${i.name}" for path "${n.path}". Only the last one will be available on "$route.params".`),r.add(i.name)}const l=Me(o,{record:n,parent:s,children:[],alias:[]});return s&&!l.record.aliasOf==!s.record.aliasOf&&s.children.push(l),l}function sB(n,s){const t=[],o=new Map;s=op({strict:!1,end:!0,sensitive:!1},s);function l(d){return o.get(d)}function r(d,h,f){const m=!f,y=tB(d);rB(y,h),y.aliasOf=f&&f.record;const A=op(s,d),b=[y];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of k)b.push(Me({},y,{components:f?f.record.components:y.components,path:w,aliasOf:f?f.record:y}))}let _,C;for(const k of b){const{path:w}=k;if(h&&w[0]!=="/"){const $=h.record.path,R=$[$.length-1]==="/"?"":"/";k.path=h.record.path+(w&&R+w)}if(k.path==="*")throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);if(_=nB(k,h,A),h&&w[0]==="/"&&iB(_,h),f?(f.alias.push(_),aB(f,_)):(C=C||_,C!==_&&C.alias.push(_),m&&d.name&&!tp(_)&&i(d.name)),y.children){const $=y.children;for(let R=0;R<$.length;R++)r($[R],_,f&&f.children[R])}f=f||_,(_.record.components&&Object.keys(_.record.components).length||_.record.name||_.record.redirect)&&p(_)}return C?()=>{i(C)}:io}function i(d){if(qd(d)){const h=o.get(d);h&&(o.delete(d),t.splice(t.indexOf(h),1),h.children.forEach(i),h.alias.forEach(i))}else{const h=t.indexOf(d);h>-1&&(t.splice(h,1),d.record.name&&o.delete(d.record.name),d.children.forEach(i),d.alias.forEach(i))}}function c(){return t}function p(d){let h=0;for(;h<t.length&&Jb(d,t[h])>=0&&(d.record.path!==t[h].record.path||!Vd(d,t[h]));)h++;t.splice(h,0,d),d.record.name&&!tp(d)&&o.set(d.record.name,d)}function u(d,h){let f,m={},y,A;if("name"in d&&d.name){if(f=o.get(d.name),!f)throw Ot(1,{location:d});{const C=Object.keys(d.params||{}).filter(k=>!f.keys.find(w=>w.name===k));C.length&&Ee(`Discarded invalid param(s) "${C.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`)}A=f.record.name,m=Me(sp(h.params,f.keys.filter(C=>!C.optional).map(C=>C.name)),d.params&&sp(d.params,f.keys.map(C=>C.name))),y=f.stringify(m)}else if("path"in d)y=d.path,y.startsWith("/")||Ee(`The Matcher cannot resolve relative paths but received "${y}". Unless you directly called \`matcher.resolve("${y}")\`, this is probably a bug in vue-router. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/router.`),f=t.find(C=>C.re.test(y)),f&&(m=f.parse(y),A=f.record.name);else{if(f=h.name?o.get(h.name):t.find(C=>C.re.test(h.path)),!f)throw Ot(1,{location:d,currentLocation:h});A=f.record.name,m=Me({},h.params,d.params),y=f.stringify(m)}const b=[];let _=f;for(;_;)b.unshift(_.record),_=_.parent;return{name:A,path:y,params:m,matched:b,meta:lB(b)}}return n.forEach(d=>r(d)),{addRoute:r,resolve:u,removeRoute:i,getRoutes:c,getRecordMatcher:l}}function sp(n,s){const t={};for(const o of s)o in n&&(t[o]=n[o]);return t}function tB(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:oB(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function oB(n){const s={},t=n.props||!1;if("component"in n)s.default=t;else for(const o in n.components)s[o]=typeof t=="boolean"?t:t[o];return s}function tp(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function lB(n){return n.reduce((s,t)=>Me(s,t.meta),{})}function op(n,s){const t={};for(const o in n)t[o]=o in s?s[o]:n[o];return t}function dr(n,s){return n.name===s.name&&n.optional===s.optional&&n.repeatable===s.repeatable}function aB(n,s){for(const t of n.keys)if(!t.optional&&!s.keys.find(dr.bind(null,t)))return Ee(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`);for(const t of s.keys)if(!t.optional&&!n.keys.find(dr.bind(null,t)))return Ee(`Alias "${s.record.path}" and the original record: "${n.record.path}" must have the exact same param named "${t.name}"`)}function rB(n,s){s&&s.record.name&&!n.name&&!n.path&&Ee(`The route named "${String(s.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`)}function iB(n,s){for(const t of s.keys)if(!n.keys.find(dr.bind(null,t)))return Ee(`Absolute path "${n.record.path}" must have the exact same param named "${t.name}" as its parent "${s.record.path}".`)}function Vd(n,s){return s.children.some(t=>t===n||Vd(n,t))}const Hd=/#/g,cB=/&/g,pB=/\//g,uB=/=/g,dB=/\?/g,Gd=/\+/g,hB=/%5B/g,fB=/%5D/g,Kd=/%5E/g,yB=/%60/g,Ud=/%7B/g,mB=/%7C/g,zd=/%7D/g,gB=/%20/g;function ui(n){return encodeURI(""+n).replace(mB,"|").replace(hB,"[").replace(fB,"]")}function AB(n){return ui(n).replace(Ud,"{").replace(zd,"}").replace(Kd,"^")}function hr(n){return ui(n).replace(Gd,"%2B").replace(gB,"+").replace(Hd,"%23").replace(cB,"%26").replace(yB,"`").replace(Ud,"{").replace(zd,"}").replace(Kd,"^")}function bB(n){return hr(n).replace(uB,"%3D")}function BB(n){return ui(n).replace(Hd,"%23").replace(dB,"%3F")}function CB(n){return n==null?"":BB(n).replace(pB,"%2F")}function xo(n){try{return decodeURIComponent(""+n)}catch{Ee(`Error decoding "${n}". Using original value`)}return""+n}function kB(n){const s={};if(n===""||n==="?")return s;const o=(n[0]==="?"?n.slice(1):n).split("&");for(let l=0;l<o.length;++l){const r=o[l].replace(Gd," "),i=r.indexOf("="),c=xo(i<0?r:r.slice(0,i)),p=i<0?null:xo(r.slice(i+1));if(c in s){let u=s[c];Sn(u)||(u=s[c]=[u]),u.push(p)}else s[c]=p}return s}function lp(n){let s="";for(let t in n){const o=n[t];if(t=bB(t),o==null){o!==void 0&&(s+=(s.length?"&":"")+t);continue}(Sn(o)?o.map(r=>r&&hr(r)):[o&&hr(o)]).forEach(r=>{r!==void 0&&(s+=(s.length?"&":"")+t,r!=null&&(s+="="+r))})}return s}function _B(n){const s={};for(const t in n){const o=n[t];o!==void 0&&(s[t]=Sn(o)?o.map(l=>l==null?null:""+l):o==null?o:""+o)}return s}const vB=Symbol("router view location matched"),ap=Symbol("router view depth"),di=Symbol("router"),Yd=Symbol("route location"),fr=Symbol("router view location");function Kt(){let n=[];function s(o){return n.push(o),()=>{const l=n.indexOf(o);l>-1&&n.splice(l,1)}}function t(){n=[]}return{add:s,list:()=>n,reset:t}}function ks(n,s,t,o,l){const r=o&&(o.enterCallbacks[l]=o.enterCallbacks[l]||[]);return()=>new Promise((i,c)=>{const p=h=>{h===!1?c(Ot(4,{from:t,to:s})):h instanceof Error?c(h):Vb(h)?c(Ot(2,{from:s,to:h})):(r&&o.enterCallbacks[l]===r&&typeof h=="function"&&r.push(h),i())},u=n.call(o&&o.instances[l],s,t,DB(p,s,t));let d=Promise.resolve(u);if(n.length<3&&(d=d.then(p)),n.length>2){const h=`The "next" callback was never called inside of ${n.name?'"'+n.name+'"':""}:
${n.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;if(typeof u=="object"&&"then"in u)d=d.then(f=>p._called?f:(Ee(h),Promise.reject(new Error("Invalid navigation guard"))));else if(u!==void 0&&!p._called){Ee(h),c(new Error("Invalid navigation guard"));return}}d.catch(h=>c(h))})}function DB(n,s,t){let o=0;return function(){o++===1&&Ee(`The "next" callback was called more than once in one navigation guard when going from "${t.fullPath}" to "${s.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`),n._called=!0,o===1&&n.apply(null,arguments)}}function va(n,s,t,o){const l=[];for(const r of n){!r.components&&!r.children.length&&Ee(`Record with path "${r.path}" is either missing a "component(s)" or "children" property.`);for(const i in r.components){let c=r.components[i];{if(!c||typeof c!="object"&&typeof c!="function")throw Ee(`Component "${i}" in record with path "${r.path}" is not a valid component. Received "${String(c)}".`),new Error("Invalid route component");if("then"in c){Ee(`Component "${i}" in record with path "${r.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);const p=c;c=()=>p}else c.__asyncLoader&&!c.__warnedDefineAsync&&(c.__warnedDefineAsync=!0,Ee(`Component "${i}" in record with path "${r.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`))}if(!(s!=="beforeRouteEnter"&&!r.instances[i]))if(wB(c)){const u=(c.__vccOpts||c)[s];u&&l.push(ks(u,t,o,r,i))}else{let p=c();"catch"in p||(Ee(`Component "${i}" in record with path "${r.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`),p=Promise.resolve(p)),l.push(()=>p.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${r.path}"`));const d=wb(u)?u.default:u;r.components[i]=d;const f=(d.__vccOpts||d)[s];return f&&ks(f,t,o,r,i)()}))}}}return l}function wB(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function rp(n){const s=N(di),t=N(Yd),o=S(()=>s.resolve(v(n.to))),l=S(()=>{const{matched:p}=o.value,{length:u}=p,d=p[u-1],h=t.matched;if(!d||!h.length)return-1;const f=h.findIndex(Rs.bind(null,d));if(f>-1)return f;const m=ip(p[u-2]);return u>1&&ip(d)===m&&h[h.length-1].path!==m?h.findIndex(Rs.bind(null,p[u-2])):f}),r=S(()=>l.value>-1&&EB(t.params,o.value.params)),i=S(()=>l.value>-1&&l.value===t.matched.length-1&&Nd(t.params,o.value.params));function c(p={}){return SB(p)?s[v(n.replace)?"replace":"push"](v(n.to)).catch(io):Promise.resolve()}if(rs){const p=En();if(p){const u={route:o.value,isActive:r.value,isExactActive:i.value};p.__vrl_devtools=p.__vrl_devtools||[],p.__vrl_devtools.push(u),ut(()=>{u.route=o.value,u.isActive=r.value,u.isExactActive=i.value},{flush:"post"})}}return{route:o,href:S(()=>o.value.href),isActive:r,isExactActive:i,navigate:c}}const xB=Re({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:rp,setup(n,{slots:s}){const t=He(rp(n)),{options:o}=N(di),l=S(()=>({[cp(n.activeClass,o.linkActiveClass,"router-link-active")]:t.isActive,[cp(n.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const r=s.default&&s.default(t);return n.custom?r:xn("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:l.value},r)}}}),IB=xB;function SB(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const s=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(s))return}return n.preventDefault&&n.preventDefault(),!0}}function EB(n,s){for(const t in s){const o=s[t],l=n[t];if(typeof o=="string"){if(o!==l)return!1}else if(!Sn(l)||l.length!==o.length||o.some((r,i)=>r!==l[i]))return!1}return!0}function ip(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const cp=(n,s,t)=>n??s??t,$B=Re({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:s,slots:t}){FB();const o=N(fr),l=S(()=>n.route||o.value),r=N(ap,0),i=S(()=>{let u=v(r);const{matched:d}=l.value;let h;for(;(h=d[u])&&!h.components;)u++;return u}),c=S(()=>l.value.matched[i.value]);Dn(ap,S(()=>i.value+1)),Dn(vB,c),Dn(fr,l);const p=z();return Be(()=>[p.value,c.value,n.name],([u,d,h],[f,m,y])=>{d&&(d.instances[h]=u,m&&m!==d&&u&&u===f&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),u&&d&&(!m||!Rs(d,m)||!f)&&(d.enterCallbacks[h]||[]).forEach(A=>A(u))},{flush:"post"}),()=>{const u=l.value,d=n.name,h=c.value,f=h&&h.components[d];if(!f)return pp(t.default,{Component:f,route:u});const m=h.props[d],y=m?m===!0?u.params:typeof m=="function"?m(u):m:null,b=xn(f,Me({},y,s,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(h.instances[d]=null)},ref:p}));if(rs&&b.ref){const _={depth:i.value,name:h.name,path:h.path,meta:h.meta};(Sn(b.ref)?b.ref.map(k=>k.i):[b.ref.i]).forEach(k=>{k.__vrv_devtools=_})}return pp(t.default,{Component:b,route:u})||b}}});function pp(n,s){if(!n)return null;const t=n(s);return t.length===1?t[0]:t}const TB=$B;function FB(){const n=En(),s=n.parent&&n.parent.type.name;if(s&&(s==="KeepAlive"||s.includes("Transition"))){const t=s==="KeepAlive"?"keep-alive":"transition";Ee(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${t}>
    <component :is="Component" />
  </${t}>
</router-view>`)}}function Ut(n,s){const t=Me({},n,{matched:n.matched.map(o=>jB(o,["instances","children","aliasOf"]))});return{_custom:{type:null,readOnly:!0,display:n.fullPath,tooltip:s,value:t}}}function tl(n){return{_custom:{display:n}}}let OB=0;function MB(n,s,t){if(s.__hasDevtools)return;s.__hasDevtools=!0;const o=OB++;Db({id:"org.vuejs.router"+(o?"."+o:""),label:"Vue Router",packageName:"vue-router",homepage:"https://router.vuejs.org",logo:"https://router.vuejs.org/logo.png",componentStateTypes:["Routing"],app:n},l=>{typeof l.now!="function"&&console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."),l.on.inspectComponent((d,h)=>{d.instanceData&&d.instanceData.state.push({type:"Routing",key:"$route",editable:!1,value:Ut(s.currentRoute.value,"Current Route")})}),l.on.visitComponentTree(({treeNode:d,componentInstance:h})=>{if(h.__vrv_devtools){const f=h.__vrv_devtools;d.tags.push({label:(f.name?`${f.name.toString()}: `:"")+f.path,textColor:0,tooltip:"This component is rendered by &lt;router-view&gt;",backgroundColor:Zd})}Sn(h.__vrl_devtools)&&(h.__devtoolsApi=l,h.__vrl_devtools.forEach(f=>{let m=Xd,y="";f.isExactActive?(m=Qd,y="This is exactly active"):f.isActive&&(m=Jd,y="This link is active"),d.tags.push({label:f.route.path,textColor:0,tooltip:y,backgroundColor:m})}))}),Be(s.currentRoute,()=>{p(),l.notifyComponentUpdate(),l.sendInspectorTree(c),l.sendInspectorState(c)});const r="router:navigations:"+o;l.addTimelineLayer({id:r,label:`Router${o?" "+o:""} Navigations`,color:4237508}),s.onError((d,h)=>{l.addTimelineEvent({layerId:r,event:{title:"Error during Navigation",subtitle:h.fullPath,logType:"error",time:l.now(),data:{error:d},groupId:h.meta.__navigationId}})});let i=0;s.beforeEach((d,h)=>{const f={guard:tl("beforeEach"),from:Ut(h,"Current Location during this navigation"),to:Ut(d,"Target location")};Object.defineProperty(d.meta,"__navigationId",{value:i++}),l.addTimelineEvent({layerId:r,event:{time:l.now(),title:"Start of navigation",subtitle:d.fullPath,data:f,groupId:d.meta.__navigationId}})}),s.afterEach((d,h,f)=>{const m={guard:tl("afterEach")};f?(m.failure={_custom:{type:Error,readOnly:!0,display:f?f.message:"",tooltip:"Navigation Failure",value:f}},m.status=tl("❌")):m.status=tl("✅"),m.from=Ut(h,"Current Location during this navigation"),m.to=Ut(d,"Target location"),l.addTimelineEvent({layerId:r,event:{title:"End of navigation",subtitle:d.fullPath,time:l.now(),data:m,logType:f?"warning":"default",groupId:d.meta.__navigationId}})});const c="router-inspector:"+o;l.addInspector({id:c,label:"Routes"+(o?" "+o:""),icon:"book",treeFilterPlaceholder:"Search routes"});function p(){if(!u)return;const d=u;let h=t.getRoutes().filter(f=>!f.parent);h.forEach(sh),d.filter&&(h=h.filter(f=>yr(f,d.filter.toLowerCase()))),h.forEach(f=>nh(f,s.currentRoute.value)),d.rootNodes=h.map(eh)}let u;l.on.getInspectorTree(d=>{u=d,d.app===n&&d.inspectorId===c&&p()}),l.on.getInspectorState(d=>{if(d.app===n&&d.inspectorId===c){const f=t.getRoutes().find(m=>m.record.__vd_id===d.nodeId);f&&(d.state={options:RB(f)})}}),l.sendInspectorTree(c),l.sendInspectorState(c)})}function PB(n){return n.optional?n.repeatable?"*":"?":n.repeatable?"+":""}function RB(n){const{record:s}=n,t=[{editable:!1,key:"path",value:s.path}];return s.name!=null&&t.push({editable:!1,key:"name",value:s.name}),t.push({editable:!1,key:"regexp",value:n.re}),n.keys.length&&t.push({editable:!1,key:"keys",value:{_custom:{type:null,readOnly:!0,display:n.keys.map(o=>`${o.name}${PB(o)}`).join(" "),tooltip:"Param keys",value:n.keys}}}),s.redirect!=null&&t.push({editable:!1,key:"redirect",value:s.redirect}),n.alias.length&&t.push({editable:!1,key:"aliases",value:n.alias.map(o=>o.record.path)}),Object.keys(n.record.meta).length&&t.push({editable:!1,key:"meta",value:n.record.meta}),t.push({key:"score",editable:!1,value:{_custom:{type:null,readOnly:!0,display:n.score.map(o=>o.join(", ")).join(" | "),tooltip:"Score used to sort routes",value:n.score}}}),t}const Zd=15485081,Jd=2450411,Qd=8702998,LB=2282478,Xd=16486972,NB=6710886;function eh(n){const s=[],{record:t}=n;t.name!=null&&s.push({label:String(t.name),textColor:0,backgroundColor:LB}),t.aliasOf&&s.push({label:"alias",textColor:0,backgroundColor:Xd}),n.__vd_match&&s.push({label:"matches",textColor:0,backgroundColor:Zd}),n.__vd_exactActive&&s.push({label:"exact",textColor:0,backgroundColor:Qd}),n.__vd_active&&s.push({label:"active",textColor:0,backgroundColor:Jd}),t.redirect&&s.push({label:typeof t.redirect=="string"?`redirect: ${t.redirect}`:"redirects",textColor:16777215,backgroundColor:NB});let o=t.__vd_id;return o==null&&(o=String(WB++),t.__vd_id=o),{id:o,label:t.path,tags:s,children:n.children.map(eh)}}let WB=0;const qB=/^\/(.*)\/([a-z]*)$/;function nh(n,s){const t=s.matched.length&&Rs(s.matched[s.matched.length-1],n.record);n.__vd_exactActive=n.__vd_active=t,t||(n.__vd_active=s.matched.some(o=>Rs(o,n.record))),n.children.forEach(o=>nh(o,s))}function sh(n){n.__vd_match=!1,n.children.forEach(sh)}function yr(n,s){const t=String(n.re).match(qB);if(n.__vd_match=!1,!t||t.length<3)return!1;if(new RegExp(t[1].replace(/\$$/,""),t[2]).test(s))return n.children.forEach(i=>yr(i,s)),n.record.path!=="/"||s==="/"?(n.__vd_match=n.re.test(s),!0):!1;const l=n.record.path.toLowerCase(),r=xo(l);return!s.startsWith("/")&&(r.includes(s)||l.includes(s))||r.startsWith(s)||l.startsWith(s)||n.record.name&&String(n.record.name).includes(s)?!0:n.children.some(i=>yr(i,s))}function jB(n,s){const t={};for(const o in n)s.includes(o)||(t[o]=n[o]);return t}function VB(n){const s=sB(n.routes,n),t=n.parseQuery||kB,o=n.stringifyQuery||lp,l=n.history;if(!l)throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');const r=Kt(),i=Kt(),c=Kt(),p=es(As);let u=As;rs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ka.bind(null,I=>""+I),h=ka.bind(null,CB),f=ka.bind(null,xo);function m(I,X){let K,se;return qd(I)?(K=s.getRecordMatcher(I),se=X):se=I,s.addRoute(se,K)}function y(I){const X=s.getRecordMatcher(I);X?s.removeRoute(X):Ee(`Cannot remove non-existent route "${String(I)}"`)}function A(){return s.getRoutes().map(I=>I.record)}function b(I){return!!s.getRecordMatcher(I)}function _(I,X){if(X=Me({},X||p.value),typeof I=="string"){const fe=_a(t,I,X.path),g=s.resolve({path:fe.path},X),B=l.createHref(fe.fullPath);return B.startsWith("//")?Ee(`Location "${I}" resolved to "${B}". A resolved location cannot start with multiple slashes.`):g.matched.length||Ee(`No match found for location with path "${I}"`),Me(fe,g,{params:f(g.params),hash:xo(fe.hash),redirectedFrom:void 0,href:B})}let K;if("path"in I)"params"in I&&!("name"in I)&&Object.keys(I.params).length&&Ee(`Path "${I.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`),K=Me({},I,{path:_a(t,I.path,X.path).path});else{const fe=Me({},I.params);for(const g in fe)fe[g]==null&&delete fe[g];K=Me({},I,{params:h(I.params)}),X.params=h(X.params)}const se=s.resolve(K,X),ve=I.hash||"";ve&&!ve.startsWith("#")&&Ee(`A \`hash\` should always start with the character "#". Replace "${ve}" with "#${ve}".`),se.params=d(f(se.params));const Ie=Sb(o,Me({},I,{hash:AB(ve),path:se.path})),ge=l.createHref(Ie);return ge.startsWith("//")?Ee(`Location "${I}" resolved to "${ge}". A resolved location cannot start with multiple slashes.`):se.matched.length||Ee(`No match found for location with path "${"path"in I?I.path:I}"`),Me({fullPath:Ie,hash:ve,query:o===lp?_B(I.query):I.query||{}},se,{redirectedFrom:void 0,href:ge})}function C(I){return typeof I=="string"?_a(t,I,p.value.path):Me({},I)}function k(I,X){if(u!==I)return Ot(8,{from:X,to:I})}function w(I){return H(I)}function $(I){return w(Me(C(I),{replace:!0}))}function R(I){const X=I.matched[I.matched.length-1];if(X&&X.redirect){const{redirect:K}=X;let se=typeof K=="function"?K(I):K;if(typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=C(se):{path:se},se.params={}),!("path"in se)&&!("name"in se))throw Ee(`Invalid redirect found:
${JSON.stringify(se,null,2)}
 when navigating to "${I.fullPath}". A redirect must contain a name or path. This will break in production.`),new Error("Invalid redirect");return Me({query:I.query,hash:I.hash,params:"path"in se?{}:I.params},se)}}function H(I,X){const K=u=_(I),se=p.value,ve=I.state,Ie=I.force,ge=I.replace===!0,fe=R(K);if(fe)return H(Me(C(fe),{state:typeof fe=="object"?Me({},ve,fe.state):ve,force:Ie,replace:ge}),X||K);const g=K;g.redirectedFrom=X;let B;return!Ie&&Yc(o,se,K)&&(B=Ot(16,{to:g,from:se}),Le(se,se,!0,!1)),(B?Promise.resolve(B):j(g,se)).catch(x=>ss(x)?ss(x,2)?x:ke(x):Q(x,g,se)).then(x=>{if(x){if(ss(x,2))return Yc(o,_(x.to),g)&&X&&(X._count=X._count?X._count+1:1)>10?(Ee(`Detected an infinite redirection in a navigation guard when going from "${se.fullPath}" to "${g.fullPath}". Aborting to avoid a Stack Overflow. This will break in production if not fixed.`),Promise.reject(new Error("Infinite redirect in navigation guard"))):H(Me({replace:ge},C(x.to),{state:typeof x.to=="object"?Me({},ve,x.to.state):ve,force:Ie}),X||g)}else x=he(g,se,!0,ge,ve);return ee(g,se,x),x})}function E(I,X){const K=k(I,X);return K?Promise.reject(K):Promise.resolve()}function j(I,X){let K;const[se,ve,Ie]=HB(I,X);K=va(se.reverse(),"beforeRouteLeave",I,X);for(const fe of se)fe.leaveGuards.forEach(g=>{K.push(ks(g,I,X))});const ge=E.bind(null,I,X);return K.push(ge),gt(K).then(()=>{K=[];for(const fe of r.list())K.push(ks(fe,I,X));return K.push(ge),gt(K)}).then(()=>{K=va(ve,"beforeRouteUpdate",I,X);for(const fe of ve)fe.updateGuards.forEach(g=>{K.push(ks(g,I,X))});return K.push(ge),gt(K)}).then(()=>{K=[];for(const fe of I.matched)if(fe.beforeEnter&&!X.matched.includes(fe))if(Sn(fe.beforeEnter))for(const g of fe.beforeEnter)K.push(ks(g,I,X));else K.push(ks(fe.beforeEnter,I,X));return K.push(ge),gt(K)}).then(()=>(I.matched.forEach(fe=>fe.enterCallbacks={}),K=va(Ie,"beforeRouteEnter",I,X),K.push(ge),gt(K))).then(()=>{K=[];for(const fe of i.list())K.push(ks(fe,I,X));return K.push(ge),gt(K)}).catch(fe=>ss(fe,8)?fe:Promise.reject(fe))}function ee(I,X,K){for(const se of c.list())se(I,X,K)}function he(I,X,K,se,ve){const Ie=k(I,X);if(Ie)return Ie;const ge=X===As,fe=rs?history.state:{};K&&(se||ge?l.replace(I.fullPath,Me({scroll:ge&&fe&&fe.scroll},ve)):l.push(I.fullPath,ve)),p.value=I,Le(I,X,K,ge),ke()}let Z;function _e(){Z||(Z=l.listen((I,X,K)=>{if(!ys.listening)return;const se=_(I),ve=R(se);if(ve){H(Me(ve,{replace:!0}),se).catch(io);return}u=se;const Ie=p.value;rs&&Rb(Jc(Ie.fullPath,K.delta),na()),j(se,Ie).catch(ge=>ss(ge,12)?ge:ss(ge,2)?(H(ge.to,se).then(fe=>{ss(fe,20)&&!K.delta&&K.type===wo.pop&&l.go(-1,!1)}).catch(io),Promise.reject()):(K.delta&&l.go(-K.delta,!1),Q(ge,se,Ie))).then(ge=>{ge=ge||he(se,Ie,!1),ge&&(K.delta&&!ss(ge,8)?l.go(-K.delta,!1):K.type===wo.pop&&ss(ge,20)&&l.go(-1,!1)),ee(se,Ie,ge)}).catch(io)}))}let Fe=Kt(),Se=Kt(),qe;function Q(I,X,K){ke(I);const se=Se.list();return se.length?se.forEach(ve=>ve(I,X,K)):(Ee("uncaught error during route navigation:"),console.error(I)),Promise.reject(I)}function ie(){return qe&&p.value!==As?Promise.resolve():new Promise((I,X)=>{Fe.add([I,X])})}function ke(I){return qe||(qe=!I,_e(),Fe.list().forEach(([X,K])=>I?K(I):X()),Fe.reset()),I}function Le(I,X,K,se){const{scrollBehavior:ve}=n;if(!rs||!ve)return Promise.resolve();const Ie=!K&&Lb(Jc(I.fullPath,0))||(se||!K)&&history.state&&history.state.scroll||null;return sn().then(()=>ve(I,X,Ie)).then(ge=>ge&&Pb(ge)).catch(ge=>Q(ge,I,X))}const Cn=I=>l.go(I);let on;const yn=new Set,ys={currentRoute:p,listening:!0,addRoute:m,removeRoute:y,hasRoute:b,getRoutes:A,resolve:_,options:n,push:w,replace:$,go:Cn,back:()=>Cn(-1),forward:()=>Cn(1),beforeEach:r.add,beforeResolve:i.add,afterEach:c.add,onError:Se.add,isReady:ie,install(I){const X=this;I.component("RouterLink",IB),I.component("RouterView",TB),I.config.globalProperties.$router=X,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>v(p)}),rs&&!on&&p.value===As&&(on=!0,w(l.location).catch(ve=>{Ee("Unexpected error when starting the router:",ve)}));const K={};for(const ve in As)K[ve]=S(()=>p.value[ve]);I.provide(di,X),I.provide(Yd,He(K)),I.provide(fr,p);const se=I.unmount;yn.add(I),I.unmount=function(){yn.delete(I),yn.size<1&&(u=As,Z&&Z(),Z=null,p.value=As,on=!1,qe=!1),se()},rs&&MB(I,X,s)}};return ys}function gt(n){return n.reduce((s,t)=>s.then(()=>t()),Promise.resolve())}function HB(n,s){const t=[],o=[],l=[],r=Math.max(s.matched.length,n.matched.length);for(let i=0;i<r;i++){const c=s.matched[i];c&&(n.matched.find(u=>Rs(u,c))?o.push(c):t.push(c));const p=n.matched[i];p&&(s.matched.find(u=>Rs(u,p))||l.push(p))}return[t,o,l]}const Da=z(!1),po=z(!1),vt=z(!1),GB=z(!0),mr=$8({xs:460,...w8}),lt=gb(),th=lb(),KB=S(()=>lt.height.value-lt.width.value/Ss>180),oh=sb(Hn?document.body:null),Et=D8(),UB=S(()=>{var n,s;return["INPUT","TEXTAREA"].includes(((n=Et.value)==null?void 0:n.tagName)||"")||((s=Et.value)==null?void 0:s.classList.contains("CodeMirror-code"))}),zB=S(()=>{var n;return["BUTTON","A"].includes(((n=Et.value)==null?void 0:n.tagName)||"")});Gn("slidev-camera","default");Gn("slidev-mic","default");const dl=Gn("slidev-scale",0),un=Gn("slidev-show-overview",!1),wa=Gn("slidev-presenter-cursor",!0),up=Gn("slidev-show-editor",!1);Gn("slidev-editor-width",Hn?window.innerWidth*.4:100);const lh=Od(un);function dp(n,s,t,o=l=>l){return n*o(.5-s*(.5-t))}function YB(n){return[-n[0],-n[1]]}function Wn(n,s){return[n[0]+s[0],n[1]+s[1]]}function Fn(n,s){return[n[0]-s[0],n[1]-s[1]]}function Nn(n,s){return[n[0]*s,n[1]*s]}function ZB(n,s){return[n[0]/s,n[1]/s]}function zt(n){return[n[1],-n[0]]}function hp(n,s){return n[0]*s[0]+n[1]*s[1]}function JB(n,s){return n[0]===s[0]&&n[1]===s[1]}function QB(n){return Math.hypot(n[0],n[1])}function XB(n){return n[0]*n[0]+n[1]*n[1]}function fp(n,s){return XB(Fn(n,s))}function ah(n){return ZB(n,QB(n))}function e3(n,s){return Math.hypot(n[1]-s[1],n[0]-s[0])}function Yt(n,s,t){let o=Math.sin(t),l=Math.cos(t),r=n[0]-s[0],i=n[1]-s[1],c=r*l-i*o,p=r*o+i*l;return[c+s[0],p+s[1]]}function gr(n,s,t){return Wn(n,Nn(Fn(s,n),t))}function yp(n,s,t){return Wn(n,Nn(s,t))}var{min:At,PI:n3}=Math,mp=.275,Zt=n3+1e-4;function s3(n,s={}){let{size:t=16,smoothing:o=.5,thinning:l=.5,simulatePressure:r=!0,easing:i=Q=>Q,start:c={},end:p={},last:u=!1}=s,{cap:d=!0,easing:h=Q=>Q*(2-Q)}=c,{cap:f=!0,easing:m=Q=>--Q*Q*Q+1}=p;if(n.length===0||t<=0)return[];let y=n[n.length-1].runningLength,A=c.taper===!1?0:c.taper===!0?Math.max(t,y):c.taper,b=p.taper===!1?0:p.taper===!0?Math.max(t,y):p.taper,_=Math.pow(t*o,2),C=[],k=[],w=n.slice(0,10).reduce((Q,ie)=>{let ke=ie.pressure;if(r){let Le=At(1,ie.distance/t),Cn=At(1,1-Le);ke=At(1,Q+(Cn-Q)*(Le*mp))}return(Q+ke)/2},n[0].pressure),$=dp(t,l,n[n.length-1].pressure,i),R,H=n[0].vector,E=n[0].point,j=E,ee=E,he=j,Z=!1;for(let Q=0;Q<n.length;Q++){let{pressure:ie}=n[Q],{point:ke,vector:Le,distance:Cn,runningLength:on}=n[Q];if(Q<n.length-1&&y-on<3)continue;if(l){if(r){let Ie=At(1,Cn/t),ge=At(1,1-Ie);ie=At(1,w+(ge-w)*(Ie*mp))}$=dp(t,l,ie,i)}else $=t/2;R===void 0&&(R=$);let yn=on<A?h(on/A):1,ys=y-on<b?m((y-on)/b):1;$=Math.max(.01,$*Math.min(yn,ys));let I=(Q<n.length-1?n[Q+1]:n[Q]).vector,X=Q<n.length-1?hp(Le,I):1,K=hp(Le,H)<0&&!Z,se=X!==null&&X<0;if(K||se){let Ie=Nn(zt(H),$);for(let ge=1/13,fe=0;fe<=1;fe+=ge)ee=Yt(Fn(ke,Ie),ke,Zt*fe),C.push(ee),he=Yt(Wn(ke,Ie),ke,Zt*-fe),k.push(he);E=ee,j=he,se&&(Z=!0);continue}if(Z=!1,Q===n.length-1){let Ie=Nn(zt(Le),$);C.push(Fn(ke,Ie)),k.push(Wn(ke,Ie));continue}let ve=Nn(zt(gr(I,Le,X)),$);ee=Fn(ke,ve),(Q<=1||fp(E,ee)>_)&&(C.push(ee),E=ee),he=Wn(ke,ve),(Q<=1||fp(j,he)>_)&&(k.push(he),j=he),w=ie,H=Le}let _e=n[0].point.slice(0,2),Fe=n.length>1?n[n.length-1].point.slice(0,2):Wn(n[0].point,[1,1]),Se=[],qe=[];if(n.length===1){if(!(A||b)||u){let Q=yp(_e,ah(zt(Fn(_e,Fe))),-(R||$)),ie=[];for(let ke=1/13,Le=ke;Le<=1;Le+=ke)ie.push(Yt(Q,_e,Zt*2*Le));return ie}}else{if(!(A||b&&n.length===1))if(d)for(let ie=1/13,ke=ie;ke<=1;ke+=ie){let Le=Yt(k[0],_e,Zt*ke);Se.push(Le)}else{let ie=Fn(C[0],k[0]),ke=Nn(ie,.5),Le=Nn(ie,.51);Se.push(Fn(_e,ke),Fn(_e,Le),Wn(_e,Le),Wn(_e,ke))}let Q=zt(YB(n[n.length-1].vector));if(b||A&&n.length===1)qe.push(Fe);else if(f){let ie=yp(Fe,Q,$);for(let ke=1/29,Le=ke;Le<1;Le+=ke)qe.push(Yt(ie,Fe,Zt*3*Le))}else qe.push(Wn(Fe,Nn(Q,$)),Wn(Fe,Nn(Q,$*.99)),Fn(Fe,Nn(Q,$*.99)),Fn(Fe,Nn(Q,$)))}return C.concat(qe,k.reverse(),Se)}function t3(n,s={}){var t;let{streamline:o=.5,size:l=16,last:r=!1}=s;if(n.length===0)return[];let i=.15+(1-o)*.85,c=Array.isArray(n[0])?n:n.map(({x:m,y,pressure:A=.5})=>[m,y,A]);if(c.length===2){let m=c[1];c=c.slice(0,-1);for(let y=1;y<5;y++)c.push(gr(c[0],m,y/4))}c.length===1&&(c=[...c,[...Wn(c[0],[1,1]),...c[0].slice(2)]]);let p=[{point:[c[0][0],c[0][1]],pressure:c[0][2]>=0?c[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],u=!1,d=0,h=p[0],f=c.length-1;for(let m=1;m<c.length;m++){let y=r&&m===f?c[m].slice(0,2):gr(h.point,c[m],i);if(JB(h.point,y))continue;let A=e3(y,h.point);if(d+=A,m<f&&!u){if(d<l)continue;u=!0}h={point:y,pressure:c[m][2]>=0?c[m][2]:.5,vector:ah(Fn(h.point,y)),distance:A,runningLength:d},p.push(h)}return p[0].vector=((t=p[1])==null?void 0:t.vector)||[0,0],p}function o3(n,s={}){return s3(t3(n,s),s)}var l3=()=>({events:{},emit(n,...s){let t=this.events[n]||[];for(let o=0,l=t.length;o<l;o++)t[o](...s)},on(n,s){var t;return(t=this.events[n])!=null&&t.push(s)||(this.events[n]=[s]),()=>{var o;this.events[n]=(o=this.events[n])==null?void 0:o.filter(l=>s!==l)}}});function Fl(n,s){return n-s}function a3(n){return n<0?-1:1}function Ol(n){return[Math.abs(n),a3(n)]}function rh(){const n=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${n()+n()}-${n()}-${n()}-${n()}-${n()}${n()}${n()}`}var r3=2,is=r3,Rt=class{constructor(n){this.drauu=n,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(n){}onUnselected(){}onStart(n){}onMove(n){return!1}onEnd(n){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(n){var s;const t=this.drauu.el,o=this.drauu.options.coordinateScale??1;if(this.drauu.options.coordinateTransform===!1){const l=this.drauu.el.getBoundingClientRect();return{x:(n.pageX-l.left)*o,y:(n.pageY-l.top)*o,pressure:n.pressure}}else{const l=this.drauu.svgPoint;l.x=n.clientX,l.y=n.clientY;const r=l.matrixTransform((s=t.getScreenCTM())==null?void 0:s.inverse());return{x:r.x*o,y:r.y*o,pressure:n.pressure}}}createElement(n,s){const t=document.createElementNS("http://www.w3.org/2000/svg",n),o=s?{...this.brush,...s}:this.brush;return t.setAttribute("fill",o.fill??"transparent"),t.setAttribute("stroke",o.color),t.setAttribute("stroke-width",o.size.toString()),t.setAttribute("stroke-linecap","round"),o.dasharray&&t.setAttribute("stroke-dasharray",o.dasharray),t}attr(n,s){this.el.setAttribute(n,typeof s=="string"?s:s.toFixed(is))}_setEvent(n){this.event=n,this.point=this.getMousePosition(n)}_eventDown(n){return this._setEvent(n),this.start=this.point,this.onStart(this.point)}_eventMove(n){return this._setEvent(n),this.onMove(this.point)}_eventUp(n){return this._setEvent(n),this.onEnd(this.point)}},i3=class extends Rt{constructor(){super(...arguments),this.points=[]}onStart(n){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[n],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&this.points.push(n),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!!n}getSvgData(n){const s=o3(n,{size:this.brush.size*2,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5},...this.brush.stylusOptions});if(!s.length)return"";const t=s.reduce((o,[l,r],i,c)=>{const[p,u]=c[(i+1)%c.length];return o.push(l,r,(l+p)/2,(r+u)/2),o},["M",...s[0],"Q"]);return t.push("Z"),t.map(o=>typeof o=="number"?o.toFixed(2):o).join(" ")}},c3=class extends Rt{onStart(n){return this.el=this.createElement("ellipse"),this.attr("cx",n.x),this.attr("cy",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,t]=Ol(n.x-this.start.x),[o,l]=Ol(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,o);s=r,o=r}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",s),this.attr("ry",o);else{const[r,i]=[this.start.x,this.start.x+s*t].sort(Fl),[c,p]=[this.start.y,this.start.y+o*l].sort(Fl);this.attr("cx",(r+i)/2),this.attr("cy",(c+p)/2),this.attr("rx",(i-r)/2),this.attr("ry",(p-c)/2)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function ih(n,s){const t=document.createElementNS("http://www.w3.org/2000/svg","defs"),o=document.createElementNS("http://www.w3.org/2000/svg","marker"),l=document.createElementNS("http://www.w3.org/2000/svg","path");return l.setAttribute("fill",s),o.setAttribute("id",n),o.setAttribute("viewBox","0 -5 10 10"),o.setAttribute("refX","5"),o.setAttribute("refY","0"),o.setAttribute("markerWidth","4"),o.setAttribute("markerHeight","4"),o.setAttribute("orient","auto"),l.setAttribute("d","M0,-5L10,0L0,5"),o.appendChild(l),t.appendChild(o),t}var p3=class extends Rt{onStart(n){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",n.x),this.attr("y1",n.y),this.attr("x2",n.x),this.attr("y2",n.y),this.brush.arrowEnd){const s=rh(),t=document.createElementNS("http://www.w3.org/2000/svg","g");return t.append(ih(s,this.brush.color)),t.append(this.el),this.attr("marker-end",`url(#${s})`),t}return this.el}onMove(n){if(!this.el)return!1;let{x:s,y:t}=n;if(this.shiftPressed){const o=n.x-this.start.x,l=n.y-this.start.y;if(l!==0){let r=o/l;r=Math.round(r),Math.abs(r)<=1?(s=this.start.x+l*r,t=this.start.y+l):(s=this.start.x+o,t=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-s),this.attr("y1",this.start.y*2-t),this.attr("x2",s),this.attr("y2",t)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",s),this.attr("y2",t)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||n.getTotalLength()<5)}},u3=class extends Rt{onStart(n){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",n.x),this.attr("y",n.y),this.el}onMove(n){if(!this.el||!this.start)return!1;let[s,t]=Ol(n.x-this.start.x),[o,l]=Ol(n.y-this.start.y);if(this.shiftPressed){const r=Math.min(s,o);s=r,o=r}if(this.altPressed)this.attr("x",this.start.x-s),this.attr("y",this.start.y-o),this.attr("width",s*2),this.attr("height",o*2);else{const[r,i]=[this.start.x,this.start.x+s*t].sort(Fl),[c,p]=[this.start.y,this.start.y+o*l].sort(Fl);this.attr("x",r),this.attr("y",c),this.attr("width",i-r),this.attr("height",p-c)}return!0}onEnd(){const n=this.el;return this.el=null,!(!n||!n.getTotalLength())}};function d3(n,s){const t=n.x-s.x,o=n.y-s.y;return t*t+o*o}function h3(n,s,t){let o=s.x,l=s.y,r=t.x-o,i=t.y-l;if(r!==0||i!==0){const c=((n.x-o)*r+(n.y-l)*i)/(r*r+i*i);c>1?(o=t.x,l=t.y):c>0&&(o+=r*c,l+=i*c)}return r=n.x-o,i=n.y-l,r*r+i*i}function f3(n,s){let t=n[0];const o=[t];let l;for(let r=1,i=n.length;r<i;r++)l=n[r],d3(l,t)>s&&(o.push(l),t=l);return t!==l&&l&&o.push(l),o}function Ar(n,s,t,o,l){let r=o,i=0;for(let c=s+1;c<t;c++){const p=h3(n[c],n[s],n[t]);p>r&&(i=c,r=p)}r>o&&(i-s>1&&Ar(n,s,i,o,l),l.push(n[i]),t-i>1&&Ar(n,i,t,o,l))}function y3(n,s){const t=n.length-1,o=[n[0]];return Ar(n,0,t,s,o),o.push(n[t]),o}function gp(n,s,t=!1){if(n.length<=2)return n;const o=s!==void 0?s*s:1;return n=t?n:f3(n,o),n=y3(n,o),n}var m3=class extends Rt{constructor(){super(...arguments),this.points=[],this.count=0}onStart(n){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[n],this.brush.arrowEnd){this.arrowId=rh();const s=ih(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(n){return this.el||this.onStart(n),this.points[this.points.length-1]!==n&&(this.points.push(n),this.count+=1),this.count>5&&(this.points=gp(this.points,1,!0),this.count=0),this.attr("d",bp(this.points)),!0}onEnd(){const n=this.el;return this.el=null,!(!n||(n.setAttribute("d",bp(gp(this.points,1,!0))),!n.getTotalLength()))}};function g3(n,s){const t=s.x-n.x,o=s.y-n.y;return{length:Math.sqrt(t**2+o**2),angle:Math.atan2(o,t)}}function Ap(n,s,t,o){const l=s||n,r=t||n,i=.2,c=g3(l,r),p=c.angle+(o?Math.PI:0),u=c.length*i,d=n.x+Math.cos(p)*u,h=n.y+Math.sin(p)*u;return{x:d,y:h}}function A3(n,s,t){const o=Ap(t[s-1],t[s-2],n),l=Ap(n,t[s-1],t[s+1],!0);return`C ${o.x.toFixed(is)},${o.y.toFixed(is)} ${l.x.toFixed(is)},${l.y.toFixed(is)} ${n.x.toFixed(is)},${n.y.toFixed(is)}`}function bp(n){return n.reduce((s,t,o,l)=>o===0?`M ${t.x.toFixed(is)},${t.y.toFixed(is)}`:`${s} ${A3(t,o,l)}`,"")}var b3=class extends Rt{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[]}onSelected(n){const s=(t,o)=>{if(t&&t.length)for(let l=0;l<t.length;l++){const r=t[l];if(r.getTotalLength){const i=r.getTotalLength();for(let c=0;c<this.pathSubFactor;c++){const p=r.getPointAtLength(i*c/this.pathSubFactor),u=r.getPointAtLength(i*(c+1)/this.pathSubFactor);this.pathFragments.push({x1:p.x,x2:u.x,y1:p.y,y2:u.y,segment:c,element:o||r})}}else r.children&&s(r.children,r)}};n&&s(n.children)}onUnselected(){this.pathFragments=[]}onStart(n){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=n.x,this.svgPointPrevious.y=n.y}onMove(n){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=n.x,this.svgPointCurrent.y=n.y;const s=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,s}onEnd(){return this.svgPointPrevious=void 0,this.svgPointCurrent=void 0,!0}checkAndEraseElement(){const n=[];if(this.pathFragments.length)for(let s=0;s<this.pathFragments.length;s++){const t=this.pathFragments[s],o={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(t,o)&&(t.element.remove(),n.push(s))}return n.length&&(this.pathFragments=this.pathFragments.filter((s,t)=>!n.includes(t))),n.length>0}lineLineIntersect(n,s){const t=n.x1,o=n.x2,l=s.x1,r=s.x2,i=n.y1,c=n.y2,p=s.y1,u=s.y2,d=(t-o)*(p-u)-(i-c)*(l-r),h=(t*c-i*o)*(l-r)-(t-o)*(l*u-p*r),f=(t*c-i*o)*(p-u)-(i-c)*(l*u-p*r),m=(y,A,b)=>y>=A&&y<=b?!0:y>=b&&y<=A;if(d===0)return!1;{const y={x:h/d,y:f/d};return m(y.x,t,o)&&m(y.y,i,c)&&m(y.x,l,r)&&m(y.y,p,u)}}};function B3(n){return{draw:new m3(n),stylus:new i3(n),line:new p3(n),rectangle:new u3(n),ellipse:new c3(n),eraseLine:new b3(n)}}var C3=class{constructor(n={}){this.options=n,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=l3(),this._models=B3(this),this._undoStack=[],this._disposables=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),n.el&&this.mount(n.el,n.eventTarget)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(n){this._models[this.mode].onUnselected(),this.options.brush.mode=n,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(n){this.options.brush=n}resolveSelector(n){return typeof n=="string"?document.querySelector(n):n||null}mount(n,s){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(n),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const t=this.resolveSelector(s)||this.el,o=this.eventStart.bind(this),l=this.eventMove.bind(this),r=this.eventEnd.bind(this),i=this.eventKeyboard.bind(this);t.addEventListener("pointerdown",o,{passive:!1}),window.addEventListener("pointermove",l,{passive:!1}),window.addEventListener("pointerup",r,{passive:!1}),window.addEventListener("pointercancel",r,{passive:!1}),window.addEventListener("keydown",i,!1),window.addEventListener("keyup",i,!1),this._disposables.push(()=>{t.removeEventListener("pointerdown",o),window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",r),window.removeEventListener("pointercancel",r),window.removeEventListener("keydown",i,!1),window.removeEventListener("keyup",i,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(n=>n()),this._disposables.length=0,this.el=null,this._emitter.emit("unmounted")}on(n,s){return this._emitter.on(n,s)}undo(){const n=this.el;return n.lastElementChild?(this._undoStack.push(n.lastElementChild.cloneNode(!0)),n.lastElementChild.remove(),this._emitter.emit("changed"),!0):!1}redo(){return this._undoStack.length?(this.el.appendChild(this._undoStack.pop()),this._emitter.emit("changed"),!0):!1}canRedo(){return!!this._undoStack.length}canUndo(){var n;return!!((n=this.el)!=null&&n.lastElementChild)}eventMove(n){!this.acceptsInput(n)||!this.drawing||this.model._eventMove(n)&&(n.stopPropagation(),n.preventDefault(),this._emitter.emit("changed"))}eventStart(n){this.acceptsInput(n)&&(n.stopPropagation(),n.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._emitter.emit("start"),this._currentNode=this.model._eventDown(n),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(n){if(!this.acceptsInput(n)||!this.drawing)return;const s=this.model._eventUp(n);s?(s instanceof Element&&s!==this._currentNode&&(this._currentNode=s),this.commit()):this.cancel(),this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed")}acceptsInput(n){return!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(n.pointerType)}eventKeyboard(n){this.shiftPressed===n.shiftKey&&this.altPressed===n.altKey||(this.shiftPressed=n.shiftKey,this.altPressed=n.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(){this._undoStack.length=0;const n=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",n)}clear(){this._undoStack.length=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(n){this.clear(),this.el.innerHTML=n}};function k3(n){return new C3(n)}const br=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],Qn=Gn("slidev-drawing-enabled",!1),d4=Gn("slidev-drawing-pinned",!1),_3=z(!1),v3=z(!1),D3=z(!1),Io=z(!1),Js=QA(Gn("slidev-drawing-brush",{color:br[0],size:4,mode:"stylus"})),Bp=z("stylus"),ch=S(()=>$e.drawings.syncAll||gn.value);let So=!1;const Jt=S({get(){return Bp.value},set(n){Bp.value=n,n==="arrow"?(Js.mode="line",Js.arrowEnd=!0):(Js.mode=n,Js.arrowEnd=!1)}}),w3=He({brush:Js,acceptsInputTypes:S(()=>Qn.value&&(!$e.drawings.presenterOnly||gn.value)?void 0:["pen"]),coordinateTransform:!1}),fn=Hl(k3(w3));function x3(){fn.clear(),ch.value&&Ed(Ue.value,"")}function hi(){var n;v3.value=fn.canRedo(),_3.value=fn.canUndo(),D3.value=!!((n=fn.el)!=null&&n.children.length)}function I3(n){So=!0;const s=$l[n||Ue.value];s!=null?fn.load(s):fn.clear(),hi(),So=!1}fn.on("changed",()=>{if(hi(),!So){const n=fn.dump(),s=Ue.value;($l[s]||"")!==n&&ch.value&&Ed(s,fn.dump())}});WA(n=>{So=!0,n[Ue.value]!=null&&fn.load(n[Ue.value]||""),So=!1,hi()});sn(()=>{Be(Ue,()=>{fn.mounted&&I3()},{immediate:!0})});fn.on("start",()=>Io.value=!0);fn.on("end",()=>Io.value=!1);window.addEventListener("keydown",n=>{if(!Qn.value)return;const s=!n.ctrlKey&&!n.altKey&&!n.shiftKey&&!n.metaKey;let t=!0;n.code==="KeyZ"&&(n.ctrlKey||n.metaKey)?n.shiftKey?fn.redo():fn.undo():n.code==="Escape"?Qn.value=!1:n.code==="KeyL"&&s?Jt.value="line":n.code==="KeyA"&&s?Jt.value="arrow":n.code==="KeyS"&&s?Jt.value="stylus":n.code==="KeyR"&&s?Jt.value="rectangle":n.code==="KeyE"&&s?Jt.value="ellipse":n.code==="KeyC"&&s?x3():n.code.startsWith("Digit")&&s&&+n.code[5]<=br.length?Js.color=br[+n.code[5]-1]:t=!1,t&&(n.preventDefault(),n.stopPropagation())},!1);function Je(...n){return S(()=>n.every(s=>ln(s)))}function _n(n){return S(()=>!ln(n))}const Cp=j8(),xa=Gn("slidev-color-schema","auto"),Br=S(()=>$e.colorSchema!=="auto"),fi=S({get(){return Br.value?$e.colorSchema==="dark":xa.value==="auto"?Cp.value:xa.value==="dark"},set(n){Br.value||(xa.value=n===Cp.value?"auto":n?"dark":"light")}}),ph=Od(fi);Hn&&Be(fi,n=>{const s=document.querySelector("html");s.classList.toggle("dark",n),s.classList.toggle("light",!n)},{immediate:!0});const hl=z(1),fl=S(()=>Ze.length-1),In=z(0),yi=z(0);function S3(){In.value>hl.value&&(In.value-=1)}function E3(){In.value<fl.value&&(In.value+=1)}function $3(){if(In.value>hl.value){let n=In.value-yi.value;n<hl.value&&(n=hl.value),In.value=n}}function T3(){if(In.value<fl.value){let n=In.value+yi.value;n>fl.value&&(n=fl.value),In.value=n}}function F3(){const{escape:n,space:s,shift:t,left:o,right:l,up:r,down:i,enter:c,d:p,g:u,o:d}=th;let h=[{name:"next_space",key:Je(s,_n(t)),fn:Ts,autoRepeat:!0},{name:"prev_space",key:Je(s,t),fn:Fs,autoRepeat:!0},{name:"next_right",key:Je(l,_n(t),_n(un)),fn:Ts,autoRepeat:!0},{name:"prev_left",key:Je(o,_n(t),_n(un)),fn:Fs,autoRepeat:!0},{name:"next_page_key",key:"pageDown",fn:Ts,autoRepeat:!0},{name:"prev_page_key",key:"pageUp",fn:Fs,autoRepeat:!0},{name:"next_down",key:Je(i,_n(un)),fn:$o,autoRepeat:!0},{name:"prev_up",key:Je(r,_n(un)),fn:()=>To(!1),autoRepeat:!0},{name:"next_shift",key:Je(l,t),fn:$o,autoRepeat:!0},{name:"prev_shift",key:Je(o,t),fn:()=>To(!1),autoRepeat:!0},{name:"toggle_dark",key:Je(p,_n(Qn)),fn:ph},{name:"toggle_overview",key:Je(d,_n(Qn)),fn:lh},{name:"hide_overview",key:Je(n,_n(Qn)),fn:()=>un.value=!1},{name:"goto",key:Je(u,_n(Qn)),fn:()=>vt.value=!vt.value},{name:"next_overview",key:Je(l,un),fn:E3},{name:"prev_overview",key:Je(o,un),fn:S3},{name:"up_overview",key:Je(r,un),fn:$3},{name:"down_overview",key:Je(i,un),fn:T3},{name:"goto_from_overview",key:Je(c,un),fn:()=>{Pt(In.value),un.value=!1}}];const f=new Set(h.map(y=>y.name));if(h.filter(y=>y.name&&f.has(y.name)).length===0){const y=["========== WARNING ==========","defineShortcutsSetup did not return any of the base shortcuts.","See https://sli.dev/custom/config-shortcuts.html for migration.",'If it is intentional, return at least one shortcut with one of the base names (e.g. name:"goto").'].join(`

`);alert(y),console.warn(y)}return h}const uh=Je(_n(UB),_n(zB),GB);function O3(n,s,t=!1){typeof n=="string"&&(n=th[n]);const o=Je(n,uh);let l=0,r;const i=()=>{if(clearTimeout(r),!o.value){l=0;return}t&&(r=setTimeout(i,Math.max(1e3-l*250,150)),l++),s()};return Be(o,i,{flush:"sync"})}function M3(n,s){return v8(n,t=>{uh.value&&(t.repeat||s())})}function P3(){const n=F3();new Map(n.map(t=>[t.key,t])).forEach(t=>{t.fn&&O3(t.key,t.fn,t.autoRepeat)}),M3("f",()=>oh.toggle())}const R3={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},L3=e("path",{fill:"currentColor",d:"M24 9.4L22.6 8L16 14.6L9.4 8L8 9.4l6.6 6.6L8 22.6L9.4 24l6.6-6.6l6.6 6.6l1.4-1.4l-6.6-6.6L24 9.4z"},null,-1),N3=[L3];function W3(n,s){return D(),ne("svg",R3,N3)}const q3={name:"carbon-close",render:W3};function mi(n,s=""){var l,r;const t=["slidev-page",s],o=(r=(l=n==null?void 0:n.meta)==null?void 0:l.slide)==null?void 0:r.no;return o!=null&&t.push(`slidev-page-${o}`),t.filter(Boolean).join(" ")}const j3=Re({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},scale:{type:[Number,String]}},setup(n){const s=n;N(Y);const t=z(),o=nb(t),l=S(()=>s.width?s.width:o.width.value),r=S(()=>s.width?s.width/Ss:o.height.value);s.width&&ut(()=>{t.value&&(t.value.style.width=`${l.value}px`,t.value.style.height=`${r.value}px`)});const i=S(()=>l.value/r.value),c=S(()=>s.scale&&!Mt.value?s.scale:i.value<Ss?l.value/Es:r.value*Ss/Es),p=S(()=>({height:`${ii}px`,width:`${Es}px`,transform:`translate(-50%, -50%) scale(${c.value})`})),u=S(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return Dn(Id,c),(d,h)=>(D(),ne("div",{id:"slide-container",ref_key:"root",ref:t,class:ze(v(u))},[e("div",{id:"slide-content",style:tn(v(p))},[hs(d.$slots,"default")],4),hs(d.$slots,"controls")],2))}});const J=(n,s)=>{const t=n.__vccOpts||n;for(const[o,l]of s)t[o]=l;return t},dh=J(j3,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/SlideContainer.vue"]]),gi=Re({name:"SlideWrapper",props:{clicks:{type:[Number,String],default:0},clicksElements:{type:Array,default:()=>[]},clicksOrderMap:{type:Map,default:()=>new Map},clicksDisabled:{type:Boolean,default:!1},context:{type:String,default:"main"},is:{type:Object,default:void 0},route:{type:Object,default:void 0}},setup(n,{emit:s}){const t=Jn(n,"clicks",s),o=Jn(n,"clicksElements",s),l=Jn(n,"clicksDisabled",s),r=Jn(n,"clicksOrderMap",s);o.value.length=0,Dn(DA,n.route),Dn(wA,n.context),Dn(ao,t),Dn(ro,l),Dn(zs,o),Dn(or,r)},render(){var n,s;return this.$props.is?xn(this.$props.is):(s=(n=this.$slots)==null?void 0:n.default)==null?void 0:s.call(n)}}),V3=["innerHTML"],H3=Re({__name:"DrawingPreview",props:{page:{type:Number,required:!0}},setup(n){return N(Y),(s,t)=>v($l)[n.page]?(D(),ne("svg",{key:0,ref:"svg",class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:v($l)[n.page]},null,8,V3)):De("v-if",!0)}}),hh=J(H3,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/DrawingPreview.vue"]]),G3=Object.freeze(Object.defineProperty({__proto__:null,default:hh},Symbol.toStringTag,{value:"Module"})),K3={class:"slides-overview bg-main !bg-opacity-75 p-16 overflow-y-auto"},U3=["onClick"],z3=Re({__name:"SlidesOverview",props:{modelValue:{type:Boolean,required:!0}},emits:[],setup(n,{emit:s}){const t=n;N(Y);const o=Jn(t,"modelValue",s);function l(){o.value=!1}function r(m){Pt(m),l()}function i(m){return m===In.value}const c=mr.smaller("xs"),p=mr.smaller("sm"),u=4*16*2,d=2*16,h=S(()=>c.value?lt.width.value-u:p.value?(lt.width.value-u-d)/2:300),f=S(()=>Math.floor((lt.width.value-u)/(h.value+d)));return ut(()=>{In.value=Ue.value,yi.value=f.value}),(m,y)=>{const A=q3;return D(),ne(Oe,null,[ei(e("div",K3,[e("div",{class:"grid gap-y-4 gap-x-8 w-full",style:tn(`grid-template-columns: repeat(auto-fit,minmax(${v(h)}px,1fr))`)},[(D(!0),ne(Oe,null,qo(v(Ze).slice(0,-1),(b,_)=>(D(),ne("div",{key:b.path,class:"relative"},[e("div",{class:ze(["inline-block border rounded border-opacity-50 overflow-hidden bg-main hover:border-$slidev-theme-primary",{"border-$slidev-theme-primary":i(_+1),"border-gray-400":!i(_+1)}]),style:tn(v(ci)),onClick:C=>r(+b.path)},[(D(),G(dh,{key:b.path,width:v(h),"clicks-disabled":!0,class:"pointer-events-none"},{default:T(()=>[M(v(gi),{is:b==null?void 0:b.component,"clicks-disabled":!0,class:ze(v(mi)(b)),route:b,context:"overview"},null,8,["is","class","route"]),M(hh,{page:+b.path},null,8,["page"])]),_:2},1032,["width"]))],14,U3),e("div",{class:"absolute top-0 opacity-50",style:tn(`left: ${v(h)+5}px`)},at(_+1),5)]))),128))],4)],512),[[Ad,v(o)]]),v(o)?(D(),ne("button",{key:0,class:"fixed text-2xl top-4 right-4 slidev-icon-btn text-gray-400",onClick:l},[M(A)])):De("v-if",!0)],64)}}});const Y3=J(z3,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/SlidesOverview.vue"]]),Z3="/api-with-behat-formation/assets/logo-b72bde5d.png",J3={key:0,class:"fixed top-0 bottom-0 left-0 right-0 grid z-20"},Q3=Re({__name:"Modal",props:{modelValue:{default:!1},class:{default:""}},emits:["modelValue"],setup(n,{emit:s}){const t=n;N(Y);const o=Jn(t,"modelValue",s);function l(){o.value=!1}return(r,i)=>(D(),G(Vu,null,[v(o)?(D(),ne("div",J3,[e("div",{bg:"black opacity-80",class:"absolute top-0 bottom-0 left-0 right-0 -z-1",onClick:i[0]||(i[0]=c=>l())}),e("div",{class:ze(["m-auto rounded-md bg-main shadow",t.class]),"dark:border":"~ gray-400 opacity-10"},[hs(r.$slots,"default")],2)])):De("v-if",!0)],1024))}}),X3=J(Q3,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/Modal.vue"]]),e5={class:"slidev-info-dialog slidev-layout flex flex-col gap-4 text-base"},n5=["innerHTML"],s5=e("a",{href:"https://github.com/slidevjs/slidev",target:"_blank",class:"!opacity-100 !border-none !text-current"},[e("div",{class:"flex gap-1 children:my-auto"},[e("div",{class:"opacity-50 text-sm mr-2"},"Powered by"),e("img",{class:"w-5 h-5",src:Z3,alt:"Slidev"}),e("div",{style:{color:"#2082A6"}},[e("b",null,"Sli"),a("dev ")])])],-1),t5=Re({__name:"InfoDialog",props:{modelValue:{default:!1}},emits:["modelValue"],setup(n,{emit:s}){const t=n;N(Y);const o=Jn(t,"modelValue",s),l=S(()=>typeof $e.info=="string");return(r,i)=>(D(),G(X3,{modelValue:v(o),"onUpdate:modelValue":i[0]||(i[0]=c=>Te(o)?o.value=c:null),class:"px-6 py-4"},{default:T(()=>[e("div",e5,[v(l)?(D(),ne("div",{key:0,class:"mb-4",innerHTML:v($e).info},null,8,n5)):De("v-if",!0),s5])]),_:1},8,["modelValue"]))}});const o5=J(t5,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/InfoDialog.vue"]]),l5=["disabled","onKeydown"],a5=Re({__name:"Goto",setup(n){N(Y);const s=z(),t=z(""),o=S(()=>{if(t.value.startsWith("/"))return!!Ze.find(i=>i.path===t.value.substring(1));{const i=+t.value;return!isNaN(i)&&i>0&&i<=xh.value}});function l(){o.value&&(t.value.startsWith("/")?Pt(t.value.substring(1)):Pt(+t.value)),r()}function r(){vt.value=!1}return Be(vt,async i=>{var c,p;i?(await sn(),t.value="",(c=s.value)==null||c.focus()):(p=s.value)==null||p.blur()}),Be(t,i=>{i.match(/^[^0-9/]/)&&(t.value=t.value.substring(1))}),(i,c)=>(D(),ne("div",{id:"slidev-goto-dialog",class:ze(["fixed right-5 bg-main transform transition-all",v(vt)?"top-5":"-top-20"]),shadow:"~",p:"x-4 y-2",border:"~ transparent rounded dark:gray-400 dark:opacity-25"},[ei(e("input",{ref_key:"input",ref:s,"onUpdate:modelValue":c[0]||(c[0]=p=>t.value=p),type:"text",disabled:!v(vt),class:ze(["outline-none bg-transparent",{"text-red-400":!v(o)&&t.value}]),placeholder:"Goto...",onKeydown:[Cc(l,["enter"]),Cc(r,["escape"])],onBlur:r},null,42,l5),[[Eg,t.value]])],2))}}),r5=J(a5,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/Goto.vue"]]),i5=Re({__name:"Controls",setup(n){N(Y);const s=es(),t=es();return(o,l)=>(D(),ne(Oe,null,[M(Y3,{modelValue:v(un),"onUpdate:modelValue":l[0]||(l[0]=r=>Te(un)?un.value=r:null)},null,8,["modelValue"]),M(r5),v(s)?(D(),G(v(s),{key:0})):De("v-if",!0),v(t)?(D(),G(v(t),{key:1,modelValue:v(Da),"onUpdate:modelValue":l[1]||(l[1]=r=>Te(Da)?Da.value=r:null)},null,8,["modelValue"])):De("v-if",!0),v($e).info?(D(),G(o5,{key:2,modelValue:v(po),"onUpdate:modelValue":l[2]||(l[2]=r=>Te(po)?po.value=r:null)},null,8,["modelValue"])):De("v-if",!0)],64))}}),c5=J(i5,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/Controls.vue"]]),p5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},u5=e("path",{fill:"currentColor",d:"M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30V8zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3zM2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3z"},null,-1),d5=[u5];function h5(n,s){return D(),ne("svg",p5,d5)}const f5={name:"carbon-settings-adjust",render:h5},y5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},m5=e("path",{fill:"currentColor",d:"M17 22v-8h-4v2h2v6h-3v2h8v-2h-3zM16 8a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 8z"},null,-1),g5=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),A5=[m5,g5];function b5(n,s){return D(),ne("svg",y5,A5)}const B5={name:"carbon-information",render:b5},C5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},k5=e("path",{fill:"currentColor",d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10l10-10z"},null,-1),_5=[k5];function v5(n,s){return D(),ne("svg",C5,_5)}const D5={name:"carbon-download",render:v5},w5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},x5=e("path",{fill:"currentColor",d:"M29.415 19L27.7 17.285A2.97 2.97 0 0 0 28 16a3 3 0 1 0-3 3a2.97 2.97 0 0 0 1.286-.3L28 20.414V28h-6v-3a7.008 7.008 0 0 0-7-7H9a7.008 7.008 0 0 0-7 7v5h28v-9.586A1.988 1.988 0 0 0 29.415 19ZM4 25a5.006 5.006 0 0 1 5-5h6a5.006 5.006 0 0 1 5 5v3H4Z"},null,-1),I5=e("path",{fill:"currentColor",d:"M12 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7Z"},null,-1),S5=[x5,I5];function E5(n,s){return D(),ne("svg",w5,S5)}const $5={name:"carbon-user-speaker",render:E5},T5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},F5=e("path",{fill:"currentColor",d:"M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"},null,-1),O5=e("path",{fill:"currentColor",d:"M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 16H7V6h18Z"},null,-1),M5=[F5,O5];function P5(n,s){return D(),ne("svg",T5,M5)}const R5={name:"carbon-presentation-file",render:P5},L5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},N5=e("path",{fill:"currentColor",d:"M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"},null,-1),W5=[N5];function q5(n,s){return D(),ne("svg",L5,W5)}const j5={name:"carbon-pen",render:q5},V5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},H5=e("path",{fill:"currentColor",d:"m38.2 48.5l58.2 155.2a8 8 0 0 0 15-.1l23.3-64.1a8.1 8.1 0 0 1 4.8-4.8l64.1-23.3a8 8 0 0 0 .1-15L48.5 38.2a8 8 0 0 0-10.3 10.3Z",opacity:".2"},null,-1),G5=e("path",{fill:"currentColor",d:"m150.5 139.2l55.9-20.3a16 16 0 0 0 .1-30L51.3 30.7a16 16 0 0 0-20.6 20.6l58.2 155.2a15.9 15.9 0 0 0 15 10.4h.1a15.9 15.9 0 0 0 14.9-10.5l20.3-55.9l63.1 63.2a8.5 8.5 0 0 0 5.7 2.3a8.3 8.3 0 0 0 5.7-2.3a8.1 8.1 0 0 0 0-11.4Zm-46.6 61.7L45.7 45.7l155.2 58.2l-64.1 23.3a15.7 15.7 0 0 0-9.6 9.6Z"},null,-1),K5=[H5,G5];function U5(n,s){return D(),ne("svg",V5,K5)}const z5={name:"ph-cursor-duotone",render:U5},Y5={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},Z5=e("path",{fill:"currentColor",d:"M213.7 202.3a8.1 8.1 0 0 1 0 11.4a8.3 8.3 0 0 1-5.7 2.3a8.5 8.5 0 0 1-5.7-2.3l-63.1-63.2l-20.3 55.9a15.9 15.9 0 0 1-14.9 10.5h-.1a15.9 15.9 0 0 1-15-10.4L30.7 51.3a16 16 0 0 1 20.6-20.6l155.2 58.2a16 16 0 0 1-.1 30l-55.9 20.3Z"},null,-1),J5=[Z5];function Q5(n,s){return D(),ne("svg",Y5,J5)}const fh={name:"ph-cursor-fill",render:Q5},X5={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},eC=e("path",{fill:"currentColor",d:"M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"},null,-1),nC=[eC];function sC(n,s){return D(),ne("svg",X5,nC)}const tC={name:"carbon-sun",render:sC},oC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},lC=e("path",{fill:"currentColor",d:"M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"},null,-1),aC=[lC];function rC(n,s){return D(),ne("svg",oC,aC)}const iC={name:"carbon-moon",render:rC},cC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},pC=e("path",{fill:"currentColor",d:"M8 4v4H4V4Zm2-2H2v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8Zm8 2v4h-4V4Zm2-2h-8v8h8ZM8 14v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8ZM8 24v4H4v-4Zm2-2H2v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Zm8 2v4h-4v-4Zm2-2h-8v8h8Z"},null,-1),uC=[pC];function dC(n,s){return D(),ne("svg",cC,uC)}const hC={name:"carbon-apps",render:dC},fC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},yC=e("path",{fill:"currentColor",d:"m18 6l-1.43 1.393L24.15 15H4v2h20.15l-7.58 7.573L18 26l10-10L18 6z"},null,-1),mC=[yC];function gC(n,s){return D(),ne("svg",fC,mC)}const AC={name:"carbon-arrow-right",render:gC},bC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},BC=e("path",{fill:"currentColor",d:"m14 26l1.41-1.41L7.83 17H28v-2H7.83l7.58-7.59L14 6L4 16l10 10z"},null,-1),CC=[BC];function kC(n,s){return D(),ne("svg",bC,CC)}const _C={name:"carbon-arrow-left",render:kC},vC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},DC=e("path",{fill:"currentColor",d:"M20 2v2h6.586L18 12.582L19.414 14L28 5.414V12h2V2H20zm-6 17.416L12.592 18L4 26.586V20H2v10h10v-2H5.414L14 19.416z"},null,-1),wC=[DC];function xC(n,s){return D(),ne("svg",vC,wC)}const IC={name:"carbon-maximize",render:xC},SC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},EC=e("path",{fill:"currentColor",d:"M4 18v2h6.586L2 28.582L3.414 30L12 21.414V28h2V18H4zM30 3.416L28.592 2L20 10.586V4h-2v10h10v-2h-6.586L30 3.416z"},null,-1),$C=[EC];function TC(n,s){return D(),ne("svg",SC,$C)}const FC={name:"carbon-minimize",render:TC},OC={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},MC=e("path",{fill:"currentColor",d:"m13 24l-9-9l1.414-1.414L13 21.171L26.586 7.586L28 9L13 24z"},null,-1),PC=[MC];function RC(n,s){return D(),ne("svg",OC,PC)}const LC={name:"carbon-checkmark",render:RC},NC={class:"select-list"},WC={class:"title"},qC={class:"items"},jC=["onClick"],VC=Re({__name:"SelectList",props:{modelValue:{type:[Object,String,Number]},title:{type:String},items:{type:Array}},setup(n,{emit:s}){const t=n;N(Y);const o=Jn(t,"modelValue",s,{passive:!0});return(l,r)=>{const i=LC;return D(),ne("div",NC,[e("div",WC,at(n.title),1),e("div",qC,[(D(!0),ne(Oe,null,qo(n.items,c=>(D(),ne("div",{key:c.value,class:ze(["item",{active:v(o)===c.value}]),onClick:()=>{var p;o.value=c.value,(p=c.onClick)==null||p.call(c)}},[M(i,{class:ze(["text-green-500",{"opacity-0":v(o)!==c.value}])},null,8,["class"]),a(" "+at(c.display||c.value),1)],10,jC))),128))])])}}});const HC=J(VC,[["__scopeId","data-v-3f89fa11"],["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/SelectList.vue"]]),GC={class:"text-sm"},KC=Re({__name:"Settings",setup(n){N(Y);const s=[{display:"Fit",value:0},{display:"1:1",value:1}];return(t,o)=>(D(),ne("div",GC,[M(HC,{modelValue:v(dl),"onUpdate:modelValue":o[0]||(o[0]=l=>Te(dl)?dl.value=l:null),title:"Scale",items:s},null,8,["modelValue"])]))}}),UC=J(KC,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/Settings.vue"]]),zC={key:0,class:"rounded-md bg-main shadow absolute bottom-10 left-0 z-20","dark:border":"~ gray-400 opacity-10"},YC=Re({__name:"MenuButton",props:{modelValue:{default:!1},disabled:{default:!1}},setup(n,{emit:s}){const t=n;N(Y);const o=Jn(t,"modelValue",s,{passive:!0}),l=z();return k8(l,()=>{o.value=!1}),(r,i)=>(D(),ne("div",{ref_key:"el",ref:l,class:"flex relative"},[e("button",{class:ze({disabled:n.disabled}),onClick:i[0]||(i[0]=c=>o.value=!v(o))},[hs(r.$slots,"button",{class:ze({disabled:n.disabled})})],2),(D(),G(Vu,null,[v(o)?(D(),ne("div",zC,[hs(r.$slots,"menu")])):De("v-if",!0)],1024))],512))}}),ZC=J(YC,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/MenuButton.vue"]]),JC={class:"w-1px opacity-10 bg-current m-1 lg:m-2"},QC={__name:"VerticalDivider",setup(n){return N(Y),(s,t)=>(D(),ne("div",JC))}},ol=J(QC,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/VerticalDivider.vue"]]),XC={render(){return[]}},ek={class:"slidev-icon-btn"},nk={class:"h-40px flex",p:"l-1 t-0.5 r-2",text:"sm leading-2"},sk={class:"my-auto"},tk={class:"opacity-50"},ok=Re({__name:"NavControls",props:{persist:{default:!1}},setup(n){const s=n;N(Y);const t=mr.smaller("md"),{isFullscreen:o,toggle:l}=oh,r=S(()=>kr.value?`?password=${kr.value}`:""),i=S(()=>`/presenter/${Ue.value}${r.value}`),c=S(()=>`/${Ue.value}${r.value}`),p=z(),u=()=>{p.value&&Et.value&&p.value.contains(Et.value)&&Et.value.blur()},d=S(()=>s.persist?"text-$slidev-controls-foreground bg-transparent":"rounded-md bg-main shadow dark:border dark:border-gray-400 dark:border-opacity-10"),h=es(),f=es();return $s(()=>import("./DrawingControls-93729927.js"),[]).then(m=>f.value=m.default),(m,y)=>{const A=FC,b=IC,_=_C,C=AC,k=hC,w=iC,$=tC,R=fh,H=z5,E=j5,j=R5,ee=Dl("RouterLink"),he=$5,Z=D5,_e=B5,Fe=f5;return D(),ne("nav",{ref_key:"root",ref:p,class:"flex flex-col"},[e("div",{class:ze(["flex flex-wrap-reverse text-xl gap-0.5 p-1 lg:gap-1 lg:p-2",v(d)]),onMouseleave:u},[v(as)?De("v-if",!0):(D(),ne("button",{key:0,class:"slidev-icon-btn",onClick:y[0]||(y[0]=(...Se)=>v(l)&&v(l)(...Se))},[v(o)?(D(),G(A,{key:0})):(D(),G(b,{key:1}))])),e("button",{class:ze(["slidev-icon-btn",{disabled:!v(I7)}]),onClick:y[1]||(y[1]=(...Se)=>v(Fs)&&v(Fs)(...Se))},[M(_)],2),e("button",{class:ze(["slidev-icon-btn",{disabled:!v(x7)}]),title:"Next",onClick:y[2]||(y[2]=(...Se)=>v(Ts)&&v(Ts)(...Se))},[M(C)],2),v(as)?De("v-if",!0):(D(),ne("button",{key:1,class:"slidev-icon-btn",title:"Slides overview",onClick:y[3]||(y[3]=Se=>v(lh)())},[M(k)])),v(Br)?De("v-if",!0):(D(),ne("button",{key:2,class:"slidev-icon-btn",title:"Toggle dark mode",onClick:y[4]||(y[4]=Se=>v(ph)())},[v(fi)?(D(),G(w,{key:0})):(D(),G($,{key:1}))])),M(ol),v(as)?De("v-if",!0):(D(),ne(Oe,{key:3},[!v(gn)&&!v(t)&&v(h)?(D(),ne(Oe,{key:0},[M(v(h)),M(ol)],64)):De("v-if",!0),v(gn)?(D(),ne("button",{key:1,class:"slidev-icon-btn",title:"Show presenter cursor",onClick:y[5]||(y[5]=Se=>wa.value=!v(wa))},[v(wa)?(D(),G(R,{key:0})):(D(),G(H,{key:1,class:"opacity-50"}))])):De("v-if",!0)],64)),(!v($e).drawings.presenterOnly||v(gn))&&!v(as)?(D(),ne(Oe,{key:4},[e("button",{class:"slidev-icon-btn relative",title:"Drawing",onClick:y[6]||(y[6]=Se=>Qn.value=!v(Qn))},[M(E),v(Qn)?(D(),ne("div",{key:0,class:"absolute left-1 right-1 bottom-0 h-0.7 rounded-full",style:tn({background:v(Js).color})},null,4)):De("v-if",!0)]),M(ol)],64)):De("v-if",!0),v(as)?De("v-if",!0):(D(),ne(Oe,{key:5},[v(gn)?(D(),G(ee,{key:0,to:v(c),class:"slidev-icon-btn",title:"Play Mode"},{default:T(()=>[M(j)]),_:1},8,["to"])):De("v-if",!0),v(_7)?(D(),G(ee,{key:1,to:v(i),class:"slidev-icon-btn",title:"Presenter Mode"},{default:T(()=>[M(he)]),_:1},8,["to"])):De("v-if",!0),De("v-if",!0)],64)),(D(),ne(Oe,{key:6},[v($e).download?(D(),ne("button",{key:0,class:"slidev-icon-btn",onClick:y[8]||(y[8]=(...Se)=>v(_r)&&v(_r)(...Se))},[M(Z)])):De("v-if",!0)],64)),!v(gn)&&v($e).info&&!v(as)?(D(),ne("button",{key:7,class:"slidev-icon-btn",onClick:y[9]||(y[9]=Se=>po.value=!v(po))},[M(_e)])):De("v-if",!0),!v(gn)&&!v(as)?(D(),G(ZC,{key:8},{button:T(()=>[e("button",ek,[M(Fe)])]),menu:T(()=>[M(UC)]),_:1})):De("v-if",!0),v(as)?De("v-if",!0):(D(),G(ol,{key:9})),e("div",nk,[e("div",sk,[a(at(v(Ue))+" ",1),e("span",tk,"/ "+at(v(xh)),1)])]),M(v(XC))],34)],512)}}}),lk=J(ok,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/NavControls.vue"]]),yh={render(){return[]}},mh={render(){return[]}},ak={key:0,class:"absolute top-0 left-0 right-0 bottom-0 pointer-events-none text-xl"},rk=Re({__name:"PresenterMouse",setup(n){return N(Y),(s,t)=>{const o=fh;return v(Ca).cursor?(D(),ne("div",ak,[M(o,{class:"absolute",style:tn({left:`${v(Ca).cursor.x}%`,top:`${v(Ca).cursor.y}%`})},null,8,["style"])])):De("v-if",!0)}}}),ik=J(rk,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/PresenterMouse.vue"]]),ck=Re({__name:"SlidesShow",props:{context:{type:String,required:!0}},setup(n){N(Y),Be(dn,()=>{var o,l;(o=dn.value)!=null&&o.meta&&dn.value.meta.preload!==!1&&(dn.value.meta.__preloaded=!0),(l=Ia.value)!=null&&l.meta&&Ia.value.meta.preload!==!1&&(Ia.value.meta.__preloaded=!0)},{immediate:!0});const s=es();$s(()=>import("./DrawingLayer-e9343cf9.js"),[]).then(o=>s.value=o.default);const t=S(()=>Ze.filter(o=>{var l;return((l=o.meta)==null?void 0:l.__preloaded)||o===dn.value}));return(o,l)=>(D(),ne(Oe,null,[De(" Global Bottom "),M(v(mh)),De(" Slides "),M(vg,re(v($7),{id:"slideshow",tag:"div"}),{default:T(()=>[(D(!0),ne(Oe,null,qo(v(t),r=>{var i;return ei((D(),G(v(gi),{key:r.path,is:r==null?void 0:r.component,clicks:r===v(dn)?v(On):0,"clicks-elements":((i=r.meta)==null?void 0:i.__clicksElements)||[],"clicks-disabled":!1,class:ze(v(mi)(r)),route:r,context:n.context},null,8,["is","clicks","clicks-elements","class","route","context"])),[[Ad,r===v(dn)]])}),128))]),_:1},16),De(" Global Top "),M(v(yh)),v(s)?(D(),G(v(s),{key:0})):De("v-if",!0),v(gn)?De("v-if",!0):(D(),G(ik,{key:1}))],64))}});const pk=J(ck,[["__scopeId","data-v-afb4231e"],["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/SlidesShow.vue"]]),uk=Re({__name:"PrintStyle",setup(n){N(Y);function s(t,{slots:o}){if(o.default)return xn("style",o.default())}return(t,o)=>(D(),G(s,null,{default:T(()=>[a(" @page { size: "+at(v(Es))+"px "+at(v(ii))+"px; margin: 0px; } ",1)]),_:1}))}}),gh=J(uk,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/PrintStyle.vue"]]),dk=Re({__name:"Play",setup(n){N(Y),P3();const s=z();function t(r){var i;up.value||((i=r.target)==null?void 0:i.id)==="slide-container"&&(r.screenX/window.innerWidth>.6?Ts():Fs())}T7(s);const o=S(()=>KB.value||up.value);es();const l=es();return $s(()=>import("./DrawingControls-93729927.js"),[]).then(r=>l.value=r.default),(r,i)=>(D(),ne(Oe,null,[v(Mt)?(D(),G(gh,{key:0})):De("v-if",!0),e("div",{id:"page-root",ref_key:"root",ref:s,class:"grid grid-cols-[1fr_max-content]",style:tn(v(ci))},[M(dh,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:v(Mt)?v(lt).width.value:void 0,scale:v(dl),onPointerdown:t},{default:T(()=>[M(pk,{context:"slide"})]),controls:T(()=>[e("div",{class:ze(["absolute bottom-0 left-0 transition duration-300 opacity-0 hover:opacity-100",[v(o)?"opacity-100 right-0":"opacity-0 p-2",v(Io)?"pointer-events-none":""]])},[M(lk,{class:"m-auto",persist:v(o)},null,8,["persist"])],2),!v($e).drawings.presenterOnly&&!v(as)&&v(l)?(D(),G(v(l),{key:0,class:"ml-0"})):De("v-if",!0)]),_:1},8,["style","width","scale"]),De("v-if",!0)],4),M(c5)],64))}}),hk=J(dk,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/Play.vue"]]);/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */function Ah(n){return typeof n>"u"||n===null}function fk(n){return typeof n=="object"&&n!==null}function yk(n){return Array.isArray(n)?n:Ah(n)?[]:[n]}function mk(n,s){var t,o,l,r;if(s)for(r=Object.keys(s),t=0,o=r.length;t<o;t+=1)l=r[t],n[l]=s[l];return n}function gk(n,s){var t="",o;for(o=0;o<s;o+=1)t+=n;return t}function Ak(n){return n===0&&Number.NEGATIVE_INFINITY===1/n}var bk=Ah,Bk=fk,Ck=yk,kk=gk,_k=Ak,vk=mk,Ai={isNothing:bk,isObject:Bk,toArray:Ck,repeat:kk,isNegativeZero:_k,extend:vk};function bh(n,s){var t="",o=n.reason||"(unknown reason)";return n.mark?(n.mark.name&&(t+='in "'+n.mark.name+'" '),t+="("+(n.mark.line+1)+":"+(n.mark.column+1)+")",!s&&n.mark.snippet&&(t+=`

`+n.mark.snippet),o+" "+t):o}function Eo(n,s){Error.call(this),this.name="YAMLException",this.reason=n,this.mark=s,this.message=bh(this,!1),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack||""}Eo.prototype=Object.create(Error.prototype);Eo.prototype.constructor=Eo;Eo.prototype.toString=function(s){return this.name+": "+bh(this,s)};var Ys=Eo,Dk=["kind","multi","resolve","construct","instanceOf","predicate","represent","representName","defaultStyle","styleAliases"],wk=["scalar","sequence","mapping"];function xk(n){var s={};return n!==null&&Object.keys(n).forEach(function(t){n[t].forEach(function(o){s[String(o)]=t})}),s}function Ik(n,s){if(s=s||{},Object.keys(s).forEach(function(t){if(Dk.indexOf(t)===-1)throw new Ys('Unknown option "'+t+'" is met in definition of "'+n+'" YAML type.')}),this.options=s,this.tag=n,this.kind=s.kind||null,this.resolve=s.resolve||function(){return!0},this.construct=s.construct||function(t){return t},this.instanceOf=s.instanceOf||null,this.predicate=s.predicate||null,this.represent=s.represent||null,this.representName=s.representName||null,this.defaultStyle=s.defaultStyle||null,this.multi=s.multi||!1,this.styleAliases=xk(s.styleAliases||null),wk.indexOf(this.kind)===-1)throw new Ys('Unknown kind "'+this.kind+'" is specified for "'+n+'" YAML type.')}var rn=Ik;function kp(n,s){var t=[];return n[s].forEach(function(o){var l=t.length;t.forEach(function(r,i){r.tag===o.tag&&r.kind===o.kind&&r.multi===o.multi&&(l=i)}),t[l]=o}),t}function Sk(){var n={scalar:{},sequence:{},mapping:{},fallback:{},multi:{scalar:[],sequence:[],mapping:[],fallback:[]}},s,t;function o(l){l.multi?(n.multi[l.kind].push(l),n.multi.fallback.push(l)):n[l.kind][l.tag]=n.fallback[l.tag]=l}for(s=0,t=arguments.length;s<t;s+=1)arguments[s].forEach(o);return n}function Cr(n){return this.extend(n)}Cr.prototype.extend=function(s){var t=[],o=[];if(s instanceof rn)o.push(s);else if(Array.isArray(s))o=o.concat(s);else if(s&&(Array.isArray(s.implicit)||Array.isArray(s.explicit)))s.implicit&&(t=t.concat(s.implicit)),s.explicit&&(o=o.concat(s.explicit));else throw new Ys("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");t.forEach(function(r){if(!(r instanceof rn))throw new Ys("Specified list of YAML types (or a single Type object) contains a non-Type object.");if(r.loadKind&&r.loadKind!=="scalar")throw new Ys("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");if(r.multi)throw new Ys("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.")}),o.forEach(function(r){if(!(r instanceof rn))throw new Ys("Specified list of YAML types (or a single Type object) contains a non-Type object.")});var l=Object.create(Cr.prototype);return l.implicit=(this.implicit||[]).concat(t),l.explicit=(this.explicit||[]).concat(o),l.compiledImplicit=kp(l,"implicit"),l.compiledExplicit=kp(l,"explicit"),l.compiledTypeMap=Sk(l.compiledImplicit,l.compiledExplicit),l};var Ek=Cr,$k=new rn("tag:yaml.org,2002:str",{kind:"scalar",construct:function(n){return n!==null?n:""}}),Tk=new rn("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(n){return n!==null?n:[]}}),Fk=new rn("tag:yaml.org,2002:map",{kind:"mapping",construct:function(n){return n!==null?n:{}}}),Ok=new Ek({explicit:[$k,Tk,Fk]});function Mk(n){if(n===null)return!0;var s=n.length;return s===1&&n==="~"||s===4&&(n==="null"||n==="Null"||n==="NULL")}function Pk(){return null}function Rk(n){return n===null}var Lk=new rn("tag:yaml.org,2002:null",{kind:"scalar",resolve:Mk,construct:Pk,predicate:Rk,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"},empty:function(){return""}},defaultStyle:"lowercase"});function Nk(n){if(n===null)return!1;var s=n.length;return s===4&&(n==="true"||n==="True"||n==="TRUE")||s===5&&(n==="false"||n==="False"||n==="FALSE")}function Wk(n){return n==="true"||n==="True"||n==="TRUE"}function qk(n){return Object.prototype.toString.call(n)==="[object Boolean]"}var jk=new rn("tag:yaml.org,2002:bool",{kind:"scalar",resolve:Nk,construct:Wk,predicate:qk,represent:{lowercase:function(n){return n?"true":"false"},uppercase:function(n){return n?"TRUE":"FALSE"},camelcase:function(n){return n?"True":"False"}},defaultStyle:"lowercase"});function Vk(n){return 48<=n&&n<=57||65<=n&&n<=70||97<=n&&n<=102}function Hk(n){return 48<=n&&n<=55}function Gk(n){return 48<=n&&n<=57}function Kk(n){if(n===null)return!1;var s=n.length,t=0,o=!1,l;if(!s)return!1;if(l=n[t],(l==="-"||l==="+")&&(l=n[++t]),l==="0"){if(t+1===s)return!0;if(l=n[++t],l==="b"){for(t++;t<s;t++)if(l=n[t],l!=="_"){if(l!=="0"&&l!=="1")return!1;o=!0}return o&&l!=="_"}if(l==="x"){for(t++;t<s;t++)if(l=n[t],l!=="_"){if(!Vk(n.charCodeAt(t)))return!1;o=!0}return o&&l!=="_"}if(l==="o"){for(t++;t<s;t++)if(l=n[t],l!=="_"){if(!Hk(n.charCodeAt(t)))return!1;o=!0}return o&&l!=="_"}}if(l==="_")return!1;for(;t<s;t++)if(l=n[t],l!=="_"){if(!Gk(n.charCodeAt(t)))return!1;o=!0}return!(!o||l==="_")}function Uk(n){var s=n,t=1,o;if(s.indexOf("_")!==-1&&(s=s.replace(/_/g,"")),o=s[0],(o==="-"||o==="+")&&(o==="-"&&(t=-1),s=s.slice(1),o=s[0]),s==="0")return 0;if(o==="0"){if(s[1]==="b")return t*parseInt(s.slice(2),2);if(s[1]==="x")return t*parseInt(s.slice(2),16);if(s[1]==="o")return t*parseInt(s.slice(2),8)}return t*parseInt(s,10)}function zk(n){return Object.prototype.toString.call(n)==="[object Number]"&&n%1===0&&!Ai.isNegativeZero(n)}var Yk=new rn("tag:yaml.org,2002:int",{kind:"scalar",resolve:Kk,construct:Uk,predicate:zk,represent:{binary:function(n){return n>=0?"0b"+n.toString(2):"-0b"+n.toString(2).slice(1)},octal:function(n){return n>=0?"0o"+n.toString(8):"-0o"+n.toString(8).slice(1)},decimal:function(n){return n.toString(10)},hexadecimal:function(n){return n>=0?"0x"+n.toString(16).toUpperCase():"-0x"+n.toString(16).toUpperCase().slice(1)}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}}),Zk=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");function Jk(n){return!(n===null||!Zk.test(n)||n[n.length-1]==="_")}function Qk(n){var s,t;return s=n.replace(/_/g,"").toLowerCase(),t=s[0]==="-"?-1:1,"+-".indexOf(s[0])>=0&&(s=s.slice(1)),s===".inf"?t===1?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:s===".nan"?NaN:t*parseFloat(s,10)}var Xk=/^[-+]?[0-9]+e/;function e_(n,s){var t;if(isNaN(n))switch(s){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===n)switch(s){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===n)switch(s){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(Ai.isNegativeZero(n))return"-0.0";return t=n.toString(10),Xk.test(t)?t.replace("e",".e"):t}function n_(n){return Object.prototype.toString.call(n)==="[object Number]"&&(n%1!==0||Ai.isNegativeZero(n))}var s_=new rn("tag:yaml.org,2002:float",{kind:"scalar",resolve:Jk,construct:Qk,predicate:n_,represent:e_,defaultStyle:"lowercase"}),t_=Ok.extend({implicit:[Lk,jk,Yk,s_]}),o_=t_,Bh=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"),Ch=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");function l_(n){return n===null?!1:Bh.exec(n)!==null||Ch.exec(n)!==null}function a_(n){var s,t,o,l,r,i,c,p=0,u=null,d,h,f;if(s=Bh.exec(n),s===null&&(s=Ch.exec(n)),s===null)throw new Error("Date resolve error");if(t=+s[1],o=+s[2]-1,l=+s[3],!s[4])return new Date(Date.UTC(t,o,l));if(r=+s[4],i=+s[5],c=+s[6],s[7]){for(p=s[7].slice(0,3);p.length<3;)p+="0";p=+p}return s[9]&&(d=+s[10],h=+(s[11]||0),u=(d*60+h)*6e4,s[9]==="-"&&(u=-u)),f=new Date(Date.UTC(t,o,l,r,i,c,p)),u&&f.setTime(f.getTime()-u),f}function r_(n){return n.toISOString()}var i_=new rn("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:l_,construct:a_,instanceOf:Date,represent:r_});function c_(n){return n==="<<"||n===null}var p_=new rn("tag:yaml.org,2002:merge",{kind:"scalar",resolve:c_}),bi=`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;function u_(n){if(n===null)return!1;var s,t,o=0,l=n.length,r=bi;for(t=0;t<l;t++)if(s=r.indexOf(n.charAt(t)),!(s>64)){if(s<0)return!1;o+=6}return o%8===0}function d_(n){var s,t,o=n.replace(/[\r\n=]/g,""),l=o.length,r=bi,i=0,c=[];for(s=0;s<l;s++)s%4===0&&s&&(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)),i=i<<6|r.indexOf(o.charAt(s));return t=l%4*6,t===0?(c.push(i>>16&255),c.push(i>>8&255),c.push(i&255)):t===18?(c.push(i>>10&255),c.push(i>>2&255)):t===12&&c.push(i>>4&255),new Uint8Array(c)}function h_(n){var s="",t=0,o,l,r=n.length,i=bi;for(o=0;o<r;o++)o%3===0&&o&&(s+=i[t>>18&63],s+=i[t>>12&63],s+=i[t>>6&63],s+=i[t&63]),t=(t<<8)+n[o];return l=r%3,l===0?(s+=i[t>>18&63],s+=i[t>>12&63],s+=i[t>>6&63],s+=i[t&63]):l===2?(s+=i[t>>10&63],s+=i[t>>4&63],s+=i[t<<2&63],s+=i[64]):l===1&&(s+=i[t>>2&63],s+=i[t<<4&63],s+=i[64],s+=i[64]),s}function f_(n){return Object.prototype.toString.call(n)==="[object Uint8Array]"}var y_=new rn("tag:yaml.org,2002:binary",{kind:"scalar",resolve:u_,construct:d_,predicate:f_,represent:h_}),m_=Object.prototype.hasOwnProperty,g_=Object.prototype.toString;function A_(n){if(n===null)return!0;var s=[],t,o,l,r,i,c=n;for(t=0,o=c.length;t<o;t+=1){if(l=c[t],i=!1,g_.call(l)!=="[object Object]")return!1;for(r in l)if(m_.call(l,r))if(!i)i=!0;else return!1;if(!i)return!1;if(s.indexOf(r)===-1)s.push(r);else return!1}return!0}function b_(n){return n!==null?n:[]}var B_=new rn("tag:yaml.org,2002:omap",{kind:"sequence",resolve:A_,construct:b_}),C_=Object.prototype.toString;function k_(n){if(n===null)return!0;var s,t,o,l,r,i=n;for(r=new Array(i.length),s=0,t=i.length;s<t;s+=1){if(o=i[s],C_.call(o)!=="[object Object]"||(l=Object.keys(o),l.length!==1))return!1;r[s]=[l[0],o[l[0]]]}return!0}function __(n){if(n===null)return[];var s,t,o,l,r,i=n;for(r=new Array(i.length),s=0,t=i.length;s<t;s+=1)o=i[s],l=Object.keys(o),r[s]=[l[0],o[l[0]]];return r}var v_=new rn("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:k_,construct:__}),D_=Object.prototype.hasOwnProperty;function w_(n){if(n===null)return!0;var s,t=n;for(s in t)if(D_.call(t,s)&&t[s]!==null)return!1;return!0}function x_(n){return n!==null?n:{}}var I_=new rn("tag:yaml.org,2002:set",{kind:"mapping",resolve:w_,construct:x_});o_.extend({implicit:[i_,p_],explicit:[y_,B_,v_,I_]});function _p(n){return n===48?"\0":n===97?"\x07":n===98?"\b":n===116||n===9?"	":n===110?`
`:n===118?"\v":n===102?"\f":n===114?"\r":n===101?"\x1B":n===32?" ":n===34?'"':n===47?"/":n===92?"\\":n===78?"":n===95?" ":n===76?"\u2028":n===80?"\u2029":""}var S_=new Array(256),E_=new Array(256);for(var bt=0;bt<256;bt++)S_[bt]=_p(bt)?1:0,E_[bt]=_p(bt);function $_(n){return Array.from(new Set(n))}function vp(...n){let s,t,o;n.length===1?(s=0,o=1,[t]=n):[s,t,o=1]=n;const l=[];let r=s;for(;r<t;)l.push(r),r+=o||1;return l}function kh(n,s){if(!s||s==="all"||s==="*")return vp(1,n+1);const t=[];for(const o of s.split(/[,;]/g))if(!o.includes("-"))t.push(+o);else{const[l,r]=o.split("-",2);t.push(...vp(+l,r?+r+1:n+1))}return $_(t).filter(o=>o<=n).sort((o,l)=>o-l)}function _h(n){const s=S(()=>n.value.path),t=S(()=>Ze.length-1),o=S(()=>parseInt(s.value.split(/\//g).slice(-1)[0])||1),l=S(()=>sa(o.value)),r=S(()=>Ze.find(f=>f.path===`${o.value}`)),i=S(()=>{var f,m,y;return(y=(m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.slide)==null?void 0:y.id}),c=S(()=>{var f,m;return((m=(f=r.value)==null?void 0:f.meta)==null?void 0:m.layout)||(o.value===1?"cover":"default")}),p=S(()=>Ze.find(f=>f.path===`${Math.min(Ze.length,o.value+1)}`)),u=S(()=>Ze.filter(f=>{var m,y;return(y=(m=f.meta)==null?void 0:m.slide)==null?void 0:y.title}).reduce((f,m)=>(Bi(f,m),f),[])),d=S(()=>Ci(u.value,r.value)),h=S(()=>ki(d.value));return{route:n,path:s,total:t,currentPage:o,currentPath:l,currentRoute:r,currentSlideId:i,currentLayout:c,nextRoute:p,rawTree:u,treeWithActiveStatuses:d,tree:h}}function vh(n,s,t){const o=z(0);sn(()=>{bn.afterEach(async()=>{await sn(),o.value+=1})});const l=S(()=>{var p,u;return o.value,((u=(p=s.value)==null?void 0:p.meta)==null?void 0:u.__clicksElements)||[]}),r=S(()=>{var p,u;return+(((u=(p=s.value)==null?void 0:p.meta)==null?void 0:u.clicks)??l.value.length)}),i=S(()=>t.value<Ze.length-1||n.value<r.value),c=S(()=>t.value>1||n.value>0);return{clicks:n,clicksElements:l,clicksTotal:r,hasNext:i,hasPrev:c}}const T_=["id"],F_=Re({__name:"PrintSlideClick",props:{clicks:{type:Number,required:!0},clicksElements:{type:Array,required:!1},nav:{type:null,required:!0},route:{type:null,required:!0}},emits:["update:clicksElements"],setup(n,{emit:s}){const t=n,o=Jn(t,"clicksElements",s),l=S(()=>({height:`${ii}px`,width:`${Es}px`})),r=es();$s(()=>Promise.resolve().then(()=>G3),void 0).then(u=>r.value=u.default);const i=S(()=>t.clicks),c=vh(i,t.nav.currentRoute,t.nav.currentPage),p=S(()=>`${t.route.path.toString().padStart(3,"0")}-${(i.value+1).toString().padStart(2,"0")}`);return Dn(Y,He({nav:{...t.nav,...c},configs:$e,themeConfigs:S(()=>$e.themeConfig)})),(u,d)=>{var h;return D(),ne("div",{id:v(p),class:"print-slide-container",style:tn(v(l))},[M(v(mh)),M(v(gi),{is:(h=n.route)==null?void 0:h.component,"clicks-elements":v(o),"onUpdate:clicksElements":d[0]||(d[0]=f=>Te(o)?o.value=f:null),clicks:v(i),"clicks-disabled":!1,class:ze(v(mi)(n.route)),route:n.route},null,8,["is","clicks-elements","clicks","class","route"]),v(r)?(D(),G(v(r),{key:0,page:+n.route.path},null,8,["page"])):De("v-if",!0),M(v(yh))],12,T_)}}}),Dp=J(F_,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),O_=Re({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(n){var r;const s=n;N(Y);const t=He(((r=s.route.meta)==null?void 0:r.__clicksElements)||[]),o=S(()=>s.route),l=_h(o);return(i,c)=>(D(),ne(Oe,null,[M(Dp,{"clicks-elements":t,"onUpdate:clicksElements":c[0]||(c[0]=p=>t=p),clicks:0,nav:v(l),route:v(o)},null,8,["clicks-elements","nav","route"]),v(uo)?De("v-if",!0):(D(!0),ne(Oe,{key:0},qo(t.length,p=>(D(),G(Dp,{key:p,clicks:p,nav:v(l),route:v(o)},null,8,["clicks","nav","route"]))),128))],64))}}),M_=J(O_,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/PrintSlide.vue"]]),P_={id:"print-content"},R_=Re({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(n){const s=n;N(Y);const t=S(()=>s.width),o=S(()=>s.width/Ss),l=S(()=>t.value/o.value),r=S(()=>l.value<Ss?t.value/Es:o.value*Ss/Es);let i=Ze.slice(0,-1);Pn.value.query.range&&(i=kh(i.length,Pn.value.query.range).map(u=>i[u-1]));const c=S(()=>({"select-none":!$e.selectable,"slidev-code-line-numbers":$e.lineNumbers}));return Dn(Id,r),(p,u)=>(D(),ne("div",{id:"print-container",class:ze(v(c))},[e("div",P_,[(D(!0),ne(Oe,null,qo(v(i),d=>(D(),G(M_,{key:d.path,route:d},null,8,["route"]))),128))]),hs(p.$slots,"controls")],2))}});const L_=J(R_,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/PrintContainer.vue"]]),N_=Re({__name:"Print",setup(n){return N(Y),ut(()=>{Mt?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),(s,t)=>(D(),ne(Oe,null,[v(Mt)?(D(),G(gh,{key:0})):De("v-if",!0),e("div",{id:"page-root",class:"grid grid-cols-[1fr_max-content]",style:tn(v(ci))},[M(L_,{class:"w-full h-full",style:tn({background:"var(--slidev-slide-container-background, black)"}),width:v(lt).width.value},null,8,["style","width"])],4)],64))}});const W_=J(N_,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/internals/Print.vue"]]);const q_={class:"slidev-layout end"},j_={__name:"end",setup(n){return N(Y),(s,t)=>(D(),ne("div",q_," END "))}},V_=J(j_,[["__scopeId","data-v-e532b98d"],["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/layouts/end.vue"]]);function wp(n){return n.startsWith("/")?"/api-with-behat-formation/"+n.slice(1):n}function H_(n,s=!1){const t=n&&["#","rgb","hsl"].some(l=>n.indexOf(l)===0),o={background:t?n:void 0,color:n&&!t?"white":void 0,backgroundImage:t?void 0:n?s?`linear-gradient(#0005, #0008), url(${wp(n)})`:`url("${wp(n)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover"};return o.background||delete o.background,o}const G_={class:"my-auto w-full"},K_=Re({__name:"cover",props:{background:{default:"https://source.unsplash.com/collection/94734566/1920x1080"}},setup(n){const s=n;N(Y);const t=S(()=>H_(s.background,!0));return(o,l)=>(D(),ne("div",{class:"slidev-layout cover text-center",style:tn(v(t))},[e("div",G_,[hs(o.$slots,"default")])],4))}}),U_=J(K_,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/theme-seriph/layouts/cover.vue"]]),z_=e("h1",null,"API with Behat Formation",-1),Y_=e("p",null,"avec Sylius & Monofony",-1),Z_=e("div",{align:"center"},[e("img",{class:"w-75",align:"center",src:"https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg"})],-1),J_=e("div",{align:"center"},[e("img",{class:"w-75",src:"https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png"})],-1),Q_={__name:"1",setup(n){const s={theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss"};return N(Y),(t,o)=>(D(),G(U_,pe(ce(s)),{default:T(()=>[z_,Y_,Z_,J_]),_:1},16))}},X_=J(Q_,[["__file","/@slidev/slides/1.md"]]),ev={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},nv=e("path",{fill:"currentColor",d:"M200 32h-36.3a47.8 47.8 0 0 0-71.4 0H56a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16Zm-72 0a32.1 32.1 0 0 1 32 32H96a32.1 32.1 0 0 1 32-32Zm72 184H56V48h26.8A47.2 47.2 0 0 0 80 64v8a8 8 0 0 0 8 8h80a8 8 0 0 0 8-8v-8a47.2 47.2 0 0 0-2.8-16H200Z"},null,-1),sv=[nv];function tv(n,s){return D(),ne("svg",ev,sv)}const ov={name:"ph-clipboard",render:tv},lv={class:"slidev-icon",viewBox:"0 0 256 256",width:"1.2em",height:"1.2em"},av=e("path",{fill:"currentColor",d:"M177.8 98.5a8 8 0 0 1-.3 11.3l-58.6 56a8.1 8.1 0 0 1-5.6 2.2a7.9 7.9 0 0 1-5.5-2.2l-29.3-28a8 8 0 1 1 11-11.6l23.8 22.7l53.2-50.7a8 8 0 0 1 11.3.3ZM232 128A104 104 0 1 1 128 24a104.2 104.2 0 0 1 104 104Zm-16 0a88 88 0 1 0-88 88a88.1 88.1 0 0 0 88-88Z"},null,-1),rv=[av];function iv(n,s){return D(),ne("svg",lv,rv)}const cv={name:"ph-check-circle",render:iv},pv=["title"],uv=Re({__name:"CodeBlockWrapper",props:{ranges:{default:()=>[]},at:{type:Number,default:void 0},maxHeight:{type:String,default:void 0}},setup(n){const s=n;N(Y);const t=N(ao),o=N(zs),l=N(ro);function r(h=5){const f=[],m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",y=m.length;for(let A=0;A<h;A++)f.push(m.charAt(Math.floor(Math.random()*y)));return f.join("")}const i=z(),c=En();dt(()=>{const h=s.at==null?o==null?void 0:o.value.length:s.at,f=S(()=>l!=null&&l.value?s.ranges.length-1:Math.min(Math.max(0,((t==null?void 0:t.value)||0)-(h||0)),s.ranges.length-1)),m=S(()=>s.ranges[f.value]||"");if(s.ranges.length>=2&&!(l!=null&&l.value)){const y=r(),A=EA(s.ranges.length-1).map(b=>y+b);o!=null&&o.value&&(o.value.push(...A),Jl(()=>A.forEach(b=>lr(o.value,b)),c))}ut(()=>{if(!i.value)return;const A=i.value.querySelector(".shiki-dark")?Array.from(i.value.querySelectorAll(".shiki")):[i.value];for(const b of A){const _=Array.from(b.querySelectorAll(".line")),C=kh(_.length,m.value);if(_.forEach((k,w)=>{const $=C.includes(w+1);k.classList.toggle(Ks,!0),k.classList.toggle("highlighted",$),k.classList.toggle("dishonored",!$)}),s.maxHeight){const k=b.querySelector(".line.highlighted");k&&k.scrollIntoView({behavior:"smooth",block:"center"})}}})});const{copied:p,copy:u}=T8();function d(){var f,m;const h=(m=(f=i.value)==null?void 0:f.querySelector(".slidev-code"))==null?void 0:m.textContent;h&&u(h)}return(h,f)=>{const m=cv,y=ov;return D(),ne("div",{ref_key:"el",ref:i,class:"slidev-code-wrapper relative group",style:tn({"max-height":s.maxHeight,"overflow-y":s.maxHeight?"scroll":void 0})},[hs(h.$slots,"default"),v($e).codeCopy?(D(),ne("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:v(p)?"Copied":"Copy",onClick:f[0]||(f[0]=A=>d())},[v(p)?(D(),G(m,{key:0,class:"p-2 w-8 h-8"})):(D(),G(y,{key:1,class:"p-2 w-8 h-8"}))],8,pv)):De("v-if",!0)],4)}}}),ue=J(uv,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]),dv={class:"slidev-layout default"},hv={__name:"default",setup(n){return N(Y),(s,t)=>(D(),ne("div",dv,[hs(s.$slots,"default")]))}},de=J(hv,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/layouts/default.vue"]]),fv=e("h1",null,"Features",-1),yv=e("p",null,"Exemple 1 : Browsing books",-1),mv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also an book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also an book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),gv={__name:"2",setup(n){const s={srcSequence:"./pages/01_features.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[fv,yv,M(l,re({},{ranges:["all","12"]}),{default:T(()=>[mv]),_:1},16)]),_:1},16)}}},Av=J(gv,[["__file","/@slidev/slides/2.md"]]),bv=e("h1",null,"Suites",-1),Bv=e("p",null,[a("Nous pouvons ainsi créer une suite "),e("code",null,"api_managing_books"),a(":")],-1),Cv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#429988"}},"default"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#429988"}},"suites"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#429988"}},"api_managing_books"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#429988"}},"contexts"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Setup\\BookContext")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Transform\\BookContext")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#858585"}},"-"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"App\\Tests\\Behat\\Context\\Api\\ManagingBooksContext")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#429988"}},"filters"),e("span",{style:{color:"#858585"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"                "),e("span",{style:{color:"#429988"}},"tags"),e("span",{style:{color:"#858585"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},'"@managing_books&&@api"')])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#2F8A89"}},"default"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#2F8A89"}},"suites"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#2F8A89"}},"api_managing_books"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#2F8A89"}},"contexts"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Setup\\BookContext")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Transform\\BookContext")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#8E8F8B"}},"-"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"App\\Tests\\Behat\\Context\\Api\\ManagingBooksContext")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#2F8A89"}},"filters"),e("span",{style:{color:"#8E8F8B"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"                "),e("span",{style:{color:"#2F8A89"}},"tags"),e("span",{style:{color:"#8E8F8B"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},'"@managing_books&&@api"')])])])],-1),kv={__name:"3",setup(n){const s={srcSequence:"./pages/02_suites.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[bv,Bv,M(l,re({},{ranges:["all","3","4","5","7-8","10-11","12-13","15"]}),{default:T(()=>[Cv]),_:1},16)]),_:1},16)}}},_v=J(kv,[["__file","/@slidev/slides/3.md"]]),vv=e("h1",null,"Contexts",-1),Dv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"<?"),e("span",{style:{color:"#D4976C"}},"php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Api"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"use"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#E0A569"}},"Context"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"] ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"        "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"<?"),e("span",{style:{color:"#A65E2B"}},"php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Api"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"use"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#B58451"}},"Context"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"] ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"        "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),wv={__name:"4",setup(n){const s={srcSequence:"./pages/03_contexts.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[vv,M(l,re({},{ranges:[""]}),{default:T(()=>[Dv]),_:1},16)]),_:1},16)}}},xv=J(wv,[["__file","/@slidev/slides/4.md"]]),Iv=e("h1",null,"Browsing books",-1),Sv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),Ev={__name:"5",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[Iv,M(l,re({},{ranges:["all","8","9","10","14"]}),{default:T(()=>[Sv]),_:1},16)]),_:1},16)}}},$v=J(Ev,[["__file","/@slidev/slides/5.md"]]),Tv=e("h1",null,"Contexte de la gestion de books",-1),Fv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"__construct"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ApiClientInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#CB7676"}},"private"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"ResponseCheckerInterface"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"buildCreateRequest"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"__construct"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ApiClientInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#AB5959"}},"private"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"ResponseCheckerInterface"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"buildCreateRequest"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Ov={__name:"6",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[Tv,M(l,re({},{ranges:["all","6","7","11","12","14"]}),{default:T(()=>[Fv]),_:1},16)]),_:1},16)}}},Mv=J(Ov,[["__file","/@slidev/slides/6.md"]]),Pv=e("h1",null,"Gestion des paths",-1),Rv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"declare"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"strict_types"),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#6394BF"}},"1"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"namespace"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"App"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Tests"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Behat"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Context"),e("span",{style:{color:"#858585"}},"\\"),e("span",{style:{color:"#A1B567"}},"Api"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Resources")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"const"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'books'"),e("span",{style:{color:"#858585"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"declare"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"strict_types"),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#296AA3"}},"1"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"namespace"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"App"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Tests"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Behat"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Context"),e("span",{style:{color:"#8E8F8B"}},"\\"),e("span",{style:{color:"#6C7834"}},"Api"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Resources")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"const"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'books'"),e("span",{style:{color:"#8E8F8B"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Lv={__name:"7",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[Pv,M(l,re({},{ranges:[""]}),{default:T(()=>[Rv]),_:1},16)]),_:1},16)}}},Nv=J(Lv,[["__file","/@slidev/slides/7.md"]]),Wv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),qv={__name:"8",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["14","15"]}),{default:T(()=>[Wv]),_:1},16)]),_:1},16)}}},jv=J(qv,[["__file","/@slidev/slides/8.md"]]),Vv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"buildCreateRequest"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"buildCreateRequest"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Hv={__name:"9",setup(n){const s={transition:"fade",srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["10"]}),{default:T(()=>[Vv]),_:1},16)]),_:1},16)}}},Gv=J(Hv,[["__file","/@slidev/slides/9.md"]]),Kv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"/"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"["),e("span",{style:{color:"#CB7676"}},"..."),e("span",{style:{color:"#858585"}},"]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"buildCreateRequest"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#E0A569"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#E0A569"}},"same"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"countCollectionItems"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getLastResponse"),e("span",{style:{color:"#858585"}},"()),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"/"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"["),e("span",{style:{color:"#AB5959"}},"..."),e("span",{style:{color:"#8E8F8B"}},"]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"buildCreateRequest"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B58451"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#B58451"}},"same"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"countCollectionItems"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getLastResponse"),e("span",{style:{color:"#8E8F8B"}},"()),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"}")])])])],-1),Uv={__name:"10",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["13-19","13","14","16"]}),{default:T(()=>[Kv]),_:1},16)]),_:1},16)}}},zv=J(Uv,[["__file","/@slidev/slides/10.md"]]),Yv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to see all books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to browse books")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Browsing books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to browse books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"there should be 2 books in the list")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I should see the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to see all books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to browse books")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Browsing books in the admin panel")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to browse books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"there should be 2 books in the list")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I should see the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," in the list")])])])],-1),Zv={__name:"11",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["15","16"]}),{default:T(()=>[Yv]),_:1},16)]),_:1},16)}}},Jv=J(Zv,[["__file","/@slidev/slides/11.md"]]),Qv=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"same"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"countCollectionItems"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getLastResponse"),e("span",{style:{color:"#858585"}},"()),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"same"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"countCollectionItems"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getLastResponse"),e("span",{style:{color:"#8E8F8B"}},"()),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),Xv={__name:"12",setup(n){const s={transition:"fade",srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["7-11"]}),{default:T(()=>[Qv]),_:1},16)]),_:1},16)}}},e1=J(Xv,[["__file","/@slidev/slides/12.md"]]),n1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"int"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"same"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"countCollectionItems"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getLastResponse"),e("span",{style:{color:"#858585"}},"()),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"amount"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldSeeTheBookInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"hasItemWithValue"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"sprintf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Book with name %s does not exist'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there should be :amount books in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"thereShouldBeBooksInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"int"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"same"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"countCollectionItems"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getLastResponse"),e("span",{style:{color:"#8E8F8B"}},"()),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"amount"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldSeeTheBookInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"hasItemWithValue"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"sprintf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Book with name %s does not exist'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),s1={__name:"13",setup(n){const s={srcSequence:"./pages/04_browsing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["13-20","13","14","16-19"]}),{default:T(()=>[n1]),_:1},16)]),_:1},16)}}},t1=J(s1,[["__file","/@slidev/slides/13.md"]]),o1=e("h1",null,"Adding books",-1),l1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),a1={__name:"14",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[o1,M(l,re({},{ranges:["all","1,10","2-5","7-8","11","12"]}),{default:T(()=>[l1]),_:1},16)]),_:1},16)}}},r1=J(a1,[["__file","/@slidev/slides/14.md"]]),i1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to create a new book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToCreateANewBook"),e("span",{style:{color:"#858585"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"buildCreateRequest"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to create a new book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToCreateANewBook"),e("span",{style:{color:"#8E8F8B"}},"()")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"buildCreateRequest"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),c1={__name:"15",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10"]}),{default:T(()=>[i1]),_:1},16)]),_:1},16)}}},p1=J(c1,[["__file","/@slidev/slides/15.md"]]),u1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),d1={__name:"16",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["12","13"]}),{default:T(()=>[u1]),_:1},16)]),_:1},16)}}},h1=J(d1,[["__file","/@slidev/slides/16.md"]]),f1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addRequestData"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addRequestData"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),y1={__name:"17",setup(n){const s={transition:"fade",srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10-12"]}),{default:T(()=>[f1]),_:1},16)]),_:1},16)}}},m1=J(y1,[["__file","/@slidev/slides/17.md"]]),g1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),A1={__name:"18",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["13","14"]}),{default:T(()=>[g1]),_:1},16)]),_:1},16)}}},b1=J(A1,[["__file","/@slidev/slides/18.md"]]),B1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),C1={__name:"19",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10"]}),{default:T(()=>[B1]),_:1},16)]),_:1},16)}}},k1=J(C1,[["__file","/@slidev/slides/19.md"]]),_1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),v1={__name:"20",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["14","15"]}),{default:T(()=>[_1]),_:1},16)]),_:1},16)}}},D1=J(v1,[["__file","/@slidev/slides/20.md"]]),w1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should be notified that it has been successfully created'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldBeNotifiedThatItHasBeenSuccessfullyCreated"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isCreationSuccessful"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getLastResponse"),e("span",{style:{color:"#858585"}},"()),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'Book could not be created'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should be notified that it has been successfully created'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldBeNotifiedThatItHasBeenSuccessfullyCreated"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isCreationSuccessful"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getLastResponse"),e("span",{style:{color:"#8E8F8B"}},"()),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'Book could not be created'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),x1={__name:"21",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10-13"]}),{default:T(()=>[w1]),_:1},16)]),_:1},16)}}},I1=J(x1,[["__file","/@slidev/slides/21.md"]]),S1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I specify its name as "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"the book "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to create new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to add a book in the admin panel")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Adding a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I specify its name as "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully created")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"the book "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),E1={__name:"22",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["15","16"]}),{default:T(()=>[S1]),_:1},16)]),_:1},16)}}},$1=J(E1,[["__file","/@slidev/slides/22.md"]]),T1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"   "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldSeeTheBookInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"hasItemWithValue"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"sprintf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Book with name %s does not exist'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"   "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldSeeTheBookInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"hasItemWithValue"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"sprintf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Book with name %s does not exist'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),F1={__name:"23",setup(n){const s={srcSequence:"./pages/05_adding_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8"]}),{default:T(()=>[T1]),_:1},16)]),_:1},16)}}},O1=J(F1,[["__file","/@slidev/slides/23.md"]]),M1=e("h1",null,"Editing books",-1),P1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),R1={__name:"24",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M1,M(l,re({},{ranges:["all","1,11","2-5","7-9","12","13"]}),{default:T(()=>[P1]),_:1},16)]),_:1},16)}}},L1=J(R1,[["__file","/@slidev/slides/24.md"]]),N1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'/"),e("span",{style:{color:"#CB7676"}},"^"),e("span",{style:{color:"#C4704F"}},"I want to edit (this book)"),e("span",{style:{color:"#CB7676"}},"$"),e("span",{style:{color:"#C98A7D"}},"/'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToEditThisBook"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Book"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"buildUpdateRequest"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getId"),e("span",{style:{color:"#858585"}},"());")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'/"),e("span",{style:{color:"#AB5959"}},"^"),e("span",{style:{color:"#AB5E3F"}},"I want to edit (this book)"),e("span",{style:{color:"#AB5959"}},"$"),e("span",{style:{color:"#B56959"}},"/'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToEditThisBook"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Book"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"buildUpdateRequest"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getId"),e("span",{style:{color:"#8E8F8B"}},"());")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),W1={__name:"25",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10"]}),{default:T(()=>[N1]),_:1},16)]),_:1},16)}}},q1=J(W1,[["__file","/@slidev/slides/25.md"]]),j1=e("h1",null,"Editing books",-1),V1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),H1={__name:"26",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[j1,M(l,re({},{ranges:["13","14"]}),{default:T(()=>[V1]),_:1},16)]),_:1},16)}}},G1=J(H1,[["__file","/@slidev/slides/26.md"]]),K1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I change its name to :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"?"),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addRequestData"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I change its name to :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"?"),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addRequestData"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),U1={__name:"27",setup(n){const s={transition:"fade",srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8"]}),{default:T(()=>[K1]),_:1},16)]),_:1},16)}}},z1=J(U1,[["__file","/@slidev/slides/27.md"]]),Y1=e("h1",null,"Editing books",-1),Z1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),J1={__name:"28",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[Y1,M(l,re({},{ranges:["14","15"]}),{default:T(()=>[Z1]),_:1},16)]),_:1},16)}}},Q1=J(J1,[["__file","/@slidev/slides/28.md"]]),X1=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I save my changes'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSaveMyChanges"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"update"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I save my changes'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSaveMyChanges"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"update"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),eD={__name:"29",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10"]}),{default:T(()=>[X1]),_:1},16)]),_:1},16)}}},nD=J(eD,[["__file","/@slidev/slides/29.md"]]),sD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),tD={__name:"30",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["15","16"]}),{default:T(()=>[sD]),_:1},16)]),_:1},16)}}},oD=J(tD,[["__file","/@slidev/slides/30.md"]]),lD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"     #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should be notified that it has been successfully edited'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldBeNotifiedThatItHasBeenSuccessfullyEdited"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isUpdateSuccessful"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getLastResponse"),e("span",{style:{color:"#858585"}},"()),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'Book could not be edited'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"     #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should be notified that it has been successfully edited'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldBeNotifiedThatItHasBeenSuccessfullyEdited"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isUpdateSuccessful"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getLastResponse"),e("span",{style:{color:"#8E8F8B"}},"()),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'Book could not be edited'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),aD={__name:"31",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10-13"]}),{default:T(()=>[lD]),_:1},16)]),_:1},16)}}},rD=J(aD,[["__file","/@slidev/slides/31.md"]]),iD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I change its name to "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"this book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"'),e("span",{style:{color:"#DBD7CA"}}," should appear in the list")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Editing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to change information about a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to edit a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"@api")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Renaming a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to edit this book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I change its name to "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I save my changes")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully edited")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"this book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"'),e("span",{style:{color:"#393A34"}}," should appear in the list")])])])],-1),cD={__name:"32",setup(n){const s={srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["16","17"]}),{default:T(()=>[iD]),_:1},16)]),_:1},16)}}},pD=J(cD,[["__file","/@slidev/slides/32.md"]]),uD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'this book with name :name should appear in the list'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"hasItemWithValue"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"sprintf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Book with name %s does not exist'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should see the book :name in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'the book :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'this book with name :name should appear in the list'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"theBookShouldAppearInTheList"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"hasItemWithValue"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"sprintf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Book with name %s does not exist'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),dD={__name:"33",setup(n){const s={transition:"fade",srcSequence:"./pages/06_editing_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","9"]}),{default:T(()=>[uD]),_:1},16)]),_:1},16)}}},hD=J(dD,[["__file","/@slidev/slides/33.md"]]),fD=e("h1",null,"Deleting books",-1),yD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to get rid of deprecated books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to delete a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I delete book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully deleted")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there should not be "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," book anymore")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to get rid of deprecated books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to delete a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I delete book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully deleted")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there should not be "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," book anymore")])])])],-1),mD={__name:"34",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[fD,M(l,re({},{ranges:["all","3-5","7-10","14"]}),{default:T(()=>[yD]),_:1},16)]),_:1},16)}}},gD=J(mD,[["__file","/@slidev/slides/34.md"]]),AD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to browse books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I am browsing books'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToBrowseBooks"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to browse books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I am browsing books'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToBrowseBooks"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),bD={__name:"35",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8"]}),{default:T(()=>[AD]),_:1},16)]),_:1},16)}}},BD=J(bD,[["__file","/@slidev/slides/35.md"]]),CD=e("h1",null,"Deleting books",-1),kD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to get rid of deprecated books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to delete a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I delete book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully deleted")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there should not be "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," book anymore")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to get rid of deprecated books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to delete a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I delete book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully deleted")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there should not be "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," book anymore")])])])],-1),_D={__name:"36",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[CD,M(l,re({},{ranges:["14","15"]}),{default:T(()=>[kD]),_:1},16)]),_:1},16)}}},vD=J(_D,[["__file","/@slidev/slides/36.md"]]),DD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I delete book with name :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iDeleteBookWithName"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"delete"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"book"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getId"),e("span",{style:{color:"#858585"}},"());")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I delete book with name :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iDeleteBookWithName"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"delete"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"book"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getId"),e("span",{style:{color:"#8E8F8B"}},"());")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),wD={__name:"37",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10"]}),{default:T(()=>[DD]),_:1},16)]),_:1},16)}}},xD=J(wD,[["__file","/@slidev/slides/37.md"]]),ID=e("h1",null,"Deleting books",-1),SD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to get rid of deprecated books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to delete a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I delete book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully deleted")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there should not be "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," book anymore")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to get rid of deprecated books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to delete a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I delete book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully deleted")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there should not be "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," book anymore")])])])],-1),ED={__name:"38",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[ID,M(l,re({},{ranges:["15","16"]}),{default:T(()=>[SD]),_:1},16)]),_:1},16)}}},$D=J(ED,[["__file","/@slidev/slides/38.md"]]),TD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should be notified that it has been successfully deleted'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldBeNotifiedThatItHasBeenSuccessfullyDeleted"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"true"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"isDeletionSuccessful"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getLastResponse"),e("span",{style:{color:"#858585"}},"()),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#C98A7D"}},"'Book could not be deleted'"),e("span",{style:{color:"#858585"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should be notified that it has been successfully deleted'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldBeNotifiedThatItHasBeenSuccessfullyDeleted"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"true"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"isDeletionSuccessful"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getLastResponse"),e("span",{style:{color:"#8E8F8B"}},"()),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B56959"}},"'Book could not be deleted'"),e("span",{style:{color:"#8E8F8B"}},",")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),FD={__name:"39",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","","7","8","10-13"]}),{default:T(()=>[TD]),_:1},16)]),_:1},16)}}},OD=J(FD,[["__file","/@slidev/slides/39.md"]]),MD=e("h1",null,"Deleting books",-1),PD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to get rid of deprecated books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be able to delete a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"there is a book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there is also a book with name "),e("span",{style:{color:"#C98A7D"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I delete book with name "),e("span",{style:{color:"#C98A7D"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that it has been successfully deleted")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"there should not be "),e("span",{style:{color:"#C98A7D"}},'"Shinning"'),e("span",{style:{color:"#DBD7CA"}}," book anymore")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to get rid of deprecated books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As an Administrator")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be able to delete a book")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"there is a book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there is also a book with name "),e("span",{style:{color:"#B56959"}},'"Carrie"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Deleting a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am browsing books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I delete book with name "),e("span",{style:{color:"#B56959"}},'"Shinning"')]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that it has been successfully deleted")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"there should not be "),e("span",{style:{color:"#B56959"}},'"Shinning"'),e("span",{style:{color:"#393A34"}}," book anymore")])])])],-1),RD={__name:"40",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[MD,M(l,re({},{ranges:["16","17"]}),{default:T(()=>[PD]),_:1},16)]),_:1},16)}}},LD=J(RD,[["__file","/@slidev/slides/40.md"]]),ND=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// src tests/Behat/Context/Setup/BookContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"BookContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'there should not be :name book anymore'"),e("span",{style:{color:"#858585"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#E0A569"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#E0A569"}},"thereShouldNotBeBookAnymore"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#CB7676"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},": "),e("span",{style:{color:"#E0A569"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    {")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#DBD7CA"}},"::"),e("span",{style:{color:"#E0A569"}},"false"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"hasItemWithValue"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"index"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},"),"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"sprintf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'Book with name %s exists, but it should not'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    }")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    // [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// src tests/Behat/Context/Setup/BookContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"BookContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'there should not be :name book anymore'"),e("span",{style:{color:"#8E8F8B"}},")")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#B58451"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B58451"}},"thereShouldNotBeBookAnymore"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#AB5959"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},": "),e("span",{style:{color:"#B58451"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    {")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#393A34"}},"::"),e("span",{style:{color:"#B58451"}},"false"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"hasItemWithValue"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"index"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},"),"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"sprintf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'Book with name %s exists, but it should not'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},";")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    }")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    // [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),WD={__name:"41",setup(n){const s={srcSequence:"./pages/07_deleting_books.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10-13"]}),{default:T(()=>[ND]),_:1},16)]),_:1},16)}}},qD=J(WD,[["__file","/@slidev/slides/41.md"]]),jD=e("h1",null,"Books validation",-1),VD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Books validation")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to avoid making mistakes when managing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As a Project manager")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be prevented from adding or editing it without specifying required fields")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Trying to add a new book without specifying its name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I do not specify any name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I try to add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that name is required")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Books validation")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to avoid making mistakes when managing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As a Project manager")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be prevented from adding or editing it without specifying required fields")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Trying to add a new book without specifying its name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I do not specify any name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I try to add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that name is required")])])])],-1),HD={__name:"42",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[jD,M(l,re({},{ranges:["all","3-5","7-8","11","12"]}),{default:T(()=>[VD]),_:1},16)]),_:1},16)}}},GD=J(HD,[["__file","/@slidev/slides/42.md"]]),KD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Given"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I want to create a new book'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iWantToCreateANewBook"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"buildCreateRequest"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#E0A569"}},"Resources"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#D4976C"}},"BOOKS"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Given"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I want to create a new book'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iWantToCreateANewBook"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"buildCreateRequest"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B58451"}},"Resources"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#A65E2B"}},"BOOKS"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),UD={__name:"43",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7"]}),{default:T(()=>[KD]),_:1},16)]),_:1},16)}}},zD=J(UD,[["__file","/@slidev/slides/43.md"]]),YD=e("h1",null,"Books validation",-1),ZD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Books validation")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to avoid making mistakes when managing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As a Project manager")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be prevented from adding or editing it without specifying required fields")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Trying to add a new book without specifying its name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I do not specify any name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I try to add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that name is required")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Books validation")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to avoid making mistakes when managing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As a Project manager")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be prevented from adding or editing it without specifying required fields")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Trying to add a new book without specifying its name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I do not specify any name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I try to add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that name is required")])])])],-1),JD={__name:"44",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[YD,M(l,re({},{ranges:["12","13"]}),{default:T(()=>[ZD]),_:1},16)]),_:1},16)}}},QD=J(JD,[["__file","/@slidev/slides/44.md"]]),XD=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I specify its name as :name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I do not specify any name'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"if"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#D4976C"}},"null"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"!=="),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"addRequestData"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'name'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"name"),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I specify its name as :name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I do not specify any name'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iSpecifyItsNameAs"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"if"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#A65E2B"}},"null"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"!=="),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"addRequestData"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'name'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"name"),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),e7={__name:"45",setup(n){const s={transition:"fade",srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["7","8","9","11-13"]}),{default:T(()=>[XD]),_:1},16)]),_:1},16)}}},n7=J(e7,[["__file","/@slidev/slides/45.md"]]),s7=e("h1",null,"Books validation",-1),t7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Books validation")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to avoid making mistakes when managing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As a Project manager")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be prevented from adding or editing it without specifying required fields")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Trying to add a new book without specifying its name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I do not specify any name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I try to add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that name is required")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Books validation")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to avoid making mistakes when managing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As a Project manager")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be prevented from adding or editing it without specifying required fields")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Trying to add a new book without specifying its name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I do not specify any name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I try to add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that name is required")])])])],-1),o7={__name:"46",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[s7,M(l,re({},{ranges:["13","14"]}),{default:T(()=>[t7]),_:1},16)]),_:1},16)}}},l7=J(o7,[["__file","/@slidev/slides/46.md"]]),a7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),r7={__name:"47",setup(n){const s={transition:"fade",srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["7"]}),{default:T(()=>[a7]),_:1},16)]),_:1},16)}}},i7=J(r7,[["__file","/@slidev/slides/47.md"]]),c7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"When"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I (try to) add it'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iAddIt"),e("span",{style:{color:"#858585"}},"()"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"create"),e("span",{style:{color:"#858585"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"When"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I (try to) add it'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iAddIt"),e("span",{style:{color:"#8E8F8B"}},"()"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"create"),e("span",{style:{color:"#8E8F8B"}},"();")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),p7={__name:"48",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["7"]}),{default:T(()=>[c7]),_:1},16)]),_:1},16)}}},u7=J(p7,[["__file","/@slidev/slides/48.md"]]),d7=e("h1",null,"Books validation",-1),h7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A1B567"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#4D9375"}},"Feature"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Books validation")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"In "),e("span",{style:{color:"#DBD7CA"}},"order to avoid making mistakes when managing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    As a Project manager")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    I want to be prevented from adding or editing it without specifying required fields")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Background"),e("span",{style:{color:"#DBD7CA"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Given "),e("span",{style:{color:"#DBD7CA"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#A1B567"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#4D9375"}},"Scenario"),e("span",{style:{color:"#DBD7CA"}},":"),e("span",{style:{color:"#C98A7D"}}," Trying to add a new book without specifying its name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"When "),e("span",{style:{color:"#DBD7CA"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I do not specify any name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"And "),e("span",{style:{color:"#DBD7CA"}},"I try to add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#4D9375"}},"Then "),e("span",{style:{color:"#DBD7CA"}},"I should be notified that name is required")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#6C7834"}},"@managing_books")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#1C6B48"}},"Feature"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Books validation")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"In "),e("span",{style:{color:"#393A34"}},"order to avoid making mistakes when managing a book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    As a Project manager")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    I want to be prevented from adding or editing it without specifying required fields")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Background"),e("span",{style:{color:"#393A34"}},":")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Given "),e("span",{style:{color:"#393A34"}},"I am logged in as an administrator")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#6C7834"}},"@ui")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#1C6B48"}},"Scenario"),e("span",{style:{color:"#393A34"}},":"),e("span",{style:{color:"#B56959"}}," Trying to add a new book without specifying its name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"When "),e("span",{style:{color:"#393A34"}},"I want to create a new book")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I do not specify any name")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"And "),e("span",{style:{color:"#393A34"}},"I try to add it")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#1C6B48"}},"Then "),e("span",{style:{color:"#393A34"}},"I should be notified that name is required")])])])],-1),f7={__name:"49",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[d7,M(l,re({},{ranges:["14","15"]}),{default:T(()=>[h7]),_:1},16)]),_:1},16)}}},y7=J(f7,[["__file","/@slidev/slides/49.md"]]),m7=e("pre",{class:"shiki-container"},[e("pre",{class:"slidev-code shiki shiki-dark Vitesse Dark",style:{"background-color":"#121212"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#758575"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#CB7676"}},"final"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"class"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"ManagingBooksContext"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"implements"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    #["),e("span",{style:{color:"#E0A569"}},"Then"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'I should be notified that :element is required'"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#DBD7CA"}},"] ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#CB7676"}},"public"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#CB7676"}},"function"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#A1B567"}},"iShouldBeNotifiedThatElementIsRequired"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#4D9375"}},"string"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"element"),e("span",{style:{color:"#858585"}},")"),e("span",{style:{color:"#CB7676"}},":"),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#4D9375"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#E0A569"}},"Assert"),e("span",{style:{color:"#CB7676"}},"::"),e("span",{style:{color:"#A1B567"}},"contains"),e("span",{style:{color:"#858585"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"responseChecker"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getError"),e("span",{style:{color:"#858585"}},"($"),e("span",{style:{color:"#D4976C"}},"this"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#B8A965"}},"client"),e("span",{style:{color:"#CB7676"}},"->"),e("span",{style:{color:"#A1B567"}},"getLastResponse"),e("span",{style:{color:"#858585"}},"()),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"            "),e("span",{style:{color:"#E0A569"}},"sprintf"),e("span",{style:{color:"#858585"}},"("),e("span",{style:{color:"#C98A7D"}},"'%s: This value should not be blank.'"),e("span",{style:{color:"#858585"}},","),e("span",{style:{color:"#DBD7CA"}}," "),e("span",{style:{color:"#858585"}},"$"),e("span",{style:{color:"#B8A965"}},"element"),e("span",{style:{color:"#858585"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"        "),e("span",{style:{color:"#858585"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    "),e("span",{style:{color:"#858585"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#DBD7CA"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"    "),e("span",{style:{color:"#758575"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#858585"}},"}")])])]),e("pre",{class:"slidev-code shiki shiki-light Vitesse Light",style:{"background-color":"#ffffff"},tabindex:"0"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{color:"#A0ADA0"}},"// tests/Behat/Context/Api/ManagingBooksContext.php")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#AB5959"}},"final"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"class"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"ManagingBooksContext"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"implements"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"Context")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"}),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    #["),e("span",{style:{color:"#B58451"}},"Then"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'I should be notified that :element is required'"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#393A34"}},"] ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#AB5959"}},"public"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#AB5959"}},"function"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#6C7834"}},"iShouldBeNotifiedThatElementIsRequired"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#1C6B48"}},"string"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"element"),e("span",{style:{color:"#8E8F8B"}},")"),e("span",{style:{color:"#AB5959"}},":"),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#1C6B48"}},"void")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"{")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#B58451"}},"Assert"),e("span",{style:{color:"#AB5959"}},"::"),e("span",{style:{color:"#6C7834"}},"contains"),e("span",{style:{color:"#8E8F8B"}},"(")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"responseChecker"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getError"),e("span",{style:{color:"#8E8F8B"}},"($"),e("span",{style:{color:"#A65E2B"}},"this"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#8C862B"}},"client"),e("span",{style:{color:"#AB5959"}},"->"),e("span",{style:{color:"#6C7834"}},"getLastResponse"),e("span",{style:{color:"#8E8F8B"}},"()),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"            "),e("span",{style:{color:"#B58451"}},"sprintf"),e("span",{style:{color:"#8E8F8B"}},"("),e("span",{style:{color:"#B56959"}},"'%s: This value should not be blank.'"),e("span",{style:{color:"#8E8F8B"}},","),e("span",{style:{color:"#393A34"}}," "),e("span",{style:{color:"#8E8F8B"}},"$"),e("span",{style:{color:"#8C862B"}},"element"),e("span",{style:{color:"#8E8F8B"}},"),")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"        "),e("span",{style:{color:"#8E8F8B"}},");")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    "),e("span",{style:{color:"#8E8F8B"}},"}")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#393A34"}},"    ")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"    "),e("span",{style:{color:"#A0ADA0"}},"// [...]")]),a(`
`),e("span",{class:"line"},[e("span",{style:{color:"#8E8F8B"}},"}")])])])],-1),g7={__name:"50",setup(n){const s={srcSequence:"./pages/08_books_validation.md"};return N(Y),(t,o)=>{const l=ue;return D(),G(de,pe(ce(s)),{default:T(()=>[M(l,re({},{ranges:["all","7","8","10","11","12"]}),{default:T(()=>[m7]),_:1},16)]),_:1},16)}}},A7=J(g7,[["__file","/@slidev/slides/50.md"]]),b7=[{path:"1",name:"page-1",component:X_,meta:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"API with Behat Formation",slide:{raw:`---
# try also 'default' to start simple
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: false
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# persist drawings in exports and build
drawings:
  persist: false
# page transition
transition: slide-left
colorSchema: light
# use UnoCSS
css: unocss
---

# API with Behat Formation

avec Sylius & Monofony

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png">
</div>
`,title:"API with Behat Formation",level:1,content:`# API with Behat Formation

avec Sylius & Monofony

<div align="center">
<img class="w-75" align="center" src="https://sylius.com/wp-content/uploads/2021/03/sylius-logo_sylius-logo-light-1024x422.jpg">
</div>

<div align="center">
<img class="w-75" src="https://raw.githubusercontent.com/Monofony/Monofony/0.x/docs/_images/doc_logo.png">
</div>`,frontmatter:{theme:"seriph",background:!1,class:"text-center",highlighter:"shiki",lineNumbers:!1,info:`## Slidev Starter Template
Presentation slides for developers.

Learn more at [Sli.dev](https://sli.dev)
`,drawings:{persist:!1},transition:"slide-left",colorSchema:"light",css:"unocss",title:"API with Behat Formation"},index:0,start:0,end:40,noteHTML:"",filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/slides.md",id:0,no:1},__clicksElements:[],__preloaded:!1}},{path:"2",name:"page-2",component:Av,meta:{title:"Features",srcSequence:"./pages/01_features.md",slide:{raw:null,title:"Features",level:1,content:`# Features

Exemple 1 : Browsing books

\`\`\`gherkin {all|12}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also an book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{title:"Features",srcSequence:"./pages/01_features.md"},index:1,start:0,end:23,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/01_features.md",raw:`# Features

Exemple 1 : Browsing books

\`\`\`gherkin {all|12}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also an book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,title:"Features",level:1,content:`# Features

Exemple 1 : Browsing books

\`\`\`gherkin {all|12}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also an book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{title:"Features"},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/01_features.md
---
`,content:"",frontmatter:{},index:1,start:40,end:44},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/01_features.md",noteHTML:"",id:1,no:2},__clicksElements:[],__preloaded:!1}},{path:"3",name:"page-3",component:_v,meta:{title:"Suites",srcSequence:"./pages/02_suites.md",slide:{raw:null,title:"Suites",level:1,content:`# Suites

Nous pouvons ainsi créer une suite \`api_managing_books\`:

\`\`\`yaml {all|3|4|5|7-8|10-11|12-13|15}
default:
    suites:
        api_managing_books:
            contexts:
                - App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext

                - App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext
                - App\\Tests\\Behat\\Context\\Setup\\BookContext

                - App\\Tests\\Behat\\Context\\Transform\\BookContext
                - App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext

                - App\\Tests\\Behat\\Context\\Api\\ManagingBooksContext
            filters:
                tags: "@managing_books&&@api"
\`\`\``,frontmatter:{title:"Suites",srcSequence:"./pages/02_suites.md"},index:2,start:0,end:22,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/02_suites.md",raw:`# Suites

Nous pouvons ainsi créer une suite \`api_managing_books\`:

\`\`\`yaml {all|3|4|5|7-8|10-11|12-13|15}
default:
    suites:
        api_managing_books:
            contexts:
                - App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext

                - App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext
                - App\\Tests\\Behat\\Context\\Setup\\BookContext

                - App\\Tests\\Behat\\Context\\Transform\\BookContext
                - App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext

                - App\\Tests\\Behat\\Context\\Api\\ManagingBooksContext
            filters:
                tags: "@managing_books&&@api"
\`\`\`
`,title:"Suites",level:1,content:`# Suites

Nous pouvons ainsi créer une suite \`api_managing_books\`:

\`\`\`yaml {all|3|4|5|7-8|10-11|12-13|15}
default:
    suites:
        api_managing_books:
            contexts:
                - App\\Tests\\Behat\\Context\\Hook\\DoctrineORMContext

                - App\\Tests\\Behat\\Context\\Setup\\AdminSecurityContext
                - App\\Tests\\Behat\\Context\\Setup\\BookContext

                - App\\Tests\\Behat\\Context\\Transform\\BookContext
                - App\\Tests\\Behat\\Context\\Transform\\SharedStorageContext

                - App\\Tests\\Behat\\Context\\Api\\ManagingBooksContext
            filters:
                tags: "@managing_books&&@api"
\`\`\``,frontmatter:{title:"Suites"},index:0,start:0,end:22},inline:{raw:`---
src: ./pages/02_suites.md
---
`,content:"",frontmatter:{},index:2,start:44,end:48},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/02_suites.md",noteHTML:"",id:2,no:3},__clicksElements:[],__preloaded:!1}},{path:"4",name:"page-4",component:xv,meta:{title:"Contexts",srcSequence:"./pages/03_contexts.md",slide:{raw:null,title:"Contexts",level:1,content:`# Contexts

\`\`\`php
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Api;

use Behat\\Behat\\Context\\Context;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')] 
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\``,frontmatter:{title:"Contexts",srcSequence:"./pages/03_contexts.md"},index:3,start:0,end:20,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/03_contexts.md",raw:`# Contexts

\`\`\`php
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Api;

use Behat\\Behat\\Context\\Context;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')] 
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\`
`,title:"Contexts",level:1,content:`# Contexts

\`\`\`php
<?php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Api;

use Behat\\Behat\\Context\\Context;

final class ManagingBooksContext implements Context
{
    #[When('I want to browse books')] 
    public function iWantToBrowseBooks(): void
    {
        // [...]
    }
\`\`\``,frontmatter:{title:"Contexts"},index:0,start:0,end:20},inline:{raw:`---
src: ./pages/03_contexts.md
---
`,content:"",frontmatter:{},index:3,start:48,end:52},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/03_contexts.md",noteHTML:"",id:3,no:4},__clicksElements:[],__preloaded:!1}},{path:"5",name:"page-5",component:$v,meta:{title:"Browsing books",srcSequence:"./pages/04_browsing_books.md",slide:{raw:null,title:"Browsing books",level:1,content:`# Browsing books

\`\`\`gherkin {all|8|9|10|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{title:"Browsing books",srcSequence:"./pages/04_browsing_books.md"},index:4,start:0,end:21,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`# Browsing books

\`\`\`gherkin {all|8|9|10|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,title:"Browsing books",level:1,content:`# Browsing books

\`\`\`gherkin {all|8|9|10|14}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{title:"Browsing books"},index:0,start:0,end:21},inline:{raw:`---
src: ./pages/04_browsing_books.md
---
`,content:"",frontmatter:{},index:4,start:52,end:56},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:4,no:5},__clicksElements:[],__preloaded:!1}},{path:"6",name:"page-6",component:Mv,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
# Contexte de la gestion de books

\`\`\`php {all|6|7|11|12|14}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private ApiClientInterface $client,
        private ResponseCheckerInterface $responseChecker,
    ) {
    }
    
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
\`\`\`
`,title:"Contexte de la gestion de books",level:1,content:`# Contexte de la gestion de books

\`\`\`php {all|6|7|11|12|14}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private ApiClientInterface $client,
        private ResponseCheckerInterface $responseChecker,
    ) {
    }
    
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:5,start:22,end:43,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`
# Contexte de la gestion de books

\`\`\`php {all|6|7|11|12|14}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private ApiClientInterface $client,
        private ResponseCheckerInterface $responseChecker,
    ) {
    }
    
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
\`\`\`
`,title:"Contexte de la gestion de books",level:1,content:`# Contexte de la gestion de books

\`\`\`php {all|6|7|11|12|14}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    public function __construct(
        private ApiClientInterface $client,
        private ResponseCheckerInterface $responseChecker,
    ) {
    }
    
    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
\`\`\``,frontmatter:{},index:1,start:22,end:43},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:5,no:6},__clicksElements:[],__preloaded:!1}},{path:"7",name:"page-7",component:Nv,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
# Gestion des paths

\`\`\`php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Api;

final class Resources
{
    public const BOOKS = 'books';
}
\`\`\`
`,title:"Gestion des paths",level:1,content:`# Gestion des paths

\`\`\`php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Api;

final class Resources
{
    public const BOOKS = 'books';
}
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:6,start:44,end:59,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`
# Gestion des paths

\`\`\`php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Api;

final class Resources
{
    public const BOOKS = 'books';
}
\`\`\`
`,title:"Gestion des paths",level:1,content:`# Gestion des paths

\`\`\`php

declare(strict_types=1);

namespace App\\Tests\\Behat\\Context\\Api;

final class Resources
{
    public const BOOKS = 'books';
}
\`\`\``,frontmatter:{},index:2,start:44,end:59},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:6,no:7},__clicksElements:[],__preloaded:!1}},{path:"8",name:"page-8",component:jv,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:7,start:60,end:80,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {14|15}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{},index:3,start:60,end:80},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:7,no:8},__clicksElements:[],__preloaded:!1}},{path:"9",name:"page-9",component:Gv,meta:{transition:"fade",srcSequence:"./pages/04_browsing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/04_browsing_books.md"},index:8,start:80,end:98,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`---
transition: fade
---

\`\`\`php {10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
\`\`\`
`,content:`\`\`\`php {10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
\`\`\``,frontmatter:{transition:"fade"},index:4,start:80,end:98},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:8,no:9},__clicksElements:[],__preloaded:!1}},{path:"10",name:"page-10",component:zv,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`php {13-19|13|14|16}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }

    #[Then('there should be :amount books in the list')
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
\`\`\`
`,content:`\`\`\`php {13-19|13|14|16}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }

    #[Then('there should be :amount books in the list')
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:9,start:99,end:121,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`php {13-19|13|14|16}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }

    #[Then('there should be :amount books in the list')
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
\`\`\`
`,content:`\`\`\`php {13-19|13|14|16}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    / [...]

    #[When('I want to browse books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }

    #[Then('there should be :amount books in the list')
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
\`\`\``,frontmatter:{},index:5,start:99,end:121},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:9,no:10},__clicksElements:[],__preloaded:!1}},{path:"11",name:"page-11",component:Jv,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:10,start:122,end:142,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Browsing books
    In order to see all books in the admin panel
    As an Administrator
    I want to browse books

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui @api
    Scenario: Browsing books in the admin panel
        When I want to browse books
        Then there should be 2 books in the list
        And I should see the book "Shinning" in the list
\`\`\``,frontmatter:{},index:6,start:122,end:142},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:10,no:11},__clicksElements:[],__preloaded:!1}},{path:"12",name:"page-12",component:e1,meta:{transition:"fade",srcSequence:"./pages/04_browsing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7-11}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/04_browsing_books.md"},index:11,start:142,end:161,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`---
transition: fade
---

\`\`\`php {7-11}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
\`\`\`
`,content:`\`\`\`php {7-11}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }
}    
\`\`\``,frontmatter:{transition:"fade"},index:7,start:142,end:161},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:11,no:12},__clicksElements:[],__preloaded:!1}},{path:"13",name:"page-13",component:t1,meta:{srcSequence:"./pages/04_browsing_books.md",slide:{raw:`
\`\`\`php {13-20|13|14|16-19}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
}
\`\`\`
`,content:`\`\`\`php {13-20|13|14|16-19}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/04_browsing_books.md"},index:12,start:162,end:187,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",raw:`
\`\`\`php {13-20|13|14|16-19}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
}
\`\`\`
`,content:`\`\`\`php {13-20|13|14|16-19}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('there should be :amount books in the list')]
    public function thereShouldBeBooksInTheList(int $amount): void
    {
        Assert::same($this->responseChecker->countCollectionItems($this->client->getLastResponse()), $amount);
    }

    #[Then('I should see the book :name in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
}
\`\`\``,frontmatter:{},index:8,start:162,end:187},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/04_browsing_books.md",noteHTML:"",id:12,no:13},__clicksElements:[],__preloaded:!1}},{path:"14",name:"page-14",component:r1,meta:{title:"Adding books",srcSequence:"./pages/05_adding_books.md",slide:{raw:null,title:"Adding books",level:1,content:`# Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|11|12}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{title:"Adding books",srcSequence:"./pages/05_adding_books.md"},index:13,start:0,end:22,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`# Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|11|12}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,title:"Adding books",level:1,content:`# Adding books

\`\`\`gherkin {all|1,10|2-5|7-8|11|12}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{title:"Adding books"},index:0,start:0,end:22},inline:{raw:`---
src: ./pages/05_adding_books.md
---
`,content:"",frontmatter:{},index:5,start:56,end:60},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:13,no:14},__clicksElements:[],__preloaded:!1}},{path:"15",name:"page-15",component:p1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook()
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook()
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:14,start:23,end:39,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook()
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook()
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
}
\`\`\``,frontmatter:{},index:1,start:23,end:39},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:14,no:15},__clicksElements:[],__preloaded:!1}},{path:"16",name:"page-16",component:h1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:15,start:40,end:61,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`
\`\`\`gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {12|13}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{},index:2,start:40,end:61},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:15,no:16},__clicksElements:[],__preloaded:!1}},{path:"17",name:"page-17",component:m1,meta:{transition:"fade",srcSequence:"./pages/05_adding_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {all|7|8|10-12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10-12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/05_adding_books.md"},index:16,start:61,end:84,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`---
transition: fade
---

\`\`\`php {all|7|8|10-12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10-12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:3,start:61,end:84},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:16,no:17},__clicksElements:[],__preloaded:!1}},{path:"18",name:"page-18",component:b1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:17,start:85,end:106,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`
\`\`\`gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {13|14}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{},index:4,start:85,end:106},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:17,no:18},__clicksElements:[],__preloaded:!1}},{path:"19",name:"page-19",component:k1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:18,start:107,end:125,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:5,start:107,end:125},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:18,no:19},__clicksElements:[],__preloaded:!1}},{path:"20",name:"page-20",component:D1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:19,start:126,end:147,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`
\`\`\`gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {14|15}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{},index:6,start:126,end:147},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:19,no:20},__clicksElements:[],__preloaded:!1}},{path:"21",name:"page-21",component:I1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should be notified that it has been successfully created')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyCreated(): void
    {
        Assert::true(
            $this->responseChecker->isCreationSuccessful($this->client->getLastResponse()),
            'Book could not be created',
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should be notified that it has been successfully created')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyCreated(): void
    {
        Assert::true(
            $this->responseChecker->isCreationSuccessful($this->client->getLastResponse()),
            'Book could not be created',
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:20,start:148,end:169,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should be notified that it has been successfully created')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyCreated(): void
    {
        Assert::true(
            $this->responseChecker->isCreationSuccessful($this->client->getLastResponse()),
            'Book could not be created',
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should be notified that it has been successfully created')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyCreated(): void
    {
        Assert::true(
            $this->responseChecker->isCreationSuccessful($this->client->getLastResponse()),
            'Book could not be created',
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:7,start:148,end:169},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:20,no:21},__clicksElements:[],__preloaded:!1}},{path:"22",name:"page-22",component:$1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:21,start:170,end:191,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Adding a new book
    In order to create new book
    As an Administrator
    I want to add a book in the admin panel

    Background:
        Given I am logged in as an administrator

    @ui @api
    Scenario: Adding a new book
        Given I want to create a new book
        When I specify its name as "Shinning"
        And I add it
        Then I should be notified that it has been successfully created
        And the book "Shinning" should appear in the list

\`\`\``,frontmatter:{},index:8,start:170,end:191},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:21,no:22},__clicksElements:[],__preloaded:!1}},{path:"23",name:"page-23",component:O1,meta:{srcSequence:"./pages/05_adding_books.md",slide:{raw:`
\`\`\`php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/05_adding_books.md"},index:22,start:192,end:214,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",raw:`
\`\`\`php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
   // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    public function iShouldSeeTheBookInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:9,start:192,end:214},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/05_adding_books.md",noteHTML:"",id:22,no:23},__clicksElements:[],__preloaded:!1}},{path:"24",name:"page-24",component:L1,meta:{title:"Editing books",srcSequence:"./pages/06_editing_books.md",slide:{raw:null,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {all|1,11|2-5|7-9|12|13}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{title:"Editing books",srcSequence:"./pages/06_editing_books.md"},index:23,start:0,end:25,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`# Editing books

\`\`\`gherkin {all|1,11|2-5|7-9|12|13}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`

`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {all|1,11|2-5|7-9|12|13}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{title:"Editing books"},index:0,start:0,end:25},inline:{raw:`---
src: ./pages/06_editing_books.md
---
`,content:"",frontmatter:{},index:6,start:60,end:64},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:23,no:24},__clicksElements:[],__preloaded:!1}},{path:"25",name:"page-25",component:q1,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->client->buildUpdateRequest(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->client->buildUpdateRequest(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:24,start:26,end:44,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->client->buildUpdateRequest(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('/^I want to edit (this book)$/')]
    public function iWantToEditThisBook(Book $book): void
    {
        $this->client->buildUpdateRequest(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:1,start:26,end:44},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:24,no:25},__clicksElements:[],__preloaded:!1}},{path:"26",name:"page-26",component:G1,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
# Editing books

\`\`\`gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:25,start:45,end:70,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`
# Editing books

\`\`\`gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {13|14}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{},index:2,start:45,end:70},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:25,no:26},__clicksElements:[],__preloaded:!1}},{path:"27",name:"page-27",component:z1,meta:{transition:"fade",srcSequence:"./pages/06_editing_books.md",slide:{raw:`---
transition: fade
---


\`\`\`php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    #[When('I change its name to :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    #[When('I change its name to :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/06_editing_books.md"},index:26,start:70,end:95,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`---
transition: fade
---


\`\`\`php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    #[When('I change its name to :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I specify its name as :name')]
    #[When('I change its name to :name')]
    public function iSpecifyItsNameAs(?string $name = null): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:3,start:70,end:95},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:26,no:27},__clicksElements:[],__preloaded:!1}},{path:"28",name:"page-28",component:Q1,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
# Editing books

\`\`\`gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:27,start:96,end:121,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`
# Editing books

\`\`\`gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,title:"Editing books",level:1,content:`# Editing books

\`\`\`gherkin {14|15}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{},index:4,start:96,end:121},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:27,no:28},__clicksElements:[],__preloaded:!1}},{path:"29",name:"page-29",component:nD,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->client->update();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->client->update();
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:28,start:122,end:140,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->client->update();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[When('I save my changes')]
    public function iSaveMyChanges(): void
    {
        $this->client->update();
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:5,start:122,end:140},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:28,no:29},__clicksElements:[],__preloaded:!1}},{path:"30",name:"page-30",component:oD,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:29,start:141,end:164,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`
\`\`\`gherkin {15|16}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,content:`\`\`\`gherkin {15|16}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{},index:6,start:141,end:164},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:29,no:30},__clicksElements:[],__preloaded:!1}},{path:"31",name:"page-31",component:rD,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
     #[Then('I should be notified that it has been successfully edited')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyEdited(): void
    {
        Assert::true(
            $this->responseChecker->isUpdateSuccessful($this->client->getLastResponse()),
            'Book could not be edited',
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
     #[Then('I should be notified that it has been successfully edited')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyEdited(): void
    {
        Assert::true(
            $this->responseChecker->isUpdateSuccessful($this->client->getLastResponse()),
            'Book could not be edited',
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:30,start:165,end:186,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`
\`\`\`php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
     #[Then('I should be notified that it has been successfully edited')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyEdited(): void
    {
        Assert::true(
            $this->responseChecker->isUpdateSuccessful($this->client->getLastResponse()),
            'Book could not be edited',
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
     #[Then('I should be notified that it has been successfully edited')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyEdited(): void
    {
        Assert::true(
            $this->responseChecker->isUpdateSuccessful($this->client->getLastResponse()),
            'Book could not be edited',
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:7,start:165,end:186},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:30,no:31},__clicksElements:[],__preloaded:!1}},{path:"32",name:"page-32",component:pD,meta:{srcSequence:"./pages/06_editing_books.md",slide:{raw:`
\`\`\`gherkin {16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,content:`\`\`\`gherkin {16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{srcSequence:"./pages/06_editing_books.md"},index:31,start:187,end:210,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`
\`\`\`gherkin {16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\`
`,content:`\`\`\`gherkin {16|17}
@managing_books
Feature: Editing a book
    In order to change information about a book
    As an Administrator
    I want to be able to edit a book

    Background:
        Given there is a book with name "Shinning"
        And I am logged in as an administrator

    @ui @api
    Scenario: Renaming a book
        When I want to edit this book
        And I change its name to "Carrie"
        And I save my changes
        Then I should be notified that it has been successfully edited
        And this book with name "Carrie" should appear in the list


\`\`\``,frontmatter:{},index:8,start:187,end:210},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:31,no:32},__clicksElements:[],__preloaded:!1}},{path:"33",name:"page-33",component:hD,meta:{transition:"fade",srcSequence:"./pages/06_editing_books.md",slide:{raw:`---
transition: fade
---

\`\`\`php {all|7|8|9}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    #[Then('this book with name :name should appear in the list')]
    public function theBookShouldAppearInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|9}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    #[Then('this book with name :name should appear in the list')]
    public function theBookShouldAppearInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/06_editing_books.md"},index:32,start:210,end:236,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",raw:`---
transition: fade
---

\`\`\`php {all|7|8|9}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    #[Then('this book with name :name should appear in the list')]
    public function theBookShouldAppearInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|9}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]
    
    #[Then('I should see the book :name in the list')]
    #[Then('the book :name should appear in the list')]
    #[Then('this book with name :name should appear in the list')]
    public function theBookShouldAppearInTheList(string $name): void
    {
        Assert::true(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s does not exist', $name),
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:9,start:210,end:236},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/06_editing_books.md",noteHTML:"",id:32,no:33},__clicksElements:[],__preloaded:!1}},{path:"34",name:"page-34",component:gD,meta:{title:"Deleting books",srcSequence:"./pages/07_deleting_books.md",slide:{raw:null,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {all|3-5|7-10|14}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{title:"Deleting books",srcSequence:"./pages/07_deleting_books.md"},index:33,start:0,end:23,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",raw:`# Deleting books

\`\`\`gherkin {all|3-5|7-10|14}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {all|3-5|7-10|14}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{title:"Deleting books"},index:0,start:0,end:23},inline:{raw:`---
src: ./pages/07_deleting_books.md
---
`,content:"",frontmatter:{},index:7,start:64,end:68},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",noteHTML:"",id:33,no:34},__clicksElements:[],__preloaded:!1}},{path:"35",name:"page-35",component:BD,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
\`\`\`php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->index(Resources::BOOKS);
    }
}

\`\`\`
`,content:`\`\`\`php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->index(Resources::BOOKS);
    }
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:34,start:24,end:42,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",raw:`
\`\`\`php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->index(Resources::BOOKS);
    }
}

\`\`\`
`,content:`\`\`\`php {all|7|8}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[When('I want to browse books')]
    #[Given('I am browsing books')]
    public function iWantToBrowseBooks(): void
    {
        $this->client->index(Resources::BOOKS);
    }
}

\`\`\``,frontmatter:{},index:1,start:24,end:42},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",noteHTML:"",id:34,no:35},__clicksElements:[],__preloaded:!1}},{path:"36",name:"page-36",component:vD,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
# Deleting books

\`\`\`gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:35,start:43,end:67,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",raw:`
# Deleting books

\`\`\`gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {14|15}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{},index:2,start:43,end:67},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",noteHTML:"",id:35,no:36},__clicksElements:[],__preloaded:!1}},{path:"37",name:"page-37",component:xD,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
\`\`\`php {all|7|8|10}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->client->delete(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->client->delete(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:36,start:68,end:87,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",raw:`
\`\`\`php {all|7|8|10}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->client->delete(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {all|7|8|10}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]
    
    #[When('I delete book with name :name')]
    public function iDeleteBookWithName(string $name): void
    {
        $this->client->delete(Resources::BOOKS, (string) $book->getId());
    }
    
    // [...]
}

\`\`\``,frontmatter:{},index:3,start:68,end:87},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",noteHTML:"",id:36,no:37},__clicksElements:[],__preloaded:!1}},{path:"38",name:"page-38",component:$D,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
# Deleting books

\`\`\`gherkin {15|16}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {15|16}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:37,start:88,end:112,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",raw:`
# Deleting books

\`\`\`gherkin {15|16}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {15|16}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{},index:4,start:88,end:112},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",noteHTML:"",id:37,no:38},__clicksElements:[],__preloaded:!1}},{path:"39",name:"page-39",component:OD,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
\`\`\`php {all||7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('I should be notified that it has been successfully deleted')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyDeleted(): void
    {
        Assert::true(
            $this->responseChecker->isDeletionSuccessful($this->client->getLastResponse()),
            'Book could not be deleted',
        );
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {all||7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('I should be notified that it has been successfully deleted')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyDeleted(): void
    {
        Assert::true(
            $this->responseChecker->isDeletionSuccessful($this->client->getLastResponse()),
            'Book could not be deleted',
        );
    }
    
    // [...]
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:38,start:113,end:135,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",raw:`
\`\`\`php {all||7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('I should be notified that it has been successfully deleted')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyDeleted(): void
    {
        Assert::true(
            $this->responseChecker->isDeletionSuccessful($this->client->getLastResponse()),
            'Book could not be deleted',
        );
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {all||7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('I should be notified that it has been successfully deleted')]
    public function iShouldBeNotifiedThatItHasBeenSuccessfullyDeleted(): void
    {
        Assert::true(
            $this->responseChecker->isDeletionSuccessful($this->client->getLastResponse()),
            'Book could not be deleted',
        );
    }
    
    // [...]
}

\`\`\``,frontmatter:{},index:5,start:113,end:135},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",noteHTML:"",id:38,no:39},__clicksElements:[],__preloaded:!1}},{path:"40",name:"page-40",component:LD,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
# Deleting books

\`\`\`gherkin {16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:39,start:136,end:160,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",raw:`
# Deleting books

\`\`\`gherkin {16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\`
`,title:"Deleting books",level:1,content:`# Deleting books

\`\`\`gherkin {16|17}
@managing_books
Feature: Deleting a book
    In order to get rid of deprecated books
    As an Administrator
    I want to be able to delete a book

    Background:
        Given there is a book with name "Shinning"
        And there is also a book with name "Carrie"
        And I am logged in as an administrator

    @ui
    Scenario: Deleting a book
        Given I am browsing books
        When I delete book with name "Shinning"
        Then I should be notified that it has been successfully deleted
        And there should not be "Shinning" book anymore

\`\`\``,frontmatter:{},index:6,start:136,end:160},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",noteHTML:"",id:39,no:40},__clicksElements:[],__preloaded:!1}},{path:"41",name:"page-41",component:qD,meta:{srcSequence:"./pages/07_deleting_books.md",slide:{raw:`
\`\`\`php {all|7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        Assert::false(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s exists, but it should not', $name),
        );
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {all|7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        Assert::false(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s exists, but it should not', $name),
        );
    }
    
    // [...]
}

\`\`\``,frontmatter:{srcSequence:"./pages/07_deleting_books.md"},index:40,start:161,end:183,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",raw:`
\`\`\`php {all|7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        Assert::false(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s exists, but it should not', $name),
        );
    }
    
    // [...]
}

\`\`\`
`,content:`\`\`\`php {all|7|8|10-13}
// src tests/Behat/Context/Setup/BookContext.php

final class BookContext implements Context
{
    // [...]

    #[Then('there should not be :name book anymore')
    public function thereShouldNotBeBookAnymore(string $name): void
    {
        Assert::false(
            $this->responseChecker->hasItemWithValue($this->client->index(Resources::BOOKS), 'name', $name),
            sprintf('Book with name %s exists, but it should not', $name),
        );
    }
    
    // [...]
}

\`\`\``,frontmatter:{},index:7,start:161,end:183},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/07_deleting_books.md",noteHTML:"",id:40,no:41},__clicksElements:[],__preloaded:!1}},{path:"42",name:"page-42",component:GD,meta:{title:"Books validation",srcSequence:"./pages/08_books_validation.md",slide:{raw:null,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {all|3-5|7-8|11|12}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{title:"Books validation",srcSequence:"./pages/08_books_validation.md"},index:41,start:0,end:21,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`# Books validation

\`\`\`gherkin {all|3-5|7-8|11|12}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {all|3-5|7-8|11|12}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{title:"Books validation"},index:0,start:0,end:21},inline:{raw:`---
src: ./pages/08_books_validation.md
---
`,content:"",frontmatter:{},index:8,start:68,end:72},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:41,no:42},__clicksElements:[],__preloaded:!1}},{path:"43",name:"page-43",component:zD,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
\`\`\`php {all|7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:42,start:22,end:40,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`
\`\`\`php {all|7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Given('I want to create a new book')]
    public function iWantToCreateANewBook(): void
    {
        $this->client->buildCreateRequest(Resources::BOOKS);
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:1,start:22,end:40},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:42,no:43},__clicksElements:[],__preloaded:!1}},{path:"44",name:"page-44",component:QD,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
# Books validation

\`\`\`gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:43,start:41,end:63,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`
# Books validation

\`\`\`gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {12|13}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{},index:2,start:41,end:63},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:43,no:44},__clicksElements:[],__preloaded:!1}},{path:"45",name:"page-45",component:n7,meta:{transition:"fade",srcSequence:"./pages/08_books_validation.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7|8|9|11-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7|8|9|11-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/08_books_validation.md"},index:44,start:63,end:87,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`---
transition: fade
---

\`\`\`php {7|8|9|11-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7|8|9|11-13}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I specify its name as :name')]
    #[When('I do not specify any name')]
    public function iSpecifyItsNameAs(string $name): void
    {
        if (null !== $name) {
            $this->client->addRequestData('name', $name);
        }
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:3,start:63,end:87},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:44,no:45},__clicksElements:[],__preloaded:!1}},{path:"46",name:"page-46",component:l7,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
# Books validation

\`\`\`gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:45,start:88,end:110,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`
# Books validation

\`\`\`gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {13|14}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{},index:4,start:88,end:110},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:45,no:46},__clicksElements:[],__preloaded:!1}},{path:"47",name:"page-47",component:i7,meta:{transition:"fade",srcSequence:"./pages/08_books_validation.md",slide:{raw:`---
transition: fade
---

\`\`\`php {7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade",srcSequence:"./pages/08_books_validation.md"},index:46,start:110,end:131,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`---
transition: fade
---

\`\`\`php {7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{transition:"fade"},index:5,start:110,end:131},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:46,no:47},__clicksElements:[],__preloaded:!1}},{path:"48",name:"page-48",component:u7,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
\`\`\`php {7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:47,start:132,end:150,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`
\`\`\`php {7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {7}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[When('I (try to) add it')]
    public function iAddIt(): void
    {
        $this->client->create();
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:6,start:132,end:150},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:47,no:48},__clicksElements:[],__preloaded:!1}},{path:"49",name:"page-49",component:y7,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
# Books validation

\`\`\`gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:48,start:151,end:173,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`
# Books validation

\`\`\`gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\`
`,title:"Books validation",level:1,content:`# Books validation

\`\`\`gherkin {14|15}
@managing_books
Feature: Books validation
    In order to avoid making mistakes when managing a book
    As a Project manager
    I want to be prevented from adding or editing it without specifying required fields

    Background:
        Given I am logged in as an administrator

    @ui
    Scenario: Trying to add a new book without specifying its name
        When I want to create a new book
        And I do not specify any name
        And I try to add it
        Then I should be notified that name is required

\`\`\``,frontmatter:{},index:7,start:151,end:173},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:48,no:49},__clicksElements:[],__preloaded:!1}},{path:"50",name:"page-50",component:A7,meta:{srcSequence:"./pages/08_books_validation.md",slide:{raw:`
\`\`\`php {all|7|8|10|11|12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::contains(
            $this->responseChecker->getError($this->client->getLastResponse()),
            sprintf('%s: This value should not be blank.', $element),
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10|11|12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::contains(
            $this->responseChecker->getError($this->client->getLastResponse()),
            sprintf('%s: This value should not be blank.', $element),
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{srcSequence:"./pages/08_books_validation.md"},index:49,start:174,end:195,source:{filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",raw:`
\`\`\`php {all|7|8|10|11|12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::contains(
            $this->responseChecker->getError($this->client->getLastResponse()),
            sprintf('%s: This value should not be blank.', $element),
        );
    }
    
    // [...]
}
\`\`\`
`,content:`\`\`\`php {all|7|8|10|11|12}
// tests/Behat/Context/Api/ManagingBooksContext.php

final class ManagingBooksContext implements Context
{
    // [...]

    #[Then('I should be notified that :element is required')] 
    public function iShouldBeNotifiedThatElementIsRequired(string $element): void
    {
        Assert::contains(
            $this->responseChecker->getError($this->client->getLastResponse()),
            sprintf('%s: This value should not be blank.', $element),
        );
    }
    
    // [...]
}
\`\`\``,frontmatter:{},index:8,start:174,end:195},filepath:"/home/runner/work/api-with-behat-formation/api-with-behat-formation/pages/08_books_validation.md",noteHTML:"",id:49,no:50},__clicksElements:[],__preloaded:!1}},{path:"51",component:V_,meta:{layout:"end"}}],Ze=b7,so=[{name:"play",path:"/",component:hk,children:[...Ze]},{name:"print",path:"/print",component:W_},{path:"",redirect:{path:"/1"}},{path:"/:pathMatch(.*)",redirect:{path:"/1"}}];{let n=function(s){if(!no.remote||no.remote===s.query.password)return!0;if(no.remote&&s.query.password===void 0){const t=prompt("Enter password");if(no.remote===t)return!0}return s.params.no?{path:`/${s.params.no}`}:{path:""}};so.push({path:"/presenter/print",component:()=>$s(()=>import("./PresenterPrint-bfbfce2b.js"),["assets/PresenterPrint-bfbfce2b.js","assets/NoteDisplay-948839a1.js"])}),so.push({name:"notes",path:"/notes",component:()=>$s(()=>import("./NotesView-de4d6885.js"),["assets/NotesView-de4d6885.js","assets/NoteDisplay-948839a1.js"]),beforeEnter:n}),so.push({name:"presenter",path:"/presenter/:no",component:()=>$s(()=>import("./Presenter-f46aa85b.js"),["assets/Presenter-f46aa85b.js","assets/NoteDisplay-948839a1.js","assets/DrawingControls-93729927.js","assets/Presenter-aa6741a8.css"]),beforeEnter:n}),so.push({path:"/presenter",redirect:{path:"/presenter/1"}})}const bn=VB({history:jb("/api-with-behat-formation/"),routes:so});function B7(n,s,{mode:t="replace"}={}){return S({get(){const o=bn.currentRoute.value.query[n];return o==null?s??null:Array.isArray(o)?o.filter(Boolean):o},set(o){sn(()=>{bn[v(t)]({query:{...bn.currentRoute.value.query,[n]:o}})})}})}const Dh=z(0);sn(()=>{bn.afterEach(async()=>{await sn(),Dh.value+=1})});const wh=z(0),Pn=S(()=>bn.currentRoute.value),Mt=S(()=>Pn.value.query.print!==void 0),C7=S(()=>Pn.value.query.print==="clicks"),as=S(()=>Pn.value.query.embedded!==void 0),gn=S(()=>Pn.value.path.startsWith("/presenter")),k7=S(()=>Pn.value.path.startsWith("/notes")),uo=S(()=>Mt.value&&!C7.value),kr=S(()=>Pn.value.query.password),_7=S(()=>!gn.value&&(!$e.remote||kr.value===$e.remote)),xp=B7("clicks","0"),xh=S(()=>Ze.length-1),v7=S(()=>Pn.value.path),Ue=S(()=>parseInt(v7.value.split(/\//g).slice(-1)[0])||1);S(()=>sa(Ue.value));const dn=S(()=>Ze.find(n=>n.path===`${Ue.value}`));S(()=>{var n,s,t;return(t=(s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.slide)==null?void 0:t.id});S(()=>{var n,s;return((s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.layout)||(Ue.value===1?"cover":"default")});const Ia=S(()=>Ze.find(n=>n.path===`${Math.min(Ze.length,Ue.value+1)}`)),D7=S(()=>Ze.find(n=>n.path===`${Math.max(1,Ue.value-1)}`)),w7=S(()=>{var n,s;return Dh.value,((s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.__clicksElements)||[]}),On=S({get(){if(uo.value)return 99999;let n=+(xp.value||0);return isNaN(n)&&(n=0),n},set(n){xp.value=n.toString()}}),Ml=S(()=>{var n,s;return+(((s=(n=dn.value)==null?void 0:n.meta)==null?void 0:s.clicks)??w7.value.length)}),x7=S(()=>Ue.value<Ze.length-1||On.value<Ml.value),I7=S(()=>Ue.value>1||On.value>0),S7=S(()=>Ze.filter(n=>{var s,t;return(t=(s=n.meta)==null?void 0:s.slide)==null?void 0:t.title}).reduce((n,s)=>(Bi(n,s),n),[])),E7=S(()=>Ci(S7.value,dn.value));S(()=>ki(E7.value));const $7=S(()=>P7(wh.value,dn.value,D7.value));Be(dn,(n,s)=>{wh.value=Number(n==null?void 0:n.path)-Number(s==null?void 0:s.path)});function Ts(){Ml.value<=On.value?$o():On.value+=1}async function Fs(){On.value<=0?await To():On.value-=1}function sa(n){return gn.value?`/presenter/${n}`:`/${n}`}function $o(){const n=Math.min(Ze.length,Ue.value+1);return Pt(n)}async function To(n=!0){const s=Math.max(1,Ue.value-1);await Pt(s),n&&Ml.value&&bn.replace({query:{...Pn.value.query,clicks:Ml.value}})}function Pt(n,s){return bn.push({path:sa(n),query:{...Pn.value.query,clicks:s}})}function T7(n){const s=z(0),{direction:t,distanceX:o,distanceY:l}=ab(n,{onSwipeStart(r){r.pointerType==="touch"&&(Io.value||(s.value=rr()))},onSwipeEnd(r){if(r.pointerType!=="touch"||!s.value||Io.value)return;const i=Math.abs(o.value),c=Math.abs(l.value);i/window.innerWidth>.3||i>100?t.value===cs.LEFT?Ts():Fs():(c/window.innerHeight>.4||c>200)&&(t.value===cs.DOWN?To():$o())}})}async function _r(){const{saveAs:n}=await $s(()=>import("./FileSaver.min-17c85779.js").then(s=>s.F),[]);n($d($e.download)?$e.download:$e.exportFilename?`${$e.exportFilename}.pdf`:"/api-with-behat-formation/slidev-exported.pdf",`${$e.title}.pdf`)}async function F7(n){var s,t;if(n==null){const o=(t=(s=dn.value)==null?void 0:s.meta)==null?void 0:t.slide;if(!(o!=null&&o.filepath))return!1;n=`${o.filepath}:${o.start}`}return await fetch(`/__open-in-editor?file=${encodeURIComponent(n)}`),!0}function Bi(n,s,t=1){var l,r,i,c,p;const o=(r=(l=s.meta)==null?void 0:l.slide)==null?void 0:r.level;o&&o>t&&n.length>0?Bi(n[n.length-1].children,s,t+1):n.push({children:[],level:t,path:s.path,hideInToc:Boolean((i=s.meta)==null?void 0:i.hideInToc),title:(p=(c=s.meta)==null?void 0:c.slide)==null?void 0:p.title})}function Ci(n,s,t=!1,o){return n.map(l=>{const r={...l,active:l.path===(s==null?void 0:s.path),hasActiveParent:t};return r.children.length>0&&(r.children=Ci(r.children,s,r.active||r.hasActiveParent,r)),o&&(r.active||r.activeParent)&&(o.activeParent=!0),r})}function ki(n,s=1){return n.filter(t=>!t.hideInToc).map(t=>({...t,children:ki(t.children,s+1)}))}const O7={"slide-left":"slide-left | slide-right","slide-right":"slide-right | slide-left","slide-up":"slide-up | slide-down","slide-down":"slide-down | slide-up"};function M7(n,s=!1){if(!n||(typeof n=="string"&&(n={name:n}),!n.name))return;let t=n.name.includes("|")?n.name:O7[n.name]||n.name;if(t.includes("|")){const[o,l]=t.split("|").map(r=>r.trim());t=s?l:o}if(t)return{...n,name:t}}function P7(n,s,t){var l,r;let o=n>0?(l=t==null?void 0:t.meta)==null?void 0:l.transition:(r=s==null?void 0:s.meta)==null?void 0:r.transition;return o||(o=$e.transition),M7(o,n<0)}function R7(){const n=$e.titleTemplate.replace("%s",$e.title||"Slidev");ri({title:n}),_A($e.htmlAttrs),MA(`${n} - shared`),NA(`${n} - drawings`);const s=`${location.origin}_${SA()}`;function t(){k7.value||!gn.value&&!IA.includes(location.host.split(":")[0])||(gn.value?(Gt("page",+Ue.value),Gt("clicks",On.value)):(Gt("viewerPage",+Ue.value),Gt("viewerClicks",On.value)),Gt("lastUpdate",{id:s,type:gn.value?"presenter":"viewer",time:new Date().getTime()}))}bn.afterEach(t),Be(On,t),PA(o=>{var r;bn.currentRoute.value.path.match(/^\/(\d+|presenter)\/?/)&&((r=o.lastUpdate)==null?void 0:r.type)==="presenter"&&(+o.page!=+Ue.value||+On.value!=+o.clicks)&&bn.replace({path:sa(o.page),query:{...bn.currentRoute.value.query,clicks:o.clicks||0}})})}const L7=Re({__name:"App",setup(n){return N(Y),R7(),(s,t)=>{const o=Dl("RouterView"),l=Dl("StarportCarrier");return D(),ne(Oe,null,[M(o),M(l)],64)}}}),N7=J(L7,[["__file","/home/runner/work/api-with-behat-formation/api-with-behat-formation/node_modules/@slidev/client/App.vue"]]);function Sa(n){return n!==null&&typeof n=="object"}function vr(n,s,t=".",o){if(!Sa(s))return vr(n,{},t,o);const l=Object.assign({},s);for(const r in n){if(r==="__proto__"||r==="constructor")continue;const i=n[r];i!=null&&(o&&o(l,r,i,t)||(Array.isArray(i)&&Array.isArray(l[r])?l[r]=[...i,...l[r]]:Sa(i)&&Sa(l[r])?l[r]=vr(i,l[r],(t?`${t}.`:"")+r.toString(),o):l[r]=i))}return l}function W7(n){return(...s)=>s.reduce((t,o)=>vr(t,o,"",n),{})}const q7=W7(),Ih=1/60*1e3,j7=typeof performance<"u"?()=>performance.now():()=>Date.now(),Sh=typeof window<"u"?n=>window.requestAnimationFrame(n):n=>setTimeout(()=>n(j7()),Ih);function V7(n){let s=[],t=[],o=0,l=!1,r=!1;const i=new WeakSet,c={schedule:(p,u=!1,d=!1)=>{const h=d&&l,f=h?s:t;return u&&i.add(p),f.indexOf(p)===-1&&(f.push(p),h&&l&&(o=s.length)),p},cancel:p=>{const u=t.indexOf(p);u!==-1&&t.splice(u,1),i.delete(p)},process:p=>{if(l){r=!0;return}if(l=!0,[s,t]=[t,s],t.length=0,o=s.length,o)for(let u=0;u<o;u++){const d=s[u];d(p),i.has(d)&&(c.schedule(d),n())}l=!1,r&&(r=!1,c.process(p))}};return c}const H7=40;let Dr=!0,Fo=!1,wr=!1;const $t={delta:0,timestamp:0},Ho=["read","update","preRender","render","postRender"],ta=Ho.reduce((n,s)=>(n[s]=V7(()=>Fo=!0),n),{}),xr=Ho.reduce((n,s)=>{const t=ta[s];return n[s]=(o,l=!1,r=!1)=>(Fo||U7(),t.schedule(o,l,r)),n},{}),G7=Ho.reduce((n,s)=>(n[s]=ta[s].cancel,n),{});Ho.reduce((n,s)=>(n[s]=()=>ta[s].process($t),n),{});const K7=n=>ta[n].process($t),Eh=n=>{Fo=!1,$t.delta=Dr?Ih:Math.max(Math.min(n-$t.timestamp,H7),1),$t.timestamp=n,wr=!0,Ho.forEach(K7),wr=!1,Fo&&(Dr=!1,Sh(Eh))},U7=()=>{Fo=!0,Dr=!0,wr||Sh(Eh)},$h=()=>$t;function Th(n,s){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,o=Object.getOwnPropertySymbols(n);l<o.length;l++)s.indexOf(o[l])<0&&Object.prototype.propertyIsEnumerable.call(n,o[l])&&(t[o[l]]=n[o[l]]);return t}var _i=function(){},Oo=function(){};_i=function(n,s){!n&&typeof console<"u"&&console.warn(s)},Oo=function(n,s){if(!n)throw new Error(s)};const Ir=(n,s,t)=>Math.min(Math.max(t,n),s),Ea=.001,z7=.01,Ip=10,Y7=.05,Z7=1;function J7({duration:n=800,bounce:s=.25,velocity:t=0,mass:o=1}){let l,r;_i(n<=Ip*1e3,"Spring duration must be 10 seconds or less");let i=1-s;i=Ir(Y7,Z7,i),n=Ir(z7,Ip,n/1e3),i<1?(l=u=>{const d=u*i,h=d*n,f=d-t,m=Sr(u,i),y=Math.exp(-h);return Ea-f/m*y},r=u=>{const h=u*i*n,f=h*t+t,m=Math.pow(i,2)*Math.pow(u,2)*n,y=Math.exp(-h),A=Sr(Math.pow(u,2),i);return(-l(u)+Ea>0?-1:1)*((f-m)*y)/A}):(l=u=>{const d=Math.exp(-u*n),h=(u-t)*n+1;return-Ea+d*h},r=u=>{const d=Math.exp(-u*n),h=(t-u)*(n*n);return d*h});const c=5/n,p=X7(l,r,c);if(n=n*1e3,isNaN(p))return{stiffness:100,damping:10,duration:n};{const u=Math.pow(p,2)*o;return{stiffness:u,damping:i*2*Math.sqrt(o*u),duration:n}}}const Q7=12;function X7(n,s,t){let o=t;for(let l=1;l<Q7;l++)o=o-n(o)/s(o);return o}function Sr(n,s){return n*Math.sqrt(1-s*s)}const e9=["duration","bounce"],n9=["stiffness","damping","mass"];function Sp(n,s){return s.some(t=>n[t]!==void 0)}function s9(n){let s=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!Sp(n,n9)&&Sp(n,e9)){const t=J7(n);s=Object.assign(Object.assign(Object.assign({},s),t),{velocity:0,mass:1}),s.isResolvedFromDuration=!0}return s}function vi(n){var{from:s=0,to:t=1,restSpeed:o=2,restDelta:l}=n,r=Th(n,["from","to","restSpeed","restDelta"]);const i={done:!1,value:s};let{stiffness:c,damping:p,mass:u,velocity:d,duration:h,isResolvedFromDuration:f}=s9(r),m=Ep,y=Ep;function A(){const b=d?-(d/1e3):0,_=t-s,C=p/(2*Math.sqrt(c*u)),k=Math.sqrt(c/u)/1e3;if(l===void 0&&(l=Math.min(Math.abs(t-s)/100,.4)),C<1){const w=Sr(k,C);m=$=>{const R=Math.exp(-C*k*$);return t-R*((b+C*k*_)/w*Math.sin(w*$)+_*Math.cos(w*$))},y=$=>{const R=Math.exp(-C*k*$);return C*k*R*(Math.sin(w*$)*(b+C*k*_)/w+_*Math.cos(w*$))-R*(Math.cos(w*$)*(b+C*k*_)-w*_*Math.sin(w*$))}}else if(C===1)m=w=>t-Math.exp(-k*w)*(_+(b+k*_)*w);else{const w=k*Math.sqrt(C*C-1);m=$=>{const R=Math.exp(-C*k*$),H=Math.min(w*$,300);return t-R*((b+C*k*_)*Math.sinh(H)+w*_*Math.cosh(H))/w}}}return A(),{next:b=>{const _=m(b);if(f)i.done=b>=h;else{const C=y(b)*1e3,k=Math.abs(C)<=o,w=Math.abs(t-_)<=l;i.done=k&&w}return i.value=i.done?t:_,i},flipTarget:()=>{d=-d,[s,t]=[t,s],A()}}}vi.needsInterpolation=(n,s)=>typeof n=="string"||typeof s=="string";const Ep=n=>0,Fh=(n,s,t)=>{const o=s-n;return o===0?1:(t-n)/o},Di=(n,s,t)=>-t*n+t*s+n,Oh=(n,s)=>t=>Math.max(Math.min(t,s),n),ho=n=>n%1?Number(n.toFixed(5)):n,Mo=/(-)?([\d]*\.?[\d])+/g,Er=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,t9=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Go(n){return typeof n=="string"}const Ko={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},fo=Object.assign(Object.assign({},Ko),{transform:Oh(0,1)}),ll=Object.assign(Object.assign({},Ko),{default:1}),wi=n=>({test:s=>Go(s)&&s.endsWith(n)&&s.split(" ").length===1,parse:parseFloat,transform:s=>`${s}${n}`}),js=wi("deg"),yo=wi("%"),be=wi("px"),$p=Object.assign(Object.assign({},yo),{parse:n=>yo.parse(n)/100,transform:n=>yo.transform(n*100)}),xi=(n,s)=>t=>Boolean(Go(t)&&t9.test(t)&&t.startsWith(n)||s&&Object.prototype.hasOwnProperty.call(t,s)),Mh=(n,s,t)=>o=>{if(!Go(o))return o;const[l,r,i,c]=o.match(Mo);return{[n]:parseFloat(l),[s]:parseFloat(r),[t]:parseFloat(i),alpha:c!==void 0?parseFloat(c):1}},Qs={test:xi("hsl","hue"),parse:Mh("hue","saturation","lightness"),transform:({hue:n,saturation:s,lightness:t,alpha:o=1})=>"hsla("+Math.round(n)+", "+yo.transform(ho(s))+", "+yo.transform(ho(t))+", "+ho(fo.transform(o))+")"},o9=Oh(0,255),$a=Object.assign(Object.assign({},Ko),{transform:n=>Math.round(o9(n))}),ws={test:xi("rgb","red"),parse:Mh("red","green","blue"),transform:({red:n,green:s,blue:t,alpha:o=1})=>"rgba("+$a.transform(n)+", "+$a.transform(s)+", "+$a.transform(t)+", "+ho(fo.transform(o))+")"};function l9(n){let s="",t="",o="",l="";return n.length>5?(s=n.substr(1,2),t=n.substr(3,2),o=n.substr(5,2),l=n.substr(7,2)):(s=n.substr(1,1),t=n.substr(2,1),o=n.substr(3,1),l=n.substr(4,1),s+=s,t+=t,o+=o,l+=l),{red:parseInt(s,16),green:parseInt(t,16),blue:parseInt(o,16),alpha:l?parseInt(l,16)/255:1}}const $r={test:xi("#"),parse:l9,transform:ws.transform},mn={test:n=>ws.test(n)||$r.test(n)||Qs.test(n),parse:n=>ws.test(n)?ws.parse(n):Qs.test(n)?Qs.parse(n):$r.parse(n),transform:n=>Go(n)?n:n.hasOwnProperty("red")?ws.transform(n):Qs.transform(n)},Ph="${c}",Rh="${n}";function a9(n){var s,t,o,l;return isNaN(n)&&Go(n)&&((t=(s=n.match(Mo))===null||s===void 0?void 0:s.length)!==null&&t!==void 0?t:0)+((l=(o=n.match(Er))===null||o===void 0?void 0:o.length)!==null&&l!==void 0?l:0)>0}function Lh(n){typeof n=="number"&&(n=`${n}`);const s=[];let t=0;const o=n.match(Er);o&&(t=o.length,n=n.replace(Er,Ph),s.push(...o.map(mn.parse)));const l=n.match(Mo);return l&&(n=n.replace(Mo,Rh),s.push(...l.map(Ko.parse))),{values:s,numColors:t,tokenised:n}}function Nh(n){return Lh(n).values}function Wh(n){const{values:s,numColors:t,tokenised:o}=Lh(n),l=s.length;return r=>{let i=o;for(let c=0;c<l;c++)i=i.replace(c<t?Ph:Rh,c<t?mn.transform(r[c]):ho(r[c]));return i}}const r9=n=>typeof n=="number"?0:n;function i9(n){const s=Nh(n);return Wh(n)(s.map(r9))}const Uo={test:a9,parse:Nh,createTransformer:Wh,getAnimatableNone:i9},c9=new Set(["brightness","contrast","saturate","opacity"]);function p9(n){let[s,t]=n.slice(0,-1).split("(");if(s==="drop-shadow")return n;const[o]=t.match(Mo)||[];if(!o)return n;const l=t.replace(o,"");let r=c9.has(s)?1:0;return o!==t&&(r*=100),s+"("+r+l+")"}const u9=/([a-z-]*)\(.*?\)/g,Tr=Object.assign(Object.assign({},Uo),{getAnimatableNone:n=>{const s=n.match(u9);return s?s.map(p9).join(" "):n}});function Ta(n,s,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(s-n)*6*t:t<1/2?s:t<2/3?n+(s-n)*(2/3-t)*6:n}function Tp({hue:n,saturation:s,lightness:t,alpha:o}){n/=360,s/=100,t/=100;let l=0,r=0,i=0;if(!s)l=r=i=t;else{const c=t<.5?t*(1+s):t+s-t*s,p=2*t-c;l=Ta(p,c,n+1/3),r=Ta(p,c,n),i=Ta(p,c,n-1/3)}return{red:Math.round(l*255),green:Math.round(r*255),blue:Math.round(i*255),alpha:o}}const d9=(n,s,t)=>{const o=n*n,l=s*s;return Math.sqrt(Math.max(0,t*(l-o)+o))},h9=[$r,ws,Qs],Fp=n=>h9.find(s=>s.test(n)),Op=n=>`'${n}' is not an animatable color. Use the equivalent color code instead.`,qh=(n,s)=>{let t=Fp(n),o=Fp(s);Oo(!!t,Op(n)),Oo(!!o,Op(s));let l=t.parse(n),r=o.parse(s);t===Qs&&(l=Tp(l),t=ws),o===Qs&&(r=Tp(r),o=ws);const i=Object.assign({},l);return c=>{for(const p in i)p!=="alpha"&&(i[p]=d9(l[p],r[p],c));return i.alpha=Di(l.alpha,r.alpha,c),t.transform(i)}},f9=n=>typeof n=="number",y9=(n,s)=>t=>s(n(t)),jh=(...n)=>n.reduce(y9);function Vh(n,s){return f9(n)?t=>Di(n,s,t):mn.test(n)?qh(n,s):Gh(n,s)}const Hh=(n,s)=>{const t=[...n],o=t.length,l=n.map((r,i)=>Vh(r,s[i]));return r=>{for(let i=0;i<o;i++)t[i]=l[i](r);return t}},m9=(n,s)=>{const t=Object.assign(Object.assign({},n),s),o={};for(const l in t)n[l]!==void 0&&s[l]!==void 0&&(o[l]=Vh(n[l],s[l]));return l=>{for(const r in o)t[r]=o[r](l);return t}};function Mp(n){const s=Uo.parse(n),t=s.length;let o=0,l=0,r=0;for(let i=0;i<t;i++)o||typeof s[i]=="number"?o++:s[i].hue!==void 0?r++:l++;return{parsed:s,numNumbers:o,numRGB:l,numHSL:r}}const Gh=(n,s)=>{const t=Uo.createTransformer(s),o=Mp(n),l=Mp(s);return o.numHSL===l.numHSL&&o.numRGB===l.numRGB&&o.numNumbers>=l.numNumbers?jh(Hh(o.parsed,l.parsed),t):(_i(!0,`Complex values '${n}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),i=>`${i>0?s:n}`)},g9=(n,s)=>t=>Di(n,s,t);function A9(n){if(typeof n=="number")return g9;if(typeof n=="string")return mn.test(n)?qh:Gh;if(Array.isArray(n))return Hh;if(typeof n=="object")return m9}function b9(n,s,t){const o=[],l=t||A9(n[0]),r=n.length-1;for(let i=0;i<r;i++){let c=l(n[i],n[i+1]);if(s){const p=Array.isArray(s)?s[i]:s;c=jh(p,c)}o.push(c)}return o}function B9([n,s],[t]){return o=>t(Fh(n,s,o))}function C9(n,s){const t=n.length,o=t-1;return l=>{let r=0,i=!1;if(l<=n[0]?i=!0:l>=n[o]&&(r=o-1,i=!0),!i){let p=1;for(;p<t&&!(n[p]>l||p===o);p++);r=p-1}const c=Fh(n[r],n[r+1],l);return s[r](c)}}function Kh(n,s,{clamp:t=!0,ease:o,mixer:l}={}){const r=n.length;Oo(r===s.length,"Both input and output ranges must be the same length"),Oo(!o||!Array.isArray(o)||o.length===r-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[r-1]&&(n=[].concat(n),s=[].concat(s),n.reverse(),s.reverse());const i=b9(s,o,l),c=r===2?B9(n,i):C9(n,i);return t?p=>c(Ir(n[0],n[r-1],p)):c}const oa=n=>s=>1-n(1-s),Ii=n=>s=>s<=.5?n(2*s)/2:(2-n(2*(1-s)))/2,k9=n=>s=>Math.pow(s,n),Uh=n=>s=>s*s*((n+1)*s-n),_9=n=>{const s=Uh(n);return t=>(t*=2)<1?.5*s(t):.5*(2-Math.pow(2,-10*(t-1)))},zh=1.525,v9=4/11,D9=8/11,w9=9/10,Yh=n=>n,Si=k9(2),x9=oa(Si),Zh=Ii(Si),Jh=n=>1-Math.sin(Math.acos(n)),Qh=oa(Jh),I9=Ii(Qh),Ei=Uh(zh),S9=oa(Ei),E9=Ii(Ei),$9=_9(zh),T9=4356/361,F9=35442/1805,O9=16061/1805,Pl=n=>{if(n===1||n===0)return n;const s=n*n;return n<v9?7.5625*s:n<D9?9.075*s-9.9*n+3.4:n<w9?T9*s-F9*n+O9:10.8*n*n-20.52*n+10.72},M9=oa(Pl),P9=n=>n<.5?.5*(1-Pl(1-n*2)):.5*Pl(n*2-1)+.5;function R9(n,s){return n.map(()=>s||Zh).splice(0,n.length-1)}function L9(n){const s=n.length;return n.map((t,o)=>o!==0?o/(s-1):0)}function N9(n,s){return n.map(t=>t*s)}function yl({from:n=0,to:s=1,ease:t,offset:o,duration:l=300}){const r={done:!1,value:n},i=Array.isArray(s)?s:[n,s],c=N9(o&&o.length===i.length?o:L9(i),l);function p(){return Kh(c,i,{ease:Array.isArray(t)?t:R9(i,t)})}let u=p();return{next:d=>(r.value=u(d),r.done=d>=l,r),flipTarget:()=>{i.reverse(),u=p()}}}function W9({velocity:n=0,from:s=0,power:t=.8,timeConstant:o=350,restDelta:l=.5,modifyTarget:r}){const i={done:!1,value:s};let c=t*n;const p=s+c,u=r===void 0?p:r(p);return u!==p&&(c=u-s),{next:d=>{const h=-c*Math.exp(-d/o);return i.done=!(h>l||h<-l),i.value=i.done?u:u+h,i},flipTarget:()=>{}}}const Pp={keyframes:yl,spring:vi,decay:W9};function q9(n){if(Array.isArray(n.to))return yl;if(Pp[n.type])return Pp[n.type];const s=new Set(Object.keys(n));return s.has("ease")||s.has("duration")&&!s.has("dampingRatio")?yl:s.has("dampingRatio")||s.has("stiffness")||s.has("mass")||s.has("damping")||s.has("restSpeed")||s.has("restDelta")?vi:yl}function Xh(n,s,t=0){return n-s-t}function j9(n,s,t=0,o=!0){return o?Xh(s+-n,s,t):s-(n-s)+t}function V9(n,s,t,o){return o?n>=s+t:n<=-t}const H9=n=>{const s=({delta:t})=>n(t);return{start:()=>xr.update(s,!0),stop:()=>G7.update(s)}};function ef(n){var s,t,{from:o,autoplay:l=!0,driver:r=H9,elapsed:i=0,repeat:c=0,repeatType:p="loop",repeatDelay:u=0,onPlay:d,onStop:h,onComplete:f,onRepeat:m,onUpdate:y}=n,A=Th(n,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:b}=A,_,C=0,k=A.duration,w,$=!1,R=!0,H;const E=q9(A);!((t=(s=E).needsInterpolation)===null||t===void 0)&&t.call(s,o,b)&&(H=Kh([0,100],[o,b],{clamp:!1}),o=0,b=100);const j=E(Object.assign(Object.assign({},A),{from:o,to:b}));function ee(){C++,p==="reverse"?(R=C%2===0,i=j9(i,k,u,R)):(i=Xh(i,k,u),p==="mirror"&&j.flipTarget()),$=!1,m&&m()}function he(){_.stop(),f&&f()}function Z(Fe){if(R||(Fe=-Fe),i+=Fe,!$){const Se=j.next(Math.max(0,i));w=Se.value,H&&(w=H(w)),$=R?Se.done:i<=0}y==null||y(w),$&&(C===0&&(k??(k=i)),C<c?V9(i,k,u,R)&&ee():he())}function _e(){d==null||d(),_=r(Z),_.start()}return l&&_e(),{stop:()=>{h==null||h(),_.stop()}}}function nf(n,s){return s?n*(1e3/s):0}function G9({from:n=0,velocity:s=0,min:t,max:o,power:l=.8,timeConstant:r=750,bounceStiffness:i=500,bounceDamping:c=10,restDelta:p=1,modifyTarget:u,driver:d,onUpdate:h,onComplete:f,onStop:m}){let y;function A(k){return t!==void 0&&k<t||o!==void 0&&k>o}function b(k){return t===void 0?o:o===void 0||Math.abs(t-k)<Math.abs(o-k)?t:o}function _(k){y==null||y.stop(),y=ef(Object.assign(Object.assign({},k),{driver:d,onUpdate:w=>{var $;h==null||h(w),($=k.onUpdate)===null||$===void 0||$.call(k,w)},onComplete:f,onStop:m}))}function C(k){_(Object.assign({type:"spring",stiffness:i,damping:c,restDelta:p},k))}if(A(n))C({from:n,velocity:s,to:b(n)});else{let k=l*s+n;typeof u<"u"&&(k=u(k));const w=b(k),$=w===t?-1:1;let R,H;const E=j=>{R=H,H=j,s=nf(j-R,$h().delta),($===1&&j>w||$===-1&&j<w)&&C({from:j,to:w,velocity:s})};_({type:"decay",from:n,velocity:s,timeConstant:r,power:l,restDelta:p,modifyTarget:u,onUpdate:A(k)?E:void 0})}return{stop:()=>y==null?void 0:y.stop()}}const sf=(n,s)=>1-3*s+3*n,tf=(n,s)=>3*s-6*n,of=n=>3*n,Rl=(n,s,t)=>((sf(s,t)*n+tf(s,t))*n+of(s))*n,lf=(n,s,t)=>3*sf(s,t)*n*n+2*tf(s,t)*n+of(s),K9=1e-7,U9=10;function z9(n,s,t,o,l){let r,i,c=0;do i=s+(t-s)/2,r=Rl(i,o,l)-n,r>0?t=i:s=i;while(Math.abs(r)>K9&&++c<U9);return i}const Y9=8,Z9=.001;function J9(n,s,t,o){for(let l=0;l<Y9;++l){const r=lf(s,t,o);if(r===0)return s;const i=Rl(s,t,o)-n;s-=i/r}return s}const ml=11,al=1/(ml-1);function Q9(n,s,t,o){if(n===s&&t===o)return Yh;const l=new Float32Array(ml);for(let i=0;i<ml;++i)l[i]=Rl(i*al,n,t);function r(i){let c=0,p=1;const u=ml-1;for(;p!==u&&l[p]<=i;++p)c+=al;--p;const d=(i-l[p])/(l[p+1]-l[p]),h=c+d*al,f=lf(h,n,t);return f>=Z9?J9(i,h,n,t):f===0?h:z9(i,c,c+al,n,t)}return i=>i===0||i===1?i:Rl(r(i),s,o)}const Fa={};class X9{constructor(){this.subscriptions=new Set}add(s){return this.subscriptions.add(s),()=>this.subscriptions.delete(s)}notify(s,t,o){if(this.subscriptions.size)for(const l of this.subscriptions)l(s,t,o)}clear(){this.subscriptions.clear()}}const Rp=n=>!isNaN(parseFloat(n));class e0{constructor(s){this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new X9,this.canTrackVelocity=!1,this.updateAndNotify=t=>{this.prev=this.current,this.current=t;const{delta:o,timestamp:l}=$h();this.lastUpdated!==l&&(this.timeDelta=o,this.lastUpdated=l),xr.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>xr.postRender(this.velocityCheck),this.velocityCheck=({timestamp:t})=>{this.canTrackVelocity||(this.canTrackVelocity=Rp(this.current)),t!==this.lastUpdated&&(this.prev=this.current)},this.prev=this.current=s,this.canTrackVelocity=Rp(this.current)}onChange(s){return this.updateSubscribers.add(s)}clearListeners(){this.updateSubscribers.clear()}set(s){this.updateAndNotify(s)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?nf(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(s){return this.stop(),new Promise(t=>{const{stop:o}=s(t);this.stopAnimation=o}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function n0(n){return new e0(n)}const{isArray:s0}=Array;function t0(){const n=z({}),s=o=>{const l=r=>{n.value[r]&&(n.value[r].stop(),n.value[r].destroy(),delete n.value[r])};o?s0(o)?o.forEach(l):l(o):Object.keys(n.value).forEach(l)},t=(o,l,r)=>{if(n.value[o])return n.value[o];const i=n0(l);return i.onChange(c=>r[o]=c),n.value[o]=i,i};return r8(s),{motionValues:n,get:t,stop:s}}const o0=n=>Array.isArray(n),Vs=()=>({type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}),Oa=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}),l0=n=>({type:"spring",stiffness:550,damping:n===0?100:30,restDelta:.01,restSpeed:10}),Ma=()=>({type:"keyframes",ease:"linear",duration:300}),a0=n=>({type:"keyframes",duration:800,values:n}),Lp={default:l0,x:Vs,y:Vs,z:Vs,rotate:Vs,rotateX:Vs,rotateY:Vs,rotateZ:Vs,scaleX:Oa,scaleY:Oa,scale:Oa,backgroundColor:Ma,color:Ma,opacity:Ma},af=(n,s)=>{let t;return o0(s)?t=a0:t=Lp[n]||Lp.default,{to:s,...t(s)}},Np={...Ko,transform:Math.round},rf={color:mn,backgroundColor:mn,outlineColor:mn,fill:mn,stroke:mn,borderColor:mn,borderTopColor:mn,borderRightColor:mn,borderBottomColor:mn,borderLeftColor:mn,borderWidth:be,borderTopWidth:be,borderRightWidth:be,borderBottomWidth:be,borderLeftWidth:be,borderRadius:be,radius:be,borderTopLeftRadius:be,borderTopRightRadius:be,borderBottomRightRadius:be,borderBottomLeftRadius:be,width:be,maxWidth:be,height:be,maxHeight:be,size:be,top:be,right:be,bottom:be,left:be,padding:be,paddingTop:be,paddingRight:be,paddingBottom:be,paddingLeft:be,margin:be,marginTop:be,marginRight:be,marginBottom:be,marginLeft:be,rotate:js,rotateX:js,rotateY:js,rotateZ:js,scale:ll,scaleX:ll,scaleY:ll,scaleZ:ll,skew:js,skewX:js,skewY:js,distance:be,translateX:be,translateY:be,translateZ:be,x:be,y:be,z:be,perspective:be,transformPerspective:be,opacity:fo,originX:$p,originY:$p,originZ:be,zIndex:Np,filter:Tr,WebkitFilter:Tr,fillOpacity:fo,strokeOpacity:fo,numOctaves:Np},$i=n=>rf[n],cf=(n,s)=>s&&typeof n=="number"&&s.transform?s.transform(n):n;function r0(n,s){let t=$i(n);return t!==Tr&&(t=Uo),t.getAnimatableNone?t.getAnimatableNone(s):void 0}const i0={linear:Yh,easeIn:Si,easeInOut:Zh,easeOut:x9,circIn:Jh,circInOut:I9,circOut:Qh,backIn:Ei,backInOut:E9,backOut:S9,anticipate:$9,bounceIn:M9,bounceInOut:P9,bounceOut:Pl},Wp=n=>{if(Array.isArray(n)){const[s,t,o,l]=n;return Q9(s,t,o,l)}else if(typeof n=="string")return i0[n];return n},c0=n=>Array.isArray(n)&&typeof n[0]!="number",qp=(n,s)=>n==="zIndex"?!1:!!(typeof s=="number"||Array.isArray(s)||typeof s=="string"&&Uo.test(s)&&!s.startsWith("url("));function p0(n){return Array.isArray(n.to)&&n.to[0]===null&&(n.to=[...n.to],n.to[0]=n.from),n}function u0({ease:n,times:s,delay:t,...o}){const l={...o};return s&&(l.offset=s),n&&(l.ease=c0(n)?n.map(Wp):Wp(n)),t&&(l.elapsed=-t),l}function d0(n,s,t){return Array.isArray(s.to)&&(n.duration||(n.duration=800)),p0(s),h0(n)||(n={...n,...af(t,s.to)}),{...s,...u0(n)}}function h0({delay:n,repeat:s,repeatType:t,repeatDelay:o,from:l,...r}){return!!Object.keys(r).length}function f0(n,s){return n[s]||n.default||n}function y0(n,s,t,o,l){const r=f0(o,n);let i=r.from===null||r.from===void 0?s.get():r.from;const c=qp(n,t);i==="none"&&c&&typeof t=="string"&&(i=r0(n,t));const p=qp(n,i);function u(h){const f={from:i,to:t,velocity:o.velocity?o.velocity:s.getVelocity(),onUpdate:m=>s.set(m)};return r.type==="inertia"||r.type==="decay"?G9({...f,...r}):ef({...d0(r,f,n),onUpdate:m=>{f.onUpdate(m),r.onUpdate&&r.onUpdate(m)},onComplete:()=>{o.onComplete&&o.onComplete(),l&&l(),h&&h()}})}function d(h){return s.set(t),o.onComplete&&o.onComplete(),l&&l(),h&&h(),{stop:()=>{}}}return!p||!c||r.type===!1?d:u}function m0(){const{motionValues:n,stop:s,get:t}=t0();return{motionValues:n,stop:s,push:(l,r,i,c={},p)=>{const u=i[l],d=t(l,u,i);if(c&&c.immediate){d.set(r);return}const h=y0(l,d,r,c,p);d.start(h)}}}function g0(n,s={},{motionValues:t,push:o,stop:l}=m0()){const r=v(s),i=z(!1);Be(t,h=>{i.value=Object.values(h).filter(f=>f.isAnimating()).length>0},{immediate:!0,deep:!0});const c=h=>{if(!r||!r[h])throw new Error(`The variant ${h} does not exist.`);return r[h]},p=h=>(typeof h=="string"&&(h=c(h)),Promise.all(Object.entries(h).map(([f,m])=>{if(f!=="transition")return new Promise(y=>o(f,m,n,h.transition||af(f,h[f]),y))}).filter(Boolean)));return{isAnimating:i,apply:p,set:h=>{const f=ar(h)?h:c(h);Object.entries(f).forEach(([m,y])=>{m!=="transition"&&o(m,y,n,{immediate:!0})})},leave:async h=>{let f;if(r&&(r.leave&&(f=r.leave),!r.leave&&r.initial&&(f=r.initial)),!f){h();return}await p(f),h()},stop:l}}const Ti=typeof window<"u",A0=()=>Ti&&window.onpointerdown===null,b0=()=>Ti&&window.ontouchstart===null,B0=()=>Ti&&window.onmousedown===null;function C0({target:n,state:s,variants:t,apply:o}){const l=v(t),r=z(!1),i=z(!1),c=z(!1),p=S(()=>{let d=[];return l&&(l.hovered&&(d=[...d,...Object.keys(l.hovered)]),l.tapped&&(d=[...d,...Object.keys(l.tapped)]),l.focused&&(d=[...d,...Object.keys(l.focused)])),d}),u=S(()=>{const d={};Object.assign(d,s.value),r.value&&l.hovered&&Object.assign(d,l.hovered),i.value&&l.tapped&&Object.assign(d,l.tapped),c.value&&l.focused&&Object.assign(d,l.focused);for(const h in d)p.value.includes(h)||delete d[h];return d});l.hovered&&(Ce(n,"mouseenter",()=>r.value=!0),Ce(n,"mouseleave",()=>{r.value=!1,i.value=!1}),Ce(n,"mouseout",()=>{r.value=!1,i.value=!1})),l.tapped&&(B0()&&(Ce(n,"mousedown",()=>i.value=!0),Ce(n,"mouseup",()=>i.value=!1)),A0()&&(Ce(n,"pointerdown",()=>i.value=!0),Ce(n,"pointerup",()=>i.value=!1)),b0()&&(Ce(n,"touchstart",()=>i.value=!0),Ce(n,"touchend",()=>i.value=!1))),l.focused&&(Ce(n,"focus",()=>c.value=!0),Ce(n,"blur",()=>c.value=!1)),Be(u,o)}function k0({set:n,target:s,apply:t,variants:o,variant:l}){const r=v(o);Be(()=>s,()=>{r&&(r.initial&&n("initial"),r.enter&&(l.value="enter"))},{immediate:!0,flush:"pre"})}function _0({state:n,apply:s}){Be(n,t=>{t&&s(t)},{immediate:!0})}function v0({target:n,variants:s,variant:t}){const o=v(s);o&&(o.visible||o.visibleOnce)&&tb(n,([{isIntersecting:l}])=>{o.visible?l?t.value="visible":t.value="initial":o.visibleOnce&&(l&&t.value!=="visibleOnce"?t.value="visibleOnce":t.value||(t.value="initial"))})}function D0(n,s={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){s.lifeCycleHooks&&k0(n),s.syncVariants&&_0(n),s.visibilityHooks&&v0(n),s.eventListeners&&C0(n)}function pf(n={}){const s=He({...n}),t=z({});return Be(s,()=>{const o={};for(const[l,r]of Object.entries(s)){const i=$i(l),c=cf(r,i);o[l]=c}t.value=o},{immediate:!0,deep:!0}),{state:s,style:t}}function Fi(n,s){Be(()=>wn(n),t=>{t&&s(t)},{immediate:!0})}const w0={x:"translateX",y:"translateY",z:"translateZ"};function uf(n={},s=!0){const t=He({...n}),o=z("");return Be(t,l=>{let r="",i=!1;if(s&&(l.x||l.y||l.z)){const c=[l.x||0,l.y||0,l.z||0].map(be.transform).join(",");r+=`translate3d(${c}) `,i=!0}for(const[c,p]of Object.entries(l)){if(s&&(c==="x"||c==="y"||c==="z"))continue;const u=$i(c),d=cf(p,u);r+=`${w0[c]||c}(${d}) `}s&&!i&&(r+="translateZ(0px) "),o.value=r.trim()},{immediate:!0,deep:!0}),{state:t,transform:o}}const x0=["","X","Y","Z"],I0=["perspective","translate","scale","rotate","skew"],df=["transformPerspective","x","y","z"];I0.forEach(n=>{x0.forEach(s=>{const t=n+s;df.push(t)})});const S0=new Set(df);function Oi(n){return S0.has(n)}const E0=new Set(["originX","originY","originZ"]);function hf(n){return E0.has(n)}function $0(n){const s={},t={};return Object.entries(n).forEach(([o,l])=>{Oi(o)||hf(o)?s[o]=l:t[o]=l}),{transform:s,style:t}}function ff(n){const{transform:s,style:t}=$0(n),{transform:o}=uf(s),{style:l}=pf(t);return o.value&&(l.value.transform=o.value),l.value}function T0(n,s){let t,o;const{state:l,style:r}=pf();return Fi(n,i=>{o=i;for(const c of Object.keys(rf))i.style[c]===null||i.style[c]===""||Oi(c)||hf(c)||(l[c]=i.style[c]);t&&Object.entries(t).forEach(([c,p])=>i.style[c]=p),s&&s(l)}),Be(r,i=>{if(!o){t=i;return}for(const c in i)o.style[c]=i[c]},{immediate:!0}),{style:l}}function F0(n){const s=n.trim().split(/\) |\)/);if(s.length===1)return{};const t=o=>o.endsWith("px")||o.endsWith("deg")?parseFloat(o):isNaN(Number(o))?Number(o):o;return s.reduce((o,l)=>{if(!l)return o;const[r,i]=l.split("("),p=i.split(",").map(d=>t(d.endsWith(")")?d.replace(")",""):d.trim())),u=p.length===1?p[0]:p;return{...o,[r]:u}},{})}function O0(n,s){Object.entries(F0(s)).forEach(([t,o])=>{const l=["x","y","z"];if(t==="translate3d"){if(o===0){l.forEach(r=>n[r]=0);return}o.forEach((r,i)=>n[l[i]]=r);return}if(o=parseFloat(o),t==="translateX"){n.x=o;return}if(t==="translateY"){n.y=o;return}if(t==="translateZ"){n.z=o;return}n[t]=o})}function M0(n,s){let t,o;const{state:l,transform:r}=uf();return Fi(n,i=>{o=i,i.style.transform&&O0(l,i.style.transform),t&&(i.style.transform=t),s&&s(l)}),Be(r,i=>{if(!o){t=i;return}o.style.transform=i},{immediate:!0}),{transform:l}}function P0(n,s){const t=He({}),o=i=>Object.entries(i).forEach(([c,p])=>t[c]=p),{style:l}=T0(n,o),{transform:r}=M0(n,o);return Be(t,i=>{Object.entries(i).forEach(([c,p])=>{const u=Oi(c)?r:l;u[c]&&u[c]===p||(u[c]=p)})},{immediate:!0,deep:!0}),Fi(n,()=>s&&o(s)),{motionProperties:t,style:l,transform:r}}function R0(n={}){const s=v(n),t=z();return{state:S(()=>{if(t.value)return s[t.value]}),variant:t}}function yf(n,s={},t){const{motionProperties:o}=P0(n),{variant:l,state:r}=R0(s),i=g0(o,s),c={target:n,variant:l,variants:s,state:r,motionProperties:o,...i};return D0(c,t),c}const L0=["initial","enter","leave","visible","visible-once","hovered","tapped","focused","delay"],N0=(n,s)=>{const t=n.props?n.props:n.data&&n.data.attrs?n.data.attrs:{};t&&(t.variants&&ar(t.variants)&&(s.value={...s.value,...t.variants}),L0.forEach(o=>{if(o==="delay"){if(t&&t[o]&&GA(t[o])){const l=t[o];s&&s.value&&(s.value.enter&&(s.value.enter.transition||(s.value.enter.transition={}),s.value.enter.transition={delay:l,...s.value.enter.transition}),s.value.visible&&(s.value.visible.transition||(s.value.visible.transition={}),s.value.visible.transition={delay:l,...s.value.visible.transition}),s.value.visibleOnce&&(s.value.visibleOnce.transition||(s.value.visibleOnce.transition={}),s.value.visibleOnce.transition={delay:l,...s.value.visibleOnce.transition}))}return}o==="visible-once"&&(o="visibleOnce"),t&&t[o]&&ar(t[o])&&(s.value[o]=t[o])}))},Pa=n=>({created:(t,o,l)=>{const r=o.value&&typeof o.value=="string"?o.value:l.key;r&&Fa[r]&&Fa[r].stop();const i=z(n||{});typeof o.value=="object"&&(i.value=o.value),N0(l,i);const c=yf(t,i);t.motionInstance=c,r&&(Fa[r]=c)},getSSRProps(t,o){let{initial:l}=t.value||o&&(o==null?void 0:o.props)||{};l=v(l);const r=q7((n==null?void 0:n.initial)||{},l||{});return!r||Object.keys(r).length===0?void 0:{style:ff(r)}}}),W0={initial:{opacity:0},enter:{opacity:1}},q0={initial:{opacity:0},visible:{opacity:1}},j0={initial:{opacity:0},visibleOnce:{opacity:1}},V0={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},H0={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},G0={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},K0={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},U0={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},z0={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Y0={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},Z0={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},J0={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},Q0={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},X0={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},ew={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},nw={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},sw={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},tw={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},ow={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},lw={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},aw={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},rw={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},iw={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},cw={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},pw={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},uw={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},dw={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},hw={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},fw={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},yw={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Fr={__proto__:null,fade:W0,fadeVisible:q0,fadeVisibleOnce:j0,pop:V0,popVisible:H0,popVisibleOnce:G0,rollBottom:nw,rollLeft:K0,rollRight:Y0,rollTop:Q0,rollVisibleBottom:sw,rollVisibleLeft:U0,rollVisibleOnceBottom:tw,rollVisibleOnceLeft:z0,rollVisibleOnceRight:J0,rollVisibleOnceTop:ew,rollVisibleRight:Z0,rollVisibleTop:X0,slideBottom:hw,slideLeft:ow,slideRight:rw,slideTop:pw,slideVisibleBottom:fw,slideVisibleLeft:lw,slideVisibleOnceBottom:yw,slideVisibleOnceLeft:aw,slideVisibleOnceRight:cw,slideVisibleOnceTop:dw,slideVisibleRight:iw,slideVisibleTop:uw},mw=Re({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(n){var c;const s=Jm(),t=He({});if(!n.is&&!s.default)return()=>xn("div",{});const o=S(()=>{let p;return n.preset&&(p=Fr[n.preset]),p}),l=S(()=>({initial:n.initial,enter:n.enter,leave:n.leave,visible:n.visible,visibleOnce:n.visibleOnce,hovered:n.hovered,tapped:n.tapped,focused:n.focused})),r=S(()=>{const p={...l.value,...o.value||{},...n.variants||{}};return n.delay&&(p.enter.transition={...p.enter.transition},p.enter.transition.delay=parseInt(n.delay)),p}),i=S(()=>{if(!n.is)return;let p=n.is;return typeof i.value=="string"&&!eu(p)&&(p=Dl(p)),p});if(((c=process==null?void 0:process.env)==null?void 0:c.NODE_ENV)==="development"||process!=null&&process.dev){const p=u=>{var d;(d=u.variants)!=null&&d.initial&&u.set("initial"),setTimeout(()=>{var h,f,m;(h=u.variants)!=null&&h.enter&&u.apply("enter"),(f=u.variants)!=null&&f.visible&&u.apply("visible"),(m=u.variants)!=null&&m.visibleOnce&&u.apply("visibleOnce")},10)};Zl(()=>Object.entries(t).forEach(([u,d])=>p(d)))}return{slots:s,component:i,motionConfig:r,instances:t}},render({slots:n,motionConfig:s,instances:t,component:o}){var c;const l=ff(s.initial||{}),r=(p,u)=>(p.props||(p.props={}),p.props.style=l,p.props.onVnodeMounted=({el:d})=>{const h=yf(d,s);t[u]=h},p);if(o){const p=xn(o,void 0,n);return r(p,0),p}return(((c=n.default)==null?void 0:c.call(n))||[]).map((p,u)=>r(p,u))}});function gw(n){const s="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",t="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",o=new RegExp(s.split("").join("|"),"g");return n.toString().replace(/[A-Z]/g,l=>`-${l}`).toLowerCase().replace(/\s+/g,"-").replace(o,l=>t.charAt(s.indexOf(l))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const Aw={install(n,s){if(n.directive("motion",Pa()),n.component("Motion",mw),!s||s&&!s.excludePresets)for(const t in Fr){const o=Fr[t];n.directive(`motion-${gw(t)}`,Pa(o))}if(s&&s.directives)for(const t in s.directives){const o=s.directives[t];o.initial,n.directive(`motion-${t}`,Pa(o))}}};var jp;const mo=typeof window<"u",bw=Object.prototype.toString,Bw=n=>bw.call(n)==="[object Object]";mo&&((jp=window==null?void 0:window.navigator)!=null&&jp.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Cw(n){return qr()?(cu(n),!0):!1}function kw(n){var s;const t=v(n);return(s=t==null?void 0:t.$el)!=null?s:t}const _w=mo?window:void 0,Or=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mr="__vueuse_ssr_handlers__";Or[Mr]=Or[Mr]||{};Or[Mr];function vw(n,s={}){const{immediate:t=!0,window:o=_w}=s,l=z(!1);let r=null;function i(){!l.value||!o||(n(),r=o.requestAnimationFrame(i))}function c(){!l.value&&o&&(l.value=!0,i())}function p(){l.value=!1,r!=null&&o&&(o.cancelAnimationFrame(r),r=null)}return t&&c(),Cw(p),{isActive:l,pause:p,resume:c}}var Vp;(function(n){n.UP="UP",n.RIGHT="RIGHT",n.DOWN="DOWN",n.LEFT="LEFT",n.NONE="NONE"})(Vp||(Vp={}));const la="vue-starport-injection",mf="vue-starport-options",Dw={duration:800,easing:"cubic-bezier(0.45, 0, 0.55, 1)",keepAlive:!1},gf={port:{type:String,required:!0},duration:{type:Number,required:!1},easing:{type:String,required:!1},keepAlive:{type:Boolean,required:!1,default:void 0},mountedProps:{type:Object,required:!1},initialProps:{type:Object,required:!1}};var ww=Object.defineProperty,Ll=Object.getOwnPropertySymbols,Af=Object.prototype.hasOwnProperty,bf=Object.prototype.propertyIsEnumerable,Hp=(n,s,t)=>s in n?ww(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,xw=(n,s)=>{for(var t in s||(s={}))Af.call(s,t)&&Hp(n,t,s[t]);if(Ll)for(var t of Ll(s))bf.call(s,t)&&Hp(n,t,s[t]);return n},Gp=(n,s)=>{var t={};for(var o in n)Af.call(n,o)&&s.indexOf(o)<0&&(t[o]=n[o]);if(n!=null&&Ll)for(var o of Ll(n))s.indexOf(o)<0&&bf.call(n,o)&&(t[o]=n[o]);return t};const Iw=Re({name:"StarportProxy",props:xw({props:{type:Object,default:()=>({})},component:{type:Object,required:!0}},gf),setup(n,s){const t=N(la),o=S(()=>t.getInstance(n.port,n.component)),l=z(),r=o.value.generateId(),i=z(!1);return o.value.isVisible||(o.value.land(),i.value=!0),dt(async()=>{if(o.value.el){console.error(`[Vue Starport] Multiple proxies of "${o.value.componentName}" with port "${n.port}" detected. The later one will be ignored.`);return}if(o.value.el=l.value,await sn(),i.value=!0,o.value.rect.update(),o.value.rect.width===0||o.value.rect.height===0){const c=o.value.rect.width===0?"width":"height";console.warn(`[Vue Starport] The proxy of component "${o.value.componentName}" (port "${n.port}") has no ${c} on initial render, have you set the size for it?`),console.warn("element:",o.value.el),console.warn("rect:",o.value.rect)}}),Wo(async()=>{o.value.rect.update(),o.value.liftOff(),o.value.el=void 0,i.value=!1,!o.value.options.keepAlive&&(await sn(),await sn(),!o.value.el&&t.dispose(o.value.port))}),Be(()=>n,async()=>{o.value.props&&await sn();const c=n,{props:p}=c,u=Gp(c,["props"]);o.value.props=p||{},o.value.setLocalOptions(u)},{deep:!0,immediate:!0}),()=>{const c=n,{initialProps:p,mountedProps:u}=c,d=Gp(c,["initialProps","mountedProps"]),h=re(d,(i.value?u:p)||{});return xn("div",re(h,{id:r,ref:l,"data-starport-proxy":o.value.componentId,"data-starport-landed":o.value.isLanded?"true":void 0,"data-starport-floating":o.value.isLanded?void 0:"true"}),s.slots.default?xn(s.slots.default):void 0)}}});var Sw=Object.defineProperty,Ew=Object.defineProperties,$w=Object.getOwnPropertyDescriptors,Kp=Object.getOwnPropertySymbols,Tw=Object.prototype.hasOwnProperty,Fw=Object.prototype.propertyIsEnumerable,Up=(n,s,t)=>s in n?Sw(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,Ow=(n,s)=>{for(var t in s||(s={}))Tw.call(s,t)&&Up(n,t,s[t]);if(Kp)for(var t of Kp(s))Fw.call(s,t)&&Up(n,t,s[t]);return n},Mw=(n,s)=>Ew(n,$w(s));const Pw=Re({name:"Starport",inheritAttrs:!0,props:gf,setup(n,s){const t=z(!1);return dt(()=>{if(t.value=!0,!N(la))throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.")}),()=>{var i,c;const o=(c=(i=s.slots).default)==null?void 0:c.call(i);if(!o)throw new Error("[Vue Starport] Slot is required to use <Starport>");if(o.length!==1)throw new Error(`[Vue Starport] <Starport> requires exactly one slot, but got ${o.length}`);const l=o[0];let r=l.type;return(!Bw(r)||Ps(r))&&(r={render(){return o}}),xn(Iw,Mw(Ow({},n),{key:n.port,component:Hl(r),props:l.props}))}}});function Rw(n){const s=He({height:0,width:0,left:0,top:0,update:o,listen:r,pause:i,margin:"0px",padding:"0px"}),t=mo?document.documentElement||document.body:void 0;function o(){if(!mo)return;const c=kw(n);if(!c)return;const{height:p,width:u,left:d,top:h}=c.getBoundingClientRect(),f=window.getComputedStyle(c),m=f.margin,y=f.padding;Object.assign(s,{height:p,width:u,left:d,top:t.scrollTop+h,margin:m,padding:y})}const l=vw(o,{immediate:!1});function r(){mo&&(o(),l.resume())}function i(){l.pause()}return s}let Lw=(n,s=21)=>(t=s)=>{let o="",l=t;for(;l--;)o+=n[Math.random()*n.length|0];return o};const zp=Lw("abcdefghijklmnopqrstuvwxyz",5);function Yp(n){return n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase().replace(/[^\w\d_-]/g,"")}function Nw(n){var s;return n.name||((s=n.__file)==null?void 0:s.split(/[\/\\.]/).slice(-2)[0])||""}var Ww=Object.defineProperty,Zp=Object.getOwnPropertySymbols,qw=Object.prototype.hasOwnProperty,jw=Object.prototype.propertyIsEnumerable,Jp=(n,s,t)=>s in n?Ww(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,Ra=(n,s)=>{for(var t in s||(s={}))qw.call(s,t)&&Jp(n,t,s[t]);if(Zp)for(var t of Zp(s))jw.call(s,t)&&Jp(n,t,s[t]);return n};function Vw(n,s,t={}){const o=Nw(s),l=Yp(o)||zp(),r=z(),i=z(null),c=z(!1),p=z(!1),u=Pf(!0),d=z({}),h=S(()=>Ra(Ra(Ra({},Dw),t),d.value)),f=z(0);let m;u.run(()=>{m=Rw(r),Be(r,async _=>{_&&(p.value=!0),await sn(),r.value||(p.value=!1)})});const y=Yp(n);function A(){return`starport-${l}-${y}-${zp()}`}const b=A();return He({el:r,id:b,port:n,props:i,rect:m,scope:u,isLanded:c,isVisible:p,options:h,liftOffTime:f,component:s,componentName:o,componentId:l,generateId:A,setLocalOptions(_={}){d.value=JSON.parse(JSON.stringify(_))},elRef(){return r},liftOff(){c.value&&(c.value=!1,f.value=Date.now(),m.listen())},land(){c.value||(c.value=!0,m.pause())}})}function Hw(n){const s=He(new Map);function t(l,r){let i=s.get(l);return i||(i=Vw(l,r,n),s.set(l,i)),i.component=r,i}function o(l){var r;(r=s.get(l))==null||r.scope.stop(),s.delete(l)}return{portMap:s,dispose:o,getInstance:t}}var Gw=Object.defineProperty,Kw=Object.defineProperties,Uw=Object.getOwnPropertyDescriptors,Qp=Object.getOwnPropertySymbols,zw=Object.prototype.hasOwnProperty,Yw=Object.prototype.propertyIsEnumerable,Xp=(n,s,t)=>s in n?Gw(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,Zw=(n,s)=>{for(var t in s||(s={}))zw.call(s,t)&&Xp(n,t,s[t]);if(Qp)for(var t of Qp(s))Yw.call(s,t)&&Xp(n,t,s[t]);return n},Jw=(n,s)=>Kw(n,Uw(s));const Qw=Re({name:"StarportCraft",props:{port:{type:String,required:!0},component:{type:Object,required:!0}},setup(n){const s=N(la);if(!s)throw new Error("[Vue Starport] Failed to find the carrier, all Starport components must be wrapped in a <StarportCarrier> component.");const t=S(()=>s.getInstance(n.port,n.component)),o=S(()=>{var i;return((i=t.value.el)==null?void 0:i.id)||t.value.id}),l=S(()=>{const i=Date.now()-t.value.liftOffTime,c=Math.max(0,t.value.options.duration-i),p=t.value.rect,u={position:"absolute",left:0,top:0,width:`${p.width}px`,height:`${p.height}px`,margin:p.margin,padding:p.padding,transform:`translate3d(${p.left}px,${p.top}px,0px)`};return!t.value.isVisible||!t.value.el?Jw(Zw({},u),{zIndex:-1,display:"none"}):(t.value.isLanded?u.display="none":Object.assign(u,{transitionProperty:"all",transitionDuration:`${c}ms`,transitionTimingFunction:t.value.options.easing}),u)}),r={onTransitionend(i){t.value.isLanded||console.warn(`[Vue Starport] Transition duration of component "${t.value.componentName}" is too short (${i.elapsedTime}s) that may cause animation glitches. Try to increase the duration of that component, or decrease the duration the Starport (current: ${t.value.options.duration/1e3}s).`)}};return()=>{const i=!!(t.value.isLanded&&t.value.el);return xn("div",{style:l.value,"data-starport-craft":t.value.componentId,"data-starport-landed":t.value.isLanded?"true":void 0,"data-starport-floating":t.value.isLanded?void 0:"true",onTransitionend:t.value.land},xn(Rm,{to:i?`#${o.value}`:"body",disabled:!i},xn(t.value.component,re(r,t.value.props))))}}}),Xw=Re({name:"StarportCarrier",setup(n,{slots:s}){const t=Hw(N(mf,{}));return En().appContext.app.provide(la,t),()=>{var l;return[(l=s.default)==null?void 0:l.call(s),Array.from(t.portMap.entries()).map(([r,{component:i}])=>xn(Qw,{key:r,port:r,component:i}))]}}});function e4(n={}){return{install(s){s.provide(mf,n),s.component("Starport",Pw),s.component("StarportCarrier",Xw)}}}function n4(n){function s(){document.documentElement.style.setProperty("--vh",`${window.innerHeight*.01}px`)}s(),window.addEventListener("resize",s),n.app.use(Aw),n.app.use(e4({keepAlive:!0}))}function kn(n,s,t){var o;return((o=n.instance)==null?void 0:o.$).provides[s]??t}function s4(){return{install(n){n.directive("click",{name:"v-click",mounted(s,t){var d,h,f,m;if(uo.value||(d=kn(t,ro))!=null&&d.value)return;const o=kn(t,zs),l=kn(t,ao),r=kn(t,or),i=t.modifiers.hide!==!1&&t.modifiers.hide!=null,c=t.modifiers.fade!==!1&&t.modifiers.fade!=null,p=((h=o==null?void 0:o.value)==null?void 0:h.length)||0,u=c?xA:ba;if(o&&!((f=o==null?void 0:o.value)!=null&&f.includes(s))&&o.value.push(s),t.value==null&&(t.value=o==null?void 0:o.value.length),!(r!=null&&r.value.has(t.value)))r==null||r.value.set(t.value,[s]);else if(!((m=r==null?void 0:r.value.get(t.value))!=null&&m.includes(s))){const y=(r==null?void 0:r.value.get(t.value))||[];r==null||r.value.set(t.value,[s].concat(y))}s==null||s.classList.toggle(Ks,!0),l&&Be(l,()=>{const y=(l==null?void 0:l.value)??0,A=t.value!=null?y>=t.value:y>p;s.classList.contains(Ba)||s.classList.toggle(u,!A),i!==!1&&i!==void 0&&s.classList.toggle(u,A),s.classList.toggle(Ht,!1);const b=r==null?void 0:r.value.get(y);b==null||b.forEach((_,C)=>{_.classList.toggle(sl,!1),C===b.length-1?_.classList.toggle(Ht,!0):_.classList.toggle(sl,!0)}),s.classList.contains(Ht)||s.classList.toggle(sl,A)},{immediate:!0})},unmounted(s,t){s==null||s.classList.toggle(Ks,!1);const o=kn(t,zs);o!=null&&o.value&&lr(o.value,s)}}),n.directive("after",{name:"v-after",mounted(s,t){var c,p;if(uo.value||(c=kn(t,ro))!=null&&c.value)return;const o=kn(t,zs),l=kn(t,ao),r=kn(t,or),i=o==null?void 0:o.value.length;t.value==null&&(t.value=o==null?void 0:o.value.length),r!=null&&r.value.has(t.value)?(p=r==null?void 0:r.value.get(t.value))==null||p.push(s):r==null||r.value.set(t.value,[s]),s==null||s.classList.toggle(Ks,!0),l&&Be(l,()=>{const u=(l.value??0)>=(t.value??i??0);s.classList.contains(Ba)||s.classList.toggle(ba,!u),s.classList.toggle(Ht,!1),s.classList.contains(Ht)||s.classList.toggle(sl,u)},{immediate:!0})},unmounted(s){s==null||s.classList.toggle(Ks,!0)}}),n.directive("click-hide",{name:"v-click-hide",mounted(s,t){var i,c,p;if(uo.value||(i=kn(t,ro))!=null&&i.value)return;const o=kn(t,zs),l=kn(t,ao),r=((c=o==null?void 0:o.value)==null?void 0:c.length)||0;o&&!((p=o==null?void 0:o.value)!=null&&p.includes(s))&&o.value.push(s),s==null||s.classList.toggle(Ks,!0),l&&Be(l,()=>{const u=(l==null?void 0:l.value)??0,d=t.value!=null?u>=t.value:u>r;s.classList.toggle(ba,d),s.classList.toggle(Ba,d)},{immediate:!0})},unmounted(s,t){s==null||s.classList.toggle(Ks,!1);const o=kn(t,zs);o!=null&&o.value&&lr(o.value,s)}})}}}function t4(n,s){const t=_h(n),o=vh(s,t.currentRoute,t.currentPage);return{nav:{...t,...o,downloadPDF:_r,next:Ts,nextSlide:$o,openInEditor:F7,prev:Fs,prevSlide:To},configs:$e,themeConfigs:S(()=>$e.themeConfig)}}function o4(){return{install(n){const s=t4(Pn,On);n.provide(Y,He(s))}}}const Lt=Og(N7);Lt.use(bn);Lt.use(vA());Lt.use(s4());Lt.use(o4());n4({app:Lt,router:bn});Lt.mount("#app");export{gi as $,IC as A,z as B,p4 as C,dn as D,ze as E,Oe as F,P3 as G,T7 as H,On as I,Ml as J,x7 as K,Ia as L,dt as M,He as N,i4 as O,u4 as P,Be as Q,T as R,dh as S,Te as T,un as U,Y3 as V,Io as W,wa as X,pk as Y,mi as Z,J as _,Y as a,Ue as a0,l4 as a1,a4 as a2,lk as a3,r5 as a4,r4 as a5,hs as a6,Jt as a7,Js as a8,Qn as a9,br as aa,_3 as ab,v3 as ac,D3 as ad,x3 as ae,ei as af,Ad as ag,d4 as ah,fn as ai,ol as aj,j5 as ak,Id as al,I3 as am,Wo as an,ri as b,$e as c,Re as d,By as e,ne as f,e as g,v as h,N as i,Ze as j,xh as k,a as l,M as m,tn as n,D as o,De as p,ci as q,qo as r,Gn as s,at as t,c4 as u,S as v,Ca as w,G as x,oh as y,FC as z};
