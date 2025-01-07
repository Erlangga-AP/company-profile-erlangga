import * as contentful from "contentful";

interface ContentfulImage {
  fields: { file: { url: string } };
}

interface Item {
  fields: {
    clientLogo: ContentfulImage;
    image: ContentfulImage;
    teamPhoto: ContentfulImage;
    clientPhoto: ContentfulImage;
    slug: string;
    name: string;
    job: string;
    feedback: string;
    title: string;
    expertise: string;
    description: string;
    clientName: string;
    clientJob: string;
    clientFeedback: string;
    contact: string;
  };
}

const client = contentful.createClient({
  space: "q6rx6pxhzrxs",
  environment: "master", // defaults to 'master' if not set
  accessToken: "XgLdaK_hAQ6svWsk5jqLKIzD-ice85UtESoWffZbVQg",
});

export async function getEntries() {
  try {
    const data = await client.getEntries();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCompanyOverview() {
  try {
    const data = await client.getEntries({ content_type: "companyOverview" });
    return data.items.map((item) => {
      return {
        title: item.fields.title,
        description: item.fields.description,
        slug: item.fields.slug,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCompanyServices() {
  try {
    const data = (await client.getEntries({
      content_type: "companyServices",
    })) as unknown as {
      items: {
        fields: {
          description: string;
          title: string;
          slug: string;
          image: { fields: { file: { url: string } } };
        };
      }[];
    };

    return data.items.map((item) => {
      const imageUrl = item?.fields?.image?.fields?.file.url;
      return {
        image: `https:${imageUrl}`,
        title: item.fields.title,
        description: item.fields.description,
        slug: item.fields.slug,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getAllCompanyCustomer() {
  try {
    const data = (await client.getEntries({
      content_type: "companyCustomers",
    })) as unknown as {
      items: {
        fields: {
          slug: string;
          clientLogo: { fields: { file: { url: string } } };
        };
      }[];
    };

    return data.items.map((item) => {
      const clientUrl = item?.fields?.clientLogo?.fields?.file.url;
      return {
        slug: item.fields.slug,
        clientLogo: `https:${clientUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getAllTestimonial() {
  try {
    const data = (await client.getEntries({
      content_type: "companyTestimonials",
    })) as unknown as { items: Item[] };

    return data.items.map((item) => {
      const clientPhotoUrl = item?.fields?.clientPhoto?.fields?.file.url;
      return {
        name: item.fields.name,
        slug: item.fields.slug,
        job: item.fields.clientJob,
        feedback: item.fields.clientFeedback,
        clientPhoto: `https:${clientPhotoUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getTeamFrontEnd() {
  try {
    const data = (await client.getEntries({
      content_type: "companyTeamFrontEnd",
    })) as unknown as { items: Item[] };
    return data.items.map((item) => {
      const teamPhotoUrl = item?.fields?.teamPhoto?.fields?.file.url;
      return {
        name: item.fields.name,
        slug: item.fields.slug,
        title: item.fields.title,
        description: item.fields.description,
        expertise: item.fields.expertise,
        contact: item.fields.contact,
        teamPhoto: `https:${teamPhotoUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getTeamBackEnd() {
  try {
    const data = (await client.getEntries({
      content_type: "companyTeamBackEnd",
    })) as unknown as { items: Item[] };
    return data.items.map((item) => {
      const teamPhotoUrl = item?.fields?.teamPhoto?.fields?.file.url;
      return {
        name: item.fields.name,
        slug: item.fields.slug,
        title: item.fields.title,
        description: item.fields.description,
        expertise: item.fields.expertise,
        contact: item.fields.contact,
        teamPhoto: `https:${teamPhotoUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}

export async function getTeamUiUx() {
  try {
    const data = (await client.getEntries({
      content_type: "companyTeamUiux",
    })) as unknown as { items: Item[] };
    return data.items.map((item) => {
      const teamPhotoUrl = item?.fields?.teamPhoto?.fields?.file.url;
      return {
        name: item.fields.name,
        slug: item.fields.slug,
        title: item.fields.title,
        description: item.fields.description,
        expertise: item.fields.expertise,
        contact: item.fields.contact,
        teamPhoto: `https:${teamPhotoUrl}`,
      };
    });
  } catch (error) {
    console.error(error);
  }
}
