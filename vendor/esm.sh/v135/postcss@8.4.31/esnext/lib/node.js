/* esm.sh - esbuild bundle(postcss@8.4.31/lib/node) esnext production */
import * as __0$ from "/v135/postcss@8.4.31/esnext/lib/symbols.js";
import * as __1$ from "/v135/postcss@8.4.31/esnext/lib/css-syntax-error.js";
import * as __2$ from "/v135/postcss@8.4.31/esnext/lib/stringifier.js";
import * as __3$ from "/v135/postcss@8.4.31/esnext/lib/stringify.js";
var require=n=>{const e=m=>typeof m.default<"u"?m.default:m,c=m=>Object.assign({},m);switch(n){case"postcss/lib/symbols":return e(__0$);case"postcss/lib/css-syntax-error":return e(__1$);case"postcss/lib/stringifier":return e(__2$);case"postcss/lib/stringify":return e(__3$);default:throw new Error("module \""+n+"\" not found");}};
var S=Object.create;var x=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var k=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty;var c=(r=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(r,{get:(e,t)=>(typeof require<"u"?require:e)[t]}):r)(function(r){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+r+'" is not supported')});var C=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),N=(r,e)=>{for(var t in e)x(r,t,{get:e[t],enumerable:!0})},m=(r,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of k(e))!A.call(r,n)&&n!==t&&x(r,n,{get:()=>e[n],enumerable:!(i=g(e,n))||i.enumerable});return r},h=(r,e,t)=>(m(r,e,"default"),t&&m(t,e,"default")),w=(r,e,t)=>(t=r!=null?S(P(r)):{},m(e||!r||!r.__esModule?x(t,"default",{value:r,enumerable:!0}):t,r));var p=C((D,O)=>{"use strict";var{isClean:d,my:b}=c("postcss/lib/symbols"),B=c("postcss/lib/css-syntax-error"),_=c("postcss/lib/stringifier"),J=c("postcss/lib/stringify");function y(r,e){let t=new r.constructor;for(let i in r){if(!Object.prototype.hasOwnProperty.call(r,i)||i==="proxyCache")continue;let n=r[i],l=typeof n;i==="parent"&&l==="object"?e&&(t[i]=e):i==="source"?t[i]=n:Array.isArray(n)?t[i]=n.map(s=>y(s,t)):(l==="object"&&n!==null&&(n=y(n)),t[i]=n)}return t}var f=class{constructor(e={}){this.raws={},this[d]=!1,this[b]=!0;for(let t in e)if(t==="nodes"){this.nodes=[];for(let i of e[t])typeof i.clone=="function"?this.append(i.clone()):this.append(i)}else this[t]=e[t]}addToError(e){if(e.postcssNode=this,e.stack&&this.source&&/\n\s{4}at /.test(e.stack)){let t=this.source;e.stack=e.stack.replace(/\n\s{4}at /,`$&${t.input.from}:${t.start.line}:${t.start.column}$&`)}return e}after(e){return this.parent.insertAfter(this,e),this}assign(e={}){for(let t in e)this[t]=e[t];return this}before(e){return this.parent.insertBefore(this,e),this}cleanRaws(e){delete this.raws.before,delete this.raws.after,e||delete this.raws.between}clone(e={}){let t=y(this);for(let i in e)t[i]=e[i];return t}cloneAfter(e={}){let t=this.clone(e);return this.parent.insertAfter(this,t),t}cloneBefore(e={}){let t=this.clone(e);return this.parent.insertBefore(this,t),t}error(e,t={}){if(this.source){let{end:i,start:n}=this.rangeBy(t);return this.source.input.error(e,{column:n.column,line:n.line},{column:i.column,line:i.line},t)}return new B(e)}getProxyProcessor(){return{get(e,t){return t==="proxyOf"?e:t==="root"?()=>e.root().toProxy():e[t]},set(e,t,i){return e[t]===i||(e[t]=i,(t==="prop"||t==="value"||t==="name"||t==="params"||t==="important"||t==="text")&&e.markDirty()),!0}}}markDirty(){if(this[d]){this[d]=!1;let e=this;for(;e=e.parent;)e[d]=!1}}next(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e+1]}positionBy(e,t){let i=this.source.start;if(e.index)i=this.positionInside(e.index,t);else if(e.word){t=this.toString();let n=t.indexOf(e.word);n!==-1&&(i=this.positionInside(n,t))}return i}positionInside(e,t){let i=t||this.toString(),n=this.source.start.column,l=this.source.start.line;for(let s=0;s<e;s++)i[s]===`
`?(n=1,l+=1):n+=1;return{column:n,line:l}}prev(){if(!this.parent)return;let e=this.parent.index(this);return this.parent.nodes[e-1]}rangeBy(e){let t={column:this.source.start.column,line:this.source.start.line},i=this.source.end?{column:this.source.end.column+1,line:this.source.end.line}:{column:t.column+1,line:t.line};if(e.word){let n=this.toString(),l=n.indexOf(e.word);l!==-1&&(t=this.positionInside(l,n),i=this.positionInside(l+e.word.length,n))}else e.start?t={column:e.start.column,line:e.start.line}:e.index&&(t=this.positionInside(e.index)),e.end?i={column:e.end.column,line:e.end.line}:e.endIndex?i=this.positionInside(e.endIndex):e.index&&(i=this.positionInside(e.index+1));return(i.line<t.line||i.line===t.line&&i.column<=t.column)&&(i={column:t.column+1,line:t.line}),{end:i,start:t}}raw(e,t){return new _().raw(this,e,t)}remove(){return this.parent&&this.parent.removeChild(this),this.parent=void 0,this}replaceWith(...e){if(this.parent){let t=this,i=!1;for(let n of e)n===this?i=!0:i?(this.parent.insertAfter(t,n),t=n):this.parent.insertBefore(t,n);i||this.remove()}return this}root(){let e=this;for(;e.parent&&e.parent.type!=="document";)e=e.parent;return e}toJSON(e,t){let i={},n=t==null;t=t||new Map;let l=0;for(let s in this){if(!Object.prototype.hasOwnProperty.call(this,s)||s==="parent"||s==="proxyCache")continue;let o=this[s];if(Array.isArray(o))i[s]=o.map(u=>typeof u=="object"&&u.toJSON?u.toJSON(null,t):u);else if(typeof o=="object"&&o.toJSON)i[s]=o.toJSON(null,t);else if(s==="source"){let u=t.get(o.input);u==null&&(u=l,t.set(o.input,l),l++),i[s]={end:o.end,inputId:u,start:o.start}}else i[s]=o}return n&&(i.inputs=[...t.keys()].map(s=>s.toJSON())),i}toProxy(){return this.proxyCache||(this.proxyCache=new Proxy(this,this.getProxyProcessor())),this.proxyCache}toString(e=J){e.stringify&&(e=e.stringify);let t="";return e(this,i=>{t+=i}),t}warn(e,t,i){let n={node:this};for(let l in i)n[l]=i[l];return e.warn(t,n)}get proxyOf(){return this}};O.exports=f;f.default=f});var a={};N(a,{default:()=>v});var $=w(p());h(a,w(p()));var{default:I,...q}=$,v=I!==void 0?I:q;export{v as default};
//# sourceMappingURL=node.js.map