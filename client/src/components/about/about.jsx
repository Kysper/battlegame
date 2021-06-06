import React, { PureComponent } from "react";
import '../about/about.css'
class About extends PureComponent {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This game is an idle battle game, utilizing idle growth for battling against others.
          Gather wood, ore, skins, and other commodities for use to strengthen your champion.
        </p>
      </div>
    );
  }
}

export default About;
