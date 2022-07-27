import Markdown from 'components/default-ui/content/markdown';

const MarkdownTastic = ({ data }) => {
  return <Markdown text={data.markdown} />;
};

export default MarkdownTastic;
