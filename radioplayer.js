// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

fetch("http://api.sr.se/api/v2/channels?format=json&size=100")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.channels.forEach(appendChannel);
  });

function appendChannel(channel) {
  const channelDiv = document.createElement("div");
  channelDiv.className = "channel";
  channelDiv.style.backgroundColor = "#" + channel.color;
  document.getElementById("channels").appendChild(channelDiv);

  const channelImg = document.createElement("img");
  channelImg.src = channel.image;
  channelImg.width = "150";
  channelImg.height = "150";
  channelImg.className = "channelImg";
  channelDiv.appendChild(channelImg);

  const nameDiv = document.createElement("div");
  nameDiv.innerHTML = "<h1>" + channel.name + "</h1>";
  channelDiv.appendChild(nameDiv);

  const audio = document.createElement("audio");
  audio.controls = "controls";
  channelDiv.appendChild(audio);

  const mySource = document.createElement("source");
  mySource.src = channel.liveaudio.url;
  mySource.type = "audio/mpeg";
  audio.appendChild(mySource);
}
