import Link from "next/link";

interface CategoryCardProps {
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export default function CategoryCard({
  name,
  slug,
  description,
  icon,
}: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${slug}`}
      className="group rounded-xl border border-[#262626] bg-[#141414] p-6 transition-colors hover:border-[#D4A853]/50"
    >
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-3 text-lg font-semibold text-[#FAFAFA] transition-colors group-hover:text-[#D4A853]">
        {name}
      </h3>
      <p className="mt-2 text-sm text-[#888888]">{description}</p>
      <span className="mt-4 inline-block text-sm font-medium text-[#D4A853]">
        Browse articles &rarr;
      </span>
    </Link>
  );
}
