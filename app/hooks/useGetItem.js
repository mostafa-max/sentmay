import { useQuery } from "@tanstack/react-query";
import { getItem } from "../_lib/data_service";

 const useGetItem = (table,id) => {
    return useQuery({
      queryKey: [table, id], // Unique key for caching
      queryFn: () => getItem(table,id), // Calls the service function
      keepPreviousData: true, // Keeps previous data while fetching new results
    });
  };
   export default useGetItem;