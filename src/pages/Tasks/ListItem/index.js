import React from 'react';

import {
  ListItemContainer,
  ListItemContent,
  ListItemTitle,
  ListItemDescription,
  ListItemOption,
} from './styles';

const ListItem = ({data, active}) => (
  <ListItemContainer>
    <ListItemContent>
      <ListItemTitle>{data.title}</ListItemTitle>
      <ListItemDescription>{data.description}</ListItemDescription>
    </ListItemContent>
    <ListItemOption />
  </ListItemContainer>
);

export default ListItem;
