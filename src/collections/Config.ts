import { CollectionConfig } from "payload/types";

const Config: CollectionConfig = {
  slug: "config",

  access: {
    read: () => true,
    create: () => false,
    update: () => true,
    delete: () => false,
  },
  admin: {
    useAsTitle: "type",
    defaultColumns: ["type"],
  },
  fields: [
    {
      name: "type",
      label: "Page",
      type: "select",
      options: [
        { label: "About", value: "about" },
        { label: "Contact", value: "contact" },
      ],
      required: true,
      access: {
        update: () => false,
      },
    },
    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      required: true,
      admin: {
        condition: (data) => data.type === "about",
      },
    },
    {
      type: "upload",
      name: "profilePicture",
      label: "Profile Picture",
      relationTo: "media",
      required: true,
      admin: {
        condition: (data) => data.type === "about",
      },
    },
    {
      name: "mail",
      label: "Email",
      type: "text",
      required: true,
      admin: {
        condition: (data) => data.type === "contact",
      },
    },
    /* Social media (Twitter, Instagram Linkedin Behance y youtube opcionales cada una) */
    {
      name: "socialMedia",
      label: "Social Media",
      type: "array",
      fields: [
        {
          name: "platform",
          label: "Platform",
          type: "select",
          options: [
            { label: "Twitter", value: "twitter" },
            { label: "Instagram", value: "instagram" },
            { label: "LinkedIn", value: "linkedin" },
            { label: "Behance", value: "behance" },
            { label: "YouTube", value: "youtube" },
          ],
          required: true,
        },
        {
          name: "url",
          label: "URL",
          type: "text",
          required: true,
        },
      ],
      admin: {
        condition: (data) => data.type === "contact",
      },
      validate: (value) => {
        if (value) {
          const platforms = value.map((item) => item.platform);
          const uniquePlatforms = new Set(platforms);
          if (platforms.length !== uniquePlatforms.size) {
            return "You cannot add the same platform more than once.";
          }
        }
        return true;
      },
    },
  ],
  endpoints: [
    {
      path: "/by-type/:type",
      method: "get",
      handler: async (req, res, next) => {
        try {
          const { type } = req.params;
          const results = await req.payload.find({
            collection: "config",
            where: {
              type: {
                equals: type,
              },
            },
          });
          res.status(200).json(results);
        } catch (error) {
          res.status(500).json({
            error: "Internal server error",
            details: error.toString(),
          });
        }
      },
    },
  ],
};

export default Config;
