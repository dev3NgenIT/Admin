// type Status = 'active' | 'deactive'

export type ChildCategoryData = {
  id: string;
  category_id: string;
  sub_category_id: string;
  child_category_name: string;
  child_category_icon: string;
  child_category_thumbnail: string;
  child_category_banner: string;
  child_category_description: string;
  child_category_status: string;
};

export const getAllChildData = async (): Promise<
  ChildCategoryData[] | void
> => {
  try {
    const res = await fetch("/api/childCategory.json", {
      credentials: "include",
    });

    // if(!res.ok) throw new Error('unknown error')
    if (!res.ok) throw new Error(await res.json()); // api error handing
    return await res.json();
  } catch (err: unknown) {
    if (err instanceof Error) console.log("network error handing", err.message);
    console.log(err);
  }
};
