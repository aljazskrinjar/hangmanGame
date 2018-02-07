import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import addLetter from '../actions/addLetter'
import RaisedButton from 'material-ui/RaisedButton';

class Button extends PureComponent {
	static propTypes = {
		name: PropTypes.string.isRequired,
	}

	handleClick = (x, e) => {
		e.preventDefault();
		//console.log('this is:', this);
		if (x === "Start") {
			this.props.addLetter([]);
		} else if (x === "Restart") {
			window.location.reload(false);
		} else {
			this.props.addLetter(x);
		}
	}
	render() {
		return (
			<RaisedButton style={{ margin: 5}} label={this.props.name} primary = {true} onClick={(e) => this.handleClick(this.props.name, e)} />
		)
	}
}

const mapStateToProps = ({ letter }) => ({ letter })

export default connect(mapStateToProps, { addLetter })(Button)
