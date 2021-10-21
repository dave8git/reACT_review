import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
    state = {
      cards: this.props.cards || [],
    }
    static propTypes = {
      title: PropTypes.node.isRequired, 
      description: PropTypes.node,
      columns: PropTypes.array, 
      image: PropTypes.node,
      children: PropTypes.node,
      cards: PropTypes.array,
      icon: PropTypes.node,
    }
    addCard(title){
      this.setState(state => (
        {
          columns: [
            ...state.cards,
            {
              key: state.cards.length ? state.cards[state.columns.length-1].key+1 : 0,
              title,
            },
          ],
        }
      ));
    }
    render() {
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{this.props.title}<span className={styles.icon}><Icon name={this.props.icon}/></span></h3>
          <div>
            {this.state.cards.map(({key, ...cardProps}) => ( 
              <Card key={key} {...cardProps} />
            ))}
          </div>
        </section>
      );
    }
}

export default Column; 