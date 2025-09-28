import Dashboard from '../../components/dashboard/dashboard'
import WorkflowDashboard from '../../components/dashboard/workflowDashboard'
import Navbar from '../../components/Navbar';


function DashboardPage() {
  return (
    <>
    <Navbar />
    <div className='p-18 min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 p-4 relative overflow-hidden'>
      {/* <Dashboard /> */}
      <WorkflowDashboard />
    </div>
    </>
  );
}

export default DashboardPage;
