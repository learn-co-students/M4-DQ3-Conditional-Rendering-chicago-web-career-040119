import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {
      view: Profile(),
      active: "profile"
    }
  }

  getButtonVal = event => {
    console.log(event.target)
    if (event.target.id === "profile") {
      this.setState({
        view: Profile(),
        active: "profile"
      })
    } else if (event.target.id === "photo") {
      this.setState({
        view: Photos(),
        active: "photos"
      })
    } else if (event.target.id === "cocktail") {
      this.setState({
        view: Cocktails(),
        active: "cocktails"
      })
    } else if (event.target.id === "pokemon") {
      this.setState({
        view: <Pokemon />,
        active: "pokemon"
      })
    } 
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    let detailsToDisplay = <div>{this.state.view}</div>

    return (
      <div>
        <MenuBar active={this.state.active} handleClick={this.getButtonVal} />
        Details to display below here
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
