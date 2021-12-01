export const Typography = (props) => {
  const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];

  if (headings.includes(props.type)) {
    return <props.type {...props}>{props.children}</props.type>;
  } else {
    return <p {...props}>{props.children}</p>;
  }
};
