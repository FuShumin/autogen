"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9144],{63098:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>h,contentTitle:()=>i,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>r});var s=n(85893),a=n(11151);const t={},i="LLM Caching",o={id:"topics/llm-caching",title:"LLM Caching",description:"AutoGen supports caching API requests so that they can be reused when the same request is issued. This is useful when repeating or continuing experiments for reproducibility and cost saving.",source:"@site/docs/topics/llm-caching.md",sourceDirName:"topics",slug:"/topics/llm-caching",permalink:"/autogen/docs/topics/llm-caching",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/topics/llm-caching.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction to Transform Messages",permalink:"/autogen/docs/topics/handling_long_contexts/intro_to_transform_messages"},next:{title:"LLM Configuration",permalink:"/autogen/docs/topics/llm_configuration"}},h={},r=[{value:"Controlling the seed",id:"controlling-the-seed",level:2},{value:"Cache path",id:"cache-path",level:2},{value:"Disabling cache",id:"disabling-cache",level:2},{value:"Difference between <code>cache_seed</code> and OpenAI&#39;s <code>seed</code> parameter",id:"difference-between-cache_seed-and-openais-seed-parameter",level:2}];function d(e){const c={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.h1,{id:"llm-caching",children:"LLM Caching"}),"\n",(0,s.jsx)(c.p,{children:"AutoGen supports caching API requests so that they can be reused when the same request is issued. This is useful when repeating or continuing experiments for reproducibility and cost saving."}),"\n",(0,s.jsxs)(c.p,{children:["Since version ",(0,s.jsx)(c.a,{href:"https://github.com/microsoft/autogen/releases/tag/v0.2.8",children:(0,s.jsx)(c.code,{children:"0.2.8"})}),", a configurable context manager allows you to easily\nconfigure LLM cache, using either ",(0,s.jsx)(c.a,{href:"/docs/reference/cache/disk_cache#diskcache",children:(0,s.jsx)(c.code,{children:"DiskCache"})}),", ",(0,s.jsx)(c.a,{href:"/docs/reference/cache/redis_cache#rediscache",children:(0,s.jsx)(c.code,{children:"RedisCache"})}),", or Cosmos DB Cache. All agents inside the context manager will use the same cache."]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-python",children:'from autogen import Cache\n\n# Use Redis as cache\nwith Cache.redis(redis_url="redis://localhost:6379/0") as cache:\n    user.initiate_chat(assistant, message=coding_task, cache=cache)\n\n# Use DiskCache as cache\nwith Cache.disk() as cache:\n    user.initiate_chat(assistant, message=coding_task, cache=cache)\n\n# Use Azure Cosmos DB as cache\nwith Cache.cosmos_db(connection_string="your_connection_string", database_id="your_database_id", container_id="your_container_id") as cache:\n    user.initiate_chat(assistant, message=coding_task, cache=cache)\n\n'})}),"\n",(0,s.jsx)(c.p,{children:"The cache can also be passed directly to the model client's create call."}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-python",children:"client = OpenAIWrapper(...)\nwith Cache.disk() as cache:\n    client.create(..., cache=cache)\n"})}),"\n",(0,s.jsx)(c.h2,{id:"controlling-the-seed",children:"Controlling the seed"}),"\n",(0,s.jsxs)(c.p,{children:["You can vary the ",(0,s.jsx)(c.code,{children:"cache_seed"})," parameter to get different LLM output while\nstill using cache."]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-python",children:"# Setting the cache_seed to 1 will use a different cache from the default one\n# and you will see different output.\nwith Cache.disk(cache_seed=1) as cache:\n    user.initiate_chat(assistant, message=coding_task, cache=cache)\n"})}),"\n",(0,s.jsx)(c.h2,{id:"cache-path",children:"Cache path"}),"\n",(0,s.jsxs)(c.p,{children:["By default ",(0,s.jsx)(c.a,{href:"/docs/reference/cache/disk_cache#diskcache",children:(0,s.jsx)(c.code,{children:"DiskCache"})})," uses ",(0,s.jsx)(c.code,{children:".cache"})," for storage. To change the cache directory,\nset ",(0,s.jsx)(c.code,{children:"cache_path_root"}),":"]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-python",children:'with Cache.disk(cache_path_root="/tmp/autogen_cache") as cache:\n    user.initiate_chat(assistant, message=coding_task, cache=cache)\n'})}),"\n",(0,s.jsx)(c.h2,{id:"disabling-cache",children:"Disabling cache"}),"\n",(0,s.jsxs)(c.p,{children:["For backward compatibility, ",(0,s.jsx)(c.a,{href:"/docs/reference/cache/disk_cache#diskcache",children:(0,s.jsx)(c.code,{children:"DiskCache"})})," is on by default with ",(0,s.jsx)(c.code,{children:"cache_seed"})," set to 41.\nTo disable caching completely, set ",(0,s.jsx)(c.code,{children:"cache_seed"})," to ",(0,s.jsx)(c.code,{children:"None"})," in the ",(0,s.jsx)(c.code,{children:"llm_config"})," of the agent."]}),"\n",(0,s.jsx)(c.pre,{children:(0,s.jsx)(c.code,{className:"language-python",children:'assistant = AssistantAgent(\n    "coding_agent",\n    llm_config={\n        "cache_seed": None,\n        "config_list": OAI_CONFIG_LIST,\n        "max_tokens": 1024,\n    },\n)\n'})}),"\n",(0,s.jsxs)(c.h2,{id:"difference-between-cache_seed-and-openais-seed-parameter",children:["Difference between ",(0,s.jsx)(c.code,{children:"cache_seed"})," and OpenAI's ",(0,s.jsx)(c.code,{children:"seed"})," parameter"]}),"\n",(0,s.jsxs)(c.p,{children:["OpenAI v1.1 introduced a new parameter ",(0,s.jsx)(c.code,{children:"seed"}),". The difference between AutoGen's ",(0,s.jsx)(c.code,{children:"cache_seed"})," and OpenAI's ",(0,s.jsx)(c.code,{children:"seed"})," is AutoGen uses an explicit request cache to guarantee the exactly same output is produced for the same input and when cache is hit, no OpenAI API call will be made. OpenAI's ",(0,s.jsx)(c.code,{children:"seed"})," is a best-effort deterministic sampling with no guarantee of determinism. When using OpenAI's ",(0,s.jsx)(c.code,{children:"seed"})," with ",(0,s.jsx)(c.code,{children:"cache_seed"})," set to ",(0,s.jsx)(c.code,{children:"None"}),", even for the same input, an OpenAI API call will be made and there is no guarantee for getting exactly the same output."]})]})}function l(e={}){const{wrapper:c}={...(0,a.a)(),...e.components};return c?(0,s.jsx)(c,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>o,a:()=>i});var s=n(67294);const a={},t=s.createContext(a);function i(e){const c=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function o(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(t.Provider,{value:c},e.children)}}}]);