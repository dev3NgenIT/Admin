// type Status = 'active' | 'deactive'

export type Users = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string; // You may want to exclude this for display purposes
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  dateOfBirth: string;
  gender: string;
  bio: string;
  roles: string[];
  isActive: boolean;
  isVerified: boolean;
  profileImg: string;
  description: string;
  url: string;
  isVisible: boolean;
};

export const getAllUsers = async (): Promise<Users[] | void> => {
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
