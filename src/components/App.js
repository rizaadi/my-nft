import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import React from "react";


class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Main />
                <Footer />
            </div>
        );
    }
}
export default App;
