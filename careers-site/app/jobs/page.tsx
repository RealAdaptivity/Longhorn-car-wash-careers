import OpenPositions from "@/components/OpenPositions";
import Link from "next/link";

export default function JobsPage() {
  return (
    <>
      <div className="bg-white border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
      <OpenPositions />
    </>
  );
}
