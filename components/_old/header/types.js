import PropTypes from 'prop-types';

export const categoryTreeType = PropTypes.shape({
  /**
   * nodeId is used to actually navigate to a page
   */
  nodeId: PropTypes.string,
  /**
   * Name of the menu item
   */
  name: PropTypes.string,
});

export const topCategoryType = PropTypes.shape({
  /**
   * The label used for the Tab nav
   */
  name: PropTypes.string,
  /**
   * The content of the underlying tree
   * (see categoryTree)
   */
  tree: PropTypes.shape(categoryTreeType),
  /**
   * the background image shown in the tab nav
   */
  mobileNavBackgroundImage: PropTypes.object,
});

/**
 * An array of more trees (this)
 *
 * it is being defined outside the original shape
 * because it's a recurring propType, which is
 * currently not supported out of the box
 */
categoryTreeType.children = PropTypes.arrayOf(categoryTreeType);
