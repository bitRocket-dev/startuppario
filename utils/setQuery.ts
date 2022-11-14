export const utilitySetQuery = (query: any) => {
  if (!query) return null;
  const Slug = query.replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "-");
  return Slug;
};
