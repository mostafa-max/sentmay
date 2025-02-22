import { supabase } from "./supabase";

export const getCategories = async (table) => {
    const { data, error } = await supabase
      .from(table)
      .select("category")
      .not("category", 'is', null);
 
    if (error) throw error;
    return [...new Set(data.map((item) => item.category))];
  };

  export const getItem = async (table,id) => {
    const { data, error } = await supabase
      .from(table)
      .select('*')
      .eq('id',id).single()
       
    if (error) throw error;
    return data
  };

const PAGE_SIZE = 9; // Number of items per page

export const getItems = async (table,filters, page) => {
  const from = page * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  // Build the Supabase query
  let query = supabase
  .from(table)
  .select("*", { count: "exact" })
  .range(from, to)
  .order("id", { ascending: false });


  // Apply filters
  if (filters.search) {
    query = query.ilike("name", `%${filters.search}%`);
  }

  if (filters.category) {
    query = query.eq("category", filters.category);
  }

  // Execute the query
  const { data, error, count } = await query;
  if (error) throw error;

  return {
    data: data || [],
    total: count || 0,
    hasMore: (to + 1) < count,
  };
};
