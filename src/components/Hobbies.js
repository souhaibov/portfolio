import React from "react";
import "../style/Hobbies.css";

const Hobbies = () => {
  return (
    <div id="my_hobbies">
      <h1> My Hobbies</h1>
      <br />
      <p>
        I like to do many things... i enjoy listening to music, seeing movies,
        surfing on the internet... i like many sports , i practice some, watch
        and follow many others. i like playing and watching football and tennis,
        watching handball, Formula 1. But my favourite is the chess game.
      </p>
      <div>
        {/* <h2>Chess game</h2> */}
        <br />
        <div className="chess_skill">
          <div className="playing_chess">
            <h3>Playing Chess</h3>
            <br />
            <p>
              i'm a professional chess player since 2010, playing reguliary into
              a club (Club chess of Metouia) in the national championship of
              tunisia. and playing individually in many tournaments.
            </p>
            <img src="me_chess.jpg" alt="me_chess" />
          </div>
          <div className="training_chess">
            <h3>Training Chess</h3>
            <br />
            <p>
              i'm also a professional trainer of the game. since 2017 training
              more than 60 kids in my region. 3 groups in metouia, a group in
              el-Maya and a group in Ghanouch
            </p>
            <img src="train.jpg" alt="me_chess" />
          </div>
          <div className="referee_chess">
            <h3>Refeering Chess</h3>
            <br />
            <p>
              i'm a national refeere of chess game since febrary 2022. and i was
              present as a refeere in many national tournaments.
            </p>
            <br />
            <img src="referee.jpg" alt="me_chess" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
