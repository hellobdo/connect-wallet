interface HeaderProps {
  userAccount: string;
}

export function Header( {userAccount}: HeaderProps) {



  return (
    <div>
      <h1>{userAccount == ""? "Not connected" : userAccount}</h1>
    </div>
  );

}