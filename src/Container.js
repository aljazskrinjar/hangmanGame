import React, {PureComponent} from 'react'
import Button from './components/Button'


class Container extends PureComponent {
	// static propTypes = {
	// 	// ...
	// }

  renderButton(button, index) {
    return <Button {...button} />
  }

	render() {
		return (
      <div>
      <main>
        { this.props.buttons.map(this.renderButton) }

      </main>
      </div>

		)
	}
}



export default Container
