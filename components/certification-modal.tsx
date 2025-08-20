"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Download } from "lucide-react"
import Image from "next/image"

interface CertificationModalProps {
  isOpen: boolean
  onClose: () => void
  certification: {
    title: string
    provider: string
    icon: string
    image?: string
  }
}

export function CertificationModal({ isOpen, onClose, certification }: CertificationModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <DialogHeader className="flex flex-row items-center justify-between">
          <DialogTitle className="text-xl font-semibold">{certification.title}</DialogTitle>
          <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-8">
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
            <span className="text-2xl">{certification.icon}</span>
            <div>
              <h3 className="font-semibold">{certification.title}</h3>
              <p className="text-sm text-muted-foreground">Issued by {certification.provider}</p>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full bg-muted/30 rounded-lg overflow-hidden">
            {certification.image ? (
              <Image
                src={certification.image || "/placeholder.svg"}
                alt={`${certification.title} Certificate`}
                fill
                className="object-contain"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-2">
                  <span className="text-4xl">{certification.icon}</span>
                  <p className="text-muted-foreground">Certificate image will be displayed here</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            {certification.image && (
              <Button asChild>
                <a href={certification.image} download target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
