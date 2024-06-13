import { CollectionConfig } from "payload/types";
import { slugField } from "../fields/slug";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "title_jp",
      label: "Title (Japanese)",
      type: "text",
      required: true,
    },
    slugField(),

  
    {
      name: "images",
      required: true,
      label: "Project Images",
      type: "array",
      maxRows: 1000,
      fields: [
        {
          type: "upload",
          name: "image",
          label: "Image",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "video",
      label: "Video",
      type: "text",
    },
    {
      name: "video_index",
      label: "Video Index",
      type: "number",
    },
    {
      name: "model",
      label: "3D Model (.glb)",
      type: "upload",
      admin: {
        position: "sidebar",
      },
      relationTo: "media",
    },
    {
      name: "driveLink",
      label: "Drive Link to the model",
      type: "text",
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "description_jp",
      label: "Description (Japanese)",
      type: "textarea",
    },
  ],
  endpoints: [
    {
      path: "/by-slug/:slug",
      method: "get",
      handler: async (req, res, next) => {
        try {
          const { slug } = req.params;
          const results = await req.payload.find({
            collection: "projects",
            where: {
              slug: {
                equals: slug,
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

export default Projects;
