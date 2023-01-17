import { Component } from "react";

class UserInfo extends Component {
    userInfo = [];
    constructor(props) {
        super(props);
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
        console.log(localStorage);

        console.log(localStorage.getItem("userInfo"));
    }
}

export default new UserInfo();