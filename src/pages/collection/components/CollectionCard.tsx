import React, { FC } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { CollectionItem } from '../../../model/collection';
import { dateStringFormatter } from '../../../utils/date-time';
import { generateCardImagePath } from '../../../utils';
import { ImageLoader } from '../../../components';

type CollectionCardProps = {
  item: CollectionItem;
};

const CardContainer = styled(Card)`
  border: 1px solid orange;
  padding: 1rem;
  border-radius: 10px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;

const CollectionCard: FC<CollectionCardProps> = ({ item }) => {
  const birthday = dateStringFormatter(item.player.birthday);
  const fullName = `${item.player.firstname} ${item.player.lastname}`;

  return (
    <Box>
      <CardContainer>
        <ImageLoader
          alt={fullName}
          src={generateCardImagePath(item.id)}
          height={192}
          width={192}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="p">
            {fullName}
          </Typography>
          <Typography>{birthday}</Typography>
        </CardContent>
      </CardContainer>
    </Box>
  );
};

export default CollectionCard;
