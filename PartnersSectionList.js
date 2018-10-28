import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';

import Row from './Row';

const renderSectionHeader = ({ section }) => <Text>{section.title}</Text>;

const PartnersSectionList = props => {
  const PartnersByLetter = props.partners.reduce((obj, partner) => {
    const firstLetter = partner.name[0].toUpperCase();
    return {
      ...obj,
      [firstLetter]: [...(obj[firstLetter] || []), partner],
    };
  }, {});

  const sections = Object.keys(PartnersByLetter)
    .sort()
    .map(letter => ({
      data: PartnersByLetter[letter],
      title: letter,
    }));

  return (
    <SectionList
      keyExtractor={item => item.id}
      sections={sections}
      renderItem={({ item }) => (
        <Row {...item} onSelectPartner={props.onSelectPartner} />
      )}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

PartnersSectionList.propTypes = {
  partners: PropTypes.array,
};

export default PartnersSectionList;
