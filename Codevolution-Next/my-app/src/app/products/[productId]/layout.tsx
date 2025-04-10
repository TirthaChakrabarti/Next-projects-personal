export default function ProductsDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <h2>Featured Products</h2>
    </div>
  );
}
