// Include React
var React = require("react");

// Creating the Form component
var Donate = React.createClass({

    // Here we set a generic state associated with the text being searched for
    getInitialState: function () {
        return {term: ""};
    },

    handleClick: function(){
     //add this.props.   
    }
    // Here we describe this component's render method
    render: function () {
        return (<div class="fh5co-hero">
            <div class="fh5co-overlay"></div>
            <div class="fh5co-cover text-center" data-stellar-background-ratio="0.5" style="background-image: url(images/cover_bg_2.jpg);">
                <div class="desc animate-box">
                    <h2>We Are <strong>Non-profit</strong></h2>
                    <span>HandCrafted by <a href="http://frehtml5.co/" target="_blank" class="fh5co-site-name">FreeHTML5.co</a></span>
                    <span><a class="btn btn-primary btn-lg" href="#">Donate Now</a></span>
                    onClick={this.handleClick}
//check if in correct order onClick/btn/div

                </div>
            </div>

        </div>
         module.export=Donate;
        