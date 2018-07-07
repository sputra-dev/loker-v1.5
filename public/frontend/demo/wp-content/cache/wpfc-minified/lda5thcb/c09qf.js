!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand (f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
jQuery.noConflict();
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr(props, pass) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);
(function(factory){
if(typeof define==="function"&&define.amd){
define([ "jquery" ], factory);
}else{
factory(jQuery);
}}(function($){
$.ui=$.ui||{};
var version=$.ui.version="1.12.1";
var widgetUuid=0;
var widgetSlice=Array.prototype.slice;
$.cleanData=(function(orig){
return function(elems){
var events, elem, i;
for(i=0;(elem=elems[ i ])!=null; i++){
try {
events=$._data(elem, "events");
if(events&&events.remove){
$(elem).triggerHandler("remove");
}} catch(e){}}
orig(elems);
};})($.cleanData);
$.widget=function(name, base, prototype){
var existingConstructor, constructor, basePrototype;
var proxiedPrototype={};
var namespace=name.split(".")[ 0 ];
name=name.split(".")[ 1 ];
var fullName=namespace + "-" + name;
if(!prototype){
prototype=base;
base=$.Widget;
}
if($.isArray(prototype)){
prototype=$.extend.apply(null, [ {} ].concat(prototype));
}
$.expr[ ":" ][ fullName.toLowerCase() ]=function(elem){
return !!$.data(elem, fullName);
};
$[ namespace ]=$[ namespace ]||{};
existingConstructor=$[ namespace ][ name ];
constructor=$[ namespace ][ name ]=function(options, element){
if(!this._createWidget){
return new constructor(options, element);
}
if(arguments.length){
this._createWidget(options, element);
}};
$.extend(constructor, existingConstructor, {
version: prototype.version,
_proto: $.extend({}, prototype),
_childConstructors: []
});
basePrototype=new base();
basePrototype.options=$.widget.extend({}, basePrototype.options);
$.each(prototype, function(prop, value){
if(!$.isFunction(value)){
proxiedPrototype[ prop ]=value;
return;
}
proxiedPrototype[ prop ]=(function(){
function _super(){
return base.prototype[ prop ].apply(this, arguments);
}
function _superApply(args){
return base.prototype[ prop ].apply(this, args);
}
return function(){
var __super=this._super;
var __superApply=this._superApply;
var returnValue;
this._super=_super;
this._superApply=_superApply;
returnValue=value.apply(this, arguments);
this._super=__super;
this._superApply=__superApply;
return returnValue;
};})();
});
constructor.prototype=$.widget.extend(basePrototype, {
widgetEventPrefix: existingConstructor ?(basePrototype.widgetEventPrefix||name):name
}, proxiedPrototype, {
constructor: constructor,
namespace: namespace,
widgetName: name,
widgetFullName: fullName
});
if(existingConstructor){
$.each(existingConstructor._childConstructors, function(i, child){
var childPrototype=child.prototype;
$.widget(childPrototype.namespace + "." + childPrototype.widgetName, constructor,
child._proto);
});
delete existingConstructor._childConstructors;
}else{
base._childConstructors.push(constructor);
}
$.widget.bridge(name, constructor);
return constructor;
};
$.widget.extend=function(target){
var input=widgetSlice.call(arguments, 1);
var inputIndex=0;
var inputLength=input.length;
var key;
var value;
for(; inputIndex < inputLength; inputIndex++){
for(key in input[ inputIndex ]){
value=input[ inputIndex ][ key ];
if(input[ inputIndex ].hasOwnProperty(key)&&value!==undefined){
if($.isPlainObject(value)){
target[ key ]=$.isPlainObject(target[ key ]) ?
$.widget.extend({}, target[ key ], value) :
$.widget.extend({}, value);
}else{
target[ key ]=value;
}}
}}
return target;
};
$.widget.bridge=function(name, object){
var fullName=object.prototype.widgetFullName||name;
$.fn[ name ]=function(options){
var isMethodCall=typeof options==="string";
var args=widgetSlice.call(arguments, 1);
var returnValue=this;
if(isMethodCall){
if(!this.length&&options==="instance"){
returnValue=undefined;
}else{
this.each(function(){
var methodValue;
var instance=$.data(this, fullName);
if(options==="instance"){
returnValue=instance;
return false;
}
if(!instance){
return $.error("cannot call methods on " + name +
" prior to initialization; " +
"attempted to call method '" + options + "'");
}
if(!$.isFunction(instance[ options ])||options.charAt(0)==="_"){
return $.error("no such method '" + options + "' for " + name +
" widget instance");
}
methodValue=instance[ options ].apply(instance, args);
if(methodValue!==instance&&methodValue!==undefined){
returnValue=methodValue&&methodValue.jquery ?
returnValue.pushStack(methodValue.get()) :
methodValue;
return false;
}});
}}else{
if(args.length){
options=$.widget.extend.apply(null, [ options ].concat(args));
}
this.each(function(){
var instance=$.data(this, fullName);
if(instance){
instance.option(options||{});
if(instance._init){
instance._init();
}}else{
$.data(this, fullName, new object(options, this));
}});
}
return returnValue;
};};
$.Widget=function(){};
$.Widget._childConstructors=[];
$.Widget.prototype={
widgetName: "widget",
widgetEventPrefix: "",
defaultElement: "<div>",
options: {
classes: {},
disabled: false,
create: null
},
_createWidget: function(options, element){
element=$(element||this.defaultElement||this)[ 0 ];
this.element=$(element);
this.uuid=widgetUuid++;
this.eventNamespace="." + this.widgetName + this.uuid;
this.bindings=$();
this.hoverable=$();
this.focusable=$();
this.classesElementLookup={};
if(element!==this){
$.data(element, this.widgetFullName, this);
this._on(true, this.element, {
remove: function(event){
if(event.target===element){
this.destroy();
}}
});
this.document=$(element.style ?
element.ownerDocument :
element.document||element);
this.window=$(this.document[ 0 ].defaultView||this.document[ 0 ].parentWindow);
}
this.options=$.widget.extend({},
this.options,
this._getCreateOptions(),
options);
this._create();
if(this.options.disabled){
this._setOptionDisabled(this.options.disabled);
}
this._trigger("create", null, this._getCreateEventData());
this._init();
},
_getCreateOptions: function(){
return {};},
_getCreateEventData: $.noop,
_create: $.noop,
_init: $.noop,
destroy: function(){
var that=this;
this._destroy();
$.each(this.classesElementLookup, function(key, value){
that._removeClass(value, key);
});
this.element
.off(this.eventNamespace)
.removeData(this.widgetFullName);
this.widget()
.off(this.eventNamespace)
.removeAttr("aria-disabled");
this.bindings.off(this.eventNamespace);
},
_destroy: $.noop,
widget: function(){
return this.element;
},
option: function(key, value){
var options=key;
var parts;
var curOption;
var i;
if(arguments.length===0){
return $.widget.extend({}, this.options);
}
if(typeof key==="string"){
options={};
parts=key.split(".");
key=parts.shift();
if(parts.length){
curOption=options[ key ]=$.widget.extend({}, this.options[ key ]);
for(i=0; i < parts.length - 1; i++){
curOption[ parts[ i ] ]=curOption[ parts[ i ] ]||{};
curOption=curOption[ parts[ i ] ];
}
key=parts.pop();
if(arguments.length===1){
return curOption[ key ]===undefined ? null:curOption[ key ];
}
curOption[ key ]=value;
}else{
if(arguments.length===1){
return this.options[ key ]===undefined ? null:this.options[ key ];
}
options[ key ]=value;
}}
this._setOptions(options);
return this;
},
_setOptions: function(options){
var key;
for(key in options){
this._setOption(key, options[ key ]);
}
return this;
},
_setOption: function(key, value){
if(key==="classes"){
this._setOptionClasses(value);
}
this.options[ key ]=value;
if(key==="disabled"){
this._setOptionDisabled(value);
}
return this;
},
_setOptionClasses: function(value){
var classKey, elements, currentElements;
for(classKey in value){
currentElements=this.classesElementLookup[ classKey ];
if(value[ classKey ]===this.options.classes[ classKey ] ||
!currentElements ||
!currentElements.length){
continue;
}
elements=$(currentElements.get());
this._removeClass(currentElements, classKey);
elements.addClass(this._classes({
element: elements,
keys: classKey,
classes: value,
add: true
}));
}},
_setOptionDisabled: function(value){
this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!value);
if(value){
this._removeClass(this.hoverable, null, "ui-state-hover");
this._removeClass(this.focusable, null, "ui-state-focus");
}},
enable: function(){
return this._setOptions({ disabled: false });
},
disable: function(){
return this._setOptions({ disabled: true });
},
_classes: function(options){
var full=[];
var that=this;
options=$.extend({
element: this.element,
classes: this.options.classes||{}}, options);
function processClassString(classes, checkOption){
var current, i;
for(i=0; i < classes.length; i++){
current=that.classesElementLookup[ classes[ i ] ]||$();
if(options.add){
current=$($.unique(current.get().concat(options.element.get())));
}else{
current=$(current.not(options.element).get());
}
that.classesElementLookup[ classes[ i ] ]=current;
full.push(classes[ i ]);
if(checkOption&&options.classes[ classes[ i ] ]){
full.push(options.classes[ classes[ i ] ]);
}}
}
this._on(options.element, {
"remove": "_untrackClassesElement"
});
if(options.keys){
processClassString(options.keys.match(/\S+/g)||[], true);
}
if(options.extra){
processClassString(options.extra.match(/\S+/g)||[]);
}
return full.join(" ");
},
_untrackClassesElement: function(event){
var that=this;
$.each(that.classesElementLookup, function(key, value){
if($.inArray(event.target, value)!==-1){
that.classesElementLookup[ key ]=$(value.not(event.target).get());
}});
},
_removeClass: function(element, keys, extra){
return this._toggleClass(element, keys, extra, false);
},
_addClass: function(element, keys, extra){
return this._toggleClass(element, keys, extra, true);
},
_toggleClass: function(element, keys, extra, add){
add=(typeof add==="boolean") ? add:extra;
var shift=(typeof element==="string"||element===null),
options={
extra: shift ? keys:extra,
keys: shift ? element:keys,
element: shift ? this.element:element,
add: add
};
options.element.toggleClass(this._classes(options), add);
return this;
},
_on: function(suppressDisabledCheck, element, handlers){
var delegateElement;
var instance=this;
if(typeof suppressDisabledCheck!=="boolean"){
handlers=element;
element=suppressDisabledCheck;
suppressDisabledCheck=false;
}
if(!handlers){
handlers=element;
element=this.element;
delegateElement=this.widget();
}else{
element=delegateElement=$(element);
this.bindings=this.bindings.add(element);
}
$.each(handlers, function(event, handler){
function handlerProxy(){
if(!suppressDisabledCheck &&
(instance.options.disabled===true ||
$(this).hasClass("ui-state-disabled"))){
return;
}
return(typeof handler==="string" ? instance[ handler ]:handler)
.apply(instance, arguments);
}
if(typeof handler!=="string"){
handlerProxy.guid=handler.guid =
handler.guid||handlerProxy.guid||$.guid++;
}
var match=event.match(/^([\w:-]*)\s*(.*)$/);
var eventName=match[ 1 ] + instance.eventNamespace;
var selector=match[ 2 ];
if(selector){
delegateElement.on(eventName, selector, handlerProxy);
}else{
element.on(eventName, handlerProxy);
}});
},
_off: function(element, eventName){
eventName=(eventName||"").split(" ").join(this.eventNamespace + " ") +
this.eventNamespace;
element.off(eventName).off(eventName);
this.bindings=$(this.bindings.not(element).get());
this.focusable=$(this.focusable.not(element).get());
this.hoverable=$(this.hoverable.not(element).get());
},
_delay: function(handler, delay){
function handlerProxy(){
return(typeof handler==="string" ? instance[ handler ]:handler)
.apply(instance, arguments);
}
var instance=this;
return setTimeout(handlerProxy, delay||0);
},
_hoverable: function(element){
this.hoverable=this.hoverable.add(element);
this._on(element, {
mouseenter: function(event){
this._addClass($(event.currentTarget), null, "ui-state-hover");
},
mouseleave: function(event){
this._removeClass($(event.currentTarget), null, "ui-state-hover");
}});
},
_focusable: function(element){
this.focusable=this.focusable.add(element);
this._on(element, {
focusin: function(event){
this._addClass($(event.currentTarget), null, "ui-state-focus");
},
focusout: function(event){
this._removeClass($(event.currentTarget), null, "ui-state-focus");
}});
},
_trigger: function(type, event, data){
var prop, orig;
var callback=this.options[ type ];
data=data||{};
event=$.Event(event);
event.type=(type===this.widgetEventPrefix ?
type :
this.widgetEventPrefix + type).toLowerCase();
event.target=this.element[ 0 ];
orig=event.originalEvent;
if(orig){
for(prop in orig){
if(!(prop in event)){
event[ prop ]=orig[ prop ];
}}
}
this.element.trigger(event, data);
return !($.isFunction(callback) &&
callback.apply(this.element[ 0 ], [ event ].concat(data))===false ||
event.isDefaultPrevented());
}};
$.each({ show: "fadeIn", hide: "fadeOut" }, function(method, defaultEffect){
$.Widget.prototype[ "_" + method ]=function(element, options, callback){
if(typeof options==="string"){
options={ effect: options };}
var hasOptions;
var effectName = !options ?
method :
options===true||typeof options==="number" ?
defaultEffect :
options.effect||defaultEffect;
options=options||{};
if(typeof options==="number"){
options={ duration: options };}
hasOptions = !$.isEmptyObject(options);
options.complete=callback;
if(options.delay){
element.delay(options.delay);
}
if(hasOptions&&$.effects&&$.effects.effect[ effectName ]){
element[ method ](options);
}else if(effectName!==method&&element[ effectName ]){
element[ effectName ](options.duration, options.easing, callback);
}else{
element.queue(function(next){
$(this)[ method ]();
if(callback){
callback.call(element[ 0 ]);
}
next();
});
}};});
var widget=$.widget;
(function(){
var cachedScrollbarWidth,
max=Math.max,
abs=Math.abs,
rhorizontal=/left|center|right/,
rvertical=/top|center|bottom/,
roffset=/[\+\-]\d+(\.[\d]+)?%?/,
rposition=/^\w+/,
rpercent=/%$/,
_position=$.fn.position;
function getOffsets(offsets, width, height){
return [
parseFloat(offsets[ 0 ]) *(rpercent.test(offsets[ 0 ]) ? width / 100:1),
parseFloat(offsets[ 1 ]) *(rpercent.test(offsets[ 1 ]) ? height / 100:1)
];
}
function parseCss(element, property){
return parseInt($.css(element, property), 10)||0;
}
function getDimensions(elem){
var raw=elem[ 0 ];
if(raw.nodeType===9){
return {
width: elem.width(),
height: elem.height(),
offset: { top: 0, left: 0 }};}
if($.isWindow(raw)){
return {
width: elem.width(),
height: elem.height(),
offset: { top: elem.scrollTop(), left: elem.scrollLeft() }};}
if(raw.preventDefault){
return {
width: 0,
height: 0,
offset: { top: raw.pageY, left: raw.pageX }};}
return {
width: elem.outerWidth(),
height: elem.outerHeight(),
offset: elem.offset()
};}
$.position={
scrollbarWidth: function(){
if(cachedScrollbarWidth!==undefined){
return cachedScrollbarWidth;
}
var w1, w2,
div=$("<div " +
"style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
"<div style='height:100px;width:auto;'></div></div>"),
innerDiv=div.children()[ 0 ];
$("body").append(div);
w1=innerDiv.offsetWidth;
div.css("overflow", "scroll");
w2=innerDiv.offsetWidth;
if(w1===w2){
w2=div[ 0 ].clientWidth;
}
div.remove();
return(cachedScrollbarWidth=w1 - w2);
},
getScrollInfo: function(within){
var overflowX=within.isWindow||within.isDocument ? "" :
within.element.css("overflow-x"),
overflowY=within.isWindow||within.isDocument ? "" :
within.element.css("overflow-y"),
hasOverflowX=overflowX==="scroll" ||
(overflowX==="auto"&&within.width < within.element[ 0 ].scrollWidth),
hasOverflowY=overflowY==="scroll" ||
(overflowY==="auto"&&within.height < within.element[ 0 ].scrollHeight);
return {
width: hasOverflowY ? $.position.scrollbarWidth():0,
height: hasOverflowX ? $.position.scrollbarWidth():0
};},
getWithinInfo: function(element){
var withinElement=$(element||window),
isWindow=$.isWindow(withinElement[ 0 ]),
isDocument = !!withinElement[ 0 ]&&withinElement[ 0 ].nodeType===9,
hasOffset = !isWindow&&!isDocument;
return {
element: withinElement,
isWindow: isWindow,
isDocument: isDocument,
offset: hasOffset ? $(element).offset():{ left: 0, top: 0 },
scrollLeft: withinElement.scrollLeft(),
scrollTop: withinElement.scrollTop(),
width: withinElement.outerWidth(),
height: withinElement.outerHeight()
};}};
$.fn.position=function(options){
if(!options||!options.of){
return _position.apply(this, arguments);
}
options=$.extend({}, options);
var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
target=$(options.of),
within=$.position.getWithinInfo(options.within),
scrollInfo=$.position.getScrollInfo(within),
collision=(options.collision||"flip").split(" "),
offsets={};
dimensions=getDimensions(target);
if(target[ 0 ].preventDefault){
options.at="left top";
}
targetWidth=dimensions.width;
targetHeight=dimensions.height;
targetOffset=dimensions.offset;
basePosition=$.extend({}, targetOffset);
$.each([ "my", "at" ], function(){
var pos=(options[ this ]||"").split(" "),
horizontalOffset,
verticalOffset;
if(pos.length===1){
pos=rhorizontal.test(pos[ 0 ]) ?
pos.concat([ "center" ]) :
rvertical.test(pos[ 0 ]) ?
[ "center" ].concat(pos) :
[ "center", "center" ];
}
pos[ 0 ]=rhorizontal.test(pos[ 0 ]) ? pos[ 0 ]:"center";
pos[ 1 ]=rvertical.test(pos[ 1 ]) ? pos[ 1 ]:"center";
horizontalOffset=roffset.exec(pos[ 0 ]);
verticalOffset=roffset.exec(pos[ 1 ]);
offsets[ this ]=[
horizontalOffset ? horizontalOffset[ 0 ]:0,
verticalOffset ? verticalOffset[ 0 ]:0
];
options[ this ]=[
rposition.exec(pos[ 0 ])[ 0 ],
rposition.exec(pos[ 1 ])[ 0 ]
];
});
if(collision.length===1){
collision[ 1 ]=collision[ 0 ];
}
if(options.at[ 0 ]==="right"){
basePosition.left +=targetWidth;
}else if(options.at[ 0 ]==="center"){
basePosition.left +=targetWidth / 2;
}
if(options.at[ 1 ]==="bottom"){
basePosition.top +=targetHeight;
}else if(options.at[ 1 ]==="center"){
basePosition.top +=targetHeight / 2;
}
atOffset=getOffsets(offsets.at, targetWidth, targetHeight);
basePosition.left +=atOffset[ 0 ];
basePosition.top +=atOffset[ 1 ];
return this.each(function(){
var collisionPosition, using,
elem=$(this),
elemWidth=elem.outerWidth(),
elemHeight=elem.outerHeight(),
marginLeft=parseCss(this, "marginLeft"),
marginTop=parseCss(this, "marginTop"),
collisionWidth=elemWidth + marginLeft + parseCss(this, "marginRight") +
scrollInfo.width,
collisionHeight=elemHeight + marginTop + parseCss(this, "marginBottom") +
scrollInfo.height,
position=$.extend({}, basePosition),
myOffset=getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
if(options.my[ 0 ]==="right"){
position.left -=elemWidth;
}else if(options.my[ 0 ]==="center"){
position.left -=elemWidth / 2;
}
if(options.my[ 1 ]==="bottom"){
position.top -=elemHeight;
}else if(options.my[ 1 ]==="center"){
position.top -=elemHeight / 2;
}
position.left +=myOffset[ 0 ];
position.top +=myOffset[ 1 ];
collisionPosition={
marginLeft: marginLeft,
marginTop: marginTop
};
$.each([ "left", "top" ], function(i, dir){
if($.ui.position[ collision[ i ] ]){
$.ui.position[ collision[ i ] ][ dir ](position, {
targetWidth: targetWidth,
targetHeight: targetHeight,
elemWidth: elemWidth,
elemHeight: elemHeight,
collisionPosition: collisionPosition,
collisionWidth: collisionWidth,
collisionHeight: collisionHeight,
offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
my: options.my,
at: options.at,
within: within,
elem: elem
});
}});
if(options.using){
using=function(props){
var left=targetOffset.left - position.left,
right=left + targetWidth - elemWidth,
top=targetOffset.top - position.top,
bottom=top + targetHeight - elemHeight,
feedback={
target: {
element: target,
left: targetOffset.left,
top: targetOffset.top,
width: targetWidth,
height: targetHeight
},
element: {
element: elem,
left: position.left,
top: position.top,
width: elemWidth,
height: elemHeight
},
horizontal: right < 0 ? "left":left > 0 ? "right":"center",
vertical: bottom < 0 ? "top":top > 0 ? "bottom":"middle"
};
if(targetWidth < elemWidth&&abs(left + right) < targetWidth){
feedback.horizontal="center";
}
if(targetHeight < elemHeight&&abs(top + bottom) < targetHeight){
feedback.vertical="middle";
}
if(max(abs(left), abs(right)) > max(abs(top), abs(bottom))){
feedback.important="horizontal";
}else{
feedback.important="vertical";
}
options.using.call(this, props, feedback);
};}
elem.offset($.extend(position, { using: using }));
});
};
$.ui.position={
fit: {
left: function(position, data){
var within=data.within,
withinOffset=within.isWindow ? within.scrollLeft:within.offset.left,
outerWidth=within.width,
collisionPosLeft=position.left - data.collisionPosition.marginLeft,
overLeft=withinOffset - collisionPosLeft,
overRight=collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
newOverRight;
if(data.collisionWidth > outerWidth){
if(overLeft > 0&&overRight <=0){
newOverRight=position.left + overLeft + data.collisionWidth - outerWidth -
withinOffset;
position.left +=overLeft - newOverRight;
}else if(overRight > 0&&overLeft <=0){
position.left=withinOffset;
}else{
if(overLeft > overRight){
position.left=withinOffset + outerWidth - data.collisionWidth;
}else{
position.left=withinOffset;
}}
}else if(overLeft > 0){
position.left +=overLeft;
}else if(overRight > 0){
position.left -=overRight;
}else{
position.left=max(position.left - collisionPosLeft, position.left);
}},
top: function(position, data){
var within=data.within,
withinOffset=within.isWindow ? within.scrollTop:within.offset.top,
outerHeight=data.within.height,
collisionPosTop=position.top - data.collisionPosition.marginTop,
overTop=withinOffset - collisionPosTop,
overBottom=collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
newOverBottom;
if(data.collisionHeight > outerHeight){
if(overTop > 0&&overBottom <=0){
newOverBottom=position.top + overTop + data.collisionHeight - outerHeight -
withinOffset;
position.top +=overTop - newOverBottom;
}else if(overBottom > 0&&overTop <=0){
position.top=withinOffset;
}else{
if(overTop > overBottom){
position.top=withinOffset + outerHeight - data.collisionHeight;
}else{
position.top=withinOffset;
}}
}else if(overTop > 0){
position.top +=overTop;
}else if(overBottom > 0){
position.top -=overBottom;
}else{
position.top=max(position.top - collisionPosTop, position.top);
}}
},
flip: {
left: function(position, data){
var within=data.within,
withinOffset=within.offset.left + within.scrollLeft,
outerWidth=within.width,
offsetLeft=within.isWindow ? within.scrollLeft:within.offset.left,
collisionPosLeft=position.left - data.collisionPosition.marginLeft,
overLeft=collisionPosLeft - offsetLeft,
overRight=collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
myOffset=data.my[ 0 ]==="left" ?
-data.elemWidth :
data.my[ 0 ]==="right" ?
data.elemWidth :
0,
atOffset=data.at[ 0 ]==="left" ?
data.targetWidth :
data.at[ 0 ]==="right" ?
-data.targetWidth :
0,
offset=-2 * data.offset[ 0 ],
newOverRight,
newOverLeft;
if(overLeft < 0){
newOverRight=position.left + myOffset + atOffset + offset + data.collisionWidth -
outerWidth - withinOffset;
if(newOverRight < 0||newOverRight < abs(overLeft)){
position.left +=myOffset + atOffset + offset;
}}else if(overRight > 0){
newOverLeft=position.left - data.collisionPosition.marginLeft + myOffset +
atOffset + offset - offsetLeft;
if(newOverLeft > 0||abs(newOverLeft) < overRight){
position.left +=myOffset + atOffset + offset;
}}
},
top: function(position, data){
var within=data.within,
withinOffset=within.offset.top + within.scrollTop,
outerHeight=within.height,
offsetTop=within.isWindow ? within.scrollTop:within.offset.top,
collisionPosTop=position.top - data.collisionPosition.marginTop,
overTop=collisionPosTop - offsetTop,
overBottom=collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
top=data.my[ 1 ]==="top",
myOffset=top ?
-data.elemHeight :
data.my[ 1 ]==="bottom" ?
data.elemHeight :
0,
atOffset=data.at[ 1 ]==="top" ?
data.targetHeight :
data.at[ 1 ]==="bottom" ?
-data.targetHeight :
0,
offset=-2 * data.offset[ 1 ],
newOverTop,
newOverBottom;
if(overTop < 0){
newOverBottom=position.top + myOffset + atOffset + offset + data.collisionHeight -
outerHeight - withinOffset;
if(newOverBottom < 0||newOverBottom < abs(overTop)){
position.top +=myOffset + atOffset + offset;
}}else if(overBottom > 0){
newOverTop=position.top - data.collisionPosition.marginTop + myOffset + atOffset +
offset - offsetTop;
if(newOverTop > 0||abs(newOverTop) < overBottom){
position.top +=myOffset + atOffset + offset;
}}
}},
flipfit: {
left: function(){
$.ui.position.flip.left.apply(this, arguments);
$.ui.position.fit.left.apply(this, arguments);
},
top: function(){
$.ui.position.flip.top.apply(this, arguments);
$.ui.position.fit.top.apply(this, arguments);
}}
};})();
var position=$.ui.position;
var data=$.extend($.expr[ ":" ], {
data: $.expr.createPseudo ?
$.expr.createPseudo(function(dataName){
return function(elem){
return !!$.data(elem, dataName);
};}) :
function(elem, i, match){
return !!$.data(elem, match[ 3 ]);
}});
var disableSelection=$.fn.extend({
disableSelection:(function(){
var eventType="onselectstart" in document.createElement("div") ?
"selectstart" :
"mousedown";
return function(){
return this.on(eventType + ".ui-disableSelection", function(event){
event.preventDefault();
});
};})(),
enableSelection: function(){
return this.off(".ui-disableSelection");
}});
var dataSpace="ui-effects-",
dataSpaceStyle="ui-effects-style",
dataSpaceAnimated="ui-effects-animated",
jQuery=$;
$.effects={
effect: {}};
(function(jQuery, undefined){
var stepHooks="backgroundColor borderBottomColor borderLeftColor borderRightColor " +
"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
rplusequals=/^([\-+])=\s*(\d+\.?\d*)/,
stringParsers=[ {
re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse: function(execResult){
return [
execResult[ 1 ],
execResult[ 2 ],
execResult[ 3 ],
execResult[ 4 ]
];
}}, {
re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse: function(execResult){
return [
execResult[ 1 ] * 2.55,
execResult[ 2 ] * 2.55,
execResult[ 3 ] * 2.55,
execResult[ 4 ]
];
}}, {
re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
parse: function(execResult){
return [
parseInt(execResult[ 1 ], 16),
parseInt(execResult[ 2 ], 16),
parseInt(execResult[ 3 ], 16)
];
}}, {
re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
parse: function(execResult){
return [
parseInt(execResult[ 1 ] + execResult[ 1 ], 16),
parseInt(execResult[ 2 ] + execResult[ 2 ], 16),
parseInt(execResult[ 3 ] + execResult[ 3 ], 16)
];
}}, {
re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
space: "hsla",
parse: function(execResult){
return [
execResult[ 1 ],
execResult[ 2 ] / 100,
execResult[ 3 ] / 100,
execResult[ 4 ]
];
}} ],
color=jQuery.Color=function(color, green, blue, alpha){
return new jQuery.Color.fn.parse(color, green, blue, alpha);
},
spaces={
rgba: {
props: {
red: {
idx: 0,
type: "byte"
},
green: {
idx: 1,
type: "byte"
},
blue: {
idx: 2,
type: "byte"
}}
},
hsla: {
props: {
hue: {
idx: 0,
type: "degrees"
},
saturation: {
idx: 1,
type: "percent"
},
lightness: {
idx: 2,
type: "percent"
}}
}},
propTypes={
"byte": {
floor: true,
max: 255
},
"percent": {
max: 1
},
"degrees": {
mod: 360,
floor: true
}},
support=color.support={},
supportElem=jQuery("<p>")[ 0 ],
colors,
each=jQuery.each;
supportElem.style.cssText="background-color:rgba(1,1,1,.5)";
support.rgba=supportElem.style.backgroundColor.indexOf("rgba") > -1;
each(spaces, function(spaceName, space){
space.cache="_" + spaceName;
space.props.alpha={
idx: 3,
type: "percent",
def: 1
};});
function clamp(value, prop, allowEmpty){
var type=propTypes[ prop.type ]||{};
if(value==null){
return(allowEmpty||!prop.def) ? null:prop.def;
}
value=type.floor ? ~~value:parseFloat(value);
if(isNaN(value)){
return prop.def;
}
if(type.mod){
return(value + type.mod) % type.mod;
}
return 0 > value ? 0:type.max < value ? type.max:value;
}
function stringParse(string){
var inst=color(),
rgba=inst._rgba=[];
string=string.toLowerCase();
each(stringParsers, function(i, parser){
var parsed,
match=parser.re.exec(string),
values=match&&parser.parse(match),
spaceName=parser.space||"rgba";
if(values){
parsed=inst[ spaceName ](values);
inst[ spaces[ spaceName ].cache ]=parsed[ spaces[ spaceName ].cache ];
rgba=inst._rgba=parsed._rgba;
return false;
}});
if(rgba.length){
if(rgba.join()==="0,0,0,0"){
jQuery.extend(rgba, colors.transparent);
}
return inst;
}
return colors[ string ];
}
color.fn=jQuery.extend(color.prototype, {
parse: function(red, green, blue, alpha){
if(red===undefined){
this._rgba=[ null, null, null, null ];
return this;
}
if(red.jquery||red.nodeType){
red=jQuery(red).css(green);
green=undefined;
}
var inst=this,
type=jQuery.type(red),
rgba=this._rgba=[];
if(green!==undefined){
red=[ red, green, blue, alpha ];
type="array";
}
if(type==="string"){
return this.parse(stringParse(red)||colors._default);
}
if(type==="array"){
each(spaces.rgba.props, function(key, prop){
rgba[ prop.idx ]=clamp(red[ prop.idx ], prop);
});
return this;
}
if(type==="object"){
if(red instanceof color){
each(spaces, function(spaceName, space){
if(red[ space.cache ]){
inst[ space.cache ]=red[ space.cache ].slice();
}});
}else{
each(spaces, function(spaceName, space){
var cache=space.cache;
each(space.props, function(key, prop){
if(!inst[ cache ]&&space.to){
if(key==="alpha"||red[ key ]==null){
return;
}
inst[ cache ]=space.to(inst._rgba);
}
inst[ cache ][ prop.idx ]=clamp(red[ key ], prop, true);
});
if(inst[ cache ] &&
jQuery.inArray(null, inst[ cache ].slice(0, 3)) < 0){
inst[ cache ][ 3 ]=1;
if(space.from){
inst._rgba=space.from(inst[ cache ]);
}}
});
}
return this;
}},
is: function(compare){
var is=color(compare),
same=true,
inst=this;
each(spaces, function(_, space){
var localCache,
isCache=is[ space.cache ];
if(isCache){
localCache=inst[ space.cache ]||space.to&&space.to(inst._rgba)||[];
each(space.props, function(_, prop){
if(isCache[ prop.idx ]!=null){
same=(isCache[ prop.idx ]===localCache[ prop.idx ]);
return same;
}});
}
return same;
});
return same;
},
_space: function(){
var used=[],
inst=this;
each(spaces, function(spaceName, space){
if(inst[ space.cache ]){
used.push(spaceName);
}});
return used.pop();
},
transition: function(other, distance){
var end=color(other),
spaceName=end._space(),
space=spaces[ spaceName ],
startColor=this.alpha()===0 ? color("transparent"):this,
start=startColor[ space.cache ]||space.to(startColor._rgba),
result=start.slice();
end=end[ space.cache ];
each(space.props, function(key, prop){
var index=prop.idx,
startValue=start[ index ],
endValue=end[ index ],
type=propTypes[ prop.type ]||{};
if(endValue===null){
return;
}
if(startValue===null){
result[ index ]=endValue;
}else{
if(type.mod){
if(endValue - startValue > type.mod / 2){
startValue +=type.mod;
}else if(startValue - endValue > type.mod / 2){
startValue -=type.mod;
}}
result[ index ]=clamp(( endValue - startValue) * distance + startValue, prop);
}});
return this[ spaceName ](result);
},
blend: function(opaque){
if(this._rgba[ 3 ]===1){
return this;
}
var rgb=this._rgba.slice(),
a=rgb.pop(),
blend=color(opaque)._rgba;
return color(jQuery.map(rgb, function(v, i){
return(1 - a) * blend[ i ] + a * v;
}));
},
toRgbaString: function(){
var prefix="rgba(",
rgba=jQuery.map(this._rgba, function(v, i){
return v==null ?(i > 2 ? 1:0):v;
});
if(rgba[ 3 ]===1){
rgba.pop();
prefix="rgb(";
}
return prefix + rgba.join() + ")";
},
toHslaString: function(){
var prefix="hsla(",
hsla=jQuery.map(this.hsla(), function(v, i){
if(v==null){
v=i > 2 ? 1:0;
}
if(i&&i < 3){
v=Math.round(v * 100) + "%";
}
return v;
});
if(hsla[ 3 ]===1){
hsla.pop();
prefix="hsl(";
}
return prefix + hsla.join() + ")";
},
toHexString: function(includeAlpha){
var rgba=this._rgba.slice(),
alpha=rgba.pop();
if(includeAlpha){
rgba.push(~~(alpha * 255));
}
return "#" + jQuery.map(rgba, function(v){
v=(v||0).toString(16);
return v.length===1 ? "0" + v:v;
}).join("");
},
toString: function(){
return this._rgba[ 3 ]===0 ? "transparent":this.toRgbaString();
}});
color.fn.parse.prototype=color.fn;
function hue2rgb(p, q, h){
h=(h + 1) % 1;
if(h * 6 < 1){
return p +(q - p) * h * 6;
}
if(h * 2 < 1){
return q;
}
if(h * 3 < 2){
return p +(q - p) *(( 2 / 3) - h) * 6;
}
return p;
}
spaces.hsla.to=function(rgba){
if(rgba[ 0 ]==null||rgba[ 1 ]==null||rgba[ 2 ]==null){
return [ null, null, null, rgba[ 3 ] ];
}
var r=rgba[ 0 ] / 255,
g=rgba[ 1 ] / 255,
b=rgba[ 2 ] / 255,
a=rgba[ 3 ],
max=Math.max(r, g, b),
min=Math.min(r, g, b),
diff=max - min,
add=max + min,
l=add * 0.5,
h, s;
if(min===max){
h=0;
}else if(r===max){
h=(60 *(g - b) / diff) + 360;
}else if(g===max){
h=(60 *(b - r) / diff) + 120;
}else{
h=(60 *(r - g) / diff) + 240;
}
if(diff===0){
s=0;
}else if(l <=0.5){
s=diff / add;
}else{
s=diff /(2 - add);
}
return [ Math.round(h) % 360, s, l, a==null ? 1:a ];
};
spaces.hsla.from=function(hsla){
if(hsla[ 0 ]==null||hsla[ 1 ]==null||hsla[ 2 ]==null){
return [ null, null, null, hsla[ 3 ] ];
}
var h=hsla[ 0 ] / 360,
s=hsla[ 1 ],
l=hsla[ 2 ],
a=hsla[ 3 ],
q=l <=0.5 ? l *(1 + s):l + s - l * s,
p=2 * l - q;
return [
Math.round(hue2rgb(p, q, h +(1 / 3)) * 255),
Math.round(hue2rgb(p, q, h) * 255),
Math.round(hue2rgb(p, q, h -(1 / 3)) * 255),
a
];
};
each(spaces, function(spaceName, space){
var props=space.props,
cache=space.cache,
to=space.to,
from=space.from;
color.fn[ spaceName ]=function(value){
if(to&&!this[ cache ]){
this[ cache ]=to(this._rgba);
}
if(value===undefined){
return this[ cache ].slice();
}
var ret,
type=jQuery.type(value),
arr=(type==="array"||type==="object") ? value:arguments,
local=this[ cache ].slice();
each(props, function(key, prop){
var val=arr[ type==="object" ? key:prop.idx ];
if(val==null){
val=local[ prop.idx ];
}
local[ prop.idx ]=clamp(val, prop);
});
if(from){
ret=color(from(local));
ret[ cache ]=local;
return ret;
}else{
return color(local);
}};
each(props, function(key, prop){
if(color.fn[ key ]){
return;
}
color.fn[ key ]=function(value){
var vtype=jQuery.type(value),
fn=(key==="alpha" ?(this._hsla ? "hsla":"rgba"):spaceName),
local=this[ fn ](),
cur=local[ prop.idx ],
match;
if(vtype==="undefined"){
return cur;
}
if(vtype==="function"){
value=value.call(this, cur);
vtype=jQuery.type(value);
}
if(value==null&&prop.empty){
return this;
}
if(vtype==="string"){
match=rplusequals.exec(value);
if(match){
value=cur + parseFloat(match[ 2 ]) *(match[ 1 ]==="+" ? 1:-1);
}}
local[ prop.idx ]=value;
return this[ fn ](local);
};});
});
color.hook=function(hook){
var hooks=hook.split(" ");
each(hooks, function(i, hook){
jQuery.cssHooks[ hook ]={
set: function(elem, value){
var parsed, curElem,
backgroundColor="";
if(value!=="transparent"&&(jQuery.type(value)!=="string" ||
(parsed=stringParse(value)))){
value=color(parsed||value);
if(!support.rgba&&value._rgba[ 3 ]!==1){
curElem=hook==="backgroundColor" ? elem.parentNode:elem;
while (
(backgroundColor===""||backgroundColor==="transparent") &&
curElem&&curElem.style
){
try {
backgroundColor=jQuery.css(curElem, "backgroundColor");
curElem=curElem.parentNode;
} catch(e){
}}
value=value.blend(backgroundColor&&backgroundColor!=="transparent" ?
backgroundColor :
"_default");
}
value=value.toRgbaString();
}
try {
elem.style[ hook ]=value;
} catch(e){
}}
};
jQuery.fx.step[ hook ]=function(fx){
if(!fx.colorInit){
fx.start=color(fx.elem, hook);
fx.end=color(fx.end);
fx.colorInit=true;
}
jQuery.cssHooks[ hook ].set(fx.elem, fx.start.transition(fx.end, fx.pos));
};});
};
color.hook(stepHooks);
jQuery.cssHooks.borderColor={
expand: function(value){
var expanded={};
each([ "Top", "Right", "Bottom", "Left" ], function(i, part){
expanded[ "border" + part + "Color" ]=value;
});
return expanded;
}};
colors=jQuery.Color.names={
aqua: "#00ffff",
black: "#000000",
blue: "#0000ff",
fuchsia: "#ff00ff",
gray: "#808080",
green: "#008000",
lime: "#00ff00",
maroon: "#800000",
navy: "#000080",
olive: "#808000",
purple: "#800080",
red: "#ff0000",
silver: "#c0c0c0",
teal: "#008080",
white: "#ffffff",
yellow: "#ffff00",
transparent: [ null, null, null, 0 ],
_default: "#ffffff"
};})(jQuery);
(function(){
var classAnimationActions=[ "add", "remove", "toggle" ],
shorthandStyles={
border: 1,
borderBottom: 1,
borderColor: 1,
borderLeft: 1,
borderRight: 1,
borderTop: 1,
borderWidth: 1,
margin: 1,
padding: 1
};
$.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ],
function(_, prop){
$.fx.step[ prop ]=function(fx){
if(fx.end!=="none"&&!fx.setAttr||fx.pos===1&&!fx.setAttr){
jQuery.style(fx.elem, prop, fx.end);
fx.setAttr=true;
}};}
);
function getElementStyles(elem){
var key, len,
style=elem.ownerDocument.defaultView ?
elem.ownerDocument.defaultView.getComputedStyle(elem, null) :
elem.currentStyle,
styles={};
if(style&&style.length&&style[ 0 ]&&style[ style[ 0 ] ]){
len=style.length;
while(len--){
key=style[ len ];
if(typeof style[ key ]==="string"){
styles[ $.camelCase(key) ]=style[ key ];
}}
}else{
for(key in style){
if(typeof style[ key ]==="string"){
styles[ key ]=style[ key ];
}}
}
return styles;
}
function styleDifference(oldStyle, newStyle){
var diff={},
name, value;
for(name in newStyle){
value=newStyle[ name ];
if(oldStyle[ name ]!==value){
if(!shorthandStyles[ name ]){
if($.fx.step[ name ]||!isNaN(parseFloat(value))){
diff[ name ]=value;
}}
}}
return diff;
}
if(!$.fn.addBack){
$.fn.addBack=function(selector){
return this.add(selector==null ?
this.prevObject:this.prevObject.filter(selector)
);
};}
$.effects.animateClass=function(value, duration, easing, callback){
var o=$.speed(duration, easing, callback);
return this.queue(function(){
var animated=$(this),
baseClass=animated.attr("class")||"",
applyClassChange,
allAnimations=o.children ? animated.find("*").addBack():animated;
allAnimations=allAnimations.map(function(){
var el=$(this);
return {
el: el,
start: getElementStyles(this)
};});
applyClassChange=function(){
$.each(classAnimationActions, function(i, action){
if(value[ action ]){
animated[ action + "Class" ](value[ action ]);
}});
};
applyClassChange();
allAnimations=allAnimations.map(function(){
this.end=getElementStyles(this.el[ 0 ]);
this.diff=styleDifference(this.start, this.end);
return this;
});
animated.attr("class", baseClass);
allAnimations=allAnimations.map(function(){
var styleInfo=this,
dfd=$.Deferred(),
opts=$.extend({}, o, {
queue: false,
complete: function(){
dfd.resolve(styleInfo);
}});
this.el.animate(this.diff, opts);
return dfd.promise();
});
$.when.apply($, allAnimations.get()).done(function(){
applyClassChange();
$.each(arguments, function(){
var el=this.el;
$.each(this.diff, function(key){
el.css(key, "");
});
});
o.complete.call(animated[ 0 ]);
});
});
};
$.fn.extend({
addClass:(function(orig){
return function(classNames, speed, easing, callback){
return speed ?
$.effects.animateClass.call(this,
{ add: classNames }, speed, easing, callback) :
orig.apply(this, arguments);
};})($.fn.addClass),
removeClass:(function(orig){
return function(classNames, speed, easing, callback){
return arguments.length > 1 ?
$.effects.animateClass.call(this,
{ remove: classNames }, speed, easing, callback) :
orig.apply(this, arguments);
};})($.fn.removeClass),
toggleClass:(function(orig){
return function(classNames, force, speed, easing, callback){
if(typeof force==="boolean"||force===undefined){
if(!speed){
return orig.apply(this, arguments);
}else{
return $.effects.animateClass.call(this,
(force ? { add: classNames }:{ remove: classNames }),
speed, easing, callback);
}}else{
return $.effects.animateClass.call(this,
{ toggle: classNames }, force, speed, easing);
}};})($.fn.toggleClass),
switchClass: function(remove, add, speed, easing, callback){
return $.effects.animateClass.call(this, {
add: add,
remove: remove
}, speed, easing, callback);
}});
})();
(function(){
if($.expr&&$.expr.filters&&$.expr.filters.animated){
$.expr.filters.animated=(function(orig){
return function(elem){
return !!$(elem).data(dataSpaceAnimated)||orig(elem);
};})($.expr.filters.animated);
}
if($.uiBackCompat!==false){
$.extend($.effects, {
save: function(element, set){
var i=0, length=set.length;
for(; i < length; i++){
if(set[ i ]!==null){
element.data(dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ]);
}}
},
restore: function(element, set){
var val, i=0, length=set.length;
for(; i < length; i++){
if(set[ i ]!==null){
val=element.data(dataSpace + set[ i ]);
element.css(set[ i ], val);
}}
},
setMode: function(el, mode){
if(mode==="toggle"){
mode=el.is(":hidden") ? "show":"hide";
}
return mode;
},
createWrapper: function(element){
if(element.parent().is(".ui-effects-wrapper")){
return element.parent();
}
var props={
width: element.outerWidth(true),
height: element.outerHeight(true),
"float": element.css("float")
},
wrapper=$("<div></div>")
.addClass("ui-effects-wrapper")
.css({
fontSize: "100%",
background: "transparent",
border: "none",
margin: 0,
padding: 0
}),
size={
width: element.width(),
height: element.height()
},
active=document.activeElement;
try {
active.id;
} catch(e){
active=document.body;
}
element.wrap(wrapper);
if(element[ 0 ]===active||$.contains(element[ 0 ], active)){
$(active).trigger("focus");
}
wrapper=element.parent();
if(element.css("position")==="static"){
wrapper.css({ position: "relative" });
element.css({ position: "relative" });
}else{
$.extend(props, {
position: element.css("position"),
zIndex: element.css("z-index")
});
$.each([ "top", "left", "bottom", "right" ], function(i, pos){
props[ pos ]=element.css(pos);
if(isNaN(parseInt(props[ pos ], 10))){
props[ pos ]="auto";
}});
element.css({
position: "relative",
top: 0,
left: 0,
right: "auto",
bottom: "auto"
});
}
element.css(size);
return wrapper.css(props).show();
},
removeWrapper: function(element){
var active=document.activeElement;
if(element.parent().is(".ui-effects-wrapper")){
element.parent().replaceWith(element);
if(element[ 0 ]===active||$.contains(element[ 0 ], active)){
$(active).trigger("focus");
}}
return element;
}});
}
$.extend($.effects, {
version: "1.12.1",
define: function(name, mode, effect){
if(!effect){
effect=mode;
mode="effect";
}
$.effects.effect[ name ]=effect;
$.effects.effect[ name ].mode=mode;
return effect;
},
scaledDimensions: function(element, percent, direction){
if(percent===0){
return {
height: 0,
width: 0,
outerHeight: 0,
outerWidth: 0
};}
var x=direction!=="horizontal" ?(( percent||100) / 100):1,
y=direction!=="vertical" ?(( percent||100) / 100):1;
return {
height: element.height() * y,
width: element.width() * x,
outerHeight: element.outerHeight() * y,
outerWidth: element.outerWidth() * x
};},
clipToBox: function(animation){
return {
width: animation.clip.right - animation.clip.left,
height: animation.clip.bottom - animation.clip.top,
left: animation.clip.left,
top: animation.clip.top
};},
unshift: function(element, queueLength, count){
var queue=element.queue();
if(queueLength > 1){
queue.splice.apply(queue,
[ 1, 0 ].concat(queue.splice(queueLength, count)));
}
element.dequeue();
},
saveStyle: function(element){
element.data(dataSpaceStyle, element[ 0 ].style.cssText);
},
restoreStyle: function(element){
element[ 0 ].style.cssText=element.data(dataSpaceStyle)||"";
element.removeData(dataSpaceStyle);
},
mode: function(element, mode){
var hidden=element.is(":hidden");
if(mode==="toggle"){
mode=hidden ? "show":"hide";
}
if(hidden ? mode==="hide":mode==="show"){
mode="none";
}
return mode;
},
getBaseline: function(origin, original){
var y, x;
switch(origin[ 0 ]){
case "top":
y=0;
break;
case "middle":
y=0.5;
break;
case "bottom":
y=1;
break;
default:
y=origin[ 0 ] / original.height;
}
switch(origin[ 1 ]){
case "left":
x=0;
break;
case "center":
x=0.5;
break;
case "right":
x=1;
break;
default:
x=origin[ 1 ] / original.width;
}
return {
x: x,
y: y
};},
createPlaceholder: function(element){
var placeholder,
cssPosition=element.css("position"),
position=element.position();
element.css({
marginTop: element.css("marginTop"),
marginBottom: element.css("marginBottom"),
marginLeft: element.css("marginLeft"),
marginRight: element.css("marginRight")
})
.outerWidth(element.outerWidth())
.outerHeight(element.outerHeight());
if(/^(static|relative)/.test(cssPosition)){
cssPosition="absolute";
placeholder=$("<" + element[ 0 ].nodeName + ">").insertAfter(element).css({
display: /^(inline|ruby)/.test(element.css("display")) ?
"inline-block" :
"block",
visibility: "hidden",
marginTop: element.css("marginTop"),
marginBottom: element.css("marginBottom"),
marginLeft: element.css("marginLeft"),
marginRight: element.css("marginRight"),
"float": element.css("float")
})
.outerWidth(element.outerWidth())
.outerHeight(element.outerHeight())
.addClass("ui-effects-placeholder");
element.data(dataSpace + "placeholder", placeholder);
}
element.css({
position: cssPosition,
left: position.left,
top: position.top
});
return placeholder;
},
removePlaceholder: function(element){
var dataKey=dataSpace + "placeholder",
placeholder=element.data(dataKey);
if(placeholder){
placeholder.remove();
element.removeData(dataKey);
}},
cleanUp: function(element){
$.effects.restoreStyle(element);
$.effects.removePlaceholder(element);
},
setTransition: function(element, list, factor, value){
value=value||{};
$.each(list, function(i, x){
var unit=element.cssUnit(x);
if(unit[ 0 ] > 0){
value[ x ]=unit[ 0 ] * factor + unit[ 1 ];
}});
return value;
}});
function _normalizeArguments(effect, options, speed, callback){
if($.isPlainObject(effect)){
options=effect;
effect=effect.effect;
}
effect={ effect: effect };
if(options==null){
options={};}
if($.isFunction(options)){
callback=options;
speed=null;
options={};}
if(typeof options==="number"||$.fx.speeds[ options ]){
callback=speed;
speed=options;
options={};}
if($.isFunction(speed)){
callback=speed;
speed=null;
}
if(options){
$.extend(effect, options);
}
speed=speed||options.duration;
effect.duration=$.fx.off ? 0 :
typeof speed==="number" ? speed :
speed in $.fx.speeds ? $.fx.speeds[ speed ] :
$.fx.speeds._default;
effect.complete=callback||options.complete;
return effect;
}
function standardAnimationOption(option){
if(!option||typeof option==="number"||$.fx.speeds[ option ]){
return true;
}
if(typeof option==="string"&&!$.effects.effect[ option ]){
return true;
}
if($.isFunction(option)){
return true;
}
if(typeof option==="object"&&!option.effect){
return true;
}
return false;
}
$.fn.extend({
effect: function(){
var args=_normalizeArguments.apply(this, arguments),
effectMethod=$.effects.effect[ args.effect ],
defaultMode=effectMethod.mode,
queue=args.queue,
queueName=queue||"fx",
complete=args.complete,
mode=args.mode,
modes=[],
prefilter=function(next){
var el=$(this),
normalizedMode=$.effects.mode(el, mode)||defaultMode;
el.data(dataSpaceAnimated, true);
modes.push(normalizedMode);
if(defaultMode&&(normalizedMode==="show" ||
(normalizedMode===defaultMode&&normalizedMode==="hide"))){
el.show();
}
if(!defaultMode||normalizedMode!=="none"){
$.effects.saveStyle(el);
}
if($.isFunction(next)){
next();
}};
if($.fx.off||!effectMethod){
if(mode){
return this[ mode ](args.duration, complete);
}else{
return this.each(function(){
if(complete){
complete.call(this);
}});
}}
function run(next){
var elem=$(this);
function cleanup(){
elem.removeData(dataSpaceAnimated);
$.effects.cleanUp(elem);
if(args.mode==="hide"){
elem.hide();
}
done();
}
function done(){
if($.isFunction(complete)){
complete.call(elem[ 0 ]);
}
if($.isFunction(next)){
next();
}}
args.mode=modes.shift();
if($.uiBackCompat!==false&&!defaultMode){
if(elem.is(":hidden") ? mode==="hide":mode==="show"){
elem[ mode ]();
done();
}else{
effectMethod.call(elem[ 0 ], args, done);
}}else{
if(args.mode==="none"){
elem[ mode ]();
done();
}else{
effectMethod.call(elem[ 0 ], args, cleanup);
}}
}
return queue===false ?
this.each(prefilter).each(run) :
this.queue(queueName, prefilter).queue(queueName, run);
},
show:(function(orig){
return function(option){
if(standardAnimationOption(option)){
return orig.apply(this, arguments);
}else{
var args=_normalizeArguments.apply(this, arguments);
args.mode="show";
return this.effect.call(this, args);
}};})($.fn.show),
hide:(function(orig){
return function(option){
if(standardAnimationOption(option)){
return orig.apply(this, arguments);
}else{
var args=_normalizeArguments.apply(this, arguments);
args.mode="hide";
return this.effect.call(this, args);
}};})($.fn.hide),
toggle:(function(orig){
return function(option){
if(standardAnimationOption(option)||typeof option==="boolean"){
return orig.apply(this, arguments);
}else{
var args=_normalizeArguments.apply(this, arguments);
args.mode="toggle";
return this.effect.call(this, args);
}};})($.fn.toggle),
cssUnit: function(key){
var style=this.css(key),
val=[];
$.each([ "em", "px", "%", "pt" ], function(i, unit){
if(style.indexOf(unit) > 0){
val=[ parseFloat(style), unit ];
}});
return val;
},
cssClip: function(clipObj){
if(clipObj){
return this.css("clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
clipObj.bottom + "px " + clipObj.left + "px)");
}
return parseClip(this.css("clip"), this);
},
transfer: function(options, done){
var element=$(this),
target=$(options.to),
targetFixed=target.css("position")==="fixed",
body=$("body"),
fixTop=targetFixed ? body.scrollTop():0,
fixLeft=targetFixed ? body.scrollLeft():0,
endPosition=target.offset(),
animation={
top: endPosition.top - fixTop,
left: endPosition.left - fixLeft,
height: target.innerHeight(),
width: target.innerWidth()
},
startPosition=element.offset(),
transfer=$("<div class='ui-effects-transfer'></div>")
.appendTo("body")
.addClass(options.className)
.css({
top: startPosition.top - fixTop,
left: startPosition.left - fixLeft,
height: element.innerHeight(),
width: element.innerWidth(),
position: targetFixed ? "fixed":"absolute"
})
.animate(animation, options.duration, options.easing, function(){
transfer.remove();
if($.isFunction(done)){
done();
}});
}});
function parseClip(str, element){
var outerWidth=element.outerWidth(),
outerHeight=element.outerHeight(),
clipRegex=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
values=clipRegex.exec(str)||[ "", 0, outerWidth, outerHeight, 0 ];
return {
top: parseFloat(values[ 1 ])||0,
right: values[ 2 ]==="auto" ? outerWidth:parseFloat(values[ 2 ]),
bottom: values[ 3 ]==="auto" ? outerHeight:parseFloat(values[ 3 ]),
left: parseFloat(values[ 4 ])||0
};}
$.fx.step.clip=function(fx){
if(!fx.clipInit){
fx.start=$(fx.elem).cssClip();
if(typeof fx.end==="string"){
fx.end=parseClip(fx.end, fx.elem);
}
fx.clipInit=true;
}
$(fx.elem).cssClip({
top: fx.pos *(fx.end.top - fx.start.top) + fx.start.top,
right: fx.pos *(fx.end.right - fx.start.right) + fx.start.right,
bottom: fx.pos *(fx.end.bottom - fx.start.bottom) + fx.start.bottom,
left: fx.pos *(fx.end.left - fx.start.left) + fx.start.left
});
};})();
(function(){
var baseEasings={};
$.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(i, name){
baseEasings[ name ]=function(p){
return Math.pow(p, i + 2);
};});
$.extend(baseEasings, {
Sine: function(p){
return 1 - Math.cos(p * Math.PI / 2);
},
Circ: function(p){
return 1 - Math.sqrt(1 - p * p);
},
Elastic: function(p){
return p===0||p===1 ? p :
-Math.pow(2, 8 *(p - 1)) * Math.sin(((p - 1) * 80 - 7.5) * Math.PI / 15);
},
Back: function(p){
return p * p *(3 * p - 2);
},
Bounce: function(p){
var pow2,
bounce=4;
while(p <(( pow2=Math.pow(2, --bounce)) - 1) / 11){}
return 1 / Math.pow(4, 3 - bounce) - 7.5625 * Math.pow(( pow2 * 3 - 2) / 22 - p, 2);
}});
$.each(baseEasings, function(name, easeIn){
$.easing[ "easeIn" + name ]=easeIn;
$.easing[ "easeOut" + name ]=function(p){
return 1 - easeIn(1 - p);
};
$.easing[ "easeInOut" + name ]=function(p){
return p < 0.5 ?
easeIn(p * 2) / 2 :
1 - easeIn(p * -2 + 2) / 2;
};});
})();
var effect=$.effects;
var effectsEffectBlind=$.effects.define("blind", "hide", function(options, done){
var map={
up: [ "bottom", "top" ],
vertical: [ "bottom", "top" ],
down: [ "top", "bottom" ],
left: [ "right", "left" ],
horizontal: [ "right", "left" ],
right: [ "left", "right" ]
},
element=$(this),
direction=options.direction||"up",
start=element.cssClip(),
animate={ clip: $.extend({}, start) },
placeholder=$.effects.createPlaceholder(element);
animate.clip[ map[ direction ][ 0 ] ]=animate.clip[ map[ direction ][ 1 ] ];
if(options.mode==="show"){
element.cssClip(animate.clip);
if(placeholder){
placeholder.css($.effects.clipToBox(animate));
}
animate.clip=start;
}
if(placeholder){
placeholder.animate($.effects.clipToBox(animate), options.duration, options.easing);
}
element.animate(animate, {
queue: false,
duration: options.duration,
easing: options.easing,
complete: done
});
});
var effectsEffectBounce=$.effects.define("bounce", function(options, done){
var upAnim, downAnim, refValue,
element=$(this),
mode=options.mode,
hide=mode==="hide",
show=mode==="show",
direction=options.direction||"up",
distance=options.distance,
times=options.times||5,
anims=times * 2 +(show||hide ? 1:0),
speed=options.duration / anims,
easing=options.easing,
ref=(direction==="up"||direction==="down") ? "top":"left",
motion=(direction==="up"||direction==="left"),
i=0,
queuelen=element.queue().length;
$.effects.createPlaceholder(element);
refValue=element.css(ref);
if(!distance){
distance=element[ ref==="top" ? "outerHeight":"outerWidth" ]() / 3;
}
if(show){
downAnim={ opacity: 1 };
downAnim[ ref ]=refValue;
element
.css("opacity", 0)
.css(ref, motion ? -distance * 2:distance * 2)
.animate(downAnim, speed, easing);
}
if(hide){
distance=distance / Math.pow(2, times - 1);
}
downAnim={};
downAnim[ ref ]=refValue;
for(; i < times; i++){
upAnim={};
upAnim[ ref ]=(motion ? "-=":"+=") + distance;
element
.animate(upAnim, speed, easing)
.animate(downAnim, speed, easing);
distance=hide ? distance * 2:distance / 2;
}
if(hide){
upAnim={ opacity: 0 };
upAnim[ ref ]=(motion ? "-=":"+=") + distance;
element.animate(upAnim, speed, easing);
}
element.queue(done);
$.effects.unshift(element, queuelen, anims + 1);
});
var effectsEffectClip=$.effects.define("clip", "hide", function(options, done){
var start,
animate={},
element=$(this),
direction=options.direction||"vertical",
both=direction==="both",
horizontal=both||direction==="horizontal",
vertical=both||direction==="vertical";
start=element.cssClip();
animate.clip={
top: vertical ?(start.bottom - start.top) / 2:start.top,
right: horizontal ?(start.right - start.left) / 2:start.right,
bottom: vertical ?(start.bottom - start.top) / 2:start.bottom,
left: horizontal ?(start.right - start.left) / 2:start.left
};
$.effects.createPlaceholder(element);
if(options.mode==="show"){
element.cssClip(animate.clip);
animate.clip=start;
}
element.animate(animate, {
queue: false,
duration: options.duration,
easing: options.easing,
complete: done
});
});
var effectsEffectDrop=$.effects.define("drop", "hide", function(options, done){
var distance,
element=$(this),
mode=options.mode,
show=mode==="show",
direction=options.direction||"left",
ref=(direction==="up"||direction==="down") ? "top":"left",
motion=(direction==="up"||direction==="left") ? "-=":"+=",
oppositeMotion=(motion==="+=") ? "-=":"+=",
animation={
opacity: 0
};
$.effects.createPlaceholder(element);
distance=options.distance ||
element[ ref==="top" ? "outerHeight":"outerWidth" ](true) / 2;
animation[ ref ]=motion + distance;
if(show){
element.css(animation);
animation[ ref ]=oppositeMotion + distance;
animation.opacity=1;
}
element.animate(animation, {
queue: false,
duration: options.duration,
easing: options.easing,
complete: done
});
});
var effectsEffectExplode=$.effects.define("explode", "hide", function(options, done){
var i, j, left, top, mx, my,
rows=options.pieces ? Math.round(Math.sqrt(options.pieces)):3,
cells=rows,
element=$(this),
mode=options.mode,
show=mode==="show",
offset=element.show().css("visibility", "hidden").offset(),
width=Math.ceil(element.outerWidth() / cells),
height=Math.ceil(element.outerHeight() / rows),
pieces=[];
function childComplete(){
pieces.push(this);
if(pieces.length===rows * cells){
animComplete();
}}
for(i=0; i < rows; i++){
top=offset.top + i * height;
my=i -(rows - 1) / 2;
for(j=0; j < cells; j++){
left=offset.left + j * width;
mx=j -(cells - 1) / 2;
element
.clone()
.appendTo("body")
.wrap("<div></div>")
.css({
position: "absolute",
visibility: "visible",
left: -j * width,
top: -i * height
})
.parent()
.addClass("ui-effects-explode")
.css({
position: "absolute",
overflow: "hidden",
width: width,
height: height,
left: left +(show ? mx * width:0),
top: top +(show ? my * height:0),
opacity: show ? 0:1
})
.animate({
left: left +(show ? 0:mx * width),
top: top +(show ? 0:my * height),
opacity: show ? 1:0
}, options.duration||500, options.easing, childComplete);
}}
function animComplete(){
element.css({
visibility: "visible"
});
$(pieces).remove();
done();
}});
var effectsEffectFade=$.effects.define("fade", "toggle", function(options, done){
var show=options.mode==="show";
$(this)
.css("opacity", show ? 0:1)
.animate({
opacity: show ? 1:0
}, {
queue: false,
duration: options.duration,
easing: options.easing,
complete: done
});
});
var effectsEffectFold=$.effects.define("fold", "hide", function(options, done){
var element=$(this),
mode=options.mode,
show=mode==="show",
hide=mode==="hide",
size=options.size||15,
percent=/([0-9]+)%/.exec(size),
horizFirst = !!options.horizFirst,
ref=horizFirst ? [ "right", "bottom" ]:[ "bottom", "right" ],
duration=options.duration / 2,
placeholder=$.effects.createPlaceholder(element),
start=element.cssClip(),
animation1={ clip: $.extend({}, start) },
animation2={ clip: $.extend({}, start) },
distance=[ start[ ref[ 0 ] ], start[ ref[ 1 ] ] ],
queuelen=element.queue().length;
if(percent){
size=parseInt(percent[ 1 ], 10) / 100 * distance[ hide ? 0:1 ];
}
animation1.clip[ ref[ 0 ] ]=size;
animation2.clip[ ref[ 0 ] ]=size;
animation2.clip[ ref[ 1 ] ]=0;
if(show){
element.cssClip(animation2.clip);
if(placeholder){
placeholder.css($.effects.clipToBox(animation2));
}
animation2.clip=start;
}
element
.queue(function(next){
if(placeholder){
placeholder
.animate($.effects.clipToBox(animation1), duration, options.easing)
.animate($.effects.clipToBox(animation2), duration, options.easing);
}
next();
})
.animate(animation1, duration, options.easing)
.animate(animation2, duration, options.easing)
.queue(done);
$.effects.unshift(element, queuelen, 4);
});
var effectsEffectHighlight=$.effects.define("highlight", "show", function(options, done){
var element=$(this),
animation={
backgroundColor: element.css("backgroundColor")
};
if(options.mode==="hide"){
animation.opacity=0;
}
$.effects.saveStyle(element);
element
.css({
backgroundImage: "none",
backgroundColor: options.color||"#ffff99"
})
.animate(animation, {
queue: false,
duration: options.duration,
easing: options.easing,
complete: done
});
});
var effectsEffectSize=$.effects.define("size", function(options, done){
var baseline, factor, temp,
element=$(this),
cProps=[ "fontSize" ],
vProps=[ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ],
hProps=[ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ],
mode=options.mode,
restore=mode!=="effect",
scale=options.scale||"both",
origin=options.origin||[ "middle", "center" ],
position=element.css("position"),
pos=element.position(),
original=$.effects.scaledDimensions(element),
from=options.from||original,
to=options.to||$.effects.scaledDimensions(element, 0);
$.effects.createPlaceholder(element);
if(mode==="show"){
temp=from;
from=to;
to=temp;
}
factor={
from: {
y: from.height / original.height,
x: from.width / original.width
},
to: {
y: to.height / original.height,
x: to.width / original.width
}};
if(scale==="box"||scale==="both"){
if(factor.from.y!==factor.to.y){
from=$.effects.setTransition(element, vProps, factor.from.y, from);
to=$.effects.setTransition(element, vProps, factor.to.y, to);
}
if(factor.from.x!==factor.to.x){
from=$.effects.setTransition(element, hProps, factor.from.x, from);
to=$.effects.setTransition(element, hProps, factor.to.x, to);
}}
if(scale==="content"||scale==="both"){
if(factor.from.y!==factor.to.y){
from=$.effects.setTransition(element, cProps, factor.from.y, from);
to=$.effects.setTransition(element, cProps, factor.to.y, to);
}}
if(origin){
baseline=$.effects.getBaseline(origin, original);
from.top=(original.outerHeight - from.outerHeight) * baseline.y + pos.top;
from.left=(original.outerWidth - from.outerWidth) * baseline.x + pos.left;
to.top=(original.outerHeight - to.outerHeight) * baseline.y + pos.top;
to.left=(original.outerWidth - to.outerWidth) * baseline.x + pos.left;
}
element.css(from);
if(scale==="content"||scale==="both"){
vProps=vProps.concat([ "marginTop", "marginBottom" ]).concat(cProps);
hProps=hProps.concat([ "marginLeft", "marginRight" ]);
element.find("*[width]").each(function(){
var child=$(this),
childOriginal=$.effects.scaledDimensions(child),
childFrom={
height: childOriginal.height * factor.from.y,
width: childOriginal.width * factor.from.x,
outerHeight: childOriginal.outerHeight * factor.from.y,
outerWidth: childOriginal.outerWidth * factor.from.x
},
childTo={
height: childOriginal.height * factor.to.y,
width: childOriginal.width * factor.to.x,
outerHeight: childOriginal.height * factor.to.y,
outerWidth: childOriginal.width * factor.to.x
};
if(factor.from.y!==factor.to.y){
childFrom=$.effects.setTransition(child, vProps, factor.from.y, childFrom);
childTo=$.effects.setTransition(child, vProps, factor.to.y, childTo);
}
if(factor.from.x!==factor.to.x){
childFrom=$.effects.setTransition(child, hProps, factor.from.x, childFrom);
childTo=$.effects.setTransition(child, hProps, factor.to.x, childTo);
}
if(restore){
$.effects.saveStyle(child);
}
child.css(childFrom);
child.animate(childTo, options.duration, options.easing, function(){
if(restore){
$.effects.restoreStyle(child);
}});
});
}
element.animate(to, {
queue: false,
duration: options.duration,
easing: options.easing,
complete: function(){
var offset=element.offset();
if(to.opacity===0){
element.css("opacity", from.opacity);
}
if(!restore){
element
.css("position", position==="static" ? "relative":position)
.offset(offset);
$.effects.saveStyle(element);
}
done();
}});
});
var effectsEffectScale=$.effects.define("scale", function(options, done){
var el=$(this),
mode=options.mode,
percent=parseInt(options.percent, 10) ||
(parseInt(options.percent, 10)===0 ? 0:(mode!=="effect" ? 0:100)),
newOptions=$.extend(true, {
from: $.effects.scaledDimensions(el),
to: $.effects.scaledDimensions(el, percent, options.direction||"both"),
origin: options.origin||[ "middle", "center" ]
}, options);
if(options.fade){
newOptions.from.opacity=1;
newOptions.to.opacity=0;
}
$.effects.effect.size.call(this, newOptions, done);
});
var effectsEffectPuff=$.effects.define("puff", "hide", function(options, done){
var newOptions=$.extend(true, {}, options, {
fade: true,
percent: parseInt(options.percent, 10)||150
});
$.effects.effect.scale.call(this, newOptions, done);
});
var effectsEffectPulsate=$.effects.define("pulsate", "show", function(options, done){
var element=$(this),
mode=options.mode,
show=mode==="show",
hide=mode==="hide",
showhide=show||hide,
anims=(( options.times||5) * 2) +(showhide ? 1:0),
duration=options.duration / anims,
animateTo=0,
i=1,
queuelen=element.queue().length;
if(show||!element.is(":visible")){
element.css("opacity", 0).show();
animateTo=1;
}
for(; i < anims; i++){
element.animate({ opacity: animateTo }, duration, options.easing);
animateTo=1 - animateTo;
}
element.animate({ opacity: animateTo }, duration, options.easing);
element.queue(done);
$.effects.unshift(element, queuelen, anims + 1);
});
var effectsEffectShake=$.effects.define("shake", function(options, done){
var i=1,
element=$(this),
direction=options.direction||"left",
distance=options.distance||20,
times=options.times||3,
anims=times * 2 + 1,
speed=Math.round(options.duration / anims),
ref=(direction==="up"||direction==="down") ? "top":"left",
positiveMotion=(direction==="up"||direction==="left"),
animation={},
animation1={},
animation2={},
queuelen=element.queue().length;
$.effects.createPlaceholder(element);
animation[ ref ]=(positiveMotion ? "-=":"+=") + distance;
animation1[ ref ]=(positiveMotion ? "+=":"-=") + distance * 2;
animation2[ ref ]=(positiveMotion ? "-=":"+=") + distance * 2;
element.animate(animation, speed, options.easing);
for(; i < times; i++){
element
.animate(animation1, speed, options.easing)
.animate(animation2, speed, options.easing);
}
element
.animate(animation1, speed, options.easing)
.animate(animation, speed / 2, options.easing)
.queue(done);
$.effects.unshift(element, queuelen, anims + 1);
});
var effectsEffectSlide=$.effects.define("slide", "show", function(options, done){
var startClip, startRef,
element=$(this),
map={
up: [ "bottom", "top" ],
down: [ "top", "bottom" ],
left: [ "right", "left" ],
right: [ "left", "right" ]
},
mode=options.mode,
direction=options.direction||"left",
ref=(direction==="up"||direction==="down") ? "top":"left",
positiveMotion=(direction==="up"||direction==="left"),
distance=options.distance ||
element[ ref==="top" ? "outerHeight":"outerWidth" ](true),
animation={};
$.effects.createPlaceholder(element);
startClip=element.cssClip();
startRef=element.position()[ ref ];
animation[ ref ]=(positiveMotion ? -1:1) * distance + startRef;
animation.clip=element.cssClip();
animation.clip[ map[ direction ][ 1 ] ]=animation.clip[ map[ direction ][ 0 ] ];
if(mode==="show"){
element.cssClip(animation.clip);
element.css(ref, animation[ ref ]);
animation.clip=startClip;
animation[ ref ]=startRef;
}
element.animate(animation, {
queue: false,
duration: options.duration,
easing: options.easing,
complete: done
});
});
var effect;
if($.uiBackCompat!==false){
effect=$.effects.define("transfer", function(options, done){
$(this).transfer(options, done);
});
}
var effectsEffectTransfer=effect;
$.ui.focusable=function(element, hasTabindex){
var map, mapName, img, focusableIfVisible, fieldset,
nodeName=element.nodeName.toLowerCase();
if("area"===nodeName){
map=element.parentNode;
mapName=map.name;
if(!element.href||!mapName||map.nodeName.toLowerCase()!=="map"){
return false;
}
img=$("img[usemap='#" + mapName + "']");
return img.length > 0&&img.is(":visible");
}
if(/^(input|select|textarea|button|object)$/.test(nodeName)){
focusableIfVisible = !element.disabled;
if(focusableIfVisible){
fieldset=$(element).closest("fieldset")[ 0 ];
if(fieldset){
focusableIfVisible = !fieldset.disabled;
}}
}else if("a"===nodeName){
focusableIfVisible=element.href||hasTabindex;
}else{
focusableIfVisible=hasTabindex;
}
return focusableIfVisible&&$(element).is(":visible")&&visible($(element));
};
function visible(element){
var visibility=element.css("visibility");
while(visibility==="inherit"){
element=element.parent();
visibility=element.css("visibility");
}
return visibility!=="hidden";
}
$.extend($.expr[ ":" ], {
focusable: function(element){
return $.ui.focusable(element, $.attr(element, "tabindex")!=null);
}});
var focusable=$.ui.focusable;
var form=$.fn.form=function(){
return typeof this[ 0 ].form==="string" ? this.closest("form"):$(this[ 0 ].form);
};
var formResetMixin=$.ui.formResetMixin={
_formResetHandler: function(){
var form=$(this);
setTimeout(function(){
var instances=form.data("ui-form-reset-instances");
$.each(instances, function(){
this.refresh();
});
});
},
_bindFormResetHandler: function(){
this.form=this.element.form();
if(!this.form.length){
return;
}
var instances=this.form.data("ui-form-reset-instances")||[];
if(!instances.length){
this.form.on("reset.ui-form-reset", this._formResetHandler);
}
instances.push(this);
this.form.data("ui-form-reset-instances", instances);
},
_unbindFormResetHandler: function(){
if(!this.form.length){
return;
}
var instances=this.form.data("ui-form-reset-instances");
instances.splice($.inArray(this, instances), 1);
if(instances.length){
this.form.data("ui-form-reset-instances", instances);
}else{
this.form
.removeData("ui-form-reset-instances")
.off("reset.ui-form-reset");
}}
};
if($.fn.jquery.substring(0, 3)==="1.7"){
$.each([ "Width", "Height" ], function(i, name){
var side=name==="Width" ? [ "Left", "Right" ]:[ "Top", "Bottom" ],
type=name.toLowerCase(),
orig={
innerWidth: $.fn.innerWidth,
innerHeight: $.fn.innerHeight,
outerWidth: $.fn.outerWidth,
outerHeight: $.fn.outerHeight
};
function reduce(elem, size, border, margin){
$.each(side, function(){
size -=parseFloat($.css(elem, "padding" + this))||0;
if(border){
size -=parseFloat($.css(elem, "border" + this + "Width"))||0;
}
if(margin){
size -=parseFloat($.css(elem, "margin" + this))||0;
}});
return size;
}
$.fn[ "inner" + name ]=function(size){
if(size===undefined){
return orig[ "inner" + name ].call(this);
}
return this.each(function(){
$(this).css(type, reduce(this, size) + "px");
});
};
$.fn[ "outer" + name ]=function(size, margin){
if(typeof size!=="number"){
return orig[ "outer" + name ].call(this, size);
}
return this.each(function(){
$(this).css(type, reduce(this, size, true, margin) + "px");
});
};});
$.fn.addBack=function(selector){
return this.add(selector==null ?
this.prevObject:this.prevObject.filter(selector)
);
};}
;
var keycode=$.ui.keyCode={
BACKSPACE: 8,
COMMA: 188,
DELETE: 46,
DOWN: 40,
END: 35,
ENTER: 13,
ESCAPE: 27,
HOME: 36,
LEFT: 37,
PAGE_DOWN: 34,
PAGE_UP: 33,
PERIOD: 190,
RIGHT: 39,
SPACE: 32,
TAB: 9,
UP: 38
};
var escapeSelector=$.ui.escapeSelector=(function(){
var selectorEscape=/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
return function(selector){
return selector.replace(selectorEscape, "\\$1");
};})();
var labels=$.fn.labels=function(){
var ancestor, selector, id, labels, ancestors;
if(this[ 0 ].labels&&this[ 0 ].labels.length){
return this.pushStack(this[ 0 ].labels);
}
labels=this.eq(0).parents("label");
id=this.attr("id");
if(id){
ancestor=this.eq(0).parents().last();
ancestors=ancestor.add(ancestor.length ? ancestor.siblings():this.siblings());
selector="label[for='" + $.ui.escapeSelector(id) + "']";
labels=labels.add(ancestors.find(selector).addBack(selector));
}
return this.pushStack(labels);
};
var scrollParent=$.fn.scrollParent=function(includeHidden){
var position=this.css("position"),
excludeStaticParent=position==="absolute",
overflowRegex=includeHidden ? /(auto|scroll|hidden)/:/(auto|scroll)/,
scrollParent=this.parents().filter(function(){
var parent=$(this);
if(excludeStaticParent&&parent.css("position")==="static"){
return false;
}
return overflowRegex.test(parent.css("overflow") + parent.css("overflow-y") +
parent.css("overflow-x"));
}).eq(0);
return position==="fixed"||!scrollParent.length ?
$(this[ 0 ].ownerDocument||document) :
scrollParent;
};
var tabbable=$.extend($.expr[ ":" ], {
tabbable: function(element){
var tabIndex=$.attr(element, "tabindex"),
hasTabindex=tabIndex!=null;
return(!hasTabindex||tabIndex >=0)&&$.ui.focusable(element, hasTabindex);
}});
var uniqueId=$.fn.extend({
uniqueId:(function(){
var uuid=0;
return function(){
return this.each(function(){
if(!this.id){
this.id="ui-id-" + ( ++uuid);
}});
};})(),
removeUniqueId: function(){
return this.each(function(){
if(/^ui-id-\d+$/.test(this.id)){
$(this).removeAttr("id");
}});
}});
var widgetsAccordion=$.widget("ui.accordion", {
version: "1.12.1",
options: {
active: 0,
animate: {},
classes: {
"ui-accordion-header": "ui-corner-top",
"ui-accordion-header-collapsed": "ui-corner-all",
"ui-accordion-content": "ui-corner-bottom"
},
collapsible: false,
event: "click",
header: "> li > :first-child, > :not(li):even",
heightStyle: "auto",
icons: {
activeHeader: "ui-icon-triangle-1-s",
header: "ui-icon-triangle-1-e"
},
activate: null,
beforeActivate: null
},
hideProps: {
borderTopWidth: "hide",
borderBottomWidth: "hide",
paddingTop: "hide",
paddingBottom: "hide",
height: "hide"
},
showProps: {
borderTopWidth: "show",
borderBottomWidth: "show",
paddingTop: "show",
paddingBottom: "show",
height: "show"
},
_create: function(){
var options=this.options;
this.prevShow=this.prevHide=$();
this._addClass("ui-accordion", "ui-widget ui-helper-reset");
this.element.attr("role", "tablist");
if(!options.collapsible&&(options.active===false||options.active==null)){
options.active=0;
}
this._processPanels();
if(options.active < 0){
options.active +=this.headers.length;
}
this._refresh();
},
_getCreateEventData: function(){
return {
header: this.active,
panel: !this.active.length ? $():this.active.next()
};},
_createIcons: function(){
var icon, children,
icons=this.options.icons;
if(icons){
icon=$("<span>");
this._addClass(icon, "ui-accordion-header-icon", "ui-icon " + icons.header);
icon.prependTo(this.headers);
children=this.active.children(".ui-accordion-header-icon");
this._removeClass(children, icons.header)
._addClass(children, null, icons.activeHeader)
._addClass(this.headers, "ui-accordion-icons");
}},
_destroyIcons: function(){
this._removeClass(this.headers, "ui-accordion-icons");
this.headers.children(".ui-accordion-header-icon").remove();
},
_destroy: function(){
var contents;
this.element.removeAttr("role");
this.headers
.removeAttr("role aria-expanded aria-selected aria-controls tabIndex")
.removeUniqueId();
this._destroyIcons();
contents=this.headers.next()
.css("display", "")
.removeAttr("role aria-hidden aria-labelledby")
.removeUniqueId();
if(this.options.heightStyle!=="content"){
contents.css("height", "");
}},
_setOption: function(key, value){
if(key==="active"){
this._activate(value);
return;
}
if(key==="event"){
if(this.options.event){
this._off(this.headers, this.options.event);
}
this._setupEvents(value);
}
this._super(key, value);
if(key==="collapsible"&&!value&&this.options.active===false){
this._activate(0);
}
if(key==="icons"){
this._destroyIcons();
if(value){
this._createIcons();
}}
},
_setOptionDisabled: function(value){
this._super(value);
this.element.attr("aria-disabled", value);
this._toggleClass(null, "ui-state-disabled", !!value);
this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled",
!!value);
},
_keydown: function(event){
if(event.altKey||event.ctrlKey){
return;
}
var keyCode=$.ui.keyCode,
length=this.headers.length,
currentIndex=this.headers.index(event.target),
toFocus=false;
switch(event.keyCode){
case keyCode.RIGHT:
case keyCode.DOWN:
toFocus=this.headers[(currentIndex + 1) % length ];
break;
case keyCode.LEFT:
case keyCode.UP:
toFocus=this.headers[(currentIndex - 1 + length) % length ];
break;
case keyCode.SPACE:
case keyCode.ENTER:
this._eventHandler(event);
break;
case keyCode.HOME:
toFocus=this.headers[ 0 ];
break;
case keyCode.END:
toFocus=this.headers[ length - 1 ];
break;
}
if(toFocus){
$(event.target).attr("tabIndex", -1);
$(toFocus).attr("tabIndex", 0);
$(toFocus).trigger("focus");
event.preventDefault();
}},
_panelKeyDown: function(event){
if(event.keyCode===$.ui.keyCode.UP&&event.ctrlKey){
$(event.currentTarget).prev().trigger("focus");
}},
refresh: function(){
var options=this.options;
this._processPanels();
if(( options.active===false&&options.collapsible===true) ||
!this.headers.length){
options.active=false;
this.active=$();
}else if(options.active===false){
this._activate(0);
}else if(this.active.length&&!$.contains(this.element[ 0 ], this.active[ 0 ])){
if(this.headers.length===this.headers.find(".ui-state-disabled").length){
options.active=false;
this.active=$();
}else{
this._activate(Math.max(0, options.active - 1));
}}else{
options.active=this.headers.index(this.active);
}
this._destroyIcons();
this._refresh();
},
_processPanels: function(){
var prevHeaders=this.headers,
prevPanels=this.panels;
this.headers=this.element.find(this.options.header);
this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed",
"ui-state-default");
this.panels=this.headers.next().filter(":not(.ui-accordion-content-active)").hide();
this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content");
if(prevPanels){
this._off(prevHeaders.not(this.headers));
this._off(prevPanels.not(this.panels));
}},
_refresh: function(){
var maxHeight,
options=this.options,
heightStyle=options.heightStyle,
parent=this.element.parent();
this.active=this._findActive(options.active);
this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")
._removeClass(this.active, "ui-accordion-header-collapsed");
this._addClass(this.active.next(), "ui-accordion-content-active");
this.active.next().show();
this.headers
.attr("role", "tab")
.each(function(){
var header=$(this),
headerId=header.uniqueId().attr("id"),
panel=header.next(),
panelId=panel.uniqueId().attr("id");
header.attr("aria-controls", panelId);
panel.attr("aria-labelledby", headerId);
})
.next()
.attr("role", "tabpanel");
this.headers
.not(this.active)
.attr({
"aria-selected": "false",
"aria-expanded": "false",
tabIndex: -1
})
.next()
.attr({
"aria-hidden": "true"
})
.hide();
if(!this.active.length){
this.headers.eq(0).attr("tabIndex", 0);
}else{
this.active.attr({
"aria-selected": "true",
"aria-expanded": "true",
tabIndex: 0
})
.next()
.attr({
"aria-hidden": "false"
});
}
this._createIcons();
this._setupEvents(options.event);
if(heightStyle==="fill"){
maxHeight=parent.height();
this.element.siblings(":visible").each(function(){
var elem=$(this),
position=elem.css("position");
if(position==="absolute"||position==="fixed"){
return;
}
maxHeight -=elem.outerHeight(true);
});
this.headers.each(function(){
maxHeight -=$(this).outerHeight(true);
});
this.headers.next()
.each(function(){
$(this).height(Math.max(0, maxHeight -
$(this).innerHeight() + $(this).height()));
})
.css("overflow", "auto");
}else if(heightStyle==="auto"){
maxHeight=0;
this.headers.next()
.each(function(){
var isVisible=$(this).is(":visible");
if(!isVisible){
$(this).show();
}
maxHeight=Math.max(maxHeight, $(this).css("height", "").height());
if(!isVisible){
$(this).hide();
}})
.height(maxHeight);
}},
_activate: function(index){
var active=this._findActive(index)[ 0 ];
if(active===this.active[ 0 ]){
return;
}
active=active||this.active[ 0 ];
this._eventHandler({
target: active,
currentTarget: active,
preventDefault: $.noop
});
},
_findActive: function(selector){
return typeof selector==="number" ? this.headers.eq(selector):$();
},
_setupEvents: function(event){
var events={
keydown: "_keydown"
};
if(event){
$.each(event.split(" "), function(index, eventName){
events[ eventName ]="_eventHandler";
});
}
this._off(this.headers.add(this.headers.next()));
this._on(this.headers, events);
this._on(this.headers.next(), { keydown: "_panelKeyDown" });
this._hoverable(this.headers);
this._focusable(this.headers);
},
_eventHandler: function(event){
var activeChildren, clickedChildren,
options=this.options,
active=this.active,
clicked=$(event.currentTarget),
clickedIsActive=clicked[ 0 ]===active[ 0 ],
collapsing=clickedIsActive&&options.collapsible,
toShow=collapsing ? $():clicked.next(),
toHide=active.next(),
eventData={
oldHeader: active,
oldPanel: toHide,
newHeader: collapsing ? $():clicked,
newPanel: toShow
};
event.preventDefault();
if((clickedIsActive&&!options.collapsible) ||
(this._trigger("beforeActivate", event, eventData)===false)){
return;
}
options.active=collapsing ? false:this.headers.index(clicked);
this.active=clickedIsActive ? $():clicked;
this._toggle(eventData);
this._removeClass(active, "ui-accordion-header-active", "ui-state-active");
if(options.icons){
activeChildren=active.children(".ui-accordion-header-icon");
this._removeClass(activeChildren, null, options.icons.activeHeader)
._addClass(activeChildren, null, options.icons.header);
}
if(!clickedIsActive){
this._removeClass(clicked, "ui-accordion-header-collapsed")
._addClass(clicked, "ui-accordion-header-active", "ui-state-active");
if(options.icons){
clickedChildren=clicked.children(".ui-accordion-header-icon");
this._removeClass(clickedChildren, null, options.icons.header)
._addClass(clickedChildren, null, options.icons.activeHeader);
}
this._addClass(clicked.next(), "ui-accordion-content-active");
}},
_toggle: function(data){
var toShow=data.newPanel,
toHide=this.prevShow.length ? this.prevShow:data.oldPanel;
this.prevShow.add(this.prevHide).stop(true, true);
this.prevShow=toShow;
this.prevHide=toHide;
if(this.options.animate){
this._animate(toShow, toHide, data);
}else{
toHide.hide();
toShow.show();
this._toggleComplete(data);
}
toHide.attr({
"aria-hidden": "true"
});
toHide.prev().attr({
"aria-selected": "false",
"aria-expanded": "false"
});
if(toShow.length&&toHide.length){
toHide.prev().attr({
"tabIndex": -1,
"aria-expanded": "false"
});
}else if(toShow.length){
this.headers.filter(function(){
return parseInt($(this).attr("tabIndex"), 10)===0;
})
.attr("tabIndex", -1);
}
toShow
.attr("aria-hidden", "false")
.prev()
.attr({
"aria-selected": "true",
"aria-expanded": "true",
tabIndex: 0
});
},
_animate: function(toShow, toHide, data){
var total, easing, duration,
that=this,
adjust=0,
boxSizing=toShow.css("box-sizing"),
down=toShow.length &&
(!toHide.length||(toShow.index() < toHide.index())),
animate=this.options.animate||{},
options=down&&animate.down||animate,
complete=function(){
that._toggleComplete(data);
};
if(typeof options==="number"){
duration=options;
}
if(typeof options==="string"){
easing=options;
}
easing=easing||options.easing||animate.easing;
duration=duration||options.duration||animate.duration;
if(!toHide.length){
return toShow.animate(this.showProps, duration, easing, complete);
}
if(!toShow.length){
return toHide.animate(this.hideProps, duration, easing, complete);
}
total=toShow.show().outerHeight();
toHide.animate(this.hideProps, {
duration: duration,
easing: easing,
step: function(now, fx){
fx.now=Math.round(now);
}});
toShow
.hide()
.animate(this.showProps, {
duration: duration,
easing: easing,
complete: complete,
step: function(now, fx){
fx.now=Math.round(now);
if(fx.prop!=="height"){
if(boxSizing==="content-box"){
adjust +=fx.now;
}}else if(that.options.heightStyle!=="content"){
fx.now=Math.round(total - toHide.outerHeight() - adjust);
adjust=0;
}}
});
},
_toggleComplete: function(data){
var toHide=data.oldPanel,
prev=toHide.prev();
this._removeClass(toHide, "ui-accordion-content-active");
this._removeClass(prev, "ui-accordion-header-active")
._addClass(prev, "ui-accordion-header-collapsed");
if(toHide.length){
toHide.parent()[ 0 ].className=toHide.parent()[ 0 ].className;
}
this._trigger("activate", null, data);
}});
var safeActiveElement=$.ui.safeActiveElement=function(document){
var activeElement;
try {
activeElement=document.activeElement;
} catch(error){
activeElement=document.body;
}
if(!activeElement){
activeElement=document.body;
}
if(!activeElement.nodeName){
activeElement=document.body;
}
return activeElement;
};
var widgetsMenu=$.widget("ui.menu", {
version: "1.12.1",
defaultElement: "<ul>",
delay: 300,
options: {
icons: {
submenu: "ui-icon-caret-1-e"
},
items: "> *",
menus: "ul",
position: {
my: "left top",
at: "right top"
},
role: "menu",
blur: null,
focus: null,
select: null
},
_create: function(){
this.activeMenu=this.element;
this.mouseHandled=false;
this.element
.uniqueId()
.attr({
role: this.options.role,
tabIndex: 0
});
this._addClass("ui-menu", "ui-widget ui-widget-content");
this._on({
"mousedown .ui-menu-item": function(event){
event.preventDefault();
},
"click .ui-menu-item": function(event){
var target=$(event.target);
var active=$($.ui.safeActiveElement(this.document[ 0 ]));
if(!this.mouseHandled&&target.not(".ui-state-disabled").length){
this.select(event);
if(!event.isPropagationStopped()){
this.mouseHandled=true;
}
if(target.has(".ui-menu").length){
this.expand (event);
}else if(!this.element.is(":focus") &&
active.closest(".ui-menu").length){
this.element.trigger("focus", [ true ]);
if(this.active&&this.active.parents(".ui-menu").length===1){
clearTimeout(this.timer);
}}
}},
"mouseenter .ui-menu-item": function(event){
if(this.previousFilter){
return;
}
var actualTarget=$(event.target).closest(".ui-menu-item"),
target=$(event.currentTarget);
if(actualTarget[ 0 ]!==target[ 0 ]){
return;
}
this._removeClass(target.siblings().children(".ui-state-active"),
null, "ui-state-active");
this.focus(event, target);
},
mouseleave: "collapseAll",
"mouseleave .ui-menu": "collapseAll",
focus: function(event, keepActiveItem){
var item=this.active||this.element.find(this.options.items).eq(0);
if(!keepActiveItem){
this.focus(event, item);
}},
blur: function(event){
this._delay(function(){
var notContained = !$.contains(this.element[ 0 ],
$.ui.safeActiveElement(this.document[ 0 ])
);
if(notContained){
this.collapseAll(event);
}});
},
keydown: "_keydown"
});
this.refresh();
this._on(this.document, {
click: function(event){
if(this._closeOnDocumentClick(event)){
this.collapseAll(event);
}
this.mouseHandled=false;
}});
},
_destroy: function(){
var items=this.element.find(".ui-menu-item")
.removeAttr("role aria-disabled"),
submenus=items.children(".ui-menu-item-wrapper")
.removeUniqueId()
.removeAttr("tabIndex role aria-haspopup");
this.element
.removeAttr("aria-activedescendant")
.find(".ui-menu").addBack()
.removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled " +
"tabIndex")
.removeUniqueId()
.show();
submenus.children().each(function(){
var elem=$(this);
if(elem.data("ui-menu-submenu-caret")){
elem.remove();
}});
},
_keydown: function(event){
var match, prev, character, skip,
preventDefault=true;
switch(event.keyCode){
case $.ui.keyCode.PAGE_UP:
this.previousPage(event);
break;
case $.ui.keyCode.PAGE_DOWN:
this.nextPage(event);
break;
case $.ui.keyCode.HOME:
this._move("first", "first", event);
break;
case $.ui.keyCode.END:
this._move("last", "last", event);
break;
case $.ui.keyCode.UP:
this.previous(event);
break;
case $.ui.keyCode.DOWN:
this.next(event);
break;
case $.ui.keyCode.LEFT:
this.collapse(event);
break;
case $.ui.keyCode.RIGHT:
if(this.active&&!this.active.is(".ui-state-disabled")){
this.expand (event);
}
break;
case $.ui.keyCode.ENTER:
case $.ui.keyCode.SPACE:
this._activate(event);
break;
case $.ui.keyCode.ESCAPE:
this.collapse(event);
break;
default:
preventDefault=false;
prev=this.previousFilter||"";
skip=false;
character=event.keyCode >=96&&event.keyCode <=105 ?
(event.keyCode - 96).toString():String.fromCharCode(event.keyCode);
clearTimeout(this.filterTimer);
if(character===prev){
skip=true;
}else{
character=prev + character;
}
match=this._filterMenuItems(character);
match=skip&&match.index(this.active.next())!==-1 ?
this.active.nextAll(".ui-menu-item") :
match;
if(!match.length){
character=String.fromCharCode(event.keyCode);
match=this._filterMenuItems(character);
}
if(match.length){
this.focus(event, match);
this.previousFilter=character;
this.filterTimer=this._delay(function(){
delete this.previousFilter;
}, 1000);
}else{
delete this.previousFilter;
}}
if(preventDefault){
event.preventDefault();
}},
_activate: function(event){
if(this.active&&!this.active.is(".ui-state-disabled")){
if(this.active.children("[aria-haspopup='true']").length){
this.expand (event);
}else{
this.select(event);
}}
},
refresh: function(){
var menus, items, newSubmenus, newItems, newWrappers,
that=this,
icon=this.options.icons.submenu,
submenus=this.element.find(this.options.menus);
this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length);
newSubmenus=submenus.filter(":not(.ui-menu)")
.hide()
.attr({
role: this.options.role,
"aria-hidden": "true",
"aria-expanded": "false"
})
.each(function(){
var menu=$(this),
item=menu.prev(),
submenuCaret=$("<span>").data("ui-menu-submenu-caret", true);
that._addClass(submenuCaret, "ui-menu-icon", "ui-icon " + icon);
item
.attr("aria-haspopup", "true")
.prepend(submenuCaret);
menu.attr("aria-labelledby", item.attr("id"));
});
this._addClass(newSubmenus, "ui-menu", "ui-widget ui-widget-content ui-front");
menus=submenus.add(this.element);
items=menus.find(this.options.items);
items.not(".ui-menu-item").each(function(){
var item=$(this);
if(that._isDivider(item)){
that._addClass(item, "ui-menu-divider", "ui-widget-content");
}});
newItems=items.not(".ui-menu-item, .ui-menu-divider");
newWrappers=newItems.children()
.not(".ui-menu")
.uniqueId()
.attr({
tabIndex: -1,
role: this._itemRole()
});
this._addClass(newItems, "ui-menu-item")
._addClass(newWrappers, "ui-menu-item-wrapper");
items.filter(".ui-state-disabled").attr("aria-disabled", "true");
if(this.active&&!$.contains(this.element[ 0 ], this.active[ 0 ])){
this.blur();
}},
_itemRole: function(){
return {
menu: "menuitem",
listbox: "option"
}[ this.options.role ];
},
_setOption: function(key, value){
if(key==="icons"){
var icons=this.element.find(".ui-menu-icon");
this._removeClass(icons, null, this.options.icons.submenu)
._addClass(icons, null, value.submenu);
}
this._super(key, value);
},
_setOptionDisabled: function(value){
this._super(value);
this.element.attr("aria-disabled", String(value));
this._toggleClass(null, "ui-state-disabled", !!value);
},
focus: function(event, item){
var nested, focused, activeParent;
this.blur(event, event&&event.type==="focus");
this._scrollIntoView(item);
this.active=item.first();
focused=this.active.children(".ui-menu-item-wrapper");
this._addClass(focused, null, "ui-state-active");
if(this.options.role){
this.element.attr("aria-activedescendant", focused.attr("id"));
}
activeParent=this.active
.parent()
.closest(".ui-menu-item")
.children(".ui-menu-item-wrapper");
this._addClass(activeParent, null, "ui-state-active");
if(event&&event.type==="keydown"){
this._close();
}else{
this.timer=this._delay(function(){
this._close();
}, this.delay);
}
nested=item.children(".ui-menu");
if(nested.length&&event&&(/^mouse/.test(event.type))){
this._startOpening(nested);
}
this.activeMenu=item.parent();
this._trigger("focus", event, { item: item });
},
_scrollIntoView: function(item){
var borderTop, paddingTop, offset, scroll, elementHeight, itemHeight;
if(this._hasScroll()){
borderTop=parseFloat($.css(this.activeMenu[ 0 ], "borderTopWidth"))||0;
paddingTop=parseFloat($.css(this.activeMenu[ 0 ], "paddingTop"))||0;
offset=item.offset().top - this.activeMenu.offset().top - borderTop - paddingTop;
scroll=this.activeMenu.scrollTop();
elementHeight=this.activeMenu.height();
itemHeight=item.outerHeight();
if(offset < 0){
this.activeMenu.scrollTop(scroll + offset);
}else if(offset + itemHeight > elementHeight){
this.activeMenu.scrollTop(scroll + offset - elementHeight + itemHeight);
}}
},
blur: function(event, fromFocus){
if(!fromFocus){
clearTimeout(this.timer);
}
if(!this.active){
return;
}
this._removeClass(this.active.children(".ui-menu-item-wrapper"),
null, "ui-state-active");
this._trigger("blur", event, { item: this.active });
this.active=null;
},
_startOpening: function(submenu){
clearTimeout(this.timer);
if(submenu.attr("aria-hidden")!=="true"){
return;
}
this.timer=this._delay(function(){
this._close();
this._open(submenu);
}, this.delay);
},
_open: function(submenu){
var position=$.extend({
of: this.active
}, this.options.position);
clearTimeout(this.timer);
this.element.find(".ui-menu").not(submenu.parents(".ui-menu"))
.hide()
.attr("aria-hidden", "true");
submenu
.show()
.removeAttr("aria-hidden")
.attr("aria-expanded", "true")
.position(position);
},
collapseAll: function(event, all){
clearTimeout(this.timer);
this.timer=this._delay(function(){
var currentMenu=all ? this.element :
$(event&&event.target).closest(this.element.find(".ui-menu"));
if(!currentMenu.length){
currentMenu=this.element;
}
this._close(currentMenu);
this.blur(event);
this._removeClass(currentMenu.find(".ui-state-active"), null, "ui-state-active");
this.activeMenu=currentMenu;
}, this.delay);
},
_close: function(startMenu){
if(!startMenu){
startMenu=this.active ? this.active.parent():this.element;
}
startMenu.find(".ui-menu")
.hide()
.attr("aria-hidden", "true")
.attr("aria-expanded", "false");
},
_closeOnDocumentClick: function(event){
return !$(event.target).closest(".ui-menu").length;
},
_isDivider: function(item){
return !/[^\-\u2014\u2013\s]/.test(item.text());
},
collapse: function(event){
var newItem=this.active &&
this.active.parent().closest(".ui-menu-item", this.element);
if(newItem&&newItem.length){
this._close();
this.focus(event, newItem);
}},
expand: function(event){
var newItem=this.active &&
this.active
.children(".ui-menu ")
.find(this.options.items)
.first();
if(newItem&&newItem.length){
this._open(newItem.parent());
this._delay(function(){
this.focus(event, newItem);
});
}},
next: function(event){
this._move("next", "first", event);
},
previous: function(event){
this._move("prev", "last", event);
},
isFirstItem: function(){
return this.active&&!this.active.prevAll(".ui-menu-item").length;
},
isLastItem: function(){
return this.active&&!this.active.nextAll(".ui-menu-item").length;
},
_move: function(direction, filter, event){
var next;
if(this.active){
if(direction==="first"||direction==="last"){
next=this.active
[ direction==="first" ? "prevAll":"nextAll" ](".ui-menu-item")
.eq(-1);
}else{
next=this.active
[ direction + "All" ](".ui-menu-item")
.eq(0);
}}
if(!next||!next.length||!this.active){
next=this.activeMenu.find(this.options.items)[ filter ]();
}
this.focus(event, next);
},
nextPage: function(event){
var item, base, height;
if(!this.active){
this.next(event);
return;
}
if(this.isLastItem()){
return;
}
if(this._hasScroll()){
base=this.active.offset().top;
height=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){
item=$(this);
return item.offset().top - base - height < 0;
});
this.focus(event, item);
}else{
this.focus(event, this.activeMenu.find(this.options.items)
[ !this.active ? "first":"last" ]());
}},
previousPage: function(event){
var item, base, height;
if(!this.active){
this.next(event);
return;
}
if(this.isFirstItem()){
return;
}
if(this._hasScroll()){
base=this.active.offset().top;
height=this.element.height();
this.active.prevAll(".ui-menu-item").each(function(){
item=$(this);
return item.offset().top - base + height > 0;
});
this.focus(event, item);
}else{
this.focus(event, this.activeMenu.find(this.options.items).first());
}},
_hasScroll: function(){
return this.element.outerHeight() < this.element.prop("scrollHeight");
},
select: function(event){
this.active=this.active||$(event.target).closest(".ui-menu-item");
var ui={ item: this.active };
if(!this.active.has(".ui-menu").length){
this.collapseAll(event, true);
}
this._trigger("select", event, ui);
},
_filterMenuItems: function(character){
var escapedCharacter=character.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
regex=new RegExp("^" + escapedCharacter, "i");
return this.activeMenu
.find(this.options.items)
.filter(".ui-menu-item")
.filter(function(){
return regex.test($.trim($(this).children(".ui-menu-item-wrapper").text()));
});
}});
$.widget("ui.autocomplete", {
version: "1.12.1",
defaultElement: "<input>",
options: {
appendTo: null,
autoFocus: false,
delay: 300,
minLength: 1,
position: {
my: "left top",
at: "left bottom",
collision: "none"
},
source: null,
change: null,
close: null,
focus: null,
open: null,
response: null,
search: null,
select: null
},
requestIndex: 0,
pending: 0,
_create: function(){
var suppressKeyPress, suppressKeyPressRepeat, suppressInput,
nodeName=this.element[ 0 ].nodeName.toLowerCase(),
isTextarea=nodeName==="textarea",
isInput=nodeName==="input";
this.isMultiLine=isTextarea||!isInput&&this._isContentEditable(this.element);
this.valueMethod=this.element[ isTextarea||isInput ? "val":"text" ];
this.isNewMenu=true;
this._addClass("ui-autocomplete-input");
this.element.attr("autocomplete", "off");
this._on(this.element, {
keydown: function(event){
if(this.element.prop("readOnly")){
suppressKeyPress=true;
suppressInput=true;
suppressKeyPressRepeat=true;
return;
}
suppressKeyPress=false;
suppressInput=false;
suppressKeyPressRepeat=false;
var keyCode=$.ui.keyCode;
switch(event.keyCode){
case keyCode.PAGE_UP:
suppressKeyPress=true;
this._move("previousPage", event);
break;
case keyCode.PAGE_DOWN:
suppressKeyPress=true;
this._move("nextPage", event);
break;
case keyCode.UP:
suppressKeyPress=true;
this._keyEvent("previous", event);
break;
case keyCode.DOWN:
suppressKeyPress=true;
this._keyEvent("next", event);
break;
case keyCode.ENTER:
if(this.menu.active){
suppressKeyPress=true;
event.preventDefault();
this.menu.select(event);
}
break;
case keyCode.TAB:
if(this.menu.active){
this.menu.select(event);
}
break;
case keyCode.ESCAPE:
if(this.menu.element.is(":visible")){
if(!this.isMultiLine){
this._value(this.term);
}
this.close(event);
event.preventDefault();
}
break;
default:
suppressKeyPressRepeat=true;
this._searchTimeout(event);
break;
}},
keypress: function(event){
if(suppressKeyPress){
suppressKeyPress=false;
if(!this.isMultiLine||this.menu.element.is(":visible")){
event.preventDefault();
}
return;
}
if(suppressKeyPressRepeat){
return;
}
var keyCode=$.ui.keyCode;
switch(event.keyCode){
case keyCode.PAGE_UP:
this._move("previousPage", event);
break;
case keyCode.PAGE_DOWN:
this._move("nextPage", event);
break;
case keyCode.UP:
this._keyEvent("previous", event);
break;
case keyCode.DOWN:
this._keyEvent("next", event);
break;
}},
input: function(event){
if(suppressInput){
suppressInput=false;
event.preventDefault();
return;
}
this._searchTimeout(event);
},
focus: function(){
this.selectedItem=null;
this.previous=this._value();
},
blur: function(event){
if(this.cancelBlur){
delete this.cancelBlur;
return;
}
clearTimeout(this.searching);
this.close(event);
this._change(event);
}});
this._initSource();
this.menu=$("<ul>")
.appendTo(this._appendTo())
.menu({
role: null
})
.hide()
.menu("instance");
this._addClass(this.menu.element, "ui-autocomplete", "ui-front");
this._on(this.menu.element, {
mousedown: function(event){
event.preventDefault();
this.cancelBlur=true;
this._delay(function(){
delete this.cancelBlur;
if(this.element[ 0 ]!==$.ui.safeActiveElement(this.document[ 0 ])){
this.element.trigger("focus");
}});
},
menufocus: function(event, ui){
var label, item;
if(this.isNewMenu){
this.isNewMenu=false;
if(event.originalEvent&&/^mouse/.test(event.originalEvent.type)){
this.menu.blur();
this.document.one("mousemove", function(){
$(event.target).trigger(event.originalEvent);
});
return;
}}
item=ui.item.data("ui-autocomplete-item");
if(false!==this._trigger("focus", event, { item: item })){
if(event.originalEvent&&/^key/.test(event.originalEvent.type)){
this._value(item.value);
}}
label=ui.item.attr("aria-label")||item.value;
if(label&&$.trim(label).length){
this.liveRegion.children().hide();
$("<div>").text(label).appendTo(this.liveRegion);
}},
menuselect: function(event, ui){
var item=ui.item.data("ui-autocomplete-item"),
previous=this.previous;
if(this.element[ 0 ]!==$.ui.safeActiveElement(this.document[ 0 ])){
this.element.trigger("focus");
this.previous=previous;
this._delay(function(){
this.previous=previous;
this.selectedItem=item;
});
}
if(false!==this._trigger("select", event, { item: item })){
this._value(item.value);
}
this.term=this._value();
this.close(event);
this.selectedItem=item;
}});
this.liveRegion=$("<div>", {
role: "status",
"aria-live": "assertive",
"aria-relevant": "additions"
})
.appendTo(this.document[ 0 ].body);
this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
this._on(this.window, {
beforeunload: function(){
this.element.removeAttr("autocomplete");
}});
},
_destroy: function(){
clearTimeout(this.searching);
this.element.removeAttr("autocomplete");
this.menu.element.remove();
this.liveRegion.remove();
},
_setOption: function(key, value){
this._super(key, value);
if(key==="source"){
this._initSource();
}
if(key==="appendTo"){
this.menu.element.appendTo(this._appendTo());
}
if(key==="disabled"&&value&&this.xhr){
this.xhr.abort();
}},
_isEventTargetInWidget: function(event){
var menuElement=this.menu.element[ 0 ];
return event.target===this.element[ 0 ] ||
event.target===menuElement ||
$.contains(menuElement, event.target);
},
_closeOnClickOutside: function(event){
if(!this._isEventTargetInWidget(event)){
this.close();
}},
_appendTo: function(){
var element=this.options.appendTo;
if(element){
element=element.jquery||element.nodeType ?
$(element) :
this.document.find(element).eq(0);
}
if(!element||!element[ 0 ]){
element=this.element.closest(".ui-front, dialog");
}
if(!element.length){
element=this.document[ 0 ].body;
}
return element;
},
_initSource: function(){
var array, url,
that=this;
if($.isArray(this.options.source)){
array=this.options.source;
this.source=function(request, response){
response($.ui.autocomplete.filter(array, request.term));
};}else if(typeof this.options.source==="string"){
url=this.options.source;
this.source=function(request, response){
if(that.xhr){
that.xhr.abort();
}
that.xhr=$.ajax({
url: url,
data: request,
dataType: "json",
success: function(data){
response(data);
},
error: function(){
response([]);
}});
};}else{
this.source=this.options.source;
}},
_searchTimeout: function(event){
clearTimeout(this.searching);
this.searching=this._delay(function(){
var equalValues=this.term===this._value(),
menuVisible=this.menu.element.is(":visible"),
modifierKey=event.altKey||event.ctrlKey||event.metaKey||event.shiftKey;
if(!equalValues||(equalValues&&!menuVisible&&!modifierKey)){
this.selectedItem=null;
this.search(null, event);
}}, this.options.delay);
},
search: function(value, event){
value=value!=null ? value:this._value();
this.term=this._value();
if(value.length < this.options.minLength){
return this.close(event);
}
if(this._trigger("search", event)===false){
return;
}
return this._search(value);
},
_search: function(value){
this.pending++;
this._addClass("ui-autocomplete-loading");
this.cancelSearch=false;
this.source({ term: value }, this._response());
},
_response: function(){
var index=++this.requestIndex;
return $.proxy(function(content){
if(index===this.requestIndex){
this.__response(content);
}
this.pending--;
if(!this.pending){
this._removeClass("ui-autocomplete-loading");
}}, this);
},
__response: function(content){
if(content){
content=this._normalize(content);
}
this._trigger("response", null, { content: content });
if(!this.options.disabled&&content&&content.length&&!this.cancelSearch){
this._suggest(content);
this._trigger("open");
}else{
this._close();
}},
close: function(event){
this.cancelSearch=true;
this._close(event);
},
_close: function(event){
this._off(this.document, "mousedown");
if(this.menu.element.is(":visible")){
this.menu.element.hide();
this.menu.blur();
this.isNewMenu=true;
this._trigger("close", event);
}},
_change: function(event){
if(this.previous!==this._value()){
this._trigger("change", event, { item: this.selectedItem });
}},
_normalize: function(items){
if(items.length&&items[ 0 ].label&&items[ 0 ].value){
return items;
}
return $.map(items, function(item){
if(typeof item==="string"){
return {
label: item,
value: item
};}
return $.extend({}, item, {
label: item.label||item.value,
value: item.value||item.label
});
});
},
_suggest: function(items){
var ul=this.menu.element.empty();
this._renderMenu(ul, items);
this.isNewMenu=true;
this.menu.refresh();
ul.show();
this._resizeMenu();
ul.position($.extend({
of: this.element
}, this.options.position));
if(this.options.autoFocus){
this.menu.next();
}
this._on(this.document, {
mousedown: "_closeOnClickOutside"
});
},
_resizeMenu: function(){
var ul=this.menu.element;
ul.outerWidth(Math.max(ul.width("").outerWidth() + 1,
this.element.outerWidth()
));
},
_renderMenu: function(ul, items){
var that=this;
$.each(items, function(index, item){
that._renderItemData(ul, item);
});
},
_renderItemData: function(ul, item){
return this._renderItem(ul, item).data("ui-autocomplete-item", item);
},
_renderItem: function(ul, item){
return $("<li>")
.append($("<div>").text(item.label))
.appendTo(ul);
},
_move: function(direction, event){
if(!this.menu.element.is(":visible")){
this.search(null, event);
return;
}
if(this.menu.isFirstItem()&&/^previous/.test(direction) ||
this.menu.isLastItem()&&/^next/.test(direction)){
if(!this.isMultiLine){
this._value(this.term);
}
this.menu.blur();
return;
}
this.menu[ direction ](event);
},
widget: function(){
return this.menu.element;
},
_value: function(){
return this.valueMethod.apply(this.element, arguments);
},
_keyEvent: function(keyEvent, event){
if(!this.isMultiLine||this.menu.element.is(":visible")){
this._move(keyEvent, event);
event.preventDefault();
}},
_isContentEditable: function(element){
if(!element.length){
return false;
}
var editable=element.prop("contentEditable");
if(editable==="inherit"){
return this._isContentEditable(element.parent());
}
return editable==="true";
}});
$.extend($.ui.autocomplete, {
escapeRegex: function(value){
return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
},
filter: function(array, term){
var matcher=new RegExp($.ui.autocomplete.escapeRegex(term), "i");
return $.grep(array, function(value){
return matcher.test(value.label||value.value||value);
});
}});
$.widget("ui.autocomplete", $.ui.autocomplete, {
options: {
messages: {
noResults: "No search results.",
results: function(amount){
return amount +(amount > 1 ? " results are":" result is") +
" available, use up and down arrow keys to navigate.";
}}
},
__response: function(content){
var message;
this._superApply(arguments);
if(this.options.disabled||this.cancelSearch){
return;
}
if(content&&content.length){
message=this.options.messages.results(content.length);
}else{
message=this.options.messages.noResults;
}
this.liveRegion.children().hide();
$("<div>").text(message).appendTo(this.liveRegion);
}});
var widgetsAutocomplete=$.ui.autocomplete;
var controlgroupCornerRegex=/ui-corner-([a-z]){2,6}/g;
var widgetsControlgroup=$.widget("ui.controlgroup", {
version: "1.12.1",
defaultElement: "<div>",
options: {
direction: "horizontal",
disabled: null,
onlyVisible: true,
items: {
"button": "input[type=button], input[type=submit], input[type=reset], button, a",
"controlgroupLabel": ".ui-controlgroup-label",
"checkboxradio": "input[type='checkbox'], input[type='radio']",
"selectmenu": "select",
"spinner": ".ui-spinner-input"
}},
_create: function(){
this._enhance();
},
_enhance: function(){
this.element.attr("role", "toolbar");
this.refresh();
},
_destroy: function(){
this._callChildMethod("destroy");
this.childWidgets.removeData("ui-controlgroup-data");
this.element.removeAttr("role");
if(this.options.items.controlgroupLabel){
this.element
.find(this.options.items.controlgroupLabel)
.find(".ui-controlgroup-label-contents")
.contents().unwrap();
}},
_initWidgets: function(){
var that=this,
childWidgets=[];
$.each(this.options.items, function(widget, selector){
var labels;
var options={};
if(!selector){
return;
}
if(widget==="controlgroupLabel"){
labels=that.element.find(selector);
labels.each(function(){
var element=$(this);
if(element.children(".ui-controlgroup-label-contents").length){
return;
}
element.contents()
.wrapAll("<span class='ui-controlgroup-label-contents'></span>");
});
that._addClass(labels, null, "ui-widget ui-widget-content ui-state-default");
childWidgets=childWidgets.concat(labels.get());
return;
}
if(!$.fn[ widget ]){
return;
}
if(that[ "_" + widget + "Options" ]){
options=that[ "_" + widget + "Options" ]("middle");
}else{
options={ classes: {}};}
that.element
.find(selector)
.each(function(){
var element=$(this);
var instance=element[ widget ]("instance");
var instanceOptions=$.widget.extend({}, options);
if(widget==="button"&&element.parent(".ui-spinner").length){
return;
}
if(!instance){
instance=element[ widget ]()[ widget ]("instance");
}
if(instance){
instanceOptions.classes =
that._resolveClassesValues(instanceOptions.classes, instance);
}
element[ widget ](instanceOptions);
var widgetElement=element[ widget ]("widget");
$.data(widgetElement[ 0 ], "ui-controlgroup-data",
instance ? instance:element[ widget ]("instance"));
childWidgets.push(widgetElement[ 0 ]);
});
});
this.childWidgets=$($.unique(childWidgets));
this._addClass(this.childWidgets, "ui-controlgroup-item");
},
_callChildMethod: function(method){
this.childWidgets.each(function(){
var element=$(this),
data=element.data("ui-controlgroup-data");
if(data&&data[ method ]){
data[ method ]();
}});
},
_updateCornerClass: function(element, position){
var remove="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all";
var add=this._buildSimpleOptions(position, "label").classes.label;
this._removeClass(element, null, remove);
this._addClass(element, null, add);
},
_buildSimpleOptions: function(position, key){
var direction=this.options.direction==="vertical";
var result={
classes: {}};
result.classes[ key ]={
"middle": "",
"first": "ui-corner-" +(direction ? "top":"left"),
"last": "ui-corner-" +(direction ? "bottom":"right"),
"only": "ui-corner-all"
}[ position ];
return result;
},
_spinnerOptions: function(position){
var options=this._buildSimpleOptions(position, "ui-spinner");
options.classes[ "ui-spinner-up" ]="";
options.classes[ "ui-spinner-down" ]="";
return options;
},
_buttonOptions: function(position){
return this._buildSimpleOptions(position, "ui-button");
},
_checkboxradioOptions: function(position){
return this._buildSimpleOptions(position, "ui-checkboxradio-label");
},
_selectmenuOptions: function(position){
var direction=this.options.direction==="vertical";
return {
width: direction ? "auto":false,
classes: {
middle: {
"ui-selectmenu-button-open": "",
"ui-selectmenu-button-closed": ""
},
first: {
"ui-selectmenu-button-open": "ui-corner-" +(direction ? "top":"tl"),
"ui-selectmenu-button-closed": "ui-corner-" +(direction ? "top":"left")
},
last: {
"ui-selectmenu-button-open": direction ? "":"ui-corner-tr",
"ui-selectmenu-button-closed": "ui-corner-" +(direction ? "bottom":"right")
},
only: {
"ui-selectmenu-button-open": "ui-corner-top",
"ui-selectmenu-button-closed": "ui-corner-all"
}}[ position ]
};},
_resolveClassesValues: function(classes, instance){
var result={};
$.each(classes, function(key){
var current=instance.options.classes[ key ]||"";
current=$.trim(current.replace(controlgroupCornerRegex, ""));
result[ key ]=(current + " " + classes[ key ]).replace(/\s+/g, " ");
});
return result;
},
_setOption: function(key, value){
if(key==="direction"){
this._removeClass("ui-controlgroup-" + this.options.direction);
}
this._super(key, value);
if(key==="disabled"){
this._callChildMethod(value ? "disable":"enable");
return;
}
this.refresh();
},
refresh: function(){
var children,
that=this;
this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction);
if(this.options.direction==="horizontal"){
this._addClass(null, "ui-helper-clearfix");
}
this._initWidgets();
children=this.childWidgets;
if(this.options.onlyVisible){
children=children.filter(":visible");
}
if(children.length){
$.each([ "first", "last" ], function(index, value){
var instance=children[ value ]().data("ui-controlgroup-data");
if(instance&&that[ "_" + instance.widgetName + "Options" ]){
var options=that[ "_" + instance.widgetName + "Options" ](
children.length===1 ? "only":value
);
options.classes=that._resolveClassesValues(options.classes, instance);
instance.element[ instance.widgetName ](options);
}else{
that._updateCornerClass(children[ value ](), value);
}});
this._callChildMethod("refresh");
}}
});
$.widget("ui.checkboxradio", [ $.ui.formResetMixin, {
version: "1.12.1",
options: {
disabled: null,
label: null,
icon: true,
classes: {
"ui-checkboxradio-label": "ui-corner-all",
"ui-checkboxradio-icon": "ui-corner-all"
}},
_getCreateOptions: function(){
var disabled, labels;
var that=this;
var options=this._super()||{};
this._readType();
labels=this.element.labels();
this.label=$(labels[ labels.length - 1 ]);
if(!this.label.length){
$.error("No label found for checkboxradio widget");
}
this.originalLabel="";
this.label.contents().not(this.element[ 0 ]).each(function(){
that.originalLabel +=this.nodeType===3 ? $(this).text():this.outerHTML;
});
if(this.originalLabel){
options.label=this.originalLabel;
}
disabled=this.element[ 0 ].disabled;
if(disabled!=null){
options.disabled=disabled;
}
return options;
},
_create: function(){
var checked=this.element[ 0 ].checked;
this._bindFormResetHandler();
if(this.options.disabled==null){
this.options.disabled=this.element[ 0 ].disabled;
}
this._setOption("disabled", this.options.disabled);
this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible");
this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget");
if(this.type==="radio"){
this._addClass(this.label, "ui-checkboxradio-radio-label");
}
if(this.options.label&&this.options.label!==this.originalLabel){
this._updateLabel();
}else if(this.originalLabel){
this.options.label=this.originalLabel;
}
this._enhance();
if(checked){
this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active");
if(this.icon){
this._addClass(this.icon, null, "ui-state-hover");
}}
this._on({
change: "_toggleClasses",
focus: function(){
this._addClass(this.label, null, "ui-state-focus ui-visual-focus");
},
blur: function(){
this._removeClass(this.label, null, "ui-state-focus ui-visual-focus");
}});
},
_readType: function(){
var nodeName=this.element[ 0 ].nodeName.toLowerCase();
this.type=this.element[ 0 ].type;
if(nodeName!=="input"||!/radio|checkbox/.test(this.type)){
$.error("Can't create checkboxradio on element.nodeName=" + nodeName +
" and element.type=" + this.type);
}},
_enhance: function(){
this._updateIcon(this.element[ 0 ].checked);
},
widget: function(){
return this.label;
},
_getRadioGroup: function(){
var group;
var name=this.element[ 0 ].name;
var nameSelector="input[name='" + $.ui.escapeSelector(name) + "']";
if(!name){
return $([]);
}
if(this.form.length){
group=$(this.form[ 0 ].elements).filter(nameSelector);
}else{
group=$(nameSelector).filter(function(){
return $(this).form().length===0;
});
}
return group.not(this.element);
},
_toggleClasses: function(){
var checked=this.element[ 0 ].checked;
this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);
if(this.options.icon&&this.type==="checkbox"){
this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", checked)
._toggleClass(this.icon, null, "ui-icon-blank", !checked);
}
if(this.type==="radio"){
this._getRadioGroup()
.each(function(){
var instance=$(this).checkboxradio("instance");
if(instance){
instance._removeClass(instance.label,
"ui-checkboxradio-checked", "ui-state-active");
}});
}},
_destroy: function(){
this._unbindFormResetHandler();
if(this.icon){
this.icon.remove();
this.iconSpace.remove();
}},
_setOption: function(key, value){
if(key==="label"&&!value){
return;
}
this._super(key, value);
if(key==="disabled"){
this._toggleClass(this.label, null, "ui-state-disabled", value);
this.element[ 0 ].disabled=value;
return;
}
this.refresh();
},
_updateIcon: function(checked){
var toAdd="ui-icon ui-icon-background ";
if(this.options.icon){
if(!this.icon){
this.icon=$("<span>");
this.iconSpace=$("<span> </span>");
this._addClass(this.iconSpace, "ui-checkboxradio-icon-space");
}
if(this.type==="checkbox"){
toAdd +=checked ? "ui-icon-check ui-state-checked":"ui-icon-blank";
this._removeClass(this.icon, null, checked ? "ui-icon-blank":"ui-icon-check");
}else{
toAdd +="ui-icon-blank";
}
this._addClass(this.icon, "ui-checkboxradio-icon", toAdd);
if(!checked){
this._removeClass(this.icon, null, "ui-icon-check ui-state-checked");
}
this.icon.prependTo(this.label).after(this.iconSpace);
}else if(this.icon!==undefined){
this.icon.remove();
this.iconSpace.remove();
delete this.icon;
}},
_updateLabel: function(){
var contents=this.label.contents().not(this.element[ 0 ]);
if(this.icon){
contents=contents.not(this.icon[ 0 ]);
}
if(this.iconSpace){
contents=contents.not(this.iconSpace[ 0 ]);
}
contents.remove();
this.label.append(this.options.label);
},
refresh: function(){
var checked=this.element[ 0 ].checked,
isDisabled=this.element[ 0 ].disabled;
this._updateIcon(checked);
this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", checked);
if(this.options.label!==null){
this._updateLabel();
}
if(isDisabled!==this.options.disabled){
this._setOptions({ "disabled": isDisabled });
}}
} ]);
var widgetsCheckboxradio=$.ui.checkboxradio;
$.widget("ui.button", {
version: "1.12.1",
defaultElement: "<button>",
options: {
classes: {
"ui-button": "ui-corner-all"
},
disabled: null,
icon: null,
iconPosition: "beginning",
label: null,
showLabel: true
},
_getCreateOptions: function(){
var disabled,
options=this._super()||{};
this.isInput=this.element.is("input");
disabled=this.element[ 0 ].disabled;
if(disabled!=null){
options.disabled=disabled;
}
this.originalLabel=this.isInput ? this.element.val():this.element.html();
if(this.originalLabel){
options.label=this.originalLabel;
}
return options;
},
_create: function(){
if(!this.option.showLabel & !this.options.icon){
this.options.showLabel=true;
}
if(this.options.disabled==null){
this.options.disabled=this.element[ 0 ].disabled||false;
}
this.hasTitle = !!this.element.attr("title");
if(this.options.label&&this.options.label!==this.originalLabel){
if(this.isInput){
this.element.val(this.options.label);
}else{
this.element.html(this.options.label);
}}
this._addClass("ui-button", "ui-widget");
this._setOption("disabled", this.options.disabled);
this._enhance();
if(this.element.is("a")){
this._on({
"keyup": function(event){
if(event.keyCode===$.ui.keyCode.SPACE){
event.preventDefault();
if(this.element[ 0 ].click){
this.element[ 0 ].click();
}else{
this.element.trigger("click");
}}
}});
}},
_enhance: function(){
if(!this.element.is("button")){
this.element.attr("role", "button");
}
if(this.options.icon){
this._updateIcon("icon", this.options.icon);
this._updateTooltip();
}},
_updateTooltip: function(){
this.title=this.element.attr("title");
if(!this.options.showLabel&&!this.title){
this.element.attr("title", this.options.label);
}},
_updateIcon: function(option, value){
var icon=option!=="iconPosition",
position=icon ? this.options.iconPosition:value,
displayBlock=position==="top"||position==="bottom";
if(!this.icon){
this.icon=$("<span>");
this._addClass(this.icon, "ui-button-icon", "ui-icon");
if(!this.options.showLabel){
this._addClass("ui-button-icon-only");
}}else if(icon){
this._removeClass(this.icon, null, this.options.icon);
}
if(icon){
this._addClass(this.icon, null, value);
}
this._attachIcon(position);
if(displayBlock){
this._addClass(this.icon, null, "ui-widget-icon-block");
if(this.iconSpace){
this.iconSpace.remove();
}}else{
if(!this.iconSpace){
this.iconSpace=$("<span> </span>");
this._addClass(this.iconSpace, "ui-button-icon-space");
}
this._removeClass(this.icon, null, "ui-wiget-icon-block");
this._attachIconSpace(position);
}},
_destroy: function(){
this.element.removeAttr("role");
if(this.icon){
this.icon.remove();
}
if(this.iconSpace){
this.iconSpace.remove();
}
if(!this.hasTitle){
this.element.removeAttr("title");
}},
_attachIconSpace: function(iconPosition){
this.icon[ /^(?:end|bottom)/.test(iconPosition) ? "before":"after" ](this.iconSpace);
},
_attachIcon: function(iconPosition){
this.element[ /^(?:end|bottom)/.test(iconPosition) ? "append":"prepend" ](this.icon);
},
_setOptions: function(options){
var newShowLabel=options.showLabel===undefined ?
this.options.showLabel :
options.showLabel,
newIcon=options.icon===undefined ? this.options.icon:options.icon;
if(!newShowLabel&&!newIcon){
options.showLabel=true;
}
this._super(options);
},
_setOption: function(key, value){
if(key==="icon"){
if(value){
this._updateIcon(key, value);
}else if(this.icon){
this.icon.remove();
if(this.iconSpace){
this.iconSpace.remove();
}}
}
if(key==="iconPosition"){
this._updateIcon(key, value);
}
if(key==="showLabel"){
this._toggleClass("ui-button-icon-only", null, !value);
this._updateTooltip();
}
if(key==="label"){
if(this.isInput){
this.element.val(value);
}else{
this.element.html(value);
if(this.icon){
this._attachIcon(this.options.iconPosition);
this._attachIconSpace(this.options.iconPosition);
}}
}
this._super(key, value);
if(key==="disabled"){
this._toggleClass(null, "ui-state-disabled", value);
this.element[ 0 ].disabled=value;
if(value){
this.element.blur();
}}
},
refresh: function(){
var isDisabled=this.element.is("input, button") ?
this.element[ 0 ].disabled:this.element.hasClass("ui-button-disabled");
if(isDisabled!==this.options.disabled){
this._setOptions({ disabled: isDisabled });
}
this._updateTooltip();
}});
if($.uiBackCompat!==false){
$.widget("ui.button", $.ui.button, {
options: {
text: true,
icons: {
primary: null,
secondary: null
}},
_create: function(){
if(this.options.showLabel&&!this.options.text){
this.options.showLabel=this.options.text;
}
if(!this.options.showLabel&&this.options.text){
this.options.text=this.options.showLabel;
}
if(!this.options.icon&&(this.options.icons.primary ||
this.options.icons.secondary)){
if(this.options.icons.primary){
this.options.icon=this.options.icons.primary;
}else{
this.options.icon=this.options.icons.secondary;
this.options.iconPosition="end";
}}else if(this.options.icon){
this.options.icons.primary=this.options.icon;
}
this._super();
},
_setOption: function(key, value){
if(key==="text"){
this._super("showLabel", value);
return;
}
if(key==="showLabel"){
this.options.text=value;
}
if(key==="icon"){
this.options.icons.primary=value;
}
if(key==="icons"){
if(value.primary){
this._super("icon", value.primary);
this._super("iconPosition", "beginning");
}else if(value.secondary){
this._super("icon", value.secondary);
this._super("iconPosition", "end");
}}
this._superApply(arguments);
}});
$.fn.button=(function(orig){
return function(){
if(!this.length||(this.length&&this[ 0 ].tagName!=="INPUT") ||
(this.length&&this[ 0 ].tagName==="INPUT"&&(
this.attr("type")!=="checkbox"&&this.attr("type")!=="radio"
))){
return orig.apply(this, arguments);
}
if(!$.ui.checkboxradio){
$.error("Checkboxradio widget missing");
}
if(arguments.length===0){
return this.checkboxradio({
"icon": false
});
}
return this.checkboxradio.apply(this, arguments);
};})($.fn.button);
$.fn.buttonset=function(){
if(!$.ui.controlgroup){
$.error("Controlgroup widget missing");
}
if(arguments[ 0 ]==="option"&&arguments[ 1 ]==="items"&&arguments[ 2 ]){
return this.controlgroup.apply(this,
[ arguments[ 0 ], "items.button", arguments[ 2 ] ]);
}
if(arguments[ 0 ]==="option"&&arguments[ 1 ]==="items"){
return this.controlgroup.apply(this, [ arguments[ 0 ], "items.button" ]);
}
if(typeof arguments[ 0 ]==="object"&&arguments[ 0 ].items){
arguments[ 0 ].items={
button: arguments[ 0 ].items
};}
return this.controlgroup.apply(this, arguments);
};}
var widgetsButton=$.ui.button;
$.extend($.ui, { datepicker: { version: "1.12.1" }});
var datepicker_instActive;
function datepicker_getZindex(elem){
var position, value;
while(elem.length&&elem[ 0 ]!==document){
position=elem.css("position");
if(position==="absolute"||position==="relative"||position==="fixed"){
value=parseInt(elem.css("zIndex"), 10);
if(!isNaN(value)&&value!==0){
return value;
}}
elem=elem.parent();
}
return 0;
}
function Datepicker(){
this._curInst=null;
this._keyEvent=false;
this._disabledInputs=[];
this._datepickerShowing=false;
this._inDialog=false;
this._mainDivId="ui-datepicker-div";
this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";
this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";
this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";
this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";
this.regional=[];
this.regional[ "" ]={
closeText: "Done",
prevText: "Prev",
nextText: "Next",
currentText: "Today",
monthNames: [ "January","February","March","April","May","June",
"July","August","September","October","November","December" ],
monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ],
dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ],
weekHeader: "Wk",
dateFormat: "mm/dd/yy",
firstDay: 0,
isRTL: false,
showMonthAfterYear: false,
yearSuffix: ""
};
this._defaults={
showOn: "focus", // "focus" for popup on focus,
showAnim: "fadeIn",
showOptions: {},
defaultDate: null,
appendText: "",
buttonText: "...",
buttonImage: "",
buttonImageOnly: false,
hideIfNoPrevNext: false,
navigationAsDateFormat: false,
gotoCurrent: false,
changeMonth: false,
changeYear: false,
yearRange: "c-10:c+10",
showOtherMonths: false,
selectOtherMonths: false,
showWeek: false,
calculateWeek: this.iso8601Week,
shortYearCutoff: "+10",
minDate: null,
maxDate: null,
duration: "fast",
beforeShowDay: null,
beforeShow: null,
onSelect: null,
onChangeMonthYear: null,
onClose: null,
numberOfMonths: 1,
showCurrentAtPos: 0,
stepMonths: 1,
stepBigMonths: 12,
altField: "",
altFormat: "",
constrainInput: true,
showButtonPanel: false,
autoSize: false,
disabled: false
};
$.extend(this._defaults, this.regional[ "" ]);
this.regional.en=$.extend(true, {}, this.regional[ "" ]);
this.regional[ "en-US" ]=$.extend(true, {}, this.regional.en);
this.dpDiv=datepicker_bindHover($("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
}
$.extend(Datepicker.prototype, {
markerClassName: "hasDatepicker",
maxRows: 4,
_widgetDatepicker: function(){
return this.dpDiv;
},
setDefaults: function(settings){
datepicker_extendRemove(this._defaults, settings||{});
return this;
},
_attachDatepicker: function(target, settings){
var nodeName, inline, inst;
nodeName=target.nodeName.toLowerCase();
inline=(nodeName==="div"||nodeName==="span");
if(!target.id){
this.uuid +=1;
target.id="dp" + this.uuid;
}
inst=this._newInst($(target), inline);
inst.settings=$.extend({}, settings||{});
if(nodeName==="input"){
this._connectDatepicker(target, inst);
}else if(inline){
this._inlineDatepicker(target, inst);
}},
_newInst: function(target, inline){
var id=target[ 0 ].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
return { id: id, input: target,
selectedDay: 0, selectedMonth: 0, selectedYear: 0,
drawMonth: 0, drawYear: 0,
inline: inline,
dpDiv:(!inline ? this.dpDiv :
datepicker_bindHover($("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))) };},
_connectDatepicker: function(target, inst){
var input=$(target);
inst.append=$([]);
inst.trigger=$([]);
if(input.hasClass(this.markerClassName)){
return;
}
this._attachments(input, inst);
input.addClass(this.markerClassName).on("keydown", this._doKeyDown).
on("keypress", this._doKeyPress).on("keyup", this._doKeyUp);
this._autoSize(inst);
$.data(target, "datepicker", inst);
if(inst.settings.disabled){
this._disableDatepicker(target);
}},
_attachments: function(input, inst){
var showOn, buttonText, buttonImage,
appendText=this._get(inst, "appendText"),
isRTL=this._get(inst, "isRTL");
if(inst.append){
inst.append.remove();
}
if(appendText){
inst.append=$("<span class='" + this._appendClass + "'>" + appendText + "</span>");
input[ isRTL ? "before":"after" ](inst.append);
}
input.off("focus", this._showDatepicker);
if(inst.trigger){
inst.trigger.remove();
}
showOn=this._get(inst, "showOn");
if(showOn==="focus"||showOn==="both"){
input.on("focus", this._showDatepicker);
}
if(showOn==="button"||showOn==="both"){
buttonText=this._get(inst, "buttonText");
buttonImage=this._get(inst, "buttonImage");
inst.trigger=$(this._get(inst, "buttonImageOnly") ?
$("<img/>").addClass(this._triggerClass).
attr({ src: buttonImage, alt: buttonText, title: buttonText }) :
$("<button type='button'></button>").addClass(this._triggerClass).
html(!buttonImage ? buttonText:$("<img/>").attr({ src:buttonImage, alt:buttonText, title:buttonText })));
input[ isRTL ? "before":"after" ](inst.trigger);
inst.trigger.on("click", function(){
if($.datepicker._datepickerShowing&&$.datepicker._lastInput===input[ 0 ]){
$.datepicker._hideDatepicker();
}else if($.datepicker._datepickerShowing&&$.datepicker._lastInput!==input[ 0 ]){
$.datepicker._hideDatepicker();
$.datepicker._showDatepicker(input[ 0 ]);
}else{
$.datepicker._showDatepicker(input[ 0 ]);
}
return false;
});
}},
_autoSize: function(inst){
if(this._get(inst, "autoSize")&&!inst.inline){
var findMax, max, maxI, i,
date=new Date(2009, 12 - 1, 20),
dateFormat=this._get(inst, "dateFormat");
if(dateFormat.match(/[DM]/)){
findMax=function(names){
max=0;
maxI=0;
for(i=0; i < names.length; i++){
if(names[ i ].length > max){
max=names[ i ].length;
maxI=i;
}}
return maxI;
};
date.setMonth(findMax(this._get(inst,(dateFormat.match(/MM/) ?
"monthNames":"monthNamesShort"))));
date.setDate(findMax(this._get(inst,(dateFormat.match(/DD/) ?
"dayNames":"dayNamesShort"))) + 20 - date.getDay());
}
inst.input.attr("size", this._formatDate(inst, date).length);
}},
_inlineDatepicker: function(target, inst){
var divSpan=$(target);
if(divSpan.hasClass(this.markerClassName)){
return;
}
divSpan.addClass(this.markerClassName).append(inst.dpDiv);
$.data(target, "datepicker", inst);
this._setDate(inst, this._getDefaultDate(inst), true);
this._updateDatepicker(inst);
this._updateAlternate(inst);
if(inst.settings.disabled){
this._disableDatepicker(target);
}
inst.dpDiv.css("display", "block");
},
_dialogDatepicker: function(input, date, onSelect, settings, pos){
var id, browserWidth, browserHeight, scrollX, scrollY,
inst=this._dialogInst;
if(!inst){
this.uuid +=1;
id="dp" + this.uuid;
this._dialogInput=$("<input type='text' id='" + id +
"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.on("keydown", this._doKeyDown);
$("body").append(this._dialogInput);
inst=this._dialogInst=this._newInst(this._dialogInput, false);
inst.settings={};
$.data(this._dialogInput[ 0 ], "datepicker", inst);
}
datepicker_extendRemove(inst.settings, settings||{});
date=(date&&date.constructor===Date ? this._formatDate(inst, date):date);
this._dialogInput.val(date);
this._pos=(pos ?(pos.length ? pos:[ pos.pageX, pos.pageY ]):null);
if(!this._pos){
browserWidth=document.documentElement.clientWidth;
browserHeight=document.documentElement.clientHeight;
scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;
scrollY=document.documentElement.scrollTop||document.body.scrollTop;
this._pos =
[(browserWidth / 2) - 100 + scrollX,(browserHeight / 2) - 150 + scrollY ];
}
this._dialogInput.css("left",(this._pos[ 0 ] + 20) + "px").css("top", this._pos[ 1 ] + "px");
inst.settings.onSelect=onSelect;
this._inDialog=true;
this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[ 0 ]);
if($.blockUI){
$.blockUI(this.dpDiv);
}
$.data(this._dialogInput[ 0 ], "datepicker", inst);
return this;
},
_destroyDatepicker: function(target){
var nodeName,
$target=$(target),
inst=$.data(target, "datepicker");
if(!$target.hasClass(this.markerClassName)){
return;
}
nodeName=target.nodeName.toLowerCase();
$.removeData(target, "datepicker");
if(nodeName==="input"){
inst.append.remove();
inst.trigger.remove();
$target.removeClass(this.markerClassName).
off("focus", this._showDatepicker).
off("keydown", this._doKeyDown).
off("keypress", this._doKeyPress).
off("keyup", this._doKeyUp);
}else if(nodeName==="div"||nodeName==="span"){
$target.removeClass(this.markerClassName).empty();
}
if(datepicker_instActive===inst){
datepicker_instActive=null;
}},
_enableDatepicker: function(target){
var nodeName, inline,
$target=$(target),
inst=$.data(target, "datepicker");
if(!$target.hasClass(this.markerClassName)){
return;
}
nodeName=target.nodeName.toLowerCase();
if(nodeName==="input"){
target.disabled=false;
inst.trigger.filter("button").
each(function(){ this.disabled=false; }).end().
filter("img").css({ opacity: "1.0", cursor: "" });
}else if(nodeName==="div"||nodeName==="span"){
inline=$target.children("." + this._inlineClass);
inline.children().removeClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
prop("disabled", false);
}
this._disabledInputs=$.map(this._disabledInputs,
function(value){ return(value===target ? null:value); });
},
_disableDatepicker: function(target){
var nodeName, inline,
$target=$(target),
inst=$.data(target, "datepicker");
if(!$target.hasClass(this.markerClassName)){
return;
}
nodeName=target.nodeName.toLowerCase();
if(nodeName==="input"){
target.disabled=true;
inst.trigger.filter("button").
each(function(){ this.disabled=true; }).end().
filter("img").css({ opacity: "0.5", cursor: "default" });
}else if(nodeName==="div"||nodeName==="span"){
inline=$target.children("." + this._inlineClass);
inline.children().addClass("ui-state-disabled");
inline.find("select.ui-datepicker-month, select.ui-datepicker-year").
prop("disabled", true);
}
this._disabledInputs=$.map(this._disabledInputs,
function(value){ return(value===target ? null:value); });
this._disabledInputs[ this._disabledInputs.length ]=target;
},
_isDisabledDatepicker: function(target){
if(!target){
return false;
}
for(var i=0; i < this._disabledInputs.length; i++){
if(this._disabledInputs[ i ]===target){
return true;
}}
return false;
},
_getInst: function(target){
try {
return $.data(target, "datepicker");
}
catch(err){
throw "Missing instance data for this datepicker";
}},
_optionDatepicker: function(target, name, value){
var settings, date, minDate, maxDate,
inst=this._getInst(target);
if(arguments.length===2&&typeof name==="string"){
return(name==="defaults" ? $.extend({}, $.datepicker._defaults) :
(inst ?(name==="all" ? $.extend({}, inst.settings) :
this._get(inst, name)):null));
}
settings=name||{};
if(typeof name==="string"){
settings={};
settings[ name ]=value;
}
if(inst){
if(this._curInst===inst){
this._hideDatepicker();
}
date=this._getDateDatepicker(target, true);
minDate=this._getMinMaxDate(inst, "min");
maxDate=this._getMinMaxDate(inst, "max");
datepicker_extendRemove(inst.settings, settings);
if(minDate!==null&&settings.dateFormat!==undefined&&settings.minDate===undefined){
inst.settings.minDate=this._formatDate(inst, minDate);
}
if(maxDate!==null&&settings.dateFormat!==undefined&&settings.maxDate===undefined){
inst.settings.maxDate=this._formatDate(inst, maxDate);
}
if("disabled" in settings){
if(settings.disabled){
this._disableDatepicker(target);
}else{
this._enableDatepicker(target);
}}
this._attachments($(target), inst);
this._autoSize(inst);
this._setDate(inst, date);
this._updateAlternate(inst);
this._updateDatepicker(inst);
}},
_changeDatepicker: function(target, name, value){
this._optionDatepicker(target, name, value);
},
_refreshDatepicker: function(target){
var inst=this._getInst(target);
if(inst){
this._updateDatepicker(inst);
}},
_setDateDatepicker: function(target, date){
var inst=this._getInst(target);
if(inst){
this._setDate(inst, date);
this._updateDatepicker(inst);
this._updateAlternate(inst);
}},
_getDateDatepicker: function(target, noDefault){
var inst=this._getInst(target);
if(inst&&!inst.inline){
this._setDateFromField(inst, noDefault);
}
return(inst ? this._getDate(inst):null);
},
_doKeyDown: function(event){
var onSelect, dateStr, sel,
inst=$.datepicker._getInst(event.target),
handled=true,
isRTL=inst.dpDiv.is(".ui-datepicker-rtl");
inst._keyEvent=true;
if($.datepicker._datepickerShowing){
switch(event.keyCode){
case 9: $.datepicker._hideDatepicker();
handled=false;
break;
case 13: sel=$("td." + $.datepicker._dayOverClass + ":not(." +
$.datepicker._currentClass + ")", inst.dpDiv);
if(sel[ 0 ]){
$.datepicker._selectDay(event.target, inst.selectedMonth, inst.selectedYear, sel[ 0 ]);
}
onSelect=$.datepicker._get(inst, "onSelect");
if(onSelect){
dateStr=$.datepicker._formatDate(inst);
onSelect.apply(( inst.input ? inst.input[ 0 ]:null), [ dateStr, inst ]);
}else{
$.datepicker._hideDatepicker();
}
return false;
case 27: $.datepicker._hideDatepicker();
break;
case 33: $.datepicker._adjustDate(event.target,(event.ctrlKey ?
-$.datepicker._get(inst, "stepBigMonths") :
-$.datepicker._get(inst, "stepMonths")), "M");
break;
case 34: $.datepicker._adjustDate(event.target,(event.ctrlKey ?
+$.datepicker._get(inst, "stepBigMonths") :
+$.datepicker._get(inst, "stepMonths")), "M");
break;
case 35: if(event.ctrlKey||event.metaKey){
$.datepicker._clearDate(event.target);
}
handled=event.ctrlKey||event.metaKey;
break;
case 36: if(event.ctrlKey||event.metaKey){
$.datepicker._gotoToday(event.target);
}
handled=event.ctrlKey||event.metaKey;
break;
case 37: if(event.ctrlKey||event.metaKey){
$.datepicker._adjustDate(event.target,(isRTL ? +1:-1), "D");
}
handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){
$.datepicker._adjustDate(event.target,(event.ctrlKey ?
-$.datepicker._get(inst, "stepBigMonths") :
-$.datepicker._get(inst, "stepMonths")), "M");
}
break;
case 38: if(event.ctrlKey||event.metaKey){
$.datepicker._adjustDate(event.target, -7, "D");
}
handled=event.ctrlKey||event.metaKey;
break;
case 39: if(event.ctrlKey||event.metaKey){
$.datepicker._adjustDate(event.target,(isRTL ? -1:+1), "D");
}
handled=event.ctrlKey||event.metaKey;
if(event.originalEvent.altKey){
$.datepicker._adjustDate(event.target,(event.ctrlKey ?
+$.datepicker._get(inst, "stepBigMonths") :
+$.datepicker._get(inst, "stepMonths")), "M");
}
break;
case 40: if(event.ctrlKey||event.metaKey){
$.datepicker._adjustDate(event.target, +7, "D");
}
handled=event.ctrlKey||event.metaKey;
break;
default: handled=false;
}}else if(event.keyCode===36&&event.ctrlKey){
$.datepicker._showDatepicker(this);
}else{
handled=false;
}
if(handled){
event.preventDefault();
event.stopPropagation();
}},
_doKeyPress: function(event){
var chars, chr,
inst=$.datepicker._getInst(event.target);
if($.datepicker._get(inst, "constrainInput")){
chars=$.datepicker._possibleChars($.datepicker._get(inst, "dateFormat"));
chr=String.fromCharCode(event.charCode==null ? event.keyCode:event.charCode);
return event.ctrlKey||event.metaKey||(chr < " "||!chars||chars.indexOf(chr) > -1);
}},
_doKeyUp: function(event){
var date,
inst=$.datepicker._getInst(event.target);
if(inst.input.val()!==inst.lastVal){
try {
date=$.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
(inst.input ? inst.input.val():null),
$.datepicker._getFormatConfig(inst));
if(date){
$.datepicker._setDateFromField(inst);
$.datepicker._updateAlternate(inst);
$.datepicker._updateDatepicker(inst);
}}
catch(err){
}}
return true;
},
_showDatepicker: function(input){
input=input.target||input;
if(input.nodeName.toLowerCase()!=="input"){
input=$("input", input.parentNode)[ 0 ];
}
if($.datepicker._isDisabledDatepicker(input)||$.datepicker._lastInput===input){
return;
}
var inst, beforeShow, beforeShowSettings, isFixed,
offset, showAnim, duration;
inst=$.datepicker._getInst(input);
if($.datepicker._curInst&&$.datepicker._curInst!==inst){
$.datepicker._curInst.dpDiv.stop(true, true);
if(inst&&$.datepicker._datepickerShowing){
$.datepicker._hideDatepicker($.datepicker._curInst.input[ 0 ]);
}}
beforeShow=$.datepicker._get(inst, "beforeShow");
beforeShowSettings=beforeShow ? beforeShow.apply(input, [ input, inst ]):{};
if(beforeShowSettings===false){
return;
}
datepicker_extendRemove(inst.settings, beforeShowSettings);
inst.lastVal=null;
$.datepicker._lastInput=input;
$.datepicker._setDateFromField(inst);
if($.datepicker._inDialog){
input.value="";
}
if(!$.datepicker._pos){
$.datepicker._pos=$.datepicker._findPos(input);
$.datepicker._pos[ 1 ] +=input.offsetHeight;
}
isFixed=false;
$(input).parents().each(function(){
isFixed |=$(this).css("position")==="fixed";
return !isFixed;
});
offset={ left: $.datepicker._pos[ 0 ], top: $.datepicker._pos[ 1 ] };
$.datepicker._pos=null;
inst.dpDiv.empty();
inst.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" });
$.datepicker._updateDatepicker(inst);
offset=$.datepicker._checkOffset(inst, offset, isFixed);
inst.dpDiv.css({ position:($.datepicker._inDialog&&$.blockUI ?
"static":(isFixed ? "fixed":"absolute")), display: "none",
left: offset.left + "px", top: offset.top + "px" });
if(!inst.inline){
showAnim=$.datepicker._get(inst, "showAnim");
duration=$.datepicker._get(inst, "duration");
inst.dpDiv.css("z-index", datepicker_getZindex($(input)) + 1);
$.datepicker._datepickerShowing=true;
if($.effects&&$.effects.effect[ showAnim ]){
inst.dpDiv.show(showAnim, $.datepicker._get(inst, "showOptions"), duration);
}else{
inst.dpDiv[ showAnim||"show" ](showAnim ? duration:null);
}
if($.datepicker._shouldFocusInput(inst)){
inst.input.trigger("focus");
}
$.datepicker._curInst=inst;
}},
_updateDatepicker: function(inst){
this.maxRows=4;
datepicker_instActive=inst;
inst.dpDiv.empty().append(this._generateHTML(inst));
this._attachHandlers(inst);
var origyearshtml,
numMonths=this._getNumberOfMonths(inst),
cols=numMonths[ 1 ],
width=17,
activeCell=inst.dpDiv.find("." + this._dayOverClass + " a");
if(activeCell.length > 0){
datepicker_handleMouseover.apply(activeCell.get(0));
}
inst.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(cols > 1){
inst.dpDiv.addClass("ui-datepicker-multi-" + cols).css("width",(width * cols) + "em");
}
inst.dpDiv[(numMonths[ 0 ]!==1||numMonths[ 1 ]!==1 ? "add":"remove") +
"Class" ]("ui-datepicker-multi");
inst.dpDiv[(this._get(inst, "isRTL") ? "add":"remove") +
"Class" ]("ui-datepicker-rtl");
if(inst===$.datepicker._curInst&&$.datepicker._datepickerShowing&&$.datepicker._shouldFocusInput(inst)){
inst.input.trigger("focus");
}
if(inst.yearshtml){
origyearshtml=inst.yearshtml;
setTimeout(function(){
if(origyearshtml===inst.yearshtml&&inst.yearshtml){
inst.dpDiv.find("select.ui-datepicker-year:first").replaceWith(inst.yearshtml);
}
origyearshtml=inst.yearshtml=null;
}, 0);
}},
_shouldFocusInput: function(inst){
return inst.input&&inst.input.is(":visible")&&!inst.input.is(":disabled")&&!inst.input.is(":focus");
},
_checkOffset: function(inst, offset, isFixed){
var dpWidth=inst.dpDiv.outerWidth(),
dpHeight=inst.dpDiv.outerHeight(),
inputWidth=inst.input ? inst.input.outerWidth():0,
inputHeight=inst.input ? inst.input.outerHeight():0,
viewWidth=document.documentElement.clientWidth +(isFixed ? 0:$(document).scrollLeft()),
viewHeight=document.documentElement.clientHeight +(isFixed ? 0:$(document).scrollTop());
offset.left -=(this._get(inst, "isRTL") ?(dpWidth - inputWidth):0);
offset.left -=(isFixed&&offset.left===inst.input.offset().left) ? $(document).scrollLeft():0;
offset.top -=(isFixed&&offset.top===(inst.input.offset().top + inputHeight)) ? $(document).scrollTop():0;
offset.left -=Math.min(offset.left,(offset.left + dpWidth > viewWidth&&viewWidth > dpWidth) ?
Math.abs(offset.left + dpWidth - viewWidth):0);
offset.top -=Math.min(offset.top,(offset.top + dpHeight > viewHeight&&viewHeight > dpHeight) ?
Math.abs(dpHeight + inputHeight):0);
return offset;
},
_findPos: function(obj){
var position,
inst=this._getInst(obj),
isRTL=this._get(inst, "isRTL");
while(obj&&(obj.type==="hidden"||obj.nodeType!==1||$.expr.filters.hidden(obj))){
obj=obj[ isRTL ? "previousSibling":"nextSibling" ];
}
position=$(obj).offset();
return [ position.left, position.top ];
},
_hideDatepicker: function(input){
var showAnim, duration, postProcess, onClose,
inst=this._curInst;
if(!inst||(input&&inst!==$.data(input, "datepicker"))){
return;
}
if(this._datepickerShowing){
showAnim=this._get(inst, "showAnim");
duration=this._get(inst, "duration");
postProcess=function(){
$.datepicker._tidyDialog(inst);
};
if($.effects&&($.effects.effect[ showAnim ]||$.effects[ showAnim ])){
inst.dpDiv.hide(showAnim, $.datepicker._get(inst, "showOptions"), duration, postProcess);
}else{
inst.dpDiv[(showAnim==="slideDown" ? "slideUp" :
(showAnim==="fadeIn" ? "fadeOut":"hide")) ](( showAnim ? duration:null), postProcess);
}
if(!showAnim){
postProcess();
}
this._datepickerShowing=false;
onClose=this._get(inst, "onClose");
if(onClose){
onClose.apply(( inst.input ? inst.input[ 0 ]:null), [(inst.input ? inst.input.val():""), inst ]);
}
this._lastInput=null;
if(this._inDialog){
this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" });
if($.blockUI){
$.unblockUI();
$("body").append(this.dpDiv);
}}
this._inDialog=false;
}},
_tidyDialog: function(inst){
inst.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
},
_checkExternalClick: function(event){
if(!$.datepicker._curInst){
return;
}
var $target=$(event.target),
inst=$.datepicker._getInst($target[ 0 ]);
if((($target[ 0 ].id!==$.datepicker._mainDivId &&
$target.parents("#" + $.datepicker._mainDivId).length===0 &&
!$target.hasClass($.datepicker.markerClassName) &&
!$target.closest("." + $.datepicker._triggerClass).length &&
$.datepicker._datepickerShowing&&!($.datepicker._inDialog&&$.blockUI))) ||
($target.hasClass($.datepicker.markerClassName)&&$.datepicker._curInst!==inst)){
$.datepicker._hideDatepicker();
}},
_adjustDate: function(id, offset, period){
var target=$(id),
inst=this._getInst(target[ 0 ]);
if(this._isDisabledDatepicker(target[ 0 ])){
return;
}
this._adjustInstDate(inst, offset +
(period==="M" ? this._get(inst, "showCurrentAtPos"):0),
period);
this._updateDatepicker(inst);
},
_gotoToday: function(id){
var date,
target=$(id),
inst=this._getInst(target[ 0 ]);
if(this._get(inst, "gotoCurrent")&&inst.currentDay){
inst.selectedDay=inst.currentDay;
inst.drawMonth=inst.selectedMonth=inst.currentMonth;
inst.drawYear=inst.selectedYear=inst.currentYear;
}else{
date=new Date();
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
}
this._notifyChange(inst);
this._adjustDate(target);
},
_selectMonthYear: function(id, select, period){
var target=$(id),
inst=this._getInst(target[ 0 ]);
inst[ "selected" +(period==="M" ? "Month":"Year") ] =
inst[ "draw" +(period==="M" ? "Month":"Year") ] =
parseInt(select.options[ select.selectedIndex ].value, 10);
this._notifyChange(inst);
this._adjustDate(target);
},
_selectDay: function(id, month, year, td){
var inst,
target=$(id);
if($(td).hasClass(this._unselectableClass)||this._isDisabledDatepicker(target[ 0 ])){
return;
}
inst=this._getInst(target[ 0 ]);
inst.selectedDay=inst.currentDay=$("a", td).html();
inst.selectedMonth=inst.currentMonth=month;
inst.selectedYear=inst.currentYear=year;
this._selectDate(id, this._formatDate(inst,
inst.currentDay, inst.currentMonth, inst.currentYear));
},
_clearDate: function(id){
var target=$(id);
this._selectDate(target, "");
},
_selectDate: function(id, dateStr){
var onSelect,
target=$(id),
inst=this._getInst(target[ 0 ]);
dateStr=(dateStr!=null ? dateStr:this._formatDate(inst));
if(inst.input){
inst.input.val(dateStr);
}
this._updateAlternate(inst);
onSelect=this._get(inst, "onSelect");
if(onSelect){
onSelect.apply(( inst.input ? inst.input[ 0 ]:null), [ dateStr, inst ]);
}else if(inst.input){
inst.input.trigger("change");
}
if(inst.inline){
this._updateDatepicker(inst);
}else{
this._hideDatepicker();
this._lastInput=inst.input[ 0 ];
if(typeof(inst.input[ 0 ])!=="object"){
inst.input.trigger("focus");
}
this._lastInput=null;
}},
_updateAlternate: function(inst){
var altFormat, date, dateStr,
altField=this._get(inst, "altField");
if(altField){
altFormat=this._get(inst, "altFormat")||this._get(inst, "dateFormat");
date=this._getDate(inst);
dateStr=this.formatDate(altFormat, date, this._getFormatConfig(inst));
$(altField).val(dateStr);
}},
noWeekends: function(date){
var day=date.getDay();
return [(day > 0&&day < 6), "" ];
},
iso8601Week: function(date){
var time,
checkDate=new Date(date.getTime());
checkDate.setDate(checkDate.getDate() + 4 -(checkDate.getDay()||7));
time=checkDate.getTime();
checkDate.setMonth(0);
checkDate.setDate(1);
return Math.floor(Math.round(( time - checkDate) / 86400000) / 7) + 1;
},
parseDate: function(format, value, settings){
if(format==null||value==null){
throw "Invalid arguments";
}
value=(typeof value==="object" ? value.toString():value + "");
if(value===""){
return null;
}
var iFormat, dim, extra,
iValue=0,
shortYearCutoffTemp=(settings ? settings.shortYearCutoff:null)||this._defaults.shortYearCutoff,
shortYearCutoff=(typeof shortYearCutoffTemp!=="string" ? shortYearCutoffTemp :
new Date().getFullYear() % 100 + parseInt(shortYearCutoffTemp, 10)),
dayNamesShort=(settings ? settings.dayNamesShort:null)||this._defaults.dayNamesShort,
dayNames=(settings ? settings.dayNames:null)||this._defaults.dayNames,
monthNamesShort=(settings ? settings.monthNamesShort:null)||this._defaults.monthNamesShort,
monthNames=(settings ? settings.monthNames:null)||this._defaults.monthNames,
year=-1,
month=-1,
day=-1,
doy=-1,
literal=false,
date,
lookAhead=function(match){
var matches=(iFormat + 1 < format.length&&format.charAt(iFormat + 1)===match);
if(matches){
iFormat++;
}
return matches;
},
getNumber=function(match){
var isDoubled=lookAhead(match),
size=(match==="@" ? 14:(match==="!" ? 20 :
(match==="y"&&isDoubled ? 4:(match==="o" ? 3:2)))),
minSize=(match==="y" ? size:1),
digits=new RegExp("^\\d{" + minSize + "," + size + "}"),
num=value.substring(iValue).match(digits);
if(!num){
throw "Missing number at position " + iValue;
}
iValue +=num[ 0 ].length;
return parseInt(num[ 0 ], 10);
},
getName=function(match, shortNames, longNames){
var index=-1,
names=$.map(lookAhead(match) ? longNames:shortNames, function(v, k){
return [ [ k, v ] ];
}).sort(function(a, b){
return -(a[ 1 ].length - b[ 1 ].length);
});
$.each(names, function(i, pair){
var name=pair[ 1 ];
if(value.substr(iValue, name.length).toLowerCase()===name.toLowerCase()){
index=pair[ 0 ];
iValue +=name.length;
return false;
}});
if(index!==-1){
return index + 1;
}else{
throw "Unknown name at position " + iValue;
}},
checkLiteral=function(){
if(value.charAt(iValue)!==format.charAt(iFormat)){
throw "Unexpected literal at position " + iValue;
}
iValue++;
};
for(iFormat=0; iFormat < format.length; iFormat++){
if(literal){
if(format.charAt(iFormat)==="'"&&!lookAhead("'")){
literal=false;
}else{
checkLiteral();
}}else{
switch(format.charAt(iFormat)){
case "d":
day=getNumber("d");
break;
case "D":
getName("D", dayNamesShort, dayNames);
break;
case "o":
doy=getNumber("o");
break;
case "m":
month=getNumber("m");
break;
case "M":
month=getName("M", monthNamesShort, monthNames);
break;
case "y":
year=getNumber("y");
break;
case "@":
date=new Date(getNumber("@"));
year=date.getFullYear();
month=date.getMonth() + 1;
day=date.getDate();
break;
case "!":
date=new Date(( getNumber("!") - this._ticksTo1970) / 10000);
year=date.getFullYear();
month=date.getMonth() + 1;
day=date.getDate();
break;
case "'":
if(lookAhead("'")){
checkLiteral();
}else{
literal=true;
}
break;
default:
checkLiteral();
}}
}
if(iValue < value.length){
extra=value.substr(iValue);
if(!/^\s+/.test(extra)){
throw "Extra/unparsed characters found in date: " + extra;
}}
if(year===-1){
year=new Date().getFullYear();
}else if(year < 100){
year +=new Date().getFullYear() - new Date().getFullYear() % 100 +
(year <=shortYearCutoff ? 0:-100);
}
if(doy > -1){
month=1;
day=doy;
do {
dim=this._getDaysInMonth(year, month - 1);
if(day <=dim){
break;
}
month++;
day -=dim;
} while(true);
}
date=this._daylightSavingAdjust(new Date(year, month - 1, day));
if(date.getFullYear()!==year||date.getMonth() + 1!==month||date.getDate()!==day){
throw "Invalid date";
}
return date;
},
ATOM: "yy-mm-dd",
COOKIE: "D, dd M yy",
ISO_8601: "yy-mm-dd",
RFC_822: "D, d M y",
RFC_850: "DD, dd-M-y",
RFC_1036: "D, d M y",
RFC_1123: "D, d M yy",
RFC_2822: "D, d M yy",
RSS: "D, d M y",
TICKS: "!",
TIMESTAMP: "@",
W3C: "yy-mm-dd",
_ticksTo1970:(((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) +
Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000),
formatDate: function(format, date, settings){
if(!date){
return "";
}
var iFormat,
dayNamesShort=(settings ? settings.dayNamesShort:null)||this._defaults.dayNamesShort,
dayNames=(settings ? settings.dayNames:null)||this._defaults.dayNames,
monthNamesShort=(settings ? settings.monthNamesShort:null)||this._defaults.monthNamesShort,
monthNames=(settings ? settings.monthNames:null)||this._defaults.monthNames,
lookAhead=function(match){
var matches=(iFormat + 1 < format.length&&format.charAt(iFormat + 1)===match);
if(matches){
iFormat++;
}
return matches;
},
formatNumber=function(match, value, len){
var num="" + value;
if(lookAhead(match)){
while(num.length < len){
num="0" + num;
}}
return num;
},
formatName=function(match, value, shortNames, longNames){
return(lookAhead(match) ? longNames[ value ]:shortNames[ value ]);
},
output="",
literal=false;
if(date){
for(iFormat=0; iFormat < format.length; iFormat++){
if(literal){
if(format.charAt(iFormat)==="'"&&!lookAhead("'")){
literal=false;
}else{
output +=format.charAt(iFormat);
}}else{
switch(format.charAt(iFormat)){
case "d":
output +=formatNumber("d", date.getDate(), 2);
break;
case "D":
output +=formatName("D", date.getDay(), dayNamesShort, dayNames);
break;
case "o":
output +=formatNumber("o",
Math.round(( new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime() - new Date(date.getFullYear(), 0, 0).getTime()) / 86400000), 3);
break;
case "m":
output +=formatNumber("m", date.getMonth() + 1, 2);
break;
case "M":
output +=formatName("M", date.getMonth(), monthNamesShort, monthNames);
break;
case "y":
output +=(lookAhead("y") ? date.getFullYear() :
(date.getFullYear() % 100 < 10 ? "0":"") + date.getFullYear() % 100);
break;
case "@":
output +=date.getTime();
break;
case "!":
output +=date.getTime() * 10000 + this._ticksTo1970;
break;
case "'":
if(lookAhead("'")){
output +="'";
}else{
literal=true;
}
break;
default:
output +=format.charAt(iFormat);
}}
}}
return output;
},
_possibleChars: function(format){
var iFormat,
chars="",
literal=false,
lookAhead=function(match){
var matches=(iFormat + 1 < format.length&&format.charAt(iFormat + 1)===match);
if(matches){
iFormat++;
}
return matches;
};
for(iFormat=0; iFormat < format.length; iFormat++){
if(literal){
if(format.charAt(iFormat)==="'"&&!lookAhead("'")){
literal=false;
}else{
chars +=format.charAt(iFormat);
}}else{
switch(format.charAt(iFormat)){
case "d": case "m": case "y": case "@":
chars +="0123456789";
break;
case "D": case "M":
return null;
case "'":
if(lookAhead("'")){
chars +="'";
}else{
literal=true;
}
break;
default:
chars +=format.charAt(iFormat);
}}
}
return chars;
},
_get: function(inst, name){
return inst.settings[ name ]!==undefined ?
inst.settings[ name ]:this._defaults[ name ];
},
_setDateFromField: function(inst, noDefault){
if(inst.input.val()===inst.lastVal){
return;
}
var dateFormat=this._get(inst, "dateFormat"),
dates=inst.lastVal=inst.input ? inst.input.val():null,
defaultDate=this._getDefaultDate(inst),
date=defaultDate,
settings=this._getFormatConfig(inst);
try {
date=this.parseDate(dateFormat, dates, settings)||defaultDate;
} catch(event){
dates=(noDefault ? "":dates);
}
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
inst.currentDay=(dates ? date.getDate():0);
inst.currentMonth=(dates ? date.getMonth():0);
inst.currentYear=(dates ? date.getFullYear():0);
this._adjustInstDate(inst);
},
_getDefaultDate: function(inst){
return this._restrictMinMax(inst,
this._determineDate(inst, this._get(inst, "defaultDate"), new Date()));
},
_determineDate: function(inst, date, defaultDate){
var offsetNumeric=function(offset){
var date=new Date();
date.setDate(date.getDate() + offset);
return date;
},
offsetString=function(offset){
try {
return $.datepicker.parseDate($.datepicker._get(inst, "dateFormat"),
offset, $.datepicker._getFormatConfig(inst));
}
catch(e){
}
var date=(offset.toLowerCase().match(/^c/) ?
$.datepicker._getDate(inst):null)||new Date(),
year=date.getFullYear(),
month=date.getMonth(),
day=date.getDate(),
pattern=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
matches=pattern.exec(offset);
while(matches){
switch(matches[ 2 ]||"d"){
case "d":case "D" :
day +=parseInt(matches[ 1 ], 10); break;
case "w":case "W" :
day +=parseInt(matches[ 1 ], 10) * 7; break;
case "m":case "M" :
month +=parseInt(matches[ 1 ], 10);
day=Math.min(day, $.datepicker._getDaysInMonth(year, month));
break;
case "y": case "Y" :
year +=parseInt(matches[ 1 ], 10);
day=Math.min(day, $.datepicker._getDaysInMonth(year, month));
break;
}
matches=pattern.exec(offset);
}
return new Date(year, month, day);
},
newDate=(date==null||date==="" ? defaultDate:(typeof date==="string" ? offsetString(date) :
(typeof date==="number" ?(isNaN(date) ? defaultDate:offsetNumeric(date)):new Date(date.getTime()))));
newDate=(newDate&&newDate.toString()==="Invalid Date" ? defaultDate:newDate);
if(newDate){
newDate.setHours(0);
newDate.setMinutes(0);
newDate.setSeconds(0);
newDate.setMilliseconds(0);
}
return this._daylightSavingAdjust(newDate);
},
_daylightSavingAdjust: function(date){
if(!date){
return null;
}
date.setHours(date.getHours() > 12 ? date.getHours() + 2:0);
return date;
},
_setDate: function(inst, date, noChange){
var clear = !date,
origMonth=inst.selectedMonth,
origYear=inst.selectedYear,
newDate=this._restrictMinMax(inst, this._determineDate(inst, date, new Date()));
inst.selectedDay=inst.currentDay=newDate.getDate();
inst.drawMonth=inst.selectedMonth=inst.currentMonth=newDate.getMonth();
inst.drawYear=inst.selectedYear=inst.currentYear=newDate.getFullYear();
if(( origMonth!==inst.selectedMonth||origYear!==inst.selectedYear)&&!noChange){
this._notifyChange(inst);
}
this._adjustInstDate(inst);
if(inst.input){
inst.input.val(clear ? "":this._formatDate(inst));
}},
_getDate: function(inst){
var startDate=(!inst.currentYear||(inst.input&&inst.input.val()==="") ? null :
this._daylightSavingAdjust(new Date(
inst.currentYear, inst.currentMonth, inst.currentDay)));
return startDate;
},
_attachHandlers: function(inst){
var stepMonths=this._get(inst, "stepMonths"),
id="#" + inst.id.replace(/\\\\/g, "\\");
inst.dpDiv.find("[data-handler]").map(function(){
var handler={
prev: function(){
$.datepicker._adjustDate(id, -stepMonths, "M");
},
next: function(){
$.datepicker._adjustDate(id, +stepMonths, "M");
},
hide: function(){
$.datepicker._hideDatepicker();
},
today: function(){
$.datepicker._gotoToday(id);
},
selectDay: function(){
$.datepicker._selectDay(id, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this);
return false;
},
selectMonth: function(){
$.datepicker._selectMonthYear(id, this, "M");
return false;
},
selectYear: function(){
$.datepicker._selectMonthYear(id, this, "Y");
return false;
}};
$(this).on(this.getAttribute("data-event"), handler[ this.getAttribute("data-handler") ]);
});
},
_generateHTML: function(inst){
var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
printDate, dRow, tbody, daySettings, otherMonth, unselectable,
tempDate=new Date(),
today=this._daylightSavingAdjust(new Date(tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate())),
isRTL=this._get(inst, "isRTL"),
showButtonPanel=this._get(inst, "showButtonPanel"),
hideIfNoPrevNext=this._get(inst, "hideIfNoPrevNext"),
navigationAsDateFormat=this._get(inst, "navigationAsDateFormat"),
numMonths=this._getNumberOfMonths(inst),
showCurrentAtPos=this._get(inst, "showCurrentAtPos"),
stepMonths=this._get(inst, "stepMonths"),
isMultiMonth=(numMonths[ 0 ]!==1||numMonths[ 1 ]!==1),
currentDate=this._daylightSavingAdjust(( !inst.currentDay ? new Date(9999, 9, 9) :
new Date(inst.currentYear, inst.currentMonth, inst.currentDay))),
minDate=this._getMinMaxDate(inst, "min"),
maxDate=this._getMinMaxDate(inst, "max"),
drawMonth=inst.drawMonth - showCurrentAtPos,
drawYear=inst.drawYear;
if(drawMonth < 0){
drawMonth +=12;
drawYear--;
}
if(maxDate){
maxDraw=this._daylightSavingAdjust(new Date(maxDate.getFullYear(),
maxDate.getMonth() -(numMonths[ 0 ] * numMonths[ 1 ]) + 1, maxDate.getDate()));
maxDraw=(minDate&&maxDraw < minDate ? minDate:maxDraw);
while(this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1)) > maxDraw){
drawMonth--;
if(drawMonth < 0){
drawMonth=11;
drawYear--;
}}
}
inst.drawMonth=drawMonth;
inst.drawYear=drawYear;
prevText=this._get(inst, "prevText");
prevText=(!navigationAsDateFormat ? prevText:this.formatDate(prevText,
this._daylightSavingAdjust(new Date(drawYear, drawMonth - stepMonths, 1)),
this._getFormatConfig(inst)));
prev=(this._canAdjustMonth(inst, -1, drawYear, drawMonth) ?
"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
" title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" +(isRTL ? "e":"w") + "'>" + prevText + "</span></a>" :
(hideIfNoPrevNext ? "":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" +(isRTL ? "e":"w") + "'>" + prevText + "</span></a>"));
nextText=this._get(inst, "nextText");
nextText=(!navigationAsDateFormat ? nextText:this.formatDate(nextText,
this._daylightSavingAdjust(new Date(drawYear, drawMonth + stepMonths, 1)),
this._getFormatConfig(inst)));
next=(this._canAdjustMonth(inst, +1, drawYear, drawMonth) ?
"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
" title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" +(isRTL ? "w":"e") + "'>" + nextText + "</span></a>" :
(hideIfNoPrevNext ? "":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" +(isRTL ? "w":"e") + "'>" + nextText + "</span></a>"));
currentText=this._get(inst, "currentText");
gotoDate=(this._get(inst, "gotoCurrent")&&inst.currentDay ? currentDate:today);
currentText=(!navigationAsDateFormat ? currentText :
this.formatDate(currentText, gotoDate, this._getFormatConfig(inst)));
controls=(!inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
this._get(inst, "closeText") + "</button>":"");
buttonPanel=(showButtonPanel) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" +(isRTL ? controls:"") +
(this._isInRange(inst, gotoDate) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
">" + currentText + "</button>":"") +(isRTL ? "":controls) + "</div>":"";
firstDay=parseInt(this._get(inst, "firstDay"), 10);
firstDay=(isNaN(firstDay) ? 0:firstDay);
showWeek=this._get(inst, "showWeek");
dayNames=this._get(inst, "dayNames");
dayNamesMin=this._get(inst, "dayNamesMin");
monthNames=this._get(inst, "monthNames");
monthNamesShort=this._get(inst, "monthNamesShort");
beforeShowDay=this._get(inst, "beforeShowDay");
showOtherMonths=this._get(inst, "showOtherMonths");
selectOtherMonths=this._get(inst, "selectOtherMonths");
defaultDate=this._getDefaultDate(inst);
html="";
for(row=0; row < numMonths[ 0 ]; row++){
group="";
this.maxRows=4;
for(col=0; col < numMonths[ 1 ]; col++){
selectedDate=this._daylightSavingAdjust(new Date(drawYear, drawMonth, inst.selectedDay));
cornerClass=" ui-corner-all";
calender="";
if(isMultiMonth){
calender +="<div class='ui-datepicker-group";
if(numMonths[ 1 ] > 1){
switch(col){
case 0: calender +=" ui-datepicker-group-first";
cornerClass=" ui-corner-" +(isRTL ? "right":"left"); break;
case numMonths[ 1 ] - 1: calender +=" ui-datepicker-group-last";
cornerClass=" ui-corner-" +(isRTL ? "left":"right"); break;
default: calender +=" ui-datepicker-group-middle"; cornerClass=""; break;
}}
calender +="'>";
}
calender +="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
(/all|left/.test(cornerClass)&&row===0 ?(isRTL ? next:prev):"") +
(/all|right/.test(cornerClass)&&row===0 ?(isRTL ? prev:next):"") +
this._generateMonthYearHeader(inst, drawMonth, drawYear, minDate, maxDate,
row > 0||col > 0, monthNames, monthNamesShort) +
"</div><table class='ui-datepicker-calendar'><thead>" +
"<tr>";
thead=(showWeek ? "<th class='ui-datepicker-week-col'>" + this._get(inst, "weekHeader") + "</th>":"");
for(dow=0; dow < 7; dow++){
day=(dow + firstDay) % 7;
thead +="<th scope='col'" +(( dow + firstDay + 6) % 7 >=5 ? " class='ui-datepicker-week-end'":"") + ">" +
"<span title='" + dayNames[ day ] + "'>" + dayNamesMin[ day ] + "</span></th>";
}
calender +=thead + "</tr></thead><tbody>";
daysInMonth=this._getDaysInMonth(drawYear, drawMonth);
if(drawYear===inst.selectedYear&&drawMonth===inst.selectedMonth){
inst.selectedDay=Math.min(inst.selectedDay, daysInMonth);
}
leadDays=(this._getFirstDayOfMonth(drawYear, drawMonth) - firstDay + 7) % 7;
curRows=Math.ceil(( leadDays + daysInMonth) / 7);
numRows=(isMultiMonth ? this.maxRows > curRows ? this.maxRows:curRows:curRows);
this.maxRows=numRows;
printDate=this._daylightSavingAdjust(new Date(drawYear, drawMonth, 1 - leadDays));
for(dRow=0; dRow < numRows; dRow++){
calender +="<tr>";
tbody=(!showWeek ? "":"<td class='ui-datepicker-week-col'>" +
this._get(inst, "calculateWeek")(printDate) + "</td>");
for(dow=0; dow < 7; dow++){
daySettings=(beforeShowDay ?
beforeShowDay.apply(( inst.input ? inst.input[ 0 ]:null), [ printDate ]):[ true, "" ]);
otherMonth=(printDate.getMonth()!==drawMonth);
unselectable=(otherMonth&&!selectOtherMonths)||!daySettings[ 0 ] ||
(minDate&&printDate < minDate)||(maxDate&&printDate > maxDate);
tbody +="<td class='" +
(( dow + firstDay + 6) % 7 >=5 ? " ui-datepicker-week-end":"") +
(otherMonth ? " ui-datepicker-other-month":"") +
(( printDate.getTime()===selectedDate.getTime()&&drawMonth===inst.selectedMonth&&inst._keyEvent) ||
(defaultDate.getTime()===printDate.getTime()&&defaultDate.getTime()===selectedDate.getTime()) ?
" " + this._dayOverClass:"") +
(unselectable ? " " + this._unselectableClass + " ui-state-disabled":"") +
(otherMonth&&!showOtherMonths ? "":" " + daySettings[ 1 ] +
(printDate.getTime()===currentDate.getTime() ? " " + this._currentClass:"") +
(printDate.getTime()===today.getTime() ? " ui-datepicker-today":"")) + "'" +
(( !otherMonth||showOtherMonths)&&daySettings[ 2 ] ? " title='" + daySettings[ 2 ].replace(/'/g, "&#39;") + "'":"") +
(unselectable ? "":" data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'") + ">" +
(otherMonth&&!showOtherMonths ? "&#xa0;" :
(unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>":"<a class='ui-state-default" +
(printDate.getTime()===today.getTime() ? " ui-state-highlight":"") +
(printDate.getTime()===currentDate.getTime() ? " ui-state-active":"") +
(otherMonth ? " ui-priority-secondary":"") +
"' href='#'>" + printDate.getDate() + "</a>")) + "</td>";
printDate.setDate(printDate.getDate() + 1);
printDate=this._daylightSavingAdjust(printDate);
}
calender +=tbody + "</tr>";
}
drawMonth++;
if(drawMonth > 11){
drawMonth=0;
drawYear++;
}
calender +="</tbody></table>" +(isMultiMonth ? "</div>" +
(( numMonths[ 0 ] > 0&&col===numMonths[ 1 ] - 1) ? "<div class='ui-datepicker-row-break'></div>":""):"");
group +=calender;
}
html +=group;
}
html +=buttonPanel;
inst._keyEvent=false;
return html;
},
_generateMonthYearHeader: function(inst, drawMonth, drawYear, minDate, maxDate,
secondary, monthNames, monthNamesShort){
var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
changeMonth=this._get(inst, "changeMonth"),
changeYear=this._get(inst, "changeYear"),
showMonthAfterYear=this._get(inst, "showMonthAfterYear"),
html="<div class='ui-datepicker-title'>",
monthHtml="";
if(secondary||!changeMonth){
monthHtml +="<span class='ui-datepicker-month'>" + monthNames[ drawMonth ] + "</span>";
}else{
inMinYear=(minDate&&minDate.getFullYear()===drawYear);
inMaxYear=(maxDate&&maxDate.getFullYear()===drawYear);
monthHtml +="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(month=0; month < 12; month++){
if(( !inMinYear||month >=minDate.getMonth())&&(!inMaxYear||month <=maxDate.getMonth())){
monthHtml +="<option value='" + month + "'" +
(month===drawMonth ? " selected='selected'":"") +
">" + monthNamesShort[ month ] + "</option>";
}}
monthHtml +="</select>";
}
if(!showMonthAfterYear){
html +=monthHtml +(secondary||!(changeMonth&&changeYear) ? "&#xa0;":"");
}
if(!inst.yearshtml){
inst.yearshtml="";
if(secondary||!changeYear){
html +="<span class='ui-datepicker-year'>" + drawYear + "</span>";
}else{
years=this._get(inst, "yearRange").split(":");
thisYear=new Date().getFullYear();
determineYear=function(value){
var year=(value.match(/c[+\-].*/) ? drawYear + parseInt(value.substring(1), 10) :
(value.match(/[+\-].*/) ? thisYear + parseInt(value, 10) :
parseInt(value, 10)));
return(isNaN(year) ? thisYear:year);
};
year=determineYear(years[ 0 ]);
endYear=Math.max(year, determineYear(years[ 1 ]||""));
year=(minDate ? Math.max(year, minDate.getFullYear()):year);
endYear=(maxDate ? Math.min(endYear, maxDate.getFullYear()):endYear);
inst.yearshtml +="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(; year <=endYear; year++){
inst.yearshtml +="<option value='" + year + "'" +
(year===drawYear ? " selected='selected'":"") +
">" + year + "</option>";
}
inst.yearshtml +="</select>";
html +=inst.yearshtml;
inst.yearshtml=null;
}}
html +=this._get(inst, "yearSuffix");
if(showMonthAfterYear){
html +=(secondary||!(changeMonth&&changeYear) ? "&#xa0;":"") + monthHtml;
}
html +="</div>";
return html;
},
_adjustInstDate: function(inst, offset, period){
var year=inst.selectedYear +(period==="Y" ? offset:0),
month=inst.selectedMonth +(period==="M" ? offset:0),
day=Math.min(inst.selectedDay, this._getDaysInMonth(year, month)) +(period==="D" ? offset:0),
date=this._restrictMinMax(inst, this._daylightSavingAdjust(new Date(year, month, day)));
inst.selectedDay=date.getDate();
inst.drawMonth=inst.selectedMonth=date.getMonth();
inst.drawYear=inst.selectedYear=date.getFullYear();
if(period==="M"||period==="Y"){
this._notifyChange(inst);
}},
_restrictMinMax: function(inst, date){
var minDate=this._getMinMaxDate(inst, "min"),
maxDate=this._getMinMaxDate(inst, "max"),
newDate=(minDate&&date < minDate ? minDate:date);
return(maxDate&&newDate > maxDate ? maxDate:newDate);
},
_notifyChange: function(inst){
var onChange=this._get(inst, "onChangeMonthYear");
if(onChange){
onChange.apply(( inst.input ? inst.input[ 0 ]:null),
[ inst.selectedYear, inst.selectedMonth + 1, inst ]);
}},
_getNumberOfMonths: function(inst){
var numMonths=this._get(inst, "numberOfMonths");
return(numMonths==null ? [ 1, 1 ]:(typeof numMonths==="number" ? [ 1, numMonths ]:numMonths));
},
_getMinMaxDate: function(inst, minMax){
return this._determineDate(inst, this._get(inst, minMax + "Date"), null);
},
_getDaysInMonth: function(year, month){
return 32 - this._daylightSavingAdjust(new Date(year, month, 32)).getDate();
},
_getFirstDayOfMonth: function(year, month){
return new Date(year, month, 1).getDay();
},
_canAdjustMonth: function(inst, offset, curYear, curMonth){
var numMonths=this._getNumberOfMonths(inst),
date=this._daylightSavingAdjust(new Date(curYear,
curMonth +(offset < 0 ? offset:numMonths[ 0 ] * numMonths[ 1 ]), 1));
if(offset < 0){
date.setDate(this._getDaysInMonth(date.getFullYear(), date.getMonth()));
}
return this._isInRange(inst, date);
},
_isInRange: function(inst, date){
var yearSplit, currentYear,
minDate=this._getMinMaxDate(inst, "min"),
maxDate=this._getMinMaxDate(inst, "max"),
minYear=null,
maxYear=null,
years=this._get(inst, "yearRange");
if(years){
yearSplit=years.split(":");
currentYear=new Date().getFullYear();
minYear=parseInt(yearSplit[ 0 ], 10);
maxYear=parseInt(yearSplit[ 1 ], 10);
if(yearSplit[ 0 ].match(/[+\-].*/)){
minYear +=currentYear;
}
if(yearSplit[ 1 ].match(/[+\-].*/)){
maxYear +=currentYear;
}}
return(( !minDate||date.getTime() >=minDate.getTime()) &&
(!maxDate||date.getTime() <=maxDate.getTime()) &&
(!minYear||date.getFullYear() >=minYear) &&
(!maxYear||date.getFullYear() <=maxYear));
},
_getFormatConfig: function(inst){
var shortYearCutoff=this._get(inst, "shortYearCutoff");
shortYearCutoff=(typeof shortYearCutoff!=="string" ? shortYearCutoff :
new Date().getFullYear() % 100 + parseInt(shortYearCutoff, 10));
return { shortYearCutoff: shortYearCutoff,
dayNamesShort: this._get(inst, "dayNamesShort"), dayNames: this._get(inst, "dayNames"),
monthNamesShort: this._get(inst, "monthNamesShort"), monthNames: this._get(inst, "monthNames") };},
_formatDate: function(inst, day, month, year){
if(!day){
inst.currentDay=inst.selectedDay;
inst.currentMonth=inst.selectedMonth;
inst.currentYear=inst.selectedYear;
}
var date=(day ?(typeof day==="object" ? day :
this._daylightSavingAdjust(new Date(year, month, day))) :
this._daylightSavingAdjust(new Date(inst.currentYear, inst.currentMonth, inst.currentDay)));
return this.formatDate(this._get(inst, "dateFormat"), date, this._getFormatConfig(inst));
}});
function datepicker_bindHover(dpDiv){
var selector="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return dpDiv.on("mouseout", selector, function(){
$(this).removeClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){
$(this).removeClass("ui-datepicker-prev-hover");
}
if(this.className.indexOf("ui-datepicker-next")!==-1){
$(this).removeClass("ui-datepicker-next-hover");
}})
.on("mouseover", selector, datepicker_handleMouseover);
}
function datepicker_handleMouseover(){
if(!$.datepicker._isDisabledDatepicker(datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[ 0 ]:datepicker_instActive.input[ 0 ])){
$(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
$(this).addClass("ui-state-hover");
if(this.className.indexOf("ui-datepicker-prev")!==-1){
$(this).addClass("ui-datepicker-prev-hover");
}
if(this.className.indexOf("ui-datepicker-next")!==-1){
$(this).addClass("ui-datepicker-next-hover");
}}
}
function datepicker_extendRemove(target, props){
$.extend(target, props);
for(var name in props){
if(props[ name ]==null){
target[ name ]=props[ name ];
}}
return target;
}
$.fn.datepicker=function(options){
if(!this.length){
return this;
}
if(!$.datepicker.initialized){
$(document).on("mousedown", $.datepicker._checkExternalClick);
$.datepicker.initialized=true;
}
if($("#" + $.datepicker._mainDivId).length===0){
$("body").append($.datepicker.dpDiv);
}
var otherArgs=Array.prototype.slice.call(arguments, 1);
if(typeof options==="string"&&(options==="isDisabled"||options==="getDate"||options==="widget")){
return $.datepicker[ "_" + options + "Datepicker" ].
apply($.datepicker, [ this[ 0 ] ].concat(otherArgs));
}
if(options==="option"&&arguments.length===2&&typeof arguments[ 1 ]==="string"){
return $.datepicker[ "_" + options + "Datepicker" ].
apply($.datepicker, [ this[ 0 ] ].concat(otherArgs));
}
return this.each(function(){
typeof options==="string" ?
$.datepicker[ "_" + options + "Datepicker" ].
apply($.datepicker, [ this ].concat(otherArgs)) :
$.datepicker._attachDatepicker(this, options);
});
};
$.datepicker=new Datepicker();
$.datepicker.initialized=false;
$.datepicker.uuid=new Date().getTime();
$.datepicker.version="1.12.1";
var widgetsDatepicker=$.datepicker;
var ie=$.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
var mouseHandled=false;
$(document).on("mouseup", function(){
mouseHandled=false;
});
var widgetsMouse=$.widget("ui.mouse", {
version: "1.12.1",
options: {
cancel: "input, textarea, button, select, option",
distance: 1,
delay: 0
},
_mouseInit: function(){
var that=this;
this.element
.on("mousedown." + this.widgetName, function(event){
return that._mouseDown(event);
})
.on("click." + this.widgetName, function(event){
if(true===$.data(event.target, that.widgetName + ".preventClickEvent")){
$.removeData(event.target, that.widgetName + ".preventClickEvent");
event.stopImmediatePropagation();
return false;
}});
this.started=false;
},
_mouseDestroy: function(){
this.element.off("." + this.widgetName);
if(this._mouseMoveDelegate){
this.document
.off("mousemove." + this.widgetName, this._mouseMoveDelegate)
.off("mouseup." + this.widgetName, this._mouseUpDelegate);
}},
_mouseDown: function(event){
if(mouseHandled){
return;
}
this._mouseMoved=false;
(this._mouseStarted&&this._mouseUp(event));
this._mouseDownEvent=event;
var that=this,
btnIsLeft=(event.which===1),
elIsCancel=(typeof this.options.cancel==="string"&&event.target.nodeName ?
$(event.target).closest(this.options.cancel).length:false);
if(!btnIsLeft||elIsCancel||!this._mouseCapture(event)){
return true;
}
this.mouseDelayMet = !this.options.delay;
if(!this.mouseDelayMet){
this._mouseDelayTimer=setTimeout(function(){
that.mouseDelayMet=true;
}, this.options.delay);
}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){
this._mouseStarted=(this._mouseStart(event)!==false);
if(!this._mouseStarted){
event.preventDefault();
return true;
}}
if(true===$.data(event.target, this.widgetName + ".preventClickEvent")){
$.removeData(event.target, this.widgetName + ".preventClickEvent");
}
this._mouseMoveDelegate=function(event){
return that._mouseMove(event);
};
this._mouseUpDelegate=function(event){
return that._mouseUp(event);
};
this.document
.on("mousemove." + this.widgetName, this._mouseMoveDelegate)
.on("mouseup." + this.widgetName, this._mouseUpDelegate);
event.preventDefault();
mouseHandled=true;
return true;
},
_mouseMove: function(event){
if(this._mouseMoved){
if($.ui.ie&&(!document.documentMode||document.documentMode < 9) &&
!event.button){
return this._mouseUp(event);
}else if(!event.which){
if(event.originalEvent.altKey||event.originalEvent.ctrlKey ||
event.originalEvent.metaKey||event.originalEvent.shiftKey){
this.ignoreMissingWhich=true;
}else if(!this.ignoreMissingWhich){
return this._mouseUp(event);
}}
}
if(event.which||event.button){
this._mouseMoved=true;
}
if(this._mouseStarted){
this._mouseDrag(event);
return event.preventDefault();
}
if(this._mouseDistanceMet(event)&&this._mouseDelayMet(event)){
this._mouseStarted =
(this._mouseStart(this._mouseDownEvent, event)!==false);
(this._mouseStarted ? this._mouseDrag(event):this._mouseUp(event));
}
return !this._mouseStarted;
},
_mouseUp: function(event){
this.document
.off("mousemove." + this.widgetName, this._mouseMoveDelegate)
.off("mouseup." + this.widgetName, this._mouseUpDelegate);
if(this._mouseStarted){
this._mouseStarted=false;
if(event.target===this._mouseDownEvent.target){
$.data(event.target, this.widgetName + ".preventClickEvent", true);
}
this._mouseStop(event);
}
if(this._mouseDelayTimer){
clearTimeout(this._mouseDelayTimer);
delete this._mouseDelayTimer;
}
this.ignoreMissingWhich=false;
mouseHandled=false;
event.preventDefault();
},
_mouseDistanceMet: function(event){
return(Math.max(Math.abs(this._mouseDownEvent.pageX - event.pageX),
Math.abs(this._mouseDownEvent.pageY - event.pageY)
) >=this.options.distance
);
},
_mouseDelayMet: function(){
return this.mouseDelayMet;
},
_mouseStart: function(){},
_mouseDrag: function(){},
_mouseStop: function(){},
_mouseCapture: function(){ return true; }});
var plugin=$.ui.plugin={
add: function(module, option, set){
var i,
proto=$.ui[ module ].prototype;
for(i in set){
proto.plugins[ i ]=proto.plugins[ i ]||[];
proto.plugins[ i ].push([ option, set[ i ] ]);
}},
call: function(instance, name, args, allowDisconnected){
var i,
set=instance.plugins[ name ];
if(!set){
return;
}
if(!allowDisconnected&&(!instance.element[ 0 ].parentNode ||
instance.element[ 0 ].parentNode.nodeType===11)){
return;
}
for(i=0; i < set.length; i++){
if(instance.options[ set[ i ][ 0 ] ]){
set[ i ][ 1 ].apply(instance.element, args);
}}
}};
var safeBlur=$.ui.safeBlur=function(element){
if(element&&element.nodeName.toLowerCase()!=="body"){
$(element).trigger("blur");
}};
$.widget("ui.draggable", $.ui.mouse, {
version: "1.12.1",
widgetEventPrefix: "drag",
options: {
addClasses: true,
appendTo: "parent",
axis: false,
connectToSortable: false,
containment: false,
cursor: "auto",
cursorAt: false,
grid: false,
handle: false,
helper: "original",
iframeFix: false,
opacity: false,
refreshPositions: false,
revert: false,
revertDuration: 500,
scope: "default",
scroll: true,
scrollSensitivity: 20,
scrollSpeed: 20,
snap: false,
snapMode: "both",
snapTolerance: 20,
stack: false,
zIndex: false,
drag: null,
start: null,
stop: null
},
_create: function(){
if(this.options.helper==="original"){
this._setPositionRelative();
}
if(this.options.addClasses){
this._addClass("ui-draggable");
}
this._setHandleClassName();
this._mouseInit();
},
_setOption: function(key, value){
this._super(key, value);
if(key==="handle"){
this._removeHandleClassName();
this._setHandleClassName();
}},
_destroy: function(){
if(( this.helper||this.element).is(".ui-draggable-dragging")){
this.destroyOnClear=true;
return;
}
this._removeHandleClassName();
this._mouseDestroy();
},
_mouseCapture: function(event){
var o=this.options;
if(this.helper||o.disabled ||
$(event.target).closest(".ui-resizable-handle").length > 0){
return false;
}
this.handle=this._getHandle(event);
if(!this.handle){
return false;
}
this._blurActiveElement(event);
this._blockFrames(o.iframeFix===true ? "iframe":o.iframeFix);
return true;
},
_blockFrames: function(selector){
this.iframeBlocks=this.document.find(selector).map(function(){
var iframe=$(this);
return $("<div>")
.css("position", "absolute")
.appendTo(iframe.parent())
.outerWidth(iframe.outerWidth())
.outerHeight(iframe.outerHeight())
.offset(iframe.offset())[ 0 ];
});
},
_unblockFrames: function(){
if(this.iframeBlocks){
this.iframeBlocks.remove();
delete this.iframeBlocks;
}},
_blurActiveElement: function(event){
var activeElement=$.ui.safeActiveElement(this.document[ 0 ]),
target=$(event.target);
if(target.closest(activeElement).length){
return;
}
$.ui.safeBlur(activeElement);
},
_mouseStart: function(event){
var o=this.options;
this.helper=this._createHelper(event);
this._addClass(this.helper, "ui-draggable-dragging");
this._cacheHelperProportions();
if($.ui.ddmanager){
$.ui.ddmanager.current=this;
}
this._cacheMargins();
this.cssPosition=this.helper.css("position");
this.scrollParent=this.helper.scrollParent(true);
this.offsetParent=this.helper.offsetParent();
this.hasFixedAncestor=this.helper.parents().filter(function(){
return $(this).css("position")==="fixed";
}).length > 0;
this.positionAbs=this.element.offset();
this._refreshOffsets(event);
this.originalPosition=this.position=this._generatePosition(event, false);
this.originalPageX=event.pageX;
this.originalPageY=event.pageY;
(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));
this._setContainment();
if(this._trigger("start", event)===false){
this._clear();
return false;
}
this._cacheHelperProportions();
if($.ui.ddmanager&&!o.dropBehaviour){
$.ui.ddmanager.prepareOffsets(this, event);
}
this._mouseDrag(event, true);
if($.ui.ddmanager){
$.ui.ddmanager.dragStart(this, event);
}
return true;
},
_refreshOffsets: function(event){
this.offset={
top: this.positionAbs.top - this.margins.top,
left: this.positionAbs.left - this.margins.left,
scroll: false,
parent: this._getParentOffset(),
relative: this._getRelativeOffset()
};
this.offset.click={
left: event.pageX - this.offset.left,
top: event.pageY - this.offset.top
};},
_mouseDrag: function(event, noPropagation){
if(this.hasFixedAncestor){
this.offset.parent=this._getParentOffset();
}
this.position=this._generatePosition(event, true);
this.positionAbs=this._convertPositionTo("absolute");
if(!noPropagation){
var ui=this._uiHash();
if(this._trigger("drag", event, ui)===false){
this._mouseUp(new $.Event("mouseup", event));
return false;
}
this.position=ui.position;
}
this.helper[ 0 ].style.left=this.position.left + "px";
this.helper[ 0 ].style.top=this.position.top + "px";
if($.ui.ddmanager){
$.ui.ddmanager.drag(this, event);
}
return false;
},
_mouseStop: function(event){
var that=this,
dropped=false;
if($.ui.ddmanager&&!this.options.dropBehaviour){
dropped=$.ui.ddmanager.drop(this, event);
}
if(this.dropped){
dropped=this.dropped;
this.dropped=false;
}
if(( this.options.revert==="invalid"&&!dropped) ||
(this.options.revert==="valid"&&dropped) ||
this.options.revert===true||($.isFunction(this.options.revert) &&
this.options.revert.call(this.element, dropped))
){
$(this.helper).animate(this.originalPosition,
parseInt(this.options.revertDuration, 10),
function(){
if(that._trigger("stop", event)!==false){
that._clear();
}}
);
}else{
if(this._trigger("stop", event)!==false){
this._clear();
}}
return false;
},
_mouseUp: function(event){
this._unblockFrames();
if($.ui.ddmanager){
$.ui.ddmanager.dragStop(this, event);
}
if(this.handleElement.is(event.target)){
this.element.trigger("focus");
}
return $.ui.mouse.prototype._mouseUp.call(this, event);
},
cancel: function(){
if(this.helper.is(".ui-draggable-dragging")){
this._mouseUp(new $.Event("mouseup", { target: this.element[ 0 ] }));
}else{
this._clear();
}
return this;
},
_getHandle: function(event){
return this.options.handle ?
!!$(event.target).closest(this.element.find(this.options.handle)).length :
true;
},
_setHandleClassName: function(){
this.handleElement=this.options.handle ?
this.element.find(this.options.handle):this.element;
this._addClass(this.handleElement, "ui-draggable-handle");
},
_removeHandleClassName: function(){
this._removeClass(this.handleElement, "ui-draggable-handle");
},
_createHelper: function(event){
var o=this.options,
helperIsFunction=$.isFunction(o.helper),
helper=helperIsFunction ?
$(o.helper.apply(this.element[ 0 ], [ event ])) :
(o.helper==="clone" ?
this.element.clone().removeAttr("id") :
this.element);
if(!helper.parents("body").length){
helper.appendTo(( o.appendTo==="parent" ?
this.element[ 0 ].parentNode :
o.appendTo));
}
if(helperIsFunction&&helper[ 0 ]===this.element[ 0 ]){
this._setPositionRelative();
}
if(helper[ 0 ]!==this.element[ 0 ] &&
!(/(fixed|absolute)/).test(helper.css("position"))){
helper.css("position", "absolute");
}
return helper;
},
_setPositionRelative: function(){
if(!(/^(?:r|a|f)/).test(this.element.css("position"))){
this.element[ 0 ].style.position="relative";
}},
_adjustOffsetFromHelper: function(obj){
if(typeof obj==="string"){
obj=obj.split(" ");
}
if($.isArray(obj)){
obj={ left: +obj[ 0 ], top: +obj[ 1 ]||0 };}
if("left" in obj){
this.offset.click.left=obj.left + this.margins.left;
}
if("right" in obj){
this.offset.click.left=this.helperProportions.width - obj.right + this.margins.left;
}
if("top" in obj){
this.offset.click.top=obj.top + this.margins.top;
}
if("bottom" in obj){
this.offset.click.top=this.helperProportions.height - obj.bottom + this.margins.top;
}},
_isRootNode: function(element){
return(/(html|body)/i).test(element.tagName)||element===this.document[ 0 ];
},
_getParentOffset: function(){
var po=this.offsetParent.offset(),
document=this.document[ 0 ];
if(this.cssPosition==="absolute"&&this.scrollParent[ 0 ]!==document &&
$.contains(this.scrollParent[ 0 ], this.offsetParent[ 0 ])){
po.left +=this.scrollParent.scrollLeft();
po.top +=this.scrollParent.scrollTop();
}
if(this._isRootNode(this.offsetParent[ 0 ])){
po={ top: 0, left: 0 };}
return {
top: po.top +(parseInt(this.offsetParent.css("borderTopWidth"), 10)||0),
left: po.left +(parseInt(this.offsetParent.css("borderLeftWidth"), 10)||0)
};},
_getRelativeOffset: function(){
if(this.cssPosition!=="relative"){
return { top: 0, left: 0 };}
var p=this.element.position(),
scrollIsRootNode=this._isRootNode(this.scrollParent[ 0 ]);
return {
top: p.top -(parseInt(this.helper.css("top"), 10)||0) +
(!scrollIsRootNode ? this.scrollParent.scrollTop():0),
left: p.left -(parseInt(this.helper.css("left"), 10)||0) +
(!scrollIsRootNode ? this.scrollParent.scrollLeft():0)
};},
_cacheMargins: function(){
this.margins={
left:(parseInt(this.element.css("marginLeft"), 10)||0),
top:(parseInt(this.element.css("marginTop"), 10)||0),
right:(parseInt(this.element.css("marginRight"), 10)||0),
bottom:(parseInt(this.element.css("marginBottom"), 10)||0)
};},
_cacheHelperProportions: function(){
this.helperProportions={
width: this.helper.outerWidth(),
height: this.helper.outerHeight()
};},
_setContainment: function(){
var isUserScrollable, c, ce,
o=this.options,
document=this.document[ 0 ];
this.relativeContainer=null;
if(!o.containment){
this.containment=null;
return;
}
if(o.containment==="window"){
this.containment=[
$(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
$(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
$(window).scrollLeft() + $(window).width() -
this.helperProportions.width - this.margins.left,
$(window).scrollTop() +
($(window).height()||document.body.parentNode.scrollHeight) -
this.helperProportions.height - this.margins.top
];
return;
}
if(o.containment==="document"){
this.containment=[
0,
0,
$(document).width() - this.helperProportions.width - this.margins.left,
($(document).height()||document.body.parentNode.scrollHeight) -
this.helperProportions.height - this.margins.top
];
return;
}
if(o.containment.constructor===Array){
this.containment=o.containment;
return;
}
if(o.containment==="parent"){
o.containment=this.helper[ 0 ].parentNode;
}
c=$(o.containment);
ce=c[ 0 ];
if(!ce){
return;
}
isUserScrollable=/(scroll|auto)/.test(c.css("overflow"));
this.containment=[
(parseInt(c.css("borderLeftWidth"), 10)||0) +
(parseInt(c.css("paddingLeft"), 10)||0),
(parseInt(c.css("borderTopWidth"), 10)||0) +
(parseInt(c.css("paddingTop"), 10)||0),
(isUserScrollable ? Math.max(ce.scrollWidth, ce.offsetWidth):ce.offsetWidth) -
(parseInt(c.css("borderRightWidth"), 10)||0) -
(parseInt(c.css("paddingRight"), 10)||0) -
this.helperProportions.width -
this.margins.left -
this.margins.right,
(isUserScrollable ? Math.max(ce.scrollHeight, ce.offsetHeight):ce.offsetHeight) -
(parseInt(c.css("borderBottomWidth"), 10)||0) -
(parseInt(c.css("paddingBottom"), 10)||0) -
this.helperProportions.height -
this.margins.top -
this.margins.bottom
];
this.relativeContainer=c;
},
_convertPositionTo: function(d, pos){
if(!pos){
pos=this.position;
}
var mod=d==="absolute" ? 1:-1,
scrollIsRootNode=this._isRootNode(this.scrollParent[ 0 ]);
return {
top: (
pos.top	+
this.offset.relative.top * mod +
this.offset.parent.top * mod -
(( this.cssPosition==="fixed" ?
-this.offset.scroll.top :
(scrollIsRootNode ? 0:this.offset.scroll.top)) * mod)
),
left: (
pos.left +
this.offset.relative.left * mod +
this.offset.parent.left * mod	-
(( this.cssPosition==="fixed" ?
-this.offset.scroll.left :
(scrollIsRootNode ? 0:this.offset.scroll.left)) * mod)
)
};},
_generatePosition: function(event, constrainPosition){
var containment, co, top, left,
o=this.options,
scrollIsRootNode=this._isRootNode(this.scrollParent[ 0 ]),
pageX=event.pageX,
pageY=event.pageY;
if(!scrollIsRootNode||!this.offset.scroll){
this.offset.scroll={
top: this.scrollParent.scrollTop(),
left: this.scrollParent.scrollLeft()
};}
if(constrainPosition){
if(this.containment){
if(this.relativeContainer){
co=this.relativeContainer.offset();
containment=[
this.containment[ 0 ] + co.left,
this.containment[ 1 ] + co.top,
this.containment[ 2 ] + co.left,
this.containment[ 3 ] + co.top
];
}else{
containment=this.containment;
}
if(event.pageX - this.offset.click.left < containment[ 0 ]){
pageX=containment[ 0 ] + this.offset.click.left;
}
if(event.pageY - this.offset.click.top < containment[ 1 ]){
pageY=containment[ 1 ] + this.offset.click.top;
}
if(event.pageX - this.offset.click.left > containment[ 2 ]){
pageX=containment[ 2 ] + this.offset.click.left;
}
if(event.pageY - this.offset.click.top > containment[ 3 ]){
pageY=containment[ 3 ] + this.offset.click.top;
}}
if(o.grid){
top=o.grid[ 1 ] ? this.originalPageY + Math.round(( pageY -
this.originalPageY) / o.grid[ 1 ]) * o.grid[ 1 ]:this.originalPageY;
pageY=containment ?(( top - this.offset.click.top >=containment[ 1 ] ||
top - this.offset.click.top > containment[ 3 ]) ?
top :
(( top - this.offset.click.top >=containment[ 1 ]) ?
top - o.grid[ 1 ]:top + o.grid[ 1 ])):top;
left=o.grid[ 0 ] ? this.originalPageX +
Math.round(( pageX - this.originalPageX) / o.grid[ 0 ]) * o.grid[ 0 ] :
this.originalPageX;
pageX=containment ?(( left - this.offset.click.left >=containment[ 0 ] ||
left - this.offset.click.left > containment[ 2 ]) ?
left :
(( left - this.offset.click.left >=containment[ 0 ]) ?
left - o.grid[ 0 ]:left + o.grid[ 0 ])):left;
}
if(o.axis==="y"){
pageX=this.originalPageX;
}
if(o.axis==="x"){
pageY=this.originalPageY;
}}
return {
top: (
pageY -
this.offset.click.top -
this.offset.relative.top -
this.offset.parent.top +
(this.cssPosition==="fixed" ?
-this.offset.scroll.top :
(scrollIsRootNode ? 0:this.offset.scroll.top))
),
left: (
pageX -
this.offset.click.left -
this.offset.relative.left -
this.offset.parent.left +
(this.cssPosition==="fixed" ?
-this.offset.scroll.left :
(scrollIsRootNode ? 0:this.offset.scroll.left))
)
};},
_clear: function(){
this._removeClass(this.helper, "ui-draggable-dragging");
if(this.helper[ 0 ]!==this.element[ 0 ]&&!this.cancelHelperRemoval){
this.helper.remove();
}
this.helper=null;
this.cancelHelperRemoval=false;
if(this.destroyOnClear){
this.destroy();
}},
_trigger: function(type, event, ui){
ui=ui||this._uiHash();
$.ui.plugin.call(this, type, [ event, ui, this ], true);
if(/^(drag|start|stop)/.test(type)){
this.positionAbs=this._convertPositionTo("absolute");
ui.offset=this.positionAbs;
}
return $.Widget.prototype._trigger.call(this, type, event, ui);
},
plugins: {},
_uiHash: function(){
return {
helper: this.helper,
position: this.position,
originalPosition: this.originalPosition,
offset: this.positionAbs
};}});
$.ui.plugin.add("draggable", "connectToSortable", {
start: function(event, ui, draggable){
var uiSortable=$.extend({}, ui, {
item: draggable.element
});
draggable.sortables=[];
$(draggable.options.connectToSortable).each(function(){
var sortable=$(this).sortable("instance");
if(sortable&&!sortable.options.disabled){
draggable.sortables.push(sortable);
sortable.refreshPositions();
sortable._trigger("activate", event, uiSortable);
}});
},
stop: function(event, ui, draggable){
var uiSortable=$.extend({}, ui, {
item: draggable.element
});
draggable.cancelHelperRemoval=false;
$.each(draggable.sortables, function(){
var sortable=this;
if(sortable.isOver){
sortable.isOver=0;
draggable.cancelHelperRemoval=true;
sortable.cancelHelperRemoval=false;
sortable._storedCSS={
position: sortable.placeholder.css("position"),
top: sortable.placeholder.css("top"),
left: sortable.placeholder.css("left")
};
sortable._mouseStop(event);
sortable.options.helper=sortable.options._helper;
}else{
sortable.cancelHelperRemoval=true;
sortable._trigger("deactivate", event, uiSortable);
}});
},
drag: function(event, ui, draggable){
$.each(draggable.sortables, function(){
var innermostIntersecting=false,
sortable=this;
sortable.positionAbs=draggable.positionAbs;
sortable.helperProportions=draggable.helperProportions;
sortable.offset.click=draggable.offset.click;
if(sortable._intersectsWith(sortable.containerCache)){
innermostIntersecting=true;
$.each(draggable.sortables, function(){
this.positionAbs=draggable.positionAbs;
this.helperProportions=draggable.helperProportions;
this.offset.click=draggable.offset.click;
if(this!==sortable &&
this._intersectsWith(this.containerCache) &&
$.contains(sortable.element[ 0 ], this.element[ 0 ])){
innermostIntersecting=false;
}
return innermostIntersecting;
});
}
if(innermostIntersecting){
if(!sortable.isOver){
sortable.isOver=1;
draggable._parent=ui.helper.parent();
sortable.currentItem=ui.helper
.appendTo(sortable.element)
.data("ui-sortable-item", true);
sortable.options._helper=sortable.options.helper;
sortable.options.helper=function(){
return ui.helper[ 0 ];
};
event.target=sortable.currentItem[ 0 ];
sortable._mouseCapture(event, true);
sortable._mouseStart(event, true, true);
sortable.offset.click.top=draggable.offset.click.top;
sortable.offset.click.left=draggable.offset.click.left;
sortable.offset.parent.left -=draggable.offset.parent.left -
sortable.offset.parent.left;
sortable.offset.parent.top -=draggable.offset.parent.top -
sortable.offset.parent.top;
draggable._trigger("toSortable", event);
draggable.dropped=sortable.element;
$.each(draggable.sortables, function(){
this.refreshPositions();
});
draggable.currentItem=draggable.element;
sortable.fromOutside=draggable;
}
if(sortable.currentItem){
sortable._mouseDrag(event);
ui.position=sortable.position;
}}else{
if(sortable.isOver){
sortable.isOver=0;
sortable.cancelHelperRemoval=true;
sortable.options._revert=sortable.options.revert;
sortable.options.revert=false;
sortable._trigger("out", event, sortable._uiHash(sortable));
sortable._mouseStop(event, true);
sortable.options.revert=sortable.options._revert;
sortable.options.helper=sortable.options._helper;
if(sortable.placeholder){
sortable.placeholder.remove();
}
ui.helper.appendTo(draggable._parent);
draggable._refreshOffsets(event);
ui.position=draggable._generatePosition(event, true);
draggable._trigger("fromSortable", event);
draggable.dropped=false;
$.each(draggable.sortables, function(){
this.refreshPositions();
});
}}
});
}});
$.ui.plugin.add("draggable", "cursor", {
start: function(event, ui, instance){
var t=$("body"),
o=instance.options;
if(t.css("cursor")){
o._cursor=t.css("cursor");
}
t.css("cursor", o.cursor);
},
stop: function(event, ui, instance){
var o=instance.options;
if(o._cursor){
$("body").css("cursor", o._cursor);
}}
});
$.ui.plugin.add("draggable", "opacity", {
start: function(event, ui, instance){
var t=$(ui.helper),
o=instance.options;
if(t.css("opacity")){
o._opacity=t.css("opacity");
}
t.css("opacity", o.opacity);
},
stop: function(event, ui, instance){
var o=instance.options;
if(o._opacity){
$(ui.helper).css("opacity", o._opacity);
}}
});
$.ui.plugin.add("draggable", "scroll", {
start: function(event, ui, i){
if(!i.scrollParentNotHidden){
i.scrollParentNotHidden=i.helper.scrollParent(false);
}
if(i.scrollParentNotHidden[ 0 ]!==i.document[ 0 ] &&
i.scrollParentNotHidden[ 0 ].tagName!=="HTML"){
i.overflowOffset=i.scrollParentNotHidden.offset();
}},
drag: function(event, ui, i){
var o=i.options,
scrolled=false,
scrollParent=i.scrollParentNotHidden[ 0 ],
document=i.document[ 0 ];
if(scrollParent!==document&&scrollParent.tagName!=="HTML"){
if(!o.axis||o.axis!=="x"){
if(( i.overflowOffset.top + scrollParent.offsetHeight) - event.pageY <
o.scrollSensitivity){
scrollParent.scrollTop=scrolled=scrollParent.scrollTop + o.scrollSpeed;
}else if(event.pageY - i.overflowOffset.top < o.scrollSensitivity){
scrollParent.scrollTop=scrolled=scrollParent.scrollTop - o.scrollSpeed;
}}
if(!o.axis||o.axis!=="y"){
if(( i.overflowOffset.left + scrollParent.offsetWidth) - event.pageX <
o.scrollSensitivity){
scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft + o.scrollSpeed;
}else if(event.pageX - i.overflowOffset.left < o.scrollSensitivity){
scrollParent.scrollLeft=scrolled=scrollParent.scrollLeft - o.scrollSpeed;
}}
}else{
if(!o.axis||o.axis!=="x"){
if(event.pageY - $(document).scrollTop() < o.scrollSensitivity){
scrolled=$(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
}else if($(window).height() -(event.pageY - $(document).scrollTop()) <
o.scrollSensitivity){
scrolled=$(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
}}
if(!o.axis||o.axis!=="y"){
if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity){
scrolled=$(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed
);
}else if($(window).width() -(event.pageX - $(document).scrollLeft()) <
o.scrollSensitivity){
scrolled=$(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed
);
}}
}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){
$.ui.ddmanager.prepareOffsets(i, event);
}}
});
$.ui.plugin.add("draggable", "snap", {
start: function(event, ui, i){
var o=i.options;
i.snapElements=[];
$(o.snap.constructor!==String ?(o.snap.items||":data(ui-draggable)"):o.snap)
.each(function(){
var $t=$(this),
$o=$t.offset();
if(this!==i.element[ 0 ]){
i.snapElements.push({
item: this,
width: $t.outerWidth(), height: $t.outerHeight(),
top: $o.top, left: $o.left
});
}});
},
drag: function(event, ui, inst){
var ts, bs, ls, rs, l, r, t, b, i, first,
o=inst.options,
d=o.snapTolerance,
x1=ui.offset.left, x2=x1 + inst.helperProportions.width,
y1=ui.offset.top, y2=y1 + inst.helperProportions.height;
for(i=inst.snapElements.length - 1; i >=0; i--){
l=inst.snapElements[ i ].left - inst.margins.left;
r=l + inst.snapElements[ i ].width;
t=inst.snapElements[ i ].top - inst.margins.top;
b=t + inst.snapElements[ i ].height;
if(x2 < l - d||x1 > r + d||y2 < t - d||y1 > b + d ||
!$.contains(inst.snapElements[ i ].item.ownerDocument,
inst.snapElements[ i ].item)){
if(inst.snapElements[ i ].snapping){
(inst.options.snap.release &&
inst.options.snap.release.call(inst.element,
event,
$.extend(inst._uiHash(), { snapItem: inst.snapElements[ i ].item })
));
}
inst.snapElements[ i ].snapping=false;
continue;
}
if(o.snapMode!=="inner"){
ts=Math.abs(t - y2) <=d;
bs=Math.abs(b - y1) <=d;
ls=Math.abs(l - x2) <=d;
rs=Math.abs(r - x1) <=d;
if(ts){
ui.position.top=inst._convertPositionTo("relative", {
top: t - inst.helperProportions.height,
left: 0
}).top;
}
if(bs){
ui.position.top=inst._convertPositionTo("relative", {
top: b,
left: 0
}).top;
}
if(ls){
ui.position.left=inst._convertPositionTo("relative", {
top: 0,
left: l - inst.helperProportions.width
}).left;
}
if(rs){
ui.position.left=inst._convertPositionTo("relative", {
top: 0,
left: r
}).left;
}}
first=(ts||bs||ls||rs);
if(o.snapMode!=="outer"){
ts=Math.abs(t - y1) <=d;
bs=Math.abs(b - y2) <=d;
ls=Math.abs(l - x1) <=d;
rs=Math.abs(r - x2) <=d;
if(ts){
ui.position.top=inst._convertPositionTo("relative", {
top: t,
left: 0
}).top;
}
if(bs){
ui.position.top=inst._convertPositionTo("relative", {
top: b - inst.helperProportions.height,
left: 0
}).top;
}
if(ls){
ui.position.left=inst._convertPositionTo("relative", {
top: 0,
left: l
}).left;
}
if(rs){
ui.position.left=inst._convertPositionTo("relative", {
top: 0,
left: r - inst.helperProportions.width
}).left;
}}
if(!inst.snapElements[ i ].snapping&&(ts||bs||ls||rs||first)){
(inst.options.snap.snap &&
inst.options.snap.snap.call(inst.element,
event,
$.extend(inst._uiHash(), {
snapItem: inst.snapElements[ i ].item
})));
}
inst.snapElements[ i ].snapping=(ts||bs||ls||rs||first);
}}
});
$.ui.plugin.add("draggable", "stack", {
start: function(event, ui, instance){
var min,
o=instance.options,
group=$.makeArray($(o.stack)).sort(function(a, b){
return(parseInt($(a).css("zIndex"), 10)||0) -
(parseInt($(b).css("zIndex"), 10)||0);
});
if(!group.length){ return; }
min=parseInt($(group[ 0 ]).css("zIndex"), 10)||0;
$(group).each(function(i){
$(this).css("zIndex", min + i);
});
this.css("zIndex",(min + group.length));
}});
$.ui.plugin.add("draggable", "zIndex", {
start: function(event, ui, instance){
var t=$(ui.helper),
o=instance.options;
if(t.css("zIndex")){
o._zIndex=t.css("zIndex");
}
t.css("zIndex", o.zIndex);
},
stop: function(event, ui, instance){
var o=instance.options;
if(o._zIndex){
$(ui.helper).css("zIndex", o._zIndex);
}}
});
var widgetsDraggable=$.ui.draggable;
$.widget("ui.resizable", $.ui.mouse, {
version: "1.12.1",
widgetEventPrefix: "resize",
options: {
alsoResize: false,
animate: false,
animateDuration: "slow",
animateEasing: "swing",
aspectRatio: false,
autoHide: false,
classes: {
"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"
},
containment: false,
ghost: false,
grid: false,
handles: "e,s,se",
helper: false,
maxHeight: null,
maxWidth: null,
minHeight: 10,
minWidth: 10,
zIndex: 90,
resize: null,
start: null,
stop: null
},
_num: function(value){
return parseFloat(value)||0;
},
_isNumber: function(value){
return !isNaN(parseFloat(value));
},
_hasScroll: function(el, a){
if($(el).css("overflow")==="hidden"){
return false;
}
var scroll=(a&&a==="left") ? "scrollLeft":"scrollTop",
has=false;
if(el[ scroll ] > 0){
return true;
}
el[ scroll ]=1;
has=(el[ scroll ] > 0);
el[ scroll ]=0;
return has;
},
_create: function(){
var margins,
o=this.options,
that=this;
this._addClass("ui-resizable");
$.extend(this, {
_aspectRatio: !!(o.aspectRatio),
aspectRatio: o.aspectRatio,
originalElement: this.element,
_proportionallyResizeElements: [],
_helper: o.helper||o.ghost||o.animate ? o.helper||"ui-resizable-helper":null
});
if(this.element[ 0 ].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)){
this.element.wrap($("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
position: this.element.css("position"),
width: this.element.outerWidth(),
height: this.element.outerHeight(),
top: this.element.css("top"),
left: this.element.css("left")
})
);
this.element=this.element.parent().data("ui-resizable", this.element.resizable("instance")
);
this.elementIsWrapper=true;
margins={
marginTop: this.originalElement.css("marginTop"),
marginRight: this.originalElement.css("marginRight"),
marginBottom: this.originalElement.css("marginBottom"),
marginLeft: this.originalElement.css("marginLeft")
};
this.element.css(margins);
this.originalElement.css("margin", 0);
this.originalResizeStyle=this.originalElement.css("resize");
this.originalElement.css("resize", "none");
this._proportionallyResizeElements.push(this.originalElement.css({
position: "static",
zoom: 1,
display: "block"
}));
this.originalElement.css(margins);
this._proportionallyResize();
}
this._setupHandles();
if(o.autoHide){
$(this.element)
.on("mouseenter", function(){
if(o.disabled){
return;
}
that._removeClass("ui-resizable-autohide");
that._handles.show();
})
.on("mouseleave", function(){
if(o.disabled){
return;
}
if(!that.resizing){
that._addClass("ui-resizable-autohide");
that._handles.hide();
}});
}
this._mouseInit();
},
_destroy: function(){
this._mouseDestroy();
var wrapper,
_destroy=function(exp){
$(exp)
.removeData("resizable")
.removeData("ui-resizable")
.off(".resizable")
.find(".ui-resizable-handle")
.remove();
};
if(this.elementIsWrapper){
_destroy(this.element);
wrapper=this.element;
this.originalElement.css({
position: wrapper.css("position"),
width: wrapper.outerWidth(),
height: wrapper.outerHeight(),
top: wrapper.css("top"),
left: wrapper.css("left")
}).insertAfter(wrapper);
wrapper.remove();
}
this.originalElement.css("resize", this.originalResizeStyle);
_destroy(this.originalElement);
return this;
},
_setOption: function(key, value){
this._super(key, value);
switch(key){
case "handles":
this._removeHandles();
this._setupHandles();
break;
default:
break;
}},
_setupHandles: function(){
var o=this.options, handle, i, n, hname, axis, that=this;
this.handles=o.handles ||
(!$(".ui-resizable-handle", this.element).length ?
"e,s,se":{
n: ".ui-resizable-n",
e: ".ui-resizable-e",
s: ".ui-resizable-s",
w: ".ui-resizable-w",
se: ".ui-resizable-se",
sw: ".ui-resizable-sw",
ne: ".ui-resizable-ne",
nw: ".ui-resizable-nw"
});
this._handles=$();
if(this.handles.constructor===String){
if(this.handles==="all"){
this.handles="n,e,s,w,se,sw,ne,nw";
}
n=this.handles.split(",");
this.handles={};
for(i=0; i < n.length; i++){
handle=$.trim(n[ i ]);
hname="ui-resizable-" + handle;
axis=$("<div>");
this._addClass(axis, "ui-resizable-handle " + hname);
axis.css({ zIndex: o.zIndex });
this.handles[ handle ]=".ui-resizable-" + handle;
this.element.append(axis);
}}
this._renderAxis=function(target){
var i, axis, padPos, padWrapper;
target=target||this.element;
for(i in this.handles){
if(this.handles[ i ].constructor===String){
this.handles[ i ]=this.element.children(this.handles[ i ]).first().show();
}else if(this.handles[ i ].jquery||this.handles[ i ].nodeType){
this.handles[ i ]=$(this.handles[ i ]);
this._on(this.handles[ i ], { "mousedown": that._mouseDown });
}
if(this.elementIsWrapper &&
this.originalElement[ 0 ]
.nodeName
.match(/^(textarea|input|select|button)$/i)){
axis=$(this.handles[ i ], this.element);
padWrapper=/sw|ne|nw|se|n|s/.test(i) ?
axis.outerHeight() :
axis.outerWidth();
padPos=[ "padding",
/ne|nw|n/.test(i) ? "Top" :
/se|sw|s/.test(i) ? "Bottom" :
/^e$/.test(i) ? "Right":"Left" ].join("");
target.css(padPos, padWrapper);
this._proportionallyResize();
}
this._handles=this._handles.add(this.handles[ i ]);
}};
this._renderAxis(this.element);
this._handles=this._handles.add(this.element.find(".ui-resizable-handle"));
this._handles.disableSelection();
this._handles.on("mouseover", function(){
if(!that.resizing){
if(this.className){
axis=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
}
that.axis=axis&&axis[ 1 ] ? axis[ 1 ]:"se";
}});
if(o.autoHide){
this._handles.hide();
this._addClass("ui-resizable-autohide");
}},
_removeHandles: function(){
this._handles.remove();
},
_mouseCapture: function(event){
var i, handle,
capture=false;
for(i in this.handles){
handle=$(this.handles[ i ])[ 0 ];
if(handle===event.target||$.contains(handle, event.target)){
capture=true;
}}
return !this.options.disabled&&capture;
},
_mouseStart: function(event){
var curleft, curtop, cursor,
o=this.options,
el=this.element;
this.resizing=true;
this._renderProxy();
curleft=this._num(this.helper.css("left"));
curtop=this._num(this.helper.css("top"));
if(o.containment){
curleft +=$(o.containment).scrollLeft()||0;
curtop +=$(o.containment).scrollTop()||0;
}
this.offset=this.helper.offset();
this.position={ left: curleft, top: curtop };
this.size=this._helper ? {
width: this.helper.width(),
height: this.helper.height()
}:{
width: el.width(),
height: el.height()
};
this.originalSize=this._helper ? {
width: el.outerWidth(),
height: el.outerHeight()
}:{
width: el.width(),
height: el.height()
};
this.sizeDiff={
width: el.outerWidth() - el.width(),
height: el.outerHeight() - el.height()
};
this.originalPosition={ left: curleft, top: curtop };
this.originalMousePosition={ left: event.pageX, top: event.pageY };
this.aspectRatio=(typeof o.aspectRatio==="number") ?
o.aspectRatio :
(( this.originalSize.width / this.originalSize.height)||1);
cursor=$(".ui-resizable-" + this.axis).css("cursor");
$("body").css("cursor", cursor==="auto" ? this.axis + "-resize":cursor);
this._addClass("ui-resizable-resizing");
this._propagate("start", event);
return true;
},
_mouseDrag: function(event){
var data, props,
smp=this.originalMousePosition,
a=this.axis,
dx=(event.pageX - smp.left)||0,
dy=(event.pageY - smp.top)||0,
trigger=this._change[ a ];
this._updatePrevProperties();
if(!trigger){
return false;
}
data=trigger.apply(this, [ event, dx, dy ]);
this._updateVirtualBoundaries(event.shiftKey);
if(this._aspectRatio||event.shiftKey){
data=this._updateRatio(data, event);
}
data=this._respectSize(data, event);
this._updateCache(data);
this._propagate("resize", event);
props=this._applyChanges();
if(!this._helper&&this._proportionallyResizeElements.length){
this._proportionallyResize();
}
if(!$.isEmptyObject(props)){
this._updatePrevProperties();
this._trigger("resize", event, this.ui());
this._applyChanges();
}
return false;
},
_mouseStop: function(event){
this.resizing=false;
var pr, ista, soffseth, soffsetw, s, left, top,
o=this.options, that=this;
if(this._helper){
pr=this._proportionallyResizeElements;
ista=pr.length&&(/textarea/i).test(pr[ 0 ].nodeName);
soffseth=ista&&this._hasScroll(pr[ 0 ], "left") ? 0:that.sizeDiff.height;
soffsetw=ista ? 0:that.sizeDiff.width;
s={
width:(that.helper.width()  - soffsetw),
height:(that.helper.height() - soffseth)
};
left=(parseFloat(that.element.css("left")) +
(that.position.left - that.originalPosition.left))||null;
top=(parseFloat(that.element.css("top")) +
(that.position.top - that.originalPosition.top))||null;
if(!o.animate){
this.element.css($.extend(s, { top: top, left: left }));
}
that.helper.height(that.size.height);
that.helper.width(that.size.width);
if(this._helper&&!o.animate){
this._proportionallyResize();
}}
$("body").css("cursor", "auto");
this._removeClass("ui-resizable-resizing");
this._propagate("stop", event);
if(this._helper){
this.helper.remove();
}
return false;
},
_updatePrevProperties: function(){
this.prevPosition={
top: this.position.top,
left: this.position.left
};
this.prevSize={
width: this.size.width,
height: this.size.height
};},
_applyChanges: function(){
var props={};
if(this.position.top!==this.prevPosition.top){
props.top=this.position.top + "px";
}
if(this.position.left!==this.prevPosition.left){
props.left=this.position.left + "px";
}
if(this.size.width!==this.prevSize.width){
props.width=this.size.width + "px";
}
if(this.size.height!==this.prevSize.height){
props.height=this.size.height + "px";
}
this.helper.css(props);
return props;
},
_updateVirtualBoundaries: function(forceAspectRatio){
var pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b,
o=this.options;
b={
minWidth: this._isNumber(o.minWidth) ? o.minWidth:0,
maxWidth: this._isNumber(o.maxWidth) ? o.maxWidth:Infinity,
minHeight: this._isNumber(o.minHeight) ? o.minHeight:0,
maxHeight: this._isNumber(o.maxHeight) ? o.maxHeight:Infinity
};
if(this._aspectRatio||forceAspectRatio){
pMinWidth=b.minHeight * this.aspectRatio;
pMinHeight=b.minWidth / this.aspectRatio;
pMaxWidth=b.maxHeight * this.aspectRatio;
pMaxHeight=b.maxWidth / this.aspectRatio;
if(pMinWidth > b.minWidth){
b.minWidth=pMinWidth;
}
if(pMinHeight > b.minHeight){
b.minHeight=pMinHeight;
}
if(pMaxWidth < b.maxWidth){
b.maxWidth=pMaxWidth;
}
if(pMaxHeight < b.maxHeight){
b.maxHeight=pMaxHeight;
}}
this._vBoundaries=b;
},
_updateCache: function(data){
this.offset=this.helper.offset();
if(this._isNumber(data.left)){
this.position.left=data.left;
}
if(this._isNumber(data.top)){
this.position.top=data.top;
}
if(this._isNumber(data.height)){
this.size.height=data.height;
}
if(this._isNumber(data.width)){
this.size.width=data.width;
}},
_updateRatio: function(data){
var cpos=this.position,
csize=this.size,
a=this.axis;
if(this._isNumber(data.height)){
data.width=(data.height * this.aspectRatio);
}else if(this._isNumber(data.width)){
data.height=(data.width / this.aspectRatio);
}
if(a==="sw"){
data.left=cpos.left +(csize.width - data.width);
data.top=null;
}
if(a==="nw"){
data.top=cpos.top +(csize.height - data.height);
data.left=cpos.left +(csize.width - data.width);
}
return data;
},
_respectSize: function(data){
var o=this._vBoundaries,
a=this.axis,
ismaxw=this._isNumber(data.width)&&o.maxWidth&&(o.maxWidth < data.width),
ismaxh=this._isNumber(data.height)&&o.maxHeight&&(o.maxHeight < data.height),
isminw=this._isNumber(data.width)&&o.minWidth&&(o.minWidth > data.width),
isminh=this._isNumber(data.height)&&o.minHeight&&(o.minHeight > data.height),
dw=this.originalPosition.left + this.originalSize.width,
dh=this.originalPosition.top + this.originalSize.height,
cw=/sw|nw|w/.test(a), ch=/nw|ne|n/.test(a);
if(isminw){
data.width=o.minWidth;
}
if(isminh){
data.height=o.minHeight;
}
if(ismaxw){
data.width=o.maxWidth;
}
if(ismaxh){
data.height=o.maxHeight;
}
if(isminw&&cw){
data.left=dw - o.minWidth;
}
if(ismaxw&&cw){
data.left=dw - o.maxWidth;
}
if(isminh&&ch){
data.top=dh - o.minHeight;
}
if(ismaxh&&ch){
data.top=dh - o.maxHeight;
}
if(!data.width&&!data.height&&!data.left&&data.top){
data.top=null;
}else if(!data.width&&!data.height&&!data.top&&data.left){
data.left=null;
}
return data;
},
_getPaddingPlusBorderDimensions: function(element){
var i=0,
widths=[],
borders=[
element.css("borderTopWidth"),
element.css("borderRightWidth"),
element.css("borderBottomWidth"),
element.css("borderLeftWidth")
],
paddings=[
element.css("paddingTop"),
element.css("paddingRight"),
element.css("paddingBottom"),
element.css("paddingLeft")
];
for(; i < 4; i++){
widths[ i ]=(parseFloat(borders[ i ])||0);
widths[ i ] +=(parseFloat(paddings[ i ])||0);
}
return {
height: widths[ 0 ] + widths[ 2 ],
width: widths[ 1 ] + widths[ 3 ]
};},
_proportionallyResize: function(){
if(!this._proportionallyResizeElements.length){
return;
}
var prel,
i=0,
element=this.helper||this.element;
for(; i < this._proportionallyResizeElements.length; i++){
prel=this._proportionallyResizeElements[ i ];
if(!this.outerDimensions){
this.outerDimensions=this._getPaddingPlusBorderDimensions(prel);
}
prel.css({
height:(element.height() - this.outerDimensions.height)||0,
width:(element.width() - this.outerDimensions.width)||0
});
}},
_renderProxy: function(){
var el=this.element, o=this.options;
this.elementOffset=el.offset();
if(this._helper){
this.helper=this.helper||$("<div style='overflow:hidden;'></div>");
this._addClass(this.helper, this._helper);
this.helper.css({
width: this.element.outerWidth(),
height: this.element.outerHeight(),
position: "absolute",
left: this.elementOffset.left + "px",
top: this.elementOffset.top + "px",
zIndex: ++o.zIndex
});
this.helper
.appendTo("body")
.disableSelection();
}else{
this.helper=this.element;
}},
_change: {
e: function(event, dx){
return { width: this.originalSize.width + dx };},
w: function(event, dx){
var cs=this.originalSize, sp=this.originalPosition;
return { left: sp.left + dx, width: cs.width - dx };},
n: function(event, dx, dy){
var cs=this.originalSize, sp=this.originalPosition;
return { top: sp.top + dy, height: cs.height - dy };},
s: function(event, dx, dy){
return { height: this.originalSize.height + dy };},
se: function(event, dx, dy){
return $.extend(this._change.s.apply(this, arguments),
this._change.e.apply(this, [ event, dx, dy ]));
},
sw: function(event, dx, dy){
return $.extend(this._change.s.apply(this, arguments),
this._change.w.apply(this, [ event, dx, dy ]));
},
ne: function(event, dx, dy){
return $.extend(this._change.n.apply(this, arguments),
this._change.e.apply(this, [ event, dx, dy ]));
},
nw: function(event, dx, dy){
return $.extend(this._change.n.apply(this, arguments),
this._change.w.apply(this, [ event, dx, dy ]));
}},
_propagate: function(n, event){
$.ui.plugin.call(this, n, [ event, this.ui() ]);
(n!=="resize"&&this._trigger(n, event, this.ui()));
},
plugins: {},
ui: function(){
return {
originalElement: this.originalElement,
element: this.element,
helper: this.helper,
position: this.position,
size: this.size,
originalSize: this.originalSize,
originalPosition: this.originalPosition
};}});
$.ui.plugin.add("resizable", "animate", {
stop: function(event){
var that=$(this).resizable("instance"),
o=that.options,
pr=that._proportionallyResizeElements,
ista=pr.length&&(/textarea/i).test(pr[ 0 ].nodeName),
soffseth=ista&&that._hasScroll(pr[ 0 ], "left") ? 0:that.sizeDiff.height,
soffsetw=ista ? 0:that.sizeDiff.width,
style={
width:(that.size.width - soffsetw),
height:(that.size.height - soffseth)
},
left=(parseFloat(that.element.css("left")) +
(that.position.left - that.originalPosition.left))||null,
top=(parseFloat(that.element.css("top")) +
(that.position.top - that.originalPosition.top))||null;
that.element.animate($.extend(style, top&&left ? { top: top, left: left }:{}), {
duration: o.animateDuration,
easing: o.animateEasing,
step: function(){
var data={
width: parseFloat(that.element.css("width")),
height: parseFloat(that.element.css("height")),
top: parseFloat(that.element.css("top")),
left: parseFloat(that.element.css("left"))
};
if(pr&&pr.length){
$(pr[ 0 ]).css({ width: data.width, height: data.height });
}
that._updateCache(data);
that._propagate("resize", event);
}}
);
}});
$.ui.plugin.add("resizable", "containment", {
start: function(){
var element, p, co, ch, cw, width, height,
that=$(this).resizable("instance"),
o=that.options,
el=that.element,
oc=o.containment,
ce=(oc instanceof $) ?
oc.get(0) :
(/parent/.test(oc)) ? el.parent().get(0):oc;
if(!ce){
return;
}
that.containerElement=$(ce);
if(/document/.test(oc)||oc===document){
that.containerOffset={
left: 0,
top: 0
};
that.containerPosition={
left: 0,
top: 0
};
that.parentData={
element: $(document),
left: 0,
top: 0,
width: $(document).width(),
height: $(document).height()||document.body.parentNode.scrollHeight
};}else{
element=$(ce);
p=[];
$([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name){
p[ i ]=that._num(element.css("padding" + name));
});
that.containerOffset=element.offset();
that.containerPosition=element.position();
that.containerSize={
height:(element.innerHeight() - p[ 3 ]),
width:(element.innerWidth() - p[ 1 ])
};
co=that.containerOffset;
ch=that.containerSize.height;
cw=that.containerSize.width;
width=(that._hasScroll(ce, "left") ? ce.scrollWidth:cw);
height=(that._hasScroll(ce) ? ce.scrollHeight:ch) ;
that.parentData={
element: ce,
left: co.left,
top: co.top,
width: width,
height: height
};}},
resize: function(event){
var woset, hoset, isParent, isOffsetRelative,
that=$(this).resizable("instance"),
o=that.options,
co=that.containerOffset,
cp=that.position,
pRatio=that._aspectRatio||event.shiftKey,
cop={
top: 0,
left: 0
},
ce=that.containerElement,
continueResize=true;
if(ce[ 0 ]!==document&&(/static/).test(ce.css("position"))){
cop=co;
}
if(cp.left <(that._helper ? co.left:0)){
that.size.width=that.size.width +
(that._helper ?
(that.position.left - co.left) :
(that.position.left - cop.left));
if(pRatio){
that.size.height=that.size.width / that.aspectRatio;
continueResize=false;
}
that.position.left=o.helper ? co.left:0;
}
if(cp.top <(that._helper ? co.top:0)){
that.size.height=that.size.height +
(that._helper ?
(that.position.top - co.top) :
that.position.top);
if(pRatio){
that.size.width=that.size.height * that.aspectRatio;
continueResize=false;
}
that.position.top=that._helper ? co.top:0;
}
isParent=that.containerElement.get(0)===that.element.parent().get(0);
isOffsetRelative=/relative|absolute/.test(that.containerElement.css("position"));
if(isParent&&isOffsetRelative){
that.offset.left=that.parentData.left + that.position.left;
that.offset.top=that.parentData.top + that.position.top;
}else{
that.offset.left=that.element.offset().left;
that.offset.top=that.element.offset().top;
}
woset=Math.abs(that.sizeDiff.width +
(that._helper ?
that.offset.left - cop.left :
(that.offset.left - co.left)));
hoset=Math.abs(that.sizeDiff.height +
(that._helper ?
that.offset.top - cop.top :
(that.offset.top - co.top)));
if(woset + that.size.width >=that.parentData.width){
that.size.width=that.parentData.width - woset;
if(pRatio){
that.size.height=that.size.width / that.aspectRatio;
continueResize=false;
}}
if(hoset + that.size.height >=that.parentData.height){
that.size.height=that.parentData.height - hoset;
if(pRatio){
that.size.width=that.size.height * that.aspectRatio;
continueResize=false;
}}
if(!continueResize){
that.position.left=that.prevPosition.left;
that.position.top=that.prevPosition.top;
that.size.width=that.prevSize.width;
that.size.height=that.prevSize.height;
}},
stop: function(){
var that=$(this).resizable("instance"),
o=that.options,
co=that.containerOffset,
cop=that.containerPosition,
ce=that.containerElement,
helper=$(that.helper),
ho=helper.offset(),
w=helper.outerWidth() - that.sizeDiff.width,
h=helper.outerHeight() - that.sizeDiff.height;
if(that._helper&&!o.animate&&(/relative/).test(ce.css("position"))){
$(this).css({
left: ho.left - cop.left - co.left,
width: w,
height: h
});
}
if(that._helper&&!o.animate&&(/static/).test(ce.css("position"))){
$(this).css({
left: ho.left - cop.left - co.left,
width: w,
height: h
});
}}
});
$.ui.plugin.add("resizable", "alsoResize", {
start: function(){
var that=$(this).resizable("instance"),
o=that.options;
$(o.alsoResize).each(function(){
var el=$(this);
el.data("ui-resizable-alsoresize", {
width: parseFloat(el.width()), height: parseFloat(el.height()),
left: parseFloat(el.css("left")), top: parseFloat(el.css("top"))
});
});
},
resize: function(event, ui){
var that=$(this).resizable("instance"),
o=that.options,
os=that.originalSize,
op=that.originalPosition,
delta={
height:(that.size.height - os.height)||0,
width:(that.size.width - os.width)||0,
top:(that.position.top - op.top)||0,
left:(that.position.left - op.left)||0
};
$(o.alsoResize).each(function(){
var el=$(this), start=$(this).data("ui-resizable-alsoresize"), style={},
css=el.parents(ui.originalElement[ 0 ]).length ?
[ "width", "height" ] :
[ "width", "height", "top", "left" ];
$.each(css, function(i, prop){
var sum=(start[ prop ]||0) +(delta[ prop ]||0);
if(sum&&sum >=0){
style[ prop ]=sum||null;
}});
el.css(style);
});
},
stop: function(){
$(this).removeData("ui-resizable-alsoresize");
}});
$.ui.plugin.add("resizable", "ghost", {
start: function(){
var that=$(this).resizable("instance"), cs=that.size;
that.ghost=that.originalElement.clone();
that.ghost.css({
opacity: 0.25,
display: "block",
position: "relative",
height: cs.height,
width: cs.width,
margin: 0,
left: 0,
top: 0
});
that._addClass(that.ghost, "ui-resizable-ghost");
if($.uiBackCompat!==false&&typeof that.options.ghost==="string"){
that.ghost.addClass(this.options.ghost);
}
that.ghost.appendTo(that.helper);
},
resize: function(){
var that=$(this).resizable("instance");
if(that.ghost){
that.ghost.css({
position: "relative",
height: that.size.height,
width: that.size.width
});
}},
stop: function(){
var that=$(this).resizable("instance");
if(that.ghost&&that.helper){
that.helper.get(0).removeChild(that.ghost.get(0));
}}
});
$.ui.plugin.add("resizable", "grid", {
resize: function(){
var outerDimensions,
that=$(this).resizable("instance"),
o=that.options,
cs=that.size,
os=that.originalSize,
op=that.originalPosition,
a=that.axis,
grid=typeof o.grid==="number" ? [ o.grid, o.grid ]:o.grid,
gridX=(grid[ 0 ]||1),
gridY=(grid[ 1 ]||1),
ox=Math.round(( cs.width - os.width) / gridX) * gridX,
oy=Math.round(( cs.height - os.height) / gridY) * gridY,
newWidth=os.width + ox,
newHeight=os.height + oy,
isMaxWidth=o.maxWidth&&(o.maxWidth < newWidth),
isMaxHeight=o.maxHeight&&(o.maxHeight < newHeight),
isMinWidth=o.minWidth&&(o.minWidth > newWidth),
isMinHeight=o.minHeight&&(o.minHeight > newHeight);
o.grid=grid;
if(isMinWidth){
newWidth +=gridX;
}
if(isMinHeight){
newHeight +=gridY;
}
if(isMaxWidth){
newWidth -=gridX;
}
if(isMaxHeight){
newHeight -=gridY;
}
if(/^(se|s|e)$/.test(a)){
that.size.width=newWidth;
that.size.height=newHeight;
}else if(/^(ne)$/.test(a)){
that.size.width=newWidth;
that.size.height=newHeight;
that.position.top=op.top - oy;
}else if(/^(sw)$/.test(a)){
that.size.width=newWidth;
that.size.height=newHeight;
that.position.left=op.left - ox;
}else{
if(newHeight - gridY <=0||newWidth - gridX <=0){
outerDimensions=that._getPaddingPlusBorderDimensions(this);
}
if(newHeight - gridY > 0){
that.size.height=newHeight;
that.position.top=op.top - oy;
}else{
newHeight=gridY - outerDimensions.height;
that.size.height=newHeight;
that.position.top=op.top + os.height - newHeight;
}
if(newWidth - gridX > 0){
that.size.width=newWidth;
that.position.left=op.left - ox;
}else{
newWidth=gridX - outerDimensions.width;
that.size.width=newWidth;
that.position.left=op.left + os.width - newWidth;
}}
}});
var widgetsResizable=$.ui.resizable;
$.widget("ui.dialog", {
version: "1.12.1",
options: {
appendTo: "body",
autoOpen: true,
buttons: [],
classes: {
"ui-dialog": "ui-corner-all",
"ui-dialog-titlebar": "ui-corner-all"
},
closeOnEscape: true,
closeText: "Close",
draggable: true,
hide: null,
height: "auto",
maxHeight: null,
maxWidth: null,
minHeight: 150,
minWidth: 150,
modal: false,
position: {
my: "center",
at: "center",
of: window,
collision: "fit",
using: function(pos){
var topOffset=$(this).css(pos).offset().top;
if(topOffset < 0){
$(this).css("top", pos.top - topOffset);
}}
},
resizable: true,
show: null,
title: null,
width: 300,
beforeClose: null,
close: null,
drag: null,
dragStart: null,
dragStop: null,
focus: null,
open: null,
resize: null,
resizeStart: null,
resizeStop: null
},
sizeRelatedOptions: {
buttons: true,
height: true,
maxHeight: true,
maxWidth: true,
minHeight: true,
minWidth: true,
width: true
},
resizableRelatedOptions: {
maxHeight: true,
maxWidth: true,
minHeight: true,
minWidth: true
},
_create: function(){
this.originalCss={
display: this.element[ 0 ].style.display,
width: this.element[ 0 ].style.width,
minHeight: this.element[ 0 ].style.minHeight,
maxHeight: this.element[ 0 ].style.maxHeight,
height: this.element[ 0 ].style.height
};
this.originalPosition={
parent: this.element.parent(),
index: this.element.parent().children().index(this.element)
};
this.originalTitle=this.element.attr("title");
if(this.options.title==null&&this.originalTitle!=null){
this.options.title=this.originalTitle;
}
if(this.options.disabled){
this.options.disabled=false;
}
this._createWrapper();
this.element
.show()
.removeAttr("title")
.appendTo(this.uiDialog);
this._addClass("ui-dialog-content", "ui-widget-content");
this._createTitlebar();
this._createButtonPane();
if(this.options.draggable&&$.fn.draggable){
this._makeDraggable();
}
if(this.options.resizable&&$.fn.resizable){
this._makeResizable();
}
this._isOpen=false;
this._trackFocus();
},
_init: function(){
if(this.options.autoOpen){
this.open();
}},
_appendTo: function(){
var element=this.options.appendTo;
if(element&&(element.jquery||element.nodeType)){
return $(element);
}
return this.document.find(element||"body").eq(0);
},
_destroy: function(){
var next,
originalPosition=this.originalPosition;
this._untrackInstance();
this._destroyOverlay();
this.element
.removeUniqueId()
.css(this.originalCss)
.detach();
this.uiDialog.remove();
if(this.originalTitle){
this.element.attr("title", this.originalTitle);
}
next=originalPosition.parent.children().eq(originalPosition.index);
if(next.length&&next[ 0 ]!==this.element[ 0 ]){
next.before(this.element);
}else{
originalPosition.parent.append(this.element);
}},
widget: function(){
return this.uiDialog;
},
disable: $.noop,
enable: $.noop,
close: function(event){
var that=this;
if(!this._isOpen||this._trigger("beforeClose", event)===false){
return;
}
this._isOpen=false;
this._focusedElement=null;
this._destroyOverlay();
this._untrackInstance();
if(!this.opener.filter(":focusable").trigger("focus").length){
$.ui.safeBlur($.ui.safeActiveElement(this.document[ 0 ]));
}
this._hide(this.uiDialog, this.options.hide, function(){
that._trigger("close", event);
});
},
isOpen: function(){
return this._isOpen;
},
moveToTop: function(){
this._moveToTop();
},
_moveToTop: function(event, silent){
var moved=false,
zIndices=this.uiDialog.siblings(".ui-front:visible").map(function(){
return +$(this).css("z-index");
}).get(),
zIndexMax=Math.max.apply(null, zIndices);
if(zIndexMax >=+this.uiDialog.css("z-index")){
this.uiDialog.css("z-index", zIndexMax + 1);
moved=true;
}
if(moved&&!silent){
this._trigger("focus", event);
}
return moved;
},
open: function(){
var that=this;
if(this._isOpen){
if(this._moveToTop()){
this._focusTabbable();
}
return;
}
this._isOpen=true;
this.opener=$($.ui.safeActiveElement(this.document[ 0 ]));
this._size();
this._position();
this._createOverlay();
this._moveToTop(null, true);
if(this.overlay){
this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
}
this._show(this.uiDialog, this.options.show, function(){
that._focusTabbable();
that._trigger("focus");
});
this._makeFocusTarget();
this._trigger("open");
},
_focusTabbable: function(){
var hasFocus=this._focusedElement;
if(!hasFocus){
hasFocus=this.element.find("[autofocus]");
}
if(!hasFocus.length){
hasFocus=this.element.find(":tabbable");
}
if(!hasFocus.length){
hasFocus=this.uiDialogButtonPane.find(":tabbable");
}
if(!hasFocus.length){
hasFocus=this.uiDialogTitlebarClose.filter(":tabbable");
}
if(!hasFocus.length){
hasFocus=this.uiDialog;
}
hasFocus.eq(0).trigger("focus");
},
_keepFocus: function(event){
function checkFocus(){
var activeElement=$.ui.safeActiveElement(this.document[ 0 ]),
isActive=this.uiDialog[ 0 ]===activeElement ||
$.contains(this.uiDialog[ 0 ], activeElement);
if(!isActive){
this._focusTabbable();
}}
event.preventDefault();
checkFocus.call(this);
this._delay(checkFocus);
},
_createWrapper: function(){
this.uiDialog=$("<div>")
.hide()
.attr({
tabIndex: -1,
role: "dialog"
})
.appendTo(this._appendTo());
this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front");
this._on(this.uiDialog, {
keydown: function(event){
if(this.options.closeOnEscape&&!event.isDefaultPrevented()&&event.keyCode &&
event.keyCode===$.ui.keyCode.ESCAPE){
event.preventDefault();
this.close(event);
return;
}
if(event.keyCode!==$.ui.keyCode.TAB||event.isDefaultPrevented()){
return;
}
var tabbables=this.uiDialog.find(":tabbable"),
first=tabbables.filter(":first"),
last=tabbables.filter(":last");
if(( event.target===last[ 0 ]||event.target===this.uiDialog[ 0 ]) &&
!event.shiftKey){
this._delay(function(){
first.trigger("focus");
});
event.preventDefault();
}else if(( event.target===first[ 0 ] ||
event.target===this.uiDialog[ 0 ])&&event.shiftKey){
this._delay(function(){
last.trigger("focus");
});
event.preventDefault();
}},
mousedown: function(event){
if(this._moveToTop(event)){
this._focusTabbable();
}}
});
if(!this.element.find("[aria-describedby]").length){
this.uiDialog.attr({
"aria-describedby": this.element.uniqueId().attr("id")
});
}},
_createTitlebar: function(){
var uiDialogTitle;
this.uiDialogTitlebar=$("<div>");
this._addClass(this.uiDialogTitlebar,
"ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix");
this._on(this.uiDialogTitlebar, {
mousedown: function(event){
if(!$(event.target).closest(".ui-dialog-titlebar-close")){
this.uiDialog.trigger("focus");
}}
});
this.uiDialogTitlebarClose=$("<button type='button'></button>")
.button({
label: $("<a>").text(this.options.closeText).html(),
icon: "ui-icon-closethick",
showLabel: false
})
.appendTo(this.uiDialogTitlebar);
this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close");
this._on(this.uiDialogTitlebarClose, {
click: function(event){
event.preventDefault();
this.close(event);
}});
uiDialogTitle=$("<span>").uniqueId().prependTo(this.uiDialogTitlebar);
this._addClass(uiDialogTitle, "ui-dialog-title");
this._title(uiDialogTitle);
this.uiDialogTitlebar.prependTo(this.uiDialog);
this.uiDialog.attr({
"aria-labelledby": uiDialogTitle.attr("id")
});
},
_title: function(title){
if(this.options.title){
title.text(this.options.title);
}else{
title.html("&#160;");
}},
_createButtonPane: function(){
this.uiDialogButtonPane=$("<div>");
this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane",
"ui-widget-content ui-helper-clearfix");
this.uiButtonSet=$("<div>")
.appendTo(this.uiDialogButtonPane);
this._addClass(this.uiButtonSet, "ui-dialog-buttonset");
this._createButtons();
},
_createButtons: function(){
var that=this,
buttons=this.options.buttons;
this.uiDialogButtonPane.remove();
this.uiButtonSet.empty();
if($.isEmptyObject(buttons)||($.isArray(buttons)&&!buttons.length)){
this._removeClass(this.uiDialog, "ui-dialog-buttons");
return;
}
$.each(buttons, function(name, props){
var click, buttonOptions;
props=$.isFunction(props) ?
{ click: props, text: name } :
props;
props=$.extend({ type: "button" }, props);
click=props.click;
buttonOptions={
icon: props.icon,
iconPosition: props.iconPosition,
showLabel: props.showLabel,
icons: props.icons,
text: props.text
};
delete props.click;
delete props.icon;
delete props.iconPosition;
delete props.showLabel;
delete props.icons;
if(typeof props.text==="boolean"){
delete props.text;
}
$("<button></button>", props)
.button(buttonOptions)
.appendTo(that.uiButtonSet)
.on("click", function(){
click.apply(that.element[ 0 ], arguments);
});
});
this._addClass(this.uiDialog, "ui-dialog-buttons");
this.uiDialogButtonPane.appendTo(this.uiDialog);
},
_makeDraggable: function(){
var that=this,
options=this.options;
function filteredUi(ui){
return {
position: ui.position,
offset: ui.offset
};}
this.uiDialog.draggable({
cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
handle: ".ui-dialog-titlebar",
containment: "document",
start: function(event, ui){
that._addClass($(this), "ui-dialog-dragging");
that._blockFrames();
that._trigger("dragStart", event, filteredUi(ui));
},
drag: function(event, ui){
that._trigger("drag", event, filteredUi(ui));
},
stop: function(event, ui){
var left=ui.offset.left - that.document.scrollLeft(),
top=ui.offset.top - that.document.scrollTop();
options.position={
my: "left top",
at: "left" +(left >=0 ? "+":"") + left + " " +
"top" +(top >=0 ? "+":"") + top,
of: that.window
};
that._removeClass($(this), "ui-dialog-dragging");
that._unblockFrames();
that._trigger("dragStop", event, filteredUi(ui));
}});
},
_makeResizable: function(){
var that=this,
options=this.options,
handles=options.resizable,
position=this.uiDialog.css("position"),
resizeHandles=typeof handles==="string" ?
handles :
"n,e,s,w,se,sw,ne,nw";
function filteredUi(ui){
return {
originalPosition: ui.originalPosition,
originalSize: ui.originalSize,
position: ui.position,
size: ui.size
};}
this.uiDialog.resizable({
cancel: ".ui-dialog-content",
containment: "document",
alsoResize: this.element,
maxWidth: options.maxWidth,
maxHeight: options.maxHeight,
minWidth: options.minWidth,
minHeight: this._minHeight(),
handles: resizeHandles,
start: function(event, ui){
that._addClass($(this), "ui-dialog-resizing");
that._blockFrames();
that._trigger("resizeStart", event, filteredUi(ui));
},
resize: function(event, ui){
that._trigger("resize", event, filteredUi(ui));
},
stop: function(event, ui){
var offset=that.uiDialog.offset(),
left=offset.left - that.document.scrollLeft(),
top=offset.top - that.document.scrollTop();
options.height=that.uiDialog.height();
options.width=that.uiDialog.width();
options.position={
my: "left top",
at: "left" +(left >=0 ? "+":"") + left + " " +
"top" +(top >=0 ? "+":"") + top,
of: that.window
};
that._removeClass($(this), "ui-dialog-resizing");
that._unblockFrames();
that._trigger("resizeStop", event, filteredUi(ui));
}})
.css("position", position);
},
_trackFocus: function(){
this._on(this.widget(), {
focusin: function(event){
this._makeFocusTarget();
this._focusedElement=$(event.target);
}});
},
_makeFocusTarget: function(){
this._untrackInstance();
this._trackingInstances().unshift(this);
},
_untrackInstance: function(){
var instances=this._trackingInstances(),
exists=$.inArray(this, instances);
if(exists!==-1){
instances.splice(exists, 1);
}},
_trackingInstances: function(){
var instances=this.document.data("ui-dialog-instances");
if(!instances){
instances=[];
this.document.data("ui-dialog-instances", instances);
}
return instances;
},
_minHeight: function(){
var options=this.options;
return options.height==="auto" ?
options.minHeight :
Math.min(options.minHeight, options.height);
},
_position: function(){
var isVisible=this.uiDialog.is(":visible");
if(!isVisible){
this.uiDialog.show();
}
this.uiDialog.position(this.options.position);
if(!isVisible){
this.uiDialog.hide();
}},
_setOptions: function(options){
var that=this,
resize=false,
resizableOptions={};
$.each(options, function(key, value){
that._setOption(key, value);
if(key in that.sizeRelatedOptions){
resize=true;
}
if(key in that.resizableRelatedOptions){
resizableOptions[ key ]=value;
}});
if(resize){
this._size();
this._position();
}
if(this.uiDialog.is(":data(ui-resizable)")){
this.uiDialog.resizable("option", resizableOptions);
}},
_setOption: function(key, value){
var isDraggable, isResizable,
uiDialog=this.uiDialog;
if(key==="disabled"){
return;
}
this._super(key, value);
if(key==="appendTo"){
this.uiDialog.appendTo(this._appendTo());
}
if(key==="buttons"){
this._createButtons();
}
if(key==="closeText"){
this.uiDialogTitlebarClose.button({
label: $("<a>").text("" + this.options.closeText).html()
});
}
if(key==="draggable"){
isDraggable=uiDialog.is(":data(ui-draggable)");
if(isDraggable&&!value){
uiDialog.draggable("destroy");
}
if(!isDraggable&&value){
this._makeDraggable();
}}
if(key==="position"){
this._position();
}
if(key==="resizable"){
isResizable=uiDialog.is(":data(ui-resizable)");
if(isResizable&&!value){
uiDialog.resizable("destroy");
}
if(isResizable&&typeof value==="string"){
uiDialog.resizable("option", "handles", value);
}
if(!isResizable&&value!==false){
this._makeResizable();
}}
if(key==="title"){
this._title(this.uiDialogTitlebar.find(".ui-dialog-title"));
}},
_size: function(){
var nonContentHeight, minContentHeight, maxContentHeight,
options=this.options;
this.element.show().css({
width: "auto",
minHeight: 0,
maxHeight: "none",
height: 0
});
if(options.minWidth > options.width){
options.width=options.minWidth;
}
nonContentHeight=this.uiDialog.css({
height: "auto",
width: options.width
})
.outerHeight();
minContentHeight=Math.max(0, options.minHeight - nonContentHeight);
maxContentHeight=typeof options.maxHeight==="number" ?
Math.max(0, options.maxHeight - nonContentHeight) :
"none";
if(options.height==="auto"){
this.element.css({
minHeight: minContentHeight,
maxHeight: maxContentHeight,
height: "auto"
});
}else{
this.element.height(Math.max(0, options.height - nonContentHeight));
}
if(this.uiDialog.is(":data(ui-resizable)")){
this.uiDialog.resizable("option", "minHeight", this._minHeight());
}},
_blockFrames: function(){
this.iframeBlocks=this.document.find("iframe").map(function(){
var iframe=$(this);
return $("<div>")
.css({
position: "absolute",
width: iframe.outerWidth(),
height: iframe.outerHeight()
})
.appendTo(iframe.parent())
.offset(iframe.offset())[ 0 ];
});
},
_unblockFrames: function(){
if(this.iframeBlocks){
this.iframeBlocks.remove();
delete this.iframeBlocks;
}},
_allowInteraction: function(event){
if($(event.target).closest(".ui-dialog").length){
return true;
}
return !!$(event.target).closest(".ui-datepicker").length;
},
_createOverlay: function(){
if(!this.options.modal){
return;
}
var isOpening=true;
this._delay(function(){
isOpening=false;
});
if(!this.document.data("ui-dialog-overlays")){
this._on(this.document, {
focusin: function(event){
if(isOpening){
return;
}
if(!this._allowInteraction(event)){
event.preventDefault();
this._trackingInstances()[ 0 ]._focusTabbable();
}}
});
}
this.overlay=$("<div>")
.appendTo(this._appendTo());
this._addClass(this.overlay, null, "ui-widget-overlay ui-front");
this._on(this.overlay, {
mousedown: "_keepFocus"
});
this.document.data("ui-dialog-overlays",
(this.document.data("ui-dialog-overlays")||0) + 1);
},
_destroyOverlay: function(){
if(!this.options.modal){
return;
}
if(this.overlay){
var overlays=this.document.data("ui-dialog-overlays") - 1;
if(!overlays){
this._off(this.document, "focusin");
this.document.removeData("ui-dialog-overlays");
}else{
this.document.data("ui-dialog-overlays", overlays);
}
this.overlay.remove();
this.overlay=null;
}}
});
if($.uiBackCompat!==false){
$.widget("ui.dialog", $.ui.dialog, {
options: {
dialogClass: ""
},
_createWrapper: function(){
this._super();
this.uiDialog.addClass(this.options.dialogClass);
},
_setOption: function(key, value){
if(key==="dialogClass"){
this.uiDialog
.removeClass(this.options.dialogClass)
.addClass(value);
}
this._superApply(arguments);
}});
}
var widgetsDialog=$.ui.dialog;
$.widget("ui.droppable", {
version: "1.12.1",
widgetEventPrefix: "drop",
options: {
accept: "*",
addClasses: true,
greedy: false,
scope: "default",
tolerance: "intersect",
activate: null,
deactivate: null,
drop: null,
out: null,
over: null
},
_create: function(){
var proportions,
o=this.options,
accept=o.accept;
this.isover=false;
this.isout=true;
this.accept=$.isFunction(accept) ? accept:function(d){
return d.is(accept);
};
this.proportions=function(){
if(arguments.length){
proportions=arguments[ 0 ];
}else{
return proportions ?
proportions :
proportions={
width: this.element[ 0 ].offsetWidth,
height: this.element[ 0 ].offsetHeight
};}};
this._addToManager(o.scope);
o.addClasses&&this._addClass("ui-droppable");
},
_addToManager: function(scope){
$.ui.ddmanager.droppables[ scope ]=$.ui.ddmanager.droppables[ scope ]||[];
$.ui.ddmanager.droppables[ scope ].push(this);
},
_splice: function(drop){
var i=0;
for(; i < drop.length; i++){
if(drop[ i ]===this){
drop.splice(i, 1);
}}
},
_destroy: function(){
var drop=$.ui.ddmanager.droppables[ this.options.scope ];
this._splice(drop);
},
_setOption: function(key, value){
if(key==="accept"){
this.accept=$.isFunction(value) ? value:function(d){
return d.is(value);
};}else if(key==="scope"){
var drop=$.ui.ddmanager.droppables[ this.options.scope ];
this._splice(drop);
this._addToManager(value);
}
this._super(key, value);
},
_activate: function(event){
var draggable=$.ui.ddmanager.current;
this._addActiveClass();
if(draggable){
this._trigger("activate", event, this.ui(draggable));
}},
_deactivate: function(event){
var draggable=$.ui.ddmanager.current;
this._removeActiveClass();
if(draggable){
this._trigger("deactivate", event, this.ui(draggable));
}},
_over: function(event){
var draggable=$.ui.ddmanager.current;
if(!draggable||(draggable.currentItem ||
draggable.element)[ 0 ]===this.element[ 0 ]){
return;
}
if(this.accept.call(this.element[ 0 ],(draggable.currentItem ||
draggable.element))){
this._addHoverClass();
this._trigger("over", event, this.ui(draggable));
}},
_out: function(event){
var draggable=$.ui.ddmanager.current;
if(!draggable||(draggable.currentItem ||
draggable.element)[ 0 ]===this.element[ 0 ]){
return;
}
if(this.accept.call(this.element[ 0 ],(draggable.currentItem ||
draggable.element))){
this._removeHoverClass();
this._trigger("out", event, this.ui(draggable));
}},
_drop: function(event, custom){
var draggable=custom||$.ui.ddmanager.current,
childrenIntersection=false;
if(!draggable||(draggable.currentItem ||
draggable.element)[ 0 ]===this.element[ 0 ]){
return false;
}
this.element
.find(":data(ui-droppable)")
.not(".ui-draggable-dragging")
.each(function(){
var inst=$(this).droppable("instance");
if(inst.options.greedy &&
!inst.options.disabled &&
inst.options.scope===draggable.options.scope &&
inst.accept.call(inst.element[ 0 ],(draggable.currentItem||draggable.element)
) &&
intersect(
draggable,
$.extend(inst, { offset: inst.element.offset() }),
inst.options.tolerance, event
)
){
childrenIntersection=true;
return false; }});
if(childrenIntersection){
return false;
}
if(this.accept.call(this.element[ 0 ],
(draggable.currentItem||draggable.element))){
this._removeActiveClass();
this._removeHoverClass();
this._trigger("drop", event, this.ui(draggable));
return this.element;
}
return false;
},
ui: function(c){
return {
draggable:(c.currentItem||c.element),
helper: c.helper,
position: c.position,
offset: c.positionAbs
};},
_addHoverClass: function(){
this._addClass("ui-droppable-hover");
},
_removeHoverClass: function(){
this._removeClass("ui-droppable-hover");
},
_addActiveClass: function(){
this._addClass("ui-droppable-active");
},
_removeActiveClass: function(){
this._removeClass("ui-droppable-active");
}});
var intersect=$.ui.intersect=(function(){
function isOverAxis(x, reference, size){
return(x >=reference)&&(x <(reference + size));
}
return function(draggable, droppable, toleranceMode, event){
if(!droppable.offset){
return false;
}
var x1=(draggable.positionAbs ||
draggable.position.absolute).left + draggable.margins.left,
y1=(draggable.positionAbs ||
draggable.position.absolute).top + draggable.margins.top,
x2=x1 + draggable.helperProportions.width,
y2=y1 + draggable.helperProportions.height,
l=droppable.offset.left,
t=droppable.offset.top,
r=l + droppable.proportions().width,
b=t + droppable.proportions().height;
switch(toleranceMode){
case "fit":
return(l <=x1&&x2 <=r&&t <=y1&&y2 <=b);
case "intersect":
return(l < x1 +(draggable.helperProportions.width / 2) &&
x2 -(draggable.helperProportions.width / 2) < r &&
t < y1 +(draggable.helperProportions.height / 2) &&
y2 -(draggable.helperProportions.height / 2) < b);
case "pointer":
return isOverAxis(event.pageY, t, droppable.proportions().height) &&
isOverAxis(event.pageX, l, droppable.proportions().width);
case "touch":
return (
(y1 >=t&&y1 <=b) ||
(y2 >=t&&y2 <=b) ||
(y1 < t&&y2 > b)
)&&(
(x1 >=l&&x1 <=r) ||
(x2 >=l&&x2 <=r) ||
(x1 < l&&x2 > r)
);
default:
return false;
}};})();
$.ui.ddmanager={
current: null,
droppables: { "default": [] },
prepareOffsets: function(t, event){
var i, j,
m=$.ui.ddmanager.droppables[ t.options.scope ]||[],
type=event ? event.type:null,
list=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();
droppablesLoop: for(i=0; i < m.length; i++){
if(m[ i ].options.disabled||(t&&!m[ i ].accept.call(m[ i ].element[ 0 ],
(t.currentItem||t.element)))){
continue;
}
for(j=0; j < list.length; j++){
if(list[ j ]===m[ i ].element[ 0 ]){
m[ i ].proportions().height=0;
continue droppablesLoop;
}}
m[ i ].visible=m[ i ].element.css("display")!=="none";
if(!m[ i ].visible){
continue;
}
if(type==="mousedown"){
m[ i ]._activate.call(m[ i ], event);
}
m[ i ].offset=m[ i ].element.offset();
m[ i ].proportions({
width: m[ i ].element[ 0 ].offsetWidth,
height: m[ i ].element[ 0 ].offsetHeight
});
}},
drop: function(draggable, event){
var dropped=false;
$.each(( $.ui.ddmanager.droppables[ draggable.options.scope ]||[]).slice(), function(){
if(!this.options){
return;
}
if(!this.options.disabled&&this.visible &&
intersect(draggable, this, this.options.tolerance, event)){
dropped=this._drop.call(this, event)||dropped;
}
if(!this.options.disabled&&this.visible&&this.accept.call(this.element[ 0 ],
(draggable.currentItem||draggable.element))){
this.isout=true;
this.isover=false;
this._deactivate.call(this, event);
}});
return dropped;
},
dragStart: function(draggable, event){
draggable.element.parentsUntil("body").on("scroll.droppable", function(){
if(!draggable.options.refreshPositions){
$.ui.ddmanager.prepareOffsets(draggable, event);
}});
},
drag: function(draggable, event){
if(draggable.options.refreshPositions){
$.ui.ddmanager.prepareOffsets(draggable, event);
}
$.each($.ui.ddmanager.droppables[ draggable.options.scope ]||[], function(){
if(this.options.disabled||this.greedyChild||!this.visible){
return;
}
var parentInstance, scope, parent,
intersects=intersect(draggable, this, this.options.tolerance, event),
c = !intersects&&this.isover ?
"isout" :
(intersects&&!this.isover ? "isover":null);
if(!c){
return;
}
if(this.options.greedy){
scope=this.options.scope;
parent=this.element.parents(":data(ui-droppable)").filter(function(){
return $(this).droppable("instance").options.scope===scope;
});
if(parent.length){
parentInstance=$(parent[ 0 ]).droppable("instance");
parentInstance.greedyChild=(c==="isover");
}}
if(parentInstance&&c==="isover"){
parentInstance.isover=false;
parentInstance.isout=true;
parentInstance._out.call(parentInstance, event);
}
this[ c ]=true;
this[ c==="isout" ? "isover":"isout" ]=false;
this[ c==="isover" ? "_over":"_out" ].call(this, event);
if(parentInstance&&c==="isout"){
parentInstance.isout=false;
parentInstance.isover=true;
parentInstance._over.call(parentInstance, event);
}});
},
dragStop: function(draggable, event){
draggable.element.parentsUntil("body").off("scroll.droppable");
if(!draggable.options.refreshPositions){
$.ui.ddmanager.prepareOffsets(draggable, event);
}}
};
if($.uiBackCompat!==false){
$.widget("ui.droppable", $.ui.droppable, {
options: {
hoverClass: false,
activeClass: false
},
_addActiveClass: function(){
this._super();
if(this.options.activeClass){
this.element.addClass(this.options.activeClass);
}},
_removeActiveClass: function(){
this._super();
if(this.options.activeClass){
this.element.removeClass(this.options.activeClass);
}},
_addHoverClass: function(){
this._super();
if(this.options.hoverClass){
this.element.addClass(this.options.hoverClass);
}},
_removeHoverClass: function(){
this._super();
if(this.options.hoverClass){
this.element.removeClass(this.options.hoverClass);
}}
});
}
var widgetsDroppable=$.ui.droppable;
var widgetsProgressbar=$.widget("ui.progressbar", {
version: "1.12.1",
options: {
classes: {
"ui-progressbar": "ui-corner-all",
"ui-progressbar-value": "ui-corner-left",
"ui-progressbar-complete": "ui-corner-right"
},
max: 100,
value: 0,
change: null,
complete: null
},
min: 0,
_create: function(){
this.oldValue=this.options.value=this._constrainedValue();
this.element.attr({
role: "progressbar",
"aria-valuemin": this.min
});
this._addClass("ui-progressbar", "ui-widget ui-widget-content");
this.valueDiv=$("<div>").appendTo(this.element);
this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header");
this._refreshValue();
},
_destroy: function(){
this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow");
this.valueDiv.remove();
},
value: function(newValue){
if(newValue===undefined){
return this.options.value;
}
this.options.value=this._constrainedValue(newValue);
this._refreshValue();
},
_constrainedValue: function(newValue){
if(newValue===undefined){
newValue=this.options.value;
}
this.indeterminate=newValue===false;
if(typeof newValue!=="number"){
newValue=0;
}
return this.indeterminate ? false :
Math.min(this.options.max, Math.max(this.min, newValue));
},
_setOptions: function(options){
var value=options.value;
delete options.value;
this._super(options);
this.options.value=this._constrainedValue(value);
this._refreshValue();
},
_setOption: function(key, value){
if(key==="max"){
value=Math.max(this.min, value);
}
this._super(key, value);
},
_setOptionDisabled: function(value){
this._super(value);
this.element.attr("aria-disabled", value);
this._toggleClass(null, "ui-state-disabled", !!value);
},
_percentage: function(){
return this.indeterminate ?
100 :
100 *(this.options.value - this.min) /(this.options.max - this.min);
},
_refreshValue: function(){
var value=this.options.value,
percentage=this._percentage();
this.valueDiv
.toggle(this.indeterminate||value > this.min)
.width(percentage.toFixed(0) + "%");
this
._toggleClass(this.valueDiv, "ui-progressbar-complete", null,
value===this.options.max)
._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate);
if(this.indeterminate){
this.element.removeAttr("aria-valuenow");
if(!this.overlayDiv){
this.overlayDiv=$("<div>").appendTo(this.valueDiv);
this._addClass(this.overlayDiv, "ui-progressbar-overlay");
}}else{
this.element.attr({
"aria-valuemax": this.options.max,
"aria-valuenow": value
});
if(this.overlayDiv){
this.overlayDiv.remove();
this.overlayDiv=null;
}}
if(this.oldValue!==value){
this.oldValue=value;
this._trigger("change");
}
if(value===this.options.max){
this._trigger("complete");
}}
});
var widgetsSelectable=$.widget("ui.selectable", $.ui.mouse, {
version: "1.12.1",
options: {
appendTo: "body",
autoRefresh: true,
distance: 0,
filter: "*",
tolerance: "touch",
selected: null,
selecting: null,
start: null,
stop: null,
unselected: null,
unselecting: null
},
_create: function(){
var that=this;
this._addClass("ui-selectable");
this.dragged=false;
this.refresh=function(){
that.elementPos=$(that.element[ 0 ]).offset();
that.selectees=$(that.options.filter, that.element[ 0 ]);
that._addClass(that.selectees, "ui-selectee");
that.selectees.each(function(){
var $this=$(this),
selecteeOffset=$this.offset(),
pos={
left: selecteeOffset.left - that.elementPos.left,
top: selecteeOffset.top - that.elementPos.top
};
$.data(this, "selectable-item", {
element: this,
$element: $this,
left: pos.left,
top: pos.top,
right: pos.left + $this.outerWidth(),
bottom: pos.top + $this.outerHeight(),
startselected: false,
selected: $this.hasClass("ui-selected"),
selecting: $this.hasClass("ui-selecting"),
unselecting: $this.hasClass("ui-unselecting")
});
});
};
this.refresh();
this._mouseInit();
this.helper=$("<div>");
this._addClass(this.helper, "ui-selectable-helper");
},
_destroy: function(){
this.selectees.removeData("selectable-item");
this._mouseDestroy();
},
_mouseStart: function(event){
var that=this,
options=this.options;
this.opos=[ event.pageX, event.pageY ];
this.elementPos=$(this.element[ 0 ]).offset();
if(this.options.disabled){
return;
}
this.selectees=$(options.filter, this.element[ 0 ]);
this._trigger("start", event);
$(options.appendTo).append(this.helper);
this.helper.css({
"left": event.pageX,
"top": event.pageY,
"width": 0,
"height": 0
});
if(options.autoRefresh){
this.refresh();
}
this.selectees.filter(".ui-selected").each(function(){
var selectee=$.data(this, "selectable-item");
selectee.startselected=true;
if(!event.metaKey&&!event.ctrlKey){
that._removeClass(selectee.$element, "ui-selected");
selectee.selected=false;
that._addClass(selectee.$element, "ui-unselecting");
selectee.unselecting=true;
that._trigger("unselecting", event, {
unselecting: selectee.element
});
}});
$(event.target).parents().addBack().each(function(){
var doSelect,
selectee=$.data(this, "selectable-item");
if(selectee){
doSelect=(!event.metaKey&&!event.ctrlKey) ||
!selectee.$element.hasClass("ui-selected");
that._removeClass(selectee.$element, doSelect ? "ui-unselecting":"ui-selected")
._addClass(selectee.$element, doSelect ? "ui-selecting":"ui-unselecting");
selectee.unselecting = !doSelect;
selectee.selecting=doSelect;
selectee.selected=doSelect;
if(doSelect){
that._trigger("selecting", event, {
selecting: selectee.element
});
}else{
that._trigger("unselecting", event, {
unselecting: selectee.element
});
}
return false;
}});
},
_mouseDrag: function(event){
this.dragged=true;
if(this.options.disabled){
return;
}
var tmp,
that=this,
options=this.options,
x1=this.opos[ 0 ],
y1=this.opos[ 1 ],
x2=event.pageX,
y2=event.pageY;
if(x1 > x2){ tmp=x2; x2=x1; x1=tmp; }
if(y1 > y2){ tmp=y2; y2=y1; y1=tmp; }
this.helper.css({ left: x1, top: y1, width: x2 - x1, height: y2 - y1 });
this.selectees.each(function(){
var selectee=$.data(this, "selectable-item"),
hit=false,
offset={};
if(!selectee||selectee.element===that.element[ 0 ]){
return;
}
offset.left=selectee.left   + that.elementPos.left;
offset.right=selectee.right  + that.elementPos.left;
offset.top=selectee.top    + that.elementPos.top;
offset.bottom=selectee.bottom + that.elementPos.top;
if(options.tolerance==="touch"){
hit=(!(offset.left > x2||offset.right < x1||offset.top > y2 ||
offset.bottom < y1));
}else if(options.tolerance==="fit"){
hit=(offset.left > x1&&offset.right < x2&&offset.top > y1 &&
offset.bottom < y2);
}
if(hit){
if(selectee.selected){
that._removeClass(selectee.$element, "ui-selected");
selectee.selected=false;
}
if(selectee.unselecting){
that._removeClass(selectee.$element, "ui-unselecting");
selectee.unselecting=false;
}
if(!selectee.selecting){
that._addClass(selectee.$element, "ui-selecting");
selectee.selecting=true;
that._trigger("selecting", event, {
selecting: selectee.element
});
}}else{
if(selectee.selecting){
if(( event.metaKey||event.ctrlKey)&&selectee.startselected){
that._removeClass(selectee.$element, "ui-selecting");
selectee.selecting=false;
that._addClass(selectee.$element, "ui-selected");
selectee.selected=true;
}else{
that._removeClass(selectee.$element, "ui-selecting");
selectee.selecting=false;
if(selectee.startselected){
that._addClass(selectee.$element, "ui-unselecting");
selectee.unselecting=true;
}
that._trigger("unselecting", event, {
unselecting: selectee.element
});
}}
if(selectee.selected){
if(!event.metaKey&&!event.ctrlKey&&!selectee.startselected){
that._removeClass(selectee.$element, "ui-selected");
selectee.selected=false;
that._addClass(selectee.$element, "ui-unselecting");
selectee.unselecting=true;
that._trigger("unselecting", event, {
unselecting: selectee.element
});
}}
}});
return false;
},
_mouseStop: function(event){
var that=this;
this.dragged=false;
$(".ui-unselecting", this.element[ 0 ]).each(function(){
var selectee=$.data(this, "selectable-item");
that._removeClass(selectee.$element, "ui-unselecting");
selectee.unselecting=false;
selectee.startselected=false;
that._trigger("unselected", event, {
unselected: selectee.element
});
});
$(".ui-selecting", this.element[ 0 ]).each(function(){
var selectee=$.data(this, "selectable-item");
that._removeClass(selectee.$element, "ui-selecting")
._addClass(selectee.$element, "ui-selected");
selectee.selecting=false;
selectee.selected=true;
selectee.startselected=true;
that._trigger("selected", event, {
selected: selectee.element
});
});
this._trigger("stop", event);
this.helper.remove();
return false;
}});
var widgetsSelectmenu=$.widget("ui.selectmenu", [ $.ui.formResetMixin, {
version: "1.12.1",
defaultElement: "<select>",
options: {
appendTo: null,
classes: {
"ui-selectmenu-button-open": "ui-corner-top",
"ui-selectmenu-button-closed": "ui-corner-all"
},
disabled: null,
icons: {
button: "ui-icon-triangle-1-s"
},
position: {
my: "left top",
at: "left bottom",
collision: "none"
},
width: false,
change: null,
close: null,
focus: null,
open: null,
select: null
},
_create: function(){
var selectmenuId=this.element.uniqueId().attr("id");
this.ids={
element: selectmenuId,
button: selectmenuId + "-button",
menu: selectmenuId + "-menu"
};
this._drawButton();
this._drawMenu();
this._bindFormResetHandler();
this._rendered=false;
this.menuItems=$();
},
_drawButton: function(){
var icon,
that=this,
item=this._parseOption(this.element.find("option:selected"),
this.element[ 0 ].selectedIndex
);
this.labels=this.element.labels().attr("for", this.ids.button);
this._on(this.labels, {
click: function(event){
this.button.focus();
event.preventDefault();
}});
this.element.hide();
this.button=$("<span>", {
tabindex: this.options.disabled ? -1:0,
id: this.ids.button,
role: "combobox",
"aria-expanded": "false",
"aria-autocomplete": "list",
"aria-owns": this.ids.menu,
"aria-haspopup": "true",
title: this.element.attr("title")
})
.insertAfter(this.element);
this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed",
"ui-button ui-widget");
icon=$("<span>").appendTo(this.button);
this._addClass(icon, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button);
this.buttonItem=this._renderButtonItem(item)
.appendTo(this.button);
if(this.options.width!==false){
this._resizeButton();
}
this._on(this.button, this._buttonEvents);
this.button.one("focusin", function(){
if(!that._rendered){
that._refreshMenu();
}});
},
_drawMenu: function(){
var that=this;
this.menu=$("<ul>", {
"aria-hidden": "true",
"aria-labelledby": this.ids.button,
id: this.ids.menu
});
this.menuWrap=$("<div>").append(this.menu);
this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front");
this.menuWrap.appendTo(this._appendTo());
this.menuInstance=this.menu
.menu({
classes: {
"ui-menu": "ui-corner-bottom"
},
role: "listbox",
select: function(event, ui){
event.preventDefault();
that._setSelection();
that._select(ui.item.data("ui-selectmenu-item"), event);
},
focus: function(event, ui){
var item=ui.item.data("ui-selectmenu-item");
if(that.focusIndex!=null&&item.index!==that.focusIndex){
that._trigger("focus", event, { item: item });
if(!that.isOpen){
that._select(item, event);
}}
that.focusIndex=item.index;
that.button.attr("aria-activedescendant",
that.menuItems.eq(item.index).attr("id"));
}})
.menu("instance");
this.menuInstance._off(this.menu, "mouseleave");
this.menuInstance._closeOnDocumentClick=function(){
return false;
};
this.menuInstance._isDivider=function(){
return false;
};},
refresh: function(){
this._refreshMenu();
this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item")||{}
)
);
if(this.options.width===null){
this._resizeButton();
}},
_refreshMenu: function(){
var item,
options=this.element.find("option");
this.menu.empty();
this._parseOptions(options);
this._renderMenu(this.menu, this.items);
this.menuInstance.refresh();
this.menuItems=this.menu.find("li")
.not(".ui-selectmenu-optgroup")
.find(".ui-menu-item-wrapper");
this._rendered=true;
if(!options.length){
return;
}
item=this._getSelectedItem();
this.menuInstance.focus(null, item);
this._setAria(item.data("ui-selectmenu-item"));
this._setOption("disabled", this.element.prop("disabled"));
},
open: function(event){
if(this.options.disabled){
return;
}
if(!this._rendered){
this._refreshMenu();
}else{
this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active");
this.menuInstance.focus(null, this._getSelectedItem());
}
if(!this.menuItems.length){
return;
}
this.isOpen=true;
this._toggleAttr();
this._resizeMenu();
this._position();
this._on(this.document, this._documentClick);
this._trigger("open", event);
},
_position: function(){
this.menuWrap.position($.extend({ of: this.button }, this.options.position));
},
close: function(event){
if(!this.isOpen){
return;
}
this.isOpen=false;
this._toggleAttr();
this.range=null;
this._off(this.document);
this._trigger("close", event);
},
widget: function(){
return this.button;
},
menuWidget: function(){
return this.menu;
},
_renderButtonItem: function(item){
var buttonItem=$("<span>");
this._setText(buttonItem, item.label);
this._addClass(buttonItem, "ui-selectmenu-text");
return buttonItem;
},
_renderMenu: function(ul, items){
var that=this,
currentOptgroup="";
$.each(items, function(index, item){
var li;
if(item.optgroup!==currentOptgroup){
li=$("<li>", {
text: item.optgroup
});
that._addClass(li, "ui-selectmenu-optgroup", "ui-menu-divider" +
(item.element.parent("optgroup").prop("disabled") ?
" ui-state-disabled" :
""));
li.appendTo(ul);
currentOptgroup=item.optgroup;
}
that._renderItemData(ul, item);
});
},
_renderItemData: function(ul, item){
return this._renderItem(ul, item).data("ui-selectmenu-item", item);
},
_renderItem: function(ul, item){
var li=$("<li>"),
wrapper=$("<div>", {
title: item.element.attr("title")
});
if(item.disabled){
this._addClass(li, null, "ui-state-disabled");
}
this._setText(wrapper, item.label);
return li.append(wrapper).appendTo(ul);
},
_setText: function(element, value){
if(value){
element.text(value);
}else{
element.html("&#160;");
}},
_move: function(direction, event){
var item, next,
filter=".ui-menu-item";
if(this.isOpen){
item=this.menuItems.eq(this.focusIndex).parent("li");
}else{
item=this.menuItems.eq(this.element[ 0 ].selectedIndex).parent("li");
filter +=":not(.ui-state-disabled)";
}
if(direction==="first"||direction==="last"){
next=item[ direction==="first" ? "prevAll":"nextAll" ](filter).eq(-1);
}else{
next=item[ direction + "All" ](filter).eq(0);
}
if(next.length){
this.menuInstance.focus(event, next);
}},
_getSelectedItem: function(){
return this.menuItems.eq(this.element[ 0 ].selectedIndex).parent("li");
},
_toggle: function(event){
this[ this.isOpen ? "close":"open" ](event);
},
_setSelection: function(){
var selection;
if(!this.range){
return;
}
if(window.getSelection){
selection=window.getSelection();
selection.removeAllRanges();
selection.addRange(this.range);
}else{
this.range.select();
}
this.button.focus();
},
_documentClick: {
mousedown: function(event){
if(!this.isOpen){
return;
}
if(!$(event.target).closest(".ui-selectmenu-menu, #" +
$.ui.escapeSelector(this.ids.button)).length){
this.close(event);
}}
},
_buttonEvents: {
mousedown: function(){
var selection;
if(window.getSelection){
selection=window.getSelection();
if(selection.rangeCount){
this.range=selection.getRangeAt(0);
}}else{
this.range=document.selection.createRange();
}},
click: function(event){
this._setSelection();
this._toggle(event);
},
keydown: function(event){
var preventDefault=true;
switch(event.keyCode){
case $.ui.keyCode.TAB:
case $.ui.keyCode.ESCAPE:
this.close(event);
preventDefault=false;
break;
case $.ui.keyCode.ENTER:
if(this.isOpen){
this._selectFocusedItem(event);
}
break;
case $.ui.keyCode.UP:
if(event.altKey){
this._toggle(event);
}else{
this._move("prev", event);
}
break;
case $.ui.keyCode.DOWN:
if(event.altKey){
this._toggle(event);
}else{
this._move("next", event);
}
break;
case $.ui.keyCode.SPACE:
if(this.isOpen){
this._selectFocusedItem(event);
}else{
this._toggle(event);
}
break;
case $.ui.keyCode.LEFT:
this._move("prev", event);
break;
case $.ui.keyCode.RIGHT:
this._move("next", event);
break;
case $.ui.keyCode.HOME:
case $.ui.keyCode.PAGE_UP:
this._move("first", event);
break;
case $.ui.keyCode.END:
case $.ui.keyCode.PAGE_DOWN:
this._move("last", event);
break;
default:
this.menu.trigger(event);
preventDefault=false;
}
if(preventDefault){
event.preventDefault();
}}
},
_selectFocusedItem: function(event){
var item=this.menuItems.eq(this.focusIndex).parent("li");
if(!item.hasClass("ui-state-disabled")){
this._select(item.data("ui-selectmenu-item"), event);
}},
_select: function(item, event){
var oldIndex=this.element[ 0 ].selectedIndex;
this.element[ 0 ].selectedIndex=item.index;
this.buttonItem.replaceWith(this.buttonItem=this._renderButtonItem(item));
this._setAria(item);
this._trigger("select", event, { item: item });
if(item.index!==oldIndex){
this._trigger("change", event, { item: item });
}
this.close(event);
},
_setAria: function(item){
var id=this.menuItems.eq(item.index).attr("id");
this.button.attr({
"aria-labelledby": id,
"aria-activedescendant": id
});
this.menu.attr("aria-activedescendant", id);
},
_setOption: function(key, value){
if(key==="icons"){
var icon=this.button.find("span.ui-icon");
this._removeClass(icon, null, this.options.icons.button)
._addClass(icon, null, value.button);
}
this._super(key, value);
if(key==="appendTo"){
this.menuWrap.appendTo(this._appendTo());
}
if(key==="width"){
this._resizeButton();
}},
_setOptionDisabled: function(value){
this._super(value);
this.menuInstance.option("disabled", value);
this.button.attr("aria-disabled", value);
this._toggleClass(this.button, null, "ui-state-disabled", value);
this.element.prop("disabled", value);
if(value){
this.button.attr("tabindex", -1);
this.close();
}else{
this.button.attr("tabindex", 0);
}},
_appendTo: function(){
var element=this.options.appendTo;
if(element){
element=element.jquery||element.nodeType ?
$(element) :
this.document.find(element).eq(0);
}
if(!element||!element[ 0 ]){
element=this.element.closest(".ui-front, dialog");
}
if(!element.length){
element=this.document[ 0 ].body;
}
return element;
},
_toggleAttr: function(){
this.button.attr("aria-expanded", this.isOpen);
this._removeClass(this.button, "ui-selectmenu-button-" +
(this.isOpen ? "closed":"open"))
._addClass(this.button, "ui-selectmenu-button-" +
(this.isOpen ? "open":"closed"))
._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen);
this.menu.attr("aria-hidden", !this.isOpen);
},
_resizeButton: function(){
var width=this.options.width;
if(width===false){
this.button.css("width", "");
return;
}
if(width===null){
width=this.element.show().outerWidth();
this.element.hide();
}
this.button.outerWidth(width);
},
_resizeMenu: function(){
this.menu.outerWidth(Math.max(this.button.outerWidth(),
this.menu.width("").outerWidth() + 1
));
},
_getCreateOptions: function(){
var options=this._super();
options.disabled=this.element.prop("disabled");
return options;
},
_parseOptions: function(options){
var that=this,
data=[];
options.each(function(index, item){
data.push(that._parseOption($(item), index));
});
this.items=data;
},
_parseOption: function(option, index){
var optgroup=option.parent("optgroup");
return {
element: option,
index: index,
value: option.val(),
label: option.text(),
optgroup: optgroup.attr("label")||"",
disabled: optgroup.prop("disabled")||option.prop("disabled")
};},
_destroy: function(){
this._unbindFormResetHandler();
this.menuWrap.remove();
this.button.remove();
this.element.show();
this.element.removeUniqueId();
this.labels.attr("for", this.ids.element);
}} ]);
var widgetsSlider=$.widget("ui.slider", $.ui.mouse, {
version: "1.12.1",
widgetEventPrefix: "slide",
options: {
animate: false,
classes: {
"ui-slider": "ui-corner-all",
"ui-slider-handle": "ui-corner-all",
"ui-slider-range": "ui-corner-all ui-widget-header"
},
distance: 0,
max: 100,
min: 0,
orientation: "horizontal",
range: false,
step: 1,
value: 0,
values: null,
change: null,
slide: null,
start: null,
stop: null
},
numPages: 5,
_create: function(){
this._keySliding=false;
this._mouseSliding=false;
this._animateOff=true;
this._handleIndex=null;
this._detectOrientation();
this._mouseInit();
this._calculateNewMax();
this._addClass("ui-slider ui-slider-" + this.orientation,
"ui-widget ui-widget-content");
this._refresh();
this._animateOff=false;
},
_refresh: function(){
this._createRange();
this._createHandles();
this._setupEvents();
this._refreshValue();
},
_createHandles: function(){
var i, handleCount,
options=this.options,
existingHandles=this.element.find(".ui-slider-handle"),
handle="<span tabindex='0'></span>",
handles=[];
handleCount=(options.values&&options.values.length)||1;
if(existingHandles.length > handleCount){
existingHandles.slice(handleCount).remove();
existingHandles=existingHandles.slice(0, handleCount);
}
for(i=existingHandles.length; i < handleCount; i++){
handles.push(handle);
}
this.handles=existingHandles.add($(handles.join("")).appendTo(this.element));
this._addClass(this.handles, "ui-slider-handle", "ui-state-default");
this.handle=this.handles.eq(0);
this.handles.each(function(i){
$(this)
.data("ui-slider-handle-index", i)
.attr("tabIndex", 0);
});
},
_createRange: function(){
var options=this.options;
if(options.range){
if(options.range===true){
if(!options.values){
options.values=[ this._valueMin(), this._valueMin() ];
}else if(options.values.length&&options.values.length!==2){
options.values=[ options.values[ 0 ], options.values[ 0 ] ];
}else if($.isArray(options.values)){
options.values=options.values.slice(0);
}}
if(!this.range||!this.range.length){
this.range=$("<div>")
.appendTo(this.element);
this._addClass(this.range, "ui-slider-range");
}else{
this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max");
this.range.css({
"left": "",
"bottom": ""
});
}
if(options.range==="min"||options.range==="max"){
this._addClass(this.range, "ui-slider-range-" + options.range);
}}else{
if(this.range){
this.range.remove();
}
this.range=null;
}},
_setupEvents: function(){
this._off(this.handles);
this._on(this.handles, this._handleEvents);
this._hoverable(this.handles);
this._focusable(this.handles);
},
_destroy: function(){
this.handles.remove();
if(this.range){
this.range.remove();
}
this._mouseDestroy();
},
_mouseCapture: function(event){
var position, normValue, distance, closestHandle, index, allowed, offset, mouseOverHandle,
that=this,
o=this.options;
if(o.disabled){
return false;
}
this.elementSize={
width: this.element.outerWidth(),
height: this.element.outerHeight()
};
this.elementOffset=this.element.offset();
position={ x: event.pageX, y: event.pageY };
normValue=this._normValueFromMouse(position);
distance=this._valueMax() - this._valueMin() + 1;
this.handles.each(function(i){
var thisDistance=Math.abs(normValue - that.values(i));
if(( distance > thisDistance) ||
(distance===thisDistance &&
(i===that._lastChangedValue||that.values(i)===o.min))){
distance=thisDistance;
closestHandle=$(this);
index=i;
}});
allowed=this._start(event, index);
if(allowed===false){
return false;
}
this._mouseSliding=true;
this._handleIndex=index;
this._addClass(closestHandle, null, "ui-state-active");
closestHandle.trigger("focus");
offset=closestHandle.offset();
mouseOverHandle = !$(event.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=mouseOverHandle ? { left: 0, top: 0 }:{
left: event.pageX - offset.left -(closestHandle.width() / 2),
top: event.pageY - offset.top -
(closestHandle.height() / 2) -
(parseInt(closestHandle.css("borderTopWidth"), 10)||0) -
(parseInt(closestHandle.css("borderBottomWidth"), 10)||0) +
(parseInt(closestHandle.css("marginTop"), 10)||0)
};
if(!this.handles.hasClass("ui-state-hover")){
this._slide(event, index, normValue);
}
this._animateOff=true;
return true;
},
_mouseStart: function(){
return true;
},
_mouseDrag: function(event){
var position={ x: event.pageX, y: event.pageY },
normValue=this._normValueFromMouse(position);
this._slide(event, this._handleIndex, normValue);
return false;
},
_mouseStop: function(event){
this._removeClass(this.handles, null, "ui-state-active");
this._mouseSliding=false;
this._stop(event, this._handleIndex);
this._change(event, this._handleIndex);
this._handleIndex=null;
this._clickOffset=null;
this._animateOff=false;
return false;
},
_detectOrientation: function(){
this.orientation=(this.options.orientation==="vertical") ? "vertical":"horizontal";
},
_normValueFromMouse: function(position){
var pixelTotal,
pixelMouse,
percentMouse,
valueTotal,
valueMouse;
if(this.orientation==="horizontal"){
pixelTotal=this.elementSize.width;
pixelMouse=position.x - this.elementOffset.left -
(this._clickOffset ? this._clickOffset.left:0);
}else{
pixelTotal=this.elementSize.height;
pixelMouse=position.y - this.elementOffset.top -
(this._clickOffset ? this._clickOffset.top:0);
}
percentMouse=(pixelMouse / pixelTotal);
if(percentMouse > 1){
percentMouse=1;
}
if(percentMouse < 0){
percentMouse=0;
}
if(this.orientation==="vertical"){
percentMouse=1 - percentMouse;
}
valueTotal=this._valueMax() - this._valueMin();
valueMouse=this._valueMin() + percentMouse * valueTotal;
return this._trimAlignValue(valueMouse);
},
_uiHash: function(index, value, values){
var uiHash={
handle: this.handles[ index ],
handleIndex: index,
value: value!==undefined ? value:this.value()
};
if(this._hasMultipleValues()){
uiHash.value=value!==undefined ? value:this.values(index);
uiHash.values=values||this.values();
}
return uiHash;
},
_hasMultipleValues: function(){
return this.options.values&&this.options.values.length;
},
_start: function(event, index){
return this._trigger("start", event, this._uiHash(index));
},
_slide: function(event, index, newVal){
var allowed, otherVal,
currentValue=this.value(),
newValues=this.values();
if(this._hasMultipleValues()){
otherVal=this.values(index ? 0:1);
currentValue=this.values(index);
if(this.options.values.length===2&&this.options.range===true){
newVal=index===0 ? Math.min(otherVal, newVal):Math.max(otherVal, newVal);
}
newValues[ index ]=newVal;
}
if(newVal===currentValue){
return;
}
allowed=this._trigger("slide", event, this._uiHash(index, newVal, newValues));
if(allowed===false){
return;
}
if(this._hasMultipleValues()){
this.values(index, newVal);
}else{
this.value(newVal);
}},
_stop: function(event, index){
this._trigger("stop", event, this._uiHash(index));
},
_change: function(event, index){
if(!this._keySliding&&!this._mouseSliding){
this._lastChangedValue=index;
this._trigger("change", event, this._uiHash(index));
}},
value: function(newValue){
if(arguments.length){
this.options.value=this._trimAlignValue(newValue);
this._refreshValue();
this._change(null, 0);
return;
}
return this._value();
},
values: function(index, newValue){
var vals,
newValues,
i;
if(arguments.length > 1){
this.options.values[ index ]=this._trimAlignValue(newValue);
this._refreshValue();
this._change(null, index);
return;
}
if(arguments.length){
if($.isArray(arguments[ 0 ])){
vals=this.options.values;
newValues=arguments[ 0 ];
for(i=0; i < vals.length; i +=1){
vals[ i ]=this._trimAlignValue(newValues[ i ]);
this._change(null, i);
}
this._refreshValue();
}else{
if(this._hasMultipleValues()){
return this._values(index);
}else{
return this.value();
}}
}else{
return this._values();
}},
_setOption: function(key, value){
var i,
valsLength=0;
if(key==="range"&&this.options.range===true){
if(value==="min"){
this.options.value=this._values(0);
this.options.values=null;
}else if(value==="max"){
this.options.value=this._values(this.options.values.length - 1);
this.options.values=null;
}}
if($.isArray(this.options.values)){
valsLength=this.options.values.length;
}
this._super(key, value);
switch(key){
case "orientation":
this._detectOrientation();
this._removeClass("ui-slider-horizontal ui-slider-vertical")
._addClass("ui-slider-" + this.orientation);
this._refreshValue();
if(this.options.range){
this._refreshRange(value);
}
this.handles.css(value==="horizontal" ? "bottom":"left", "");
break;
case "value":
this._animateOff=true;
this._refreshValue();
this._change(null, 0);
this._animateOff=false;
break;
case "values":
this._animateOff=true;
this._refreshValue();
for(i=valsLength - 1; i >=0; i--){
this._change(null, i);
}
this._animateOff=false;
break;
case "step":
case "min":
case "max":
this._animateOff=true;
this._calculateNewMax();
this._refreshValue();
this._animateOff=false;
break;
case "range":
this._animateOff=true;
this._refresh();
this._animateOff=false;
break;
}},
_setOptionDisabled: function(value){
this._super(value);
this._toggleClass(null, "ui-state-disabled", !!value);
},
_value: function(){
var val=this.options.value;
val=this._trimAlignValue(val);
return val;
},
_values: function(index){
var val,
vals,
i;
if(arguments.length){
val=this.options.values[ index ];
val=this._trimAlignValue(val);
return val;
}else if(this._hasMultipleValues()){
vals=this.options.values.slice();
for(i=0; i < vals.length; i +=1){
vals[ i ]=this._trimAlignValue(vals[ i ]);
}
return vals;
}else{
return [];
}},
_trimAlignValue: function(val){
if(val <=this._valueMin()){
return this._valueMin();
}
if(val >=this._valueMax()){
return this._valueMax();
}
var step=(this.options.step > 0) ? this.options.step:1,
valModStep=(val - this._valueMin()) % step,
alignValue=val - valModStep;
if(Math.abs(valModStep) * 2 >=step){
alignValue +=(valModStep > 0) ? step:(-step);
}
return parseFloat(alignValue.toFixed(5));
},
_calculateNewMax: function(){
var max=this.options.max,
min=this._valueMin(),
step=this.options.step,
aboveMin=Math.round(( max - min) / step) * step;
max=aboveMin + min;
if(max > this.options.max){
max -=step;
}
this.max=parseFloat(max.toFixed(this._precision()));
},
_precision: function(){
var precision=this._precisionOf(this.options.step);
if(this.options.min!==null){
precision=Math.max(precision, this._precisionOf(this.options.min));
}
return precision;
},
_precisionOf: function(num){
var str=num.toString(),
decimal=str.indexOf(".");
return decimal===-1 ? 0:str.length - decimal - 1;
},
_valueMin: function(){
return this.options.min;
},
_valueMax: function(){
return this.max;
},
_refreshRange: function(orientation){
if(orientation==="vertical"){
this.range.css({ "width": "", "left": "" });
}
if(orientation==="horizontal"){
this.range.css({ "height": "", "bottom": "" });
}},
_refreshValue: function(){
var lastValPercent, valPercent, value, valueMin, valueMax,
oRange=this.options.range,
o=this.options,
that=this,
animate=(!this._animateOff) ? o.animate:false,
_set={};
if(this._hasMultipleValues()){
this.handles.each(function(i){
valPercent=(that.values(i) - that._valueMin()) /(that._valueMax() -
that._valueMin()) * 100;
_set[ that.orientation==="horizontal" ? "left":"bottom" ]=valPercent + "%";
$(this).stop(1, 1)[ animate ? "animate":"css" ](_set, o.animate);
if(that.options.range===true){
if(that.orientation==="horizontal"){
if(i===0){
that.range.stop(1, 1)[ animate ? "animate":"css" ]({
left: valPercent + "%"
}, o.animate);
}
if(i===1){
that.range[ animate ? "animate":"css" ]({
width:(valPercent - lastValPercent) + "%"
}, {
queue: false,
duration: o.animate
});
}}else{
if(i===0){
that.range.stop(1, 1)[ animate ? "animate":"css" ]({
bottom:(valPercent) + "%"
}, o.animate);
}
if(i===1){
that.range[ animate ? "animate":"css" ]({
height:(valPercent - lastValPercent) + "%"
}, {
queue: false,
duration: o.animate
});
}}
}
lastValPercent=valPercent;
});
}else{
value=this.value();
valueMin=this._valueMin();
valueMax=this._valueMax();
valPercent=(valueMax!==valueMin) ?
(value - valueMin) /(valueMax - valueMin) * 100 :
0;
_set[ this.orientation==="horizontal" ? "left":"bottom" ]=valPercent + "%";
this.handle.stop(1, 1)[ animate ? "animate":"css" ](_set, o.animate);
if(oRange==="min"&&this.orientation==="horizontal"){
this.range.stop(1, 1)[ animate ? "animate":"css" ]({
width: valPercent + "%"
}, o.animate);
}
if(oRange==="max"&&this.orientation==="horizontal"){
this.range.stop(1, 1)[ animate ? "animate":"css" ]({
width:(100 - valPercent) + "%"
}, o.animate);
}
if(oRange==="min"&&this.orientation==="vertical"){
this.range.stop(1, 1)[ animate ? "animate":"css" ]({
height: valPercent + "%"
}, o.animate);
}
if(oRange==="max"&&this.orientation==="vertical"){
this.range.stop(1, 1)[ animate ? "animate":"css" ]({
height:(100 - valPercent) + "%"
}, o.animate);
}}
},
_handleEvents: {
keydown: function(event){
var allowed, curVal, newVal, step,
index=$(event.target).data("ui-slider-handle-index");
switch(event.keyCode){
case $.ui.keyCode.HOME:
case $.ui.keyCode.END:
case $.ui.keyCode.PAGE_UP:
case $.ui.keyCode.PAGE_DOWN:
case $.ui.keyCode.UP:
case $.ui.keyCode.RIGHT:
case $.ui.keyCode.DOWN:
case $.ui.keyCode.LEFT:
event.preventDefault();
if(!this._keySliding){
this._keySliding=true;
this._addClass($(event.target), null, "ui-state-active");
allowed=this._start(event, index);
if(allowed===false){
return;
}}
break;
}
step=this.options.step;
if(this._hasMultipleValues()){
curVal=newVal=this.values(index);
}else{
curVal=newVal=this.value();
}
switch(event.keyCode){
case $.ui.keyCode.HOME:
newVal=this._valueMin();
break;
case $.ui.keyCode.END:
newVal=this._valueMax();
break;
case $.ui.keyCode.PAGE_UP:
newVal=this._trimAlignValue(curVal +(( this._valueMax() - this._valueMin()) / this.numPages)
);
break;
case $.ui.keyCode.PAGE_DOWN:
newVal=this._trimAlignValue(curVal -(( this._valueMax() - this._valueMin()) / this.numPages));
break;
case $.ui.keyCode.UP:
case $.ui.keyCode.RIGHT:
if(curVal===this._valueMax()){
return;
}
newVal=this._trimAlignValue(curVal + step);
break;
case $.ui.keyCode.DOWN:
case $.ui.keyCode.LEFT:
if(curVal===this._valueMin()){
return;
}
newVal=this._trimAlignValue(curVal - step);
break;
}
this._slide(event, index, newVal);
},
keyup: function(event){
var index=$(event.target).data("ui-slider-handle-index");
if(this._keySliding){
this._keySliding=false;
this._stop(event, index);
this._change(event, index);
this._removeClass($(event.target), null, "ui-state-active");
}}
}});
var widgetsSortable=$.widget("ui.sortable", $.ui.mouse, {
version: "1.12.1",
widgetEventPrefix: "sort",
ready: false,
options: {
appendTo: "parent",
axis: false,
connectWith: false,
containment: false,
cursor: "auto",
cursorAt: false,
dropOnEmpty: true,
forcePlaceholderSize: false,
forceHelperSize: false,
grid: false,
handle: false,
helper: "original",
items: "> *",
opacity: false,
placeholder: false,
revert: false,
scroll: true,
scrollSensitivity: 20,
scrollSpeed: 20,
scope: "default",
tolerance: "intersect",
zIndex: 1000,
activate: null,
beforeStop: null,
change: null,
deactivate: null,
out: null,
over: null,
receive: null,
remove: null,
sort: null,
start: null,
stop: null,
update: null
},
_isOverAxis: function(x, reference, size){
return(x >=reference)&&(x <(reference + size));
},
_isFloating: function(item){
return(/left|right/).test(item.css("float")) ||
(/inline|table-cell/).test(item.css("display"));
},
_create: function(){
this.containerCache={};
this._addClass("ui-sortable");
this.refresh();
this.offset=this.element.offset();
this._mouseInit();
this._setHandleClassName();
this.ready=true;
},
_setOption: function(key, value){
this._super(key, value);
if(key==="handle"){
this._setHandleClassName();
}},
_setHandleClassName: function(){
var that=this;
this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle");
$.each(this.items, function(){
that._addClass(this.instance.options.handle ?
this.item.find(this.instance.options.handle) :
this.item,
"ui-sortable-handle"
);
});
},
_destroy: function(){
this._mouseDestroy();
for(var i=this.items.length - 1; i >=0; i--){
this.items[ i ].item.removeData(this.widgetName + "-item");
}
return this;
},
_mouseCapture: function(event, overrideHandle){
var currentItem=null,
validHandle=false,
that=this;
if(this.reverting){
return false;
}
if(this.options.disabled||this.options.type==="static"){
return false;
}
this._refreshItems(event);
$(event.target).parents().each(function(){
if($.data(this, that.widgetName + "-item")===that){
currentItem=$(this);
return false;
}});
if($.data(event.target, that.widgetName + "-item")===that){
currentItem=$(event.target);
}
if(!currentItem){
return false;
}
if(this.options.handle&&!overrideHandle){
$(this.options.handle, currentItem).find("*").addBack().each(function(){
if(this===event.target){
validHandle=true;
}});
if(!validHandle){
return false;
}}
this.currentItem=currentItem;
this._removeCurrentsFromItems();
return true;
},
_mouseStart: function(event, overrideHandle, noActivation){
var i, body,
o=this.options;
this.currentContainer=this;
this.refreshPositions();
this.helper=this._createHelper(event);
this._cacheHelperProportions();
this._cacheMargins();
this.scrollParent=this.helper.scrollParent();
this.offset=this.currentItem.offset();
this.offset={
top: this.offset.top - this.margins.top,
left: this.offset.left - this.margins.left
};
$.extend(this.offset, {
click: {
left: event.pageX - this.offset.left,
top: event.pageY - this.offset.top
},
parent: this._getParentOffset(),
relative: this._getRelativeOffset()
});
this.helper.css("position", "absolute");
this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(event);
this.originalPageX=event.pageX;
this.originalPageY=event.pageY;
(o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt));
this.domPosition={
prev: this.currentItem.prev()[ 0 ],
parent: this.currentItem.parent()[ 0 ]
};
if(this.helper[ 0 ]!==this.currentItem[ 0 ]){
this.currentItem.hide();
}
this._createPlaceholder();
if(o.containment){
this._setContainment();
}
if(o.cursor&&o.cursor!=="auto"){
body=this.document.find("body");
this.storedCursor=body.css("cursor");
body.css("cursor", o.cursor);
this.storedStylesheet =
$("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(body);
}
if(o.opacity){
if(this.helper.css("opacity")){
this._storedOpacity=this.helper.css("opacity");
}
this.helper.css("opacity", o.opacity);
}
if(o.zIndex){
if(this.helper.css("zIndex")){
this._storedZIndex=this.helper.css("zIndex");
}
this.helper.css("zIndex", o.zIndex);
}
if(this.scrollParent[ 0 ]!==this.document[ 0 ] &&
this.scrollParent[ 0 ].tagName!=="HTML"){
this.overflowOffset=this.scrollParent.offset();
}
this._trigger("start", event, this._uiHash());
if(!this._preserveHelperProportions){
this._cacheHelperProportions();
}
if(!noActivation){
for(i=this.containers.length - 1; i >=0; i--){
this.containers[ i ]._trigger("activate", event, this._uiHash(this));
}}
if($.ui.ddmanager){
$.ui.ddmanager.current=this;
}
if($.ui.ddmanager&&!o.dropBehaviour){
$.ui.ddmanager.prepareOffsets(this, event);
}
this.dragging=true;
this._addClass(this.helper, "ui-sortable-helper");
this._mouseDrag(event);
return true;
},
_mouseDrag: function(event){
var i, item, itemElement, intersection,
o=this.options,
scrolled=false;
this.position=this._generatePosition(event);
this.positionAbs=this._convertPositionTo("absolute");
if(!this.lastPositionAbs){
this.lastPositionAbs=this.positionAbs;
}
if(this.options.scroll){
if(this.scrollParent[ 0 ]!==this.document[ 0 ] &&
this.scrollParent[ 0 ].tagName!=="HTML"){
if(( this.overflowOffset.top + this.scrollParent[ 0 ].offsetHeight) -
event.pageY < o.scrollSensitivity){
this.scrollParent[ 0 ].scrollTop =
scrolled=this.scrollParent[ 0 ].scrollTop + o.scrollSpeed;
}else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity){
this.scrollParent[ 0 ].scrollTop =
scrolled=this.scrollParent[ 0 ].scrollTop - o.scrollSpeed;
}
if(( this.overflowOffset.left + this.scrollParent[ 0 ].offsetWidth) -
event.pageX < o.scrollSensitivity){
this.scrollParent[ 0 ].scrollLeft=scrolled =
this.scrollParent[ 0 ].scrollLeft + o.scrollSpeed;
}else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity){
this.scrollParent[ 0 ].scrollLeft=scrolled =
this.scrollParent[ 0 ].scrollLeft - o.scrollSpeed;
}}else{
if(event.pageY - this.document.scrollTop() < o.scrollSensitivity){
scrolled=this.document.scrollTop(this.document.scrollTop() - o.scrollSpeed);
}else if(this.window.height() -(event.pageY - this.document.scrollTop()) <
o.scrollSensitivity){
scrolled=this.document.scrollTop(this.document.scrollTop() + o.scrollSpeed);
}
if(event.pageX - this.document.scrollLeft() < o.scrollSensitivity){
scrolled=this.document.scrollLeft(this.document.scrollLeft() - o.scrollSpeed
);
}else if(this.window.width() -(event.pageX - this.document.scrollLeft()) <
o.scrollSensitivity){
scrolled=this.document.scrollLeft(this.document.scrollLeft() + o.scrollSpeed
);
}}
if(scrolled!==false&&$.ui.ddmanager&&!o.dropBehaviour){
$.ui.ddmanager.prepareOffsets(this, event);
}}
this.positionAbs=this._convertPositionTo("absolute");
if(!this.options.axis||this.options.axis!=="y"){
this.helper[ 0 ].style.left=this.position.left + "px";
}
if(!this.options.axis||this.options.axis!=="x"){
this.helper[ 0 ].style.top=this.position.top + "px";
}
for(i=this.items.length - 1; i >=0; i--){
item=this.items[ i ];
itemElement=item.item[ 0 ];
intersection=this._intersectsWithPointer(item);
if(!intersection){
continue;
}
if(item.instance!==this.currentContainer){
continue;
}
if(itemElement!==this.currentItem[ 0 ] &&
this.placeholder[ intersection===1 ? "next":"prev" ]()[ 0 ]!==itemElement &&
!$.contains(this.placeholder[ 0 ], itemElement) &&
(this.options.type==="semi-dynamic" ?
!$.contains(this.element[ 0 ], itemElement) :
true
)
){
this.direction=intersection===1 ? "down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(item)){
this._rearrange(event, item);
}else{
break;
}
this._trigger("change", event, this._uiHash());
break;
}}
this._contactContainers(event);
if($.ui.ddmanager){
$.ui.ddmanager.drag(this, event);
}
this._trigger("sort", event, this._uiHash());
this.lastPositionAbs=this.positionAbs;
return false;
},
_mouseStop: function(event, noPropagation){
if(!event){
return;
}
if($.ui.ddmanager&&!this.options.dropBehaviour){
$.ui.ddmanager.drop(this, event);
}
if(this.options.revert){
var that=this,
cur=this.placeholder.offset(),
axis=this.options.axis,
animation={};
if(!axis||axis==="x"){
animation.left=cur.left - this.offset.parent.left - this.margins.left +
(this.offsetParent[ 0 ]===this.document[ 0 ].body ?
0 :
this.offsetParent[ 0 ].scrollLeft
);
}
if(!axis||axis==="y"){
animation.top=cur.top - this.offset.parent.top - this.margins.top +
(this.offsetParent[ 0 ]===this.document[ 0 ].body ?
0 :
this.offsetParent[ 0 ].scrollTop
);
}
this.reverting=true;
$(this.helper).animate(animation,
parseInt(this.options.revert, 10)||500,
function(){
that._clear(event);
}
);
}else{
this._clear(event, noPropagation);
}
return false;
},
cancel: function(){
if(this.dragging){
this._mouseUp(new $.Event("mouseup", { target: null }));
if(this.options.helper==="original"){
this.currentItem.css(this._storedCSS);
this._removeClass(this.currentItem, "ui-sortable-helper");
}else{
this.currentItem.show();
}
for(var i=this.containers.length - 1; i >=0; i--){
this.containers[ i ]._trigger("deactivate", null, this._uiHash(this));
if(this.containers[ i ].containerCache.over){
this.containers[ i ]._trigger("out", null, this._uiHash(this));
this.containers[ i ].containerCache.over=0;
}}
}
if(this.placeholder){
if(this.placeholder[ 0 ].parentNode){
this.placeholder[ 0 ].parentNode.removeChild(this.placeholder[ 0 ]);
}
if(this.options.helper!=="original"&&this.helper &&
this.helper[ 0 ].parentNode){
this.helper.remove();
}
$.extend(this, {
helper: null,
dragging: false,
reverting: false,
_noFinalSort: null
});
if(this.domPosition.prev){
$(this.domPosition.prev).after(this.currentItem);
}else{
$(this.domPosition.parent).prepend(this.currentItem);
}}
return this;
},
serialize: function(o){
var items=this._getItemsAsjQuery(o&&o.connected),
str=[];
o=o||{};
$(items).each(function(){
var res=($(o.item||this).attr(o.attribute||"id")||"")
.match(o.expression||(/(.+)[\-=_](.+)/));
if(res){
str.push((o.key||res[ 1 ] + "[]") +
"=" +(o.key&&o.expression ? res[ 1 ]:res[ 2 ]));
}});
if(!str.length&&o.key){
str.push(o.key + "=");
}
return str.join("&");
},
toArray: function(o){
var items=this._getItemsAsjQuery(o&&o.connected),
ret=[];
o=o||{};
items.each(function(){
ret.push($(o.item||this).attr(o.attribute||"id")||"");
});
return ret;
},
_intersectsWith: function(item){
var x1=this.positionAbs.left,
x2=x1 + this.helperProportions.width,
y1=this.positionAbs.top,
y2=y1 + this.helperProportions.height,
l=item.left,
r=l + item.width,
t=item.top,
b=t + item.height,
dyClick=this.offset.click.top,
dxClick=this.offset.click.left,
isOverElementHeight=(this.options.axis==="x")||(( y1 + dyClick) > t &&
(y1 + dyClick) < b),
isOverElementWidth=(this.options.axis==="y")||(( x1 + dxClick) > l &&
(x1 + dxClick) < r),
isOverElement=isOverElementHeight&&isOverElementWidth;
if(this.options.tolerance==="pointer" ||
this.options.forcePointerForContainers ||
(this.options.tolerance!=="pointer" &&
this.helperProportions[ this.floating ? "width":"height" ] >
item[ this.floating ? "width":"height" ])
){
return isOverElement;
}else{
return(l < x1 +(this.helperProportions.width / 2) &&
x2 -(this.helperProportions.width / 2) < r &&
t < y1 +(this.helperProportions.height / 2) &&
y2 -(this.helperProportions.height / 2) < b);
}},
_intersectsWithPointer: function(item){
var verticalDirection, horizontalDirection,
isOverElementHeight=(this.options.axis==="x") ||
this._isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
isOverElementWidth=(this.options.axis==="y") ||
this._isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
isOverElement=isOverElementHeight&&isOverElementWidth;
if(!isOverElement){
return false;
}
verticalDirection=this._getDragVerticalDirection();
horizontalDirection=this._getDragHorizontalDirection();
return this.floating ?
(( horizontalDirection==="right"||verticalDirection==="down") ? 2:1)
:(verticalDirection&&(verticalDirection==="down" ? 2:1));
},
_intersectsWithSides: function(item){
var isOverBottomHalf=this._isOverAxis(this.positionAbs.top +
this.offset.click.top, item.top +(item.height / 2), item.height),
isOverRightHalf=this._isOverAxis(this.positionAbs.left +
this.offset.click.left, item.left +(item.width / 2), item.width),
verticalDirection=this._getDragVerticalDirection(),
horizontalDirection=this._getDragHorizontalDirection();
if(this.floating&&horizontalDirection){
return(( horizontalDirection==="right"&&isOverRightHalf) ||
(horizontalDirection==="left"&&!isOverRightHalf));
}else{
return verticalDirection&&(( verticalDirection==="down"&&isOverBottomHalf) ||
(verticalDirection==="up"&&!isOverBottomHalf));
}},
_getDragVerticalDirection: function(){
var delta=this.positionAbs.top - this.lastPositionAbs.top;
return delta!==0&&(delta > 0 ? "down":"up");
},
_getDragHorizontalDirection: function(){
var delta=this.positionAbs.left - this.lastPositionAbs.left;
return delta!==0&&(delta > 0 ? "right":"left");
},
refresh: function(event){
this._refreshItems(event);
this._setHandleClassName();
this.refreshPositions();
return this;
},
_connectWith: function(){
var options=this.options;
return options.connectWith.constructor===String ?
[ options.connectWith ] :
options.connectWith;
},
_getItemsAsjQuery: function(connected){
var i, j, cur, inst,
items=[],
queries=[],
connectWith=this._connectWith();
if(connectWith&&connected){
for(i=connectWith.length - 1; i >=0; i--){
cur=$(connectWith[ i ], this.document[ 0 ]);
for(j=cur.length - 1; j >=0; j--){
inst=$.data(cur[ j ], this.widgetFullName);
if(inst&&inst!==this&&!inst.options.disabled){
queries.push([ $.isFunction(inst.options.items) ?
inst.options.items.call(inst.element) :
$(inst.options.items, inst.element)
.not(".ui-sortable-helper")
.not(".ui-sortable-placeholder"), inst ]);
}}
}}
queries.push([ $.isFunction(this.options.items) ?
this.options.items
.call(this.element, null, { options: this.options, item: this.currentItem }) :
$(this.options.items, this.element)
.not(".ui-sortable-helper")
.not(".ui-sortable-placeholder"), this ]);
function addItems(){
items.push(this);
}
for(i=queries.length - 1; i >=0; i--){
queries[ i ][ 0 ].each(addItems);
}
return $(items);
},
_removeCurrentsFromItems: function(){
var list=this.currentItem.find(":data(" + this.widgetName + "-item)");
this.items=$.grep(this.items, function(item){
for(var j=0; j < list.length; j++){
if(list[ j ]===item.item[ 0 ]){
return false;
}}
return true;
});
},
_refreshItems: function(event){
this.items=[];
this.containers=[ this ];
var i, j, cur, inst, targetData, _queries, item, queriesLength,
items=this.items,
queries=[ [ $.isFunction(this.options.items) ?
this.options.items.call(this.element[ 0 ], event, { item: this.currentItem }) :
$(this.options.items, this.element), this ] ],
connectWith=this._connectWith();
if(connectWith&&this.ready){
for(i=connectWith.length - 1; i >=0; i--){
cur=$(connectWith[ i ], this.document[ 0 ]);
for(j=cur.length - 1; j >=0; j--){
inst=$.data(cur[ j ], this.widgetFullName);
if(inst&&inst!==this&&!inst.options.disabled){
queries.push([ $.isFunction(inst.options.items) ?
inst.options.items
.call(inst.element[ 0 ], event, { item: this.currentItem }) :
$(inst.options.items, inst.element), inst ]);
this.containers.push(inst);
}}
}}
for(i=queries.length - 1; i >=0; i--){
targetData=queries[ i ][ 1 ];
_queries=queries[ i ][ 0 ];
for(j=0, queriesLength=_queries.length; j < queriesLength; j++){
item=$(_queries[ j ]);
item.data(this.widgetName + "-item", targetData);
items.push({
item: item,
instance: targetData,
width: 0, height: 0,
left: 0, top: 0
});
}}
},
refreshPositions: function(fast){
this.floating=this.items.length ?
this.options.axis==="x"||this._isFloating(this.items[ 0 ].item) :
false;
if(this.offsetParent&&this.helper){
this.offset.parent=this._getParentOffset();
}
var i, item, t, p;
for(i=this.items.length - 1; i >=0; i--){
item=this.items[ i ];
if(item.instance!==this.currentContainer&&this.currentContainer &&
item.item[ 0 ]!==this.currentItem[ 0 ]){
continue;
}
t=this.options.toleranceElement ?
$(this.options.toleranceElement, item.item) :
item.item;
if(!fast){
item.width=t.outerWidth();
item.height=t.outerHeight();
}
p=t.offset();
item.left=p.left;
item.top=p.top;
}
if(this.options.custom&&this.options.custom.refreshContainers){
this.options.custom.refreshContainers.call(this);
}else{
for(i=this.containers.length - 1; i >=0; i--){
p=this.containers[ i ].element.offset();
this.containers[ i ].containerCache.left=p.left;
this.containers[ i ].containerCache.top=p.top;
this.containers[ i ].containerCache.width =
this.containers[ i ].element.outerWidth();
this.containers[ i ].containerCache.height =
this.containers[ i ].element.outerHeight();
}}
return this;
},
_createPlaceholder: function(that){
that=that||this;
var className,
o=that.options;
if(!o.placeholder||o.placeholder.constructor===String){
className=o.placeholder;
o.placeholder={
element: function(){
var nodeName=that.currentItem[ 0 ].nodeName.toLowerCase(),
element=$("<" + nodeName + ">", that.document[ 0 ]);
that._addClass(element, "ui-sortable-placeholder",
className||that.currentItem[ 0 ].className)
._removeClass(element, "ui-sortable-helper");
if(nodeName==="tbody"){
that._createTrPlaceholder(that.currentItem.find("tr").eq(0),
$("<tr>", that.document[ 0 ]).appendTo(element)
);
}else if(nodeName==="tr"){
that._createTrPlaceholder(that.currentItem, element);
}else if(nodeName==="img"){
element.attr("src", that.currentItem.attr("src"));
}
if(!className){
element.css("visibility", "hidden");
}
return element;
},
update: function(container, p){
if(className&&!o.forcePlaceholderSize){
return;
}
if(!p.height()){
p.height(that.currentItem.innerHeight() -
parseInt(that.currentItem.css("paddingTop")||0, 10) -
parseInt(that.currentItem.css("paddingBottom")||0, 10));
}
if(!p.width()){
p.width(that.currentItem.innerWidth() -
parseInt(that.currentItem.css("paddingLeft")||0, 10) -
parseInt(that.currentItem.css("paddingRight")||0, 10));
}}
};}
that.placeholder=$(o.placeholder.element.call(that.element, that.currentItem));
that.currentItem.after(that.placeholder);
o.placeholder.update(that, that.placeholder);
},
_createTrPlaceholder: function(sourceTr, targetTr){
var that=this;
sourceTr.children().each(function(){
$("<td>&#160;</td>", that.document[ 0 ])
.attr("colspan", $(this).attr("colspan")||1)
.appendTo(targetTr);
});
},
_contactContainers: function(event){
var i, j, dist, itemWithLeastDistance, posProperty, sizeProperty, cur, nearBottom,
floating, axis,
innermostContainer=null,
innermostIndex=null;
for(i=this.containers.length - 1; i >=0; i--){
if($.contains(this.currentItem[ 0 ], this.containers[ i ].element[ 0 ])){
continue;
}
if(this._intersectsWith(this.containers[ i ].containerCache)){
if(innermostContainer &&
$.contains(this.containers[ i ].element[ 0 ],
innermostContainer.element[ 0 ])){
continue;
}
innermostContainer=this.containers[ i ];
innermostIndex=i;
}else{
if(this.containers[ i ].containerCache.over){
this.containers[ i ]._trigger("out", event, this._uiHash(this));
this.containers[ i ].containerCache.over=0;
}}
}
if(!innermostContainer){
return;
}
if(this.containers.length===1){
if(!this.containers[ innermostIndex ].containerCache.over){
this.containers[ innermostIndex ]._trigger("over", event, this._uiHash(this));
this.containers[ innermostIndex ].containerCache.over=1;
}}else{
dist=10000;
itemWithLeastDistance=null;
floating=innermostContainer.floating||this._isFloating(this.currentItem);
posProperty=floating ? "left":"top";
sizeProperty=floating ? "width":"height";
axis=floating ? "pageX":"pageY";
for(j=this.items.length - 1; j >=0; j--){
if(!$.contains(this.containers[ innermostIndex ].element[ 0 ], this.items[ j ].item[ 0 ])
){
continue;
}
if(this.items[ j ].item[ 0 ]===this.currentItem[ 0 ]){
continue;
}
cur=this.items[ j ].item.offset()[ posProperty ];
nearBottom=false;
if(event[ axis ] - cur > this.items[ j ][ sizeProperty ] / 2){
nearBottom=true;
}
if(Math.abs(event[ axis ] - cur) < dist){
dist=Math.abs(event[ axis ] - cur);
itemWithLeastDistance=this.items[ j ];
this.direction=nearBottom ? "up":"down";
}}
if(!itemWithLeastDistance&&!this.options.dropOnEmpty){
return;
}
if(this.currentContainer===this.containers[ innermostIndex ]){
if(!this.currentContainer.containerCache.over){
this.containers[ innermostIndex ]._trigger("over", event, this._uiHash());
this.currentContainer.containerCache.over=1;
}
return;
}
itemWithLeastDistance ?
this._rearrange(event, itemWithLeastDistance, null, true) :
this._rearrange(event, null, this.containers[ innermostIndex ].element, true);
this._trigger("change", event, this._uiHash());
this.containers[ innermostIndex ]._trigger("change", event, this._uiHash(this));
this.currentContainer=this.containers[ innermostIndex ];
this.options.placeholder.update(this.currentContainer, this.placeholder);
this.containers[ innermostIndex ]._trigger("over", event, this._uiHash(this));
this.containers[ innermostIndex ].containerCache.over=1;
}},
_createHelper: function(event){
var o=this.options,
helper=$.isFunction(o.helper) ?
$(o.helper.apply(this.element[ 0 ], [ event, this.currentItem ])) :
(o.helper==="clone" ? this.currentItem.clone():this.currentItem);
if(!helper.parents("body").length){
$(o.appendTo!=="parent" ?
o.appendTo :
this.currentItem[ 0 ].parentNode)[ 0 ].appendChild(helper[ 0 ]);
}
if(helper[ 0 ]===this.currentItem[ 0 ]){
this._storedCSS={
width: this.currentItem[ 0 ].style.width,
height: this.currentItem[ 0 ].style.height,
position: this.currentItem.css("position"),
top: this.currentItem.css("top"),
left: this.currentItem.css("left")
};}
if(!helper[ 0 ].style.width||o.forceHelperSize){
helper.width(this.currentItem.width());
}
if(!helper[ 0 ].style.height||o.forceHelperSize){
helper.height(this.currentItem.height());
}
return helper;
},
_adjustOffsetFromHelper: function(obj){
if(typeof obj==="string"){
obj=obj.split(" ");
}
if($.isArray(obj)){
obj={ left: +obj[ 0 ], top: +obj[ 1 ]||0 };}
if("left" in obj){
this.offset.click.left=obj.left + this.margins.left;
}
if("right" in obj){
this.offset.click.left=this.helperProportions.width - obj.right + this.margins.left;
}
if("top" in obj){
this.offset.click.top=obj.top + this.margins.top;
}
if("bottom" in obj){
this.offset.click.top=this.helperProportions.height - obj.bottom + this.margins.top;
}},
_getParentOffset: function(){
this.offsetParent=this.helper.offsetParent();
var po=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[ 0 ]!==this.document[ 0 ] &&
$.contains(this.scrollParent[ 0 ], this.offsetParent[ 0 ])){
po.left +=this.scrollParent.scrollLeft();
po.top +=this.scrollParent.scrollTop();
}
if(this.offsetParent[ 0 ]===this.document[ 0 ].body ||
(this.offsetParent[ 0 ].tagName &&
this.offsetParent[ 0 ].tagName.toLowerCase()==="html"&&$.ui.ie)){
po={ top: 0, left: 0 };}
return {
top: po.top +(parseInt(this.offsetParent.css("borderTopWidth"), 10)||0),
left: po.left +(parseInt(this.offsetParent.css("borderLeftWidth"), 10)||0)
};},
_getRelativeOffset: function(){
if(this.cssPosition==="relative"){
var p=this.currentItem.position();
return {
top: p.top -(parseInt(this.helper.css("top"), 10)||0) +
this.scrollParent.scrollTop(),
left: p.left -(parseInt(this.helper.css("left"), 10)||0) +
this.scrollParent.scrollLeft()
};}else{
return { top: 0, left: 0 };}},
_cacheMargins: function(){
this.margins={
left:(parseInt(this.currentItem.css("marginLeft"), 10)||0),
top:(parseInt(this.currentItem.css("marginTop"), 10)||0)
};},
_cacheHelperProportions: function(){
this.helperProportions={
width: this.helper.outerWidth(),
height: this.helper.outerHeight()
};},
_setContainment: function(){
var ce, co, over,
o=this.options;
if(o.containment==="parent"){
o.containment=this.helper[ 0 ].parentNode;
}
if(o.containment==="document"||o.containment==="window"){
this.containment=[
0 - this.offset.relative.left - this.offset.parent.left,
0 - this.offset.relative.top - this.offset.parent.top,
o.containment==="document" ?
this.document.width() :
this.window.width() - this.helperProportions.width - this.margins.left,
(o.containment==="document" ?
(this.document.height()||document.body.parentNode.scrollHeight) :
this.window.height()||this.document[ 0 ].body.parentNode.scrollHeight
) - this.helperProportions.height - this.margins.top
];
}
if(!(/^(document|window|parent)$/).test(o.containment)){
ce=$(o.containment)[ 0 ];
co=$(o.containment).offset();
over=($(ce).css("overflow")!=="hidden");
this.containment=[
co.left +(parseInt($(ce).css("borderLeftWidth"), 10)||0) +
(parseInt($(ce).css("paddingLeft"), 10)||0) - this.margins.left,
co.top +(parseInt($(ce).css("borderTopWidth"), 10)||0) +
(parseInt($(ce).css("paddingTop"), 10)||0) - this.margins.top,
co.left +(over ? Math.max(ce.scrollWidth, ce.offsetWidth):ce.offsetWidth) -
(parseInt($(ce).css("borderLeftWidth"), 10)||0) -
(parseInt($(ce).css("paddingRight"), 10)||0) -
this.helperProportions.width - this.margins.left,
co.top +(over ? Math.max(ce.scrollHeight, ce.offsetHeight):ce.offsetHeight) -
(parseInt($(ce).css("borderTopWidth"), 10)||0) -
(parseInt($(ce).css("paddingBottom"), 10)||0) -
this.helperProportions.height - this.margins.top
];
}},
_convertPositionTo: function(d, pos){
if(!pos){
pos=this.position;
}
var mod=d==="absolute" ? 1:-1,
scroll=this.cssPosition==="absolute" &&
!(this.scrollParent[ 0 ]!==this.document[ 0 ] &&
$.contains(this.scrollParent[ 0 ], this.offsetParent[ 0 ])) ?
this.offsetParent :
this.scrollParent,
scrollIsRootNode=(/(html|body)/i).test(scroll[ 0 ].tagName);
return {
top: (
pos.top	+
this.offset.relative.top * mod +
this.offset.parent.top * mod -
(( this.cssPosition==="fixed" ?
-this.scrollParent.scrollTop() :
(scrollIsRootNode ? 0:scroll.scrollTop())) * mod)
),
left: (
pos.left +
this.offset.relative.left * mod +
this.offset.parent.left * mod	-
(( this.cssPosition==="fixed" ?
-this.scrollParent.scrollLeft():scrollIsRootNode ? 0 :
scroll.scrollLeft()) * mod)
)
};},
_generatePosition: function(event){
var top, left,
o=this.options,
pageX=event.pageX,
pageY=event.pageY,
scroll=this.cssPosition==="absolute" &&
!(this.scrollParent[ 0 ]!==this.document[ 0 ] &&
$.contains(this.scrollParent[ 0 ], this.offsetParent[ 0 ])) ?
this.offsetParent :
this.scrollParent,
scrollIsRootNode=(/(html|body)/i).test(scroll[ 0 ].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[ 0 ]!==this.document[ 0 ] &&
this.scrollParent[ 0 ]!==this.offsetParent[ 0 ])){
this.offset.relative=this._getRelativeOffset();
}
if(this.originalPosition){
if(this.containment){
if(event.pageX - this.offset.click.left < this.containment[ 0 ]){
pageX=this.containment[ 0 ] + this.offset.click.left;
}
if(event.pageY - this.offset.click.top < this.containment[ 1 ]){
pageY=this.containment[ 1 ] + this.offset.click.top;
}
if(event.pageX - this.offset.click.left > this.containment[ 2 ]){
pageX=this.containment[ 2 ] + this.offset.click.left;
}
if(event.pageY - this.offset.click.top > this.containment[ 3 ]){
pageY=this.containment[ 3 ] + this.offset.click.top;
}}
if(o.grid){
top=this.originalPageY + Math.round(( pageY - this.originalPageY) /
o.grid[ 1 ]) * o.grid[ 1 ];
pageY=this.containment ?
(( top - this.offset.click.top >=this.containment[ 1 ] &&
top - this.offset.click.top <=this.containment[ 3 ]) ?
top :
(( top - this.offset.click.top >=this.containment[ 1 ]) ?
top - o.grid[ 1 ]:top + o.grid[ 1 ])) :
top;
left=this.originalPageX + Math.round(( pageX - this.originalPageX) /
o.grid[ 0 ]) * o.grid[ 0 ];
pageX=this.containment ?
(( left - this.offset.click.left >=this.containment[ 0 ] &&
left - this.offset.click.left <=this.containment[ 2 ]) ?
left :
(( left - this.offset.click.left >=this.containment[ 0 ]) ?
left - o.grid[ 0 ]:left + o.grid[ 0 ])) :
left;
}}
return {
top: (
pageY -
this.offset.click.top -
this.offset.relative.top -
this.offset.parent.top +
(( this.cssPosition==="fixed" ?
-this.scrollParent.scrollTop() :
(scrollIsRootNode ? 0:scroll.scrollTop())))
),
left: (
pageX -
this.offset.click.left -
this.offset.relative.left -
this.offset.parent.left +
(( this.cssPosition==="fixed" ?
-this.scrollParent.scrollLeft() :
scrollIsRootNode ? 0:scroll.scrollLeft()))
)
};},
_rearrange: function(event, i, a, hardRefresh){
a ? a[ 0 ].appendChild(this.placeholder[ 0 ]) :
i.item[ 0 ].parentNode.insertBefore(this.placeholder[ 0 ],
(this.direction==="down" ? i.item[ 0 ]:i.item[ 0 ].nextSibling));
this.counter=this.counter ? ++this.counter:1;
var counter=this.counter;
this._delay(function(){
if(counter===this.counter){
this.refreshPositions(!hardRefresh);
}});
},
_clear: function(event, noPropagation){
this.reverting=false;
var i,
delayedTriggers=[];
if(!this._noFinalSort&&this.currentItem.parent().length){
this.placeholder.before(this.currentItem);
}
this._noFinalSort=null;
if(this.helper[ 0 ]===this.currentItem[ 0 ]){
for(i in this._storedCSS){
if(this._storedCSS[ i ]==="auto"||this._storedCSS[ i ]==="static"){
this._storedCSS[ i ]="";
}}
this.currentItem.css(this._storedCSS);
this._removeClass(this.currentItem, "ui-sortable-helper");
}else{
this.currentItem.show();
}
if(this.fromOutside&&!noPropagation){
delayedTriggers.push(function(event){
this._trigger("receive", event, this._uiHash(this.fromOutside));
});
}
if(( this.fromOutside ||
this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[ 0 ] ||
this.domPosition.parent!==this.currentItem.parent()[ 0 ])&&!noPropagation){
delayedTriggers.push(function(event){
this._trigger("update", event, this._uiHash());
});
}
if(this!==this.currentContainer){
if(!noPropagation){
delayedTriggers.push(function(event){
this._trigger("remove", event, this._uiHash());
});
delayedTriggers.push(( function(c){
return function(event){
c._trigger("receive", event, this._uiHash(this));
};}).call(this, this.currentContainer));
delayedTriggers.push(( function(c){
return function(event){
c._trigger("update", event, this._uiHash(this));
};}).call(this, this.currentContainer));
}}
function delayEvent(type, instance, container){
return function(event){
container._trigger(type, event, instance._uiHash(instance));
};}
for(i=this.containers.length - 1; i >=0; i--){
if(!noPropagation){
delayedTriggers.push(delayEvent("deactivate", this, this.containers[ i ]));
}
if(this.containers[ i ].containerCache.over){
delayedTriggers.push(delayEvent("out", this, this.containers[ i ]));
this.containers[ i ].containerCache.over=0;
}}
if(this.storedCursor){
this.document.find("body").css("cursor", this.storedCursor);
this.storedStylesheet.remove();
}
if(this._storedOpacity){
this.helper.css("opacity", this._storedOpacity);
}
if(this._storedZIndex){
this.helper.css("zIndex", this._storedZIndex==="auto" ? "":this._storedZIndex);
}
this.dragging=false;
if(!noPropagation){
this._trigger("beforeStop", event, this._uiHash());
}
this.placeholder[ 0 ].parentNode.removeChild(this.placeholder[ 0 ]);
if(!this.cancelHelperRemoval){
if(this.helper[ 0 ]!==this.currentItem[ 0 ]){
this.helper.remove();
}
this.helper=null;
}
if(!noPropagation){
for(i=0; i < delayedTriggers.length; i++){
delayedTriggers[ i ].call(this, event);
}
this._trigger("stop", event, this._uiHash());
}
this.fromOutside=false;
return !this.cancelHelperRemoval;
},
_trigger: function(){
if($.Widget.prototype._trigger.apply(this, arguments)===false){
this.cancel();
}},
_uiHash: function(_inst){
var inst=_inst||this;
return {
helper: inst.helper,
placeholder: inst.placeholder||$([]),
position: inst.position,
originalPosition: inst.originalPosition,
offset: inst.positionAbs,
item: inst.currentItem,
sender: _inst ? _inst.element:null
};}});
function spinnerModifer(fn){
return function(){
var previous=this.element.val();
fn.apply(this, arguments);
this._refresh();
if(previous!==this.element.val()){
this._trigger("change");
}};}
$.widget("ui.spinner", {
version: "1.12.1",
defaultElement: "<input>",
widgetEventPrefix: "spin",
options: {
classes: {
"ui-spinner": "ui-corner-all",
"ui-spinner-down": "ui-corner-br",
"ui-spinner-up": "ui-corner-tr"
},
culture: null,
icons: {
down: "ui-icon-triangle-1-s",
up: "ui-icon-triangle-1-n"
},
incremental: true,
max: null,
min: null,
numberFormat: null,
page: 10,
step: 1,
change: null,
spin: null,
start: null,
stop: null
},
_create: function(){
this._setOption("max", this.options.max);
this._setOption("min", this.options.min);
this._setOption("step", this.options.step);
if(this.value()!==""){
this._value(this.element.val(), true);
}
this._draw();
this._on(this._events);
this._refresh();
this._on(this.window, {
beforeunload: function(){
this.element.removeAttr("autocomplete");
}});
},
_getCreateOptions: function(){
var options=this._super();
var element=this.element;
$.each([ "min", "max", "step" ], function(i, option){
var value=element.attr(option);
if(value!=null&&value.length){
options[ option ]=value;
}});
return options;
},
_events: {
keydown: function(event){
if(this._start(event)&&this._keydown(event)){
event.preventDefault();
}},
keyup: "_stop",
focus: function(){
this.previous=this.element.val();
},
blur: function(event){
if(this.cancelBlur){
delete this.cancelBlur;
return;
}
this._stop();
this._refresh();
if(this.previous!==this.element.val()){
this._trigger("change", event);
}},
mousewheel: function(event, delta){
if(!delta){
return;
}
if(!this.spinning&&!this._start(event)){
return false;
}
this._spin(( delta > 0 ? 1:-1) * this.options.step, event);
clearTimeout(this.mousewheelTimer);
this.mousewheelTimer=this._delay(function(){
if(this.spinning){
this._stop(event);
}}, 100);
event.preventDefault();
},
"mousedown .ui-spinner-button": function(event){
var previous;
previous=this.element[ 0 ]===$.ui.safeActiveElement(this.document[ 0 ]) ?
this.previous:this.element.val();
function checkFocus(){
var isActive=this.element[ 0 ]===$.ui.safeActiveElement(this.document[ 0 ]);
if(!isActive){
this.element.trigger("focus");
this.previous=previous;
this._delay(function(){
this.previous=previous;
});
}}
event.preventDefault();
checkFocus.call(this);
this.cancelBlur=true;
this._delay(function(){
delete this.cancelBlur;
checkFocus.call(this);
});
if(this._start(event)===false){
return;
}
this._repeat(null, $(event.currentTarget)
.hasClass("ui-spinner-up") ? 1:-1, event);
},
"mouseup .ui-spinner-button": "_stop",
"mouseenter .ui-spinner-button": function(event){
if(!$(event.currentTarget).hasClass("ui-state-active")){
return;
}
if(this._start(event)===false){
return false;
}
this._repeat(null, $(event.currentTarget)
.hasClass("ui-spinner-up") ? 1:-1, event);
},
"mouseleave .ui-spinner-button": "_stop"
},
_enhance: function(){
this.uiSpinner=this.element
.attr("autocomplete", "off")
.wrap("<span>")
.parent()
.append("<a></a><a></a>"
);
},
_draw: function(){
this._enhance();
this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content");
this._addClass("ui-spinner-input");
this.element.attr("role", "spinbutton");
this.buttons=this.uiSpinner.children("a")
.attr("tabIndex", -1)
.attr("aria-hidden", true)
.button({
classes: {
"ui-button": ""
}});
this._removeClass(this.buttons, "ui-corner-all");
this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up");
this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down");
this.buttons.first().button({
"icon": this.options.icons.up,
"showLabel": false
});
this.buttons.last().button({
"icon": this.options.icons.down,
"showLabel": false
});
if(this.buttons.height() > Math.ceil(this.uiSpinner.height() * 0.5) &&
this.uiSpinner.height() > 0){
this.uiSpinner.height(this.uiSpinner.height());
}},
_keydown: function(event){
var options=this.options,
keyCode=$.ui.keyCode;
switch(event.keyCode){
case keyCode.UP:
this._repeat(null, 1, event);
return true;
case keyCode.DOWN:
this._repeat(null, -1, event);
return true;
case keyCode.PAGE_UP:
this._repeat(null, options.page, event);
return true;
case keyCode.PAGE_DOWN:
this._repeat(null, -options.page, event);
return true;
}
return false;
},
_start: function(event){
if(!this.spinning&&this._trigger("start", event)===false){
return false;
}
if(!this.counter){
this.counter=1;
}
this.spinning=true;
return true;
},
_repeat: function(i, steps, event){
i=i||500;
clearTimeout(this.timer);
this.timer=this._delay(function(){
this._repeat(40, steps, event);
}, i);
this._spin(steps * this.options.step, event);
},
_spin: function(step, event){
var value=this.value()||0;
if(!this.counter){
this.counter=1;
}
value=this._adjustValue(value + step * this._increment(this.counter));
if(!this.spinning||this._trigger("spin", event, { value: value })!==false){
this._value(value);
this.counter++;
}},
_increment: function(i){
var incremental=this.options.incremental;
if(incremental){
return $.isFunction(incremental) ?
incremental(i) :
Math.floor(i * i * i / 50000 - i * i / 500 + 17 * i / 200 + 1);
}
return 1;
},
_precision: function(){
var precision=this._precisionOf(this.options.step);
if(this.options.min!==null){
precision=Math.max(precision, this._precisionOf(this.options.min));
}
return precision;
},
_precisionOf: function(num){
var str=num.toString(),
decimal=str.indexOf(".");
return decimal===-1 ? 0:str.length - decimal - 1;
},
_adjustValue: function(value){
var base, aboveMin,
options=this.options;
base=options.min!==null ? options.min:0;
aboveMin=value - base;
aboveMin=Math.round(aboveMin / options.step) * options.step;
value=base + aboveMin;
value=parseFloat(value.toFixed(this._precision()));
if(options.max!==null&&value > options.max){
return options.max;
}
if(options.min!==null&&value < options.min){
return options.min;
}
return value;
},
_stop: function(event){
if(!this.spinning){
return;
}
clearTimeout(this.timer);
clearTimeout(this.mousewheelTimer);
this.counter=0;
this.spinning=false;
this._trigger("stop", event);
},
_setOption: function(key, value){
var prevValue, first, last;
if(key==="culture"||key==="numberFormat"){
prevValue=this._parse(this.element.val());
this.options[ key ]=value;
this.element.val(this._format(prevValue));
return;
}
if(key==="max"||key==="min"||key==="step"){
if(typeof value==="string"){
value=this._parse(value);
}}
if(key==="icons"){
first=this.buttons.first().find(".ui-icon");
this._removeClass(first, null, this.options.icons.up);
this._addClass(first, null, value.up);
last=this.buttons.last().find(".ui-icon");
this._removeClass(last, null, this.options.icons.down);
this._addClass(last, null, value.down);
}
this._super(key, value);
},
_setOptionDisabled: function(value){
this._super(value);
this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!value);
this.element.prop("disabled", !!value);
this.buttons.button(value ? "disable":"enable");
},
_setOptions: spinnerModifer(function(options){
this._super(options);
}),
_parse: function(val){
if(typeof val==="string"&&val!==""){
val=window.Globalize&&this.options.numberFormat ?
Globalize.parseFloat(val, 10, this.options.culture):+val;
}
return val===""||isNaN(val) ? null:val;
},
_format: function(value){
if(value===""){
return "";
}
return window.Globalize&&this.options.numberFormat ?
Globalize.format(value, this.options.numberFormat, this.options.culture) :
value;
},
_refresh: function(){
this.element.attr({
"aria-valuemin": this.options.min,
"aria-valuemax": this.options.max,
"aria-valuenow": this._parse(this.element.val())
});
},
isValid: function(){
var value=this.value();
if(value===null){
return false;
}
return value===this._adjustValue(value);
},
_value: function(value, allowAny){
var parsed;
if(value!==""){
parsed=this._parse(value);
if(parsed!==null){
if(!allowAny){
parsed=this._adjustValue(parsed);
}
value=this._format(parsed);
}}
this.element.val(value);
this._refresh();
},
_destroy: function(){
this.element
.prop("disabled", false)
.removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow");
this.uiSpinner.replaceWith(this.element);
},
stepUp: spinnerModifer(function(steps){
this._stepUp(steps);
}),
_stepUp: function(steps){
if(this._start()){
this._spin(( steps||1) * this.options.step);
this._stop();
}},
stepDown: spinnerModifer(function(steps){
this._stepDown(steps);
}),
_stepDown: function(steps){
if(this._start()){
this._spin(( steps||1) * -this.options.step);
this._stop();
}},
pageUp: spinnerModifer(function(pages){
this._stepUp(( pages||1) * this.options.page);
}),
pageDown: spinnerModifer(function(pages){
this._stepDown(( pages||1) * this.options.page);
}),
value: function(newVal){
if(!arguments.length){
return this._parse(this.element.val());
}
spinnerModifer(this._value).call(this, newVal);
},
widget: function(){
return this.uiSpinner;
}});
if($.uiBackCompat!==false){
$.widget("ui.spinner", $.ui.spinner, {
_enhance: function(){
this.uiSpinner=this.element
.attr("autocomplete", "off")
.wrap(this._uiSpinnerHtml())
.parent()
.append(this._buttonHtml());
},
_uiSpinnerHtml: function(){
return "<span>";
},
_buttonHtml: function(){
return "<a></a><a></a>";
}});
}
var widgetsSpinner=$.ui.spinner;
$.widget("ui.tabs", {
version: "1.12.1",
delay: 300,
options: {
active: null,
classes: {
"ui-tabs": "ui-corner-all",
"ui-tabs-nav": "ui-corner-all",
"ui-tabs-panel": "ui-corner-bottom",
"ui-tabs-tab": "ui-corner-top"
},
collapsible: false,
event: "click",
heightStyle: "content",
hide: null,
show: null,
activate: null,
beforeActivate: null,
beforeLoad: null,
load: null
},
_isLocal:(function(){
var rhash=/#.*$/;
return function(anchor){
var anchorUrl, locationUrl;
anchorUrl=anchor.href.replace(rhash, "");
locationUrl=location.href.replace(rhash, "");
try {
anchorUrl=decodeURIComponent(anchorUrl);
} catch(error){}
try {
locationUrl=decodeURIComponent(locationUrl);
} catch(error){}
return anchor.hash.length > 1&&anchorUrl===locationUrl;
};})(),
_create: function(){
var that=this,
options=this.options;
this.running=false;
this._addClass("ui-tabs", "ui-widget ui-widget-content");
this._toggleClass("ui-tabs-collapsible", null, options.collapsible);
this._processTabs();
options.active=this._initialActive();
if($.isArray(options.disabled)){
options.disabled=$.unique(options.disabled.concat($.map(this.tabs.filter(".ui-state-disabled"), function(li){
return that.tabs.index(li);
})
)).sort();
}
if(this.options.active!==false&&this.anchors.length){
this.active=this._findActive(options.active);
}else{
this.active=$();
}
this._refresh();
if(this.active.length){
this.load(options.active);
}},
_initialActive: function(){
var active=this.options.active,
collapsible=this.options.collapsible,
locationHash=location.hash.substring(1);
if(active===null){
if(locationHash){
this.tabs.each(function(i, tab){
if($(tab).attr("aria-controls")===locationHash){
active=i;
return false;
}});
}
if(active===null){
active=this.tabs.index(this.tabs.filter(".ui-tabs-active"));
}
if(active===null||active===-1){
active=this.tabs.length ? 0:false;
}}
if(active!==false){
active=this.tabs.index(this.tabs.eq(active));
if(active===-1){
active=collapsible ? false:0;
}}
if(!collapsible&&active===false&&this.anchors.length){
active=0;
}
return active;
},
_getCreateEventData: function(){
return {
tab: this.active,
panel: !this.active.length ? $():this._getPanelForTab(this.active)
};},
_tabKeydown: function(event){
var focusedTab=$($.ui.safeActiveElement(this.document[ 0 ])).closest("li"),
selectedIndex=this.tabs.index(focusedTab),
goingForward=true;
if(this._handlePageNav(event)){
return;
}
switch(event.keyCode){
case $.ui.keyCode.RIGHT:
case $.ui.keyCode.DOWN:
selectedIndex++;
break;
case $.ui.keyCode.UP:
case $.ui.keyCode.LEFT:
goingForward=false;
selectedIndex--;
break;
case $.ui.keyCode.END:
selectedIndex=this.anchors.length - 1;
break;
case $.ui.keyCode.HOME:
selectedIndex=0;
break;
case $.ui.keyCode.SPACE:
event.preventDefault();
clearTimeout(this.activating);
this._activate(selectedIndex);
return;
case $.ui.keyCode.ENTER:
event.preventDefault();
clearTimeout(this.activating);
this._activate(selectedIndex===this.options.active ? false:selectedIndex);
return;
default:
return;
}
event.preventDefault();
clearTimeout(this.activating);
selectedIndex=this._focusNextTab(selectedIndex, goingForward);
if(!event.ctrlKey&&!event.metaKey){
focusedTab.attr("aria-selected", "false");
this.tabs.eq(selectedIndex).attr("aria-selected", "true");
this.activating=this._delay(function(){
this.option("active", selectedIndex);
}, this.delay);
}},
_panelKeydown: function(event){
if(this._handlePageNav(event)){
return;
}
if(event.ctrlKey&&event.keyCode===$.ui.keyCode.UP){
event.preventDefault();
this.active.trigger("focus");
}},
_handlePageNav: function(event){
if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_UP){
this._activate(this._focusNextTab(this.options.active - 1, false));
return true;
}
if(event.altKey&&event.keyCode===$.ui.keyCode.PAGE_DOWN){
this._activate(this._focusNextTab(this.options.active + 1, true));
return true;
}},
_findNextTab: function(index, goingForward){
var lastTabIndex=this.tabs.length - 1;
function constrain(){
if(index > lastTabIndex){
index=0;
}
if(index < 0){
index=lastTabIndex;
}
return index;
}
while($.inArray(constrain(), this.options.disabled)!==-1){
index=goingForward ? index + 1:index - 1;
}
return index;
},
_focusNextTab: function(index, goingForward){
index=this._findNextTab(index, goingForward);
this.tabs.eq(index).trigger("focus");
return index;
},
_setOption: function(key, value){
if(key==="active"){
this._activate(value);
return;
}
this._super(key, value);
if(key==="collapsible"){
this._toggleClass("ui-tabs-collapsible", null, value);
if(!value&&this.options.active===false){
this._activate(0);
}}
if(key==="event"){
this._setupEvents(value);
}
if(key==="heightStyle"){
this._setupHeightStyle(value);
}},
_sanitizeSelector: function(hash){
return hash ? hash.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&"):"";
},
refresh: function(){
var options=this.options,
lis=this.tablist.children(":has(a[href])");
options.disabled=$.map(lis.filter(".ui-state-disabled"), function(tab){
return lis.index(tab);
});
this._processTabs();
if(options.active===false||!this.anchors.length){
options.active=false;
this.active=$();
}else if(this.active.length&&!$.contains(this.tablist[ 0 ], this.active[ 0 ])){
if(this.tabs.length===options.disabled.length){
options.active=false;
this.active=$();
}else{
this._activate(this._findNextTab(Math.max(0, options.active - 1), false));
}}else{
options.active=this.tabs.index(this.active);
}
this._refresh();
},
_refresh: function(){
this._setOptionDisabled(this.options.disabled);
this._setupEvents(this.options.event);
this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({
"aria-selected": "false",
"aria-expanded": "false",
tabIndex: -1
});
this.panels.not(this._getPanelForTab(this.active))
.hide()
.attr({
"aria-hidden": "true"
});
if(!this.active.length){
this.tabs.eq(0).attr("tabIndex", 0);
}else{
this.active
.attr({
"aria-selected": "true",
"aria-expanded": "true",
tabIndex: 0
});
this._addClass(this.active, "ui-tabs-active", "ui-state-active");
this._getPanelForTab(this.active)
.show()
.attr({
"aria-hidden": "false"
});
}},
_processTabs: function(){
var that=this,
prevTabs=this.tabs,
prevAnchors=this.anchors,
prevPanels=this.panels;
this.tablist=this._getList().attr("role", "tablist");
this._addClass(this.tablist, "ui-tabs-nav",
"ui-helper-reset ui-helper-clearfix ui-widget-header");
this.tablist
.on("mousedown" + this.eventNamespace, "> li", function(event){
if($(this).is(".ui-state-disabled")){
event.preventDefault();
}})
.on("focus" + this.eventNamespace, ".ui-tabs-anchor", function(){
if($(this).closest("li").is(".ui-state-disabled")){
this.blur();
}});
this.tabs=this.tablist.find("> li:has(a[href])")
.attr({
role: "tab",
tabIndex: -1
});
this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default");
this.anchors=this.tabs.map(function(){
return $("a", this)[ 0 ];
})
.attr({
role: "presentation",
tabIndex: -1
});
this._addClass(this.anchors, "ui-tabs-anchor");
this.panels=$();
this.anchors.each(function(i, anchor){
var selector, panel, panelId,
anchorId=$(anchor).uniqueId().attr("id"),
tab=$(anchor).closest("li"),
originalAriaControls=tab.attr("aria-controls");
if(that._isLocal(anchor)){
selector=anchor.hash;
panelId=selector.substring(1);
panel=that.element.find(that._sanitizeSelector(selector));
}else{
panelId=tab.attr("aria-controls")||$({}).uniqueId()[ 0 ].id;
selector="#" + panelId;
panel=that.element.find(selector);
if(!panel.length){
panel=that._createPanel(panelId);
panel.insertAfter(that.panels[ i - 1 ]||that.tablist);
}
panel.attr("aria-live", "polite");
}
if(panel.length){
that.panels=that.panels.add(panel);
}
if(originalAriaControls){
tab.data("ui-tabs-aria-controls", originalAriaControls);
}
tab.attr({
"aria-controls": panelId,
"aria-labelledby": anchorId
});
panel.attr("aria-labelledby", anchorId);
});
this.panels.attr("role", "tabpanel");
this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content");
if(prevTabs){
this._off(prevTabs.not(this.tabs));
this._off(prevAnchors.not(this.anchors));
this._off(prevPanels.not(this.panels));
}},
_getList: function(){
return this.tablist||this.element.find("ol, ul").eq(0);
},
_createPanel: function(id){
return $("<div>")
.attr("id", id)
.data("ui-tabs-destroy", true);
},
_setOptionDisabled: function(disabled){
var currentItem, li, i;
if($.isArray(disabled)){
if(!disabled.length){
disabled=false;
}else if(disabled.length===this.anchors.length){
disabled=true;
}}
for(i=0;(li=this.tabs[ i ]); i++){
currentItem=$(li);
if(disabled===true||$.inArray(i, disabled)!==-1){
currentItem.attr("aria-disabled", "true");
this._addClass(currentItem, null, "ui-state-disabled");
}else{
currentItem.removeAttr("aria-disabled");
this._removeClass(currentItem, null, "ui-state-disabled");
}}
this.options.disabled=disabled;
this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null,
disabled===true);
},
_setupEvents: function(event){
var events={};
if(event){
$.each(event.split(" "), function(index, eventName){
events[ eventName ]="_eventHandler";
});
}
this._off(this.anchors.add(this.tabs).add(this.panels));
this._on(true, this.anchors, {
click: function(event){
event.preventDefault();
}});
this._on(this.anchors, events);
this._on(this.tabs, { keydown: "_tabKeydown" });
this._on(this.panels, { keydown: "_panelKeydown" });
this._focusable(this.tabs);
this._hoverable(this.tabs);
},
_setupHeightStyle: function(heightStyle){
var maxHeight,
parent=this.element.parent();
if(heightStyle==="fill"){
maxHeight=parent.height();
maxHeight -=this.element.outerHeight() - this.element.height();
this.element.siblings(":visible").each(function(){
var elem=$(this),
position=elem.css("position");
if(position==="absolute"||position==="fixed"){
return;
}
maxHeight -=elem.outerHeight(true);
});
this.element.children().not(this.panels).each(function(){
maxHeight -=$(this).outerHeight(true);
});
this.panels.each(function(){
$(this).height(Math.max(0, maxHeight -
$(this).innerHeight() + $(this).height()));
})
.css("overflow", "auto");
}else if(heightStyle==="auto"){
maxHeight=0;
this.panels.each(function(){
maxHeight=Math.max(maxHeight, $(this).height("").height());
}).height(maxHeight);
}},
_eventHandler: function(event){
var options=this.options,
active=this.active,
anchor=$(event.currentTarget),
tab=anchor.closest("li"),
clickedIsActive=tab[ 0 ]===active[ 0 ],
collapsing=clickedIsActive&&options.collapsible,
toShow=collapsing ? $():this._getPanelForTab(tab),
toHide = !active.length ? $():this._getPanelForTab(active),
eventData={
oldTab: active,
oldPanel: toHide,
newTab: collapsing ? $():tab,
newPanel: toShow
};
event.preventDefault();
if(tab.hasClass("ui-state-disabled") ||
tab.hasClass("ui-tabs-loading") ||
this.running ||
(clickedIsActive&&!options.collapsible) ||
(this._trigger("beforeActivate", event, eventData)===false)){
return;
}
options.active=collapsing ? false:this.tabs.index(tab);
this.active=clickedIsActive ? $():tab;
if(this.xhr){
this.xhr.abort();
}
if(!toHide.length&&!toShow.length){
$.error("jQuery UI Tabs: Mismatching fragment identifier.");
}
if(toShow.length){
this.load(this.tabs.index(tab), event);
}
this._toggle(event, eventData);
},
_toggle: function(event, eventData){
var that=this,
toShow=eventData.newPanel,
toHide=eventData.oldPanel;
this.running=true;
function complete(){
that.running=false;
that._trigger("activate", event, eventData);
}
function show(){
that._addClass(eventData.newTab.closest("li"), "ui-tabs-active", "ui-state-active");
if(toShow.length&&that.options.show){
that._show(toShow, that.options.show, complete);
}else{
toShow.show();
complete();
}}
if(toHide.length&&this.options.hide){
this._hide(toHide, this.options.hide, function(){
that._removeClass(eventData.oldTab.closest("li"),
"ui-tabs-active", "ui-state-active");
show();
});
}else{
this._removeClass(eventData.oldTab.closest("li"),
"ui-tabs-active", "ui-state-active");
toHide.hide();
show();
}
toHide.attr("aria-hidden", "true");
eventData.oldTab.attr({
"aria-selected": "false",
"aria-expanded": "false"
});
if(toShow.length&&toHide.length){
eventData.oldTab.attr("tabIndex", -1);
}else if(toShow.length){
this.tabs.filter(function(){
return $(this).attr("tabIndex")===0;
})
.attr("tabIndex", -1);
}
toShow.attr("aria-hidden", "false");
eventData.newTab.attr({
"aria-selected": "true",
"aria-expanded": "true",
tabIndex: 0
});
},
_activate: function(index){
var anchor,
active=this._findActive(index);
if(active[ 0 ]===this.active[ 0 ]){
return;
}
if(!active.length){
active=this.active;
}
anchor=active.find(".ui-tabs-anchor")[ 0 ];
this._eventHandler({
target: anchor,
currentTarget: anchor,
preventDefault: $.noop
});
},
_findActive: function(index){
return index===false ? $():this.tabs.eq(index);
},
_getIndex: function(index){
if(typeof index==="string"){
index=this.anchors.index(this.anchors.filter("[href$='" +
$.ui.escapeSelector(index) + "']"));
}
return index;
},
_destroy: function(){
if(this.xhr){
this.xhr.abort();
}
this.tablist
.removeAttr("role")
.off(this.eventNamespace);
this.anchors
.removeAttr("role tabIndex")
.removeUniqueId();
this.tabs.add(this.panels).each(function(){
if($.data(this, "ui-tabs-destroy")){
$(this).remove();
}else{
$(this).removeAttr("role tabIndex " +
"aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
}});
this.tabs.each(function(){
var li=$(this),
prev=li.data("ui-tabs-aria-controls");
if(prev){
li
.attr("aria-controls", prev)
.removeData("ui-tabs-aria-controls");
}else{
li.removeAttr("aria-controls");
}});
this.panels.show();
if(this.options.heightStyle!=="content"){
this.panels.css("height", "");
}},
enable: function(index){
var disabled=this.options.disabled;
if(disabled===false){
return;
}
if(index===undefined){
disabled=false;
}else{
index=this._getIndex(index);
if($.isArray(disabled)){
disabled=$.map(disabled, function(num){
return num!==index ? num:null;
});
}else{
disabled=$.map(this.tabs, function(li, num){
return num!==index ? num:null;
});
}}
this._setOptionDisabled(disabled);
},
disable: function(index){
var disabled=this.options.disabled;
if(disabled===true){
return;
}
if(index===undefined){
disabled=true;
}else{
index=this._getIndex(index);
if($.inArray(index, disabled)!==-1){
return;
}
if($.isArray(disabled)){
disabled=$.merge([ index ], disabled).sort();
}else{
disabled=[ index ];
}}
this._setOptionDisabled(disabled);
},
load: function(index, event){
index=this._getIndex(index);
var that=this,
tab=this.tabs.eq(index),
anchor=tab.find(".ui-tabs-anchor"),
panel=this._getPanelForTab(tab),
eventData={
tab: tab,
panel: panel
},
complete=function(jqXHR, status){
if(status==="abort"){
that.panels.stop(false, true);
}
that._removeClass(tab, "ui-tabs-loading");
panel.removeAttr("aria-busy");
if(jqXHR===that.xhr){
delete that.xhr;
}};
if(this._isLocal(anchor[ 0 ])){
return;
}
this.xhr=$.ajax(this._ajaxSettings(anchor, event, eventData));
if(this.xhr&&this.xhr.statusText!=="canceled"){
this._addClass(tab, "ui-tabs-loading");
panel.attr("aria-busy", "true");
this.xhr
.done(function(response, status, jqXHR){
setTimeout(function(){
panel.html(response);
that._trigger("load", event, eventData);
complete(jqXHR, status);
}, 1);
})
.fail(function(jqXHR, status){
setTimeout(function(){
complete(jqXHR, status);
}, 1);
});
}},
_ajaxSettings: function(anchor, event, eventData){
var that=this;
return {
url: anchor.attr("href").replace(/#.*$/, ""),
beforeSend: function(jqXHR, settings){
return that._trigger("beforeLoad", event,
$.extend({ jqXHR: jqXHR, ajaxSettings: settings }, eventData));
}};},
_getPanelForTab: function(tab){
var id=$(tab).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#" + id));
}});
if($.uiBackCompat!==false){
$.widget("ui.tabs", $.ui.tabs, {
_processTabs: function(){
this._superApply(arguments);
this._addClass(this.tabs, "ui-tab");
}});
}
var widgetsTabs=$.ui.tabs;
$.widget("ui.tooltip", {
version: "1.12.1",
options: {
classes: {
"ui-tooltip": "ui-corner-all ui-widget-shadow"
},
content: function(){
var title=$(this).attr("title")||"";
return $("<a>").text(title).html();
},
hide: true,
items: "[title]:not([disabled])",
position: {
my: "left top+15",
at: "left bottom",
collision: "flipfit flip"
},
show: true,
track: false,
close: null,
open: null
},
_addDescribedBy: function(elem, id){
var describedby=(elem.attr("aria-describedby")||"").split(/\s+/);
describedby.push(id);
elem
.data("ui-tooltip-id", id)
.attr("aria-describedby", $.trim(describedby.join(" ")));
},
_removeDescribedBy: function(elem){
var id=elem.data("ui-tooltip-id"),
describedby=(elem.attr("aria-describedby")||"").split(/\s+/),
index=$.inArray(id, describedby);
if(index!==-1){
describedby.splice(index, 1);
}
elem.removeData("ui-tooltip-id");
describedby=$.trim(describedby.join(" "));
if(describedby){
elem.attr("aria-describedby", describedby);
}else{
elem.removeAttr("aria-describedby");
}},
_create: function(){
this._on({
mouseover: "open",
focusin: "open"
});
this.tooltips={};
this.parents={};
this.liveRegion=$("<div>")
.attr({
role: "log",
"aria-live": "assertive",
"aria-relevant": "additions"
})
.appendTo(this.document[ 0 ].body);
this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible");
this.disabledTitles=$([]);
},
_setOption: function(key, value){
var that=this;
this._super(key, value);
if(key==="content"){
$.each(this.tooltips, function(id, tooltipData){
that._updateContent(tooltipData.element);
});
}},
_setOptionDisabled: function(value){
this[ value ? "_disable":"_enable" ]();
},
_disable: function(){
var that=this;
$.each(this.tooltips, function(id, tooltipData){
var event=$.Event("blur");
event.target=event.currentTarget=tooltipData.element[ 0 ];
that.close(event, true);
});
this.disabledTitles=this.disabledTitles.add(this.element.find(this.options.items).addBack()
.filter(function(){
var element=$(this);
if(element.is("[title]")){
return element
.data("ui-tooltip-title", element.attr("title"))
.removeAttr("title");
}})
);
},
_enable: function(){
this.disabledTitles.each(function(){
var element=$(this);
if(element.data("ui-tooltip-title")){
element.attr("title", element.data("ui-tooltip-title"));
}});
this.disabledTitles=$([]);
},
open: function(event){
var that=this,
target=$(event ? event.target:this.element)
.closest(this.options.items);
if(!target.length||target.data("ui-tooltip-id")){
return;
}
if(target.attr("title")){
target.data("ui-tooltip-title", target.attr("title"));
}
target.data("ui-tooltip-open", true);
if(event&&event.type==="mouseover"){
target.parents().each(function(){
var parent=$(this),
blurEvent;
if(parent.data("ui-tooltip-open")){
blurEvent=$.Event("blur");
blurEvent.target=blurEvent.currentTarget=this;
that.close(blurEvent, true);
}
if(parent.attr("title")){
parent.uniqueId();
that.parents[ this.id ]={
element: this,
title: parent.attr("title")
};
parent.attr("title", "");
}});
}
this._registerCloseHandlers(event, target);
this._updateContent(target, event);
},
_updateContent: function(target, event){
var content,
contentOption=this.options.content,
that=this,
eventType=event ? event.type:null;
if(typeof contentOption==="string"||contentOption.nodeType ||
contentOption.jquery){
return this._open(event, target, contentOption);
}
content=contentOption.call(target[ 0 ], function(response){
that._delay(function(){
if(!target.data("ui-tooltip-open")){
return;
}
if(event){
event.type=eventType;
}
this._open(event, target, response);
});
});
if(content){
this._open(event, target, content);
}},
_open: function(event, target, content){
var tooltipData, tooltip, delayedShow, a11yContent,
positionOption=$.extend({}, this.options.position);
if(!content){
return;
}
tooltipData=this._find(target);
if(tooltipData){
tooltipData.tooltip.find(".ui-tooltip-content").html(content);
return;
}
if(target.is("[title]")){
if(event&&event.type==="mouseover"){
target.attr("title", "");
}else{
target.removeAttr("title");
}}
tooltipData=this._tooltip(target);
tooltip=tooltipData.tooltip;
this._addDescribedBy(target, tooltip.attr("id"));
tooltip.find(".ui-tooltip-content").html(content);
this.liveRegion.children().hide();
a11yContent=$("<div>").html(tooltip.find(".ui-tooltip-content").html());
a11yContent.removeAttr("name").find("[name]").removeAttr("name");
a11yContent.removeAttr("id").find("[id]").removeAttr("id");
a11yContent.appendTo(this.liveRegion);
function position(event){
positionOption.of=event;
if(tooltip.is(":hidden")){
return;
}
tooltip.position(positionOption);
}
if(this.options.track&&event&&/^mouse/.test(event.type)){
this._on(this.document, {
mousemove: position
});
position(event);
}else{
tooltip.position($.extend({
of: target
}, this.options.position));
}
tooltip.hide();
this._show(tooltip, this.options.show);
if(this.options.track&&this.options.show&&this.options.show.delay){
delayedShow=this.delayedShow=setInterval(function(){
if(tooltip.is(":visible")){
position(positionOption.of);
clearInterval(delayedShow);
}}, $.fx.interval);
}
this._trigger("open", event, { tooltip: tooltip });
},
_registerCloseHandlers: function(event, target){
var events={
keyup: function(event){
if(event.keyCode===$.ui.keyCode.ESCAPE){
var fakeEvent=$.Event(event);
fakeEvent.currentTarget=target[ 0 ];
this.close(fakeEvent, true);
}}
};
if(target[ 0 ]!==this.element[ 0 ]){
events.remove=function(){
this._removeTooltip(this._find(target).tooltip);
};}
if(!event||event.type==="mouseover"){
events.mouseleave="close";
}
if(!event||event.type==="focusin"){
events.focusout="close";
}
this._on(true, target, events);
},
close: function(event){
var tooltip,
that=this,
target=$(event ? event.currentTarget:this.element),
tooltipData=this._find(target);
if(!tooltipData){
target.removeData("ui-tooltip-open");
return;
}
tooltip=tooltipData.tooltip;
if(tooltipData.closing){
return;
}
clearInterval(this.delayedShow);
if(target.data("ui-tooltip-title")&&!target.attr("title")){
target.attr("title", target.data("ui-tooltip-title"));
}
this._removeDescribedBy(target);
tooltipData.hiding=true;
tooltip.stop(true);
this._hide(tooltip, this.options.hide, function(){
that._removeTooltip($(this));
});
target.removeData("ui-tooltip-open");
this._off(target, "mouseleave focusout keyup");
if(target[ 0 ]!==this.element[ 0 ]){
this._off(target, "remove");
}
this._off(this.document, "mousemove");
if(event&&event.type==="mouseleave"){
$.each(this.parents, function(id, parent){
$(parent.element).attr("title", parent.title);
delete that.parents[ id ];
});
}
tooltipData.closing=true;
this._trigger("close", event, { tooltip: tooltip });
if(!tooltipData.hiding){
tooltipData.closing=false;
}},
_tooltip: function(element){
var tooltip=$("<div>").attr("role", "tooltip"),
content=$("<div>").appendTo(tooltip),
id=tooltip.uniqueId().attr("id");
this._addClass(content, "ui-tooltip-content");
this._addClass(tooltip, "ui-tooltip", "ui-widget ui-widget-content");
tooltip.appendTo(this._appendTo(element));
return this.tooltips[ id ]={
element: element,
tooltip: tooltip
};},
_find: function(target){
var id=target.data("ui-tooltip-id");
return id ? this.tooltips[ id ]:null;
},
_removeTooltip: function(tooltip){
tooltip.remove();
delete this.tooltips[ tooltip.attr("id") ];
},
_appendTo: function(target){
var element=target.closest(".ui-front, dialog");
if(!element.length){
element=this.document[ 0 ].body;
}
return element;
},
_destroy: function(){
var that=this;
$.each(this.tooltips, function(id, tooltipData){
var event=$.Event("blur"),
element=tooltipData.element;
event.target=event.currentTarget=element[ 0 ];
that.close(event, true);
$("#" + id).remove();
if(element.data("ui-tooltip-title")){
if(!element.attr("title")){
element.attr("title", element.data("ui-tooltip-title"));
}
element.removeData("ui-tooltip-title");
}});
this.liveRegion.remove();
}});
if($.uiBackCompat!==false){
$.widget("ui.tooltip", $.ui.tooltip, {
options: {
tooltipClass: null
},
_tooltip: function(){
var tooltipData=this._superApply(arguments);
if(this.options.tooltipClass){
tooltipData.tooltip.addClass(this.options.tooltipClass);
}
return tooltipData;
}});
}
var widgetsTooltip=$.ui.tooltip;
}));
(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));
if(typeof(console)==='undefined'){
var console={};
console.log=console.error=console.info=console.debug=console.warn=console.trace=console.dir=console.dirxml=console.group=console.groupEnd=console.time=console.timeEnd=console.assert=console.profile=console.groupCollapsed=function(){};}
if(window.tplogs==true)
try {
console.groupCollapsed("ThemePunch GreenSocks Logs");
} catch(e){ }
var oldgs=window.GreenSockGlobals;
oldgs_queue=window._gsQueue;
var punchgs=window.GreenSockGlobals={};
if(window.tplogs==true)
try {
console.info("Build GreenSock SandBox for ThemePunch Plugins");
console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
} catch(e){}
!function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p,s=f.length,t=s;--s>-1;)(l=q[f[s]]||new r(f[s],[])).gsClass?(i[s]=l.gsClass,t--):j&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,p="undefined"!=typeof module&&module.exports,!p&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});else if(p)if(d===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,W){j||i.wake();var c=this.vars.useFrames?V:W;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&i.wake(),setTimeout(E,2e3)};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Y(),this.render(a,b,!1),J.length&&Y())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?U[G.defaultOverwrite]:"number"==typeof i?i>>0:U[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=Z(f,this,!1),1===i&&this._siblings[e].length>1&&_(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Z(b,this,!1),1===i&&this._siblings.length>1&&_(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)T[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!Q[c]||Q[c]&&Q[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.19.1",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},N=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=M,l},O=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=N(m,n?o.s+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},P=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:N},Q=G._plugins={},R=P.tweenLookup={},S=0,T=P.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},U={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},V=D._rootFramesTimeline=new F,W=D._rootTimeline=new F,X=30,Y=P.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};W._startTime=i.time,V._startTime=i.frame,W._active=V._active=!0,setTimeout(Y,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Y(),W.render((i.time-W._startTime)*W._timeScale,!1,!1),V.render((i.frame-V._startTime)*V._timeScale,!1,!1),J.length&&Y(),i.frame>=X){X=i.frame+(parseInt(G.autoSleep,10)||120);for(c in R){for(b=R[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete R[c]}if(c=W._first,(!c||c._paused)&&G.autoSleep&&!V._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var Z=function(a,b,c){var d,e,f=a._gsTweenID;if(R[f||(a._gsTweenID=f="t"+S++)]||(R[f]={target:a,tweens:[]}),b&&(d=R[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return R[f].tweens},$=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},_=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||aa(b,0,o),0===aa(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!$(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},aa=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)T[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Y(),this.vars.css||b.style&&b!==a&&b.nodeType&&Q.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],T[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(Q[g]&&(j=new Q[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=O.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&_(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!$(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Z(d[c],this,!0);else this._siblings=Z(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Z(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ba=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ba.prototype},!0);if(h=ba.prototype,ba.version="1.19.0",ba.API=2,h._firstPT=null,h._addTween=O,h.setRatio=M,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ba.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ba.API&&(Q[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ba.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ba(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ba.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],f=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,f=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=f,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&f.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&f.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&f.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,f=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),f.to(t[u],e,c(r),u*n);return this.add(f,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(f=r[u])&&(f=new s({tweens:f})),this.add(f,l),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?l=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,f=this._time,c=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==f&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(c===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";var a=function(){return _gsScope.GreenSockGlobals||_gsScope};"function"==typeof define&&define.amd?define(["TweenLite"],a):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=a())}();
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.1",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *=*([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ca&&((h="none"===$(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),D.skewType=A.skewType||D.skewType||g.defaultSkewType,n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",
b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("CSSPlugin");
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=/(?:\r|\n|\t\t)/g,m=/(?:\s\s+)/g,n=55296,o=56319,p=56320,q=127462,r=127487,s=127995,t=127999,u=function(a){return(a.charCodeAt(0)-n<<10)+(a.charCodeAt(1)-p)+65536},v=f.all&&!f.addEventListener,w=" style='position:relative;display:inline-block;"+(v?"*display:inline;*zoom:1;'":"'"),x=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+w+(a?" class='"+a+(c?d++:"")+"'>":">")}},y=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=y.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},z=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)z(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},A=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},B=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},C=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},D=function(a){var b,c,d=B(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?D(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},E=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,B=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),E=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(P&&1===a.children.length&&a.children[0]._isSplit&&(a=a.children[0]),U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&"BR"!==n.nodeName&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,C(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&n.nextSibling&&"BR"===n.nextSibling.nodeName&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&C(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(D(t),z(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+B+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+E+"px"))),A(c,J),A(d,K),A(e,L)},F=function(a,b,c,d){var g,h,i,j,k,p,v,w,x,y=b.span?"span":"div",A=b.type||b.split||"chars,words,lines",B=(-1!==A.indexOf("words"),-1!==A.indexOf("chars")),C="absolute"===b.position||b.absolute===!0,D=b.wordDelimiter||" ",E=" "!==D?"":C?"&#173; ":" ",F=b.span?"</span>":"</div>",G=!0,H=f.createElement("div"),I=a.parentNode;for(I.insertBefore(H,a),H.textContent=a.nodeValue,I.removeChild(a),a=H,g=e(a),v=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(m," ").replace(l,"")),v&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?E:"")+c(),i=0;k>i;i++)if(p=g.charAt(i),p===D&&g.charAt(i-1)!==D&&i){for(h+=G?F:"",G=!1;g.charAt(i+1)===D;)h+=E,i++;i===k-1?h+=E:")"!==g.charAt(i+1)&&(h+=E+c(),G=!0)}else"{"===p&&"{{LT}}"===g.substr(i,6)?(h+=B?d()+"{{LT}}</"+y+">":"{{LT}}",i+=5):p.charCodeAt(0)>=n&&p.charCodeAt(0)<=o||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(w=u(g.substr(i,2)),x=u(g.substr(i+2,2)),j=w>=q&&r>=w&&x>=q&&r>=x||x>=s&&t>=x?4:2,h+=B&&" "!==p?d()+g.substr(i,j)+"</"+y+">":g.substr(i,j),i+=j-1):h+=B&&" "!==p?d()+p+"</"+y+">":p;a.outerHTML=h+(G?F:""),v&&z(I,"{{LT}}","<")},G=function(a,b,c,d){var e,f,g=B(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,G(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}F(a,b,c,d)},H=y.prototype;H.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=("absolute"===a.position||a.absolute===!0,x(a.wordsClass,f)),h=x(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,G(d,a,g,h),E(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},H.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(y.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},y.version="0.5.6"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports&&(module.exports=b())}("SplitText");
try{
window.GreenSockGlobals=null;
window._gsQueue=null;
window._gsDefine=null;
delete(window.GreenSockGlobals);
delete(window._gsQueue);
delete(window._gsDefine);
} catch(e){}
try{
window.GreenSockGlobals=oldgs;
window._gsQueue=oldgs_queue;
} catch(e){}
if(window.tplogs==true)
try {
console.groupEnd();
} catch(e){}
(function(e,t){
e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return true}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return false}});o.src=s.src})})};})(jQuery);
;!function(jQuery,undefined){"use strict";var version={core:"5.4.7","revolution.extensions.actions.min.js":"2.1.0","revolution.extensions.carousel.min.js":"1.2.1","revolution.extensions.kenburn.min.js":"1.3.1","revolution.extensions.layeranimation.min.js":"3.6.4","revolution.extensions.navigation.min.js":"1.3.3","revolution.extensions.parallax.min.js":"2.2.0","revolution.extensions.slideanims.min.js":"1.7","revolution.extensions.video.min.js":"2.2.0"};jQuery.fn.extend({revolution:function(e){var i={delay:9e3,responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,autoHeight:"off",sliderType:"standard",sliderLayout:"auto",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"0",hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,disableProgressBar:"off",stopAtSlide:-1,stopAfterLoops:-1,shadow:0,dottedOverlay:"none",startDelay:0,lazyType:"smart",spinner:"spinner0",shuffle:"off",viewPort:{enable:!1,outof:"wait",visible_area:"60%",presize:!1},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:"off",simplifyAll:"on",nextSlideOnWindowFocus:"off",disableFocusListener:!0,ignoreHeightChanges:"off",ignoreHeightChangesSize:0,allowHTML5AutoPlayOnAndroid:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",speed:400,bgparallax:"off",opacity:"on",disable_onmobile:"off",ddd_shadow:"on",ddd_bgfreeze:"off",ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,ddd_path:"mouse"},scrolleffect:{fade:"off",blur:"off",scale:"off",grayscale:"off",maxblur:10,on_layers:"off",on_slidebg:"off",on_static_layers:"off",on_parallax_layers:"off",on_parallax_static_layers:"off",direction:"both",multiplicator:1.35,multiplicator_layers:.5,tilt:30,disable_on_mobile:"on"},carousel:{easing:punchgs.Power3.easeInOut,speed:800,showLayersAllTime:"off",horizontal_align:"center",vertical_align:"center",infinity:"on",space:0,maxVisibleItems:3,stretch:"off",fadeout:"on",maxRotation:0,minScale:0,vary_fade:"off",vary_rotation:"on",vary_scale:"off",border_radius:"0px",padding_top:0,padding_bottom:0},navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"on",touch:{touchenabled:"off",touchOnDesktop:"off",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,swipe_direction:"horizontal"},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{container:"slider",rtl:!1,style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"left",v_align:"center",space:0,h_offset:20,v_offset:0,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"left",v_align:"center",h_offset:20,v_offset:0},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"left",v_align:"center",h_offset:20,v_offset:0}},extensions:"extensions/",extensions_suffix:".min.js",debugMode:!1};return e=jQuery.extend(!0,{},i,e),this.each(function(){var i=jQuery(this);e.minHeight=e.minHeight!=undefined?parseInt(e.minHeight,0):e.minHeight,e.scrolleffect.on="on"===e.scrolleffect.fade||"on"===e.scrolleffect.scale||"on"===e.scrolleffect.blur||"on"===e.scrolleffect.grayscale,"hero"==e.sliderType&&i.find(">ul>li").each(function(e){e>0&&jQuery(this).remove()}),e.jsFileLocation=e.jsFileLocation||getScriptLocation("themepunch.revolution.min.js"),e.jsFileLocation=e.jsFileLocation+e.extensions,e.scriptsneeded=getNeededScripts(e,i),e.curWinRange=0,e.rtl=!0,e.navigation!=undefined&&e.navigation.touch!=undefined&&(e.navigation.touch.swipe_min_touches=e.navigation.touch.swipe_min_touches>5?1:e.navigation.touch.swipe_min_touches),jQuery(this).on("scriptsloaded",function(){if(e.modulesfailing)return i.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+e.errorm+"</div>").show(),!1;_R.migration!=undefined&&(e=_R.migration(i,e)),punchgs.force3D=!0,"on"!==e.simplifyAll&&punchgs.TweenLite.lagSmoothing(1e3,16),prepareOptions(i,e),initSlider(i,e)}),i[0].opt=e,waitForScripts(i,e)})},getRSVersion:function(e){if(!0===e)return jQuery("body").data("tp_rs_version");var i=jQuery("body").data("tp_rs_version"),t="";for(var a in t+="---------------------------------------------------------\n",t+="    Currently Loaded Slider Revolution & SR Modules :\n",t+="---------------------------------------------------------\n",i)t+=i[a].alias+": "+i[a].ver+"\n";return t+="---------------------------------------------------------\n"},revremoveslide:function(e){return this.each(function(){var i=jQuery(this),t=i[0].opt;if(!(e<0||e>t.slideamount)&&i!=undefined&&i.length>0&&jQuery("body").find("#"+i.attr("id")).length>0&&t&&t.li.length>0&&(e>0||e<=t.li.length)){var a=jQuery(t.li[e]),n=a.data("index"),r=!1;t.slideamount=t.slideamount-1,t.realslideamount=t.realslideamount-1,removeNavWithLiref(".tp-bullet",n,t),removeNavWithLiref(".tp-tab",n,t),removeNavWithLiref(".tp-thumb",n,t),a.hasClass("active-revslide")&&(r=!0),a.remove(),t.li=removeArray(t.li,e),t.carousel&&t.carousel.slides&&(t.carousel.slides=removeArray(t.carousel.slides,e)),t.thumbs=removeArray(t.thumbs,e),_R.updateNavIndexes&&_R.updateNavIndexes(t),r&&i.revnext(),punchgs.TweenLite.set(t.li,{minWidth:"99%"}),punchgs.TweenLite.set(t.li,{minWidth:"100%"})}})},revaddcallback:function(e){return this.each(function(){this.opt&&(this.opt.callBackArray===undefined&&(this.opt.callBackArray=new Array),this.opt.callBackArray.push(e))})},revgetparallaxproc:function(){return jQuery(this)[0].opt.scrollproc},revdebugmode:function(){return this.each(function(){var e=jQuery(this);e[0].opt.debugMode=!0,containerResized(e,e[0].opt)})},revscroll:function(e){return this.each(function(){var i=jQuery(this);jQuery("body,html").animate({scrollTop:i.offset().top+i.height()-e+"px"},{duration:400})})},revredraw:function(e){return this.each(function(){var e=jQuery(this);containerResized(e,e[0].opt)})},revkill:function(e){var i=this,t=jQuery(this);if(punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements),t!=undefined&&t.length>0&&jQuery("body").find("#"+t.attr("id")).length>0){t.data("conthover",1),t.data("conthover-changed",1),t.trigger("revolution.slide.onpause");var a=t.parent().find(".tp-bannertimer"),n=t[0].opt;n.tonpause=!0,t.trigger("stoptimer");var r="resize.revslider-"+t.attr("id");jQuery(window).unbind(r),punchgs.TweenLite.killTweensOf(t.find("*"),!1),punchgs.TweenLite.killTweensOf(t,!1),t.unbind("hover, mouseover, mouseenter,mouseleave, resize");r="resize.revslider-"+t.attr("id");jQuery(window).off(r),t.find("*").each(function(){var e=jQuery(this);e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),e.off("on, hover, mouseenter,mouseleave,mouseover, resize"),e.data("mySplitText",null),e.data("ctl",null),e.data("tween")!=undefined&&e.data("tween").kill(),e.data("kenburn")!=undefined&&e.data("kenburn").kill(),e.data("timeline_out")!=undefined&&e.data("timeline_out").kill(),e.data("timeline")!=undefined&&e.data("timeline").kill(),e.remove(),e.empty(),e=null}),punchgs.TweenLite.killTweensOf(t.find("*"),!1),punchgs.TweenLite.killTweensOf(t,!1),a.remove();try{t.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(e){}try{t.closest(".rev_slider_wrapper").remove()}catch(e){}try{t.remove()}catch(e){}return t.empty(),t.html(),t=null,n=null,delete i.c,delete i.opt,delete i.container,!0}return!1},revpause:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&(e.data("conthover",1),e.data("conthover-changed",1),e.trigger("revolution.slide.onpause"),e[0].opt.tonpause=!0,e.trigger("stoptimer"))})},revresume:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&(e.data("conthover",0),e.data("conthover-changed",1),e.trigger("revolution.slide.onresume"),e[0].opt.tonpause=!1,e.trigger("starttimer"))})},revstart:function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&e[0].opt!==undefined)return e[0].opt.sliderisrunning?(console.log("Slider Is Running Already"),!1):(e[0].opt.c=e,e[0].opt.ul=e.find(">ul"),runSlider(e,e[0].opt),!0)},revnext:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&_R.callingNewSlide(e,1)})},revprev:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0&&_R.callingNewSlide(e,-1)})},revmaxslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revcurrentslide:function(){var e=jQuery(this);if(e!=undefined&&e.length>0&&jQuery("body").find("#"+e.attr("id")).length>0)return parseInt(e[0].opt.act,0)+1},revlastslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revshowslide:function(e){return this.each(function(){var i=jQuery(this);i!=undefined&&i.length>0&&jQuery("body").find("#"+i.attr("id")).length>0&&_R.callingNewSlide(i,"to"+(e-1))})},revcallslidewithid:function(e){return this.each(function(){var i=jQuery(this);i!=undefined&&i.length>0&&jQuery("body").find("#"+i.attr("id")).length>0&&_R.callingNewSlide(i,e)})}});var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{getversion:function(){return version},compare_version:function(e){var i=jQuery("body").data("tp_rs_version");return(i=i===undefined?new Object:i).Core===undefined&&(i.Core=new Object,i.Core.alias="Slider Revolution Core",i.Core.name="jquery.themepunch.revolution.min.js",i.Core.ver=_R.getversion().core),"stop"!=e.check&&(_R.getversion().core<e.min_core?(e.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     Core is older than expected ("+e.min_core+") from "+e.alias,"color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),e.check="stop"):_R.getversion()[e.name]!=undefined&&e.version<_R.getversion()[e.name]&&(e.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     "+e.alias+" ("+e.version+") is older than requiered ("+_R.getversion()[e.name]+")","color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),e.check="stop")),i[e.alias]===undefined&&(i[e.alias]=new Object,i[e.alias].alias=e.alias,i[e.alias].ver=e.version,i[e.alias].name=e.name),jQuery("body").data("tp_rs_version",i),e},currentSlideIndex:function(e){var i=e.c.find(".active-revslide").index();return i=-1==i?0:i},simp:function(e,i,t){var a=Math.abs(e)-Math.floor(Math.abs(e/i))*i;return t?a:e<0?-1*a:a},iOSVersion:function(){var e=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(e=!0):e=!1,e},isIE:function(e,i){var t=jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));t.html("\x3c!--[if "+(i||"")+" IE "+(e||"")+"]><a>&nbsp;</a><![endif]--\x3e");var a=t.find("a").length;return t.remove(),a},is_mobile:function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],i=!1;for(var t in e)navigator.userAgent.split(e[t]).length>1&&(i=!0);return i},is_android:function(){var e=["android","Android"],i=!1;for(var t in e)navigator.userAgent.split(e[t]).length>1&&(i=!0);return i},callBackHandling:function(e,i,t){try{e.callBackArray&&jQuery.each(e.callBackArray,function(e,a){a&&a.inmodule&&a.inmodule===i&&a.atposition&&a.atposition===t&&a.callback&&a.callback.call()})}catch(e){console.log("Call Back Failed")}},get_browser:function(){var e,i=navigator.appName,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=t.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[i,navigator.appVersion,"-?"])[0]},get_browser_version:function(){var e,i=navigator.appName,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=t.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[i,navigator.appVersion,"-?"])[1]},isSafari11:function(){var e=jQuery.trim(_R.get_browser().toLowerCase());return"chrome"===e&&-1!=jQuery.trim(navigator.userAgent.toLowerCase().search("edge"))&&(e="msie"),e.match(/safari|chrome/)},getHorizontalOffset:function(e,i){var t=gWiderOut(e,".outer-left"),a=gWiderOut(e,".outer-right");switch(i){case"left":return t;case"right":return a;case"both":return t+a}},callingNewSlide:function(e,i){var t=e.find(".next-revslide").length>0?e.find(".next-revslide").index():e.find(".processing-revslide").length>0?e.find(".processing-revslide").index():e.find(".active-revslide").index(),a=0,n=e[0].opt;e.find(".next-revslide").removeClass("next-revslide"),e.find(".active-revslide").hasClass("tp-invisible-slide")&&(t=n.last_shown_slide),i&&jQuery.isNumeric(i)||i.match(/to/g)?(a=1===i||-1===i?(a=t+i)<0?n.slideamount-1:a>=n.slideamount?0:a:(i=jQuery.isNumeric(i)?i:parseInt(i.split("to")[1],0))<0?0:i>n.slideamount-1?n.slideamount-1:i,e.find(".tp-revslider-slidesli:eq("+a+")").addClass("next-revslide")):i&&e.find(".tp-revslider-slidesli").each(function(){var e=jQuery(this);e.data("index")===i&&e.addClass("next-revslide")}),a=e.find(".next-revslide").index(),e.trigger("revolution.nextslide.waiting"),t===a&&t===n.last_shown_slide||a!==t&&-1!=a?swapSlide(e):e.find(".next-revslide").removeClass("next-revslide")},slotSize:function(e,i){i.slotw=Math.ceil(i.width/i.slots),"fullscreen"==i.sliderLayout?i.sloth=Math.ceil(jQuery(window).height()/i.slots):i.sloth=Math.ceil(i.height/i.slots),"on"==i.autoHeight&&e!==undefined&&""!==e&&(i.sloth=Math.ceil(e.height()/i.slots))},setSize:function(e){var i=(e.top_outer||0)+(e.bottom_outer||0),t=parseInt(e.carousel.padding_top||0,0),a=parseInt(e.carousel.padding_bottom||0,0),n=e.gridheight[e.curWinRange],r=0,o=-1===e.nextSlide||e.nextSlide===undefined?0:e.nextSlide;if(e.paddings=e.paddings===undefined?{top:parseInt(e.c.parent().css("paddingTop"),0)||0,bottom:parseInt(e.c.parent().css("paddingBottom"),0)||0}:e.paddings,e.rowzones&&e.rowzones.length>0)for(var s=0;s<e.rowzones[o].length;s++)r+=e.rowzones[o][s][0].offsetHeight;if(n=(n=n<e.minHeight?e.minHeight:n)<r?r:n,"fullwidth"==e.sliderLayout&&"off"==e.autoHeight&&punchgs.TweenLite.set(e.c,{maxHeight:n+"px"}),e.c.css({marginTop:t,marginBottom:a}),e.width=e.ul.width(),e.height=e.ul.height(),setScale(e),e.height=Math.round(e.gridheight[e.curWinRange]*(e.width/e.gridwidth[e.curWinRange])),e.height>e.gridheight[e.curWinRange]&&"on"!=e.autoHeight&&(e.height=e.gridheight[e.curWinRange]),"fullscreen"==e.sliderLayout||e.infullscreenmode){e.height=e.bw*e.gridheight[e.curWinRange];e.c.parent().width();var l=jQuery(window).height();if(e.fullScreenOffsetContainer!=undefined){try{var d=e.fullScreenOffsetContainer.split(",");d&&jQuery.each(d,function(e,i){l=jQuery(i).length>0?l-jQuery(i).outerHeight(!0):l})}catch(e){}try{e.fullScreenOffset.split("%").length>1&&e.fullScreenOffset!=undefined&&e.fullScreenOffset.length>0?l-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:e.fullScreenOffset!=undefined&&e.fullScreenOffset.length>0&&(l-=parseInt(e.fullScreenOffset,0))}catch(e){}}l=l<e.minHeight?e.minHeight:l,l-=i,e.c.parent().height(l),e.c.closest(".rev_slider_wrapper").height(l),e.c.css({height:"100%"}),e.height=l,e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.height=parseInt(r,0)>parseInt(e.height,0)?r:e.height}else e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.height=parseInt(r,0)>parseInt(e.height,0)?r:e.height,e.c.height(e.height);var c={height:t+a+i+e.height+e.paddings.top+e.paddings.bottom};e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c),e.c.closest(".rev_slider_wrapper").css(c),setScale(e)},enterInViewPort:function(e){e.waitForCountDown&&(countDown(e.c,e),e.waitForCountDown=!1),e.waitForFirstSlide&&(swapSlide(e.c),e.waitForFirstSlide=!1,setTimeout(function(){e.c.removeClass("tp-waitforfirststart")},500)),"playing"!=e.sliderlaststatus&&e.sliderlaststatus!=undefined||e.c.trigger("starttimer"),e.lastplayedvideos!=undefined&&e.lastplayedvideos.length>0&&jQuery.each(e.lastplayedvideos,function(i,t){_R.playVideo(t,e)})},leaveViewPort:function(e){e.sliderlaststatus=e.sliderstatus,e.c.trigger("stoptimer"),e.playingvideos!=undefined&&e.playingvideos.length>0&&(e.lastplayedvideos=jQuery.extend(!0,[],e.playingvideos),e.playingvideos&&jQuery.each(e.playingvideos,function(i,t){e.leaveViewPortBasedStop=!0,_R.stopVideo&&_R.stopVideo(t,e)}))},unToggleState:function(e){e!=undefined&&e.length>0&&jQuery.each(e,function(e,i){i.removeClass("rs-toggle-content-active")})},toggleState:function(e){e!=undefined&&e.length>0&&jQuery.each(e,function(e,i){i.addClass("rs-toggle-content-active")})},swaptoggleState:function(e){e!=undefined&&e.length>0&&jQuery.each(e,function(e,i){jQuery(i).hasClass("rs-toggle-content-active")?jQuery(i).removeClass("rs-toggle-content-active"):jQuery(i).addClass("rs-toggle-content-active")})},lastToggleState:function(e){var i=0;return e!=undefined&&e.length>0&&jQuery.each(e,function(e,t){i=t.hasClass("rs-toggle-content-active")}),i}});var _ISM=_R.is_mobile(),_ANDROID=_R.is_android(),checkIDS=function(e,i){if(e.anyid=e.anyid===undefined?[]:e.anyid,-1!=jQuery.inArray(i.attr("id"),e.anyid)){var t=i.attr("id")+"_"+Math.round(9999*Math.random());i.attr("id",t)}e.anyid.push(i.attr("id"))},removeArray=function(e,i){var t=[];return jQuery.each(e,function(e,a){e!=i&&t.push(a)}),t},removeNavWithLiref=function(e,i,t){t.c.find(e).each(function(){var e=jQuery(this);e.data("liref")===i&&e.remove()})},lAjax=function(e,i){return!jQuery("body").data(e)&&(i.filesystem?(i.errorm===undefined&&(i.errorm="<br>Local Filesystem Detected !<br>Put this to your header:"),console.warn("Local Filesystem detected !"),i.errorm=i.errorm+'<br>&lt;script type="text/javascript" src="'+i.jsFileLocation+e+i.extensions_suffix+'"&gt;&lt;/script&gt;',console.warn(i.jsFileLocation+e+i.extensions_suffix+" could not be loaded !"),console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."),console.log(" "),i.modulesfailing=!0,!1):(jQuery.ajax({url:i.jsFileLocation+e+i.extensions_suffix+"?version="+version.core,dataType:"script",cache:!0,error:function(t){console.warn("Slider Revolution 5.0 Error !"),console.error("Failure at Loading:"+e+i.extensions_suffix+" on Path:"+i.jsFileLocation),console.info(t)}}),void jQuery("body").data(e,!0)))},getNeededScripts=function(e,i){var t=new Object,a=e.navigation;return t.kenburns=!1,t.parallax=!1,t.carousel=!1,t.navigation=!1,t.videos=!1,t.actions=!1,t.layeranim=!1,t.migration=!1,i.data("version")&&i.data("version").toString().match(/5./gi)?(i.find("img").each(function(){"on"==jQuery(this).data("kenburns")&&(t.kenburns=!0)}),("carousel"==e.sliderType||"on"==a.keyboardNavigation||"on"==a.mouseScrollNavigation||"on"==a.touch.touchenabled||a.arrows.enable||a.bullets.enable||a.thumbnails.enable||a.tabs.enable)&&(t.navigation=!0),i.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function(){var e=jQuery(this);(e.data("ytid")!=undefined||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("youtube")>0)&&(t.videos=!0),(e.data("vimeoid")!=undefined||e.find("iframe").length>0&&e.find("iframe").attr("src").toLowerCase().indexOf("vimeo")>0)&&(t.videos=!0),e.data("actions")!==undefined&&(t.actions=!0),t.layeranim=!0}),i.find("li").each(function(){jQuery(this).data("link")&&jQuery(this).data("link")!=undefined&&(t.layeranim=!0,t.actions=!0)}),!t.videos&&(i.find(".rs-background-video-layer").length>0||i.find(".tp-videolayer").length>0||i.find(".tp-audiolayer").length>0||i.find("iframe").length>0||i.find("video").length>0)&&(t.videos=!0),"carousel"==e.sliderType&&(t.carousel=!0),("off"!==e.parallax.type||e.viewPort.enable||"true"==e.viewPort.enable||"true"===e.scrolleffect.on||e.scrolleffect.on)&&(t.parallax=!0)):(t.kenburns=!0,t.parallax=!0,t.carousel=!1,t.navigation=!0,t.videos=!0,t.actions=!0,t.layeranim=!0,t.migration=!0),"hero"==e.sliderType&&(t.carousel=!1,t.navigation=!1),window.location.href.match(/file:/gi)&&(t.filesystem=!0,e.filesystem=!0),t.videos&&void 0===_R.isVideoPlaying&&lAjax("revolution.extension.video",e),t.carousel&&void 0===_R.prepareCarousel&&lAjax("revolution.extension.carousel",e),t.carousel||void 0!==_R.animateSlide||lAjax("revolution.extension.slideanims",e),t.actions&&void 0===_R.checkActions&&lAjax("revolution.extension.actions",e),t.layeranim&&void 0===_R.handleStaticLayers&&lAjax("revolution.extension.layeranimation",e),t.kenburns&&void 0===_R.stopKenBurn&&lAjax("revolution.extension.kenburn",e),t.navigation&&void 0===_R.createNavigation&&lAjax("revolution.extension.navigation",e),t.migration&&void 0===_R.migration&&lAjax("revolution.extension.migration",e),t.parallax&&void 0===_R.checkForParallax&&lAjax("revolution.extension.parallax",e),e.addons!=undefined&&e.addons.length>0&&jQuery.each(e.addons,function(i,t){"object"==typeof t&&t.fileprefix!=undefined&&lAjax(t.fileprefix,e)}),t},waitForScripts=function(e,i){var t=!0,a=i.scriptsneeded;i.addons!=undefined&&i.addons.length>0&&jQuery.each(i.addons,function(e,i){"object"==typeof i&&i.init!=undefined&&_R[i.init]===undefined&&(t=!1)}),a.filesystem||"undefined"!=typeof punchgs&&t&&(!a.kenburns||a.kenburns&&void 0!==_R.stopKenBurn)&&(!a.navigation||a.navigation&&void 0!==_R.createNavigation)&&(!a.carousel||a.carousel&&void 0!==_R.prepareCarousel)&&(!a.videos||a.videos&&void 0!==_R.resetVideo)&&(!a.actions||a.actions&&void 0!==_R.checkActions)&&(!a.layeranim||a.layeranim&&void 0!==_R.handleStaticLayers)&&(!a.migration||a.migration&&void 0!==_R.migration)&&(!a.parallax||a.parallax&&void 0!==_R.checkForParallax)&&(a.carousel||!a.carousel&&void 0!==_R.animateSlide)?e.trigger("scriptsloaded"):setTimeout(function(){waitForScripts(e,i)},50)},getScriptLocation=function(e){var i=new RegExp("themepunch.revolution.min.js","gi"),t="";return jQuery("script").each(function(){var e=jQuery(this).attr("src");e&&e.match(i)&&(t=e)}),t=(t=(t=t.replace("jquery.themepunch.revolution.min.js","")).replace("jquery.themepunch.revolution.js","")).split("?")[0]},setCurWinRange=function(e,i){var t=9999,a=0,n=0,r=0,o=jQuery(window).width(),s=i&&9999==e.responsiveLevels?e.visibilityLevels:e.responsiveLevels;s&&s.length&&jQuery.each(s,function(e,i){o<i&&(0==a||a>i)&&(t=i,r=e,a=i),o>i&&a<i&&(a=i,n=e)}),a<t&&(r=n),i?e.forcedWinRange=r:e.curWinRange=r},prepareOptions=function(e,i){i.carousel.maxVisibleItems=i.carousel.maxVisibleItems<1?999:i.carousel.maxVisibleItems,i.carousel.vertical_align="top"===i.carousel.vertical_align?"0%":"bottom"===i.carousel.vertical_align?"100%":"50%"},gWiderOut=function(e,i){var t=0;return e.find(i).each(function(){var e=jQuery(this);!e.hasClass("tp-forcenotvisible")&&t<e.outerWidth()&&(t=e.outerWidth())}),t},initSlider=function(container,opt){if(container==undefined)return!1;container.data("aimg")!=undefined&&("enabled"==container.data("aie8")&&_R.isIE(8)||"enabled"==container.data("amobile")&&_ISM)&&container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">'),container.find(">ul").addClass("tp-revslider-mainul"),opt.c=container,opt.ul=container.find(".tp-revslider-mainul"),opt.ul.find(">li").each(function(e){var i=jQuery(this);"on"==i.data("hideslideonmobile")&&_ISM&&i.remove(),(i.data("invisible")||!0===i.data("invisible"))&&(i.addClass("tp-invisible-slide"),i.appendTo(opt.ul))}),opt.addons!=undefined&&opt.addons.length>0&&jQuery.each(opt.addons,function(i,obj){"object"==typeof obj&&obj.init!=undefined&&_R[obj.init](eval(obj.params))}),opt.cid=container.attr("id"),opt.ul.css({visibility:"visible"}),opt.slideamount=opt.ul.find(">li").not(".tp-invisible-slide").length,opt.realslideamount=opt.ul.find(">li").length,opt.slayers=container.find(".tp-static-layers"),opt.slayers.data("index","staticlayers"),1!=opt.waitForInit&&(container[0].opt=opt,runSlider(container,opt))},onFullScreenChange=function(){jQuery("body").data("rs-fullScreenMode",!jQuery("body").data("rs-fullScreenMode")),jQuery("body").data("rs-fullScreenMode")&&setTimeout(function(){jQuery(window).trigger("resize")},200)},runSlider=function(e,i){if(i.sliderisrunning=!0,i.ul.find(">li").each(function(e){jQuery(this).data("originalindex",e)}),i.allli=i.ul.find(">li"),jQuery.each(i.allli,function(e,i){(i=jQuery(i)).data("origindex",i.index())}),i.li=i.ul.find(">li").not(".tp-invisible-slide"),"on"==i.shuffle){var t=new Object,a=i.ul.find(">li:first-child");t.fstransition=a.data("fstransition"),t.fsmasterspeed=a.data("fsmasterspeed"),t.fsslotamount=a.data("fsslotamount");for(var n=0;n<i.slideamount;n++){var r=Math.round(Math.random()*i.slideamount);i.ul.find(">li:eq("+r+")").prependTo(i.ul)}var o=i.ul.find(">li:first-child");o.data("fstransition",t.fstransition),o.data("fsmasterspeed",t.fsmasterspeed),o.data("fsslotamount",t.fsslotamount),i.allli=i.ul.find(">li"),i.li=i.ul.find(">li").not(".tp-invisible-slide")}if(i.inli=i.ul.find(">li.tp-invisible-slide"),i.thumbs=new Array,i.slots=4,i.act=-1,i.firststart=1,i.loadqueue=new Array,i.syncload=0,i.conw=e.width(),i.conh=e.height(),i.responsiveLevels.length>1?i.responsiveLevels[0]=9999:i.responsiveLevels=9999,jQuery.each(i.allli,function(e,t){var a=(t=jQuery(t)).find(".rev-slidebg")||t.find("img").first(),n=0;t.addClass("tp-revslider-slidesli"),t.data("index")===undefined&&t.data("index","rs-"+Math.round(999999*Math.random()));var r=new Object;r.params=new Array,r.id=t.data("index"),r.src=t.data("thumb")!==undefined?t.data("thumb"):a.data("lazyload")!==undefined?a.data("lazyload"):a.attr("src"),t.data("title")!==undefined&&r.params.push({from:RegExp("\\{\\{title\\}\\}","g"),to:t.data("title")}),t.data("description")!==undefined&&r.params.push({from:RegExp("\\{\\{description\\}\\}","g"),to:t.data("description")});for(n=1;n<=10;n++)t.data("param"+n)!==undefined&&r.params.push({from:RegExp("\\{\\{param"+n+"\\}\\}","g"),to:t.data("param"+n)});if(i.thumbs.push(r),t.data("link")!=undefined){var o=t.data("link"),s=t.data("target")||"_self",l="back"===t.data("slideindex")?0:60,d=t.data("linktoslide"),c=d;d!=undefined&&"next"!=d&&"prev"!=d&&i.allli.each(function(){var e=jQuery(this);e.data("origindex")+1==c&&(d=e.data("index"))}),"slide"!=o&&(d="no");var u='<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+l+';" data-x="center" data-y="center" data-basealign="slide" ',p=' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';u="no"==d?u+p+" >":u+"data-actions='"+("scroll_under"===d?'[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]':"prev"===d?'[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]':"next"===d?'[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]':'[{"event":"click","action":"jumptoslide","slide":"'+d+'","delay":"0.2"}]')+"'"+p+" >",u+='<a style="width:100%;height:100%;display:block"',u="slide"!=o?u+' target="'+s+'" href="'+o+'"':u,u+='><span style="width:100%;height:100%;display:block"></span></a></div>',t.append(u)}}),i.rle=i.responsiveLevels.length||1,i.gridwidth=cArray(i.gridwidth,i.rle),i.gridheight=cArray(i.gridheight,i.rle),"on"==i.simplifyAll&&(_R.isIE(8)||_R.iOSVersion())&&(e.find(".tp-caption").each(function(){var e=jQuery(this);e.removeClass("customin customout").addClass("fadein fadeout"),e.data("splitin",""),e.data("speed",400)}),i.allli.each(function(){var e=jQuery(this);e.data("transition","fade"),e.data("masterspeed",500),e.data("slotamount",1),(e.find(".rev-slidebg")||e.find(">img").first()).data("kenburns","off")})),i.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),i.autoHeight="fullscreen"==i.sliderLayout?"on":i.autoHeight,"fullwidth"==i.sliderLayout&&"off"==i.autoHeight&&e.css({maxHeight:i.gridheight[i.curWinRange]+"px"}),"auto"!=i.sliderLayout&&0==e.closest(".forcefullwidth_wrapper_tp_banner").length&&("fullscreen"!==i.sliderLayout||"on"!=i.fullScreenAutoWidth)){var s=e.parent(),l=s.css("marginBottom"),d=s.css("marginTop"),c=e.attr("id")+"_forcefullwidth";l=l===undefined?0:l,d=d===undefined?0:d,s.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="'+c+'" style="position:relative;width:100%;height:auto;margin-top:'+d+";margin-bottom:"+l+'"></div>'),e.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+e.height()+'px"></div>'),e.parent().css({marginTop:"0px",marginBottom:"0px"}),e.parent().css({position:"absolute"})}if(i.shadow!==undefined&&i.shadow>0&&(e.parent().addClass("tp-shadow"+i.shadow),e.parent().append('<div class="tp-shadowcover"></div>'),e.parent().find(".tp-shadowcover").css({backgroundColor:e.parent().css("backgroundColor"),backgroundImage:e.parent().css("backgroundImage")})),setCurWinRange(i),setCurWinRange(i,!0),!e.hasClass("revslider-initialised")){e.addClass("revslider-initialised"),e.addClass("tp-simpleresponsive"),e.attr("id")==undefined&&e.attr("id","revslider-"+Math.round(1e3*Math.random()+5)),checkIDS(i,e),i.firefox13=!1,i.ie=!jQuery.support.opacity,i.ie9=9==document.documentMode,i.origcd=i.delay;var u=jQuery.fn.jquery.split("."),p=parseFloat(u[0]),f=parseFloat(u[1]);parseFloat(u[2]||"0");1==p&&f<7&&e.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+u+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),p>1&&(i.ie=!1);var h=new Object;h.addedyt=0,h.addedvim=0,h.addedvid=0,i.scrolleffect.on&&(i.scrolleffect.layers=new Array),e.find(".tp-caption, .rs-background-video-layer").each(function(e){var t=jQuery(this),a=t.data(),n=a.autoplayonlyfirsttime,r=a.autoplay,o=(a.videomp4!==undefined||a.videowebm!==undefined||a.videoogv,t.hasClass("tp-audiolayer")),s=a.videoloop,l=!0,d=!1;a.startclasses=t.attr("class"),a.isparallaxlayer=a.startclasses.indexOf("rs-parallax")>=0,t.hasClass("tp-static-layer")&&_R.handleStaticLayers&&(_R.handleStaticLayers(t,i),i.scrolleffect.on&&("on"===i.scrolleffect.on_parallax_static_layers&&a.isparallaxlayer||"on"===i.scrolleffect.on_static_layers&&!a.isparallaxlayer)&&(d=!0),l=!1);var c=t.data("noposteronmobile")||t.data("noPosterOnMobile")||t.data("posteronmobile")||t.data("posterOnMobile")||t.data("posterOnMObile");t.data("noposteronmobile",c);var u=0;if(t.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:0}),u++}),u>0&&t.data("iframes",!0),t.hasClass("tp-caption")){var p=t.hasClass("slidelink")?"width:100% !important;height:100% !important;":"",f=t.data(),g="",v=f.type,m="row"===v||"column"===v?"relative":"absolute",y="";"row"===v?(t.addClass("rev_row").removeClass("tp-resizeme"),y="rev_row_wrap"):"column"===v?(g=f.verticalalign===undefined?" vertical-align:bottom;":" vertical-align:"+f.verticalalign+";",y="rev_column",t.addClass("rev_column_inner").removeClass("tp-resizeme"),t.data("width","auto"),punchgs.TweenLite.set(t,{width:"auto"})):"group"===v&&t.removeClass("tp-resizeme");var w="",b="";"row"!==v&&"group"!==v&&"column"!==v?(w="display:"+t.css("display")+";",t.closest(".rev_column").length>0?(t.addClass("rev_layer_in_column"),l=!1):t.closest(".rev_group").length>0&&(t.addClass("rev_layer_in_group"),l=!1)):"column"===v&&(l=!1),f.wrapper_class!==undefined&&(y=y+" "+f.wrapper_class),f.wrapper_id!==undefined&&(b='id="'+f.wrapper_id+'"');var _="";t.hasClass("tp-no-events")&&(_=";pointer-events:none"),t.wrap("<div "+b+' class="tp-parallax-wrap '+y+'" style="'+g+" "+p+"position:"+m+";"+w+";visibility:hidden"+_+'"><div class="tp-loop-wrap" style="'+p+"position:"+m+";"+w+';"><div class="tp-mask-wrap" style="'+p+"position:"+m+";"+w+';" ></div></div></div>'),l&&i.scrolleffect.on&&("on"===i.scrolleffect.on_parallax_layers&&a.isparallaxlayer||"on"===i.scrolleffect.on_layers&&!a.isparallaxlayer)&&i.scrolleffect.layers.push(t.parent()),d&&i.scrolleffect.layers.push(t.parent()),"column"===v&&(t.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'),t.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));var x=t.closest(".tp-loop-wrap");jQuery.each(["pendulum","rotate","slideloop","pulse","wave"],function(e,i){var a=t.find(".rs-"+i),n=a.data()||"";""!=n&&(x.data(n),x.addClass("rs-"+i),a.children(0).unwrap(),t.data("loopanimation","on"))}),t.attr("id")===undefined&&t.attr("id","layer-"+Math.round(999999999*Math.random())),checkIDS(i,t),punchgs.TweenLite.set(t,{visibility:"hidden"})}var j=t.data("actions");j!==undefined&&_R.checkActions(t,i,j),checkHoverDependencies(t,i),_R.checkVideoApis&&(h=_R.checkVideoApis(t,i,h)),o||1!=n&&"true"!=n&&"1sttime"!=r||"loopandnoslidestop"==s||t.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"),o||1!=r&&"true"!=r&&"on"!=r&&"no1sttime"!=r||"loopandnoslidestop"==s||t.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")}),e[0].addEventListener("mouseenter",function(){e.trigger("tp-mouseenter"),i.overcontainer=!0},{passive:!0}),e[0].addEventListener("mouseover",function(){e.trigger("tp-mouseover"),i.overcontainer=!0},{passive:!0}),e[0].addEventListener("mouseleave",function(){e.trigger("tp-mouseleft"),i.overcontainer=!1},{passive:!0}),e.find(".tp-caption video").each(function(e){var i=jQuery(this);i.removeClass("video-js vjs-default-skin"),i.attr("preload",""),i.css({display:"none"})}),"standard"!==i.sliderType&&(i.lazyType="all"),loadImages(e.find(".tp-static-layers"),i,0,!0),waitForCurrentImages(e.find(".tp-static-layers"),i,function(){e.find(".tp-static-layers img").each(function(){var e=jQuery(this),t=e.data("lazyload")!=undefined?e.data("lazyload"):e.attr("src"),a=getLoadObj(i,t);e.attr("src",a.src)})}),i.rowzones=[],i.allli.each(function(e){var t=jQuery(this);i.rowzones[e]=[],t.find(".rev_row_zone").each(function(){i.rowzones[e].push(jQuery(this))}),"all"!=i.lazyType&&("smart"!=i.lazyType||0!=e&&1!=e&&e!=i.slideamount&&e!=i.slideamount-1)||(loadImages(t,i,e),waitForCurrentImages(t,i,function(){}))});var g=getUrlVars("#")[0];if(g.length<9&&g.split("slide").length>1){var v=parseInt(g.split("slide")[1],0);v<1&&(v=1),v>i.slideamount&&(v=i.slideamount),i.startWithSlide=v-1}e.append('<div class="tp-loader '+i.spinner+'"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'),i.loader=e.find(".tp-loader"),0===e.find(".tp-bannertimer").length&&e.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'),e.find(".tp-bannertimer").css({width:"0%"}),i.ul.css({display:"block"}),prepareSlides(e,i),("off"!==i.parallax.type||i.scrolleffect.on)&&_R.checkForParallax&&_R.checkForParallax(e,i),_R.setSize(i),"hero"!==i.sliderType&&_R.createNavigation&&_R.createNavigation(e,i),_R.resizeThumbsTabs&&_R.resizeThumbsTabs&&_R.resizeThumbsTabs(i),contWidthManager(i);var m=i.viewPort;i.inviewport=!1,m!=undefined&&m.enable&&(jQuery.isNumeric(m.visible_area)||-1!==m.visible_area.indexOf("%")&&(m.visible_area=parseInt(m.visible_area)/100),_R.scrollTicker&&_R.scrollTicker(i,e)),"carousel"===i.sliderType&&_R.prepareCarousel&&(punchgs.TweenLite.set(i.ul,{opacity:0}),_R.prepareCarousel(i,new punchgs.TimelineLite,undefined,0),i.onlyPreparedSlide=!0),setTimeout(function(){if(!m.enable||m.enable&&i.inviewport||m.enable&&!i.inviewport&&"wait"==!m.outof)swapSlide(e);else if(i.c.addClass("tp-waitforfirststart"),i.waitForFirstSlide=!0,m.presize){var t=jQuery(i.li[0]);loadImages(t,i,0,!0),waitForCurrentImages(t.find(".tp-layers"),i,function(){_R.animateTheCaptions({slide:t,opt:i,preset:!0})})}_R.manageNavigation&&_R.manageNavigation(i),i.slideamount>1&&(!m.enable||m.enable&&i.inviewport?countDown(e,i):i.waitForCountDown=!0),setTimeout(function(){e.trigger("revolution.slide.onloaded")},100)},i.startDelay),i.startDelay=0,jQuery("body").data("rs-fullScreenMode",!1),window.addEventListener("fullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("mozfullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("webkitfullscreenchange",onFullScreenChange,{passive:!0});var y="resize.revslider-"+e.attr("id");jQuery(window).on(y,function(){if(e==undefined)return!1;0!=jQuery("body").find(e)&&contWidthManager(i);var t=!1;if("fullscreen"==i.sliderLayout){var a=jQuery(window).height();"mobile"==i.fallbacks.ignoreHeightChanges&&_ISM||"always"==i.fallbacks.ignoreHeightChanges?(i.fallbacks.ignoreHeightChangesSize=i.fallbacks.ignoreHeightChangesSize==undefined?0:i.fallbacks.ignoreHeightChangesSize,t=a!=i.lastwindowheight&&Math.abs(a-i.lastwindowheight)>i.fallbacks.ignoreHeightChangesSize):t=a!=i.lastwindowheight}(e.outerWidth(!0)!=i.width||e.is(":hidden")||t)&&(i.lastwindowheight=jQuery(window).height(),containerResized(e,i))}),hideSliderUnder(e,i),contWidthManager(i),i.fallbacks.disableFocusListener||"true"==i.fallbacks.disableFocusListener||!0===i.fallbacks.disableFocusListener||(e.addClass("rev_redraw_on_blurfocus"),tabBlurringCheck())}},cArray=function(e,i){if(!jQuery.isArray(e)){var t=e;(e=new Array).push(t)}if(e.length<i){t=e[e.length-1];for(var a=0;a<i-e.length+2;a++)e.push(t)}return e},checkHoverDependencies=function(e,i){var t=e.data();("sliderenter"===t.start||t.frames!==undefined&&t.frames[0]!=undefined&&"sliderenter"===t.frames[0].delay)&&(i.layersonhover===undefined&&(i.c.on("tp-mouseenter",function(){i.layersonhover&&jQuery.each(i.layersonhover,function(e,t){var a=t.data("closestli")||t.closest(".tp-revslider-slidesli"),n=t.data("staticli")||t.closest(".tp-static-layers");t.data("closestli")===undefined&&(t.data("closestli",a),t.data("staticli",n)),(a.length>0&&a.hasClass("active-revslide")||a.hasClass("processing-revslide")||n.length>0)&&(t.data("animdirection","in"),_R.playAnimationFrame&&_R.playAnimationFrame({caption:t,opt:i,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}),t.data("triggerstate","on"))})}),i.c.on("tp-mouseleft",function(){i.layersonhover&&jQuery.each(i.layersonhover,function(e,t){t.data("animdirection","out"),t.data("triggered",!0),t.data("triggerstate","off"),_R.stopVideo&&_R.stopVideo(t,i),_R.playAnimationFrame&&_R.playAnimationFrame({caption:t,opt:i,frame:"frame_999",triggerdirection:"out",triggerframein:"frame_0",triggerframeout:"frame_999"})})}),i.layersonhover=new Array),i.layersonhover.push(e))},contWidthManager=function(e){var i=_R.getHorizontalOffset(e.c,"left");if("auto"==e.sliderLayout||"fullscreen"===e.sliderLayout&&"on"==e.fullScreenAutoWidth)"fullscreen"==e.sliderLayout&&"on"==e.fullScreenAutoWidth?punchgs.TweenLite.set(e.ul,{left:0,width:e.c.width()}):punchgs.TweenLite.set(e.ul,{left:i,width:e.c.width()-_R.getHorizontalOffset(e.c,"both")});else{var t=Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left-i);punchgs.TweenLite.set(e.c.parent(),{left:0-t+"px",width:jQuery(window).width()-_R.getHorizontalOffset(e.c,"both")})}e.slayers&&"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout&&punchgs.TweenLite.set(e.slayers,{left:i})},cv=function(e,i){return e===undefined?i:e},hideSliderUnder=function(e,i,t){var a=e.parent();jQuery(window).width()<i.hideSliderAtLimit?(e.trigger("stoptimer"),"none"!=a.css("display")&&a.data("olddisplay",a.css("display")),a.css({display:"none"})):e.is(":hidden")&&t&&(a.data("olddisplay")!=undefined&&"undefined"!=a.data("olddisplay")&&"none"!=a.data("olddisplay")?a.css({display:a.data("olddisplay")}):a.css({display:"block"}),e.trigger("restarttimer"),setTimeout(function(){containerResized(e,i)},150)),_R.hideUnHideNav&&_R.hideUnHideNav(i)},containerResized=function(e,i){if(e.trigger("revolution.slide.beforeredraw"),1==i.infullscreenmode&&(i.minHeight=jQuery(window).height()),setCurWinRange(i),setCurWinRange(i,!0),!_R.resizeThumbsTabs||!0===_R.resizeThumbsTabs(i)){if(hideSliderUnder(e,i,!0),contWidthManager(i),"carousel"==i.sliderType&&_R.prepareCarousel(i,!0),e===undefined)return!1;_R.setSize(i),i.conw=i.c.width(),i.conh=i.infullscreenmode?i.minHeight:i.c.height();var t=e.find(".active-revslide .slotholder"),a=e.find(".processing-revslide .slotholder");removeSlots(e,i,e,2),"standard"===i.sliderType&&(punchgs.TweenLite.set(a.find(".defaultimg"),{opacity:0}),t.find(".defaultimg").css({opacity:1})),"carousel"===i.sliderType&&i.lastconw!=i.conw&&(clearTimeout(i.pcartimer),i.pcartimer=setTimeout(function(){_R.prepareCarousel(i,!0),"carousel"==i.sliderType&&"on"===i.carousel.showLayersAllTime&&jQuery.each(i.li,function(e){_R.animateTheCaptions({slide:jQuery(i.li[e]),opt:i,recall:!0})})},100),i.lastconw=i.conw),_R.manageNavigation&&_R.manageNavigation(i),_R.animateTheCaptions&&e.find(".active-revslide").length>0&&_R.animateTheCaptions({slide:e.find(".active-revslide"),opt:i,recall:!0}),"on"==a.data("kenburns")&&_R.startKenBurn(a,i,a.data("kbtl")!==undefined?a.data("kbtl").progress():0),"on"==t.data("kenburns")&&_R.startKenBurn(t,i,t.data("kbtl")!==undefined?t.data("kbtl").progress():0),_R.animateTheCaptions&&e.find(".processing-revslide").length>0&&_R.animateTheCaptions({slide:e.find(".processing-revslide"),opt:i,recall:!0}),_R.manageNavigation&&_R.manageNavigation(i)}e.trigger("revolution.slide.afterdraw")},setScale=function(e){e.bw=e.width/e.gridwidth[e.curWinRange],e.bh=e.height/e.gridheight[e.curWinRange],e.bh>e.bw?e.bh=e.bw:e.bw=e.bh,(e.bh>1||e.bw>1)&&(e.bw=1,e.bh=1)},prepareSlides=function(e,i){if(e.find(".tp-caption").each(function(){var e=jQuery(this);e.data("transition")!==undefined&&e.addClass(e.data("transition"))}),i.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:e.parent().css("maxHeight")}),"on"==i.autoHeight&&(i.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),e.css({maxHeight:"none"}),e.parent().css({maxHeight:"none"})),i.allli.each(function(e){var t=jQuery(this),a=t.data("originalindex");(i.startWithSlide!=undefined&&a==i.startWithSlide||i.startWithSlide===undefined&&0==e)&&t.addClass("next-revslide"),t.css({width:"100%",height:"100%",overflow:"hidden"})}),"carousel"===i.sliderType){i.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');var t='<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';i.c.parent().prepend(t),i.c.parent().append(t),_R.prepareCarousel(i)}e.parent().css({overflow:"visible"}),i.allli.find(">img").each(function(e){var t=jQuery(this),a=t.closest("li"),n=a.find(".rs-background-video-layer");n.addClass("defaultvid").css({zIndex:30}),t.addClass("defaultimg"),"on"==i.fallbacks.panZoomDisableOnMobile&&_ISM&&(t.data("kenburns","off"),t.data("bgfit","cover"));var r=a.data("mediafilter");r="none"===r||r===undefined?"":r,t.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'),n.appendTo(a.find(".slotholder"));var o=t.data();t.closest(".slotholder").data(o),n.length>0&&o.bgparallax!=undefined&&(n.data("bgparallax",o.bgparallax),n.data("showcoveronpause","on")),"none"!=i.dottedOverlay&&i.dottedOverlay!=undefined&&t.closest(".slotholder").append('<div class="tp-dottedoverlay '+i.dottedOverlay+'"></div>');var s=t.attr("src");o.src=s,o.bgfit=o.bgfit||"cover",o.bgrepeat=o.bgrepeat||"no-repeat",o.bgposition=o.bgposition||"center center";t.closest(".slotholder");var l=t.data("bgcolor"),d="";d=l!==undefined&&l.indexOf("gradient")>=0?'"background:'+l+';width:100%;height:100%;"':'"background-color:'+l+";background-repeat:"+o.bgrepeat+";background-image:url("+s+");background-size:"+o.bgfit+";background-position:"+o.bgposition+';width:100%;height:100%;"',t.data("mediafilter",r),r="on"===t.data("kenburns")?"":r;var c=jQuery('<div class="tp-bgimg defaultimg '+r+'" data-bgcolor="'+l+'" style='+d+"></div>");t.parent().append(c);var u=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+t.get(0).outerHTML);t.replaceWith(u),c.data(o),c.attr("src",s),"standard"!==i.sliderType&&"undefined"!==i.sliderType||c.css({opacity:0})}),i.scrolleffect.on&&"on"===i.scrolleffect.on_slidebg&&(i.allslotholder=new Array,i.allli.find(".slotholder").each(function(){jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')}),i.allslotholder=i.c.find(".slotholder_fadeoutwrap"))},removeSlots=function(e,i,t,a){i.removePrepare=i.removePrepare+a,t.find(".slot, .slot-circle-wrapper").each(function(){jQuery(this).remove()}),i.transition=0,i.removePrepare=0},cutParams=function(e){var i=e;return e!=undefined&&e.length>0&&(i=e.split("?")[0]),i},relativeRedir=function(e){return location.pathname.replace(/(.*)\/[^/]*/,"$1/"+e)},abstorel=function(e,i){var t=e.split("/"),a=i.split("/");t.pop();for(var n=0;n<a.length;n++)"."!=a[n]&&(".."==a[n]?t.pop():t.push(a[n]));return t.join("/")},imgLoaded=function(e,i,t){i.syncload--,i.loadqueue&&jQuery.each(i.loadqueue,function(i,a){var n=a.src.replace(/\.\.\/\.\.\//gi,""),r=self.location.href,o=document.location.origin,s=r.substring(0,r.length-1)+"/"+n,l=o+"/"+n,d=abstorel(self.location.href,a.src);r=r.substring(0,r.length-1)+n,(cutParams(o+=n)===cutParams(decodeURIComponent(e.src))||cutParams(r)===cutParams(decodeURIComponent(e.src))||cutParams(d)===cutParams(decodeURIComponent(e.src))||cutParams(l)===cutParams(decodeURIComponent(e.src))||cutParams(s)===cutParams(decodeURIComponent(e.src))||cutParams(a.src)===cutParams(decodeURIComponent(e.src))||cutParams(a.src).replace(/^.*\/\/[^\/]+/,"")===cutParams(decodeURIComponent(e.src)).replace(/^.*\/\/[^\/]+/,"")||"file://"===window.location.origin&&cutParams(e.src).match(new RegExp(n)))&&(a.progress=t,a.width=e.width,a.height=e.height)}),progressImageLoad(i)},progressImageLoad=function(e){3!=e.syncload&&e.loadqueue&&jQuery.each(e.loadqueue,function(i,t){if(t.progress.match(/prepared/g)&&e.syncload<=3){if(e.syncload++,"img"==t.type){var a=new Image;a.onload=function(){imgLoaded(this,e,"loaded"),t.error=!1},a.onerror=function(){imgLoaded(this,e,"failed"),t.error=!0},a.src=t.src}else jQuery.get(t.src,function(i){t.innerHTML=(new XMLSerializer).serializeToString(i.documentElement),t.progress="loaded",e.syncload--,progressImageLoad(e)}).fail(function(){t.progress="failed",e.syncload--,progressImageLoad(e)});t.progress="inload"}})},addToLoadQueue=function(e,i,t,a,n){var r=!1;if(i.loadqueue&&jQuery.each(i.loadqueue,function(i,t){t.src===e&&(r=!0)}),!r){var o=new Object;o.src=e,o.starttoload=jQuery.now(),o.type=a||"img",o.prio=t,o.progress="prepared",o.static=n,i.loadqueue.push(o)}},loadImages=function(e,i,t,a){e.find("img,.defaultimg, .tp-svg-layer").each(function(){var e=jQuery(this),n=e.data("lazyload")!==undefined&&"undefined"!==e.data("lazyload")?e.data("lazyload"):e.data("svg_src")!=undefined?e.data("svg_src"):e.attr("src"),r=e.data("svg_src")!=undefined?"svg":"img";e.data("start-to-load",jQuery.now()),addToLoadQueue(n,i,t,r,a)}),progressImageLoad(i)},getLoadObj=function(e,i){var t=new Object;return e.loadqueue&&jQuery.each(e.loadqueue,function(e,a){a.src==i&&(t=a)}),t},waitForCurrentImages=function(e,i,t){var a=!1;e.find("img,.defaultimg, .tp-svg-layer").each(function(){var t=jQuery(this),n=t.data("lazyload")!=undefined?t.data("lazyload"):t.data("svg_src")!=undefined?t.data("svg_src"):t.attr("src"),r=getLoadObj(i,n);if(t.data("loaded")===undefined&&r!==undefined&&r.progress&&r.progress.match(/loaded/g)){if(t.attr("src",r.src),"img"==r.type)if(t.hasClass("defaultimg"))_R.isIE(8)?defimg.attr("src",r.src):-1==r.src.indexOf("images/transparent.png")&&-1==r.src.indexOf("assets/transparent.png")||t.data("bgcolor")===undefined?t.css({backgroundImage:'url("'+r.src+'")'}):t.data("bgcolor")!==undefined&&t.css({background:t.data("bgcolor")}),e.data("owidth",r.width),e.data("oheight",r.height),e.find(".slotholder").data("owidth",r.width),e.find(".slotholder").data("oheight",r.height);else{var o=t.data("ww"),s=t.data("hh");t.data("owidth",r.width),t.data("oheight",r.height),o=o==undefined||"auto"==o||""==o?r.width:o,s=s==undefined||"auto"==s||""==s?r.height:s,!jQuery.isNumeric(o)&&o.indexOf("%")>0&&(s=o),t.data("ww",o),t.data("hh",s)}else"svg"==r.type&&"loaded"==r.progress&&(t.append('<div class="tp-svg-innercontainer"></div>'),t.find(".tp-svg-innercontainer").append(r.innerHTML));t.data("loaded",!0)}if(r&&r.progress&&r.progress.match(/inprogress|inload|prepared/g)&&(!r.error&&jQuery.now()-t.data("start-to-load")<5e3?a=!0:(r.progress="failed",r.reported_img||(r.reported_img=!0,console.warn(n+"  Could not be loaded !")))),1==i.youtubeapineeded&&(!window.YT||YT.Player==undefined)&&(a=!0,jQuery.now()-i.youtubestarttime>5e3&&1!=i.youtubewarning)){i.youtubewarning=!0;var l="YouTube Api Could not be loaded !";"https:"===location.protocol&&(l+=" Please Check and Renew SSL Certificate !"),console.error(l),i.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+l+"</strong></div>")}if(1==i.vimeoapineeded&&!window.Vimeo&&(a=!0,jQuery.now()-i.vimeostarttime>5e3&&1!=i.vimeowarning)){i.vimeowarning=!0;l="Vimeo Api Could not be loaded !";"https:"===location.protocol&&(l+=" Please Check and Renew SSL Certificate !"),console.error(l),i.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+l+"</strong></div>")}}),!_ISM&&i.audioqueue&&i.audioqueue.length>0&&jQuery.each(i.audioqueue,function(e,i){i.status&&"prepared"===i.status&&jQuery.now()-i.start<i.waittime&&(a=!0)}),jQuery.each(i.loadqueue,function(e,i){!0!==i.static||"loaded"==i.progress&&"failed"!==i.progress||("failed"==i.progress?i.reported||(i.reported=!0,console.warn("Static Image "+i.src+"  Could not be loaded in time. Error Exists:"+i.error)):!i.error&&jQuery.now()-i.starttoload<5e3?a=!0:i.reported||(i.reported=!0,console.warn("Static Image "+i.src+"  Could not be loaded within 5s! Error Exists:"+i.error)))}),a?punchgs.TweenLite.delayedCall(.18,waitForCurrentImages,[e,i,t]):punchgs.TweenLite.delayedCall(.18,t)},swapSlide=function(e){var i=e[0].opt;if(clearTimeout(i.waitWithSwapSlide),e.find(".processing-revslide").length>0)return i.waitWithSwapSlide=setTimeout(function(){swapSlide(e)},150),!1;var t=e.find(".active-revslide"),a=e.find(".next-revslide"),n=a.find(".defaultimg");if("carousel"!==i.sliderType||i.carousel.fadein||(punchgs.TweenLite.to(i.ul,1,{opacity:1}),i.carousel.fadein=!0),a.index()===t.index()&&!0!==i.onlyPreparedSlide)return a.removeClass("next-revslide"),!1;!0===i.onlyPreparedSlide&&(i.onlyPreparedSlide=!1,jQuery(i.li[0]).addClass("processing-revslide")),a.removeClass("next-revslide").addClass("processing-revslide"),-1===a.index()&&"carousel"===i.sliderType&&(a=jQuery(i.li[0])),a.data("slide_on_focus_amount",a.data("slide_on_focus_amount")+1||1),"on"==i.stopLoop&&a.index()==i.lastslidetoshow-1&&(e.find(".tp-bannertimer").css({visibility:"hidden"}),e.trigger("revolution.slide.onstop"),i.noloopanymore=1),a.index()===i.slideamount-1&&(i.looptogo=i.looptogo-1,i.looptogo<=0&&(i.stopLoop="on")),i.tonpause=!0,e.trigger("stoptimer"),i.cd=0,"off"===i.spinner&&(i.loader!==undefined?i.loader.css({display:"none"}):i.loadertimer=setTimeout(function(){i.loader!==undefined&&i.loader.css({display:"block"})},50)),loadImages(a,i,1),_R.preLoadAudio&&_R.preLoadAudio(a,i,1),waitForCurrentImages(a,i,function(){a.find(".rs-background-video-layer").each(function(){var e=jQuery(this);e.hasClass("HasListener")||(e.data("bgvideo",1),_R.manageVideoLayer&&_R.manageVideoLayer(e,i)),0==e.find(".rs-fullvideo-cover").length&&e.append('<div class="rs-fullvideo-cover"></div>')}),swapSlideProgress(n,e)})},swapSlideProgress=function(e,i){var t=i.find(".active-revslide"),a=i.find(".processing-revslide"),n=t.find(".slotholder"),r=a.find(".slotholder"),o=i[0].opt;o.tonpause=!1,o.cd=0,clearTimeout(o.loadertimer),o.loader!==undefined&&o.loader.css({display:"none"}),_R.setSize(o),_R.slotSize(e,o),_R.manageNavigation&&_R.manageNavigation(o);var s={};s.nextslide=a,s.currentslide=t,i.trigger("revolution.slide.onbeforeswap",s),o.transition=1,o.videoplaying=!1,a.data("delay")!=undefined?(o.cd=0,o.delay=a.data("delay")):o.delay=o.origcd,"true"==a.data("ssop")||!0===a.data("ssop")?o.ssop=!0:o.ssop=!1,i.trigger("nulltimer");var l=t.index(),d=a.index();o.sdir=d<l?1:0,"arrow"==o.sc_indicator&&(0==l&&d==o.slideamount-1&&(o.sdir=1),l==o.slideamount-1&&0==d&&(o.sdir=0)),o.lsdir=o.lsdir===undefined?o.sdir:o.lsdir,o.dirc=o.lsdir!=o.sdir,o.lsdir=o.sdir,t.index()!=a.index()&&1!=o.firststart&&_R.removeTheCaptions&&_R.removeTheCaptions(t,o),a.hasClass("rs-pause-timer-once")||a.hasClass("rs-pause-timer-always")?o.videoplaying=!0:i.trigger("restarttimer"),a.removeClass("rs-pause-timer-once");var c;if(o.currentSlide=t.index(),o.nextSlide=a.index(),"carousel"==o.sliderType)c=new punchgs.TimelineLite,_R.prepareCarousel(o,c),letItFree(i,r,n,a,t,c),o.transition=0,o.firststart=0;else{(c=new punchgs.TimelineLite({onComplete:function(){letItFree(i,r,n,a,t,c)}})).add(punchgs.TweenLite.set(r.find(".defaultimg"),{opacity:0})),c.pause(),_R.animateTheCaptions&&_R.animateTheCaptions({slide:a,opt:o,preset:!0}),1==o.firststart&&(punchgs.TweenLite.set(t,{autoAlpha:0}),o.firststart=0),punchgs.TweenLite.set(t,{zIndex:18}),punchgs.TweenLite.set(a,{autoAlpha:0,zIndex:20}),"prepared"==a.data("differentissplayed")&&(a.data("differentissplayed","done"),a.data("transition",a.data("savedtransition")),a.data("slotamount",a.data("savedslotamount")),a.data("masterspeed",a.data("savedmasterspeed"))),a.data("fstransition")!=undefined&&"done"!=a.data("differentissplayed")&&(a.data("savedtransition",a.data("transition")),a.data("savedslotamount",a.data("slotamount")),a.data("savedmasterspeed",a.data("masterspeed")),a.data("transition",a.data("fstransition")),a.data("slotamount",a.data("fsslotamount")),a.data("masterspeed",a.data("fsmasterspeed")),a.data("differentissplayed","prepared")),a.data("transition")==undefined&&a.data("transition","random"),0;var u=a.data("transition")!==undefined?a.data("transition").split(","):"fade",p=a.data("nexttransid")==undefined?-1:a.data("nexttransid");"on"==a.data("randomtransition")?p=Math.round(Math.random()*u.length):p+=1,p==u.length&&(p=0),a.data("nexttransid",p);var f=u[p];o.ie&&("boxfade"==f&&(f="boxslide"),"slotfade-vertical"==f&&(f="slotzoom-vertical"),"slotfade-horizontal"==f&&(f="slotzoom-horizontal")),_R.isIE(8)&&(f=11),c=_R.animateSlide(0,f,i,a,t,r,n,c),"on"==r.data("kenburns")&&(_R.startKenBurn(r,o),c.add(punchgs.TweenLite.set(r,{autoAlpha:0}))),c.pause()}_R.scrollHandling&&(_R.scrollHandling(o,!0,0),c.eventCallback("onUpdate",function(){_R.scrollHandling(o,!0,0)})),"off"!=o.parallax.type&&o.parallax.firstgo==undefined&&_R.scrollHandling&&(o.parallax.firstgo=!0,o.lastscrolltop=-999,_R.scrollHandling(o,!0,0),setTimeout(function(){o.lastscrolltop=-999,_R.scrollHandling(o,!0,0)},210),setTimeout(function(){o.lastscrolltop=-999,_R.scrollHandling(o,!0,0)},420)),_R.animateTheCaptions?"carousel"===o.sliderType&&"on"===o.carousel.showLayersAllTime?(jQuery.each(o.li,function(e){o.carousel.allLayersStarted?_R.animateTheCaptions({slide:jQuery(o.li[e]),opt:o,recall:!0}):o.li[e]===a?_R.animateTheCaptions({slide:jQuery(o.li[e]),maintimeline:c,opt:o,startslideanimat:0}):_R.animateTheCaptions({slide:jQuery(o.li[e]),opt:o,startslideanimat:0})}),o.carousel.allLayersStarted=!0):_R.animateTheCaptions({slide:a,opt:o,maintimeline:c,startslideanimat:0}):c!=undefined&&setTimeout(function(){c.resume()},30),punchgs.TweenLite.to(a,.001,{autoAlpha:1})},letItFree=function(e,i,t,a,n,r){var o=e[0].opt;"carousel"===o.sliderType||(o.removePrepare=0,punchgs.TweenLite.to(i.find(".defaultimg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){removeSlots(e,o,a,1)}}),a.index()!=n.index()&&punchgs.TweenLite.to(n,.2,{zIndex:18,autoAlpha:0,onComplete:function(){removeSlots(e,o,n,1)}})),e.find(".active-revslide").removeClass("active-revslide"),e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"),o.act=a.index(),o.c.attr("data-slideactive",e.find(".active-revslide").data("index")),"scroll"!=o.parallax.type&&"scroll+mouse"!=o.parallax.type&&"mouse+scroll"!=o.parallax.type||(o.lastscrolltop=-999,_R.scrollHandling(o)),r.clear(),t.data("kbtl")!=undefined&&(t.data("kbtl").reverse(),t.data("kbtl").timeScale(25)),"on"==i.data("kenburns")&&(i.data("kbtl")!=undefined?(i.data("kbtl").timeScale(1),i.data("kbtl").play()):_R.startKenBurn(i,o)),a.find(".rs-background-video-layer").each(function(e){if(_ISM&&!o.fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var i=jQuery(this);_R.resetVideo(i,o,!1,!0),punchgs.TweenLite.fromTo(i,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.2,onComplete:function(){_R.animcompleted&&_R.animcompleted(i,o)}})}),n.find(".rs-background-video-layer").each(function(e){if(_ISM)return!1;var i=jQuery(this);_R.stopVideo&&(_R.resetVideo(i,o),_R.stopVideo(i,o)),punchgs.TweenLite.to(i,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var s={};if(s.slideIndex=a.index()+1,s.slideLIIndex=a.index(),s.slide=a,s.currentslide=a,s.prevslide=n,o.last_shown_slide=n.index(),e.trigger("revolution.slide.onchange",s),e.trigger("revolution.slide.onafterswap",s),o.startWithSlide!==undefined&&"done"!==o.startWithSlide&&"carousel"===o.sliderType){for(var l=o.startWithSlide,d=0;d<=o.li.length-1;d++){jQuery(o.li[d]).data("originalindex")===o.startWithSlide&&(l=d)}0!==l&&_R.callingNewSlide(o.c,l),o.startWithSlide="done"}o.duringslidechange=!1;var c=n.data("slide_on_focus_amount"),u=n.data("hideafterloop");0!=u&&u<=c&&o.c.revremoveslide(n.index());var p=-1===o.nextSlide||o.nextSlide===undefined?0:o.nextSlide;o.rowzones!=undefined&&(p=p>o.rowzones.length?o.rowzones.length:p),o.rowzones!=undefined&&o.rowzones.length>0&&o.rowzones[p]!=undefined&&p>=0&&p<=o.rowzones.length&&o.rowzones[p].length>0&&_R.setSize(o)},removeAllListeners=function(e,i){e.children().each(function(){try{jQuery(this).die("click")}catch(e){}try{jQuery(this).die("mouseenter")}catch(e){}try{jQuery(this).die("mouseleave")}catch(e){}try{jQuery(this).unbind("hover")}catch(e){}});try{e.die("click","mouseenter","mouseleave")}catch(e){}clearInterval(i.cdint),e=null},countDown=function(e,i){i.cd=0,i.loop=0,i.stopAfterLoops!=undefined&&i.stopAfterLoops>-1?i.looptogo=i.stopAfterLoops:i.looptogo=9999999,i.stopAtSlide!=undefined&&i.stopAtSlide>-1?i.lastslidetoshow=i.stopAtSlide:i.lastslidetoshow=999,i.stopLoop="off",0==i.looptogo&&(i.stopLoop="on");var t=e.find(".tp-bannertimer");e.on("stoptimer",function(){var e=jQuery(this).find(".tp-bannertimer");e[0].tween.pause(),"on"==i.disableProgressBar&&e.css({visibility:"hidden"}),i.sliderstatus="paused",_R.unToggleState(i.slidertoggledby)}),e.on("starttimer",function(){i.forcepause_viatoggle||(1!=i.conthover&&1!=i.videoplaying&&i.width>i.hideSliderAtLimit&&1!=i.tonpause&&1!=i.overnav&&1!=i.ssop&&(1===i.noloopanymore||i.viewPort.enable&&!i.inviewport||(t.css({visibility:"visible"}),t[0].tween.resume(),i.sliderstatus="playing")),"on"==i.disableProgressBar&&t.css({visibility:"hidden"}),_R.toggleState(i.slidertoggledby))}),e.on("restarttimer",function(){if(!i.forcepause_viatoggle){var e=jQuery(this).find(".tp-bannertimer");if(i.mouseoncontainer&&"on"==i.navigation.onHoverStop&&!_ISM)return!1;1===i.noloopanymore||i.viewPort.enable&&!i.inviewport||1==i.ssop||(e.css({visibility:"visible"}),e[0].tween.kill(),e[0].tween=punchgs.TweenLite.fromTo(e,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),i.sliderstatus="playing"),"on"==i.disableProgressBar&&e.css({visibility:"hidden"}),_R.toggleState(i.slidertoggledby)}}),e.on("nulltimer",function(){t[0].tween.kill(),t[0].tween=punchgs.TweenLite.fromTo(t,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),t[0].tween.pause(0),"on"==i.disableProgressBar&&t.css({visibility:"hidden"}),i.sliderstatus="paused"});var a=function(){0==jQuery("body").find(e).length&&(removeAllListeners(e,i),clearInterval(i.cdint)),e.trigger("revolution.slide.slideatend"),1==e.data("conthover-changed")&&(i.conthover=e.data("conthover"),e.data("conthover-changed",0)),_R.callingNewSlide(e,1)};t[0].tween=punchgs.TweenLite.fromTo(t,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),i.slideamount>1&&(0!=i.stopAfterLoops||1!=i.stopAtSlide)?e.trigger("starttimer"):(i.noloopanymore=1,e.trigger("nulltimer")),e.on("tp-mouseenter",function(){i.mouseoncontainer=!0,"on"!=i.navigation.onHoverStop||_ISM||(e.trigger("stoptimer"),e.trigger("revolution.slide.onpause"))}),e.on("tp-mouseleft",function(){i.mouseoncontainer=!1,1!=e.data("conthover")&&"on"==i.navigation.onHoverStop&&(1==i.viewPort.enable&&i.inviewport||0==i.viewPort.enable)&&(e.trigger("revolution.slide.onresume"),e.trigger("starttimer"))})},vis=function(){var e,i,t={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(e in t)if(e in document){i=t[e];break}return function(t){return t&&document.addEventListener(i,t,{pasive:!0}),!document[e]}}(),restartOnFocus=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var e=jQuery(this)[0].opt;if(e==undefined||e.c==undefined||0===e.c.length)return!1;1!=e.windowfocused&&(e.windowfocused=!0,punchgs.TweenLite.delayedCall(.3,function(){"on"==e.fallbacks.nextSlideOnWindowFocus&&e.c.revnext(),e.c.revredraw(),"playing"==e.lastsliderstatus&&e.c.revresume()}))})},lastStatBlur=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var e=jQuery(this)[0].opt;e.windowfocused=!1,e.lastsliderstatus=e.sliderstatus,e.c.revpause();var i=e.c.find(".active-revslide .slotholder"),t=e.c.find(".processing-revslide .slotholder");"on"==t.data("kenburns")&&_R.stopKenBurn(t,e),"on"==i.data("kenburns")&&_R.stopKenBurn(i,e)})},tabBlurringCheck=function(){var e=document.documentMode===undefined,i=window.chrome;1!==jQuery("body").data("revslider_focus_blur_listener")&&(jQuery("body").data("revslider_focus_blur_listener",1),e&&!i?jQuery(window).on("focusin",function(){restartOnFocus()}).on("focusout",function(){lastStatBlur()}):window.addEventListener?(window.addEventListener("focus",function(e){restartOnFocus()},{capture:!1,passive:!0}),window.addEventListener("blur",function(e){lastStatBlur()},{capture:!1,passive:!0})):(window.attachEvent("focus",function(e){restartOnFocus()}),window.attachEvent("blur",function(e){lastStatBlur()})))},getUrlVars=function(e){for(var i,t=[],a=window.location.href.slice(window.location.href.indexOf(e)+1).split("_"),n=0;n<a.length;n++)a[n]=a[n].replace("%3D","="),i=a[n].split("="),t.push(i[0]),t[i[0]]=i[1];return t}}(jQuery);
jQuery(function(t){if("undefined"==typeof wc_add_to_cart_params)return!1;var a=function(){t(document.body).on("click",".add_to_cart_button",this.onAddToCart).on("click",".remove_from_cart_button",this.onRemoveFromCart).on("added_to_cart",this.updateButton).on("added_to_cart",this.updateCartPage).on("added_to_cart removed_from_cart",this.updateFragments)};a.prototype.onAddToCart=function(a){var o=t(this);if(o.is(".ajax_add_to_cart")){if(!o.attr("data-product_id"))return!0;a.preventDefault(),o.removeClass("added"),o.addClass("loading");var r={};t.each(o.data(),function(t,a){r[t]=a}),t(document.body).trigger("adding_to_cart",[o,r]),t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","add_to_cart"),r,function(a){a&&(a.error&&a.product_url?window.location=a.product_url:"yes"!==wc_add_to_cart_params.cart_redirect_after_add?t(document.body).trigger("added_to_cart",[a.fragments,a.cart_hash,o]):window.location=wc_add_to_cart_params.cart_url)})}},a.prototype.onRemoveFromCart=function(a){var o=t(this),r=o.closest(".woocommerce-mini-cart-item");a.preventDefault(),r.block({message:null,overlayCSS:{opacity:.6}}),t.post(wc_add_to_cart_params.wc_ajax_url.toString().replace("%%endpoint%%","remove_from_cart"),{cart_item_key:o.data("cart_item_key")},function(a){a&&a.fragments?t(document.body).trigger("removed_from_cart",[a.fragments,a.cart_hash]):window.location=o.attr("href")}).fail(function(){window.location=o.attr("href")})},a.prototype.updateButton=function(a,o,r,e){(e=void 0!==e&&e)&&(e.removeClass("loading"),e.addClass("added"),wc_add_to_cart_params.is_cart||0!==e.parent().find(".added_to_cart").length||e.after(' <a href="'+wc_add_to_cart_params.cart_url+'" class="added_to_cart wc-forward" title="'+wc_add_to_cart_params.i18n_view_cart+'">'+wc_add_to_cart_params.i18n_view_cart+"</a>"),t(document.body).trigger("wc_cart_button_updated",[e]))},a.prototype.updateCartPage=function(){var a=window.location.toString().replace("add-to-cart","added-to-cart");t(".shop_table.cart").load(a+" .shop_table.cart:eq(0) > *",function(){t(".shop_table.cart").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_page_refreshed")}),t(".cart_totals").load(a+" .cart_totals:eq(0) > *",function(){t(".cart_totals").stop(!0).css("opacity","1").unblock(),t(document.body).trigger("cart_totals_refreshed")})},a.prototype.updateFragments=function(a,o){o&&(t.each(o,function(a){t(a).addClass("updating").fadeTo("400","0.6").block({message:null,overlayCSS:{opacity:.6}})}),t.each(o,function(a,o){t(a).replaceWith(o),t(a).stop(!0).css("opacity","1").unblock()}),t(document.body).trigger("wc_fragments_loaded"))},new a});
window.jQuery(document).ready(function($){
$('body').on('adding_to_cart', function(event, $button, data){
$button&&$button.hasClass('vc_gitem-link')&&$button
.addClass('vc-gitem-add-to-cart-loading-btn')
.parents('.vc_grid-item-mini')
.addClass('vc-woocommerce-add-to-cart-loading')
.append($('<div class="vc_wc-load-add-to-loader-wrapper"><div class="vc_wc-load-add-to-loader"></div></div>'));
}).on('added_to_cart', function(event, fragments, cart_hash, $button){
if('undefined'===typeof($button)){
$button=$('.vc-gitem-add-to-cart-loading-btn');
}
$button&&$button.hasClass('vc_gitem-link')&&$button
.removeClass('vc-gitem-add-to-cart-loading-btn')
.parents('.vc_grid-item-mini')
.removeClass('vc-woocommerce-add-to-cart-loading')
.find('.vc_wc-load-add-to-loader-wrapper').remove();
});
});