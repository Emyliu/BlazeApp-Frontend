import React from 'react';


export class Help extends React.Component {
  render() {
    return (
    <div>
        <h2>Help Page</h2>
        <p> To use this app, click on the different tabs at the top of your page </p>
        <p> Each page contains a different information view. For the pages involving graphs, the buttons
        under the graphs are used to set the custom split distance </p>
        <p> For a more detailed view with more noise, select a smaller split distance. If you prefer to see the
        overall trend, select a larger split distance </p>
    </div> 
    )
  }
}