import Markdown from 'frontastic/lib/markdown';

const MarkdownTastic = ({ data }) => {
  return <Markdown text={data.markdown} />;
};

export default MarkdownTastic;
