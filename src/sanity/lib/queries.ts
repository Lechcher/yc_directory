// Imports the defineQuery function from next-sanity, used to define Sanity GROQ queries.
import { defineQuery } from "next-sanity";

// Defines a GROQ query to fetch startup documents.
// It filters by document type "startup", checks for a defined slug, and optionally filters by search term across title, category, or author name.
// Results are ordered by creation date in descending order.
export const STARTUPS_QUERY =
  defineQuery(`*[ _type == "startup" && defined(slug.current) && !defined($search) || title match $search || category match $search || author -> name match $search ] | order(_createdAt desc) {
  _id,
  title,
  slug,
  _createdAt,
  author -> {
    _id,
    name,
    slug,
    image,
    bio
  },
  views,
  description,
  category,
  image
}`);

// Defines a GROQ query to fetch a single startup document by its unique ID.
// It retrieves detailed information including author details, views, description, image, and pitch.
export const STARTUP_BY_ID_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id,
  title,
  slug,
  category,
  _createdAt,
  author -> {
    _id,
    name,
    username,
    image,
    bio
  },
  views,
  description,
  image,
  pitch
}`);

// Defines a GROQ query to fetch the _id and views count for a specific startup by its ID.
export const STARTUP_VIEWS_QUERY =
  defineQuery(`*[_type == "startup" && _id == $id][0] {
  _id,
  views
}`);

// Defines a GROQ query to fetch an author document by their GitHub ID.
// It retrieves author details such as name, username, email, image, and bio.
export const AUTHOR_BY_GITHUB_ID_QUERY =
  defineQuery(`*[_type == "author" && id == $id][0] {
  _id,
  id,
  name,
  username,
  email,
  image,
  bio
}`);

// Defines a GROQ query to fetch an author document by their Sanity document ID.
// It retrieves author details similar to the GitHub ID query.
export const AUTHOR_BY_ID_QUERY =
  defineQuery(`*[_type == "author" && _id == $id][0] {
  _id,
  id,
  name,
  username,
  email,
  image,
  bio
}`);

// Defines a GROQ query to fetch startup documents associated with a specific author.
// It filters by the author's reference ID and orders results by creation date.
export const STARTUPS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "startup" && author._ref == $id] | order(_createdAt desc) {
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);

// Defines a GROQ query to fetch a playlist document by its slug.
// It retrieves the playlist's ID, title, slug, and an array of selected startup details.
export const PLAYLIST_BY_SLUG_QUERY =
  defineQuery(`*[_type == "playlist" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  select[]->{
    _id,
    _createdAt,
    title,
    slug,
    author->{
      _id,
      name,
      slug,
      image,
      bio
    },
    views,
    description,
    category,
    image,
    pitch
  }
}`);
