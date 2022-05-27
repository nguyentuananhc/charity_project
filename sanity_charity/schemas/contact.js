export default {
  name: "contact",
  title: "Contact",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "role",
      title: "Role",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "string",
    },
  ],
};
