type UsersName = {
  name: string
}
export const Welcome = ({ name }: UsersName) => {
  return (
    <div>
      <div>{name}</div>
    </div>
  )
}
