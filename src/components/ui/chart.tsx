"use client";

import * as React from "react";
import * as RechartsPrimitive from "recharts";

import { cn } from "./utils";

// Примитивы из Recharts
const ChartContainer = RechartsPrimitive.ResponsiveContainer;

const ChartTooltip = RechartsPrimitive.Tooltip;

const ChartLegend = RechartsPrimitive.Legend;

// Экспортируем примитивы для использования
export { ChartContainer, ChartTooltip, ChartLegend };

// ChartTooltipContent компонент
function ChartTooltipContent({
  active,
  payload = [],
  className,
  indicator = "dot",
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
}: {
  active?: boolean;
  payload?: Array<any>;
  className?: string;
  indicator?: "line" | "dot" | "dashed";
  hideLabel?: boolean;
  hideIndicator?: boolean;
  label?: string;
  labelFormatter?: (value: any, payload: any) => React.ReactNode;
  labelClassName?: string;
  formatter?: (value: any, name: any, item: any, index: number) => React.ReactNode;
  color?: string;
}) {
  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div
      className={cn(
        "bg-background text-foreground shadow-md rounded-lg border p-2 min-w-[8rem]",
        className,
      )}
    >
      {!hideLabel && label && (
        <div className={cn("mb-2 border-b pb-2", labelClassName)}>
          {labelFormatter ? labelFormatter(label, payload) : label}
        </div>
      )}
      <div className="grid gap-1.5">
        {payload.map((item: any, index: number) => {
          const indicatorColor = color || item.color || item.payload?.fill;

          return (
            <div
              key={item.dataKey}
              className={cn(
                "[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5",
                indicator === "dot" && "items-center",
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index)
              ) : (
                <>
                  {!hideIndicator && (
                    <div
                      className={cn(
                        "shrink-0 rounded-[2px]",
                        indicator === "dot" && "h-2.5 w-2.5 rounded-full",
                        indicator === "line" && "w-1",
                        indicator === "dashed" && "w-0 border-l-2 border-dashed",
                      )}
                      style={{
                        backgroundColor: indicator === "dashed" ? undefined : indicatorColor,
                        borderColor: indicator === "dashed" ? indicatorColor : undefined,
                      }}
                    />
                  )}
                  <div className="flex flex-1 justify-between gap-2">
                    <div className="grid gap-1.5">
                      <span className="text-muted-foreground">
                        {item.name}
                      </span>
                    </div>
                    <span className="font-mono tabular-nums">
                      {item.value}
                    </span>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { ChartTooltipContent };

// ChartConfig тип
export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
    color?: string;
    theme?: Record<string, string>;
  }
>;

// Экспортируем все примитивы Recharts для удобства
export const {
  Area,
  Bar,
  Line,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  AreaChart,
  BarChart,
  LineChart,
  PieChart,
  Cell,
} = RechartsPrimitive;