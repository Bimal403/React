// const HomePage = () => {
//   return (
//     <div>
//       <h1>Welcome to HomePage</h1>
//       <h4>React is fun.</h4>
//     </div>
//   );
// };
import React from "react";

class HomePage extends React.Component {
  constructor() {
    super();
    //state create
    this.state = {
      title: "default title",
      content: "default content",
    };
    console.log("Hi I am in constructor");
  }
  componentDidMount = () => {
    //Api call
    setTimeout(() => {
      this.setState({
        ...this.state,
        title: "HomePage",
        content: "I am real content",
      });
    }, 3000);
    console.log("I am on componentdidmount");
  };
  componentDidUpdate = () => {
    console.log("I am on componentdidupdate");
  };
  increaseValue = () => {
    //state change
  };
  componentWillUnmount = () => {
    console.log("I am on componentwillunmount");
  };
  render = () => {
    console.log("I am on render");
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.content}</p>
      </div>
    );
  };
}
export default HomePage;
