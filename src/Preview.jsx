import {marked} from "marked";

marked.setOptions({
  breaks: true
});

const renderer = new marked.Renderer();

const Preview = ({ markdown }) => {
  return (
    <div>
      <h2 className="previewHeading">Preview</h2>
      <div
        className="preview"
        dangerouslySetInnerHTML={{
          __html: marked(markdown)
        }}
      ></div>
    </div>
  );
};

export default Preview;