//"https://randomuser.me/api/"

import { Component } from "react";
import axios from "axios";

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {employeeInfos: []};
    };

    componentDidMount() {
        axios.get("https://randomuser.me/api/?results=100").then((response) => {
            console.log("response:", response.data.results);
            this.setState({employeeInfos: response.data.results});
        });
    }

    render() {
        return (
        <div className="Main">
            <table>
                <tr>
                    <th>EmployeeImg</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>DOB</th>
                </tr>
                {this.renderEmployeeCards()}
            </table>
        </div>
        )
    }

    renderEmployeeCards() {
        let results = null;
        const employeeData = this.state.employeeInfos;
        if (employeeData.length > 0 ) {
            results = employeeData.map((employee) => {
                return (
                    <tr key={employee.id}>
                        <td>
                            <img src={employee.picture.medium}/>
                        </td>
                        <td>
                            {employee.name.first} {employee.name.last}
                        </td>
                        <td>
                            {employee.phone}
                        </td>
                        <td>
                            {employee.email}
                        </td>
                        <td>
                            {employee.dob.date}
                        </td>
                    </tr>
                )
            });
        }
        return results;
    }
}