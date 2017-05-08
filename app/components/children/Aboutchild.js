// Include React
var React = require("react");

// Creating the Form component
var About = React.createClass({

    
    // Here we describe this component's render method
    render: function () {
//add function that displays this page - all content static
        return (
            <div class="row row-bottom-padded-md">
                    <div class="col-md-12 text-center animate-box">
                        <p><img src="images/cover_bg_1.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive"></p>
                    </div>
                    <div class="col-md-6 text-center animate-box">
                        <p><img src="images/cover_bg_2.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive"></p>
                    </div>
                    <div class="col-md-6 text-center animate-box">
                        <p><img src="images/cover_bg_3.jpg" alt="Free HTML5 Bootstrap Template" class="img-responsive"></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="feature-text">
                            <h3>Love</h3>
                            <p>As a group of animal lovers, we realized there was no national resource for transporting animals at risk.  We wanted to step in and help all of those great regional resources.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-text">
                            <h3>Compassion</h3>
                            <p>Our goal is to connect the volunteers with the rescue groups to save as many furry lives as possible.</p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="feature-text">
                            <h3>Charity</h3>
                            <p>All of the money raised goes to directly support these committed groups and indivuals.</p>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
         module.export=About;
        