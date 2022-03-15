(window.webpackJsonp=window.webpackJsonp||[]).push([[356],{830:function(t,s,a){"use strict";a.r(s);var e=a(35),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"frontmatter-title"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#frontmatter-title"}},[t._v("#")]),t._v(" "),a("code",[t._v(t._s(t.$frontmatter.title))])]),t._v(" "),a("div",{staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.$frontmatter.usage))]),t._v(" "),a("h2",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),a("p",[a("code",[t._v("> str index-of (pattern) ...rest --range --end")])]),t._v(" "),a("h2",{attrs:{id:"parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("pattern")]),t._v(": the pattern to find index of")]),t._v(" "),a("li",[a("code",[t._v("...rest")]),t._v(": optionally returns index of pattern in string by column paths")]),t._v(" "),a("li",[a("code",[t._v("--range {any}")]),t._v(": optional start and/or end index")]),t._v(" "),a("li",[a("code",[t._v("--end")]),t._v(": search from the end of the string")])]),t._v(" "),a("h2",{attrs:{id:"examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),a("p",[t._v("Returns index of pattern in string")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my_library.rb'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str index-of "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.rb'")]),t._v("\n")])])]),a("p",[t._v("Returns index of pattern in string with start index")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.rb.rb'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str index-of "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.rb'")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1,'")]),t._v("\n")])])]),a("p",[t._v("Returns index of pattern in string with end index")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str index-of "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'6'")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("',4'")]),t._v("\n")])])]),a("p",[t._v("Returns index of pattern in string with start and end index")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str index-of "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1,4'")]),t._v("\n")])])]),a("p",[t._v("Alternatively you can use this form")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123456'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str index-of "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'3'")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("Returns index of pattern in string")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/this/is/some/path/file.txt'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" str index-of "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/'")]),t._v(" -e\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);