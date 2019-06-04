import React, { Component,Fragment } from 'react';
import TodoItem from "./TodoItem";
// import Test from "./Test"
import './style.css';



class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            inputValue:'',
            list:['学习英文','学习React']
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    

    render() {
        //console.log('render');
        return (  
            <Fragment>
                {/*下面是一个input框*/}
                <div>
                    <label htmlFor="insertArea">输入内容：</label>
                    <input id="insertArea" type="text" 
                    className="input" 
                    value={this.state.inputValue}
                    ref={(input)=> {this.input =input}}
                     onChange={this.handleInputChange} />
                    <button onClick={this.handleBtnClick.bind(this)}>提交</button>
                </div>
                <div>
                    <ul>
                        {
                            this.getTodoItem()
                        }
                        {/* <li key={index} onClick={this.handleItemDelete.bind(this,index)}
                            dangerouslySetInnerHTML={{__html:item}}></li> 
                        dangerouslySetInnerHTML 转义符
                        <li>学英语</li>
                        <li>learning React</li> */}
                    </ul>
                </div>
                {/* <Test content={this.state.inputValue } /> */}
            </Fragment>
        );
    }

    getTodoItem(){
        return this.state.list.map((item,index) =>{
            return (
                <TodoItem content={item} key={index} index={index} handleItemDelete={this.handleItemDelete.bind(this)} />
            )                           
        })
    }

   //ref使用的方式  不推荐使用
   handleInputChange(){
        const value = this.input.value;
        this.setState(()=>({
            inputValue:value
        }))
    }

    // handleInputChange(e){
    //    // console.log(e.target.value);
    //    //新版本的react 的写法
    // //    this.setState(()=>{
    // //        return{
    // //         inputValue:e.target.value
    // //        }
    // //    })
    //     const value = e.target.value;
    //     this.setState(()=>({
    //         inputValue:value
    //     }))

    // //旧版本的写法
    // //    this.setState({
    // //        inputValue:e.target.value
    // //    })
    // }
 
 

    handleBtnClick(){
        //prevState是指修改之前的那组数据  prevState等价于this.state
        this.setState((prevState)=>({
            list:[...prevState.list, prevState.inputValue],
            inputValue:''
        }))

        //旧版本的写法
        // this.setState({
        //     list:[...this.state.list, this.state.inputValue],
        //     inputValue:''
        // })
    }


    handleItemDelete(index){
        //console.log(index)
        //immutable  
        //state 不允许我们做任何的改变
        
      
        this.setState((prevState)=>{
            const list = [...prevState.list];
            list.splice(index,1);
           return {list} 
        })

        //const list = [...this.state.list];
        //list.splice(index,1);
        // this.setState({
        //     list:list
        // })
    }
}

export default TodoList;