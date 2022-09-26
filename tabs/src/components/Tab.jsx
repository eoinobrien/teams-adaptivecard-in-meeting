import React from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import { TaskModuleDimension } from '@microsoft/teams-js';
import "./App.css";
import * as ACData from "adaptivecards-templating";
import { SampleCard } from "../adaptive-cards";

class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      handler: {},
    };
  }


  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    microsoftTeams.initialize();
  }

  render() {

    const sampleTaskModule = () => {
      const template = new ACData.Template(SampleCard);
      const card = template.expand({
        $root: {
          name: "Matt Hidinger",
        },
      });
  
      const submitHandler = async (error, result) => {
        this.setState({
          handler: {
            error,
            result,
          },
        });
      };
  
      microsoftTeams.tasks.startTask(
        {
          width: TaskModuleDimension.Medium,
          card: JSON.stringify(card),
        },
        submitHandler
      );
    }

    return (
      <div>
        <h1>In-meeting app sample</h1>
        <button onClick={() => sampleTaskModule()}>
          Open Sample Task Module
        </button>
        <h4>Task Module Submit Handler Result Type:</h4>
        <p>{typeof(this.state.handler["result"]) ?? "undefined"}</p>
        <h4>Task Module Submit Handler Result:</h4>
        <p>{JSON.stringify(this.state.handler["result"]) ?? ""}</p>
        <h4>Task Module Submit Handler Error:</h4>
        <p>{this.state.handler["error"] ?? ""}</p>
      </div>
    );
  }
}

export default Tab;
