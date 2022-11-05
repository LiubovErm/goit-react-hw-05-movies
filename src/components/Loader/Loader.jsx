import { ColorRing } from  'react-loader-spinner'
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ColorRing height="300" width="300" ariaLabel="blocks-loading"/>
    </LoaderWrapper>
  );
};