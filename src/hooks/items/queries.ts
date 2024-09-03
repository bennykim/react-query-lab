import { useQuery } from "@tanstack/react-query";

import { apiService } from "@/api";
import { KEY_ITEM, KEY_ITEMS } from "@/constants";
import { toUIItem, toUIItems } from "@/lib/utils";

import type { Item } from "@/mocks/model";

export const useItems = (groupId: string) => {
  return useQuery<Item[], Error, UIItems>({
    queryKey: [KEY_ITEMS, groupId],
    queryFn: () => apiService.getAllItems(groupId),
    enabled: !!groupId,
    select: toUIItems,
  });
};

export const useItem = (groupId: string, itemId: string) => {
  return useQuery<Item, Error, UIItem>({
    queryKey: [KEY_ITEM, groupId, itemId],
    queryFn: () => apiService.getItemById(groupId, itemId),
    enabled: !!groupId && !!itemId,
    select: toUIItem,
  });
};
