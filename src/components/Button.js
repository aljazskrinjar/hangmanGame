import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import addLetter from '../actions/addLetter'

class Button extends PureComponent {
	static propTypes = {
		name: PropTypes.string.isRequired,
	}

	handleClick = (x,e) => {
		e.preventDefault();
    //console.log('this is:', this);
		if (x === "Start"){
			this.props.addLetter([]);
		}else if (x === "Restart"){
			window.location.reload(false); 
		}	else {
			this.props.addLetter(x);
		}

  }


	render() {

    return (
			<button onClick={(e) => this.handleClick(this.props.name, e)}>{this.props.name}</button>

    )
	}
}




const mapStateToProps = ({ letter }) => ({ letter})

export default connect(mapStateToProps, { addLetter })(Button)
