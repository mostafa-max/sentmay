import { useQuery } from "@tanstack/react-query";
import { getCategories, getItems } from "../_lib/data_service";

export const useItems = (table,filters, page) => {
  return useQuery({
    queryKey: [table, filters, page], // Unique key for caching
    queryFn: () => getItems(table,filters, page), // Calls the service function
    keepPreviousData: true, // Keeps previous data while fetching new results
  });


};
export const useCats = (table) => {
  return useQuery({
    queryKey: [table, "category"], // Unique key for caching
    queryFn: () => getCategories(table), // Calls the service function
    keepPreviousData: true, // Keeps previous data while fetching new results
  });
};
