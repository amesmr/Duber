// Include React
var React = require("react");

// Creating the Form component
var AdminSignup = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function () {
        return {term: ""};
    },

    // This function will respond to the user input
    handleChange: function (event) {
        this.setState({term: event.target.value});
    },

    // When a user submits...
    handleSubmit: function (event) {
        // prevent the HTML from trying to submit a form if the user hits "Enter"
        // instead of clicking the button
        event.preventDefault();

        // Set the parent to have the search term
        this
            .props
            .setTerm(this.state.term);
        this.setState({term: ""});
    },
    // Here we describe this component's render method
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">Signup Your Organization</h3>
                </div>
                <div className="panel-body text-center">
                    <div class="bootstrap-iso">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-6 col-sm-6 col-xs-12">
                                    <form method="post">
                                        <div class="form-group ">
                                            <label class="control-label requiredField" for="name">
                                                User Name
                                                <span class="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                class="form-control"
                                                id="name"
                                                name="name"
                                                placeholder="UserName"
                                                type="text"/>
                                        </div>
                                        <div class="form-group ">
                                            <label class="control-label requiredField" for="pswd">
                                                Password
                                                <span class="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                class="form-control"
                                                id="pswd"
                                                name="pswd"
                                                placeholder="6 character minimum"
                                                type="text"/>
                                        </div>
                                        <div class="form-group ">
                                            <label class="control-label requiredField" for="email">
                                                Email
                                                <span class="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                class="form-control"
                                                id="email"
                                                name="email"
                                                placeholder="user@email.com"
                                                type="text"/>
                                        </div>
                                        <div class="form-group ">
                                            <label class="control-label requiredField" for="streetAddr">
                                                Street Address
                                                <span class="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                class="form-control"
                                                id="streetAddr"
                                                name="streetAddr"
                                                placeholder="111 Main St, SS, 12345"
                                                type="text"/>
                                        </div>
                                        <div class="form-group ">
                                            <label class="control-label " for="mailAddr">
                                                Mailing Address (If different than Street Address)
                                            </label>
                                            <input
                                                class="form-control"
                                                id="mailAddr"
                                                name="mailAddr"
                                                placeholder="111 Main St."
                                                type="text"/>
                                        </div>
                                        <div class="form-group ">
                                            <label class="control-label requiredField" for="npID">
                                                Non Profit ID (501c3)
                                                <span class="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                class="form-control"
                                                id="npID"
                                                name="npID"
                                                placeholder="341142324"
                                                type="text"/>
                                        </div>
                                        <div class="form-group ">
                                            <label class="control-label requiredField" for="tel">
                                                Telephone #
                                                <span class="asteriskField">
                                                    *
                                                </span>
                                            </label>
                                            <input
                                                class="form-control"
                                                id="tel"
                                                name="tel"
                                                placeholder="5551234567"
                                                type="text"/>
                                        </div>
                                        <div class="form-group">
                                            <div>
                                                <button class="btn btn-primary " name="submit" type="submit">
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
