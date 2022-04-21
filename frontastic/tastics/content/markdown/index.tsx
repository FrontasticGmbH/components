import Markdown from 'components/frontastic-ui/content/markdown';

const MarkdownTastic = ({ data }) => {
  return <Markdown text={data.markdown} />;
};

export default MarkdownTastic;
