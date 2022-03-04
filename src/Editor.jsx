// set the param to the prop being passed down

const Editor = ({ setMarkdown, placeholder }) => {
    // js here
    // change the state here
    const markdownHandler = (e) => {
      console.log(e.target.value);
      setMarkdown(e.target.value);
    };
  
    return (
      <div>
        <h2 className="editorHeading">I am the editor</h2>
  
        <div className="editor">
          <form>
            {/* use the function with the change of state here */}
            <textarea
              className="textarea"
              onChange={markdownHandler}
              type="text"
              name="markdown"
            >
              {placeholder}
            </textarea>
          </form>
        </div>
      </div>
    );
  };
  
  export default Editor;
  