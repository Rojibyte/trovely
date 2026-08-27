import Container from "@/components/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <Container>
      <section className="py-12 flex flex-col gap-8">
        <Skeleton className="font-heading text-3xl text-(--ink1)" />

        <div className="flex gap-16 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <Skeleton className="font-heading text-xl text-(--ink1)" />

            <div>
              <Skeleton />
              <Skeleton className="rounded-lg px-4 py-3" />
            </div>

            <div>
              <Skeleton />
              <Skeleton className="rounded-lg px-4 py-3" />
            </div>

            <div>
              <Skeleton />
              <Skeleton className="rounded-lg px-4 py-3" />
            </div>

            <div className="flex gap-4">
              <div>
                <Skeleton />
                <Skeleton className="rounded-lg px-4 py-3" />
              </div>

              <div>
                <Skeleton />
                <Skeleton className="rounded-lg px-4 py-3" />
              </div>
            </div>

            <Skeleton className="w-fit rounded-2xl bg-(--action) text-background font-sans text-sm font-medium px-8 py-4 cursor-pointer transition-all duration-350 ease-out hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed" />
          </div>
        </div>
      </section>
    </Container>
  );
}
