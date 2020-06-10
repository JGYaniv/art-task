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

    selectTask(taskType){
        return (e) => {
            this.props.selectTaskType(taskType);
        }
    }

    componentDidMount(){
        this.props.getTaskTypes();
    }

    componentWillUnmount(){
        clearTimeout(this.timeout)
    }

    clicker(e){
        this.setState({"drop": true})
    }

    leave(e){
        this.timeout = setTimeout(() => this.setState({ "drop": false }), 200) 
    }

    render(){
        const taskTypes = this.props.taskTypes.map((taskType, idx) => (
            <li key={idx}><Link to="/form" onClick={this.selectTask(taskType)}>{taskType.title}</Link></li>
        ))//.slice(1,5)
        return(
            <div className="bannerImage">
                <div className="banner-cta">
                    <div className="explorer-cta">
                        <h1>Artists volunteering their craft to build a better world</h1>
                        <p>Our artist volunteers are mobilized and motivated to help you change the world. Lets work together!</p>
                        <form className="explorer-form" 
                            onFocus={this.clicker}
                            onBlur={this.leave} > 
                            <span>
                                <input type="text" placeholder="What do you need help with?"/>
                                <div className="mag-glass">🔎</div>
                                <input type="submit" value="Find a volunteer" />
                            </span>
                            <ul className={this.state.drop ? "reveal" : "hide"}>
                                {taskTypes}
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}