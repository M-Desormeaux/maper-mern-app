export const Typography = ({ type, props, children }) => {
  switch (type.toLowerCase()) {
    case "h1":
      return <h1>{children}</h1>;
    case "h2":
      return <h2>{children}</h2>;
    case "h3":
      return <h2>{children}</h2>;
    case "h4":
      return <h2>{children}</h2>;
    default:
      return <p>{children}</p>;
  }
};
