import { BannerElement } from "./BannerElement";
import { ProductElement } from "./ProductElement";
import { type ProductListItemFragment } from "@/gql/graphql";

export const ProductList = ({ products }: { products: readonly ProductListItemFragment[] }) => {
	return (
		<>
			{products.length > 0 && (
				<BannerElement key={products[0].id} product={products[0]} priority={true} loading={"eager"} />
			)}
			<ul
				role="list"
				data-testid="ProductList"
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2"
			>
				{products.slice(1).map((product, index) => (
					<ProductElement
						key={product.id}
						product={product}
						priority={index < 1} // Adjusted to index < 1 because we're starting from the second element
						loading={index < 2 ? "eager" : "lazy"} // Adjusted to index < 2 for the same reason
					/>
				))}
			</ul>
		</>
	);
};
