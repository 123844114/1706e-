import React, { Component } from 'react';
import { connect } from 'react-redux'
class City extends Component {
    state = {
        currentIndex: 0
    }
    render() {
        let { district } = this.props.filterCimema
        let { currentIndex } = this.state
        console.log(district)
        return (
            <div className='dialog1'>
                <div className='left'>
                    {
                        district.subItems.map((item, index) => <span className={
                            currentIndex === index ? 'active' : ''
                        } key={item.id} onClick={this.changeTab.bind(null, index)}>{item.name}</span>)
                    }
                </div>
                <div className='right'>
                    {
    currentIndex!==0&&district.subItems[currentIndex].subItems.map(item => <p key={item.id} >{item.name}{item.count}</p>)
                    }
                </div>
            </div>
        );
    }
    changeTab = (index) => {
        this.setState({
            currentIndex: index
        })
    }
}

export default connect((state) => {
    return {
        filterCimema: state.filterCimema
    }
})(City);