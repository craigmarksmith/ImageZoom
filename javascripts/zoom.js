$('zoomBox').hide();
positionable = false;


Event.observe($('smallImage'), 'mouseover', function() {
  showAndPositionZoomBox();
});

Event.observe(document, 'mousemove', positionZoomBox);

function showAndPositionZoomBox(){
  $('zoomBox').show();
  positionable = true;
};

function positionZoomBox(e){
  if(positionable){
    mouseX = Event.pointerX(e);
    mouseY = Event.pointerY(e);
    
    if(mouseIsInside($('smallImage'), mouseX, mouseY) == false){
      positionable = false;
      $('zoomBox').hide();
    }
    
    $('zoomBox').style.top = mouseY+'px';
    $('zoomBox').style.left = mouseX+'px';
    
    setBackgroundPosition($('zoomBox'), $('smallImage'), mouseX, mouseY);
  }
};

function mouseIsInside(element, mouseX, mouseY){
  top = element.positionedOffset()[0];
  left = element.positionedOffset()[1];
  
  if(mouseY < top || mouseY > (top + element.height)){
    return false;
  }
  
  if(mouseX < left || mouseX > (left + element.width)){
    return false;
  }
  
  return true;
};

function setBackgroundPosition(zoomBox,smallImage, x, y){
  large_image = new Image();
  large_image.src = 'images/large.jpg';
  
  x_ratio = large_image.width/smallImage.width;
  y_ratio = large_image.height/smallImage.height;
  
  x_position = "-"+(x*x_ratio)+"px";
  y_position = "-"+(y*y_ratio)+"px";
  
  zoomBox.style.backgroundPosition =  x_position+" "+y_position;
  
  
};

