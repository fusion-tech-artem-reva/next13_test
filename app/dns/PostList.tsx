export const PostList = async () => {
  await new Promise((r) => setTimeout(() => r(1), 5000));
  const resposne = await fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'});
  const data = await resposne.json() as {userId: number; id: number; body: string}[];

  console.log('>>>>')
  return (
    <ul>
      {data.map((item) => {
        return <li key={item.id}>
          {item.body}
        </li>
      })}
    </ul>
  )

}