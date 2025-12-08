import React from "react";

export default function DeveloperModal({ open, hide, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={hide}
    >
      <div
        className="animate-[fadeIn_0.35s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}
