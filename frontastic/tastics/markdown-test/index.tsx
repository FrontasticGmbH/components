import Markdown from 'components/commercetools-ui/content/markdown';

const MarkdownTastic = ({ data }) => {
  return <Markdown text={data.markdown} />;
};
   
export default MarkdownTastic;
