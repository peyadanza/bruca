const inputData= document.getElementById("search");
function haha() {fetch (`https://itunes.apple.com/search?term=${inputData.value}&limit=50`)
.then(response => response.json())
.then(data =>{
  console.log(data);
  data.results.map(result => {
    data=result.previewUrl;
    var node = document.createElement("LI");
    document.getElementById("lista").appendChild(node);
    const audio = document.createElement('audio');
    audio.controls="controls";
    node.appendChild(audio);
    const source = document.createElement('source');
    source.src= data;
    source.type= "audio/mp3";
    audio.appendChild(source);
  
  })
  })
.catch(error => console.error(error))
}






