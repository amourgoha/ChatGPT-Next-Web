


export default function renderhtmllist({list}){
	return <><div>this is a fetchData page</div>

		{
			list.map(item=>{
				return(<div key={item.id}>
					<p>{item.name}</p>
				</div>)
			})
		}
	</>
}

export async function getServerSideProps(){
	const data = await fetch('https://jsonplaceholder.typicode.com/users')
	const listdata = await data.json()
	return {
		props:{
			list:listdata
		}
	}
}