// type Status = 'active' | 'deactive'

export type Products = {
	id: string
	name: string
	url: string
	logo: string
	thumbnail: string
	banner: string
	description: string
	isVisible: boolean
}

export const getAllProducts = async (): Promise<Products[] | void> => {
	try {
		const res = await fetch( '/api/products.json', { credentials: 'include' })

		// if(!res.ok) throw new Error('unknown error')
		if(!res.ok) throw new Error(await res.json()) 		// api error handing
		return await res.json()

	} catch (err: unknown) {
		if(err instanceof Error ) console.log('network error handing', err.message)	
		console.log(err)	
	}
}