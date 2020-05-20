(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[59],{2057:function(n,a,s){"use strict";s.r(a),s.d(a,"readingTime",(function(){return p})),s.d(a,"default",(function(){return c})),s.d(a,"tableOfContents",(function(){return u})),s.d(a,"frontMatter",(function(){return l}));var t=s(24),e=(s(0),s(335)),p={text:"2 min read",minutes:1.675,time:100500,words:335},o={};function c(n){var a=n.components,s=Object(t.a)(n,["components"]);return Object(e.b)("wrapper",Object.assign({},o,s,{components:a,mdxType:"MDXLayout"}),Object(e.b)("h1",{id:"state-management"},"State Management"),Object(e.b)("h2",{id:"context-api"},"Context API"),Object(e.b)("p",null,"Context provides a way to pass data through the component tree without having to pass props down manually at every level.\nContext is designed to share data that can be considered \u201cglobal\u201d for a tree of React components, such as the current authenticated user, theme, or preferred language. You can read more about it ",Object(e.b)("a",{target:"_blank",href:"https://reactjs.org/docs/context.html"},"here"),"."),Object(e.b)("p",null,"We used it to manage the app settings. Once the project is mounted we extract the stored settings from localStorage, pass the data to context provider and then use it when needed."),Object(e.b)("h2",{id:"redux"},"Redux"),Object(e.b)("p",null,"Redux is more robust alternative and currently offers more helpful features. Here is a ",Object(e.b)("a",{target:"_blank",href:"https://redux.js.org/basics/usage-with-react"},"link")," that can help you understand the entire concept behind it."),Object(e.b)("p",null,'The project uses Redux with Hooks to help you manage authenticated user, chat, kanban, mail apps, etc. The clear project structure allows you to replace it whenever you need to with ease. There are 2 main folders located in src folder: \u201cactions\u201d and "reducers.'),Object(e.b)("p",null,"Here is how to use it:"),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// SettingsView.js</span>\n\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useDispatch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> logout <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'src/actions/accountActions\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">SettingsView</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token function">useDispatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">const</span> <span class="token function-variable function">handleLogout</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span><span class="token plain-text">\n      Settings\n\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Button</span></span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>handleLogout<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n        Logout\n      </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Button</span></span><span class="token punctuation">></span></span><span class="token plain-text">\n    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}))),Object(e.b)("p",null,"When clicking \u201clogout\u201d we dispatch the logout action. Now this action uses ",Object(e.b)("inlineCode",{parentName:"p"},"authService")," to clear the session and remove the JWT from future API requests."),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// src/actions/accountActions.js</span>\n\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">dispatch</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    authService<span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token operator">:</span> <span class="token constant">LOGOUT</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}))),Object(e.b)("p",null,"AuthService does not control the app state, it only removes your authentication from next requests. So, now all we have to do is to ensure that we remove the user data from the store. Here is when the reducer does its job."),Object(e.b)("pre",null,Object(e.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// src/reducers/accountReducer.js</span>\n\n    <span class="token keyword">case</span> <span class="token constant">LOGOUT</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">produce</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">draft</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        draft<span class="token punctuation">.</span>user <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n'}}))),Object(e.b)("p",null,"When the ",Object(e.b)("inlineCode",{parentName:"p"},"LOGOUT")," action type is triggered, it produces a new state using ",Object(e.b)("inlineCode",{parentName:"p"},"immer")," module."))}c.isMDXComponent=!0;var u=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"context-api",level:2,title:"Context API",children:[]},{id:"redux",level:2,title:"Redux",children:[]}]},l={}}}]);
//# sourceMappingURL=59.9fa4c6e1.chunk.js.map