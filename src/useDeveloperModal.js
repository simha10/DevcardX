import { useState } from "react";

export default function useDeveloperModal() {
  const [open, setOpen] = useState(false);

  return {
    open,
    show: () => setOpen(true),
    hide: () => setOpen(false),
  };
}
