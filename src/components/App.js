import Header from "./header";
import Main from "./main";
import View from "./view";
import Form from "./form";
import Laporan from "./laporan";
import Profile from "../views/profile/profile";
import Footer from "./footer";
import React from "react";


class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <Laporan />
                <Footer />
            </div>
        );
    }
}
export default App;
