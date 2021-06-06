import React, { PureComponent } from "react";
import axios from "axios";
class Profile extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      wood: 0,
      skin: 0,
      scraps: 0,
      ore: 0,
      gold: 0,
    };
  }

  handleInput = async () => {
    await axios.get("/api/user", (response) => {
      this.setState.name = response;
    });
  };

  render() {
    const { name, wood, skin, scraps, ore, gold } = this.state;
    return (
      <div>
        <h1><input/>{name}</h1>
        <table>
          <tbody>
            <tr>
              <th>Wood</th>
              <th>Ore</th>
              <th>Skins</th>
              <th>Scraps</th>
              <th>Gold</th>
            </tr>
            <tr>
              <td>{wood}</td>
              <td>{ore}</td>
              <td>{skin}</td>
              <td>{scraps}</td>
              <td>{gold}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Profile;
