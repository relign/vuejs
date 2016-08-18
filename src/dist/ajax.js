function ajax(obj){
 if(!obj.url){
   console.error('url未指定');
   return false;
 }
 var url=obj.url;
 var type=obj.type||'get';
 var anynch=obj.anynch==undefined?true:obj.anynch;
 var data=obj.data||'';
 if(typeof data=="object"){
   var str='';
   for(var i in data){
     str+=i+"="+data[i]+"&";
   }
   data=str.slice(0,-1);
 }
 var dataType = obj.dataType||'text';
 var xml = createXHR();		//创建一个ajax对象
 xml.onreadystatechange=function(){       		//状态码改变   监听事件
   if(xml.readyState==4){//4	取到东西
     if(xml.status==200){			//200   成功返回
       console.log(xml.responseText)
       if(dataType=='xml'){
         obj.success(xml.responseXML);
       }else if(dataType=='text'){
         obj.success(xml.responseText);
       }else if(dataType=='json'){
         var dataObj=eval("("+xml.responseText+")");
         obj.success(dataObj);
       }
     }
   }
 }
 if(type=='get'){
   xml.open(type,url+'?'+data,anynch);
   xml.send();
 }else if(type=='post'){
   xml.open(type,url,anynch);
   xml.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
   xml.send(data);
 }
}

function createXHR() {
  if(typeof XMLHttpRequest != 'undefined'){
    return new XMLHttpRequest();
  } else if (typeof ActiveXObject != 'undefined'){
    if( typeof arguments.callee.activeXString != 'string'){
      var versions = ["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP"],i,len;
      for(i = 0,len = versions.length ; i < len ; i++  ){
        try{
          new ActiveXObject(versions[i]);
          arguments.callee.activeXString = versions[i];
          break;
        } catch (ex){
          //跳过
        }
      }
    }
    return new ActiveXObject(arguments.callee.activeXString);
  }else {
    throw new Error ("No XHR object avaliable ");
  }
}
