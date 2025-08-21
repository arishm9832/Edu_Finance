import DashboardPage from "./page";
import { BarLoader } from "react-spinners";
import { Suspense } from "react";
import { GraduationCap, BookOpen, TrendingUp } from "lucide-react";

export default function Layout() {
  return (
    <div className="px-5 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="flex items-center justify-between mb-8 pt-6">
        <div className="flex items-center gap-4">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-full p-3">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Learning Dashboard
            </h1>
            <p className="text-gray-600 mt-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              Track your financial education journey
            </p>
          </div>
        </div>
        
        {/* Progress Indicator */}
        <div className="hidden md:flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-blue-200">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <div className="text-sm">
            <div className="font-semibold text-gray-800">Overall Progress</div>
            <div className="text-blue-600">85% Complete</div>
          </div>
        </div>
      </div>
      
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center py-8">
            <BarLoader 
              className="mt-4" 
              width={"100%"} 
              color="#2563eb" 
            />
            <p className="text-gray-600 mt-4 text-sm">Loading your financial learning dashboard...</p>
          </div>
        }
      >
        <DashboardPage />
      </Suspense>
    </div>
  );
}