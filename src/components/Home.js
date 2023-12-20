// Filename - component/home.js

import React from "react";

function Home() {
	const arrayOfObjects=[
		{method:'get',url:'http://jsonplaceholder.com'},
		{method:'PUT',url:'http://jsonplaceholder.com'},
		{method:'POST',url:'http://jsonplaceholder.com'}
	]
	localStorage.setItem("arrayOfObjects",JSON.stringify(arrayOfObjects));
	const data = JSON.parse(localStorage.getItem("arrayOfObjects"));
	console.log(data)

	return (
		<div>
			<ul>
			{data.map((items)=>(
				<li>{items.method},{items.url}</li>
			))}
			</ul>

		</div>
	)
}

export default Home;
