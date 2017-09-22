import React from "react";

class AdminLayout extends React.Component {
  render() {
    return(
      <div>
        <div className="header">Header</div>
        {this.props.children}
        <div className="footer">Footer</div>
      </div>
    );
  }
}

module.exports = AdminLayout;
