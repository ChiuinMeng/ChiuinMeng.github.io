console.log("检查是否有class为pdf的结点....");
div_pdfs = document.getElementsByClassName("pdf");

/*
var loadingTask = pdfjsLib.getDocument(div_pdfs[0].getAttribute("target"));
loadingTask.promise.then(function(pdf) {
  // you can now use *pdf* here
});

pdf.getPage(1).then(function(page) {
  // you can now use *page* here
});

var scale = 1.5;
var viewport = page.getViewport({ scale: scale, });

var canvas = document.getElementById('the-canvas');
var context = canvas.getContext('2d');
canvas.height = viewport.height;
canvas.width = viewport.width;

var renderContext = {
  canvasContext: context,
  viewport: viewport
};
page.render(renderContext);
*/