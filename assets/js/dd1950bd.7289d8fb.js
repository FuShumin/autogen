"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4124],{24368:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var t=n(85893),i=n(11151);const r={sidebar_label:"transforms",title:"agentchat.contrib.capabilities.transforms"},o=void 0,a={id:"reference/agentchat/contrib/capabilities/transforms",title:"agentchat.contrib.capabilities.transforms",description:"MessageTransform",source:"@site/docs/reference/agentchat/contrib/capabilities/transforms.md",sourceDirName:"reference/agentchat/contrib/capabilities",slug:"/reference/agentchat/contrib/capabilities/transforms",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/transforms",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/agentchat/contrib/capabilities/transforms.md",tags:[],version:"current",frontMatter:{sidebar_label:"transforms",title:"agentchat.contrib.capabilities.transforms"},sidebar:"referenceSideBar",previous:{title:"transform_messages",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/transform_messages"},next:{title:"vision_capability",permalink:"/autogen/docs/reference/agentchat/contrib/capabilities/vision_capability"}},l={},c=[{value:"MessageTransform",id:"messagetransform",level:2},{value:"apply_transform",id:"apply_transform",level:3},{value:"get_logs",id:"get_logs",level:3},{value:"MessageHistoryLimiter",id:"messagehistorylimiter",level:2},{value:"__init__",id:"__init__",level:3},{value:"apply_transform",id:"apply_transform-1",level:3},{value:"MessageTokenLimiter",id:"messagetokenlimiter",level:2},{value:"__init__",id:"__init__-1",level:3},{value:"apply_transform",id:"apply_transform-2",level:3},{value:"TextMessageCompressor",id:"textmessagecompressor",level:2},{value:"__init__",id:"__init__-2",level:3},{value:"apply_transform",id:"apply_transform-3",level:3}];function d(e){const s={code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"messagetransform",children:"MessageTransform"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"class MessageTransform(Protocol)\n"})}),"\n",(0,t.jsx)(s.p,{children:"Defines a contract for message transformation."}),"\n",(0,t.jsxs)(s.p,{children:["Classes implementing this protocol should provide an ",(0,t.jsx)(s.code,{children:"apply_transform"})," method\nthat takes a list of messages and returns the transformed list."]}),"\n",(0,t.jsx)(s.h3,{id:"apply_transform",children:"apply_transform"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def apply_transform(messages: List[Dict]) -> List[Dict]\n"})}),"\n",(0,t.jsx)(s.p,{children:"Applies a transformation to a list of messages."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"messages"})," - A list of dictionaries representing messages."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"A new list of dictionaries containing the transformed messages."}),"\n",(0,t.jsx)(s.h3,{id:"get_logs",children:"get_logs"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def get_logs(pre_transform_messages: List[Dict],\n             post_transform_messages: List[Dict]) -> Tuple[str, bool]\n"})}),"\n",(0,t.jsx)(s.p,{children:"Creates the string including the logs of the transformation"}),"\n",(0,t.jsx)(s.p,{children:"Alongside the string, it returns a boolean indicating whether the transformation had an effect or not."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"pre_transform_messages"})," - A list of dictionaries representing messages before the transformation."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"post_transform_messages"})," - A list of dictionaries representig messages after the transformation."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"A tuple with a string with the logs and a flag indicating whether the transformation had an effect or not."}),"\n",(0,t.jsx)(s.h2,{id:"messagehistorylimiter",children:"MessageHistoryLimiter"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"class MessageHistoryLimiter()\n"})}),"\n",(0,t.jsx)(s.p,{children:"Limits the number of messages considered by an agent for response generation."}),"\n",(0,t.jsx)(s.p,{children:"This transform keeps only the most recent messages up to the specified maximum number of messages (max_messages).\nIt trims the conversation history by removing older messages, retaining only the most recent messages."}),"\n",(0,t.jsx)(s.h3,{id:"__init__",children:"__init__"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def __init__(max_messages: Optional[int] = None)\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsx)(s.p,{children:"max_messages Optional[int]: Maximum number of messages to keep in the context. Must be greater than 0 if not None."}),"\n",(0,t.jsx)(s.h3,{id:"apply_transform-1",children:"apply_transform"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def apply_transform(messages: List[Dict]) -> List[Dict]\n"})}),"\n",(0,t.jsx)(s.p,{children:"Truncates the conversation history to the specified maximum number of messages."}),"\n",(0,t.jsx)(s.p,{children:"This method returns a new list containing the most recent messages up to the specified\nmaximum number of messages (max_messages). If max_messages is None, it returns the\noriginal list of messages unmodified."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"messages"})," ",(0,t.jsx)(s.em,{children:"List[Dict]"})," - The list of messages representing the conversation history."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"List[Dict]"})," - A new list containing the most recent messages up to the specified maximum."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"messagetokenlimiter",children:"MessageTokenLimiter"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"class MessageTokenLimiter()\n"})}),"\n",(0,t.jsx)(s.p,{children:"Truncates messages to meet token limits for efficient processing and response generation."}),"\n",(0,t.jsx)(s.p,{children:"This transformation applies two levels of truncation to the conversation history:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"Truncates each individual message to the maximum number of tokens specified by max_tokens_per_message."}),"\n",(0,t.jsx)(s.li,{children:"Truncates the overall conversation history to the maximum number of tokens specified by max_tokens."}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"NOTE: Tokens are counted using the encoder for the specified model. Different models may yield different token\ncounts for the same text."}),"\n",(0,t.jsx)(s.p,{children:"NOTE: For multimodal LLMs, the token count may be inaccurate as it does not account for the non-text input\n(e.g images)."}),"\n",(0,t.jsx)(s.p,{children:"The truncation process follows these steps in order:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["The minimum tokens threshold (",(0,t.jsx)(s.code,{children:"min_tokens"}),") is checked (0 by default). If the total number of tokens in messages\nare less than this threshold, then the messages are returned as is. In other case, the following process is applied."]}),"\n",(0,t.jsx)(s.li,{children:"Messages are processed in reverse order (newest to oldest)."}),"\n",(0,t.jsx)(s.li,{children:"Individual messages are truncated based on max_tokens_per_message. For multimodal messages containing both text\nand other types of content, only the text content is truncated."}),"\n",(0,t.jsx)(s.li,{children:"The overall conversation history is truncated based on the max_tokens limit. Once the accumulated token count\nexceeds this limit, the current message being processed get truncated to meet the total token count and any\nremaining messages get discarded."}),"\n",(0,t.jsx)(s.li,{children:"The truncated conversation history is reconstructed by prepending the messages to a new list to preserve the\noriginal message order."}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"__init__-1",children:"__init__"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'def __init__(max_tokens_per_message: Optional[int] = None,\n             max_tokens: Optional[int] = None,\n             min_tokens: Optional[int] = None,\n             model: str = "gpt-3.5-turbo-0613",\n             filter_dict: Optional[Dict] = None,\n             exclude_filter: bool = True)\n'})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"max_tokens_per_message"})," ",(0,t.jsx)(s.em,{children:"None or int"})," - Maximum number of tokens to keep in each message.\nMust be greater than or equal to 0 if not None."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"max_tokens"})," ",(0,t.jsx)(s.em,{children:"Optional[int]"})," - Maximum number of tokens to keep in the chat history.\nMust be greater than or equal to 0 if not None."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"min_tokens"})," ",(0,t.jsx)(s.em,{children:"Optional[int]"})," - Minimum number of tokens in messages to apply the transformation.\nMust be greater than or equal to 0 if not None."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"model"})," ",(0,t.jsx)(s.em,{children:"str"})," - The target OpenAI model for tokenization alignment."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"filter_dict"})," ",(0,t.jsx)(s.em,{children:"None or dict"})," - A dictionary to filter out messages that you want/don't want to compress.\nIf None, no filters will be applied."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"exclude_filter"})," ",(0,t.jsx)(s.em,{children:"bool"})," - If exclude filter is True (the default value), messages that match the filter will be\nexcluded from token truncation. If False, messages that match the filter will be truncated."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"apply_transform-2",children:"apply_transform"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def apply_transform(messages: List[Dict]) -> List[Dict]\n"})}),"\n",(0,t.jsx)(s.p,{children:"Applies token truncation to the conversation history."}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"messages"})," ",(0,t.jsx)(s.em,{children:"List[Dict]"})," - The list of messages representing the conversation history."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"List[Dict]"})," - A new list containing the truncated messages up to the specified token limits."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"textmessagecompressor",children:"TextMessageCompressor"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"class TextMessageCompressor()\n"})}),"\n",(0,t.jsx)(s.p,{children:"A transform for compressing text messages in a conversation history."}),"\n",(0,t.jsx)(s.p,{children:"It uses a specified text compression method to reduce the token count of messages, which can lead to more efficient\nprocessing and response generation by downstream models."}),"\n",(0,t.jsx)(s.h3,{id:"__init__-2",children:"__init__"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def __init__(text_compressor: Optional[TextCompressor] = None,\n             min_tokens: Optional[int] = None,\n             compression_params: Dict = dict(),\n             cache: Optional[AbstractCache] = Cache.disk(),\n             filter_dict: Optional[Dict] = None,\n             exclude_filter: bool = True)\n"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"text_compressor"})," ",(0,t.jsx)(s.em,{children:"TextCompressor or None"})," - An instance of a class that implements the TextCompressor\nprotocol. If None, it defaults to LLMLingua."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"min_tokens"})," ",(0,t.jsx)(s.em,{children:"int or None"})," - Minimum number of tokens in messages to apply the transformation. Must be greater\nthan or equal to 0 if not None. If None, no threshold-based compression is applied."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"compression_args"})," ",(0,t.jsx)(s.em,{children:"dict"})," - A dictionary of arguments for the compression method. Defaults to an empty\ndictionary."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"cache"})," ",(0,t.jsx)(s.em,{children:"None or AbstractCache"})," - The cache client to use to store and retrieve previously compressed messages.\nIf None, no caching will be used."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"filter_dict"})," ",(0,t.jsx)(s.em,{children:"None or dict"})," - A dictionary to filter out messages that you want/don't want to compress.\nIf None, no filters will be applied."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"exclude_filter"})," ",(0,t.jsx)(s.em,{children:"bool"})," - If exclude filter is True (the default value), messages that match the filter will be\nexcluded from compression. If False, messages that match the filter will be compressed."]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"apply_transform-3",children:"apply_transform"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def apply_transform(messages: List[Dict]) -> List[Dict]\n"})}),"\n",(0,t.jsx)(s.p,{children:"Applies compression to messages in a conversation history based on the specified configuration."}),"\n",(0,t.jsxs)(s.p,{children:["The function processes each message according to the ",(0,t.jsx)(s.code,{children:"compression_args"})," and ",(0,t.jsx)(s.code,{children:"min_tokens"})," settings, applying\nthe specified compression configuration and returning a new list of messages with reduced token counts\nwhere possible."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"messages"})," ",(0,t.jsx)(s.em,{children:"List[Dict]"})," - A list of message dictionaries to be compressed."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Returns"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"List[Dict]"})," - A list of dictionaries with the message content compressed according to the configured\nmethod and scope."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var t=n(67294);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);