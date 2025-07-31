class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `
# Markdown Preview Heading
## This is a smaller Heading
### Another even smaller heading
\n-----------\n \n
You can show what code would look like by putting it \`<div><p>This is code</p></div>\` between backticks. \n\n
      \`\`\`
      // this is multi line code: 
      
      function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;\n
      }\n
  }
\`\`\`
      \n\n
Text can be displayed in different ways such as: *italic*, **bold** and ~~strikethrough~~. \n\n
You can even use links! Here is a link to [Google](www.google.com).com\n\n

> This is a Block Quote! I stick out slightly to show you that i can be seen as a quote.

You can display unordered list:\n\n
* i am an\n
* unordred list\n
* which doesn\'t use numbers.\n\n

You can also use numbered lists:\n\n
1. I am number 1\n
2. I am number 2\n
3. I am number 3\n\n---\n\n

Finally, you can embed images: \n\n ![image-of-space](https://www.nasa.gov/wp-content/uploads/2022/10/stsci-01gfnn3pwjmy4rqxkz585bc4qh.png "Pillars of creation")

An image of the pillars of creation!`,
      preview: ""
    };
  }

  
  handleChange(event) {
      this.setState({
        markdown: event.target.value
     });
  }

  render() {
    return (
    <div>
      <h1>Markdown Preview Page</h1>
        <h3>Markdown: </h3>
        <textarea id="editor" value={this.state.markdown} onChange={this.handleChange.bind(this)} />
        <h3>Preview: </h3>
        <p id="preview" />
        <Preview preview={this.state.markdown} />
    </div>
      );
    }
 }

class Preview extends React.Component {
  
  createMarkup() {
    return {__html: marked(this.props.preview)}
  }
  
  render() {
    return (
      <div className="preview" dangerouslySetInnerHTML={this.createMarkup()}>
        </div>
    )
  }
}


React.render(<App />, document.getElementById("root"));
