import React from "react";

type Props = {
  onFiles?: (files: FileList) => void;
  className?: string;
};

export default function DropzoneUpload({ onFiles, className = "" }: Props) {
  const [active, setActive] = React.useState(false);
  function onDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setActive(true);
  }
  function onDragLeave(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setActive(false);
  }
  function onDrop(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    setActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length) onFiles?.(e.dataTransfer.files);
  }
  return (
    <div
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      className={`border-2 border-dashed rounded p-6 text-center ${active ? "border-primary-600 bg-primary-50" : "border-gray-300"} ${className}`}
    >
      Drag and drop files here
    </div>
  );
}
