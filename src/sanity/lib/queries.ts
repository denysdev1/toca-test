import { defineQuery } from 'next-sanity';

export const ROUTES_QUERY = defineQuery(`*[_type == "route"]`);

export const ROUTE_QUERY =
  defineQuery(`*[_type == "route" && slug.current == $slug][0]{
    ...,
    redirectRoute->{
      slug
    },
    page->{
      ...,
      sections[]{
        _type,
        ...
      }
    }
  }`);

export const HEADER_NAV_QUERY = defineQuery(`*[_type == "headerNav"][0]{
    ...,
    mainNav[]{
      ...,
      internal->{
        slug{
          current
        }
      }
    },
    secondaryNav[]{
      ...,
      internal->{
        slug{
          current
        }
      }
    }
  }`);

export const HOME_PAGE_QUERY = defineQuery(`*[_type == "homePage"][0]{
  title,
  sections[]{
    _type,
    _key,
    ...
  }
}`);
