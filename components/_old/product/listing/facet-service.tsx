class FacetService {
  getColorStyle(name) {
    const colorStyle = {
      White: { backgroundColor: '#FFFFF' },
      Multicolored: {
        backgroundImage: 'linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)',
      },
      Beige: { backgroundColor: '#F5F5DC' },
      Grey: { backgroundColor: '#808080' },
      Blue: { backgroundColor: '#213EDA' },
      Black: { backgroundColor: '#000000' },
      Pink: { backgroundColor: '#FFC0CB' },
      Green: { backgroundColor: '#87CB96' },
      Red: { backgroundColor: '#EA3636' },
      Yellow: { backgroundColor: '#FCEA18' },
      Gold: { backgroundColor: '#FFD700' },
      Oliv: { backgroundColor: '#808000' },
      Silver: { backgroundColor: '#C0C0C0' },
      Brown: { backgroundColor: '#A52A2A' },
    };

    return colorStyle[name];
  }

  isColorMulticolored(name: string) {
    return name === 'Multicolored';
  }

  isSortEqual(firstSort, secondSort) {
    return firstSort.attributeId === secondSort.attributeId && firstSort.order === secondSort.order;
  }

  getFacetName(facet) {
    return facet.key.replace('variants.', '').replace('attributes.', '');
  }

  getFacetLabelValue(facet) {
    if (facet.selected) {
      if (facet.type === 'term' && this.numberOfSelectedFacet(facet) > 0) {
        return `${this.numberOfSelectedFacet(facet)}`;
      }

      if (facet.type === 'range') {
        return '1';
        // return `${(facet.value.min / 100).toFixed(2)} - ${(facet.value.max / 100).toFixed(2)}`
      }
    }

    return '';
  }

  isColorFacet(facet) {
    return facet.key === 'variants.attributes.color';
  }

  isPriceFacet(facet) {
    return facet.key === 'variants.attributes.price';
  }

  isFacetSelected(facet) {
    if (facet.type === 'range') {
      return !(
        (facet.value.min === facet.min && facet.value.max === facet.max) ||
        (facet.value.min === 0 && facet.value.max === 0)
      );
    }

    if (facet.type === 'term') {
      return facet.terms.some((term) => {
        return term.selected === true;
      });
    }

    return false;
  }

  numberOfSelectedFacet(facet) {
    return facet.terms.filter((term) => {
      return term.selected === true;
    }).length;
  }

  anySelectedFacets(facets) {
    return facets.some((facet) => {
      return this.isFacetSelected(facet);
    });
  }

  numberOfSelectedFacets(facets) {
    return facets.filter((facet) => {
      return this.isFacetSelected(facet);
    }).length;
  }

  clearFacet(facet) {
    facet.selected = false;

    if (facet.type === 'range') {
      facet.value.min = facet.min;
      facet.value.max = facet.max;
    }

    if (facet.type === 'term') {
      facet.terms.forEach((term) => {
        term.selected = false;
      });
    }
  }

  clearFacets(facets) {
    facets.forEach((facet) => {
      return this.clearFacet(facet);
    });
  }
}

export default new FacetService();
