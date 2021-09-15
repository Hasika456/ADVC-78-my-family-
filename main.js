var images = ["https://static.vecteezy.com/system/resources/thumbnails/002/150/655/small/depressed-mother-2d-web-icon-banner-poster-vector.jpg","https://static.thenounproject.com/png/3685409-200.png", "https://i.postimg.cc/wjMnFtMX/father.jpg"];
var names = ["Family Book","Swathi", "Suhaas", "Sudheer"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 3
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
  
    
    var updatedName = [i] ;
    var updatedImage = [i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

