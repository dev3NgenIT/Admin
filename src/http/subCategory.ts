// type Status = 'active' | 'deactive'

export type SubCategoryData = {
  id: number;
  category_id: number;
  sub_category_name: string;
  sub_category_icon: string;
  sub_category_thumbnail: string;
  sub_category_banner: string;
  sub_category_description: string;
  sub_category_status: string;
};

export const getAllSubData = async (): Promise<SubCategoryData[] | void> => {
  try {
    const res = await fetch("/api/subCategory.json", {
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
