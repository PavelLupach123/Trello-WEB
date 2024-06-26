import Component from '../library/Component.js';
import ListItem from './ListItem.js';

class List extends Component {
	render() {
		const { lists } = this.props;

		return `
      <div class="list-container">
        ${lists.map((list, idx) => `
					<div class="list-item" data-list-index="${idx}" data-list-id="${list.id}" draggable="true">
						${new ListItem({ list }).render()}
					</div>`).join('')}
      </div>
    `;
	}
}

export default List;
