import React, { PureComponent } from 'react'

import { connect } from 'react-redux'

class MainGame extends PureComponent {

	theEndMessage() {
		if (this.props.letter.winLosePlay === 1) return "You won"
		if (this.props.letter.winLosePlay === -1) return "game over"
	}


	render() {
		return (
			<div>
				<main>
					<div>{this.props.letter.word}</div>
					{this.theEndMessage()}
				</main>
			</div>
		)
	}
}

const mapStateToProps = ({ letter }) => ({ letter })

export default connect(mapStateToProps)(MainGame)

//export default MainGame
