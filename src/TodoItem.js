import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.handleChlick=this.handleChlick.bind(this);
    }
    

    render() {
        const {content,test} = this.props;
        //jsx -> createElement ->虚拟DOM(js对象) -> 真实的DOM
        //return React.createElement('div',{},'item');
        //return <div>item</div>

        return (
            <div onClick={this.handleChlick}>
              {test} - {content}
            </div>
        );
    }
    handleChlick(){
       // this.props.handleItemDelete(this.props.index);
        //alert(this.props.index)
        const {handleItemDelete ,index} = this.props;
        handleItemDelete(index)
    }
}

TodoItem.propTypes={
    test:PropTypes.string.isRequired,  //父组件没有传递数值，不会被验证  //isRequired父组件必须向子组件传递数值
    content:PropTypes.string,
    handleItemDelete:PropTypes.func, //handleItemDelete接收的属性必须是函数
    index:PropTypes.number,
}

TodoItem.defaultProps ={
    test:'hello world'  //设置默认值
}

export default TodoItem;