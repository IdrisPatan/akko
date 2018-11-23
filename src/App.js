import React, { Component } from 'react';
import logo from './logo.png';
import green2 from './green2.jpg';
import './App.css';
import {Parallax, ParallaxProvider} from "react-scroll-parallax";

class App extends Component {
  render() {
    return (
        <ParallaxProvider>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome Akko Jan !</h1>

            </header>
              <div>
                  Our Story !
              </div>
              <div className="App-intro">
                    <p>
                        A little over two months ago, I had just returned from a trip to London it was a low point in my life.
                        I was about to put myself into something I had no clue about but something stopped me from doing that.
                        At that point I didn't care much who I going to marry be with, I had given up on finding my ideal girl.
                    </p>
                    <p>
                        My ideal Girl: a modest Afghan Hijabi girl who knows her deen, her priorities in life, and respectable.
                        A girl who wants to get to Janaat with me, who will remind me of Allah sbt,
                        so that we can help each other in our deen and duniya basically I was looking for my other Half. At the same time,
                        I wished for her to be my best friend, someone romantic and loving, someone who will give me all the love that I was holding inside.
                    </p>
                    <p>
                        I knew that those qualities were rare but it was more challenging to find them in an Afghan Girl.
                        But then on September 4th at 9:45am I send a message to a girl with the Green Image with the name of A NA 26, from Canada
                        at that point I never thought that message will change my life forever....
                    </p>
                    <p>
                        Allhamdu Lellah the third thing I said was “My name is Mohamad Idris what is your name ?“
                        That’s how I got introduced to a very sweet girl Akko Jan...
                        Allhamdeu Lellah I have a smile on my face now. Thanks to you Akko Jan !
                        I really Like you ! I can talk for hours about how pretty you are and how much i like you and I thing i have bugged you enough
                        about everything. but I will just Say one thing. I Can not find anyone like you !
                    </p>
                  <p>
                      If you think you can tolerate me Click me!
                      Will you Marry Me ?
                      Mohamad Idris Patan and
                      make me the Luckiest man on this planet!
                  </p>
              </div>
              <div>
                  const ParallaxImage = () => (
                  <Parallax
                      className="custom-class"
                      offsetYMax={20}
                      offsetYMin={-20}
                      slowerScrollRate
                      tag="figure"
                  >
                      <image src="./green2.jpg" />
                  </Parallax>
                  );
              </div>
          </div>
        </ParallaxProvider>
    );
  }
}
export default App;
