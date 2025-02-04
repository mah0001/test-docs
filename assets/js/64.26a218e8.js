(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{722:function(t,e,a){"use strict";a.r(e);var s=a(27),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade-from-4-2-to-4-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-4-2-to-4-3"}},[t._v("#")]),t._v(" Upgrade from 4.2 to 4.3")]),t._v(" "),a("p",[t._v("The upgrade includes changes to the theme and will not work with your existing NADA 4.2 theme.")]),t._v(" "),a("h2",{attrs:{id:"_1-apply-patch-to-upgrade"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-apply-patch-to-upgrade"}},[t._v("#")]),t._v(" 1. Apply patch to upgrade")]),t._v(" "),a("p",[t._v('a. Make a backup of your existing NADA folders. If complete backup is not possible, at least backup the "Application" and "Themes" folder\nb. Download the patch zip file: '),a("a",{attrs:{href:"http://ihsn.org/download/nada42-to-43-update.zip",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://ihsn.org/download/nada42-to-43-update.zip"),a("OutboundLink")],1),t._v('\nc. Unzip the patch files in the NADA root folder to replace existing files\nd. Run this query on the database to add the new "Open data" access type')]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" forms "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Open access'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'open'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"_2-update-theme-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-update-theme-template"}},[t._v("#")]),t._v(" 2. Update Theme/template")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Important")]),t._v(" "),a("p",[t._v("The default theme has changed in NADA. This is a major change and will break your existing website layout/theme. To upgrade you theme, please follow the steps below:")])]),t._v(" "),a("h2",{attrs:{id:"_2-1-website-using-the-default-theme-wb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-website-using-the-default-theme-wb"}},[t._v("#")]),t._v(' 2.1. Website using the default theme "WB":')]),t._v(" "),a("p",[t._v("Edit the "),a("strong",[t._v("application/config/template.php")]),t._v(" and change the default theme name to "),a("strong",[t._v('"wb2"')]),t._v(" instead of "),a("strong",[t._v('"wb"')])]),t._v(" "),a("h2",{attrs:{id:"_2-2-websites-with-heavily-customized-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-websites-with-heavily-customized-theme"}},[t._v("#")]),t._v(" 2.2. Websites with heavily customized theme")]),t._v(" "),a("p",[t._v("a. Backup your theme folder\nb. Make a copy of the "),a("strong",[t._v("themes/wb2")]),t._v(" folder to create a new theme folder\nc. Apply all the customizations (header, footer, styles, etc) to your copy of the "),a("strong",[t._v("wb2 theme")]),t._v(".\nd. Update the "),a("strong",[t._v("application/config/template")]),t._v(" to use your new theme.")])])}),[],!1,null,null,null);e.default=n.exports}}]);