"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[7938],{503711:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a=JSON.parse('{"key":"v-5bdbe48e","path":"/devices/8850100.html","title":"Waxman 8850100 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Waxman 8850100 control via MQTT","description":"Integrate your Waxman 8850100 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2022-03-01T08:48:44.000Z"},"excerpt":"","headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Other Models","slug":"other-models","link":"#other-models","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery (numeric)","slug":"battery-numeric","link":"#battery-numeric","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1694112323000},"filePathRelative":"devices/8850100.md"}')},872510:(e,t,i)=>{i.r(t),i.d(t,{default:()=>v});var a=i(166252);const o=(0,a._)("h1",{id:"waxman-8850100",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#waxman-8850100","aria-hidden":"true"},"#"),(0,a.Uk)(" Waxman 8850100")],-1),l=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th")])],-1),n=(0,a._)("tr",null,[(0,a._)("td",null,"Model"),(0,a._)("td",null,"8850100")],-1),d=(0,a._)("td",null,"Vendor",-1),s=(0,a._)("tr",null,[(0,a._)("td",null,"Description"),(0,a._)("td",null,"leakSMART automatic water shut-off valve 2.0")],-1),r=(0,a._)("tr",null,[(0,a._)("td",null,"Exposes"),(0,a._)("td",null,"battery, switch (state), linkquality")],-1),u=(0,a._)("tr",null,[(0,a._)("td",null,"Picture"),(0,a._)("td",null,[(0,a._)("img",{src:"https://www.zigbee2mqtt.io/images/devices/8850100.jpg",alt:"Waxman 8850100"})])],-1),h=(0,a.uE)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the center button five times, quickly, to reset the device. The blue light should blink every two seconds as a confirmation, then attempt to join a network</p><h3 id="other-models" tabindex="-1"><a class="header-anchor" href="#other-models" aria-hidden="true">#</a> Other Models</h3><p>This integration should work with all manufacturer model numbers for the &quot;leakSMART Automatic Water Shut-off Valve 2.0&quot; but has only been tested with the 8850100:</p><ul><li>8850000 - 3/4&quot; Valve</li><li>8850100 - 1&quot; Valve</li><li>8850200 - 1-1/4&quot; Valve</li><li>8850300 - 1-1/2&quot; Valve</li><li>8850310 - 2&quot; Valve</li></ul>',6),c=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),p=(0,a.uE)('<ul><li><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %, can take up to 24 hours before reported.. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',8),m={},v=(0,i(983744).Z)(m,[["render",function(e,t){const i=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.kq)(" !!!! "),(0,a.kq)(" ATTENTION: This file is auto-generated through docgen! "),(0,a.kq)(' You can only edit the "Notes"-Section between the two comment lines "Notes BEGIN" and "Notes END". '),(0,a.kq)(' Do not use h1 or h2 heading within "## Notes"-Section. '),(0,a.kq)(" !!!! "),o,(0,a._)("table",null,[l,(0,a._)("tbody",null,[n,(0,a._)("tr",null,[d,(0,a._)("td",null,[(0,a.Wm)(i,{to:"/supported-devices/#v=Waxman"},{default:(0,a.w5)((()=>[(0,a.Uk)("Waxman")])),_:1})])]),s,r,u])]),(0,a.kq)(' Notes BEGIN: You can edit here. Add "## Notes" headline if not already present. '),h,(0,a.kq)(" Notes END: Do not edit below this line "),c,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(i,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[(0,a.Uk)("How to use device type specific configuration")])),_:1})])]),p])}]])}}]);