function MainContent() {
    return (
        <h1 cllassName="header">I'm learning React!</h1>
    )
}

ReactDOM.render(<MainContent></MainContent>, document.getElementById("root"))

// const h1 = document.createElement("h1");
// h1.textContent = "T'm learning React!";
// h1.className = "header";
// document.getElementById("root").append(h1);