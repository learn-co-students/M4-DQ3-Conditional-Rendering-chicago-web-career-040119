import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor() {
    super()
    this.state = {
      activeMenu: Profile(),
      active: "profile"
    }
  }

  renderPage = (event) => {
    if (event.target.id === "profile"){
      this.setState({
        activeMenu: Profile(),
        active: event.target.id
      })
    }
    if (event.target.id === "photo"){
      this.setState({
        activeMenu: Photos(),
        active: event.target.id
      })
    }
    if (event.target.id === "cocktail"){
      this.setState({
        activeMenu: Cocktails(),
        active: event.target.id
      })
    }
    if (event.target.id === "pokemon"){
      this.setState({
        activeMenu: <Pokemon />,
        active: event.target.id
      })
    }
  }



  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>{this.state.activeMenu}</div>


    return (
      <div>
        <MenuBar active={this.state.active} renderPage={this.renderPage}/>
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
