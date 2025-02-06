// type Status = 'active' | 'deactive'

export type SiteMetaData = {
  id: number;
  default_language: string;
  default_currency: string;
  meta_image: string;
  copyright_url: string;
  meta_keyword: string;
  copyright_title: string;
  meta_description: string;
};

export const getAllSiteMeta = async (): Promise<SiteMetaData[] | void> => {
  try {
    const res = await fetch("/api/userlist.json", { credentials: "include" });
    // if(!res.ok) throw new Error('unknown error')
    if (!res.ok) throw new Error(await res.json()); // api error handing
    return await res.json();
  } catch (err: unknown) {
    if (err instanceof Error) console.log("network error handing", err.message);
    console.log(err);
  }
};
