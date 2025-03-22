import Link from "next/link";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { Button } from "@/components/ui/Button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-blue-600 dark:text-blue-400">
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-3 text-slate-900 dark:text-white">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
            Sorry, the page you are looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link href="/">
            <Button className="gap-2">
              <ArrowLeft size={16} /> Go Back Home
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
