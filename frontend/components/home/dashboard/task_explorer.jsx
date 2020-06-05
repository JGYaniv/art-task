import React from 'react'
import {Link} from 'react-router-dom'

export default class BannerCta extends React.Component{
    constructor(props){
        super(props)
        this.state = { drop: false }
        this.clicker = this.clicker.bind(this)
        this.leave = this.leave.bind(this)
        this.timeout = null
    }

    componentWillMount(){
        this.props.getTaskTypes();
    }

    clicker(e){
        this.setState({"drop": true})
    }

    componentWillUnmount() {
        clearTimeout(this.timeout)
    }

    leave(e) {
        this.timeout = setTimeout(() => this.setState({ "drop": false }), 100)
    }

    selectTask(taskType) {
        console.log("setting up...")
        return (e) => {
            this.props.selectTaskType(taskType);
            console.log(taskType);
        }
    }

    render(){
        const taskTypes = this.props.taskTypes.map((taskType, idx) => (
            <li key={idx}><Link to="/form" onClick={this.selectTask(taskType)}>{taskType.title}</Link></li>
        )).slice(1,5)
        return(
            <div className="explorer-background-image">
                <div className="explorer-dash">
                    <h1>Book Your Next Task</h1>
                    <form className="explorer-form">
                        <input className="dash-input" type="text" 
                            onFocus={this.clicker} 
                            onBlur={this.leave}
                            placeholder="What do you need help with?"/>
                        <div className="mag-glass">🔎</div>
                        <ul className={this.state.drop ? "reveal" : "hide"}>
                            {taskTypes}
                        </ul>
                    </form>
                </div>
            </div>
        )
    }
}