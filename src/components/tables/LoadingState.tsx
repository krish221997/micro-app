import { Skeleton } from "../ui/skeleton";

export const LoadingState = () => {
  return (
    <div className="flex flex-col space-y-1">
      <div className="flex space-x-2 justify-between pb-2">
        <Skeleton className="h-10 w-[350px] bg-gray-300" />
        <div className="flex space-x-2">
          <Skeleton className="h-10 w-[100px] bg-gray-300" />
          <Skeleton className="h-10 w-[100px] bg-gray-300" />
          <Skeleton className="h-10 w-[100px] bg-gray-300" />
        </div>
      </div>
      {Array.from({ length: 10 }).map((_, index) => (
        <Skeleton key={index} className="h-10 bg-gray-300" />
      ))}
      <div className="flex space-x-2 justify-end pt-2">
        <Skeleton className="h-10 w-[100px] bg-gray-300" />
        <Skeleton className="h-10 w-[100px] bg-gray-300" />
      </div>
    </div>
  );
};
