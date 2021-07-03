const express = require('express');

const app = express();
const PORT = 5000;
const albumsData = require('./albumsData');

app.get('/', (req, res) => {
  res.send("My name is Douglas");
});

app.get('/album', (req, res) => {
  res.send(albumsData);
});

app.get('/album/:albumId', (req, res) => {
  // console.log(req.params.albumId);
  const { albumId } = req.params;
  const match = albumsData.some(album => album.albumId === albumId);
  console.log(match)
  
  if (match) {
    const found = albumsData.find(album => album.albumId === albumId);
    res.send(found)
  } else {
    res.status(404).send({
      msg: `No album with the id of ${albumId}`
    })
  };
});

app.listen(PORT, () => {
  console.log(`Server is listening at ${PORT}`);
});