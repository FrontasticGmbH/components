import React from 'react';
import CategoryTeasers, { CategoryTeaser } from 'components/default-ui/category-teasers';

type Props = {
  categoryTeaser: Array<CategoryTeaser>;
};

const ContentCategoriesTastic = ({ data }: { data: Props }) => {
  const { categoryTeaser } = data;

  return <CategoryTeasers items={categoryTeaser} />;
};

export default ContentCategoriesTastic;
