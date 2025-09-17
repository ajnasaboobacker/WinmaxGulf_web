import { Skeleton } from "@/components/ui/skeleton";

export const ImageSkeleton = ({ className = "" }: { className?: string }) => (
  <Skeleton className={`rounded-lg ${className}`} />
);

export const CardSkeleton = () => (
  <div className="p-6 border rounded-lg">
    <Skeleton className="h-12 w-12 rounded-lg mb-4" />
    <Skeleton className="h-6 w-3/4 mb-2" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-2/3" />
  </div>
);

export const ServiceCardSkeleton = () => (
  <div className="group relative overflow-hidden rounded-xl border bg-card p-8">
    <Skeleton className="h-16 w-16 rounded-lg mb-6" />
    <Skeleton className="h-7 w-3/4 mb-4" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-5/6 mb-6" />
    <Skeleton className="h-10 w-32 rounded-md" />
  </div>
);

export const TestimonialSkeleton = () => (
  <div className="bg-card border rounded-lg p-6">
    <div className="flex items-center mb-4">
      <Skeleton className="h-12 w-12 rounded-full mr-4" />
      <div>
        <Skeleton className="h-5 w-24 mb-1" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-4/5" />
  </div>
);

export const GallerySkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Array.from({ length: 6 }).map((_, i) => (
      <Skeleton key={i} className="aspect-[4/3] rounded-lg" />
    ))}
  </div>
);