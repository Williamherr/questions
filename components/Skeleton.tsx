import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const NowCardSkeleton = () => {
  return (
    <Card className="inline-block w-[226px] h-[408px]">
      <CardHeader className="text-center pb-1">
        <CardTitle>
          <Skeleton className="h-4 w-full" />
        </CardTitle>
        <Skeleton className="m-auto h-4 w-[40px]" />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col text-left items-center p-2 gap-4">
          <Skeleton className="h-12 w-full" />
          <Skeleton className="m-auto h-4 w-[40px]" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>
      </CardContent>
    </Card>
  );
};

const DayCardSkeleton = () => {
  return (
    <Card className="inline-block">
      <div className="flex flex-col text-center items-center p-4 gap-4 w-[80px]  h-[200px]">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    </Card>
  );
};

export { DayCardSkeleton, NowCardSkeleton };
