import { DetailsLinksList, DetailsLinksItem, DetailsLink } from './MoviesDetails.styled';

const additionalLinks = [
  { text: 'Cast', path: 'cast' },
  { text: 'Reviews', path: 'reviews' },
  { text: 'Trailers', path: 'trailers' },
];

export const DetailsLinks = () => {
    return (
    <DetailsLinksList>
        {additionalLinks.map(({ text, path }) => (
            <DetailsLinksItem key={path}>
                <DetailsLink to={path}>{text}</DetailsLink>
            </DetailsLinksItem>
        ))}
    </DetailsLinksList>
    )
};