"use client";

import { useRef, useEffect } from "react";
import { Camera, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import useFetch from "@/hooks/use-fetch";
import { scanReceipt } from "@/actions/transaction";

export function ReceiptScanner({ onScanComplete }) {
  const fileInputRef = useRef(null);

  const {
    loading: scanReceiptLoading,
    fn: scanReceiptFn,
    data: scannedData,
  } = useFetch(scanReceipt);

  const handleReceiptScan = async (file) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should be less than 5MB");
      return;
    }
    await scanReceiptFn(file);
  };

  useEffect(() => {
    if (scannedData && !scanReceiptLoading) {
      onScanComplete(scannedData);
      toast.success("Receipt scanned successfully");
    }
  }, [scanReceiptLoading, scannedData]);

  return (
    <div className="flex items-center gap-4">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        capture="environment"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleReceiptScan(file);
        }}
      />
      <Button
        type="button"
        variant="outline"
        className="
          w-full h-10
          bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200
          border border-blue-200
          text-blue-800
          hover:bg-gradient-to-r hover:from-blue-200 hover:via-teal-100 hover:to-blue-100
          hover:border-blue-300
          hover:text-blue-900
          shadow-sm hover:shadow-md
          transition-all duration-300
          font-semibold
        "
        onClick={() => fileInputRef.current?.click()}
        disabled={scanReceiptLoading}
      >
        {scanReceiptLoading ? (
          <>
            <Loader2 className="mr-2 animate-spin text-blue-600" />
            <span className="text-blue-700">Scanning Receipt...</span>
          </>
        ) : (
          <>
            <Camera className="mr-2 text-blue-500" />
            <span>Scan Receipt with AI</span>
          </>
        )}
      </Button>
    </div>
  );
}
