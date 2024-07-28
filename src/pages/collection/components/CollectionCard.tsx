import React, { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { CollectionItem } from '../../../model/collection';
import { dateStringFormatter } from '../../../utils/date-time';

type CollectionCardProps = {
  item: CollectionItem;
};

const CardContainer = styled(Card)`
  border: 1px solid orange;
  padding: 1rem;
  border-radius: 10px;
`;

const CollectionCard: FC<CollectionCardProps> = ({ item }) => {
  const birthday = dateStringFormatter(item.player.birthday);
  const fullName = `${item.player.firstname} ${item.player.lastname}`;

  return (
    <CardContainer>
      <CardMedia
        loading="lazy"
        component="img"
        alt={fullName}
        image={item.player.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="p">
          {fullName}
        </Typography>
        <Typography>{birthday}</Typography>
      </CardContent>
    </CardContainer>
  );
};

export default CollectionCard;
