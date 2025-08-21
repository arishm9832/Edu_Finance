import { Suspense } from "react";
import { getUserAccounts } from "@/actions/dashboard";
import { getDashboardData } from "@/actions/dashboard";
import { getCurrentBudget } from "@/actions/budget";
import { AccountCard } from "./_components/account-card";
import { CreateAccountDrawer } from "@/components/create-account-drawer";
import { BudgetProgress } from "./_components/budget-progress";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, BookOpen, Target, Award, Calculator, TrendingUp, PieChart } from "lucide-react";
import { DashboardOverview } from "./_components/transaction-overview";

export default async function DashboardPage() {
  const [accounts, transactions] = await Promise.all([
    getUserAccounts(),
    getDashboardData(),
  ]);

  const defaultAccount = accounts?.find((account) => account.isDefault);

  // Get budget for default account
  let budgetData = null;
  if (defaultAccount) {
    budgetData = await getCurrentBudget(defaultAccount.id);
  }

  return (
    <div className="space-y-8">
      {/* Learning Progress Section */}
      {/* <div className="grid gap-4 md:grid-cols-3 mb-8">
        <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold text-blue-800">Current Module</h3>
            </div>
            <p className="text-2xl font-bold text-blue-900">Investment Basics</p>
            <p className="text-sm text-blue-600 mt-1">Chapter 3 of 8</p>
            <div className="mt-3 bg-blue-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-teal-50 to-teal-100 border-teal-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-teal-600" />
              <h3 className="font-semibold text-teal-800">Learning Streak</h3>
            </div>
            <p className="text-2xl font-bold text-teal-900">12 Days</p>
            <p className="text-sm text-teal-600 mt-1">Keep it up! 🔥</p>
            <div className="mt-3 bg-teal-200 rounded-full h-2">
              <div className="bg-teal-600 h-2 rounded-full" style={{ width: '80%' }}></div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-indigo-50 to-indigo-100 border-indigo-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-indigo-600" />
              <h3 className="font-semibold text-indigo-800">Certificates</h3>
            </div>
            <p className="text-2xl font-bold text-indigo-900">3 Earned</p>
            <p className="text-sm text-indigo-600 mt-1">2 in progress</p>
            <div className="mt-3 bg-indigo-200 rounded-full h-2">
              <div className="bg-indigo-600 h-2 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </CardContent>
        </Card>
      </div> */}

      {/* Budget Progress - Educational Context */}
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="w-6 h-6 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-800">Practice Budget Management</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Learning Exercise</span>
          </div>
          <BudgetProgress
            initialBudget={budgetData?.budget}
            currentExpenses={budgetData?.currentExpenses || 0}
          />
        </CardContent>
      </Card>

      {/* Dashboard Overview - Educational Context */}
      <Card className="bg-gradient-to-r from-slate-50 to-teal-50 border-teal-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="w-6 h-6 text-teal-600" />
            <h3 className="text-xl font-semibold text-gray-800">Financial Analytics Practice</h3>
            <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">Interactive Tool</span>
          </div>
          <DashboardOverview
            accounts={accounts}
            transactions={transactions || []}
          />
        </CardContent>
      </Card>

      {/* Learning Modules Grid */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <PieChart className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-gray-800">Practice Accounts</h2>
          <span className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">Simulation Environment</span>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
  <CreateAccountDrawer>
    <Card className="
      cursor-pointer 
      border-2 border-dashed border-blue-300 
      bg-gradient-to-r from-blue-100 via-teal-100 to-blue-200 
      hover:from-blue-200 hover:via-teal-200 hover:to-blue-300 
      shadow-sm hover:shadow-md 
      transition-all duration-300
    ">
      <CardContent className="flex flex-col items-center justify-center text-blue-700 h-full pt-5">
        <Plus className="h-10 w-10 mb-2 text-blue-600" />
        <p className="text-sm font-medium">Create Practice Account</p>
        <p className="text-xs text-blue-500 mt-1">Safe learning environment</p>
      </CardContent>
    </Card>
  </CreateAccountDrawer>

  {accounts.length > 0 &&
    accounts.map((account) => (
      <div key={account.id} className="relative rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white border border-blue-200">
        <AccountCard account={account} />
        <div className="absolute top-2 right-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full select-none">
          Practice
        </div>
      </div>
    ))}
</div>

      </div>

    </div>
  );
}