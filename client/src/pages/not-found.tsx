import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <Card className="w-full max-w-md mx-4 dark:border-gray-700">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500 dark:text-red-400" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              404 Page Not Found
            </h1>
          </div>

          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            Sorry, the page you're looking for couldn't be found. It might have
            been moved or doesn't exist.
          </p>

          <div className="mt-6">
            <Button
              onClick={() => (window.location.href = "/")}
              className="w-full flex items-center justify-center gap-2"
            >
              <Home size={16} />
              Go to Home Page
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
