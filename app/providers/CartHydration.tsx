"use client";

import { useEffect } from "react";
import { useCartStore } from "@/lib/store/cartStore";

export function CartHydration() {
  useEffect(() => {
    useCartStore.persist.rehydrate()?.then(() => {
      useCartStore.getState().setHasHydrated(true);
    });
  }, []);

  return null;
}
