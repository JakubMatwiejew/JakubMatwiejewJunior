import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){

    class Header extends React.Component {
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div id="header"  className="wrapper">
                    <div className="content">
                        <div>
                            <p>Hello, my name is</p>
                            <h1>Jakub Matwiejew</h1>
                            <p>and I'm a Junior Front-End,</p>
                            <p>JavaScript Developer.</p>
                            <div>
                                <button><a href="#aboutme">About me</a></button>
                                <button><a href="#portfolio">My portfolio</a></button>
                                <button><a href="#contact">Contact me</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="background" style={{backgroundImage: "url(./dist/img/computer.svg)"}}>

                    </div>
                </div>
            )
        }
    }

    class AboutMe extends React.Component {
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div id="aboutme" className="wrapper">
                    <div className="background" style={{backgroundImage: "url(./dist/img/page.svg)"}}>

                    </div>
                    <div className="content">
                        <div>
                            <h1>About me.</h1>
                            <p>Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies. Curabitur et ligula. Ut molestie a, ultricies porta urna. Vestibulum commodo volutpat a, convallis ac, laoreet enim. Phasellus fermentum in, dolor. Pellentesque facilisis. Nulla imperdiet sit amet magna. Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi. Aliquam erat ac ipsum. Integer aliquam purus. Quisque lorem tortor fringilla sed, vestibulum id, eleifend justo vel bibendum sapien massa ac turpis faucibus orci luctus non, consectetuer lobortis quis, varius in, purus. Integer ultrices posuere cubilia Curae, Nulla ipsum dolor lacus, suscipit adipiscing. Cum sociis natoque penatibus et ultrices volutpat. Nullam wisi ultricies a, gravida vitae, dapibus risus ante sodales lectus blandit eu, tempor diam pede cursus vitae, ultricies eu, faucibus quis, porttitor eros cursus lectus, pellentesque eget, bibendum a, gravida ullamcorper quam. Nullam viverra consectetuer. Quisque cursus et, porttitor risus. Aliquam sem.</p>
                        </div>
                    </div>
                </div>
            )
        }
    }

    class Portfolio extends React.Component {
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div id="portfolio"  className="wrapper">
                    <div className="content">
                        <h1>Portfolio.</h1>
                    </div>
                    <div className="background" style={{backgroundImage: "url(./dist/img/rocket.svg)"}}>

                    </div>
                </div>
            )
        }
    }

    class Contact extends React.Component {
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div id="contact"  className="wrapper">
                    <div className="content">
                        <div>
                            <h1>Contact me.</h1>
                            <form>
                                <input type="text" placeholder="Your name..."/>
                                <input type="mail" placeholder="Your e-mail..."/>
                                <textarea placeholder="Your message..."/>
                                <button>Send message</button>
                            </form>

                        </div>
                    </div>
                    <div className="background" style={{backgroundImage: "url(./dist/img/letter.svg)"}}>

                    </div>
                </div>
            )
        }
    }

    class App extends React.Component{
        constructor(props){
            super(props);
        }
        render(){
            return(
                <div>
                    <Header/>
                    <AboutMe/>
                    <Portfolio/>
                    <Contact/>
                </div>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
