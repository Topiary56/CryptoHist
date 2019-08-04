import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem} from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../actions/itemActions';
import PropTypes from 'prop-types';

const divStyle = {
        maxHeight: 500,
        maxWidth: 1000,
        overflow: 'scroll'
};

class Shoppinglist extends Component{
    componentDidMount () {
        this.props.getItems();
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    

    render() {
        const { items } = this.props.item;
        return(
        <div style = {divStyle}>
            <Container>
                    <ListGroup>
                        <TransitionGroup className="shopping-list">
                            
                            {items.map(({ _id,key, exch1Name, exch2Name, timeStamp, ccyPair,exch1BuyAt , exch1SellAt, exch2BuyAt,exch2SellAt,
                                gainLoss, urgentTrade,arbPercent , exch1BuyOrSell,tradeInstructions, time}) => (
                                <CSSTransition key={_id} timeout={500} classNames="fade">
                                    <ListGroupItem>
                                        {tradeInstructions}<br></br>
                                        {timeStamp}<br></br>
                                        {/*{key}<br></br>
                                        {exch1Name}<br></br>
                                        {exch2Name}<br></br>
                                        {timeStamp}<br></br>
                                        {ccyPair}<br></br>
                                        {exch1BuyAt}<br></br>
                                        {exch1SellAt}<br></br>
                                        {exch2BuyAt}<br></br>
                                        {exch2SellAt}<br></br>
                                        {gainLoss}<br></br>
                                        {urgentTrade}<br></br>
                                        {arbPercent}<br></br>
                                        {exch1BuyOrSell}<br></br>
                                        {tradeInstructions}*/}
                                    </ListGroupItem>
                                </CSSTransition>
                            ))}
                        </TransitionGroup>
                    </ListGroup>
                
            </Container>
            </div>
        );
    }
}

Shoppinglist.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

Shoppinglist.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item:state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(Shoppinglist);