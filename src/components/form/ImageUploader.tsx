"use client"

import * as React from "react"
import { useDropzone, DropzoneOptions } from "react-dropzone"
import { UploadCloud, X, ImageIcon } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface ImageUploaderProps {
  onUpload: (files: File[]) => void
  multiple?: boolean
  maxFiles?: number
  className?: string
  value?: string[] // existing image URLs
  onRemove?: (index: number) => void
}

export function ImageUploader({
  onUpload,
  multiple = false,
  maxFiles = 1,
  className,
  value = [],
  onRemove,
}: ImageUploaderProps) {
  const [previews, setPreviews] = React.useState<string[]>([])

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    // Generate object URLs for previewing newly dropped files
    const newPreviews = acceptedFiles.map((file) => URL.createObjectURL(file))
    
    if (multiple) {
      setPreviews((prev) => [...prev, ...newPreviews].slice(0, maxFiles))
    } else {
      setPreviews(newPreviews)
    }

    onUpload(acceptedFiles)
  }, [multiple, maxFiles, onUpload])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/webp": [],
    },
    maxFiles: multiple ? maxFiles : 1,
    multiple,
  })

  // Cleanup object URLs to avoid memory leaks
  React.useEffect(() => {
    return () => {
      previews.forEach((preview) => URL.revokeObjectURL(preview))
    }
  }, [previews])

  // Combine external existing values with local new previews
  const allImages = [...value, ...previews]

  return (
    <div className={cn("w-full space-y-4", className)}>
      <div
        {...getRootProps()}
        className={cn(
          "flex flex-col items-center justify-center w-full min-h-[160px] border-2 border-dashed rounded-lg cursor-pointer transition-colors bg-muted/20 hover:bg-muted/50",
          isDragActive ? "border-primary bg-primary/5" : "border-muted-foreground/25"
        )}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-muted-foreground">
          <UploadCloud className="w-10 h-10 mb-3 text-muted-foreground/50" />
          <p className="mb-2 text-sm">
            <span className="font-semibold text-primary">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs">
            SVG, PNG, JPG or WEBP (max. 800x400px)
          </p>
        </div>
      </div>

      {allImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {allImages.map((src, index) => (
            <div key={index} className="relative group aspect-square rounded-md border bg-muted overflow-hidden">
              <Image
                src={src}
                alt={`Upload preview ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="w-8 h-8 rounded-full"
                  onClick={(e) => {
                    e.stopPropagation()
                    if (index < value.length) {
                      onRemove?.(index)
                    } else {
                      // Remove from local previews
                      const localIndex = index - value.length
                      setPreviews((prev) => prev.filter((_, i) => i !== localIndex))
                    }
                  }}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
