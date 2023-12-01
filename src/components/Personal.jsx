export function Personal () {
  return (
    <>
      <label htmlFor="user-name">Full Name</label>
      <input type="text" id="user-name" name="user-name" />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />

      <label htmlFor="phone">Phone Number</label>
      <input type="number" id="phone" name="phone" />

      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" />
    </>
  )
}