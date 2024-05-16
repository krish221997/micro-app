import { ConnectionsList } from "@/components/sections/Settings/ConnectionsList";
import useListConnectionDefinitions from "@/hooks/useListConnectionDefinitions";
import useListConnections from "@/hooks/useListConnections";
import { Skeleton } from "@/components/ui/skeleton";

export const ControlledConnectionsList = () => {
  const { data: connections, isLoading: isLoadingConnections } =
    useListConnections();

  const {
    data: connectionDefinitions,
    isLoading: isLoadingConnectionDefinitions,
  } = useListConnectionDefinitions();

  return (
    <>
      {!isLoadingConnections &&
        !isLoadingConnectionDefinitions &&
        connectionDefinitions &&
        connections && (
          <ConnectionsList
            connectionDefinitions={connectionDefinitions}
            connections={connections}
          />
        )}
      {(isLoadingConnections || isLoadingConnectionDefinitions) && (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div className="flex flex-col space-y-3" key={index}>
              <Skeleton className="h-[125px]  bg-gray-300 rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4  bg-gray-300" />
                <Skeleton className="h-4  bg-gray-300" />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
