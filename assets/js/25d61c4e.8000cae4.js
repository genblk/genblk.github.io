"use strict";(self.webpackChunkpendle_documentation=self.webpackChunkpendle_documentation||[]).push([[8956],{7817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var o=n(3117),r=n(102),a=(n(7294),n(3905)),s=["components"],i={sidebar_position:8},c="Cosmos",l={unversionedId:"learn/module-7/cosmos",id:"learn/module-7/cosmos",title:"Cosmos",description:'Cosmos is an interoperable blockchain protocol that facilitates the transfer of data through a network of communicating blockchains. Its goal is to "create an Internet of Blockchains". It operates via a Hub-and-spoke model of which will consist of an ecosystem of blockchain Hubs, each of which will have several Zones (sidechains) pegged to it. The main chain is called the Cosmos Hub. Creating a Zone is permissionless, but creating a new Hub will most likely require majority agreement. ATOM is the native asset of Cosmos and is used for on-chain governance. Specifically, ATOMs can be staked by Zone validators to join Hubs. Cosmos Hub has a similar gas system and requires ATOM to be used for transaction fees. ATOMs are, however, intended to be highly illiquid, thus, Cosmos does not have a native medium of exchange.',source:"@site/docs/learn/module-7/cosmos.md",sourceDirName:"learn/module-7",slug:"/learn/module-7/cosmos",permalink:"/docs/learn/module-7/cosmos",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebarLearn",previous:{title:"Polkadot",permalink:"/docs/learn/module-7/polkadot"},next:{title:"NEAR",permalink:"/docs/learn/module-7/near"}},u=[],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"cosmos"},"Cosmos"),(0,a.kt)("p",null,'Cosmos is an interoperable blockchain protocol that facilitates the transfer of data through a network of communicating blockchains. Its goal is to "create an Internet of Blockchains". It operates via a Hub-and-spoke model of which will consist of an ecosystem of blockchain Hubs, each of which will have several Zones (sidechains) pegged to it. The main chain is called the Cosmos Hub. Creating a Zone is permissionless, but creating a new Hub will most likely require majority agreement. ATOM is the native asset of Cosmos and is used for on-chain governance. Specifically, ATOMs can be staked by Zone validators to join Hubs. Cosmos Hub has a similar gas system and requires ATOM to be used for transaction fees. ATOMs are, however, intended to be highly illiquid, thus, Cosmos does not have a native medium of exchange.'),(0,a.kt)("p",null,"The Cosmos Hub is designed to keep track of the account balances in Cosmos Zones. Zones have to be able to submit a light client proof of their state to Hubs that the Hub can understand. Thus, Zones can run any consensus protocol that allows them to generate such proofs. Furthermore, while incentive mechanisms are deployed on the Hub level, Zones are responsible for providing enough incentive mechanisms to keep an honest majority."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Block Explorer"),": ",(0,a.kt)("a",{parentName:"p",href:"https://cosmos.bigdipper.live/"},"https://cosmos.bigdipper.live/")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Addresses"),": There are 3 main types of Addresses available by default in the Cosmos SDK: 1) accounts, which identify users and are derived using the secp256k1 curve; 2) validator operators, which identify the operators of validators and are derived using the secp256k1 curve; and 3) consensus nodes, which identify the validator nodes participating in consensus and are derived using the ed25519 curve. All addresses are of 20 byte length prepended with a Bech32 prefix.\nExample: cosmos1hk4ze3hqwg62w89gmee3hj72u7wrap0a2ts87u"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Block Time"),": Average of 6-7 seconds."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Consensus"),": Delegated Proof-of-Stake powered by Tendermint Core, a Byzantine Fault Tolerance consensus mechanism."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ATOM Supply"),": Total supply capped at 237,928,231 ATOM."),(0,a.kt)("p",null,"Smart Contracts: Like Polkadot, the Cosmos Hub does not implement smart contracts natively. Application-specific blockchains or Zones can implement smart contract functionality. One example is Strong Force, a C# smart contracts framework over Tendermint consensus."),(0,a.kt)("p",null,"Example contract code in Strong Force:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c#"},"public abstract class Contract\n{\n    protected Contract(Address address)\n    {\n         this.Address = address;\n    }\n    public Address Address { get; }\n    internal event EventHandler<ActionEventArgs> Send;\n    internal event EventHandler<ActionEventArgs> Forward;\n    protected internal abstract object GetState();\n    protected internal virtual bool Receive(Action action)\n    {\n       return this.HandleReceivedAction(action);\n    }\n    protected abstract bool HandleReceivedAction(Action action);\n    protected virtual void Redirect(Action action) { }\n}\n")))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?o.createElement(h,s(s({ref:t},u),{},{components:n})):o.createElement(h,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);