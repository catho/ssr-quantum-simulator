const ComponentViewer = ({ children, name, description }) => (
  <article className="ComponentContainer">
    <h4 className="ComponentTitle">{name}</h4>
    <h6>{description}</h6>
    {children}
  </article>
);

export default ComponentViewer;
