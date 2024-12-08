"use client";

import * as React from "react";
import { useQueryState } from "nuqs";

import { dataTableConfig, type DataTableConfig } from "@/config/data-table";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type FeatureFlagValue = DataTableConfig["featureFlags"][number]["value"];

interface DataTableContextProps {
  featureFlags: FeatureFlagValue[];
  setFeatureFlags: (value: FeatureFlagValue[]) => void;
}

const DataTableContext = React.createContext<DataTableContextProps>({
  featureFlags: [],
  setFeatureFlags: () => {},
});

export function useDataTable() {
  const context = React.useContext(DataTableContext);
  if (!context) {
    throw new Error("useDataTable must be used within a DataTableProvider");
  }
  return context;
}

interface DataTableProviderProps {
  children: React.ReactNode;
  dataTableConfig: DataTableConfig;
}

export function DataTableProvider({
  children,
  dataTableConfig,
}: DataTableProviderProps) {
  const [featureFlags, setFeatureFlags] = useQueryState<FeatureFlagValue[]>(
    "featureFlags",
    {
      defaultValue: [],
      parse: (value) => value.split(",") as FeatureFlagValue[],
      serialize: (value) => value.join(","),
      eq: (a, b) =>
        a.length === b.length && a.every((value, index) => value === b[index]),
      clearOnDefault: true,
    }
  );

  return (
    <DataTableContext.Provider
      value={{
        featureFlags,
        setFeatureFlags: (value) => void setFeatureFlags(value),
      }}
    >
      <div className="w-full overflow-x-auto">
        <ToggleGroup
          type="multiple"
          variant="outline"
          size="sm"
          value={featureFlags}
          onValueChange={(value: FeatureFlagValue[]) => setFeatureFlags(value)}
          className="w-fit"
        >
          {dataTableConfig.featureFlags.map((flag) => (
            <Tooltip key={flag.value}>
              <ToggleGroupItem
                value={flag.value}
                className="whitespace-nowrap px-3 text-xs"
                asChild
              >
                <TooltipTrigger>
                  <flag.icon
                    className="mr-2 size-3.5 shrink-0"
                    aria-hidden="true"
                  />
                  {flag.label}
                </TooltipTrigger>
              </ToggleGroupItem>
              <TooltipContent
                align="start"
                side="bottom"
                sideOffset={6}
                className="flex max-w-60 flex-col space-y-1.5 border bg-background py-2 font-semibold text-foreground"
              >
                <div>{flag.tooltipTitle}</div>
                <div className="text-xs text-muted-foreground">
                  {flag.tooltipDescription}
                </div>
              </TooltipContent>
            </Tooltip>
          ))}
        </ToggleGroup>
      </div>
      {children}
    </DataTableContext.Provider>
  );
}