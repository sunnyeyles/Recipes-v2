type UsersName = {
  name: string
}
export const Welcome = ({ name }: UsersName) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-orange-100">
      <div className="px-60 py-20 bg-orange-200 rounded-lg">
        <h1 className="text-2xl animate-ping-slow">Welcome {name}</h1>
      </div>
    </div>
  )
}
