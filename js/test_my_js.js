//console.log("检查是否有class为pdf的结点....");
/*
div_pdfs = document.getElementsByClassName("pdf");
for(j = 0,len=div_pdfs.length; j < len; j++) {
	var iframe = document.createElement('iframe');  
	
	iframe.name = 'ifr_pdf_show'+j;  
	iframe.src="https://"+document.domain+"/pdf.js/web/viewer.html?file=" + document.URL + div_pdfs[j].getAttribute("target");
	iframe.width=div_pdfs[0].offsetWidth-20;
	iframe.height=560;
	
	div_pdfs[j].appendChild(iframe);
}

//太麻烦了！谷歌上可以，到了火狐上又不行了。
*/