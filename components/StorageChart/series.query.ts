import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getSeries } from "../../api/api";
import { Series } from "./series.model";

const keys = {
  all: ['series'],
  byId: (id: string) => [...keys.all, id],
} as const;

const useCashedSeriesInitialData = (id: string) => {
  const queryClient = useQueryClient();
  return {
    initialData() {
      return queryClient
        .getQueryData<Series[]>(keys.all)
        ?.find((t) => t.id === id);
    },
  }
}

const useSeries = () => {
  return useQuery(keys.all, getSeries);
}

export {
  keys,
  useCashedSeriesInitialData,
  useSeries,
}
