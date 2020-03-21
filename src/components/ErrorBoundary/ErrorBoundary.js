import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false }
    }
componentDidCatch(error) {
    this.setState({ hasError: true });
}
refreshPage = () => {
    window.location.reload(false);
}
render() {
    if (this.state.hasError) {
        alert("Incorrect Search Input")
        this.refreshPage();
    } return this.props.children;
}
}
export default ErrorBoundary;