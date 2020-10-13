import React from 'react';
import ReactDOM from 'react-dom';
import ReactNetflixPlayer from '../src';

ReactDOM.render(
  <div>
    <ReactNetflixPlayer
      // Vídeo Link - Just data is required
      src="http://lucasjunior.com.br/teste.mp4"
      // src={"http://videoinvalid"}
      title="Dragon Ball Z"
      subTitle="Opening"
      titleMedia="Dragon Ball Z"
      extraInfoMedia="Opening"
      // Text language of player
      playerLanguage="es"
      // Action when the button X (close) is clicked
      backButton={() => {}}
      // The player use the all viewport
      fullPlayer
      autoPlay
      startPosition={0}
      // The info of the next video action
      dataNext={{ title: 'Não existe um próximo vídeo.' }}
      // The action call when the next video is clicked
      onNextClick={() => {}}
      // The list reproduction data, will be render in this order
      reprodutionList={[
        {
          title: 'Opening',
          description: 'El término opening puede referirse a: Tema de apertura, la canción que se transmite durante la secuencia de apertura de una película, serie de televisión, etc. Opening, marca comercial utilizada por la empresa Open English Master Spain S.A.',
          id: 1,
          playing: true,
          cover: 'https://uvm.cdn-capital.digital/img/2019/01/Cronolog%C3%ADa-completa-de-Dragon-Ball.jpg'
        },
        {
          title: 'Teste',
          description: 'El término opening puede referirse a: Tema de apertura, la canción que se transmite durante la secuencia de apertura de una película, serie de televisión, etc. Opening, marca comercial utilizada por la empresa Open English Master Spain S.A.',
          id: 2,
          playing: false,
          cover: 'https://media.revistagq.com/photos/5f45010acb266484bb785c78/master/pass/dragon-ball-z.jpg'
        },
      ]}
      // The function call when a item in reproductionList is clicked
      onClickItemListReproduction={(id, playing) => {
        return {
          id,
          playing,
        };
      }}
      // The function is call when the video finish
      onEnded={() => {}}
      // The function is call when the video is playing (One time for frame)
      onTimeUpdate={() => {}}
      // Enable the orverlay when player is paused
      overlayEnabled
      // Enabled the auto clode controlls of player
      autoControllCloseEnabled
      // Style
      primaryColor="#03dffc"
      secundaryColor="#ffffff"
      fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"

      // subtitleMedia="/teste.vtt"
    />
  </div>,
  document.getElementById('root'),
);
