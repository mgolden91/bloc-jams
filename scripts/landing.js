var animatePoints = function(){
                
    var points = document.getElementsByClassName('point');
    
    var revealPoint = function(sellPoints){
        for(var i = 0; i < points.length; i++){
         sellPoints[i].style.opacity = 1;
         sellPoints[i].style.transform = "scaleX(1) translateY(0)";
         sellPoints[i].style.msTransform = "scaleX(1) translateY(0)";
         sellPoints[i].style.WebkitTransform = "scaleX(1) translateY(0)";
        }
    };
    revealPoint(points);
};
