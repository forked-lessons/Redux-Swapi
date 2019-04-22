import React from "react";
import { connect } from "react-redux";
import { CharacterList } from "../components";
import { fetchPeople } from "../actions";
class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.fetchPeople();
  }

  render() {
    if (this.props.fetching) {
      <h4>Loading ...</h4>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.characters,
    isLoading: state.charsReducer.isLoading
  };
};
// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchPeople
  }
)(CharacterListView);
