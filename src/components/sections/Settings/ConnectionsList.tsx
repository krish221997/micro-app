import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { ConnectionDefinitions } from "@/types/connection-definition";
import { Connections } from "@/types/connections";
import { CheckCircleIcon } from "lucide-react";
import Image from "next/image";

interface IProps {
  connections: Connections;
  connectionDefinitions: ConnectionDefinitions;
}

export const ConnectionsList = ({
  connections,
  connectionDefinitions,
}: IProps) => {
  const uniqueConnections = connections?.rows.filter(
    (value, index, self) =>
      self.findIndex(
        (t) => t.connectionDefinitionId === value.connectionDefinitionId
      ) === index
  );

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {uniqueConnections?.map((connection, index) => {
        const connectionDefinition = connectionDefinitions?.rows.find(
          (definition) => definition._id === connection.connectionDefinitionId
        );

        return (
          connectionDefinition && (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center space-x-2 py-3 relative">
                <Image
                  src={connectionDefinition?.frontend?.spec?.image as string}
                  alt={connectionDefinition?.name as string}
                  width={32}
                  height={32}
                  className="pt-3"
                />
                <h2
                  style={{ width: "65%", wordWrap: "break-word" }}
                  className="font-semibold text-md pt-3"
                >
                  {connectionDefinition?.name}
                </h2>
                <Badge
                  className="absolute top-3 right-3 px-1 py-0 bg-green-700 hover:bg-green-700 text-white"
                  style={{ fontSize: "0.6rem" }}
                >
                  <CheckCircleIcon className="w-3 h-3 mr-1" />
                  Connected
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {connectionDefinition?.frontend?.spec?.description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        );
      })}
    </div>
  );
};
