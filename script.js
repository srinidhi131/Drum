const log = document.getElementById('app');
var code = document.addEventListener('keypress', logKey);

function logKey(e) {
  console.log(e.key);
  switch (e.key) {
    case "q":
    case "Q":
      document.getElementById("Qa").click();
      break;
    case "w":
    case "W":
      document.getElementById("Wa").click();
      break;
    case "e":
    case "E":
      document.getElementById("Ea").click();
      break;
    case "a":
    case "A":
      document.getElementById("Aa").click();
      break;
    case "s":
    case "S":
      document.getElementById("Sa").click();
      break;
    case "d":
    case "D":
      document.getElementById("Da").click();
      break;
    case "z":
    case "Z":
      document.getElementById("Za").click();
      break;
    case "x":
    case "X":
      document.getElementById("Xa").click();
      break;
    case "c":
    case "C":
      document.getElementById("Ca").click();
      break;}

}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleAnswerChange = this.handleAnswerChange.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const audioEl = document.getElementById(e.target.children[0].id);
    audioEl.play();
    document.getElementById("display").innerHTML = e.target.value;
  }

  handleAnswerChange(event) {
    if (event.key === 'y') {
      document.getElementById("Qa").click();
    } else
    if (event.key === 'n') {
      alert('The sky is your limit👀');
    }
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "drum-machine", onKeyPress: this.handleAnswerChange }, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/
      React.createElement("div", { id: "display" }), /*#__PURE__*/
      React.createElement("div", { id: "keys" }, /*#__PURE__*/
      React.createElement("div", { className: "outer" }, /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Qa", onClick: this.handleClick, value: "Heater 1" }, "Q", /*#__PURE__*/
      React.createElement("audio", { className: "clip", id: "Q", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3", type: "audio/mpeg" })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", id: "Wa", onClick: this.handleClick, value: "Heater 2" }, "W", /*#__PURE__*/
      React.createElement("audio", { className: "clip", id: "W", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3", type: "audio/mpeg" })), /*#__PURE__*/

      React.createElement("button", { className: "drum-pad", id: "Ea", onClick: this.handleClick, value: "Heater 3" }, "E", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "E", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", type: "audio/mpeg" }))), /*#__PURE__*/
      React.createElement("div", { className: "outer" }, /*#__PURE__*/React.createElement("button", { className: "drum-pad", id: "Aa", onClick: this.handleClick, value: "Heater 4" }, "A", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "A", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3", type: "audio/mpeg" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Sa", onClick: this.handleClick, value: "Clap" }, "S", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "S", src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3", type: "audio/mpeg" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Da", onClick: this.handleClick, value: "Open HH" }, "D", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "D", src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3", type: "audio/mpeg" }))), /*#__PURE__*/
      React.createElement("div", { className: "outer" }, /*#__PURE__*/React.createElement("button", { className: "drum-pad", id: "Za", onClick: this.handleClick, value: "Kick n' Hat" }, "Z", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "Z", src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3", type: "audio/mpeg" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Xa", onClick: this.handleClick, value: "Kick" }, "X", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "X", src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3", type: "audio/mpeg" })), /*#__PURE__*/
      React.createElement("button", { className: "drum-pad", id: "Ca", onClick: this.handleClick, value: "Closed HH" }, "C", /*#__PURE__*/React.createElement("audio", { className: "clip", id: "C", src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3", type: "audio/mpeg" })))), /*#__PURE__*/

      React.createElement("p", null, "Drum Machine")));


  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));