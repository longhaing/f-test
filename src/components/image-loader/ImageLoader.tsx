import { CircularProgress } from '@mui/material';
import React, {
  DetailedHTMLProps,
  FC,
  ImgHTMLAttributes,
  useState,
} from 'react';
import { ImageLoaderContainer } from './ImageLoader.styled';

interface Props
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  src: string;
  height: number;
  width: number;
}

const ImageLoader: FC<Props> = ({ src, height, width, ...others }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const placeholderErrorImage: string = `https://dummyimage.com/${height}x${width}`;

  return (
    <ImageLoaderContainer height={height} width={width}>
      {isLoaded || <CircularProgress />}

      <img
        {...others}
        style={isLoaded ? {} : { display: 'none' }}
        src={hasError ? placeholderErrorImage : src}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          setHasError(true);
        }}
      />
    </ImageLoaderContainer>
  );
};

export default ImageLoader;
