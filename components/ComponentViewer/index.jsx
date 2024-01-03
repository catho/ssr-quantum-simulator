const ComponentViewer = ({ children, componentName, componentDescription }) => (
  <article className="ComponentContainer">
    <h4 className="ComponentTitle">{componentName}</h4>
    <h6>{componentDescription}</h6>
    {children}
  </article>
);

export default ComponentViewer;
