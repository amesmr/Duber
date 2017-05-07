// Include React
var React = require("react");

// Creating the Form component
var AdminSignup = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function (data) {
        return {data};
    },

    // This function will respond to the user input
    handleChange: function (event) {
        // this.setState({term: event.target.value});
    },

    // When a user submits...
    handleSubmit: function (event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter"
        // instead of clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        // this
        //     .props
        //     .setTerm(this.state.term);
        // this.setState({term: ""});
    },
    // Here we describe this component's render method
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Signup Your Organization</h3>
                </div>
                <div className="panel-body text-center">
                    <div className="bootstrap-iso">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <form method="post">
                                        <div className="form-group ">
                                            <label className="control-label requiredField" for="name">
                                                User Name
                                                <span className="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="UserName"
                                                type="text"/>
                                        </div>
                                        <div className="form-group ">
                                            <label className="control-label requiredField" for="pswd">
                                                Password
                                                <span class="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="form-control"
                                                id="pswd"
                                                name="pswd"
                                                placeholder="6 character minimum"
                                                type="text"/>
                                        </div>
                                        <div className="form-group ">
                                            <label className="control-label requiredField" for="email">
                                                Email
                                                <span className="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="user@email.com"
                                                type="text"/>
                                        </div>
                                        <div className="form-group ">
                                            <label className="control-label requiredField" for="streetAddr">
                                                Street Address
                                                <span className="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="form-control"
                                                id="streetAddr"
                                                name="streetAddr"
                                                placeholder="111 Main St, SS, 12345"
                                                type="text"/>
                                        </div>
                                        <div className="form-group ">
                                            <label className="control-label " for="mailAddr">
                                                Mailing Address (If different than Street Address)
                                            </label>
                                            <input
                                                className="form-control"
                                                id="mailAddr"
                                                name="mailAddr"
                                                placeholder="111 Main St."
                                                type="text"/>
                                        </div>
                                        <div className="form-group ">
                                            <label className="control-label requiredField" for="npID">
                                                Non Profit ID (501c3)
                                                <span className="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="form-control"
                                                id="npID"
                                                name="npID"
                                                placeholder="341142324"
                                                type="text"/>
                                        </div>
                                        <div className="form-group ">
                                            <label className="control-label requiredField" for="tel">
                                                Telephone #
                                                <span className="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                className="form-control"
                                                id="tel"
                                                name="tel"
                                                placeholder="5551234567"
                                                type="text"/>
                                        </div>
                                        <div className="form-group">
                                            <div>
                                                <button className="btn btn-primary " name="submit" type="submit">
                                                    Submit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

// Export the component back for use in other files
module.exports = AdminSignup;
