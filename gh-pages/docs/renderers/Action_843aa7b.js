define('docs/renderers/Action.md', function(require, exports, module) {

  module.exports = {
    "html": "<h2><a class=\"anchor\" name=\"action\" href=\"#action\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>Action</h2><p>Action 是一种特殊的渲染器，它本身是一个按钮，同时它能触发事件。</p>\n<div class=\"amis-preview\" style=\"height: 300px\"><script type=\"text/schema\" height=\"300\" scope=\"body\">{\n  \"label\": \"弹个框\",\n  \"type\": \"button\",\n  \"level\": \"dark\",\n  \"actionType\": \"dialog\",\n  \"dialog\": {\n    \"title\": \"弹框\",\n    \"body\": \"这是个简单的弹框。\"\n  }\n}\n</script></div>\n<p>除了能弹框，它还能设定很多行为比如：提交表单、发送 ajax、页面跳转、关闭弹框、复制文本等等。</p>\n<h3><a class=\"anchor\" name=\"%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE%E9%A1%B9\" href=\"#%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE%E9%A1%B9\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>通用配置项</h3><p>所有<code>actionType</code>都支持的通用配置项</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>type</td>\n<td><code>string</code></td>\n<td><code>action</code></td>\n<td>指定为 Page 渲染器。</td>\n</tr>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>【必填】这是action最核心的配置，来指定该action的作用类型，支持：<code>ajax</code>、<code>link</code>、<code>url</code>、<code>drawer</code>、<code>dialog</code>、<code>confirm</code>、<code>cancel</code>、<code>prev</code>、<code>next</code>、<code>copy</code>、<code>close</code>。</td>\n</tr>\n<tr>\n<td>label</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>按钮文本。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>level</td>\n<td><code>string</code></td>\n<td><code>default</code></td>\n<td>按钮样式，支持：<code>link</code>、<code>primary</code>、<code>secondary</code>、<code>info</code>、<code>success</code>、<code>warning</code>、<code>danger</code>、<code>light</code>、<code>dark</code>、<code>default</code>。</td>\n</tr>\n<tr>\n<td>size</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>按钮大小，支持：<code>xs</code>、<code>sm</code>、<code>md</code>、<code>lg</code>。</td>\n</tr>\n<tr>\n<td>icon</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>设置图标，例如<code>fa fa-plus</code>。</td>\n</tr>\n<tr>\n<td>iconClassName</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>给图标上添加类名。</td>\n</tr>\n<tr>\n<td>active</td>\n<td><code>boolean</code></td>\n<td>-</td>\n<td>按钮是否高亮。</td>\n</tr>\n<tr>\n<td>activeLevel</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>按钮高亮时的样式，配置支持同<code>level</code>。</td>\n</tr>\n<tr>\n<td>activeClassName</td>\n<td><code>string</code></td>\n<td><code>is-active</code></td>\n<td>给按钮高亮添加类名。</td>\n</tr>\n<tr>\n<td>block</td>\n<td><code>boolean</code></td>\n<td>-</td>\n<td>用<code>display:&quot;block&quot;</code>来显示按钮。</td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>当设置后，操作在开始前会询问用户。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>reload</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>指定此次操作完后，需要刷新的目标组件名字（组件的<code>name</code>值，自己配置的），多个请用 <code>,</code> 号隔开。</td>\n</tr>\n<tr>\n<td>tooltip</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>鼠标停留时弹出该段文字，也可以配置对象类型：字段为<code>title</code>和<code>content</code>。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>disabledTip</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>被禁用后鼠标停留时弹出该段文字，也可以配置对象类型：字段为<code>title</code>和<code>content</code>。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>tooltipPlacement</td>\n<td><code>string</code></td>\n<td><code>top</code></td>\n<td>如果配置了<code>tooltip</code>或者<code>disabledTip</code>，指定提示信息位置，可配置<code>top</code>、<code>bottom</code>、<code>left</code>、<code>right</code>。</td>\n</tr>\n<tr>\n<td>close</td>\n<td><code>boolean</code></td>\n<td>-</td>\n<td>当<code>action</code>配置在<code>dialog</code>或<code>drawer</code>的<code>actions</code>中时，配置为<code>true</code>指定此次操作完后关闭当前<code>dialog</code>或<code>drawer</code>。</td>\n</tr>\n<tr>\n<td>required</td>\n<td><code>Array&lt;string&gt;</code></td>\n<td>-</td>\n<td>配置字符串数组，指定在<code>form</code>中进行操作之前，需要指定的字段名的表单项通过验证</td>\n</tr>\n</tbody>\n</table>\n<p>下面会分别介绍每种类型的Action配置项</p>\n<h3><a class=\"anchor\" name=\"ajax\" href=\"#ajax\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>ajax</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>ajax</code></td>\n<td>发送请求</td>\n</tr>\n<tr>\n<td>api</td>\n<td><code>string</code> 或 <code>ApiObject</code></td>\n<td>-</td>\n<td>请求地址，参考 <a href=\"/amis/docs/renderers/Types#api\">api</a> 格式说明。</td>\n</tr>\n<tr>\n<td>redirect</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>指定当前请求结束后跳转的路径，可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>feedback</td>\n<td><code>DialogObject</code></td>\n<td>-</td>\n<td>如果 ajax 类型的，当 ajax 返回正常后，还能接着弹出一个 dialog 做其他交互。返回的数据可用于这个 dialog 中。格式可参考<a href=\"/amis/docs/renderers/Dialog\">Dialog</a></td>\n</tr>\n<tr>\n<td>messages</td>\n<td><code>object</code></td>\n<td>-</td>\n<td><code>success</code>：ajax 操作成功后提示，可以不指定，不指定时以 api 返回为准。<code>failed</code>：ajax 操作失败提示。</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n  \"data\": {\n    \"user\": \"no one\"\n  },\n  \"body\": {\n    \"label\": \"Post\",\n    \"type\": \"button\",\n    \"actionType\": \"ajax\",\n    \"confirmText\": \"确定？\",\n    \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm\",\n    \"messages\": {\n      \"success\": \"发送成功\"\n    }\n  }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"link\" href=\"#link\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>link</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>link</code></td>\n<td>单页跳转</td>\n</tr>\n<tr>\n<td>link</td>\n<td><code>string</code></td>\n<td><code>link</code></td>\n<td>用来指定跳转地址，跟 url 不同的是，这是单页跳转方式，不会渲染浏览器，请指定 amis 平台内的页面。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n  \"body\": {\n    \"label\": \"进入简介页面\",\n    \"type\": \"button\",\n    \"level\": \"info\",\n    \"actionType\": \"link\",\n    \"link\": \"/docs/index\"\n  }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"url\" href=\"#url\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>url</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>url</code></td>\n<td>页面跳转</td>\n</tr>\n<tr>\n<td>url</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>按钮点击后，会打开指定页面。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n<tr>\n<td>blank</td>\n<td><code>boolean</code></td>\n<td><code>false</code></td>\n<td>如果为 <code>true</code> 将在新tab页面打开。</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n  \"body\": {\n    \"label\": \"打开 Baidu\",\n    \"type\": \"button\",\n    \"level\": \"success\",\n    \"actionType\": \"url\",\n    \"url\": \"raw:http://www.baidu.com\"\n  }\n}\n</script></div>\n<p><code>注意：由于 amis 平台内 http 地址会被替换成 proxy 地址，所以在 amis 平台内使用请加上 raw: 作为前缀。 比如：raw:http://www.baidu.com</code></p>\n<h3><a class=\"anchor\" name=\"dialog\" href=\"#dialog\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>dialog</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>dialog</code></td>\n<td>点击后显示一个弹出框</td>\n</tr>\n<tr>\n<td>dialog</td>\n<td><code>string</code> 或 <code>DialogObject</code></td>\n<td>-</td>\n<td>指定弹框内容，格式可参考<a href=\"/amis/docs/renderers/Dialog\">Dialog</a></td>\n</tr>\n<tr>\n<td>nextCondition</td>\n<td><code>boolean</code></td>\n<td>-</td>\n<td>可以用来设置下一条数据的条件，默认为 <code>true</code>。</td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">{\n  \"body\": {\n    \"label\": \"Dialog Form\",\n    \"type\": \"button\",\n    \"level\": \"primary\",\n    \"actionType\": \"dialog\",\n    \"dialog\": {\n      \"title\": \"表单设置\",\n      \"body\": {\n        \"type\": \"form\",\n        \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n        \"controls\": [\n          {\n            \"type\": \"text\",\n            \"name\": \"text\",\n            \"label\": \"文本\"\n          }\n        ]\n      }\n    }\n  }\n}\n</script></div>\n<h3><a class=\"anchor\" name=\"drawer\" href=\"#drawer\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>drawer</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>drawer</code></td>\n<td>点击后显示一个侧边栏</td>\n</tr>\n<tr>\n<td>drawer</td>\n<td><code>string</code> 或 <code>DrawerObject</code></td>\n<td>-</td>\n<td>指定弹框内容，格式可参考<a href=\"/amis/docs/renderers/Drawer\">Drawer</a></td>\n</tr>\n</tbody>\n</table>\n<div class=\"amis-preview\" style=\"height: 400px\"><script type=\"text/schema\" height=\"400\">  {\n    \"body\": {\n      \"label\": \"Drawer Form\",\n      \"type\": \"button\",\n      \"level\": \"primary\",\n      \"actionType\": \"drawer\",\n      \"drawer\": {\n        \"title\": \"表单设置\",\n        \"body\": {\n          \"type\": \"form\",\n          \"api\": \"https://houtai.baidu.com/api/mock2/form/saveForm?waitSeconds=1\",\n          \"controls\": [\n            {\n              \"type\": \"text\",\n              \"name\": \"text\",\n              \"label\": \"文本\"\n            }\n          ]\n        }\n      }\n    }\n  }\n</script></div>\n<h3><a class=\"anchor\" name=\"copy\" href=\"#copy\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>copy</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>copy</code></td>\n<td>复制一段内容到粘贴板</td>\n</tr>\n<tr>\n<td>content</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>指定复制的内容。可用 <code>${xxx}</code> 取值。</td>\n</tr>\n</tbody>\n</table>\n<h3><a class=\"anchor\" name=\"reload\" href=\"#reload\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>reload</h3><table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>reload</code></td>\n<td>刷新目标组件</td>\n</tr>\n<tr>\n<td>target</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>需要刷新的目标组件名字（组件的<code>name</code>值，自己配置的），多个请用 <code>,</code> 号隔开。</td>\n</tr>\n</tbody>\n</table>\n<h3><a class=\"anchor\" name=\"add\" href=\"#add\" aria-hidden=\"true\"><svg aria-hidden=\"true\" class=\"octicon octicon-link\" height=\"16\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"16\"><path d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"></path></svg></a>add</h3><p>该actionType为<a href=\"/amis/docs/renderers/FormItem-Table\">FormItem-Table</a>专用</p>\n<table>\n<thead>\n<tr>\n<th>属性名</th>\n<th>类型</th>\n<th>默认值</th>\n<th>说明</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>actionType</td>\n<td><code>string</code></td>\n<td><code>add</code></td>\n<td>给指定<code>FormItem-Table</code>添加一条数据，</td>\n</tr>\n<tr>\n<td>target</td>\n<td><code>string</code></td>\n<td>-</td>\n<td>指定<code>FormItem-Table</code>的名字（<code>Table</code>的<code>name</code>值），多个请用 <code>,</code> 号隔开。</td>\n</tr>\n</tbody>\n</table>\n\n\n<div class=\"m-t-lg b-l b-info b-3x wrapper bg-light dk\">文档内容有误？欢迎大家一起来编写，文档地址：<i class=\"fa fa-github\"></i><a href=\"https://github.com/baidu/amis/tree/master/docs/renderers/Action.md\">/docs/renderers/Action.md</a>。</div>",
    "toc": {
      "label": "目录",
      "type": "toc",
      "children": [
        {
          "label": "Action",
          "fragment": "action",
          "fullPath": "#action",
          "level": 2,
          "children": [
            {
              "label": "通用配置项",
              "fragment": "%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE%E9%A1%B9",
              "fullPath": "#%E9%80%9A%E7%94%A8%E9%85%8D%E7%BD%AE%E9%A1%B9",
              "level": 3
            },
            {
              "label": "ajax",
              "fragment": "ajax",
              "fullPath": "#ajax",
              "level": 3
            },
            {
              "label": "link",
              "fragment": "link",
              "fullPath": "#link",
              "level": 3
            },
            {
              "label": "url",
              "fragment": "url",
              "fullPath": "#url",
              "level": 3
            },
            {
              "label": "dialog",
              "fragment": "dialog",
              "fullPath": "#dialog",
              "level": 3
            },
            {
              "label": "drawer",
              "fragment": "drawer",
              "fullPath": "#drawer",
              "level": 3
            },
            {
              "label": "copy",
              "fragment": "copy",
              "fullPath": "#copy",
              "level": 3
            },
            {
              "label": "reload",
              "fragment": "reload",
              "fullPath": "#reload",
              "level": 3
            },
            {
              "label": "add",
              "fragment": "add",
              "fullPath": "#add",
              "level": 3
            }
          ]
        }
      ],
      "level": 0
    }
  };

});
