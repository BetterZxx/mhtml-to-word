
;(function(window){
  //符合commonjs规范引入依赖
  if(typeof module !== 'undefined'){
    window.saveAs = require('file-saver')
    window.baidu = require('baidu-template-pro')
  }
  function getModelHtml(mhtml,style=''){
    return`
	Content-Type: text/html; charset="utf-8"
      <!DOCTYPE html>
      <html>
      <head>
      <style>
        ${style}
      </style>
      </head>
      <body>
        ${mhtml}
      </body>
      </html>
    `
  }
  //主函数
  let exportWord = ({mhtml,style,filename,data,selector})=>{
    
    if(selector){
      let nodes = window.document.querySelectorAll(selector)
      mhtml = nodes.length>0?Array.from(nodes).reduce((a,b)=>a+b.innerHTML,''):''

    }
    
    //没有baiduTemplatePro.js依赖时必须传入selector
    if (!selector && typeof baidu === 'undefined') {
      console.error("wordExport : missing (selector) for params without depandency (baiduTemplatePro.js)");
      return;
    }
    if (typeof saveAs === "undefined") {
      console.error("wordExport : missing dependency (FileSaver.js)");
      return;
    }

    //没有模板引擎时，将获取节点的html字符串生成模板
    let html = typeof baidu !== 'undefined'?baidu.template(getModelHtml(mhtml,style),data):getModelHtml(mhtml)
    
    let blob = new Blob([html],{type:'application/msword;charset=utf-8'})
    saveAs(blob,filename+'.doc')
  }
  //添加exportWord到全局对象
  window.exportWord = window.exportWord||exportWord

  //如果符合commonjs规范，exports出去
  if(typeof module==='object'&&typeof module.exports==='object'){
    module.exports = {exportWord}
  }

})(window)