var React  = require('react');
var Mailto = require('react-mailto');
 
var Component = React.createClass({
  render: function () {
    return (
      <Mailto email="j@sonbellamy.com" obfuscate={true}>
        Email me!
      </Mailto>
    );
  }
});