
export default function list({listdatas}){
	return (
		<>
			{listdatas.map(item =>{
				return (<div key="item.id">
					<div>{item.content}</div>
				</div>)
			})}
		</>
	)
}