﻿// ==UserScript==
// @author TheDoctor Team
// @name TDTPAD_extension
// @version 1.3
// @include https://piratenpad.de/*
// @include https://*.piratenpad.de/*
// ==/UserScript==

if(window){
window._TDTPAD_USERJS_FUNCTION_=function(){window._TDTPAD_USERJS_FUNCTION_=function(){};


var D=document;if(!D||!D.body)return;var s=function(c){var e=D.createElement('script');e.innerHTML=c;D.body.appendChild(e);},a=D.getElementById('changelanguage'),b=D.getElementById('TDTPAD_init')||D.getElementById('mychangelanguage');if(!a)return;if(b)b.outerHTML='';a.outerHTML='<input type="button" value="TDTPAD" title="Активировать TDTPAD_extension!" id="TDTPAD_init" style="margin:0 4px;padding:1px;color:black;background:#eee;border:2px outset #999;cursor:pointer;" />'+a.outerHTML;s("document.getElementById('TDTPAD_init').onclick=function(){document.getElementById('TDTPAD_init').outerHTML='';(function(){var S=function(s){return s.replace(/`/g,String.fromCharCode(39));},SS=function(s){return s.replace(/`/g,String.fromCharCode(34));},f=!window.TDTPAD_FRAME;if(f)$('#editorloadingbox')[0].outerHTML+=SS('<div id=`TDTPAD_panel`></div>');if($('#TDTPAD_panel').length>0)$('#TDTPAD_panel').html('');window.TDTPAD_SCROLL=$($('iframe')[1]).contents();window.TDTPAD_FRAME=$(TDTPAD_SCROLL.find('iframe')[0]).contents();TDTPAD_FRAME._SET_SAVE=function(){window.localStorage[pad.getPadId()+'-TDTPAD-settings']=(TDTPAD_FRAME._spell_check?'1':'0')+(TDTPAD_FRAME._name_check?'1':'0')+(TDTPAD_FRAME._strike_check?'1':'0')+(''+(TDTPAD_FRAME._notif_type+1)).charAt(0);};TDTPAD_FRAME._SCROLL_LINE=function(n){var e=TDTPAD_FRAME.find('body>div'),w=TDTPAD_SCROLL[0].defaultView,f=function(e){return e.offsetTop+(e.offsetParent?f(e.offsetParent):0);};if(n>e.length||n<=0)return;e=e[n-1];w.scrollTo(0,f(e)-(w.innerHeight/2));e.style.backgroundColor='#000';e.style.color='#fff';$(e).animate({backgroundColor:'#fff',color:'#000',},900);return false;};TDTPAD_FRAME._last_hit=0;TDTPAD_FRAME._name_hit=0;TDTPAD_FRAME._NAMES=function(n){var m=$('#myusernameedit')[0].value,p=m.indexOf('|'),r;if(p<0)p=m.length;r=m.substring(0,p).trim();if(n>0)r+=' | '+(+n);if(r!=m){$('#myusernameedit')[0].value=r;pad.notifyChangeName(r)};};TDTPAD_FRAME._FORMS=function(m,n1,v1,n2,v2,n3,v3){$('#TDTPAD_panel_form')[0].method=m?'POST':'GET';if(n1==undefined)n1=v1='';if(n2==undefined)n2=v2='';if(n3==undefined)n3=v3='';var a=$('#TDTPAD_panel_1')[0];a.name=n1;a.value=v1;a=$('#TDTPAD_panel_2')[0];a.name=n2;a.value=v2;a=$('#TDTPAD_panel_3')[0];a.name=n3;a.value=v3;};TDTPAD_FRAME._BP=function(i){return'.authorColors .author-'+i.replace(/[^a-y0-9]/g,function(Cq){if(Cq=='.'){return'-';}return'z'+Cq.charCodeAt(0)+'z';});};TDTPAD_FRAME._spell_check=false;TDTPAD_FRAME._strike_check=false;TDTPAD_FRAME._strike_hit=0;TDTPAD_FRAME._name_check=false;TDTPAD_FRAME._panel2_vis=false;TDTPAD_FRAME._panel_vis=false;TDTPAD_FRAME._modal_fix=true;TDTPAD_FRAME._conn_box=$('#connectionbox')[0];TDTPAD_FRAME._modal2_fix=true;TDTPAD_FRAME._share_box=$('#sharebox')[0];TDTPAD_FRAME._color=false;TDTPAD_FRAME._full_scr=false;if(f)setInterval(function(){if(TDTPAD_FRAME._notif_defcnt>0)TDTPAD_FRAME._notif_defcnt--;if(TDTPAD_FRAME._modal_fix!=-1&&TDTPAD_FRAME._conn_box.style.display=='block')TDTPAD_FRAME._modal_fix=1;if(TDTPAD_FRAME._modal_fix==1&&TDTPAD_FRAME._conn_box.style.opacity<0.001){setTimeout(function(){TDTPAD_FRAME._conn_box.style.display=(TDTPAD_FRAME._conn_box.style.opacity>0.001?'block':'none');TDTPAD_FRAME._modal_fix=0;},800);TDTPAD_FRAME._modal_fix=-1;};if(TDTPAD_FRAME._modal2_fix!=-1&&TDTPAD_FRAME._share_box.style.display=='block')TDTPAD_FRAME._modal2_fix=1;if(TDTPAD_FRAME._modal2_fix==1&&TDTPAD_FRAME._share_box.style.opacity<0.001){setTimeout(function(){TDTPAD_FRAME._share_box.style.display=(TDTPAD_FRAME._share_box.style.opacity>0.001?'block':'none');TDTPAD_FRAME._modal2_fix=0;},800);TDTPAD_FRAME._modal2_fix=-1;};if(TDTPAD_FRAME._spell_check&&TDTPAD_FRAME._last_hit>=0){if(++TDTPAD_FRAME._last_hit>3){TDTPAD_FRAME.find('div').attr('spellCheck','true');TDTPAD_FRAME._last_hit=-1;}};if(TDTPAD_FRAME._name_check&&TDTPAD_FRAME._name_hit>=0){if(++TDTPAD_FRAME._name_hit>3&&TDTPAD_FRAME[0].getSelection()!==null){TDTPAD_FRAME._name_hit=-1;var s,i,b;b=true;s=TDTPAD_FRAME[0].getSelection().anchorNode;while(s){if(s.nodeName.toUpperCase()=='DIV'){TDTPAD_FRAME._NAMES($(s).index()+1);b=false;break;};s=s.parentNode;};if(b)TDTPAD_FRAME._NAMES(0);}};if(TDTPAD_FRAME._strike_check&&TDTPAD_FRAME._strike_hit>=0){if(++TDTPAD_FRAME._strike_hit>3){TDTPAD_FRAME._strike_hit=-1;var s,i;$(TDTPAD_FRAME.find('.TDTPAD_highlighted')[0]).removeClass('TDTPAD_highlighted');s=TDTPAD_FRAME[0].getSelection().anchorNode;while(s){if(s.nodeName.toUpperCase()=='DIV'){$(s).addClass('TDTPAD_highlighted');break;};s=s.parentNode;};}}},200);var a=S('var a=TDTPAD_FRAME._spell_check=!TDTPAD_FRAME._spell_check;TDTPAD_FRAME._SET_SAVE();this.style.background=a?`#3c3`:`#c33`;TDTPAD_FRAME.find(`div`).attr(`spellCheck`,a?`true`:`false`);'),b=S('var B=!(event.ctrlKey||event.metaKey),b=TDTPAD_FRAME._color=!TDTPAD_FRAME._color;this.style.background=b?(B?`black`:clientVars.colorPalette[pad.myUserInfo.colorId]):`white`;this.style.color=b?(B?`white`:`black`):`black`;if(b){b=`body>div{position:relative;}body`+TDTPAD_FRAME._BP(pad.myUserInfo.userId)+(B?`{background:black!important;color:white!important;}`:`{}`);var i,v,j,a=clientVars.collab_client_vars.historicalAuthorData,p=clientVars.colorPalette,c=pad.collabClient.getConnectedUsers();for(i in c)a[c[i].userId]=c[i];for(i in a){v=a[i];j=TDTPAD_FRAME._BP(i);if(v.colorId!=undefined)b+=j+`{background:`+p[v.colorId]+`!important;`+(B?`cursor:default;`:``)+`}`+(B?j+`:hover::after{position:absolute;right:-8px;bottom:-1.5em;z-index:999;padding:2px 4px;background-color:#ccc;color:#333;border:1px solid black;content:`+String.fromCharCode(34)+((v.name!==undefined&&(``+v.name).length>0)?(v.name.indexOf(`|`)>0?v.name.substring(0,v.name.indexOf(`|`)).trim():v.name):`unnamed`)+String.fromCharCode(34)+`;}`:``);}}else b=``;"+
"TDTPAD_FRAME.find(`head`).find(`#TDTPAD_style1`).html(b);'),c=S('var c=TDTPAD_FRAME._full_scr=!TDTPAD_FRAME._full_scr;this.style.background=c?`#3cc`:`#cc3`;$(`#padtop`)[0].style.display=c?`none`:``;$(`#padmain`)[0].style.position=c?`initial`:``;$(`#padmain`)[0].style.top=c?`0`:`56px`;$(`#footerbar`)[0].style.display=c?`none`:``;$(`#padeditor`)[0].style.bottom=c?`0`:``;$(`#padsidebar`)[0].style.bottom=c?`0`:``;$(`#vdraggie`)[0].style.bottom=c?`0`:``;'),d=S('var d=TDTPAD_FRAME._panel_vis=!TDTPAD_FRAME._panel_vis;this.style.background=d?`#f9f`:`#99f`;$(`#TDTPAD_panel_TR`)[0].style.display=d?`block`:`none`'),h=S('var h=TDTPAD_FRAME._panel2_vis=!TDTPAD_FRAME._panel2_vis;this.style.background=h?`#ff007f`:`#7f00ff`;$(`#TDTPAD_panel`)[0].style.height=h?`100%`:``;$(`#editorcontainer`)[0].style.display=h?`none`:`block`;$(`#TDTPAD_panel_HT`)[0].style.display=h?`block`:`none`;'),n=S('var n=TDTPAD_FRAME._name_check=!TDTPAD_FRAME._name_check;TDTPAD_FRAME._SET_SAVE();this.style.background=n?`#7fff00`:`#ff7f00`;TDTPAD_FRAME._NAMES(0);'),t=S('var n=$(`#TDTPAD_select`)[0].style; t=TDTPAD_FRAME._notif_type=this.selectedIndex;if(t==0)n.background=`#aff`;else if(t==1)n.background=`#ff6`;else if(t==2)n.background=`#f7f`;else n.background=`#eee`;TDTPAD_FRAME._SET_SAVE();'),s=S('var s=TDTPAD_FRAME._strike_check=!TDTPAD_FRAME._strike_check;TDTPAD_FRAME._SET_SAVE();this.style.background=s?`transparent`:`silver`;TDTPAD_FRAME.find(`head`).find(`#TDTPAD_style2`).html(s?(`div::before{content:@`+String.fromCharCode(8203)+`@;}s{text-decoration:none ;visibility:hidden;position:absolute;width:2px;overflow:hidden;}s::before{position:absolute;text-decoration:none;content:@.@;visibility:visible;background:silver;color:silver;position:relative;left:0;cursor:not-allowed}.TDTPAD_highlighted s{text-decoration:line-through;visibility:visible;position:relative;width:auto;overflow:visible;}.TDTPAD_highlighted s::before{content:@@;}ul{display:inline-block;}`):`div::before{content:@@;}`);').replace(/@/g,String.fromCharCode(92)+String.fromCharCode(39)),j=S('$($(`#otheruserstable`).children()[0]).addClass(`usertdswatch`);var j=$(`#TDTPAD_panel_trans`)[0].value.match(/[0-9]+/);j=j?j[0]:``;if(j==``&&TDTPAD_FRAME[0].getSelection()!==null){j=TDTPAD_FRAME[0].getSelection().toString().match(/[0-9]+/);j=j?j[0]:``;}else{$(`#TDTPAD_panel_trans`)[0].value=``;};if(j==``&&document.getSelection()!==null){j=document.getSelection().toString().match(/[0-9]+/);j=j?j[0]:``;};j=+j;if(j<=0){var s=TDTPAD_FRAME[0].getSelection().anchorNode;while(s){if(s.nodeName.toUpperCase()==`DIV`){j=$(s).index()+1;break;};s=s.parentNode;}};if(j>0)TDTPAD_FRAME._SCROLL_LINE(j);');TDTPAD_FRAME._NAMES(0);if(!$('#TDTPAD_notify')[0]){$('#editbar')[0].outerHTML+=SS('<div id=`TDTPAD_notify` style=`display:none;z-index:999;position:absolute;left:0;right:0;top:32px;border:1px solid black;background:white;color:black;padding:3px;margin:1px;`><div style=`float:left;width:20px;height:20px;margin:2px 8px 2px 2px;border:1px solid black;cursor:pointer;` id=`TDTPAD_notcolor` onclick=`;TDTPAD_FRAME._quotename(TDTPAD_FRAME._notcurrentname,true);`>&nbsp;</div><div unselectable=`on` style=`float:right;height:22px;font:bold 18px Arial;border:1px solid gray;cursor:pointer;background:silver;padding:0 12px;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;` id=`TDTPAD_notnumber`></div><span id=`TDTPAD_nottext` style=`font:normal 12px Arial;`></span><div style=`clear:both;margin-top:16px;left:0;right:0;bottom:0;display:none;background:#eee;white-space:pre;` id=`TDTPAD_notansdiv`><table border=`0`><tr><td>&nbsp;Ответить:&nbsp;</td><td style=`width:100%;`><input type=`text` style=`width:100%` id=`TDTPAD_notifanswer` value=``></td></tr></table></div></div>');$('#TDTPAD_notnumber')[0].addEventListener('click',function(e){if(e.ctrlKey||e.metaKey)TDTPAD_FRAME._notifyarray=[];TDTPAD_FRAME._notifynext(true);e.preventDefault();e.stopPropagation();return false;},true)};TDTPAD_FRAME._notifyarray=[];TDTPAD_FRAME._notifymessage=function(c,t,i,p,n){if(TDTPAD_FRAME._notif_defcnt>0){TDTPAD_FRAME._notif_defcnt=3;return;}if(i)i=1;else i=0;if(p)i=2;if(TDTPAD_FRAME._notif_type<3&&i>=TDTPAD_FRAME._notif_type){TDTPAD_FRAME._notifyarray.push({c:c,t:t,i:i,n:n});TDTPAD_FRAME._notifynext(false);}};TDTPAD_FRAME._notifynext=function(h){if(h||$('#TDTPAD_notify')[0].style.display!='block'){if(TDTPAD_FRAME._notifyarray.length>0){$('#TDTPAD_notify')[0].style.display='block';var n=TDTPAD_FRAME._notifyarray.pop();TDTPAD_FRAME._notcurrentname=n.n;$('#TDTPAD_nottext').html(n.t);$('#TDTPAD_notcolor')[0].style.background=n.c;$('#TDTPAD_notify')[0].style.background=(['#aff','#ff6','#f7f'])[n.i];}else{$('#TDTPAD_notify')[0].style.display='none';$('#TDTPAD_notifanswer')[0].value='';document.title=document.title.replace(/^\\(.*?\\)/,'').trim();return;}};var i=TDTPAD_FRAME._notifyarray.length+1;document.title='('+i+') '+document.title.replace(/^\\(.*?\\)/,'').trim();$('#TDTPAD_notnumber').html(i);};$('#changelanguage')[0].outerHTML="+
"SS('<div id=`changelanguage`><style>.TDTPAD_linelink{color:black;text-decoration:none;font-weight: bold;}#changelanguage{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}#changelanguage input{padding:0 2px;cursor:pointer;}#changelanguage input::-moz-focus-inner{padding:0;}#TDTPAD_panel_TR input[type=`submit`]{padding:0 2px;margin:2px;border:1px outset #ccc;background:#eee;cursor:pointer;}#TDTPAD_select+span{display:none;}#TDTPAD_select:hover+span,#TDTPAD_select+span:hover{display:inline;}</style><input style=`border:1px solid black;background:gray;color:white;` type=`button` value=`JP` title=`Прыжок на строку с номером из текущего выделения (или центрация курсора)` onclick=`'+j+'` />&nbsp;<input style=`border:1px solid black;background:#99f;` type=`button` value=`TR` title=`Искать или перевести что-нибудь онлайн (панель поиска)` onclick=`'+d+'` />&nbsp;<input id=`TDTPAD_select` style=`border:1px solid black;` type=`button` value=`NT` /><span id=`TDTPAD_selectspan` style=`position:relative;padding:0;left:-72px;top:-5px;`><select style=`position:absolute;z-index:999;background:white;left:0;top:0;` onchange=`'+t+'`><option>Оповещать обо всех сообщениях</option><option>Оповещать и о важных сообщениях&nbsp;</option><option>Оповещать только о личных сообщениях</option><option>Оповещения отключены</option></select></span>&nbsp;<input style=`border:1px solid black;background:#7f00ff;` type=`button` value=`CM` title=`Поиск повторяющихся слов в участке текста (панель перекрывает пад)` onclick=`'+h+'` />&nbsp;<input style=`border:1px solid black;background:#cc3;` type=`button` value=`FS` title=`Полноэкранный режим (по вертикали)` onclick=`'+c+'` />&nbsp;<input style=`border:1px solid black;background:white;color:black;` type=`button` value=`MY` title=`Подсветить чёрным свой цвет и показывать имена авторов в паде (локально)` onclick=`'+b+'` />&nbsp;<input style=`border:1px solid black;background:silver;color:black;` type=`button` value=`HD` id=`TDTPAD_pan_hd` title=`Скрывать зачёркнутый текст в паде (локально для себя)` onclick=`'+s+'` />&nbsp;<input style=`border:1px solid black;background:#ff7f00;` type=`button` value=`PN` id=`TDTPAD_pan_pn` title=`Указывать текущую строку в имени (публично для всех)` onclick=`'+n+'` />&nbsp;<input style=`border:1px solid black;background:#c33;` type=`button` value=`SC` title=`Проверять орфографию в паде (средствами браузера)` onclick=`'+a+'` id=`TDTPAD_pan_sc` />&nbsp;<span style=`position:relative;cursor:default;`>&nbsp;&nbsp;<div id=`syncstatussyncing` style=`cursor:progress;position:absolute!important;left:-1px!important;top:0!important;background:none!important;font:bold 16px Arial;line-height:10px;color:blue;` title=`Сохранение изменений на сервере…`>@</div>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>');var s=''+window.localStorage[pad.getPadId()+'-TDTPAD-settings'];if(''!=s.replace(/[0-9]/g,''))s='';s=s+'1100';if(s.charAt(0)=='1')$('#TDTPAD_pan_sc').click();if(s.charAt(1)=='1')$('#TDTPAD_pan_pn').click();if(s.charAt(2)=='1')$('#TDTPAD_pan_hd').click();TDTPAD_FRAME._notif_type=(+s.charAt(3))-1;if(TDTPAD_FRAME._notif_type>3||TDTPAD_FRAME._notif_type<0)TDTPAD_FRAME._notif_type=2;var t=$('#TDTPAD_select+span select')[0];t.selectedIndex=TDTPAD_FRAME._notif_type;t.onchange();with(TDTPAD_FRAME[0])onkeyup=onclick=function(){TDTPAD_FRAME._last_hit=TDTPAD_FRAME._name_hit=TDTPAD_FRAME._strike_hit=0;};if(TDTPAD_FRAME.find('#TDTPAD_style1').length==0)TDTPAD_FRAME.find('style')[0].outerHTML+=SS('<style id=`TDTPAD_style1`></style><style id=`TDTPAD_style2`></style>');var m=S('TDTPAD_FRAME._FORMS(0,`s`,($(`#TDTPAD_panel_trans`)[0].value));$(`#TDTPAD_panel_form`)[0].action=`http://www.multitran.ru/c/m.exe`;'),s=S('TDTPAD_FRAME._FORMS(0,`q`,($(`#TDTPAD_panel_trans`)[0].value),`num`,`50`);$(`#TDTPAD_panel_form`)[0].action=`https://www.google.com/search`;'),y=S('TDTPAD_FRAME._FORMS(0,`text`,($(`#TDTPAD_panel_trans`)[0].value),`lang`,`en-ru`);$(`#TDTPAD_panel_form`)[0].action=`https://translate.yandex.ru/`;'),c=S('TDTPAD_FRAME._FORMS(0,`dictCode`,`english`,`q`,($(`#TDTPAD_panel_trans`)[0].value));$(`#TDTPAD_panel_form`)[0].action=`http://www.collinsdictionary.com/search/`;'),w=S('TDTPAD_FRAME._FORMS(0,`search`,($(`#TDTPAD_panel_trans`)[0].value));$(`#TDTPAD_panel_form`)[0].action=`https://en.wiktionary.org/w/index.php`;'),u=S('TDTPAD_FRAME._FORMS(0,`term`,($(`#TDTPAD_panel_trans`)[0].value));$(`#TDTPAD_panel_form`)[0].action=`http://www.urbandictionary.com/define.php`;'),g=S('TDTPAD_FRAME._FORMS(1,`sl`,`en`,`tl`,`ru`,`text`,($(`#TDTPAD_panel_trans`)[0].value));$(`#TDTPAD_panel_form`)[0].action=`https://translate.google.com/`;'),r=S('TDTPAD_FRAME._FORMS(0);$(`#TDTPAD_panel_form`)[0].action=`http://context.reverso.net/translation/english-russian/`+encodeURIComponent($(`#TDTPAD_panel_trans`)[0].value);');$('#TDTPAD_panel').html(SS('<div id=`TDTPAD_panel_TR` style=`position:absolute;background:white;display:none;`><form id=`TDTPAD_panel_form` method=`GET` target=`_blank` action=`about:blank`><input type=`hidden` id=`TDTPAD_panel_1` /><input type=`hidden` id=`TDTPAD_panel_2` /><input type=`hidden` id=`TDTPAD_panel_3` /><input type=`text` size=`18` title=`Введите искомое слово или фразу:` id=`TDTPAD_panel_trans` /><input type=`submit` value=`search` title=`Поиск в интернете (google.com)` onclick=`'+s+'` /><input type=`submit` value=`multitran` title=`Словарь со многими значениями (multitran.ru)` onclick=`'+m+'` /><input type=`submit` value=`wikidict` title=`Англоязычный словарь (en.wiktionary.org)` onclick=`'+w+'` /><input type=`submit` value=`translate` title=`Машинный перевод, гугл-транслейт (translate.google.com)` onclick=`'+g+'` /><input type=`submit` value=`reverso` title=`Контекстный переводческий словарь (context.reverso.net)` onclick=`'+r+'` /><input type=`submit` value=`collins` title=`Толковый словарь Collins (www.collinsdictionary.com)` onclick=`'+c+'` /><input type=`submit` value=`urbandict` title=`Толковый пользовательский словарь (urbandictionary.com)` onclick=`'+u+'` /><input type=`submit` value=`yandex` title=`Яндекс переводчик (translate.yandex.ru)` onclick=`'+y+'` /></form></div><div id=`TDTPAD_panel_HT` style=`display:none;height:100%;`><iframe style=`border:0;width:100%;height:100%;` id=`TDTPAD_panel_frame`></iframe></div></div>'));$('.editbarbutton a').each(function(){var t=$(this)[0],h=t.href;if(h.indexOf('save')>0)$(this).parent()[0].style.display='none';else if(h.indexOf('bold')>0)t.title='Полужирный текст (Ctrl+B)';else if(h.indexOf('italic')>0)t.title='Курсивный текст (Ctrl+I)';else if(h.indexOf('underline')>0)t.title='Подчёркнутый текст (Ctrl+U)';else if(h.indexOf('strike')>0)t.title='Зачёркнутый текст (Ctrl+S)';else if(h.indexOf('insert')>0)t.title='Список с пунктами';else if(h.indexOf('indent')>0)t.title='Увеличить вложенность списка';else if(h.indexOf('outdent')>0)t.title='Уменьшить вложенность списка';else if(h.indexOf('clear')>0)t.title='Выбелить текст (Ctrl+D)';else if(h.indexOf('undo')>0)t.title='Отмена (Ctrl+Z)';else if(h.indexOf('redo')>0)t.title='Повтор (Ctrl+Y)';});$('#TDTPAD_panel_trans')[0].onkeypress=function(e,s){if(e.keyCode!=13)return true;s=this.value.trim();if(s=='')return false;if(((+s)+'')!==s)return true;TDTPAD_FRAME._SCROLL_LINE(+s);this.value='';return false;};$('#TDTPAD_panel_frame')[0].src='data:text/html;charset=windows-1251;base64,"+
"PGh0bWw+PGhlYWQ+PG1ldGEgY2hhcnNldD0id2luZG93cy0xMjUxIj48L2hlYWQ+PGJvZHk+DQoNCjxzY3JpcHQ+DQpTUD0nXHUyMDA5JzsNCmZ1bmN0aW9uIGJ1dHRvbigpew0KdGV4dGFyZWE9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RleHRhcmVhJyk7DQp4bXA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3htcCcpOw0KZGl2PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXYnKTsNCm5vYnJlYWs9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25vYnJlYWsnKS5jaGVja2VkOw0Kc3RyaWN0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdHJpY3QnKS5jaGVja2VkOw0KcnVzc2lhbj1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncnVzc2lhbicpLmNoZWNrZWQ7DQpoZWxwPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWxwJyk7DQpkaXYuaW5uZXJIVE1MPScnOw0Kc3RyPXRleHRhcmVhLnZhbHVlOw0KZml4ZWQ9ZmFsc2UNCnN0cj1zdHIucmVwbGFjZSgvQFswLTldL2csJyAnKTsNCmlmKCFub2JyZWFrKXN0cj1zdHIucmVwbGFjZSgvWyE/Lil7fVtcXV1ccy9nLCcgfCAnKS5yZXBsYWNlKC9cbi9nLCcgfCAnKTsNCmVsc2Ugc3RyPXN0ci5yZXBsYWNlKC9cLlxzL2csJyAnKTsNCnN0cj1zdHIucmVwbGFjZSgvWyosXiJAIT8oKXt9W1xdXS9nLCcgJyk7DQpzdHI9c3RyLnJlcGxhY2UoL1uXlj+WXS9nLCctJyk7DQpzdHI9c3RyLnJlcGxhY2UoLy1ccy9nLCcgJyk7DQpzdHI9c3RyLnJlcGxhY2UoL1xzKy0vZywnLScpOw0Kc3RyPXN0ci5yZXBsYWNlKC9buKhdL2csJ+UnKTsNCmlmKHJ1c3NpYW4pYT1zdHIubWF0Y2goL1vgLf/ALd8ufC1dKy9naSk7DQplbHNlIGE9c3RyLm1hdGNoKC9bYS16QS1a4C3/wC3fMC05LnwtXSsvZ2kpOw0KDQppZihzdHIudHJpbSgpPT0nJ3x8IWEpew0KaGVscC5zdHlsZS5kaXNwbGF5PSdibG9jayc7DQpyZXR1cm47DQp9DQpoZWxwLnN0eWxlLmRpc3BsYXk9J25vbmUnOw0KDQpxPVtdO249MTA7DQpmb3IoaT0wO2k8YS5sZW5ndGg7aSsrKWFbaV09YVtpXS50b0xvY2FsZUxvd2VyQ2FzZSgpOw0KZm9yKGo9MTtqPD1uO2orKylxW2pdPVtdOw0KDQpmb3Ioaj0xO2o8PW47aisrKXsNCmZvcihpPTA7aTw9YS5sZW5ndGgtajtpKyspew0Kdj0nJztmPWZhbHNlOw0KZm9yKGs9MDtrPGo7aysrKWlmKGFbaStrXSE9J3wnKXY9dithW2kra10rU1A7ZWxzZSBmPXRydWU7DQppZihmKWNvbnRpbnVlOw0KaWYocVtqXVt2XT09dW5kZWZpbmVkKXFbal1bdl09MTtlbHNlIHFbal1bdl0rKzsNCn0NCn0NCg0KZm9yKGo9MTtqPD1uO2orKylhLnB1c2goU1ApOw0KDQpyPScnOw0KZm9yKGk9MDtpPGEubGVuZ3RoLW47KXsNCmM9MTt0PTE7DQpmb3Ioaj1uO2o+MDtqLS0pew0Kdj0nJzsNCmZvcihrPTA7azxqO2srKyl2PXYrYVtpK2tdK1NQOw0KdD1qOw0KYz1xW2pdW3ZdOw0KDQp2PVt2XTsNCmlmKGM+MSl7DQoNCmZvcihwPTE7cDx0O3ArKyl7DQp2W3BdPScnOw0KZm9yKGs9MDtrPG47aysrKXZbcF09dltwXSthW2kraytwXStTUDsNCn0NCg0KYnJlYWs7DQp9DQp9DQoNCmkrPXQ7DQoNCnU9Yy0xOw0KaWYoc3RyaWN0KXsNCmlmKHU8Mil1PTA7DQplbHNlIGlmKHU8Myl1PTE7DQplbHNlIGlmKHU8NCl1PTI7DQplbHNlIHU9MzsNCmlmKHQ+Mil3PSd1JzsNCmVsc2UgaWYodD09MSl3PSduJzsNCmVsc2Ugdz0nJzsNCn1lbHNlew0KaWYodTwyKXU9MDsNCmVsc2UgaWYodTw0KXU9MTsNCmVsc2UgaWYodTw3KXU9MjsNCmVsc2UgdT0zOw0KaWYodD4zKXc9J3UnOw0KZWxzZSBpZih0PT0xKXc9J24nOw0KZWxzZSB3PScnOw0KfQ0KaWYodlswXVswXT09J3wnKXI9cisnPC9wPjxwPic7DQplbHNlIHI9cisnPHNwYW4gY2xhc3M9IicrdysnIGMnK3UrJyI+JytjKyd8Jyt2LmpvaW4oJ3wnKSsnPC9zcGFuPic7DQoNCn0NCg0KZGl2LmlubmVySFRNTD0nPHA+JytyKyc8L3A+JzsNCg0KYT1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BhbicpOw0KZm9yKGk9MDtpPGEubGVuZ3RoO2krKyl7DQpzPWFbaV07DQpzLm9ubW91c2VlbnRlcj10ZXN0Ow0Kcy5vbmNsaWNrPWZpeDsNCnY9cy5pbm5lckhUTUwuc3BsaXQoJ3wnKTsNCnMuY250PXZbMF07DQpzLmlubmVySFRNTD12WzFdOw0Kcy5hcnI9W107DQpmb3Ioaj0xO2o8di5sZW5ndGg7aisrKXMuYXJyLnB1c2godltqXSk7DQppZihzLmNudDwyKXMuY2xhc3NOYW1lPSJiIjsNCn0NCg0KfQ0KDQpmdW5jdGlvbiB0ZXN0KGUsdGhzLGhpZCl7DQoNCnZhciByPTA7DQppZihmaXhlZClyZXR1cm47DQppZihoaWQhPXVuZGVmaW5lZCl7DQpzdHI9aGlkOw0KfWVsc2V7DQppZih0aHM9PXVuZGVmaW5lZCl0aHM9dGhpczsNCnN0cj10aHMuYXJyWzBdOw0KaWYodGhzLmNudDwyKXN0cj0nfCc7DQp9DQoNCmE9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NwYW4nKTsNCmZvcihpPWEubGVuZ3RoLTE7aT49MDtpLS0pew0KDQpmb3Ioaj0wO2o8YVtpXS5hcnIubGVuZ3RoO2orKyl7DQoNCmlmKGFbaV0uYXJyW2pdLmluZGV4T2Yoc3RyKT09MCl7DQppZihoaWQhPXVuZGVmaW5lZCl7DQpjPSJtYWdlbnRhIjsNCn1lbHNlew0KaWYoYVtpXS5pbm5lckhUTUw9PXN0ciljPSJjeWFuIjsNCmVsc2Ugew0KYz0ieWVsbG93IjsNCmlmKGFbaV0uYXJyWzBdLnNwbGl0KFNQKS5sZW5ndGg8c3RyLnNwbGl0KFNQKS5sZW5ndGgrail7DQphW2krMV0uc3R5bGUuYmFja2dyb3VuZENvbG9yPWM7DQp9DQp9DQp9DQp9ZWxzZSBjPSJ3aGl0ZSI7DQphW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvcj1jOw0KaWYoYz09J3doaXRlJylhW2ldLnN0eWxlLmNvbG9yPScnOw0KZWxzZSB7DQpyKys7DQphW2ldLnN0eWxlLmNvbG9yPSdibGFjayc7DQpicmVhazsNCn0NCg0KfQ0KDQp9DQpjbnRyPXI7DQpjbnRzPXN0ci5yZXBsYWNlKC9ccy9nLCcgJykuc2xpY2UoMCwtMSk7DQpjdGl0KCk7DQp9DQoNCmNudHI9MDsNCmNudHM9Jyc7DQoNCmZ1bmN0aW9uIGN0aXQoKXsNCnZhciBzOw0KaWYoZml4ZWQ+MSl7DQpzPWNudHIrJzogIicrY250cysnIic7DQp9ZWxzZXsNCmlmKGNudHI+MClzPShmaXhlZD8nWycrY250cisnXSc6Y250cisnJykrJzogKCcrY250cysnKSc7DQplbHNlIHM9dGl0bGU7DQp9DQpkb2N1bWVudC50aXRsZT1zOw0KZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykuaW5uZXJIVE1MPShzPT10aXRsZT8nLS0nOnMpOw0KZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlMicpLmlubmVySFRNTD0ocz09dGl0bGU/Jy0tJzpzKTsNCn0NCg0KZnVuY3Rpb24gZml4KGUpew0KaWYoZml4ZWQpew0KaWYoZml4ZWQ+MilmaXhlZD0yO2Vsc2UgZml4ZWQ9MDsNCnRlc3QoZSx0aGlzKTsNCn1lbHNlew0KaWYodGhpcy5jbnQ+MSYmIWdldFNlbGVjdGlvbigpLmxlbmd0aD4wKXsNCmZpeGVkPXRydWU7DQp9DQp9DQpjdXJzKCk7DQp9DQoNCmZpeGVkPWZhbHNlOw0KDQpkb2N1bWVudC5vbm1vdXNldXA9ZG9jdW1lbnQub25rZXl1cD1mdW5jdGlvbigpew0KdmFyIHM7DQpzPWdldFNlbGVjdGlvbigpKycnOw0KaWYocyE9Jycpew0KaWYoc1swXT09U1Apcz1zLnN1YnN0cigxKTsNCmlmKHMhPScnKXsNCmZpeGVkPWZhbHNlOw0KdGVzdChudWxsLG51bGwscyk7DQpjbnRzPXMucmVwbGFjZSgvXHMvZywnICcpOw0KZml4ZWQ9MzsNCmN1cnMoKTsNCn19DQp9Ow0KDQpmdW5jdGlvbiBjdXJzKCl7DQp2YXIgYSxpOw0KYT1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc3BhbicpOw0KZm9yKGk9MDtpPGEubGVuZ3RoO2krKylhW2ldLnN0eWxlLmN1cnNvcj1maXhlZD8naGVscCc6Jyc7DQpjdGl0KCk7DQp9DQoNCnRpdGxlPSfP7uTx4uXy6uAg7+7i8u7w//756PXx/yDx6+7iICh2MS4yKSc7DQpkb2N1bWVudC50aXRsZT10aXRsZTsNCmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MPSc8c3R5bGU+I3RpdGxlLCN0aXRsZTJ7b3ZlcmZsb3c6aGlkZGVuO3doaXRlLXNwYWNlOnByZTtmb250OmJvbGQgMTJweCBBcmlhbDt9LmMwe2NvbG9yOmdyZWVuO30uYzF7Y29sb3I6YmxhY2s7fS5jMntjb2xvcjpibHVlO30uYzN7Y29sb3I6cmVkO30udXt0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lO31pe2ZvbnQtc3R5bGU6bm9ybWFsO31we21hcmdpbjowO3BhZGRpbmc6MDt0ZXh0LWluZGVudDoxOHB4O31pe2N1cnNvcjpoZWxwO30ubiwuYntmb250LXdlaWdodDpub3JtYWw7Zm9udC1zdHlsZTppdGFsaWM7fXNwYW57cGFkZGluZy1yaWdodDoxMHB4O2N1cnNvcjpkZWZhdWx0O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHlsZTpub3JtYWw7fS5pe2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1zdHlsZTpub3JtYWw7fS5ie2NvbG9yOmdyYXk7fWJvZHl7bWFyZ2luOjEwcHg7cGFkZGluZzowO2ZvbnQ6bm9ybWFsIDEycHggQXJpYWw7fTwvc3R5bGU+PHRleHRhcmVhIGlkPSJ0ZXh0YXJlYSIgc3R5bGU9IndpZHRoOjEwMCU7aGVpZ2h0OjE3NnB4OyI+PC90ZXh0YXJlYT48YnI+PGlucHV0IHR5cGU9ImJ1dHRvbiIgb25jbGljaz0iYnV0dG9uKCk7IiB2YWx1ZT0iQ09NUEFSRSI+Jm5ic3A7Jm5ic3A7PGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0ibm9icmVhayIgb25jaGFuZ2U9ImJ1dHRvbigpOyI+PGxhYmVsIGZvcj0ibm9icmVhayI+Tm9icmVhazwvbGFiZWw+Jm5ic3A7Jm5ic3A7PGlucHV0IHR5cGU9ImNoZWNrYm94IiBjaGVja2VkIGlkPSJzdHJpY3QiIG9uY2hhbmdlPSJidXR0b24oKTsiPjxsYWJlbCBmb3I9InN0cmljdCI+U2hvcnQ8L2xhYmVsPiZuYnNwOyZuYnNwOzxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9InJ1c3NpYW4iIGNoZWNrZWQgb25jaGFuZ2U9ImJ1dHRvbigpOyI+PGxhYmVsIGZvcj0icnVzc2lhbiI+UnVzc2lhbjwvbGFiZWw+Jm5ic3A7Jm5ic3A7PGlucHV0IHR5cGU9ImJ1dHRvbiIgb25jbGljaz0iZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCd0ZXh0YXJlYVwnKS52YWx1ZT1cJ1wnO2J1dHRvbigpOyIgdmFsdWU9ImhlbHAvY2xlYXIiPjxicj48aDIgaWQ9InRpdGxlIj4tLTwvaDI+PGRpdiBpZD0iZGl2Ij48L2Rpdj48ZGl2IGlkPSJoZWxwIj48YnI+z+7k8eLl8urgIO/u4vLu8P/++ej18f8g8evu4iAodjEuMikuPGJyPjxicj7C8fLg4vzy5SDy5erx8iDiIO/u6+Ug4vv45SDoIO3g5uzo8uUgq0NPTVBBUkW7Ljxicj7S8/Ig7urg5uXy8f8g5ePuIPDg5+Ho5e3o5SDt4CDx6+7i4Cwg7+7q8OD45e3t++Ug8SDz97jy7uwg6PUg7+7i8u7w/+Xs7vHy6C48YnI+zeDi5eTl7ejlIOz7+Ogg7eAg8/fg8fLu6iCWIO/u5PHi5fLq4CDq7u/o6S48YnI+2eXr9+7qIOz7+Pz+IJYg9Ojq8eD26P8g8uXq8/nl6SDv7uTx4uXy6ugg6OvoIO7y7OXt4CD06Orx4Pbo6C48YnI+wvvk5evl7ejlIPLl6vHy4CCWIO/u5PHi5fLq4CDi8eX1IO3g6eTl7e379SDl4+4g6u7v6OkuPGJyPtPt6Org6/zt++Ug8evu4uAg7eDv6PHg7fsgPGkgY2xhc3M9ImIiPvHl8PvsPC9pPiwg6CDt5ejt8uXw4Ory6OLt+y48YnI+0/fg8fLq6Cwg7+7i8u7w5e3t++UgMiDw4OfgIJYgPGkgY2xhc3M9ImMwIj7n5eu47fvsPC9pPjs8YnI+7+7i8u7w5e3t++Ug7vIgMyDk7iA0IPDg5yCWIDxpIGNsYXNzPSJjMSI+97jw7fvsPC9pPjs8YnI+7+7i8u7w5e3t++Ug7vIgNSDk7iA3IPDg5yCWIDxpIGNsYXNzPSJjMiI+8ejt6Ow8L2k+Ozxicj7v7uLy7vDl7e375SA4IOgg4e7r5eUg8ODnIJYgPGkgY2xhc3M9ImMzIj7q8ODx7fvsPC9pPi48YnI+yu7j5OAg8/fg8fLu6iDx7vHy7ujyIOjnIOXk6O3x8uLl7e3u4+4g8evu4uAsIO7tIOHz5OXyIO3g9+Xw8uDtIDxpIGNsYXNzPSJuIj7q8/Dx6OLu7DwvaT47PGJyPuru4+TgIPHu8fLu6PIg6OcgMiDo6+ggMyDx6+7iIJYgPGkgY2xhc3M9ImkiPubo8O377DwvaT47PGJyPuXx6+gg5uUg6OcgNCDoIOHu6+XlIJYg5ujw7fvsIOggPGkgY2xhc3M9ImkgdSI+7+7k97jw6u3z8vvsPC9pPi48YnI+1O7tIO/u5PHi5fLq6DogPGkgc3R5bGU9ImJhY2tncm91bmQ6Y3lhbjsiPuPu6/Ph7uk8L2k+IJYg8u737e7lIPHu4u/g5OXt6OU7PGJyPjxpIHN0eWxlPSJiYWNrZ3JvdW5kOnllbGxvdzsiPua46/L76TwvaT4gliDi9e7m5OXt6OUg4iDk8PPj7uUg4vvw4Obl7ejlLCDx6+Xi4CDo6+gg8e/w4OLgOzxicj48aSBzdHlsZT0iYmFja2dyb3VuZDptYWdlbnRhOyI+8O7n7uL76TwvaT4gliDv8Ojt8+To8uXr/O3u5SDx8ODi7eXt6OUsIOv+4fvlIPHu4u/g5OXt6P8uPGJyPsLx5SDn7eDq6CDv8OXv6O3g7ej/IOjj7e7w6PDz/vLx/ywg6vDu7OUg8u735eog4iDx5fDl5Ojt5SDx6+7i4CDoIOTl9Ojx7uIuPGJyPtDg4e7y4P7yIPDz8fHq6OUg6CDg7ePr6Onx6ujlIOHz6uL7IOgg9uj08PssIPDl4+jx8vAg7eXw4Ofr6Pfo7Cwg6uDqIOggqC3FLjxicj7K4Obk7uUg8fDg4u3l7ejlIO/w7ujx9e7k6PIg7vIg7eD34OvgIPHr7uLgLjxicj7F8evoIOL17ubk5e3o5SDv5fDl8eX3uPIg4/Dg7ej28yD08ODnLCDi++Tl6+Xt+yDh8+Tz8iDu4eUuPGJyPtEg9Ovg5uru7CCrTm9icmVha7sg7eUg8/fo8vvi4OXy8f8g8ODn4ejl7ejlIO3gIODh5+D2+yDoIO/w5eTr7ubl7ej/Ljxicj7U6+Dm7uogq1Nob3J0uyDs5e3/5fIg6u7r6Pfl8fLi5e3t++Ug4uXx4CDi++Tl6+Xt6P8sIPEg7ejsPGJyPufl67jt++kt97jw7fvpLfHo7ejpLerw4PHt++kg8e7u8uLl8vHy4uXt7e4g8ODi7fsgMS0yLTMtNIU8YnI+6CDq8/Dx6OIt5ujw7fvpLe/u5Pe48Ort8/L76SCWIPLg6ublIDEtMi0zhTxicj7RIPTr4Obq7uwgq1J1c3NpYW67IO7h8ODh4PL74uD+8vH/IOjx6uv+9+jy5ev87e4g8PPx8ero5SDh8+ri+y48L2Rpdj48aDIgaWQ9InRpdGxlMiI+LS08L2gyPjx4bXAgaWQ9InhtcCI+PC94bXA+JzsNCjwvc2NyaXB0PjwvYm9keT48L2h0bWw+"+
"';TDTPAD_FRAME._notif_defer=function(){TDTPAD_FRAME._notif_defcnt=75;};TDTPAD_FRAME._notif_defer();if(!TDTPAD_FRAME._padchat){TDTPAD_FRAME._padchat=true;TDTPAD_FRAME._quotename=function(n,f){var t,s,c,m,b;if(!f)t=$('#chatentrybox')[0];else{m=$('#TDTPAD_notansdiv')[0];if(m.style.display=='none'){m.style.display='block';$('#TDTPAD_notifanswer')[0].value='';return;};t=$('#TDTPAD_notifanswer')[0];};s=t.value;c=n.length;b=s.length;if(c>0&&s.substring(b-c,b)!=n){if(b>0&&s.charAt(b)!=' ')s+=' ';t.value=s+n;}t.focus();};padutils.bindEnterAndEscape($('#TDTPAD_notifanswer'),function(e){$('#chatentrybox')[0].value=$('#TDTPAD_notifanswer')[0].value;e=$.Event('keypress');e.which=13;$('#chatentrybox').trigger(e);var t=$('#TDTPAD_notifanswer')[0];t.value='';t.focus();$('#TDTPAD_notansdiv')[0].style.display='none';TDTPAD_FRAME._notifynext(true);},function(e){TDTPAD_FRAME._notifynext(true);});$('#padchat')[0].addEventListener('click',function(e){if(!(e.ctrlKey||e.metaKey))return;e=e.target;while(e){if(e.nodeName.toUpperCase()=='DIV'){if(e.alt!=undefined&&e.alt.length&&e.alt.length>0)TDTPAD_FRAME._quotename(e.alt);break;};e=e.parentNode;}},true);$('#otherusers')[0].addEventListener('click',function(e){e=e.target;if(e.alt!=undefined&&e.alt.length&&e.alt.length>0)TDTPAD_FRAME._quotename(e.alt);},true);$('#chatloadmore')[0].addEventListener('click',TDTPAD_FRAME._notif_defer,true);var b_=function(ss){var s=' '+ss,C=String.fromCharCode(2),c=String.fromCharCode(1);s=s.replace(new RegExp(c+'|'+C,'g'),''),A=[];s=s.replace(/<a .*?.*?\\/a>/g,function(v){A[A.length]=v;return C+'-';});var I=0,i,l,t,a=s.match(/[-–—•|=…\\s+;,&^#№.!?*(){}<>«»~\\/\\\\[\\]][0-9]+/g);TDTPAD_FRAME._Bhave=false;if(!a)return ss;l=a.length;t=s;for(i=0;i<l;i++)t=t.replace((a[i]=a[i].substring(1)),c);TDTPAD_FRAME._Bhave=true;for(i=0;i<l;i++)t=t.replace(c,'<a href=\\'javascript:void('+a[i]+')\\' class=\\'TDTPAD_linelink\\' onclick=\\'return TDTPAD_FRAME._SCROLL_LINE('+a[i]+');\\'>'+a[i]+'</a>');return t.replace(new RegExp(C+'-','g'),function(){return A[I++];}).substring(1);},c_=function(m){var n=0,p=m.indexOf('|'),r;if(p<0)p=m.length;else{n=m.substring(p+1).trim().match(/[0-9]+/g);if(n)n=+n[0];else n=0;}r=m.substring(0,p).trim();TDTPAD_FRAME._Chave=false;if(n<=0)return m;TDTPAD_FRAME._Chave=true;return('<a href=\\'javascript:void('+n+')\\' style=\\'font-weight:normal;text-decoration:underline;\\' class=\\'TDTPAD_linelink\\' title=\\''+n+'\\' onclick=\\'return TDTPAD_FRAME._SCROLL_LINE('+n+');\\'>'+r+'</a>');},a_=function(){var F=function(x){var i;i=x.lastIndexOf(':');if(i>0)x=x.substr(0,i);i=x.indexOf('|');if(i>0)x=x.substr(0,i);x=x.trim();i=x.indexOf('TDTPAD_FRAME._SCROLL_LINE');if(i>0){i=x.indexOf('>');x=x.substr(i+1);i=x.lastIndexOf('<');x=x.substr(0,i);}return x.trim();},d,m,n,i,a,t=$(this).parent().find('.chatlinetext')[0];m=t.innerHTML=b_(t.innerHTML);t=$(this).removeClass('chatlinename').addClass('chatlinetext')[0];d=pad.getUserName().trim();d=d.indexOf('|')>0?d.substring(0,d.indexOf('|')).trim():d;i=(m.replace(/<.*?>/g,'').indexOf(d)>=0||(m.trim().charAt(0)=='!'&&m.trim().length>3));a=t.innerHTML.trim();if(a.indexOf('|')>=0)a=a.substring(0,a.indexOf('|')).trim();else if(a.indexOf(':')>=0)a=a.substring(0,a.indexOf(':')).trim();$(this).parent()[0].alt=a;m=(n=t.innerHTML=c_(t.innerHTML)+(TDTPAD_FRAME._Chave?': ':''))+m;if(F(n)!=d.trim())TDTPAD_FRAME._notifymessage($(this).parent()[0].style.background,m,TDTPAD_FRAME._Bhave,i,a);},d_=function(){var i=$('#otheruserstable .usertdswatch');if(i.length>0){TDTPAD_FRAME._ARR_MORE=[];TDTPAD_FRAME._ARR_STR='';TDTPAD_FRAME._ARR_USR=[];i.each(function(){$(this)[0].style.width='1%';$(this).removeClass('usertdswatch');});$('#otheruserstable .usertdname').each(function(){var m,s,v=$(this),P=$(this).parent();m=v.find('u');if(m[0])m=m.html();else m=v.html();var n=0,p=m.indexOf('|'),r;if(p<0)p=m.length;else{n=m.substring(p+1).trim().match(/[0-9]+/g);if(n)n=+n[0];else n=0;};r=m.substring(0,p).trim();s=P.find('.swatch')[0];s.style.cursor='pointer';s.alt=r.replace('(Guest)','').trim();if(n>0){m=('<u style=\\'cursor:pointer;\\' onclick=\\'return TDTPAD_FRAME._SCROLL_LINE('+n+');\\'>'+m+'</u>');v.html(m);TDTPAD_FRAME._ARR_USR.push({n:n,u:r,c:(s.style.background)});}});var s,d,x,o,v,i,l=TDTPAD_FRAME._ARR_USR.length;for(i=0;i<l;i++){v=TDTPAD_FRAME._ARR_USR[i];d=TDTPAD_SCROLL.find('div');o=d[v.n].offsetTop;if(!TDTPAD_FRAME._ARR_MORE[o])x=TDTPAD_FRAME._ARR_MORE[o]=1;else x=(TDTPAD_FRAME._ARR_MORE[o]+=4);TDTPAD_FRAME._ARR_STR+='<span title=\\''+v.u+'\\' style=\\'cursor:help;font-size:12px;background:'+v.c+';position:absolute;left:'+x+'px;top:'+(o+9)+'px\\'>'+String.fromCharCode(8196)+'</span>';};TDTPAD_SCROLL.find('#TDTPAD_usershow').html(TDTPAD_FRAME._ARR_STR);}};TDTPAD_FRAME._C_NAME_=c_;setInterval(function(){$('.chatlinename').each(a_);d_();},800);TDTPAD_FRAME[0].addEventListener('keydown',function(e){if(!e.shiftKey&&!e.altKey&&(e.ctrlKey||e.metaKey)&&(e.keyCode==83||e.keyCode==68)){if(TDTPAD_FRAME[0].getSelection()!==null&&TDTPAD_FRAME[0].getSelection().toString().length>0)pad.editbarClick(e.keyCode==83?'strikethrough':'clearauthorship');if(e.keyCode==68&&TDTPAD_FRAME[0].getSelection()!==null)TDTPAD_FRAME[0].getSelection().collapseToEnd();e.preventDefault();return false;}},true);};if(TDTPAD_SCROLL.find('#TDTPAD_usershow').length==0)TDTPAD_SCROLL.find('#overlaysdiv')[0].outerHTML+='<span id=\\'TDTPAD_usershow\\'></span>';if(!TDTPAD_SCROLL.find('#_myscroll_style_')[0])TDTPAD_SCROLL.find('head link')[0].outerHTML+='<style id=\\'_myscroll_style_\\'>.TDTPAD_bookmark{color:white;background:gray;}</style>';if(!$('#TDTPAD_bookmarks')[0]){$('#warnMessage')[0].outerHTML+='<div id=\\'TDTPAD_bookmarks\\' style=\\'display:inline;position:relative;padding:2px;top:-12px;background:silver;height:12px;\\'></div>';TDTPAD_SCROLL.find('#sidedivinner').click(function(e){e=$(e.target).index()+1;if(e>0){TDTPAD_FRAME._LINENUM_CLICK(e);}});};TDTPAD_FRAME._LINENUM_CLICK=function(n){var t,n,s,A,a=TDTPAD_SCROLL.find('#sidedivinner div'),i,l;l=TDTPAD_FRAME._BOOKS.length;if(n>0)TDTPAD_FRAME._BOOKS[l++]=n;for(i=0;i<l;i++)TDTPAD_FRAME._BOOKS[i]=+TDTPAD_FRAME._BOOKS[i];TDTPAD_FRAME._BOOKS=TDTPAD_FRAME._BOOKS.sort(function(a,b){return(a-b);});A=[];for(i=0;i<l;i++)if(TDTPAD_FRAME._BOOKS[i]<=0)continue;else if(i!=l-1&&TDTPAD_FRAME._BOOKS[i]==TDTPAD_FRAME._BOOKS[i+1])i++;else if(TDTPAD_FRAME._BOOKS[i]<=a.length)A[A.length]=TDTPAD_FRAME._BOOKS[i];TDTPAD_FRAME._BOOKS=A;l=A.length;TDTPAD_SCROLL.find('.TDTPAD_bookmark').removeClass('TDTPAD_bookmark');for(i=0;i<l;i++)$(a[TDTPAD_FRAME._BOOKS[i]-1]).addClass('TDTPAD_bookmark');s='';for(i=0;i<l;i++){n=TDTPAD_FRAME._BOOKS[i];t=TDTPAD_FRAME.find('div')[n-1];if(!t)t='';else t=$(t).text().trim();s+='<a href=\\'javascript:void('+n+')\\' title=\\''+t+'\\' style=\\'padding:3px;color:black;text-decoration:none;\\' onclick=\\'TDTPAD_FRAME._LINENUM_CLICK(0);return TDTPAD_FRAME._SCROLL_LINE('+n+');\\'>'+n+'</a>'};$('#TDTPAD_bookmarks').html(s)[0].style.display=(l?'inline':'none');window.localStorage[TDTPAD_FRAME._bookmarks]=TDTPAD_FRAME._BOOKS.join(',');};TDTPAD_FRAME._bookmarks=pad.getPadId()+'-TDTPAD-bookmarks';var b=window.localStorage[TDTPAD_FRAME._bookmarks];if(b)b=b.split(',');TDTPAD_FRAME._BOOKS=b?b:[];TDTPAD_FRAME._LINENUM_CLICK(0);if(!TDTPAD_FRAME._whitecol){TDTPAD_FRAME._whitecol=true;$('#myswatch')[0].addEventListener('click',function(e){padeditor.ace.callWithAce(function(a){a.editor.setProperty('userAuthor',pad.getUserId());});if(e.ctrlKey||e.metaKey){padeditor.ace.callWithAce(function(a){a.editor.setProperty('userAuthor','g.whitetext');});e.preventDefault();e.stopPropagation();$('#myswatch')[0].style.background='white';return false;}return true;},true);$('#TDTPAD_bookmarks')[0].addEventListener('click',function(e){if(e.ctrlKey||e.metaKey){if(TDTPAD_FRAME._BOOKS.length>0)if(window.confirm('Очистить закладки?'))TDTPAD_FRAME._LINENUM_CLICK(TDTPAD_FRAME._BOOKS=[]);};return true;},true);};TDTPAD_FRAME._TDTPAD_selectspan=$('#TDTPAD_selectspan')[0];$('#TDTPAD_select')[0].onclick=TDTPAD_FRAME._TDTPAD_selectspan.onclick=function(){TDTPAD_FRAME._TDTPAD_selectspan.style.display='inline';setTimeout(function(){TDTPAD_FRAME._TDTPAD_selectspan.style.display='';},1000);};"+
"{!function(r){function e(e){var a;return e&&e.constructor==Array&&3==e.length?e:(a=/rgb\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\)/.exec(e))?[parseInt(a[1]),parseInt(a[2]),parseInt(a[3])]:(a=/rgb\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*\\)/.exec(e))?[2.55*parseFloat(a[1]),2.55*parseFloat(a[2]),2.55*parseFloat(a[3])]:(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(e))?[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]:(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(e))?[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]:t[r.trim(e).toLowerCase()]}function a(a,t){var o;do{if(o=r.curCSS(a,t),''!=o&&'transparent'!=o||r.nodeName(a,'body'))break;t='backgroundColor'}while(a=a.parentNode);return e(o)}r.each(['backgroundColor','borderBottomColor','borderLeftColor','borderRightColor','borderTopColor','color','outlineColor'],function(t,o){r.fx.step[o]=function(r){0==r.state&&(r.start=a(r.elem,o),r.end=e(r.end)),r.elem.style[o]='rgb('+[Math.max(Math.min(parseInt(r.pos*(r.end[0]-r.start[0])+r.start[0]),255),0),Math.max(Math.min(parseInt(r.pos*(r.end[1]-r.start[1])+r.start[1]),255),0),Math.max(Math.min(parseInt(r.pos*(r.end[2]-r.start[2])+r.start[2]),255),0)].join(',')+')'}});var t={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]}}(jQuery);}})();};");};


if(window.document&&document.addEventListener)document.addEventListener('DOMContentLoaded',window._TDTPAD_USERJS_FUNCTION_,true);
if(window.addEventListener)window.addEventListener('DOMContentLoaded',window._TDTPAD_USERJS_FUNCTION_,true);
if(document.readyState=="complete"||document.readyState=="loaded"||document.readyState== "interactive")window._TDTPAD_USERJS_FUNCTION_();}
//EOF