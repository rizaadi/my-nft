import Header from "./header";
import Main from "./main";
import View from "./view";
import Profile from "./profile";
import Footer from "./footer";
import React from "react";


class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Profile />
                <Footer />
            </div>
        );
    }
}
export default App;
