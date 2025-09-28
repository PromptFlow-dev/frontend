import Dashboard from '../../components/dashboard/dashboard'
import WorkflowDashboard from '../../components/dashboard/workflowDashboard'


function DashboardPage() {
  return (
    <>
    <div className='min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 p-4 relative overflow-hidden'>
      {/* <Dashboard /> */}
      <WorkflowDashboard />
    </div>
    </>
  );
}

export default DashboardPage;
