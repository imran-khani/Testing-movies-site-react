import Greeting from "./Greeting"
const Dashboard = () => {
  return (
    <div className="flex flex-col justify-center align-center mt-8">
      <h1 className="text-4xl font-bold text-center ">Hello to Dashboard</h1>
      <div>
        <Greeting />
      </div>
    </div>
  )
}

export default Dashboard
