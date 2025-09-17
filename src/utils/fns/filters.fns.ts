import { allElecLinks } from "../Links/Electronics/ElectronicLinks";

//
function isProductMatch(
 { product,
  selectedSpecsFilters,
  selectedTypeFilters
}: any){
  const matchesSpecs =
    selectedSpecsFilters.length === 0 ||
    selectedSpecsFilters.some((specFilter: any) =>
      product.specifications.includes(specFilter)
    );

  const matchesType =
    selectedTypeFilters.length === 0 ||
    selectedTypeFilters.includes(product.type);

  return matchesSpecs && matchesType;
};

function BrandCategoryFilter(manufacturer: string, products: any[]) {
  // Filter products by manufacturer, case-insensitive
  const brandProducts = products.filter(
    (p: any) => p.manufacturer?.toLowerCase() === manufacturer.toLowerCase()
  );

  const filteredLinks = allElecLinks
    .map(link => {
      const filteredCf = link.cf
        .map((cf: any) => ({
          ...cf,
          filters: cf.filters.filter((filter: any) => {
            if (!('id' in filter) || !filter.id) return false;

            const normalizedFilterId = filter.id.startsWith("categoryPath.id=")
              ? filter.id.slice("categoryPath.id=".length)
              : filter.id;

            return brandProducts.some((product: any) =>
              product.categoryPath?.some((cat: any) => normalizedFilterId === cat.id)
            );
          }),
        }))
        .filter((cf: any) => cf.filters.length > 0); 

      return filteredCf.length > 0 ? { ...link, cf: filteredCf } : null;
    })
    .filter(Boolean) as typeof allElecLinks; 

  return filteredLinks;
}

function uniqueArr(arr: any){
return [...new Set(arr)];
};


export { isProductMatch, BrandCategoryFilter, uniqueArr};