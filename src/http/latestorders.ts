export type LatestOrderAll = {
	id: string;
	itemName: string;
	productId: string;
	dateAdded: string;
	price: string;
	status: string;
	quantity: number;
	deliveryStatus: string;
	itemImage: string;
	brand: string;
  };
  
  export const getAllLatestOrders = async (): Promise<LatestOrderAll[] | void> => {
	try {
	  const res = await fetch('/api/latestOrder.json', { credentials: 'include' });
  
	  if (!res.ok) throw new Error(await res.json()); // API error handling
	  return await res.json(); // Returns the orders
  
	} catch (err: unknown) {
	  if (err instanceof Error) console.log('Network error handling:', err.message);
	  console.log(err);
	}
  };
  