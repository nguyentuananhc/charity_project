export default {
  name: "author",
  title: "Author",
  type: "document",
  fields: [
    {
      name: "username",
      title: "User Name",
      type: "string",
    },
    {
      name: "avatar",
      title: "Avatar",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "username",
        maxLength: 120,
      },
    },
    {
      name: "bio",
      title: "Bio",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "username",
      media: "avatar",
    },
  },
};
