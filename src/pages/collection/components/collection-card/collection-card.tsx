import React, { FC } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Skeleton,
} from '@mui/material';
import styled from '@emotion/styled';
import { CollectionItem } from '../../../../model/collection';
import { dateStringFormatter } from '../../../../utils/date-time';

type CollectionCardProps = {
  item: CollectionItem;
  loading: boolean;
};

const CardContainer = styled(Card)`
  border: 1px solid orange;
  padding: 1rem;
  border-radius: 10px;
  maxwidth: 250px;
  m: 2;
`;

const CollectionCard: FC<CollectionCardProps> = ({ item, loading }) => {
  const birthday = dateStringFormatter(item.player.birthday);
  const fullName = `${item.player.firstname} ${item.player.lastname}`;

  return (
    <CardContainer>
      {loading ? (
        <Skeleton
          sx={{ width: 200, height: 200 }}
          animation="wave"
          variant="rectangular"
        />
      ) : (
        <CardMedia
          loading="lazy"
          component="img"
          alt={fullName}
          image={item.player.image}
        />
      )}
      <CardContent>
        {loading ? (
          <Skeleton animation="wave" height={15} width="80%" />
        ) : (
          <Typography gutterBottom variant="h5" component="p">
            {fullName}
          </Typography>
        )}
        {loading ? (
          <Skeleton animation="wave" height={15} width="80%" />
        ) : (
          <Typography>{birthday}</Typography>
        )}
      </CardContent>
    </CardContainer>
  );
};

export default CollectionCard;
