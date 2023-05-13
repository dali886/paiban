function OnEnter( field ) { if( field.value == field.defaultValue ) { field.value = ""; } }
function OnExit( field ) { if( field.value == "" ) { field.value = field.defaultValue; } }
function Empty(){document.getElementById('inputstr').value='';}
function copy(ob){var obj=findObj(ob);if(obj){obj.select();try{if(document.execCommand("copy",false,null)){document.execCommand("Copy");document.getElementById("handleResult").innerHTML="复制成功"}else{document.getElementById("handleResult").innerHTML="复制失败，请手动复制"}}catch(err){document.getElementById("handleResult").innerHTML="复制失败，请手动复制"}setTimeout(function(){document.getElementById("handleResult").innerHTML=""},1000)}}function paste(ob){var obj=findObj(ob);if(obj){obj.select();try{if(document.execCommand("paste",false,null)){document.execCommand("Paste");document.getElementById("handleResult").innerHTML="粘贴成功"}else{document.getElementById("handleResult").innerHTML="粘贴失败，请手动粘贴"}}catch(err){document.getElementById("handleResult").innerHTML="粘贴失败，请手动粘贴"}setTimeout(function(){document.getElementById("handleResult").innerHTML=""},1000)}}function cut(ob){var obj=findObj(ob);if(obj){obj.select();try{if(document.execCommand("cut",false,null)){document.execCommand("Cut");document.getElementById("handleResult").innerHTML="剪切成功"}else{document.getElementById("handleResult").innerHTML="剪切失败，请手动剪切"}}catch(err){document.getElementById("handleResult").innerHTML="剪切失败，请手动剪切"}setTimeout(function(){document.getElementById("handleResult").innerHTML=""},1000)}}function findObj(n,d){var p,i,x;if(!d){d=document}if((p=n.indexOf("?"))>0&&parent.frames.length){d=parent.frames[n.substring(p+1)].document;n=n.substring(0,p)}if(!(x=d[n])&&d.all){x=d.all[n]}for(i=0;!x&&i<d.forms.length;i++){x=d.forms[i][n]}for(i=0;!x&&d.layers&&i<d.layers.length;i++){x=findObj(n,d.layers[i].document)}if(!x&&document.getElementById){x=document.getElementById(n)}return x}function qqPYStr(){return""}function traditionalized(cc){var str="";var $language=document.getElementsByName("language");var language="";if($language.length>0){language=$language[1].checked?"zh_TW":""};if(language=="zh_TW"){for(var i in zh_TW){if(cc.indexOf(i)>-1){cc=cc.replace(new RegExp(i,"g"),zh_TW[i])}}}for(var i=0;i<cc.length;i++){if(charPYStr().indexOf(cc.charAt(i))!=-1){str+=ftPYStr().charAt(charPYStr().indexOf(cc.charAt(i)))}else{if(qqPYStr().indexOf(cc.charAt(i))!=-1){str+=ftPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)))}else{str+=cc.charAt(i)}}}return str}function simplized(cc){var str="";for(var i=0;i<cc.length;i++){if(ftPYStr().indexOf(cc.charAt(i))!=-1){str+=charPYStr().charAt(ftPYStr().indexOf(cc.charAt(i)))}else{if(qqPYStr().indexOf(cc.charAt(i))!=-1){str+=charPYStr().charAt(qqPYStr().indexOf(cc.charAt(i)))}else{str+=cc.charAt(i)}}}for(i in toSimplified){if(str.indexOf(i)>-1){str=str.replace(new RegExp(i,"g"),toSimplified[i])}}return str}function convert(nOption){if(nOption==0){document.getElementById('inputstr').value=simplized(document.getElementById('inputstr').value)}else{if(nOption==2){document.getElementById('inputstr').value=qqlized(document.getElementById('inputstr').value)}else{document.getElementById('inputstr').value=traditionalized(document.getElementById('inputstr').value)}}};

function banner_ad() {}

function ad_word_link() {}

// 行政区域/社医保公积金手机版
function ad_wap_area() {
	if(isMobile()){
		
	}
}

function ad_area_pc_300X250() {
	if(!isMobile()){
		
	}
}

function bookmark(){
    if (document.all){   
        try{   
            window.external.addFavorite(window.location.href,document.title);   
        }catch(e){   
            alert( "您的浏览器不支持自动加入收藏，请使用Ctrl+D进行添加" );   
        }    
    }else if (window.sidebar){   
        window.sidebar.addPanel(document.title, window.location.href, "");   
     }else{   
        alert( "您的浏览器不支持自动加入收藏，请使用Ctrl+D进行添加" );   
    }
}


//判断手机还是电脑,true是手机;
function isMobile(){
	if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
		return true;
	} else {
		return false;
	}
}

//统计
function baidutj() {
	document.writeln("<script>");
	document.writeln("var _hmt = _hmt || [];");
	document.writeln("(function() {");
	document.writeln("  var hm = document.createElement(\'script\');");
	document.writeln("  hm.src = ['htt','ps://','hm','.ba','idu.','com','/hm','.js?8269726','42ed0160b','152aa441dfaecef6'].join('');");
	document.writeln("  var s = document.getElementsByTagName(\'script\')[0]; ");
	document.writeln("  s.parentNode.insertBefore(hm, s);");
	document.writeln("})();");
	document.writeln("</script>");
	document.writeln("");
}

function footer(){
	document.writeln("<div class=\'footer\'>");
	document.writeln("   Copyright (C) <a href=\'http://www.kw360.net\' title=\'计算器在线\'>计算器在线</a> 2015-2023");
	document.writeln("   <br/>");
	document.writeln("<a href=\'http://www.kw360.net\' title=\'计算器在线\'><img src=\'http://www.kw360.net/public/image/calc_footer.jpg\' width=\'50\' alt=\'计算器在线\' /></a>");
	document.writeln("<script>baidutj();</script>");
	document.writeln("</div>");
}

function footerCopy(){
	document.writeln("<div class=\'footer\'>");
	document.writeln("   Copyright (C) 快我生活 2015-2023");
	document.writeln("   <br/>");
	document.writeln("   声明：本站内容均由用户自行上传分享，仅供网友学习交流。若您的权利被侵害，请联系 904859050@qq.com");
	document.writeln("<script>baidutj();</script>");
	document.writeln("</div>");
}

//首页 180*130 pc
function advertIndexHot01() {
	if(!isMobile()){
		
	}
}

//首页 180*130 pc
function advertIndexHot02() {
	if(!isMobile()){
		
	}
}

function advertIndexMobile() {
	// 240-wap-图文
	if(isMobile()){
		
	}
}

// otherShebao-yibao-gongjijinTools
function otherShebaoTools() {
	// 240-wap-图文
	if(isMobile()){
		
		
	} else {
		
	}
}

function advertContentTop() {
	if(isMobile()){
		
	} else {
		
	}
}

function advertContentBottom() {
	if(isMobile()){
			
	} else {
		
	}
}

// 专题页PC没
function otherToolsZhuanti() {
	// 240-wap-图文
	if(isMobile()){
		
	}
	toolsList();		
}

// 其它工具
function otherTools() {
	// 240-wap-图文
	if(isMobile()){
		
	} else {
		document.writeln('<!-- 电脑版 -->');
		document.writeln('<div style="padding:0;margin-bottom:5px;margin-top:0;text-align: center;">');
		document.writeln('</div>');
	}
	toolsList();		
}

function toolsList(){
	document.writeln("<div class=\'clear\'><br/></div>");
document.writeln("	<a href=\'javascript:;\' id=\'hanldeOtherTools\' onclick=\'showOtherTools()\'>点击展开更多工具∨</a>");
document.writeln("	<div id=\'otherTools\' class=\'hide\'>");
document.writeln("	<div class=\'othertoolscontent\'>");
document.writeln("  <ul class=\'othertoolstitle\'>");
document.writeln("  	<li class=\'active\'>常用工具</li>");
document.writeln("  	<li>生活计算</li>");
document.writeln("  	<li>个税理财</li>");
document.writeln("  	<li>文本工具</li>");
document.writeln("  	<li>转换工具</li>");
document.writeln("  	<li>开发工具</li>");
document.writeln("  	<li>其它工具</li>");
document.writeln("  	<li>栏目分类</li>");
document.writeln("  </ul>");
document.writeln("  <div name=\'subnavdiv\' class=\'subnav\' style=\'display: block;\'>");
document.writeln("  <a href=\'/fanti.html\' target=\'_blank\'>繁体字在线转换</a>");
document.writeln("  <a href=\'/rmb/\'>人民币金额转大写</a>");
document.writeln("  <a href=\'/pinyin/\' target=\'_blank\'>汉字转拼音</a>");
document.writeln("  <a href=\'/fuhao.html\' target=\'_blank\'>特殊符号大全</a>");
document.writeln("  <a href=\'/gerenshui/\' target=\'_blank\'>个人所得税在线计算</a>");
document.writeln("  <a href=\'/timestamp/\' target=\'_blank\'>时间戳转日期</a>");
document.writeln("  <a href=\'/danwei/\' target=\'_blank\'>单位转换</a>");
document.writeln("  <a href=\'/yijianpaiban/\' style=\'color:#FF5722;\' target=\'_blank\'>一键排版工具</a>");
document.writeln("  <a href=\'/ox2str/\' target=\'_blank\'>字符串转16进制</a>");
document.writeln("  <a href=\'/hexconvert/\' target=\'_blank\'>进制转换</a>");
document.writeln("  <a href=\'/daxiaoxie/\' target=\'_blank\'>英文字母大小写转换</a>");
document.writeln("  <a href=\'/htmlformat/\' target=\'_blank\'>HTML格式化</a>");
document.writeln("  <a href=\'/css/cssformat.html\' target=\'_blank\'>Css格式化</a>");
document.writeln("  <a href=\'/md5/\' target=\'_blank\'>MD5加密</a>");
document.writeln("  <a href=\'/color/rgb.html\' target=\'_blank\'>RGB调色板</a>");
document.writeln("  <a href=\'/quanbanjiao/\' target=\'_blank\'>全角半角转换</a>");
document.writeln("  <a href=\'/fantizi/\'>繁体字转换器 <i class=\'ico-hot\'></i></a>");
document.writeln("  <a href=\'/zidian/\'>在线字典查字</a>");
document.writeln("  <a href=\'/ciyu/\'>词语大全接龙</a>");
document.writeln("  <a href=\'/chengyu/\'>成语大全</a>");
document.writeln("  <a href=\'/xiehouyu/\'>歇后语大全</a>");
document.writeln("  <a href=\'http://txt.kw360.net/\'>文本工具</a>");
document.writeln("  </div>");
document.writeln("  <div name=\'subnavdiv\' class=\'subnav\' style=\'display: none;\'>");
document.writeln("  <a href=\'http://www.12333si.com\' style=\'color:#ff9941;\' target=\'_blank\'>社保查询个人账户</a>");
document.writeln("  <a href=\'/shijian/\' target=\'_blank\'>现在北京时间</a>");
document.writeln("  <a href=\'/worldtime/\' target=\'_blank\'>世界时间转换器</a>");
document.writeln("  <a href=\'/shenfenzheng/\' target=\'_blank\'>身份证号码查询验证</a>");
document.writeln("  <a href=\'/changyongtel/\' target=\'_blank\'>常用电话号码大全</a>");
document.writeln("  <a href=\'/chepai/\' target=\'_blank\'>车牌号所属地</a>");
document.writeln("  <a href=\'/quhao/\' target=\'_blank\'>电话区号查询</a>");
document.writeln("  <a href=\'/tel/\' target=\'_blank\'>座机归属查询</a>");
document.writeln("  <a href=\'/sj/\' target=\'_blank\'>手机号码归属查询</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/rili/\' target=\'_blank\'>万年历查询</a>");
document.writeln("  <a href=\'/daxue/\' style=\'color:#FF5722;\' target=\'_blank\'>全国大学查询</a>");
document.writeln("  <a href=\'/chengrendaxue/\' target=\'_blank\'>全国成人大学查询</a>");
document.writeln("  <a href=\'/qinqi/\' target=\'_blank\'>中国亲戚关系计算器</a>");
document.writeln("  <a href=\'/qinqi/m.html\' target=\'_blank\'>亲戚计算器</a>");
document.writeln("  <a href=\'/shishucha/\' target=\'_blank\'>相隔小时计算</a>");
document.writeln("  <a href=\'/tianshucha/\' target=\'_blank\'>24小时时间差计算器</a>");
document.writeln("  <a href=\'/dijizhou/\' target=\'_blank\'>今天是第几周</a>");
document.writeln("  <a href=\'/todayweek/\' target=\'_blank\'>今天是星期几</a>");
document.writeln("  <a href=\'/\' target=\'_blank\'>在线计算器</a>");
document.writeln("  <a href=\'/baijiaxing/\' target=\'_blank\'>百家姓</a>");
document.writeln("  <a href=\'/biaozhi/\' target=\'_blank\'>交通标志大全</a>");
document.writeln("  <a href=\'/wnl/\' target=\'_blank\'>农历阴历查询</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/jiankang/pailuanqi.html\' style=\'color:#ff9941;\' target=\'_blank\'>安全期计算器</a>");
document.writeln("  <a href=\'/jiankang/xuexing.html\' target=\'_blank\'>孩子血型计算器</a>");
document.writeln("  <a href=\'/jiankang/shengao.html\' target=\'_blank\'>子女身高预测</a>");
document.writeln("  <a href=\'/jiankang/bmi.html\' target=\'_blank\'>BMI身体质量指数计算</a>");
document.writeln("  <a href=\'/jiankang/yuchanqi.html\' target=\'_blank\'>预产期计算器</a>");
document.writeln("  <a href=\'/nianlingjsq/index.html\'>年龄计算器</a>");
document.writeln("  <a href=\'/nianlingjsq/all.html\'>计算活了多少天</a>");
document.writeln("  <a href=\'/dianfei/\'>电费计算</a>");
document.writeln("  </div>");
document.writeln("  <div name=\'subnavdiv\' class=\'subnav\' style=\'display: none;\'>");
document.writeln("  <a href=\'/gerenshui/\' style=\'color:#ff9941;\' target=\'_blank\'>个人所得税计算器</a>");
document.writeln("  <a href=\'/gerenshui/gongzi.html\' target=\'_blank\'>税后工资计算</a>");
document.writeln("  <a href=\'/gerenshui/nianzhongjiang.html\' target=\'_blank\'>年终奖个人所得税</a>");
document.writeln("  <a href=\'/gerenshui/gongzi.html\' target=\'_blank\'>税后工资计算</a>");
document.writeln("  <a href=\'/gerenshui/nianzhongjiang.html\' target=\'_blank\'>年终奖个人所得税</a>");
document.writeln("  <a href=\'/gerenshui/laowu.html\' target=\'_blank\'>劳务报酬个人所得税</a>");
document.writeln("  <a href=\'/gerenshui/jingying.html\' target=\'_blank\'>个体工商户生产经营所得税</a>");
document.writeln("  <a href=\'/gerenshui/chengbao.html\' target=\'_blank\'>承包经营承租承租经营所得税</a>");
document.writeln("  <a href=\'/gerenshui/gaochou.html\' target=\'_blank\'>版税稿费所得计算器</a>");
document.writeln("  <a href=\'/gerenshui/texu.html\' target=\'_blank\'>特许权使用费所得计算器</a>");
document.writeln("  <a href=\'/gerenshui/zulin.html\' target=\'_blank\'>财产租赁所得个税计算器</a>");
document.writeln("  <a href=\'/gerenshui/zhuanrang.html\' target=\'_blank\'>财产转让所得个税计算器</a>");
document.writeln("  <a href=\'/gerenshui/hongli.html\' target=\'_blank\'>利息股息红利所得个税计算器</a>");
document.writeln("  <a href=\'/gerenshui/ouran.html\' target=\'_blank\'>个人偶然所得税计算器</a>");
document.writeln("  <a href=\'/goucheshui/\' target=\'_blank\'>购车税计算器</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/shebao/zhufang.html\' style=\'color:#ff9941;\' target=\'_blank\'>住房公积金缴存计算器</a>");
document.writeln("  <a href=\'/shebao/tuixiujin.html\' target=\'_blank\'>退休金计算器</a>");
document.writeln("  <a href=\'/shebao/shiye.html\' target=\'_blank\'>失业保险计算器</a>");
document.writeln("  <a href=\'/shebao/gongshang.html\' target=\'_blank\'>工伤保险计算器</a>");
document.writeln("  <a href=\'/shebao/yiliao.html\' target=\'_blank\'>医疗保险计算器</a>");
document.writeln("  <a href=\'/shebao/yaolao.html\' target=\'_blank\'>养老保险计算器</a>");
document.writeln("  <a href=\'/fangdai/shangye.html\' target=\'_blank\'>商业贷款计算器</a>");
document.writeln("  <a href=\'/fangdai/gongjijin.html\' target=\'_blank\'>公积金贷款计算器</a>");
document.writeln("  <a href=\'/fangdai/zuhedaikuan.html\' target=\'_blank\'>组合贷款计算器</a>");
document.writeln("  <a href=\'/fangdai/tiqianhuankuan.html\' target=\'_blank\'>提前还贷计算器</a>");
document.writeln("  <a href=\'/fangdai/shuifei.html\' target=\'_blank\'>贷款税费计算器</a>");
document.writeln("  <a href=\'/huobiduihuan/\' target=\'_blank\'>在线货币兑换外币换算</a>");
document.writeln("  <a href=\'/licai/daikuan.html\' target=\'_blank\'>个人贷款计算器在线</a>");
document.writeln("  <a href=\'/licai/jijin.html\' target=\'_blank\'>基金买卖费用计算器</a>");
document.writeln("  <a href=\'/licai/gupiao.html\' target=\'_blank\'>股票计算器在线买卖计算</a>");
document.writeln("  </div>");
document.writeln("  <div name=\'subnavdiv\' class=\'subnav\' style=\'display: none;\'>");
document.writeln("  <a href=\'/fanti.html\' target=\'_blank\'>简体转繁体字</a>");
document.writeln("  <a href=\'/huoxingwen/\' style=\'color:#ff9941;\' target=\'_blank\'>火星文在线转换</a>");
document.writeln("  <a href=\'/fanyi/\' target=\'_blank\'>在线翻译</a>");
document.writeln("  <a href=\'/daxiaoxie/\' target=\'_blank\'>英文大小写转换</a>");
document.writeln("  <a href=\'/cntoensymbol/\' target=\'_blank\'>中英文符号转换</a>");
document.writeln("  <a href=\'/pinyin/\' target=\'_blank\'>中文汉字转拼音</a>");
document.writeln("  <a href=\'/hanzi/\' target=\'_blank\'>常用汉字大全</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/zishutongji/\' target=\'_blank\'>文字个数统计</a>");
document.writeln("  <a href=\'/paiban/\' target=\'_blank\'>文字在线排版</a>");
document.writeln("  <a href=\'/quchong/\' target=\'_blank\'>文本去重</a>");
document.writeln("  <a href=\'/txtdaluan/\' target=\'_blank\'>文本行打乱</a>");
document.writeln("  <a href=\'/txthebing/\' target=\'_blank\'>文本行合并</a>");
document.writeln("  <a href=\'/txtpaiban/\' target=\'_blank\'>文本在线排版</a>");
document.writeln("  <a href=\'/daoxu/\' target=\'_blank\'>文本翻转颠倒</a>");
document.writeln("  <a href=\'/txtzhuanhuan/\' target=\'_blank\'>文本格式转换</a>");
document.writeln("  <a href=\'/shupai/\' target=\'_blank\'>竖排文字生成</a>");
document.writeln("  <a href=\'/duibi/\' target=\'_blank\'>中文文本对比</a>");
document.writeln("  <a href=\'/txtduibi/\' target=\'_blank\'>同行差异对比</a>");
document.writeln("  <a href=\'/txtfanzhuan/\' target=\'_blank\'>文本反转排序</a>");
document.writeln("  <a href=\'/txtxuhao/\' target=\'_blank\'>文本序号自动排序</a>");
document.writeln("  <a href=\'/goupiwenzhang/\' target=\'_blank\'>狗屁不通文章生成器</a>");
document.writeln("  <a href=\'/shuxue/yiyuanyici.html\'>一元一次方程计算</a>");
document.writeln("  <a href=\'/shuxue/eryuanyici.html\'>二元一次方程计算</a>");
document.writeln("  <a href=\'/shuxue/2digits.html\'>2位数小学计算题</a>");
document.writeln("  <a href=\'/shuxue/3digits.html\'>3位数小学计算题</a>");
document.writeln("  <a href=\'/jisuanti/\'>口算计算题大全</a>");
document.writeln("  <a href=\'/sanjiao/\'>三角函数计算器</a>");
document.writeln("  </div>");
document.writeln("  <div name=\'subnavdiv\' class=\'subnav\' style=\'display: none;\'>");
document.writeln("  <a href=\'/rmb/\' style=\'color:#ff9941;\' target=\'_blank\'>人民币转大写</a>");
document.writeln("  <a href=\'/shijian/nongli.html\' target=\'_blank\'>公历农历转换</a>");
document.writeln("  <a href=\'/quanbanjiao/\' target=\'_blank\'>全角半角转换</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/caihongzi/\' target=\'_blank\'>彩虹字转换</a>");
document.writeln("  <a href=\'/caisezi/\' target=\'_blank\'>网页彩色文字</a>");
document.writeln("  <a href=\'/duocaizi/\' target=\'_blank\'>多彩字转换</a>");
document.writeln("  <a href=\'/faguangzi/\' target=\'_blank\'>发光字转换</a>");
document.writeln("  <a href=\'/mayiwen/\' style=\'color:#ff9941;\' target=\'_blank\'>(蚂蚁)菊花文生成</a>");
document.writeln("  <a href=\'/css/csstypeset.html\' target=\'_blank\'>网页文字效果生成</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/danwei/changdu.html\' target=\'_blank\'>长度单位转换</a>");
document.writeln("  <a href=\'/danwei/wendu.html\' target=\'_blank\'>温度单位转换</a>");
document.writeln("  <a href=\'/danwei/gonglv.html\' target=\'_blank\'>功率单位转换</a>");
document.writeln("  <a href=\'/danwei/sudu.html\' target=\'_blank\'>速度单位转换</a>");
document.writeln("  <a href=\'/danwei/zhongliang.html\' target=\'_blank\'>重量单位转换</a>");
document.writeln("  <a href=\'/danwei/mianji.html\' target=\'_blank\'>面积单位转换</a>");
document.writeln("  <a href=\'/danwei/tiji.html\' target=\'_blank\'>体积单位转换</a>");
document.writeln("  <a href=\'/danwei/yali.html\' target=\'_blank\'>压力单位转换</a>");
document.writeln("  </div>");
document.writeln("  <div name=\'subnavdiv\' class=\'subnav\' style=\'display: none;\'>");
document.writeln("  <a href=\'/fuhao.html\' target=\'_blank\'>特殊符号大全</a>");
document.writeln("  <a href=\'/ox2str/\' style=\'color:#ff9941;\' target=\'_blank\'>字符串转16进制</a>");
document.writeln("  <a href=\'/json/\' target=\'_blank\'>json格式化</a>");
document.writeln("  <a href=\'/unicode/\' target=\'_blank\'>unicode解码编码</a>");
document.writeln("  <a href=\'/tuofeng2xiahuaxian/\' target=\'_blank\'>驼峰转下划线</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/htmlformat/\' target=\'_blank\'>HTML格式化</a>");
document.writeln("  <a href=\'/htmltojs/\' target=\'_blank\'>HTML转JS</a>");
document.writeln("  <a href=\'/htmltophp/\' target=\'_blank\'>HTML转php</a>");
document.writeln("  <a href=\'/htmltovbnet/\' target=\'_blank\'>HTML转C#</a>");
document.writeln("  <a href=\'/rehtml/\' target=\'_blank\'>HTML在线转义</a>");
document.writeln("  <a href=\'/htmlclearcss/\' target=\'_blank\'>HTML去CSS样式</a>");
document.writeln("  <a href=\'/timestamp/\' style=\'color:#ff9941;\' target=\'_blank\'>时间戳转日期</a>");
document.writeln("  <a href=\'/shijiantuisuan/\' target=\'_blank\'>日期计算工具</a>");
document.writeln("  <a href=\'/mimajiancha/\' target=\'_blank\'>密码强度检查器</a>");
document.writeln("  <a href=\'/md5/\' target=\'_blank\'>MD5加密</a>");
document.writeln("  <a href=\'/hexconvert/\' target=\'_blank\'>进制转换</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/rgbhex/\' target=\'_blank\'>RGB与16进制色互转</a>");
document.writeln("  <a href=\'/rgbtohex/\' target=\'_blank\'>RGB颜色转换</a>");
document.writeln("  <a href=\'/css/cssrem.html\' target=\'_blank\'>css px转rem</a>");
document.writeln("  <a href=\'/css/cssformat.html\' target=\'_blank\'>CSS压缩格式化</a>");
document.writeln("  <a href=\'/css/csstypeset.html\' target=\'_blank\'>css效果在线生成</a>");
document.writeln("  <a href=\'/bianma/guobianma.php\' target=\'_blank\'>汉字国标码查询</a>");
document.writeln("  <a href=\'/suijishu/\' target=\'_blank\'>随机数生成</a>");
document.writeln("  <a href=\'/guid/\' target=\'_blank\'>guid/uuid在线生成</a>");
document.writeln("  <a href=\'/suijimima/\' target=\'_blank\'>在线随机密码生成</a>");
document.writeln("  <a href=\'javascript;\' class=\'line pc-hidden\' target=\'_blank\'></a>");
document.writeln("  <a href=\'/qrcode/\' target=\'_blank\'>二维码在线生成</a>");
document.writeln("  <a href=\'/qrcode/jiema.html\' target=\'_blank\'>二维码图片解码</a>");
document.writeln("  <a href=\'/base64/\' target=\'_blank\'>BASE64加密解密</a>");
document.writeln("  <a href=\'/svg/\' target=\'_blank\'>svg编辑器在线</a>");
document.writeln("  <a href=\'/image2base64.html\' target=\'_blank\'>图片转base64</a>");
document.writeln("  <a href=\'/urlencode/\' target=\'_blank\'>网址URL编码解码</a>");
document.writeln("  <a href=\'/useragent/\' target=\'_blank\'>UserAgent查看分析</a>");
document.writeln("  <a href=\'/pagestatus/\' target=\'_blank\'>在线HTTP状态查询</a>");
document.writeln("  <a href=\'/getmob/\' target=\'_blank\'>手机号码提取器</a>");
document.writeln("  <a href=\'/urlformat/\' target=\'_blank\'>url参数格式化转json</a>");
document.writeln("  <a href=\'/jsontogolang/\' target=\'_blank\'>json转golang对象</a>");
document.writeln("  <a href=\'/getemail/\' target=\'_blank\'>邮箱地址提取</a>");
document.writeln("  <a href=\'/getmob/\' target=\'_blank\'>手机号码提取</a>");
document.writeln("  </div>");
document.writeln("  <div name=\'subnavdiv\' class=\'subnav\' style=\'display: none;\'>");
document.writeln("  <a href=\'/zhuangxiu/chuanglian.html\' target=\'_blank\'>窗帘计算器</a>");
document.writeln("  <a href=\'/zhuangxiu/qiangzhuan.html\' target=\'_blank\'>墙砖计算器</a>");
document.writeln("  <a href=\'/zhuangxiu/dizhuan.html\' target=\'_blank\'>地砖计算器</a>");
document.writeln("  <a href=\'/zhuangxiu/diban.html\' target=\'_blank\'>地板计算器</a>");
document.writeln("  <a href=\'/zhuangxiu/bizhi.html\' target=\'_blank\'>壁纸计算器</a>");
document.writeln("  <a href=\'/zhuangxiu/tuliao.html\' target=\'_blank\'>涂料计算器</a>");
document.writeln("  <a href=\'/zhuangxiu/tianfengji.html\' target=\'_blank\'>填缝剂计算器</a>");
document.writeln("  <a href=\'/win10jsq\' target=\'_blank\'>仿win10自带计算器</a>");
document.writeln("  <a href=\'/chaodai/\' target=\'_blank\'>中国朝代年简表</a>");
document.writeln("  <a href=\'/wubi/\' style=\'color:#ff9941;\' target=\'_blank\'>86版五笔字根表</a>");
document.writeln("  <a href=\'/naozhong/\' target=\'_blank\'>在线闹钟</a>");
document.writeln("  <a href=\'/saolei\' style=\'color:#ff9941;\' target=\'_blank\'>经典扫雷在线</a>");
document.writeln("  <a href=\'/wuziqi\' target=\'_blank\'>五子棋在线人机</a>");
document.writeln("  <a href=\'/shudu\' target=\'_blank\'>数独在线</a>");
document.writeln("  <a href=\'/shudu/index2.html\' target=\'_blank\'>数独游戏</a>");
document.writeln("  <a href=\'/shuduyouxi\' target=\'_blank\'>数独九宫格闯关</a>");
document.writeln("  <a href=\'/barcode/\' target=\'_blank\'>条形码在线生成</a>");
document.writeln("  <a href=\'/barcode/all.html\' target=\'_blank\'>一维码生成</a>	");
document.writeln("  <a href=\'/qrcode/\' target=\'_blank\'>二维码在线生成</a>");
document.writeln("  <a href=\'/barcode/simple.html\' target=\'_blank\'>一维码生成器在线</a>");
document.writeln("  <a href=\'/cefanying/\' target=\'_blank\'>反应速度测试工具</a>	");
document.writeln("  <a href=\'/todo/\' target=\'_blank\'>ToDo待办事项列表</a>");
document.writeln("  <a href=\'/wangming/\' target=\'_blank\'>网名大全</a>");
document.writeln("  <a href=\'/qianming/\' target=\'_blank\'>个性签名</a>");
document.writeln("  <a href=\'/choujiang/\' target=\'_blank\'>在线大转盘抽奖</a>");
document.writeln("  </div>");
document.writeln("  <div name=\'subnavdiv\' class=\'subnav subnav-type\' style=\'display: none;\'>");
document.writeln("  <a href=\'/fuhao/\'>符号大全</a>");
document.writeln("  <a href=\'/fangjia/\'>放假安排</a>");
document.writeln("  <a href=\'/liuxingyu/\'>流行语</a>");
document.writeln("  <a href=\'/shenghuo/\'>日常生活</a>");
document.writeln("  <a href=\'/wangming/\'>网名大全</a>");
document.writeln("  <a href=\'/qianming/\'>个性签名</a>");
document.writeln("  <a href=\'/huaiyun/\'>怀孕症状</a>");
document.writeln("  <a href=\'/biaozhuntizhong/\'>标准体重</a>");
document.writeln("  <a href=\'/gerenshui/\'>个人税</a>");
document.writeln("  <a href=\'/fantizi/\'>繁体字转换</a>");
document.writeln("  <a href=\'/jiankangma/\'>健康码</a>");
document.writeln("  <a href=\'/zhishi/\'>知识学习</a>");
document.writeln("  <a href=\'/java/\'>java</a>");
document.writeln("  <a href=\'/cssjiaocheng/\'>css</a>");
document.writeln("  <a href=\'/centos/\'>centos</a>");
document.writeln("  <a href=\'/vue/\'>vue</a>");
document.writeln("  <a href=\'/jsonjiaocheng/\'>json</a>");
document.writeln("  <a href=\'/javascript/\'>javascript</a>");
document.writeln("  <a href=\'/timestamp/\'>时间戳</a>");
document.writeln("  <a href=\'/git/\'>git</a>");
document.writeln("  <a href=\'/shoujishuma/\'>手机数码</a>");
document.writeln("  <a href=\'/wangluo/\'>网络科技</a>");
document.writeln("  <a href=\'/mysql/\'>mysql</a>");
document.writeln("  <a href=\'/goutong/\'>沟通技巧</a>");
document.writeln("  <a href=\'/zidian/\'>字典</a>");
document.writeln("  <a href=\'/jiejiari/\'>节假日</a>");
document.writeln("  <a href=\'/jiejiari/ldj/\'>劳动节</a>");
document.writeln("  <a href=\'/jiejiari/dwj/\'>端午节</a>");
document.writeln("  <a href=\'/jiejiari/zqj/\'>中秋节</a>");
document.writeln("  <a href=\'/jiejiari/gqj/\'>国庆节</a>");
document.writeln("  <a href=\'/chongyang/\'>重阳节</a>");
document.writeln("  <a href=\'/ganwu/\'>人生感悟</a>");
document.writeln("  <a href=\'/qinggan/\'>婚嫁爱情</a>");
document.writeln("  <a href=\'/toolsnav/\'>计算转换工具</a>");
document.writeln("  <a href=\'/danwei/\'>单位换算器</a>");
document.writeln("  <a href=\'/bianmincha/\'>生活便民查询</a>");
document.writeln("  <a href=\'/jiamitools/\'>加密编码转换</a>");
document.writeln("  <a href=\'/kaifatools/\'>开发工具</a>");
document.writeln("  <a href=\'/wenben/\'>文本处理工具</a>");
document.writeln("  <a href=\'/jiankang/\'>健康计算器</a>");
document.writeln("  <a href=\'/licai/\'>理财计算器</a>");
document.writeln("  <a href=\'/fangdai/\'>房贷计算器</a>");
document.writeln("  <a href=\'/shuxue/\'>数学计算器</a>");
document.writeln("  <a href=\'/mianji/\'>面积计算器</a>");
document.writeln("  <a href=\'/jisuanqi/\'>计算器下载</a>");
document.writeln("  </div>");
  document.writeln("<a href=\'javascript:;\' class=\'close-subNav\' onclick=\'hideOtherTools()\'>x</a>	");
  document.writeln("</div>");
	document.writeln("	</div>");
	document.writeln("	<style>");
	document.writeln("	.subnav-type a {width: 10%;}");
	document.writeln("	#hanldeOtherTools {margin:15px auto 0;display: block;text-decoration: none;border: 1px solid #4162ea;width: 160px;text-align: center;padding: 4px 0;border-radius: 5px;color: #4162ea;}");
	document.writeln("	#hanldeOtherTools:hover {background:#4162ea;color:#ffffff;}");
	document.writeln("	@media screen and (max-width: 481px) { ");
	document.writeln("		.othertoolstitle {width: 28%;height:auto;}");
	document.writeln("		#hanldeOtherTools {border: 1px solid #666666;color:#666666;width:90%;background:#ffffff;margin:auto;}");
	document.writeln("	}");
	document.writeln("	</style>");
	document.writeln("	<script>");
	document.writeln("	var tab = document.getElementsByClassName(\'othertoolstitle\')[0].getElementsByTagName(\'li\');");
	document.writeln("	var tabBox = document.getElementsByName(\'subnavdiv\');");
	document.writeln("	tabBox[0].style.display = \'block\';");
	document.writeln("	for(var i=0; i< tab.length; i++) {");
	document.writeln("		tab[i].index = i;");
	document.writeln("		tab[i].onmouseover = function(){");
	document.writeln("			for(var i=0; i< tab.length; i++) {");
	document.writeln("tab[i].className = \'\';");
	document.writeln("tabBox[i].style.display = \'none\';");
	document.writeln("			}");
	document.writeln("			this.className = \'active\';");
	document.writeln("			tabBox[this.index].style.display = \'block\';");
	document.writeln("		}");
	document.writeln("	}");
	document.writeln("	function showOtherTools() {");
	document.writeln("		document.getElementById(\'hanldeOtherTools\').style.display = \'none\';");
	document.writeln("		document.getElementById(\'otherTools\').style.display = \'block\';");
	document.writeln("		var x = document.getElementsByName(\'subnavdiv\');");
	document.writeln("		x[0].style.display = \'block\';");
	document.writeln("		var dateTime = new Date();");
	document.writeln("		dateTime = dateTime.setDate(dateTime.getDate()+7);");
	document.writeln("		dateTime = new Date(dateTime)");
	document.writeln("		document.cookie = \'showTools=1;expires=\' + dateTime + \'\';");
	document.writeln("	}");
	document.writeln("	function hideOtherTools() {");
	document.writeln("		if(isMobile()){;");
	document.writeln("			document.getElementById(\'hanldeOtherTools\').style.display = \'block\';");
	document.writeln("			document.getElementById(\'otherTools\').style.display = \'none\';");
	document.writeln("			document.cookie = \'showTools=0;\'");
	document.writeln("		};");
	document.writeln("	}");
	document.writeln("	if(!isMobile()){");
	document.writeln("		showOtherTools();");
	//document.writeln("		var str = document.cookie;");
	//document.writeln("		var dateTime = new Date();");
	//document.writeln("		if(str != \'\') {");
	//document.writeln("			var arr = str.split(\';\');");
	//document.writeln("			var res = \'0\';");
	//document.writeln("			for(var i=0;i<arr.length;i++){");
	//document.writeln("var value = arr[i].split(\'=\');");
	//document.writeln("if(value[0].trim() == \'showTools\'){");
	//document.writeln("	res = value[1];");
	//document.writeln("}");
	//document.writeln("			}");
	//document.writeln("			if(res==\'1\'){");
	//document.writeln("document.getElementById(\'hanldeOtherTools\').style.display = \'none\';");
	//document.writeln("document.getElementById(\'otherTools\').style.display = \'block\';");
	//document.writeln("			} else {");
	//document.writeln("document.getElementById(\'hanldeOtherTools\').style.display = \'block\';");
	//document.writeln("document.getElementById(\'otherTools\').style.display = \'none\';");
	//document.writeln("			}");
	//document.writeln("		}");
	document.writeln("	}");
	document.writeln("	</script>");
}

// 猜您喜欢 控制浮动
function advertRightSidebar(){
	//document.getElementById("arc{baiqi:field.id/}").className="chk";
	$(function(){
		if(!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
			var contH = $(".main").height();
			var leftH = $(".left-content-title").height();
			//if(leftH > contH) { $(".content").height(leftH + 60); }
			$(document).scroll(function(){
				if(leftH > (contH + 60)) { return; }
				var scrollH = $(document).scrollTop();
				var _p = "fixed";var _t = "210px";
				if(scrollH < 210) { _p = "fixed"; _t = "210px"; }
				if(scrollH >= 210 && (scrollH + leftH) <= (contH + 130)) {  _p = "fixed"; _t = "0px";}
				if((scrollH + leftH) > (contH + 130)) {  _p = "absolute"; _t = (contH-leftH) + "px"; }
				$(".left-content-title").css({ position:_p, top:_t});
			})
		}
	})
}

document.addEventListener('DOMContentLoaded', function () { var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); if ($navbarBurgers.length > 0) { $navbarBurgers.forEach(function ($el) { $el.addEventListener('click', function () { var target = $el.dataset.target; var $target = document.getElementById(target); $el.classList.toggle('is-active'); $target.classList.toggle('is-active'); }); }); } }); 

//document.oncontextmenu = function(){return false;}
//document.oncontextmenu = function(){event.returnValue = false;}
//document.onselectstart = function(){event.returnValue = false;}
//document.oncopy = function(){event.returnValue = false;}
document.onmousedown = function(e){if( e.which==3 ){return false;}}　// 鼠标右键
document.onkeydown = function(){if( event.keyCode == 123 ){return false;}}